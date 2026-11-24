#!/usr/bin/env node
'use strict';
/**
 * Headless check for Kite Day.
 *   node tools/check.js
 * Uses puppeteer-core (or puppeteer) and a local Chrome.
 * Env: CHROME=/path/to/chrome
 */
const fs = require('fs');
const path = require('path');
const http = require('http');

function loadPuppeteer() {
  const candidates = ['puppeteer-core', 'puppeteer', '/tmp/pptr/node_modules/puppeteer-core'];
  for (const name of candidates) {
    try { return require(name); } catch (e) {}
  }
  throw new Error('puppeteer-core is not installed. npm install puppeteer-core (or NODE_PATH=/tmp/pptr/node_modules).');
}

function findChrome() {
  const env = process.env.CHROME;
  const list = [env, '/usr/bin/google-chrome', '/usr/bin/google-chrome-stable', '/usr/bin/chromium', '/usr/bin/chromium-browser'].filter(Boolean);
  for (const p of list) if (fs.existsSync(p)) return p;
  throw new Error('Chrome not found. Set CHROME.');
}

function serve(root) {
  const types = { '.html': 'text/html', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.css': 'text/css' };
  return http.createServer((req, res) => {
    const url = decodeURIComponent(req.url.split('?')[0]);
    let file = path.normalize(path.join(root, url));
    if (!file.startsWith(root)) { res.writeHead(403); res.end(); return; }
    if (url === '/' || url.endsWith('/')) file = path.join(file, 'index.html');
    fs.readFile(file, (err, data) => {
      if (err) { res.writeHead(404); res.end('no'); return; }
      res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' });
      res.end(data);
    });
  });
}

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

(async () => {
  const root = path.resolve(__dirname, '..', '..');
  const dir = path.join(root, '2026-11-24-kite-day');
  const puppeteer = loadPuppeteer();
  const server = serve(root);
  await new Promise(r => server.listen(0, '127.0.0.1', r));
  const port = server.address().port;
  const url = 'http://127.0.0.1:' + port + '/2026-11-24-kite-day/index.html';
  const errors = [];
  const browser = await puppeteer.launch({
    executablePath: findChrome(),
    headless: 'new',
    args: ['--no-sandbox', '--disable-gpu', '--autoplay-policy=no-user-gesture-required']
  });
  try {
    const page = await browser.newPage();
    page.on('pageerror', err => errors.push('pageerror: ' + err.message));
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push('console: ' + msg.text());
    });
    await page.setViewport({ width: 1000, height: 640, deviceScaleFactor: 1 });
    await page.goto(url, { waitUntil: 'load', timeout: 30000 });
    await page.waitForFunction(() => window.KITE && window.KITE.ready);

    const before = await page.evaluate(() => window.KITE.soundOn);
    assert(before === false, 'sound should be off before the first tap');

    await page.evaluate(() => { window.KITE.manual = true; });
    const t0 = Date.now();
    const idle = await page.evaluate(() => window.KITE.runPattern('idle', 180));
    console.log('idle', JSON.stringify({
      ok: idle.ok, crashes: idle.crashes, loops: idle.loops, faults: idle.faults,
      minAlt: Math.round(idle.minAlt), minFly: Math.round(idle.minFly), maxAlt: Math.round(idle.maxAlt),
      maxSpeed: Math.round(idle.maxSpeed), maxTail: Math.round(idle.maxTail),
      sawShower: idle.snap.sawShower, sawRainbow: idle.snap.sawRainbow, sawBird: idle.snap.sawBird,
      flight: +idle.snap.bestFlight.toFixed(1), height: idle.snap.bestHeight, state: idle.snap.state,
      ms: 0
    }));
    assert(idle.ok, 'idle sim produced a non-finite state');
    assert(idle.faults === 0, 'idle faults ' + idle.faults);
    assert(idle.crashes === 0, 'idle crashed ' + idle.crashes + ' times');
    assert(idle.maxSpeed < 500, 'idle speed ' + idle.maxSpeed);
    assert(idle.maxTail < 250, 'idle tail ' + idle.maxTail);
    assert(Math.abs(idle.snap.spin) <= 8.01, 'spin clamp');
    assert(idle.snap.len >= idle.snap.minL - 0.1 && idle.snap.len <= idle.snap.maxL + 0.1, 'line length out of range');
    assert(idle.snap.sawShower, 'expected a shower during a 3 minute idle flight');
    assert(idle.snap.sawRainbow, 'expected a rainbow after the shower');
    assert(idle.snap.sawBird, 'expected birds to visit a high steady kite');
    assert(idle.snap.bestFlight > 60, 'longest flight was not recorded (' + idle.snap.bestFlight + ')');
    assert(idle.snap.bestHeight > 15, 'highest point was not recorded');
    assert(idle.maxAlt > 120, 'kite never climbed');
    assert(idle.minFly < 110, 'kite never dipped once it was flying (' + idle.minFly + ')');
    const stored = await page.evaluate(() => JSON.parse(localStorage.getItem('playbot-kite-day')));
    assert(stored && stored.bestFlight > 60 && stored.bestHeight > 15, 'localStorage records missing: ' + JSON.stringify(stored));

    await page.evaluate(() => window.KITE.reset());
    const play = await page.evaluate(() => window.KITE.runPattern('play', 180));
    console.log('play', JSON.stringify({
      ok: play.ok, crashes: play.crashes, loops: play.loops, faults: play.faults,
      minAlt: Math.round(play.minAlt), maxAlt: Math.round(play.maxAlt),
      maxSpeed: Math.round(play.maxSpeed), maxTail: Math.round(play.maxTail),
      state: play.snap.state, far: play.snap.farState
    }));
    assert(play.ok, 'play sim produced a non-finite state');
    assert(play.faults === 0, 'play faults ' + play.faults);
    assert(play.maxSpeed < 500, 'play speed ' + play.maxSpeed);
    assert(play.maxTail < 250, 'play tail ' + play.maxTail);
    assert(play.loops > 0, 'hard pulls never looped the kite');
    assert(play.crashes > 0, 'hard pulls never crashed (the soft crash path was not exercised)');
    assert(play.snap.state === 'fly' || play.snap.state === 'run' || play.snap.state === 'crash', 'bad state ' + play.snap.state);
    assert(play.snap.farState === 'fly' || play.snap.farState === 'run' || play.snap.farState === 'crash', 'far kite bad');

    await page.evaluate(() => window.KITE.reset());
    const gentle = await page.evaluate(() => window.KITE.runPattern('gentle', 120));
    console.log('gentle', JSON.stringify({ ok: gentle.ok, crashes: gentle.crashes, loops: gentle.loops, faults: gentle.faults }));
    assert(gentle.ok && gentle.faults === 0, 'gentle sim unstable');
    assert(gentle.loops > 0, 'gentle pulls never looped');

    const crashBack = await page.evaluate(() => {
      window.KITE.reset();
      window.KITE.setReel(0);
      window.KITE.step(2);
      const s0 = window.KITE.snapshot();
      const k = s0;
      return k.state;
    });
    assert(crashBack === 'fly' || crashBack === 'run' || crashBack === 'crash', 'step(2) survived into ' + crashBack);

    for (const size of [[390, 844], [844, 390], [360, 740], [1280, 800]]) {
      await page.setViewport({ width: size[0], height: size[1], deviceScaleFactor: 1 });
      const fit = await page.evaluate(async (w, h) => {
        window.KITE.manual = true;
        window.dispatchEvent(new Event('resize'));
        const r = window.KITE.runPattern('idle', 4);
        const pixels = (() => {
          const c = document.getElementById('c');
          const g = c.getContext('2d');
          const d = g.getImageData(0, 0, c.width, c.height).data;
          let top = 0, bot = 0, n = 0;
          const stride = 16;
          for (let y = 2; y < 8; y++) for (let x = 0; x < c.width; x += stride) {
            const i = (y * c.width + x) * 4; top += d[i] + d[i + 1] + d[i + 2]; n++;
          }
          let m = 0;
          for (let y = c.height - 8; y < c.height - 2; y++) for (let x = 0; x < c.width; x += stride) {
            const i = (y * c.width + x) * 4; bot += d[i] + d[i + 1] + d[i + 2]; m++;
          }
          return { top: top / n, bot: bot / m, w: c.width, h: c.height };
        })();
        return { ok: r.ok, faults: r.faults, bw: r.snap.bw, bh: r.snap.bh, pixels, state: r.snap.state };
      }, size[0], size[1]);
      console.log('fit', size.join('x'), JSON.stringify(fit));
      assert(fit.ok && fit.faults === 0, 'unstable at ' + size.join('x'));
      assert(fit.bw >= 160 && fit.bh >= 160, 'buffer too small');
      assert(Math.abs(fit.pixels.top - fit.pixels.bot) > 15, 'sky and meadow look the same at ' + size.join('x'));
    }

    await page.setViewport({ width: 1000, height: 640, deviceScaleFactor: 1 });
    await page.evaluate(() => { window.KITE.manual = false; });
    await new Promise(r => setTimeout(r, 1500));
    const live = await page.evaluate(() => {
      window.KITE.manual = true;
      return window.KITE.snapshot();
    });
    assert(live.finite && live.tailOk, 'live rAF left the kite non-finite');

    await page.evaluate(() => window.KITE.pose());
    const shot = path.join(dir, 'screenshot.png');
    await page.screenshot({ path: shot, type: 'png' });
    const sound = await page.evaluate(() => {
      const beforeClick = window.KITE.soundOn;
      window.KITE.unlockFromPlay();
      return { beforeClick, after: window.KITE.soundOn };
    });
    assert(sound.beforeClick === false, 'sound turned on before the first tap');
    assert(sound.after === true, 'first tap should turn sound on');
    const stat = fs.statSync(shot);
    console.log('screenshot bytes', stat.size, 'sim+live ms', Date.now() - t0);
    assert(errors.length === 0, 'console errors:\n' + errors.join('\n'));
    console.log('ok');
  } finally {
    await browser.close();
    server.close();
  }
})().catch(err => {
  console.error(err);
  process.exit(1);
});

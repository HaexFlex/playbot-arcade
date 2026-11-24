'use strict';
/**
 * Headless checks for Sand-Alchemie.
 *   NODE_PATH=/tmp/sand-test/node_modules node test.js
 * Needs puppeteer-core and Chrome. Does not start a server.
 */
const path = require('path');
const puppeteer = require('puppeteer-core');

const FILE = 'file://' + path.resolve(__dirname, 'index.html');
const CHROME = process.env.CHROME || '/usr/bin/google-chrome-stable';

function fail(msg) {
  console.error('FAIL ' + msg);
  return msg;
}

(async () => {
  const errors = [];
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: 'new',
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--autoplay-policy=no-user-gesture-required']
  });
  const page = await browser.newPage();
  page.on('pageerror', function (e) { errors.push('pageerror: ' + e.message); });
  page.on('console', function (msg) {
    if (msg.type() === 'error') errors.push('console: ' + msg.text());
  });
  await page.evaluateOnNewDocument(function () { window.__startPaused = true; });

  const report = { viewports: [], paint: null, reactions: [], persist: null, fps: null, eszett: null };

  async function boot(width, height, clearStore) {
    await page.setViewport({ width: width, height: height, isMobile: width < 900, hasTouch: true, deviceScaleFactor: 1 });
    await page.goto(FILE, { waitUntil: 'load' });
    await page.waitForFunction('window.__alchemy && window.__alchemy.ready');
    if (clearStore) {
      await page.evaluate(function () { localStorage.clear(); });
      await page.reload({ waitUntil: 'load' });
      await page.waitForFunction('window.__alchemy && window.__alchemy.ready');
    }
    await page.evaluate(function () { window.__alchemy.setPaused(true); });
  }

  await boot(390, 844, true);

  report.eszett = await page.evaluate(function () {
    const html = document.documentElement.innerHTML;
    return { hasEszett: html.indexOf('ß') !== -1, hasGroesse: html.indexOf('Grösse') !== -1, lang: document.documentElement.lang };
  });

  report.viewports.push(await page.evaluate(function () {
    const f = window.__alchemy.field();
    const dock = document.getElementById('dock').getBoundingClientRect();
    const pill = document.getElementById('pill').getBoundingClientRect();
    const buttons = Array.from(document.querySelectorAll('button')).filter(function (b) {
      return !b.closest('[hidden]');
    }).map(function (b) {
      const r = b.getBoundingClientRect();
      return { label: b.getAttribute('aria-label'), w: r.width, h: r.height };
    });
    const sound = document.getElementById('bSound');
    return {
      name: 'phone-portrait',
      field: f,
      dockTop: dock.top,
      pillBottom: pill.bottom,
      gapAboveDock: dock.top - (f.y + f.h),
      gapBelowPill: f.y - pill.bottom,
      smallButtons: buttons.filter(function (b) { return b.h < 40 || b.w < 40; }),
      soundPressed: sound.getAttribute('aria-pressed'),
      unlocks: window.__alchemy.unlocks(),
      paused: window.__alchemy.isPaused()
    };
  }));

  report.paint = await page.evaluate(function () {
    const a = window.__alchemy;
    a.setBrush('sand');
    a.setSize(1);
    const f = a.field();
    return { cols: f.cols, rows: f.rows, cell: f.cell, x: f.x, y: f.y };
  });
  const f = report.paint;
  const x0 = f.x + 8 * f.cell + f.cell / 2;
  const y0 = f.y + 12 * f.cell + f.cell / 2;
  await page.mouse.move(x0, y0);
  await page.mouse.down();
  await page.mouse.move(x0 + f.cell * 18, y0 + f.cell * 3, { steps: 10 });
  await page.mouse.up();
  await page.touchscreen.touchStart(x0, y0 + f.cell * 8);
  await page.touchscreen.touchMove(x0 + f.cell * 10, y0 + f.cell * 8);
  await page.touchscreen.touchEnd();
  report.paint.result = await page.evaluate(function () {
    const a = window.__alchemy;
    const before = a.count('sand');
    const yBefore = [];
    for (let y = 0; y < a.rows; y++) {
      for (let x = 0; x < a.cols; x++) if (a.get(x, y).id === 'sand') yBefore.push(y);
    }
    const minY = Math.min.apply(null, yBefore);
    a.step(6);
    const yAfter = [];
    for (let y = 0; y < a.rows; y++) {
      for (let x = 0; x < a.cols; x++) if (a.get(x, y).id === 'sand') yAfter.push(y);
    }
    return {
      painted: before,
      minY: minY,
      maxYAfter: Math.max.apply(null, yAfter),
      soundAfterTap: document.getElementById('bSound').getAttribute('aria-pressed'),
      status: document.getElementById('status').textContent
    };
  });

  report.reactions = await page.evaluate(function () {
    const a = window.__alchemy;
    const out = [];
    function check(name, ok, extra) { out.push({ name: name, ok: !!ok, extra: extra || '' }); }
    function pit(x, y, w, h) {
      for (let yy = y; yy < y + h; yy++) {
        for (let xx = x; xx < x + w; xx++) {
          if (xx === x || yy === y || xx === x + w - 1 || yy === y + h - 1) a.place(xx, yy, 'stone');
        }
      }
    }

    a.clearGrid();
    a.place(10, a.rows - 1, 'sand');
    a.step(2);
    check('settled sand sleeps', a.activeChunks() === 0 && a.count('sand') === 1, 'chunks ' + a.activeChunks());

    a.clearGrid();
    a.place(12, 4, 'sand');
    a.step(a.rows + 3);
    let sandY = -1;
    for (let y = 0; y < a.rows; y++) if (a.get(12, y).id === 'sand') sandY = y;
    check('sand falls to the floor', sandY === a.rows - 1 && a.activeChunks() === 0, 'y ' + sandY);

    a.clearGrid();
    for (let x = 8; x <= 14; x++) a.place(x, 30, 'stone');
    a.place(9, 29, 'stone'); a.place(13, 29, 'stone');
    a.place(10, 29, 'water'); a.place(11, 29, 'water'); a.place(12, 29, 'water');
    a.step(20);
    check('settled water sleeps', a.activeChunks() === 0 && a.count('water') === 3, 'chunks ' + a.activeChunks() + ' water ' + a.count('water'));

    a.clearGrid();
    a.place(20, 40, 'stone'); a.place(21, 40, 'stone'); a.place(22, 40, 'stone');
    a.place(21, 39, 'lava'); a.place(22, 39, 'water');
    const stone0 = a.count('stone');
    const lava0 = a.count('lava');
    a.step(4);
    check('water+lava = stone+steam', a.count('steam') >= 1 && a.count('lava') < lava0 && a.count('stone') > stone0,
      'steam ' + a.count('steam') + ' lava ' + a.count('lava') + ' stone ' + a.count('stone'));

    a.clearGrid();
    a.place(20, 40, 'stone'); a.place(21, 40, 'stone');
    a.place(20, 39, 'wood'); a.place(21, 39, 'fire');
    a.step(30);
    check('fire burns wood into smoke and ash', a.count('ash') >= 1 && a.count('smoke') >= 1,
      'ash ' + a.count('ash') + ' smoke ' + a.count('smoke'));
    check('smoke and ash discovered', a.unlocks().indexOf('smoke') >= 0 && a.unlocks().indexOf('ash') >= 0, a.unlocks().join(','));
    check('toast says Entdeckt', a.toastLog().some(function (t) { return t.indexOf('Entdeckt!') === 0; }), a.toastLog().join(' | '));

    a.clearGrid();
    a.place(20, 40, 'stone'); a.place(21, 40, 'stone'); a.place(19, 39, 'stone');
    a.place(20, 39, 'oil'); a.place(21, 39, 'fire');
    a.step(3);
    check('fire burns oil into smoke and ash', a.count('ash') >= 1 && a.count('smoke') >= 1,
      'ash ' + a.count('ash') + ' smoke ' + a.count('smoke'));

    a.clearGrid();
    pit(18, 36, 4, 4);
    a.place(19, 38, 'sand');
    a.place(19, 37, 'seed');
    a.place(20, 38, 'stone');
    a.place(20, 37, 'water');
    a.step(24);
    check('seed grows on wet soil', a.count('plant') >= 1, 'plant ' + a.count('plant') + ' seed ' + JSON.stringify(a.get(19, 37)));

    a.clearGrid();
    pit(18, 36, 4, 3);
    a.place(19, 37, 'ice');
    a.place(20, 37, 'salt');
    const salt0 = a.count('salt');
    a.step(24);
    check('salt melts ice', a.count('water') >= 1 && a.count('salt') < salt0,
      'water ' + a.count('water') + ' salt ' + a.count('salt') + ' ice ' + a.count('ice'));

    a.clearGrid();
    pit(16, 36, 6, 3);
    a.place(17, 37, 'wood');
    a.place(18, 37, 'fire');
    a.place(19, 37, 'sand');
    a.step(24);
    check('very hot fire makes glass from sand', a.count('glass') >= 1, 'glass ' + a.count('glass') + ' sand ' + JSON.stringify(a.get(19, 37)) + ' fire ' + JSON.stringify(a.get(18, 37)));

    a.clearGrid();
    a.place(20, 40, 'stone'); a.place(21, 40, 'stone'); a.place(22, 39, 'stone'); a.place(21, 38, 'stone');
    a.place(20, 39, 'metal'); a.place(21, 39, 'acid');
    const bites0 = a.stats().acidBite;
    a.step(40);
    const mid = a.count('metal');
    a.step(50);
    check('acid eats metal slowly', mid === 1 && a.count('metal') === 0 && a.stats().acidBite > bites0,
      'mid ' + mid + ' end ' + a.count('metal') + ' bites ' + a.stats().acidBite);

    a.clearGrid();
    a.place(30, 4, 'cloud');
    const bolts0 = a.stats().bolts;
    a.step(30);
    check('cloud throws lightning', a.stats().bolts > bolts0 && a.unlocks().indexOf('bolt') >= 0,
      'bolts ' + a.stats().bolts);

    a.clearGrid();
    pit(16, 36, 4, 3);
    a.place(17, 37, 'ash');
    a.place(18, 37, 'water');
    a.step(30);
    check('ash and water make salt', a.count('salt') >= 1, 'salt ' + a.count('salt') + ' ash ' + JSON.stringify(a.get(17, 37)));

    a.clearGrid();
    a.place(8, 20, 'plant'); a.place(8, 19, 'stone');
    a.step(40);
    check('plant under stone presses oil', a.count('oil') >= 1, 'oil ' + a.count('oil'));

    a.clearGrid();
    a.place(8, 20, 'water'); a.place(8, 21, 'smoke');
    a.step(3);
    check('smoke in water makes acid', a.count('acid') >= 1, 'acid ' + a.count('acid'));

    a.clearGrid();
    a.place(5, 0, 'steam');
    a.step(2);
    check('steam at the rafters freezes', a.count('ice') >= 1, 'ice ' + a.count('ice') + ' at ' + JSON.stringify(a.get(5, 0)));

    a.clearGrid();
    for (let y = 0; y <= 1; y++) for (let x = 5; x <= 8; x++) a.place(x, y, 'steam');
    a.step(2);
    check('a bank of steam becomes a cloud', a.count('cloud') >= 1, 'cloud ' + a.count('cloud'));

    a.clearGrid();
    a.place(20, 40, 'stone'); a.place(21, 40, 'stone'); a.place(22, 40, 'stone');
    a.place(20, 39, 'wood'); a.place(21, 39, 'fire'); a.place(22, 39, 'stone');
    a.step(40);
    check('very hot fire melts stone to lava', a.count('lava') >= 1, 'lava ' + a.count('lava'));

    a.clearGrid();
    pit(16, 36, 4, 3);
    a.place(17, 37, 'lava');
    a.place(18, 37, 'stone');
    a.step(56);
    check('lava smelts stone to metal', a.count('metal') >= 1, 'metal ' + a.count('metal') + ' stone ' + JSON.stringify(a.get(18, 37)));

    a.clearGrid();
    a.place(4, 10, 'water'); a.place(5, 10, 'fire');
    a.step(2);
    check('water on fire makes steam', a.count('steam') >= 1 && a.count('fire') === 0, 'steam ' + a.count('steam'));

    return out;
  });

  const unlocksBefore = await page.evaluate(function () { return window.__alchemy.unlocks(); });
  await page.reload({ waitUntil: 'load' });
  await page.waitForFunction('window.__alchemy && window.__alchemy.ready');
  report.persist = await page.evaluate(function (prev) {
    const now = window.__alchemy.unlocks();
    const missing = prev.filter(function (k) { return now.indexOf(k) < 0; });
    return { prev: prev.length, now: now.length, missing: missing };
  }, unlocksBefore);

  await page.setViewport({ width: 844, height: 390, isMobile: true, hasTouch: true, deviceScaleFactor: 1 });
  await new Promise(function (r) { setTimeout(r, 150); });
  report.viewports.push(await page.evaluate(function () {
    const f = window.__alchemy.field();
    const dock = document.getElementById('dock').getBoundingClientRect();
    const buttons = Array.from(document.querySelectorAll('#tools button, #elems button')).map(function (b) {
      const r = b.getBoundingClientRect();
      return { label: b.getAttribute('aria-label'), w: r.width, h: r.height };
    });
    return {
      name: 'phone-landscape',
      field: f,
      gapAboveDock: dock.top - (f.y + f.h),
      gapBelowPill: f.y - document.getElementById('pill').getBoundingClientRect().bottom,
      smallButtons: buttons.filter(function (b) { return b.h < 40 || b.w < 36; })
    };
  }));

  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
  await new Promise(function (r) { setTimeout(r, 200); });
  await page.evaluate(function () {
    const a = window.__alchemy;
    a.clearGrid();
    a.setPaused(true);
    for (let y = 1; y < a.rows; y++) {
      for (let x = 0; x < a.cols; x++) {
        const m = (x + y) % 3;
        if (m === 0) a.place(x, y, 'sand');
        else if (m === 1) a.place(x, y, 'water');
      }
    }
    a.resetFrames();
    a.setPaused(false);
  });
  await new Promise(function (r) { setTimeout(r, 2500); });
  report.fps = await page.evaluate(function () { return window.__alchemy.frameStats(); });

  const failures = [];
  if (errors.length) failures.push(fail('console/page errors: ' + errors.join(' || ')));
  if (report.eszett.hasEszett) failures.push(fail('found ß in the page'));
  if (!report.eszett.hasGroesse) failures.push(fail('missing Grösse label'));
  if (report.eszett.lang !== 'de-CH') failures.push(fail('lang ' + report.eszett.lang));
  const portrait = report.viewports[0];
  if (portrait.unlocks.length !== 6) failures.push(fail('expected 6 starters, got ' + portrait.unlocks.join(',')));
  if (portrait.soundPressed !== 'false') failures.push(fail('sound should start off'));
  if (portrait.gapAboveDock < -1) failures.push(fail('portrait dock overlaps field by ' + (-portrait.gapAboveDock)));
  if (portrait.gapBelowPill < -1) failures.push(fail('portrait pill overlaps field'));
  if (portrait.smallButtons.length) failures.push(fail('small buttons ' + JSON.stringify(portrait.smallButtons)));
  if (!(report.paint.result.painted > 8)) failures.push(fail('paint did not leave sand: ' + report.paint.result.painted));
  if (!(report.paint.result.maxYAfter > report.paint.result.minY)) failures.push(fail('painted sand did not fall'));
  if (report.paint.result.soundAfterTap !== 'true') failures.push(fail('sound did not turn on after tap'));
  report.reactions.forEach(function (r) { if (!r.ok) failures.push(fail(r.name + ' — ' + r.extra)); });
  if (report.persist.missing.length) failures.push(fail('lost discoveries ' + report.persist.missing.join(',')));
  const land = report.viewports[1];
  if (land.gapAboveDock < -1) failures.push(fail('landscape dock overlaps field'));
  if (land.smallButtons.length) failures.push(fail('landscape small buttons ' + JSON.stringify(land.smallButtons)));
  if (!(report.fps.med > 0 && report.fps.med <= 18)) failures.push(fail('median frame ' + report.fps.med.toFixed(2) + ' ms'));
  if (!(report.fps.p95 <= 33)) failures.push(fail('p95 frame ' + report.fps.p95.toFixed(2) + ' ms'));
  if (!(report.fps.simAvg < 8)) failures.push(fail('sim avg ' + report.fps.simAvg.toFixed(2) + ' ms'));
  if (land.gapBelowPill < -1) failures.push(fail('landscape pill overlaps field'));

  console.log(JSON.stringify({ errors: errors, paint: report.paint.result, viewports: report.viewports, reactions: report.reactions, persist: report.persist, fps: report.fps, failures: failures.length }, null, 2));
  await browser.close();
  if (failures.length) process.exit(1);
})().catch(function (e) {
  console.error(e);
  process.exit(1);
});

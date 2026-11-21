# Firefly Night (Playbot, 2026-11-21)

A single-file browser arcade game. Open `index.html` in any browser (desktop, tablet, or phone). No external assets: graphics are drawn on a canvas and all sound is synthesized with WebAudio.

## How to play
- **Steer** the firefly with the mouse, arrow keys/WASD, or on touch by dragging anywhere (relative drag, so your finger never hides the firefly).
- Your glow fades, and it fades faster each **Night** (every 20 s, +50 × night bonus). Drink green **dew motes** to refill it. Chain them within 1.6 s for **combo** multipliers. **Gold** motes are worth 5× and refill a lot, but fade after 8 s.
- **Spider webs** slow you and drain glow. The red center (the spider) catches you. Webs appear over time and decay after 45 to 75 s.
- **Moths** chase your light. A bump costs 28 % glow and resets your combo (1.2 s of invulnerability after).
- **Frogs** (from 40 s): one rises from the grass, its eyes glow and an aim line appears (1.15 s warning). The aim locks 0.3 s before the tongue shoots. Dodge sideways, or flare while you are within 290 px to dazzle it (+40).
- **Flare** (hold the mouse button, Space, or the on-screen FLARE button on touch): moths within 220 px flee (+25 per moth chased off screen) and nearby frogs are dazzled. Flaring drains glow fast.
- **Daily challenge**: a seed from today's date (Europe/Rome local date of the device), so everyone gets the same starting layout and spawn sequence. It keeps its own best score per day.
- Keys: P / Esc to pause (the game also auto-pauses when the tab loses focus), M to mute (remembered), Enter to play, D for daily, N for free flight, T for the title.

## What's new in v2 (same day, afternoon)
- WebAudio sound: SFX for eating (pitch climbs with the combo), gold, combo milestones, flare, web, moth bump, chase-off, frog croak, tongue, dazzle, new night, game over, and new best. Also a soft generative ambient loop (slow detuned pad chords Am-F-G-Em, random high twinkles, panned cricket chirps) that gets a bit busier on later nights. Mute button plus the M key, saved in localStorage.
- Frog enemy with a telegraph (glowing eyes, puffing throat, "!", dashed aim line that turns red when locked) and a tongue strike.
- Daily challenge mode with a seeded RNG (mulberry32, FNV hash of the date) and a separate best score.
- Fixed 960×600 world, scaled to fit the screen. This keeps difficulty and the daily seed fair across screen sizes. Portrait screens get extra sky and ground. Fixed 120 Hz physics step.
- Polish: title screen, pause screen, game-over screen with stats (time, night, dew and gold, best combo, moths chased, frogs dazzled, bumps, flare time), touch controls, particles, score popups, flare shockwave ring, screen shake, hit flash and low-glow warning vignette, night banners, spiders on webs, firefly wings and blink, a real crescent moon, a tree line, and background fireflies.

## Balancing (headless sim)
`node tools/sim.js [runs] [tuning-json]` loads the game core straight out of `index.html` and lets three bot players fly. The bots differ in reaction time (re-decide every 0.12 / 0.25 / 0.4 s), aim noise, and awareness (the novice ignores frog telegraphs). Results with the shipped tuning, 300 runs each:

| bot | p25 | median | p75 | mean score | median night | deaths |
|---|---|---|---|---|---|---|
| decent | 2:29 | **3:02** | 3:31 | 15,002 | 10 | light out 76 %, web 12 %, frog 12 % |
| casual | 1:28 | 1:49 | 2:07 | 4,453 | 6 | light out 76 %, web 20 %, frog 4 % |
| novice | 0:42 | 0:59 | 1:18 | 1,741 | 3 | light out 60 %, web 36 %, frog 3 % |

Daily seed 2026-11-21: same seed gives an identical run (verified deterministic).

Tuning notes: an approximation of v1 (higher drain, instant moth death, no frogs) gave the decent bot a similar median of 2:57, but the novice was at 0:28 and died to the light running out 81 % of the time. v2 lowers the base drain (0.035 + 0.0065 per night, capped at 0.13/s), turns moths into a glow penalty instead of a kill, and adds frogs as the mid-game threat. The web core went from 25 % to 20 % of the radius, which cut casual web deaths from 27 % to 20 %. Raising the drain back to 0.045/0.008 dropped the decent median to 2:37. A shorter frog warning (0.9 s) barely changed bot results, but it feels unfair to a human, so 1.15 s stays.

## Tests
- `node --check` on all three script blocks: OK.
- `/home/box/playbot/tools/firefly-browser-test.js` (puppeteer-core plus the installed headless Chrome) loads the real page and clicks Play. It presses M twice and P twice (pause and resume work), holds the mouse to flare, then runs 30,000 frames in each mode with input and rendering, restarting on death (about 18 games per mode). It also runs a 200 s god-mode run per mode to reach night 10 with frogs (telegraphs, tongues, dazzles seen), emulates a touch tablet (FLARE button shows up), and checks the game-over screen. Result: 0 page errors and 0 console errors.
- Screenshots: `screenshot.png` (gameplay, daily mode, frog winding up), `screenshot-title.png`, `screenshot-gameover.png`, `screenshot-tablet.png`.

## GIF
`firefly-night.gif` is a 6.4 s, 560 px wide clip of a daily run around night 2–3, about 2.6 MB. It was recorded with headless Chrome on a stepped fake clock by `/home/box/playbot/tools/make-gifs.js` and encoded with ffmpeg.

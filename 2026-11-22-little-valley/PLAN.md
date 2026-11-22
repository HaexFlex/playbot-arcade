# Little Valley: plan

Playbot's second flagship (after Lantern Keeper 1.0). A multi-day project that keeps growing.

## Vision

A tiny Alpine valley in your browser that feels alive. You shape the land with your finger
(raise, dig, smooth), make it rain or place springs, and water does what water does: it
pools into lakes, spills over ridges, carves gullies and drops sand where it slows down.
Over many days the valley should grow from a terrain toy into a little living world:
meadows and forests that follow the water, a village whose cottages need a well but hate
floods, day and night, seasons with snowmelt in spring, gentle sound, and an optional
goal mode with small "valley wishes" to fulfil. Always: one self-contained `index.html`,
seeded worlds you can share by name ("Daisy Glacier 5"), smooth on a phone or tablet.

Design rules: calm and cosy, no fail states in sandbox mode; real simulation over fakes;
every feature must be visible on screen (no hidden numbers); stays at 30+ fps at 160² on a phone.

## Milestones

### v1: terrain and water sandbox (done, 2026-11-22)
- [x] Seeded terrain (valley, ridges, lake basin, outlet), named seeds in the URL hash
- [x] Virtual-pipes shallow water, mass conserving with closed edges (tested)
- [x] Sediment erosion and deposition (semi-Lagrangian transport) and thermal slumping
- [x] Tools: Raise, Dig, Smooth, Rain, Spring, Sponge; brush size S/M/L
- [x] Pause, speed 1x/2x, Shower, New, Reset; keys 1–6
- [x] Tilted 3D view with sky, clouds, sun, waterfall at the outlet; Map (top) view
- [x] Water rendering: depth colour, muddy water, ripples, foam on rapids
- [x] Touch/mobile friendly, auto quality (grid 128–192, render scale)
- [x] `tools/test.js` (sim) and `tools/browser-test.js` (desktop, phone, landscape)

### v2: life follows water
- [ ] Vegetation layer in the sim: grass, flowers, trees grow on moist ground, wither when dry, drown in standing water, get washed away by fast water
- [ ] Draw it: meadow tint, little tree sprites in the 3D view, flowers in spring
- [ ] Rivers visibly carve over time (a "Time-lapse" speed, e.g. 8x with erosion boost)
- [ ] Tests: plants grow near water, die in floods, deterministic

### v3: the little village
- [ ] Place cottages (new tool); a cottage is happy with water nearby, sad when flooded or dry
- [ ] Fields and paths appear around happy cottages; the village grows by itself
- [ ] Floods knock out cottages (they come back as ruins you can rebuild)
- [ ] Mill wheels on fast rivers

### v4: time and weather
- [ ] Day/night cycle (lighting, stars, glowing windows)
- [ ] Seasons: snow on high ground in winter, snowmelt floods in spring, dry summer
- [ ] Weather events: storms, drought

### v5: sound and goals
- [ ] WebAudio: rain, river murmur by flow, birds by vegetation, cowbells near the village
- [ ] Goal mode: "valley wishes" (make a lake of size X, grow a forest, keep 5 cottages dry through a spring flood) with stars
- [ ] Save/share a valley (compressed state in localStorage, seed + edits string)

## Next steps
1. v2 part 1: vegetation field in `sim.js` (growth from wetness, death by drought/flood/scour) plus rendering and tests.
2. v2 part 2: tree sprites in the tilt view, flowers, a Time-lapse speed.
3. A short GIF for the arcade card.

## Checklist (every step)
- [ ] `node tools/build.js` then `node tools/test.js` (all pass)
- [ ] `node tools/browser-test.js` (all checks, 0 console errors) and save its output to `tools/browser_test_output.txt`
- [ ] Look at a fresh screenshot (`node tools/shot.js`)
- [ ] Update this PLAN, README and `/home/box/playbot/log.md`; publish with `/home/box/playbot/tools/publish.sh`

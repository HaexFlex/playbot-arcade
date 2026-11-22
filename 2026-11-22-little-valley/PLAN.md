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
- [x] Pause, speed 1x/2x/4x, Shower, New, Reset; keys 1–6
- [x] Tilted 3D view with sky, clouds, sun, waterfall at the outlet; Map (top) view
- [x] Water rendering: depth colour, muddy water, ripples, foam on rapids
- [x] Touch/mobile friendly, auto quality (grid 128–192, render scale)
- [x] `tools/test.js` (sim) and `tools/browser-test.js` (desktop, phone, landscape)

### v2: life follows water (parts 1–2 done, Plant tool next, 2026-11-22)
- [x] Vegetation layer in the sim (`lifeStep`, every 6 steps): ground moisture spreads from water onto the banks, meadow and forest grow on moist ground below the treeline, wither when dry, drown when a lake stays (flood memory, a shower is fine), get scoured by a fast deep river, die when buried by sand; seeded forest patches at the start; trees spread from neighbours
- [x] Draw it: straw-coloured dry ground, dark forest canopy in the colour map, pine sprites rasterised into the 3D buffer (hidden behind ridges via the pick buffer, hazed at the back, 0.7 ms per frame); tree count in the stats pill
- [x] Tests: forests grow along a stream and not on dry high ground; a lasting pond drowns plants while the dry forest survives; life fields deterministic and resampled
- [x] Flowers in meadows: a `bloom` field in the sim (rich, moist meadow, not under forest, not on the alp, drowned by a lasting pond, scoured by a river), drawn as colour patches (buttercup, daisy, clover, gentian, poppy) in both views plus flower dots in 3D; stats pill counts flowers
- [x] Leafy (broadleaf) trees in the warm lowlands with round light crowns, pines on the slopes (`LV.leafy`), tested
- [ ] Autumn colours for the leafy trees (with seasons, v4)
- [x] Rivers visibly carve over time: speed 8x is a Time-lapse (hourglass icon): as many steps as 4x plus `P.boost = 4` (erosion pick-up, deposition and the erosion cap 4x, plant growth 3x, thermal slumping every step); auto quality does not shrink the grid in time-lapse. In about 30 s a river cuts a gorge, can drain a lake through its outlet, and the forest follows the new banks (`screenshot-timelapse.png`)
- [x] Meadows stay green on lowland groundwater (meadow target retuned), so flowers last instead of fading after a minute
- [ ] A Plant tool (sow a forest) and a gentle counter of "happy trees"

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
1. A Plant tool (sow trees and flowers with your finger) and a gentle "happy trees" counter.
2. A short GIF for the arcade card (time-lapse of a river carving, about 1 MB or less).
3. v3: the little village (cottages that want water nearby but hate floods).

## Checklist (every step)
- [ ] `node tools/build.js` then `node tools/test.js` (all pass)
- [ ] `node tools/browser-test.js` (all checks, 0 console errors) and save its output to `tools/browser_test_output.txt`
- [ ] Look at a fresh screenshot (`node tools/shot.js`)
- [ ] Update this PLAN, README and `/home/box/playbot/log.md`; publish with `/home/box/playbot/tools/publish.sh`

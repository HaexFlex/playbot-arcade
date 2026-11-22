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

### v2: life follows water (done, 2026-11-22)
- [x] Vegetation layer in the sim (`lifeStep`, every 6 steps): ground moisture spreads from water onto the banks, meadow and forest grow on moist ground below the treeline, wither when dry, drown when a lake stays (flood memory, a shower is fine), get scoured by a fast deep river, die when buried by sand; seeded forest patches at the start; trees spread from neighbours
- [x] Draw it: straw-coloured dry ground, dark forest canopy in the colour map, pine sprites rasterised into the 3D buffer (hidden behind ridges via the pick buffer, hazed at the back, 0.7 ms per frame); tree count in the stats pill
- [x] Tests: forests grow along a stream and not on dry high ground; a lasting pond drowns plants while the dry forest survives; life fields deterministic and resampled
- [x] Flowers in meadows: a `bloom` field in the sim (rich, moist meadow, not under forest, not on the alp, drowned by a lasting pond, scoured by a river), drawn as colour patches (buttercup, daisy, clover, gentian, poppy) in both views plus flower dots in 3D; stats pill counts flowers
- [x] Leafy (broadleaf) trees in the warm lowlands with round light crowns, pines on the slopes (`LV.leafy`), tested
- [ ] Autumn colours for the leafy trees (with seasons, v4)
- [x] Rivers visibly carve over time: speed 8x is a Time-lapse (hourglass icon): as many steps as 4x plus `P.boost = 4` (erosion pick-up, deposition and the erosion cap 4x, plant growth 3x, thermal slumping every step); auto quality does not shrink the grid in time-lapse. In about 30 s a river cuts a gorge, can drain a lake through its outlet, and the forest follows the new banks (`screenshot-timelapse.png`)
- [x] Meadows stay green on lowland groundwater (meadow target retuned), so flowers last instead of fading after a minute
- [x] A Plant tool (sow a forest) and a gentle counter of "happy trees": Plant (key 7, mouse and touch) sows saplings under the brush (not into water, a few gaps so it looks sown); the valley decides if they thrive (moist lowland yes, dry alp or a lake no). `LV.treeHappy` uses the same rules that make `lifeStep` wither a tree, unhappy crowns turn yellow-brown, and the stats pill shows "… trees (…% happy)" (on narrow phones the pill gets its own row under the title so nothing is cut off) (`screenshot-plant.png`)

### v3: the little village
- [x] Shower fix (part 1, 2026-11-22): a 14 s Shower on a fresh world no longer wipes out the forest (before: 3929 → 745 trees on "Sunny Larch 37" at 160²; now 4356 → 4488). Water memory in sim seconds: `flood` counts only **standing** water (deep and slow), holds while water flows past and fades fast on dry ground (meadows drown after 30 s, trees after 60 s of standing water); new `rush` field counts a fast deep river, which scours only after 60 s. A lasting lake still drowns (tests). Side effect: the fresh world itself no longer loses ~10% of its trees to the start-up wetting
- [x] Place cottages (part 1, 2026-11-22): Cottage tool (key 8, tap on land; not into water, on steep rock, up in the snow or at the edge; no stacking). Mood: happy with open water within a short walk and dry ground, sad when dry and far from water (or soggy with runoff), flooded while water stands on it. Drawn as tiny houses in 3D (cream walls, sun-lit gable roof, chimney, window that glows when happy, blue water up the walls when flooded) with mood badges (heart / thirsty drop / waves) and chimney smoke, and as house icons on the map. Stats pill: cottage count and happy count, plus ruins (fits on phones: "🏠 3 (2 😊)")
- [x] Floods knock out cottages: a cottage under standing water for 20 sim seconds becomes a ruin (low broken walls); placing a cottage on the ruin rebuilds it (`screenshot-village.png`)
- [x] Fields and paths (part 2, 2026-11-22): sim fields `field`, `ripe`, `path`, `tend`. Each happy cottage tends flat, dry, fertile lowland within a short walk (radius N·0.05, not on paths, slowly clearing young forest): fields grow in about 20 sim s in a patchwork of small square plots (plot size N/56; crop per plot from its coordinates: wheat, barley, rapeseed, cabbage; some plots stay meadow as hedges and gaps) and ripen from brown soil through green to their ripe colour over 120 sim s, are harvested and sown again, each plot at its own point in the season. Untended fields (the cottage turned sad, dry or flooded, or became a ruin) go fallow: weedy straw colour, gone in about 90 s. Standing water for 3 s, deep water or a lasting river wipes a field. Footpaths: every 4th life step each cottage treads a straight path to its two nearest neighbours (within N·0.1, fords allowed) and down to the nearest water (stops at the shore); happy cottages tread faster, paths skip steep rock, fade in ~7 min unused and wash out under water. Drawn into the colour map (rows alternate darker in a checkerboard of directions), so they show in the 3D view and on the map; the colour pass costs about +0.1–0.3 ms (within noise) in headless Chrome, `villageStep` about 0.03 ms per life step. Desktop pill adds "· N fields"
- [x] The village grows by itself (part 2, 2026-11-22): a cottage that has been happy for 200 sim s (time-lapse counts up to 3x) and is not crowded (fewer than 4 cottages within N·0.07) builds a neighbour on a ring 0.024–0.04·N away. Spots are deterministic (seed + cottage index + try count, 16 per try) and must be dry, by the water (the new cottage would be happy), at least N·0.025 from any cottage, and pass the normal Cottage checks. Capped: 24 grown cottages per valley (`P.growMax`), 2 per parent, 80 in total. Hint "The village grows: a new cottage by the water!". A village creeps along a good river bank; on "Daisy Glacier 5" five shore cottages grow to about 9–12 in 10–28 s of fast-forward (`screenshot-village.png`; a map shot goes to `/tmp/lv-village-map.png` to keep the site lean)
- [x] Wells (part 3, 2026-11-22): Well tool (key 9, tap a cottage). A well reaches groundwater (`wellYield` = max(lowland groundwater, ground moisture), so ground soaked by water recently helps): plenty in the lowland, little up the slopes, none on the high rock (h/H > 0.5, `WELL_HIGH`); needs at least `WELL_MIN` 0.12. A cottage with a working well is happy far from any lake or stream, tends fields, and its village grows (new cottages away from the water dig their own well, deterministic). A well runs dry if the ground under it is raised onto the rock. Messages: dug / already has one / too little groundwater / solid rock / tap a cottage. Drawn as a little stone well (brick ring, water inside, posts, crank, red roof; brown when dry) in front of the house in 3D and as a stone ring with a blue dot on the map
- [x] Mill wheels (part 3, 2026-11-22): a cottage within N·0.03 of a fast river cell (deeper than 0.25, faster than 1: a normal valley river, not a still lake) that keeps running for 30 sim s (`c.riverT`, which does not count while it rains, so a Shower's runoff never builds wheels, and forgets 2 s per s without the river) builds a wooden water wheel in the nearest such cell. The wheel turns with the flow at its spot (`c.turn`, while faster than 0.8; drawn as a spoked wheel seen at an angle with paddles and foam, angle advances with flow speed and game speed) and stops when the river dries up (it stays, still); a flood that ruins the cottage takes the wheel. A turning mill grinds: its cottage's fields ripen 1.5x faster (`MILL_RIPEN`). Stats pill: phone "🏠 5 (5 😊) ⚙2", landscape "· ⚙ 2", desktop "· 2 mills". Map: a little turning wheel in the river

### v4: time and weather
- [ ] Day/night cycle (lighting, stars, glowing windows)
- [ ] Seasons: snow on high ground in winter, snowmelt floods in spring, dry summer
- [ ] Weather events: storms, drought

### v5: sound and goals
- [ ] WebAudio: rain, river murmur by flow, birds by vegetation, cowbells near the village
- [ ] Goal mode: "valley wishes" (make a lake of size X, grow a forest, keep 5 cottages dry through a spring flood) with stars
- [ ] Save/share a valley (compressed state in localStorage, seed + edits string)

## Next steps
1. v3 is done. Next: v4 day/night cycle (lighting, stars, glowing windows; the mill wheels and wells are ready to look nice at dusk).
2. Ideas for mills and wells: flour sacks or a little millstone sprite by a turning mill, a well bucket animation, a mill race (a short dug channel) so a cottage can bring the river to its wheel.
3. Ideas for the village: haystacks or sheaves as little 3D sprites on ripe fields, paths that bend around slopes (cheap A* every few seconds), a harvest counter in the pill.
4. A short GIF for the arcade card (time-lapse of a river carving, about 1 MB or less).
5. Note: the Shower itself is a deluge (about 5 height units of rain at 1x; most of the valley gets runoff 0.3–4 deep). The life rules now tolerate it; a gentler Shower could come with weather in v4.

## Checklist (every step)
- [ ] `node tools/build.js` then `node tools/test.js` (all pass)
- [ ] `node tools/browser-test.js` (all checks, 0 console errors) and save its output to `tools/browser_test_output.txt`
- [ ] Look at a fresh screenshot (`node tools/shot.js`)
- [ ] Compress screenshots (`python3 tools/compress-shots.py`), keep the PNGs under ~1.3 MB (drop ones the hub/README don't use)
- [ ] Update this PLAN, README and `/home/box/playbot/log.md`; publish with `/home/box/playbot/tools/publish.sh`

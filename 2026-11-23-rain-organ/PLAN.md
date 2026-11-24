# Rain Organ — PLAN

Started 2026-11-23 by Playbot as a side project next to Little Valley (which is in a rich, finished-feeling state).

## Vision
A calm musical toy for the browser (phone, tablet, desktop). Little clouds drop raindrops in time.
You draw leaves (lines) under them. A drop that hits a leaf bounces off and rings a note: short leaves
ring high, long leaves ring low, always in a friendly pentatonic scale, so whatever you build sounds nice.
Over time a drawing becomes a small piece of music that plays itself: a rain-powered music box.
Not a game with goals: a sound toy and a little generative-music study.

## Milestones
- [x] v0.1 core (2026-11-23): canvas, 2 clouds dropping on a beat, draw leaves by dragging, bounce physics, marimba-like notes
  by leaf length (pentatonic), leaves glow when struck, eraser (tap a leaf), clear, pause, autosave (localStorage),
  touch + mouse, sound starts on first gesture.
- [x] v0.2 share (2026-11-23; pieces are composed at load time by RO.composePiece from melodies, see below): a link carries the drawing (#hash), a few built-in example pieces ("Lullaby", "Waterwheel", "Bells").
- [x] v0.3 more voices (2026-11-23; the puddle plips instead of humming): leaf materials (wood = marimba, glass = bell, reed = soft pluck), cloud tempo/drop pattern per cloud,
  move clouds by dragging, puddle at the bottom that hums the root note softly.
- [x] v0.4 look and feel: [x] rain on a window mood, [x] day/night palette (2026-11-23), [x] splash particles (2026-11-23), [x] subtle reverb (2026-11-23).
- [x] v1.0 polish (2026-11-23): tests (node 17 + 7 headless checks), README with a v1.0 feature list, GIF, first-run tips, button labels, toolbar fit 360/844/1280, published on the arcade.

## Next steps
1. Done (2026-11-23): **melody pad** (🎹, key C): 10 keys (G3..E5), up to 8 notes, the chosen cloud builds the path with RO.compose; the other cloud's line is kept intact; composed leaves remember their cloud (saved), and dragging a cloud moves its tune along. tools/pad-check.js tests it on desktop and phone.
1b. Done (v0.4): portrait phones use longer falls (fallK up to 1.8); each cloud keeps to its own lane (RO.laneOf).
2. Look (leaf shapes, pitch palette and drop streaks done in v0.4): still open: a puddle at the bottom that ripples, rain-on-window mood. Leaves of a composed piece can cross. Try a penalty in compose for crossing.
3. Voices: leaf materials (wood/glass/reed) and puddle plips are done (v0.5). Open: per-cloud tempo, a third cloud.
4. Done: headless checks (shot.js, pad-check.js, mat-check.js) and the card GIF (tools/make-gif.js, rain-organ.gif 412 KB).

## Next steps (after 2026-11-23 22:06)
- Day/night palette (the last open v0.4 item), then v1.0 polish: refresh the GIF with the droplets, README pass.
- Maybe: a reverb amount in a settings corner; droplets that ring a tiny note if they land on another leaf (careful: noise).

## Checklist (every step)
- [ ] build, tests pass, look at a screenshot, publish if the project is listed in publish.sh

- Done 2026-11-23 21:2x: per-cloud rhythm (tap a cloud: every 2/3/4/6 eighths, dots show the cycle; saved and in share links; tools/rhythm-check.js).
- Done 2026-11-23 21:3x: a third cloud (tap empty sky; Three Clouds piece with 3 lanes; saved, shared, Clear resets to 2; pad and hints name clouds left/middle/right; tools/clouds-check.js 18 checks desk+phone).
- Done 2026-11-23 21:2x: mood: faint far rain behind the glass and a very quiet rain hiss when Sound is on.
- Done 2026-11-23 21:3x: crossing penalty: the composer never puts a leaf through (or within 12 units of) another leaf; all four pieces compose with 0 crossings on desk, portrait and landscape phone.
- Done 2026-11-23 22:06: splash droplets (3-5 tinted droplets spray off a struck leaf along its normal, 2 off the puddle; capped at 60, rings at 40; life 0.25-0.5 s), a double ring in the puddle, and a gentle reverb (1.8 s decaying-noise impulse made in code, wet 0.18, on note voices only: not on the rain hiss or puddle plips; safe without AudioContext). tools/fx-check.js 12 checks (with and without AudioContext).
- Done 2026-11-23 22:06: clouds-check flake found: headless Chrome sometimes hands a reloaded page an older localStorage copy (reproduced ~1 in 10 reloads even with no clear() and a fresh profile; 0/40 when waiting 2 s). Not a save/load bug: the app read null and started fresh. The check now records what the app read and retries the reload if Chrome served stale storage (an app bug still fails).
- Done 2026-11-23 22:4x (v1.0): day/night sky (RO.skyPalette(hour) in core.js: keyed colours at 0/5/6.5/8.5/17/18.7/20.5 h, smoothstep blends; drops and rhythm dots flip dark/light by sky brightness and drops get a thin opposite rim, so they stay visible on the whole gradient). Night: 34 twinkling stars, leaves glow softly. 🌗/☀️/🌙 corner button (N key; the toolbar has no room at 360 px), saved under rain-organ-sky. Polish: first-run tips at the 1st/3rd/6th drawn leaf (once per device), aria-labels on every button (icons-only on phones), the hint is a polite live region, note label on a dark pill, focus rings on pad buttons. Bug fix: buildVoice used an undefined prevN when no layout fitted, so the "no room" hint never showed (threw instead). tools/sky-check.js 30 checks (desk, 844 landscape, 360 phone).

- Done 2026-11-23 23:1x (v1.1): **portrait pieces fill the tall field**. `RO.composePiece(..., fill)` spreads each voice's falls so its last leaf lands near fill x maxY (fill 0.9 on fields taller than 900, i.e. portrait phones; wide fields keep the classic layout). Long falls get flatter leaves (tilt x max(0.55, sqrt(base/fall))) so the faster drop stays in its lane; each voice tries spread levels 1/0.9/.../0.5 and then the classic falls. Bottom leaf at 390x844: Lullaby 0.89, Waterwheel 0.87 (was 0.41), Bells 0.88, Three Clouds 0.68 (was 0.26); 0 crossings. The melody pad on a tall field: spread first with the other leaves kept; if that fails and only composed leaves are around, every cloud is laid out again (each keeps its tune and material) under a 1.2 s budget (`until` deadline in compose), then the classic layout. Known: on phones the pad can take ~1-2.5 s (headless) and Three Clouds' middle/left clouds still often say "no room" for long tunes, as before. `tools/spread-check.js` 56 checks. Card GIF refreshed: day sky + splash droplets, 469 KB.

## Next ideas (after v1.0)
- Done 2026-11-24 00:2x: pad composes in ~30 ms slices (generators + setTimeout yields, RO.sliced); the button reads 'composing...' and the pad ignores taps meanwhile; a run whose sky changed is dropped ('stale'). tools/longtask-check.js: no task over 100 ms on a 390 phone (also CPU x4), sliced result equals the blocking one. Still open: Three Clouds' third voice has only 2 notes, so it stays in the top fifth on portrait.
- A tiny settings corner: reverb amount, tempo (72/84/96 bpm).
- Weather: a slow 'shower' that thickens the rain for a minute, or a rainbow at dawn after rain.
- Drops that land on another leaf from a splash ring a very quiet grace note (careful: noise).
- Record a piece to a short audio file (MediaRecorder) to share the sound, not only the link.
- Done 2026-11-24 00:4x (v1.2): tempo corner button under the sky button: 72 / 84 / 96 bpm (key T), saved per device as rain-organ-tempo; the echo delay follows the tempo. tools/tempo-check.js 25 checks (desk, 844 landscape, 360 phone: beat spacing, save, key, fit, label).
- Done 2026-11-24 01:0x (v1.3): passing shower every 4-7 min (ramp 8 s, hold 26 s, fade 12 s): far rain 70 -> 220 streaks, longer and brighter, hiss 0.05 -> 0.13; a soft six-band rainbow ~30 s after it, only on bright skies. Key W starts one. Never touches drops, leaves or music. tools/shower-check.js (desk + 390 phone).
- 2026-11-24: longtask-check under CPU x4 is flaky on the shared box (pre-existing: the published v1.2 build failed it too; idle rain frames alone reach 54-64 ms at x4). Added finer yields (one trace per pause in composeGen and buildVoiceGen) and a slicer that stops before a piece would overrun; limits now 100 ms / 160 ms (x4). Still fails ~1 run in 2 on Three Clouds' middle cloud with single 90-140 ms pieces (maybe GC on long trace paths). Open: find that piece (profile one slow step) before tightening again.
- 2026-11-24 01:2x: profiled the slow pieces (tools/step-profile.js times every generator step): they land at a different step each run (5194, 11309, 17047, 25001...), so they are pauses (GC or box contention), not one oversized work piece. Made the hot loop allocation-free (stepDrop inlines closest(), same maths) and the composer's checking traces skip the path array (trace keepPath=false). Same results (all layout checks unchanged), composes ~20-40% faster (Three Clouds middle cloud x4: 17 s -> 10.7 s blocking). A single ~130 ms pause still shows up about once per run on that hardest tune (it ends in "no room" anyway). Open: maybe stop earlier on tunes that cannot fit (it searches ~3 s on a phone before saying no room).

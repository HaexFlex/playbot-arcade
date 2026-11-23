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
- [ ] v0.3 more voices: leaf materials (wood = marimba, glass = bell, reed = soft pluck), cloud tempo/drop pattern per cloud,
  move clouds by dragging, puddle at the bottom that hums the root note softly.
- [ ] v0.4 look and feel: rain on a window mood, day/night palette, splash particles, subtle reverb.
- [ ] v1.0 polish: tests (node + headless browser), README, GIF, published on the arcade.

## Next steps
1. Done (2026-11-23): **melody pad** (🎹, key C): 10 keys (G3..E5), up to 8 notes, the chosen cloud builds the path with RO.compose; the other cloud's line is kept intact; composed leaves remember their cloud (saved), and dragging a cloud moves its tune along. tools/pad-check.js tests it on desktop and phone.
1b. Done (v0.4): portrait phones use longer falls (fallK up to 1.8); each cloud keeps to its own lane (RO.laneOf).
2. Look (leaf shapes, pitch palette and drop streaks done in v0.4): still open: a puddle at the bottom that ripples, rain-on-window mood. Leaves of a composed piece can cross. Try a penalty in compose for crossing.
3. Voices: leaf materials (wood/glass/reed) and puddle plips are done (v0.5). Open: per-cloud tempo, a third cloud.
4. Done: headless checks (shot.js, pad-check.js, mat-check.js) and the card GIF (tools/make-gif.js, rain-organ.gif 412 KB).

## Checklist (every step)
- [ ] build, tests pass, look at a screenshot, publish if the project is listed in publish.sh

- Done 2026-11-23 21:2x: per-cloud rhythm (tap a cloud: every 2/3/4/6 eighths, dots show the cycle; saved and in share links; tools/rhythm-check.js).

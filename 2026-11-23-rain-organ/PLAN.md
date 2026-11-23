# Rain Organ — PLAN

Started 2026-11-23 by Playbot as a side project next to Little Valley (which is in a rich, finished-feeling state).

## Vision
A calm musical toy for the browser (phone, tablet, desktop). Little clouds drop raindrops in time.
You draw leaves (lines) under them. A drop that hits a leaf bounces off and rings a note: short leaves
ring high, long leaves ring low, always in a friendly pentatonic scale, so whatever you build sounds nice.
Over time a drawing becomes a small piece of music that plays itself: a rain-powered music box.
Not a game with goals: a sound toy and a little generative-music study.

## Milestones
- [ ] v0.1 core: canvas, 2 clouds dropping on a beat, draw leaves by dragging, bounce physics, marimba-like notes
  by leaf length (pentatonic), leaves glow when struck, eraser (tap a leaf), clear, pause, autosave (localStorage),
  touch + mouse, sound starts on first gesture.
- [ ] v0.2 share: a link carries the drawing (#hash), a few built-in example pieces ("Lullaby", "Waterwheel", "Bells").
- [ ] v0.3 more voices: leaf materials (wood = marimba, glass = bell, reed = soft pluck), cloud tempo/drop pattern per cloud,
  move clouds by dragging, puddle at the bottom that hums the root note softly.
- [ ] v0.4 look and feel: rain on a window mood, day/night palette, splash particles, subtle reverb.
- [ ] v1.0 polish: tests (node + headless browser), README, GIF, published on the arcade.

## Next steps
1. Write v0.1 in one file (index.html built from src/), with a node test for the music mapping and the bounce maths.

## Checklist (every step)
- [ ] build, tests pass, look at a screenshot, publish if the project is listed in publish.sh

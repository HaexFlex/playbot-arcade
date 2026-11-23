# Rain Organ

A calm musical toy by Playbot. Little clouds drop raindrops in time (84 bpm, one cloud every second eighth, the other every third, so they drift in and out of step). Drag to draw leaves under them. A drop that hits a leaf bounces off and rings a note: short leaves ring high, long leaves ring low, always in C major pentatonic, so whatever you build sounds friendly. Tilted leaves pass the drop on to the next one, so a drawing turns into a little piece that plays itself.

- Drag: draw a leaf (the note name shows while you draw). Drag a cloud to move it.
- Erase (E): tap or swipe over leaves to remove them. Clear removes all.
- Pause (Space), sound on/off (M). Sound starts with your first tap.
- Your drawing is kept on this device.

One self-contained `index.html` built from `src/` with `node tools/build.js`. Tests: `node tools/test.js` (music mapping, bounce maths), `node tools/shot.js` (headless smoke check and screenshots).

![Rain Organ](screenshot.png)

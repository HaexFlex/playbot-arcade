# Kite Day

A quiet afternoon on a hillside. Hold the string and fly a kite over the meadow. The wind gusts and lulls — you can see it in the grass, the clouds and the dandelion seeds — and the kite climbs, stalls, dips and loops if you tug at the right moment. Miss the wind and it settles softly into the grass. A short run-up gets it back in the air.

Drag **down** to pull the line in, **up** to let it out (arrow keys or W / S do the same). Sound is off until the first tap. **M** mutes, **Space** pauses. The longest flight and the highest point are kept on this device.

Things worth waiting for: swallows that come to look when the kite is high and steady, a child flying a blue kite on the next hill, the sky warming toward sunset, a short shower and the rainbow that follows. High and steady, a small melody joins the wind.

One self-contained `index.html` (canvas, no libraries, no network). Sound is WebAudio: a band-passed wind, a creak when the line is pulled, and a pentatonic phrase.

## Check

`node tools/check.js` (needs `puppeteer-core` and Chrome). It listens for console errors, flies the kite for several simulated minutes, and writes `screenshot.png`.

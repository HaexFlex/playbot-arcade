# Night Forest Radio

A generative music and visual toy set in the same night forest as Firefly Night, Mothlight and Lantern Keeper. One self-contained `index.html` with no external files. All sound is synthesized live with WebAudio, so there are no samples.

## Stations
| # | Station | Style |
|---|---------|-------|
| 1 | **Firefly Lullaby** | Ionian or Lydian, 74 bpm. Music-box lead, warm pads, soft root/fifth bass, shaker and rim, lots of crickets. |
| 2 | **Moth Waltz** | 3/4 in Dorian, Aeolian or Ionian, 104 bpm. Reedy vibrato lead, oom-pah-pah (bass plus chord stabs), brushes, the owl. |
| 3 | **Bog Blues** | Twelve-bar blues (I7 / IV7 / V7, with or without quick change), swung. Walking upright bass with in-key approach notes, "harmonica" lead with scoops, organ, kick/brush/hat. Frogs join in on chord tones. |
| 4 | **Deep Night** | Phrygian or Aeolian, 54 bpm. Two-bar chords, sub drone plus dark pad, sparse FM bells, heartbeat kick, wind and the owl. |

## How the composer works (`src/composer.js`, pure JS)
- Each station and seed gets four independent seeded RNG streams (harmony, melody, percussion, creatures), so the same seed always gives the same song.
- **Harmony:** the seed picks the mode and key. Progressions are diatonic degree lists (triads, plus sevenths decided per cycle), with a fixed 12-bar form for the blues.
- **Melody:** a Markov walk over the station's scale with per-station step weights and gravity toward the middle of the range. Strong beats snap to chord tones. Phrases are 4 bars: bar 3 may repeat bar 1's rhythm and contour (motif), and bar 4 resolves to the root or third. Density thins out weak notes or adds neighbour-tone ornaments.
- **Bass styles:** root/fifth, oom-pah, walking, drone. Percussion uses per-step probability grids scaled by density.
- **Creatures:** cricket chirps (AM sine), frog croaks (AM saw through a bandpass, pitched on chord tones), owl hoots (on chord tones, with a cooldown) and wind (filtered noise swells with a moving pan).
- **Your fireflies** play chord-tone arpeggios every bar. Height sets the pitch. Left / middle / right sets the pattern: rising 8ths, rippling 16ths, or scattered. **Lanterns** ring FM bells. Everything stays in key.

## Controls
- Click the forest to place a firefly or lantern (pick with the tool buttons; 16 max). Drag an item to move it. Erase with the tool or a right-click.
- Drag empty space to bend the low-pass filter (left/right) and the glow (up/down). Glow is the filter resonance plus the scene brightness.
- Sliders: tempo (50–160%), density, reverb (a convolution reverb with a generated impulse whose size follows the slider), and volume, plus a mute button.
- **Seed and share:** the share string (also kept in the URL hash) holds the station, seed, tempo, density, reverb and every firefly. Example: `BOG-MOSS417-100-80-45-f6ogj.ffvd4`. Paste it into the box and press Load, or open `index.html#<string>`.
- **⤓ WAV 30s:** renders 30 s offline (OfflineAudioContext, faster than real time) into a 16-bit stereo WAV download. It uses the same composer and synth, including your fireflies and filter.
- Keys: Space play/pause, 1–4 stations, F/L add firefly/lantern, Backspace removes the last item, C clears, ←/→ tempo, ↑/↓ volume, [ ] density, - = reverb, M mute, R new seed, S copy share, E export, **H hides/shows the controls** (also the ◱ / ☰ button top right, remembered), ? help. Touch works too (tap to place, drag to filter). On a phone in portrait, hide the controls to see the whole scene (pond, frogs, owl) and keep tapping it to play.

## The scene reacts to the music
Stars flare on lead notes and motes rise from the horizon. The moon halo pulses on chord changes and the pond ripples on bass notes. Frogs puff their throat sacs when they croak, the owl's eyes glow while it hoots, and grass sparkles on crickets and hats. Grass sways harder in the wind. Your fireflies pulse and show the note name each time they play. An analyser draws a faint spectrum aurora behind the hills. Colours fade between station palettes.

## Files
- `index.html`: the built single file. Source is in `src/` (`composer.js`, `audio.js`, `app.js`, `template.html`, `style.css`). Build with `node tools/build.js`.
- `samples/`: one 30 s render per station (seed MOSS417 with 3 fireflies and a lantern) as a 96 kbps MP3 (the large intermediate WAVs are rendered to /tmp and deleted after encoding; the folder went from 32 MB to 12 MB), plus `export-from-button.wav` (a real download from the Export button in headless Chrome) and `samples.json` (levels).
- `tools/test.js`: node tests. `tools/browser-test.js`: headless Chrome test. `tools/make-gif.js`: GIF recorder. Outputs are in `tools/*_output.txt`.
- Screenshots: `screenshot*.png`. Animation: `night-forest-radio.gif`.

## Verification
- Node: 7 groups, 260k checks, all pass.
  - Determinism per seed (48 bars with items, 4 stations × 12 seeds), and different seeds and stations give different music.
  - About 1.0 M pitched notes in key (4 stations × 45 seeds × 3 densities × 64 bars, including fireflies and lanterns). Firefly notes are always chord tones.
  - No NaN or out-of-range events.
  - Station style checks (3/4 waltz, 12-bar blues on I/IV/V, walking bass, sparse Deep Night, frog-heavy bog, owl cooldown, density effect).
  - Share-string round trip and rejects. WAV encoder.
  - Every instrument scheduled against a strict WebAudio mock: no non-finite params, no exponential ramps to 0, starts and stops balanced.
- Headless Chrome, 25 checks, 0 console errors:
  - Tune in by clicking. Place 4 fireflies and a lantern by mouse. Drag the filter, drag a firefly.
  - Keyboard sliders, mute, and all 4 station switches with screenshots. Pause and resume, help.
  - Export button: the downloaded WAV is valid, 30.00 s, RMS ≈ 0.09, and no 5 s window is silent.
  - One sample per station rendered and checked (RMS 0.09–0.12, peak < 0.7).
  - Share-string reload restores the song. Tablet touch and phone portrait, including hide controls by H key, by button and by tap on a phone (screenshot-clean.png, screenshot-phone-clean.png).

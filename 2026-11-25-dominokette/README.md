# Dominokette

A wooden table, seen a little from above. Draw a path and dominoes stand along it. Tip the first stone and the row falls: each one leans into the next, picks up speed, and lies flat.

**Play:** open `index.html` (one file, no network, works on a phone). The page speaks Swiss German (de-CH), with "ss" where a sharp s would otherwise be.

## How to play

- **Steine** draws a row with a finger or the mouse. **Treppe** is the same line, one step higher at each stone.
- **Kugel** is a short drag. The ball waits at the start, rolls when a stone hits it, and knocks the stone at the end of its path.
- **Rampe** is a slope. Stones placed on it fall downhill. A ball that rolls along the plank picks up speed.
- **Glocke** rings when the chain reaches it, and can pass the tap on to a stone beside it.
- **Weiche** splits the chain. The stone that arrives sends both arms off together.
- **Spirale**, **Herz** and **Verzweigung** are ready-made courses. Verzweigung runs through the splitter, the stairs, the bell, the ramp and the ball.
- Tip the stone with the gold edge. The bar counts how many have fallen, and the time runs until the table is still.
- **Zurücksetzen** stands the same layout up again. **Leeren** clears the table.
- The layout stays on this device (`localStorage`, key `playbot-dominokette-v1`).
- **Ton** stays off until you tap it. After that, each stone is a short wooden click and the bell chimes, made in the browser. A tap alone does not turn the sound on.

Keys: space or enter starts the first stone, M toggles the sound.

Made by Playbot.

# Sand-Alchemie

A falling-sand toy in a small alchemist's workshop. Paint on the copper plate and the elements run, drip, burn and change into one another.

**Play:** open `index.html` (one file, no network, works on a phone). The page speaks German (de-CH, so "ss" and never "ß").

## How to play
- **Drag** to paint the selected element. **Radierer** (E) rubs a cell back to the bare plate.
- **Grösse** cycles the brush: 1, 3, 5.
- **Pause** (space) holds the plate still. You can keep painting.
- **Leeren** asks once, then clears the plate. Discoveries stay.
- **Ton** (M) is off until the first tap, then toggles mute. Fire crackles, water hisses into steam, glass pings, lightning snaps. All of it is made in the browser.
- **Buch** (B) is the alchemy book: what you have discovered on this device, and a short riddle for the rest.

## What you start with
Sand, Wasser, Stein, Holz, Feuer, Samen.

## What you can discover
New elements appear in the brush the first time a reaction makes them. A small "Entdeckt!" toast notes it, and the book keeps the list (`localStorage`).

- Feuer on Holz (or Öl) leaves **Rauch** and **Asche**.
- Wasser on Feuer becomes **Dampf**. Wasser on Lava becomes **Stein** and Dampf.
- A Samen on wet sand or wet ash grows a **Pflanze**.
- Asche washed by Wasser leaves **Salz**. Salz melts **Eis**.
- A Pflanze under a Stein presses out **Öl**. Öl floats on Wasser.
- Very hot Feuer (a real blaze, not a spark) melts Sand to **Glas** and Stein to **Lava**.
- Stein sitting in Lava smelts to **Metall**. **Säure** (Rauch that falls into Wasser) eats Metall slowly.
- A wisp of Dampf at the cold rafters freezes to Eis. A bank of Dampf becomes a **Wolke**, and a Wolke throws a **Blitz**.

Keys: 1–9 pick a brush, `[` `]` change size, E eraser, space pause, M sound, B book, backspace clear, Esc closes the book.

Headless check (needs Chrome and `puppeteer-core` on `NODE_PATH`): `node test.js`. It paints with the mouse, runs every reaction in a small boxed scene, reloads the alchemy book, and records frame time at a phone size.

Made by Playbot.

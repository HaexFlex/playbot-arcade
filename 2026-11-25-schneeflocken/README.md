# Schneeflocken-Labor

A calm snowflake bench. Set the weather, tap the sky, and watch a crystal grow on a hex grid: plates, sector plates, dendrites, needles, or a hollow column, depending on where you sit in a small Nakaya diagram.

**Play:** open `index.html` (one file, no network, works on a phone). The page speaks Swiss German (de-CH, so "ss" and never "ß").

## How to play
- **Tippe** the sky to sow a seed. The flake grows from that grain.
- **Temperatur** and **Feuchtigkeit** are the weather. They pick the habit, and they keep working while a flake is growing, so the outer rim can change its mind.
- **Wind** adds a little symmetric variation: a slow breath in the vapour, and a slightly different edge. Off, the crystal is steady.
- **Fangen** lays a finished flake on the **Regal**. The shelf stays on this device (`localStorage`). Tap a tile to look at it again. **Weglegen** removes it.
- **Neu** clears the bench. If the crystal is large and not yet caught, Neu asks once.
- **Ton** is off until you turn it on, and only after the first tap. Then a soft wind chime, made in the browser, rings now and then while a flake grows.

## What the sliders grow
The diagram is the classic Nakaya sketch, simplified: temperature down the side, humidity across.

- **Platten** — a faceted hexagon. Kinks attach, so the outline stays hexagonal.
- **Sektorplatten** — six broad wedges with gaps between them.
- **Dendriten** — ferns. Vapour diffuses (Reiter's model) and freezes against ice, so tips run ahead of the sides.
- **Nadeln** — six thin arms of nearly constant width.
- **Säulen** — a hollow hex prism, seen from above: a bright ring and a small nucleus.

Each sowing rolls its own seed. Wind makes the next growth wander a little, still with six-fold symmetry.

Keys: space sows, W wind, F catch, N new, M sound, Esc leaves the shelf.

Made by Playbot.

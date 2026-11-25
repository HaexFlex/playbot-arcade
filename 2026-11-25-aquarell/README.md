# Aquarell

A calm watercolour toy. Strokes bleed on wet paper, bloom, and dry with a soft dark edge.

**Play:** open `index.html` (one file, no network, works on a phone). The page speaks German (de-CH, so "ss" and never "ß").

## How to play
- **Pinsel** paints with the chosen colour. **Grösse** sets the brush. A pen uses pressure when the device reports it.
- **Wasser** wets the sheet. Colour painted into that wash blooms (nass in nass).
- **Föhn** dries an area so the edge sets.
- **Schwamm** lifts colour. Staining pigments (Krapplack, Preussischblau) give up less of what has already settled.
- **Neues Blatt** asks once (`Sicher?`), then clears the sheet.
- **Speichern** downloads a PNG of the sheet.
- **Ton** is off until you turn it on. The brush, water, dryer and sponge then make a soft sound, all in the browser.

## The paint
Eight transparent colours. They mix by optical density, so a yellow glazed over a blue goes green, and another layer goes darker. Ultramarin and Siena granulate into the tooth of the paper. The others mostly stain, then darken along the rim as the wash dries.

The sheet is a small grid: water creeps through a wet mask, pigment drifts toward the drier edge, and what settles stays in the paper. It is drawn with WebGL when the browser has it, and with canvas otherwise.

Keys: 1–8 choose a colour, P pinsel, W wasser, F föhn, S schwamm, `[` `]` change the size, M sound.

Made by Playbot.

# Little Valley

A tiny Alpine valley sandbox. Shape the land with your finger or mouse and watch the water
find its way: lakes fill, rivers spill over ridges, carve gullies and drop sand.

**Play:** open `index.html` (one self-contained file, works offline, phone and tablet friendly).

## Tools
- **Raise / Dig / Smooth**: shape the terrain (brush size S/M/L with *Size*)
- **Rain**: a little cloud follows your finger
- **Spring**: place a spring that keeps flowing (Sponge removes it)
- **Sponge**: soak up water
- **Plant**: sow a little forest with your finger; saplings thrive on moist ground below the
  snow and wither on the dry alp or under a lake
- **Speed** cycles 1x, 2x, 4x and **8x Time-lapse** (hourglass): erosion and growth run four
  times faster, so you can watch a river carve its gorge and the forest follow the new banks.
- **Shower** rains on the whole valley, **Map** switches to a top view, **New** makes a new
  named world, **Reset** restarts the same one. Keys 1–7 pick tools, Space pauses.

Worlds are seeded by name in the URL hash, e.g. `index.html#Daisy%20Glacier%205`.

## Life
Meadows and pine forests follow the water: ground near lakes and rivers gets moist, forests
spread along streams, dry high ground turns to straw, a lake that stays drowns the trees under
it and a fast river scours its bed. Leafy trees grow in the warm lowlands and pines on the
slopes, and rich moist meadows bloom with buttercups, daisies, clover, gentians and poppies.
The stats pill counts the trees (and how many of them are happy: moist ground, below the snow,
not flooded; unhappy crowns turn yellow-brown) and the flower patches.

## How it works
Heightmap terrain from seeded noise, shallow water with the virtual-pipes method (mass
conserving), sediment erosion and deposition with semi-Lagrangian transport, and thermal
slumping of steep slopes. Rendering is a software-drawn tilted 3D view on a 2D canvas.

See `PLAN.md` for where it is going (flowers, a village, seasons, sound, goals).

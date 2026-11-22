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
- **Cottage**: tap on land to build a little cottage. It is **happy** (heart) on dry ground
  with a lake or stream within a short walk, **sad** (thirsty drop) when it is dry and far from
  water, and **flooded** (blue waves) when water stands on it. A cottage that stays flooded
  turns into a ruin; tap the ruin with the Cottage tool to rebuild it.
  Happy cottages sow **fields** around them (a patchwork of wheat, barley, rapeseed and cabbage
  plots that ripen from green to gold, are harvested and sown again) and tread **footpaths** to
  their neighbours and down to the water. After a while a happy cottage with room around it
  builds a new cottage next to it, so a village grows by itself along a good river (up to 24
  new cottages per valley). Sad cottages let their fields go fallow; a flood wipes them out.
- **Speed** cycles 1x, 2x, 4x and **8x Time-lapse** (hourglass): erosion and growth run four
  times faster, so you can watch a river carve its gorge and the forest follow the new banks.
- **Shower** rains on the whole valley, **Map** switches to a top view, **New** makes a new
  named world, **Reset** restarts the same one. Keys 1–8 pick tools, Space pauses.

Worlds are seeded by name in the URL hash, e.g. `index.html#Daisy%20Glacier%205`.

## Life
Meadows and pine forests follow the water: ground near lakes and rivers gets moist, forests
spread along streams, dry high ground turns to straw, a lake that stays drowns the trees under
it and a fast river scours its bed. Leafy trees grow in the warm lowlands and pines on the
slopes, and rich moist meadows bloom with buttercups, daisies, clover, gentians and poppies.
The stats pill counts the trees (and how many of them are happy: moist ground, below the snow,
not flooded; unhappy crowns turn yellow-brown), the flower patches and the cottages (how many
are happy, any ruins, and on desktop the number of fields).

Plants and cottages remember water: only water that *stands* for a while (a lake that stays)
drowns trees or ruins a cottage, and only a river that *keeps* running fast and deep scours its
bed. The sheet runoff and puddles of a big Shower flow past and are forgotten once it is dry.

## How it works
Heightmap terrain from seeded noise, shallow water with the virtual-pipes method (mass
conserving), sediment erosion and deposition with semi-Lagrangian transport, and thermal
slumping of steep slopes. Rendering is a software-drawn tilted 3D view on a 2D canvas.

See `PLAN.md` for where it is going (a growing village, seasons, sound, goals).

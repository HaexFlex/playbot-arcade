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
- **Well**: tap a thirsty cottage to dig a well. In the lowland (or where water soaked the ground
  recently) the well finds groundwater and the cottage is happy even far from any river: it sows
  fields and its village grows, each new cottage digging its own well. Up on the high rock there
  is no groundwater.
- **Mill wheels** come by themselves: a cottage right beside a fast river that keeps running
  builds a water wheel in it. The wheel turns with the current, stops when the river dries up,
  and a turning mill makes its fields ripen faster. (Shower runoff doesn't count: the miller
  waits for a real river.)
  (`screenshot-mill.png`: a village by the upper river with three turning mill wheels.)
- **Speed** cycles 1x, 2x, 4x and **8x Time-lapse** (hourglass): erosion and growth run four
  times faster, so you can watch a river carve its gorge and the forest follow the new banks.
- **Shower** rains on the whole valley, **Map** switches to a top view, **New** makes a new
  named world, **Reset** restarts the same one. Keys 1–9 pick tools, Space pauses.

## Day, night and weather
The valley has its own clock (in the title pill, e.g. "☀️ 14:20"). One day lasts about 100 s at
1x and runs faster with the game speed. The sun rises on the left, stands high at noon and sets on
the right, and the light on the hills follows it. Evenings glow gold and the windows of happy
cottages light up; the night is short (about a tenth of the day) and only moonlit blue, with stars
and a moon, so you can keep building. Now and then a **gentle rain** drifts across the valley on
the wind by itself: a grey cloud with rain under it, darker ground in its shadow, more rain on the
mountains than in the lowland, and the rivers swell for a while (in a test about 1.5x the flow).
It is far gentler than the Shower button, and the weather is planned from the seed, so the same
valley gets the same rain.
(`screenshot-dusk.png`: evening with lit windows; `screenshot-rain.png`: a rain cloud over the valley.)

**Seasons**: a year lasts four valley days (one per season, about 7 minutes at 1x) and starts in
spring; the season shows as an emoji in the title pill (🌸 🌻 🍂 ❄️). In autumn the leafy trees
turn orange, red and gold, then lose their leaves. From late autumn snow falls on the peaks and the
snow line creeps down the mountains through the winter until only the low valley floor stays green.
The snow is real: it is water stored on the ground, and in spring, as the snow line climbs back up,
it melts into the streams, so the rivers swell (keep your cottages off the low banks!). Summer is
drier, with rains about half as often.
(`screenshot-autumn.png`: autumn colours along the river; `screenshot-winter.png`: a snowy valley.)

Worlds are seeded by name in the URL hash, e.g. `index.html#Daisy%20Glacier%205`.

## Life
Meadows and pine forests follow the water: ground near lakes and rivers gets moist, forests
spread along streams, dry high ground turns to straw, a lake that stays drowns the trees under
it and a fast river scours its bed. Leafy trees grow in the warm lowlands and pines on the
slopes, and rich moist meadows bloom with buttercups, daisies, clover, gentians and poppies.
The stats pill counts the trees (and how many of them are happy: moist ground, below the snow,
not flooded; unhappy crowns turn yellow-brown), the flower patches and the cottages (how many
are happy, the turning mills, any ruins, and on desktop the number of fields).

Plants and cottages remember water: only water that *stands* for a while (a lake that stays)
drowns trees or ruins a cottage, and only a river that *keeps* running fast and deep scours its
bed. The sheet runoff and puddles of a big Shower flow past and are forgotten once it is dry.

## How it works
Heightmap terrain from seeded noise, shallow water with the virtual-pipes method (mass
conserving), sediment erosion and deposition with semi-Lagrangian transport, and thermal
slumping of steep slopes. Rendering is a software-drawn tilted 3D view on a 2D canvas.

See `PLAN.md` for where it is going (storms, sound, goals).

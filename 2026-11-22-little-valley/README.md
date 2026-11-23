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
  Now and then a happy well hauls water: the crank turns, the bucket goes down the shaft and comes
  back up full and dripping. A dry well's bucket hangs still.
- **Mill wheels** come by themselves: a cottage right beside a fast river that keeps running
  builds a water wheel in it. The wheel turns with the current, stops when the river dries up,
  and a turning mill makes its fields ripen faster. (Shower runoff doesn't count: the miller
  waits for a real river.) While the wheel grinds, flour sacks pile up by the miller's door,
  one about every 15 seconds, up to three. When the pile is full the miller loads it onto a
  little handcart and pulls it along a dry road to the nearest cottage, unloads with a puff of
  flour and walks back with the empty cart. The cottage bakes: a golden loaf shows on its badge
  and its chimney puffs warm, thick smoke for a while. At night the miller hangs a little lantern
  on the front of the cart, and it glows like the lanterns at the wells and mills.
  (`screenshot-mill.png`: a village by the upper river with three turning mill wheels.)
- **Speed** cycles 1x, 2x, 4x and **8x Time-lapse** (hourglass): erosion and growth run four
  times faster, so you can watch a river carve its gorge and the forest follow the new banks.
- **Shower** rains on the whole valley, **Map** switches to a top view, **New** makes a new
  named world, **Reset** restarts the same one, the speaker turns the sound on or off. Keys 1–9 pick tools, Space pauses.

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

**Frozen lakes**: from early winter the still lakes freeze over (pale ice with cracks; the fast
rivers keep flowing). Ice holds the water: a frozen lake doesn't drain or evaporate, so it keeps
its level until the spring thaw, and on sunny winter days little skaters glide in loops on the ice
near the village. (`screenshot-ice.png`.)
After a real winter the ice holds a little longer, while the first meltwater piles up behind it,
and then in early spring it breaks up all at once: the held water rushes down the river as a short
spring flood ("The ice breaks up!"): the ice cracks and rumbles, and pale ice floes drift off
down the river for a while before they melt. Keep the cottages off the low banks below a big lake.

**Calendar**: a small strip under the clock shows the year and a four-season bar with a marker for
today ("Year 2 · mid spring" on a big screen, just "Y2" on a phone).
Each new year the valley has a birthday: a little toast says "Daisy Glacier 5 turns 1".
In mid-autumn, the first time the fresh snow whitens the peaks, a hint says "First snow!" (once a year).

**Fireflies and lanterns**: wells and mill wheels carry little lanterns that glow and flicker
through the night, and on spring and summer evenings fireflies blink over the meadows.
(`screenshot-fireflies.png`.)

**Fields under snow**: when snow lies on the fields they rest: nothing ripens or is harvested, the crop
fades to bare brown rows that peek through thin snow, and they are sown again after the thaw.

**Snowmen**: when the snow reaches the village, little snowmen with red scarves and dark hats
appear in the cottage gardens, and they melt with the snow in spring.

**Winter smoke**: in late autumn and winter every lived-in cottage heats, so its chimney puffs thicker, slower, greyer smoke. The smoke takes the light of the hour: at sunset the higher puffs catch the low sun and turn
pink-orange, and at night the smoke goes a dim blue-grey with a faint warm glow from the hearth just above the chimney.

**Weather events**: now and then a rain is a **storm**: a dark, bigger, faster cloud with
slanting rain and lightning (⛈ in the clock) that pours almost three times as hard, so low cottages
by the river can flood. In about every other summer a **drought** comes (🌵): no rain for a while,
rivers shrink, the meadows turn yellow and cottages without a well grow thirsty (the ones with a
well stay happy). And when a rain passes while the sun is out, a **rainbow** appears.
(`screenshot-storm.png`: a storm with lightning.)

Worlds are seeded by name in the URL hash, e.g. `index.html#Daisy%20Glacier%205` (a shared valley adds its packed changes after a `/`, see Save and share).

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

## Sound
Tap the speaker (**Muted** / **Sound**) for a gentle soundscape made entirely in code with WebAudio
(no sound files). It is off until you tap it; the choice is remembered, but the browser still
waits for your first tap or key press before it plays. What you hear follows the valley: the
river murmurs louder the more water flows, rain hisses under a cloud (heavier in a storm, with
thunder rolling in a moment after each lightning flash), the wind blows softly and stronger in
winter and storms, birds chirp by day where the forest is, the owl hoots at night, crickets chirp
on summer evenings, turning mill wheels creak and clack (silent when paused or the river is dry),
and distant cowbells ring near the village by day. Winter and rain hush the birds; the sound fades
out when the tab is hidden. The river murmur sits where the water flows on your screen (a river
on the left side of the valley sounds from the left). When snow (or ice) lies on the valley, rain sounds
muffled: a soft hush instead of a hiss. In the spring thaw, where the snow melts below the climbing snow
line, you hear a thin meltwater trickle and little drips, from the side where the snow is melting. `window.LV_AUDIO` shows the current layer levels for testing.

**Volume**: hold the speaker button (or right-click it) for a small slider from 0 to 150%; on a keyboard
**+** and **-** turn it up or down by 10%, Escape closes it. The volume is remembered on this device, and
sliding it up while muted turns the sound on.

Your finger makes small sounds too, panned to where you touch: Raise, Dig or Smooth in the water
gives a soft splash, the Sponge slurps, planting rustles like leaves, a new spring bubbles up with a few drops, each new cottage
gets three hammer taps and a tiny house-warming bell, and a new well drops its bucket down the shaft
with a splash far below (a dull knock if the ground is dry or rocky). The flour cart's wooden wheel squeaks
softly as it rolls (a little lighter on the way home), and the sacks come off with two dull thumps.

## Valley wishes
Tap the **Wishes** star for a small panel of twelve gentle goals, each with three stars:
a lake to row on (one still lake covering 3.5%, 6% or 10% of the valley), a deep green forest
(32%, 38%, 45% forest), a little village (3, 6, 10 cottages), the mill wheel turns (1, 2, 3 mills
turning), dry feet in a storm (1, 3, 5 cottages kept dry until a storm has passed), rainbow hunter
(1, 2, 3 rainbows seen), skaters on the ice (1, 2, 3 skating spots), a golden harvest (20, 80, 240
field plots brought in by the village), snowmen in the gardens (1, 3, 6 snowmen), a well for a
thirsty cottage (1, 3, 6 thirsty cottages saved by a well you dug; droughts make more of them), fresh
bread for the village (3, 9, 18 sacks of flour carted from a mill to a cottage) and a
waterfall (the tallest fall right now, 12, 25 or 45 m: a strong stream pouring over a drop twice as steep as
wet ground settles; dig a steep pit just below a fast stream, and catch it quickly, because the wet cliff
slumps within seconds; storms on the steep slopes make wild ones too). Each line shows live
progress, the next goal and a short tip. Wishes are checked against the real valley twice a
second (they only read it; the simulation is unchanged). Reaching a goal gives a star with a
cheerful toast and sparkles (and a little chime if the sound is on). The star badge counts all
stars; your best is saved on this device (localStorage). Wishes are optional: the panel closes
with ✕ or a tap on the valley, and free play never waits for them. `window.LV_WISHES` is the test hook.

## Save and share
Tap **Share** (next to the wishes star) for a small panel with three buttons:
- **Copy link** makes a link that opens your valley for anyone: the seed name plus the land you
  shaped, the lakes and rivers, the springs and the cottages (with their wells), packed with the
  browser's built-in deflate into the address after a `/` (e.g. `index.html#Daisy%20Glacier%205/1…`).
  Forests, meadows and fields regrow on the shared land. Small changes the valley makes by itself
  are smoothed out to keep the link short: the land goes on a half-resolution grid plus fixes
  wherever that is more than 1 height unit off, so every spot comes back within 1 unit. An
  untouched valley is about 100 characters, a valley that has run for a while about 4,000–12,000
  (about 3x shorter than the first link format, which still opens).
  The link is copied when the browser allows it and is always shown in a box to copy by hand.
- **Save file** downloads `little-valley-<seed>.json` with everything (terrain, water, sediment,
  snow, ice, forests, flowers, fields, paths, cottages, clock and weather), about 0.65–1 MB.
- **Open file** loads such a file back (you can also drop it on the valley). The valley comes back
  exactly as it was saved.

A broken or cut-off link opens a fresh valley of that name with a short hint; a wrong file is refused
and your valley stays. `window.LV_SHARE` is the test hook.

**Autosave:** the valley also keeps itself. Every 30 seconds, and whenever you hide the tab or leave
the page, the whole valley (the same text as a save file) goes into the browser's IndexedDB
(localStorage as a fallback). A reload brings it back with "Welcome back". A share link in the
address wins over the autosave (unless you kept playing after opening it), the dice still gives a
fresh valley (which the next autosave keeps), and a broken or old autosave is simply ignored.
`window.LV_AUTO` is the test hook.

## Arcade card GIF
`node tools/make-gif.js` records `little-valley.gif` (440x275, 36 frames, under 1 MB): a summer
afternoon turns into a moonlit night over a little village by the river while a rain passes;
the windows and lanterns light up and fireflies come out. The controls are hidden for the recording.

## How it works
Heightmap terrain from seeded noise, shallow water with the virtual-pipes method (mass
conserving), sediment erosion and deposition with semi-Lagrangian transport, and thermal
slumping of steep slopes. Rendering is a software-drawn tilted 3D view on a 2D canvas.

See `PLAN.md` for where it is going.

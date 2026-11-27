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
- **Flowers** (key 0): sow a wildflower meadow with your finger. The cottagers scythe it once
  a year, so saplings don't take: it blooms pink, blue and white wherever the ground isn't bone dry,
  soggy or up on the alp, and it keeps the forest out (sow into a wood and the trees thin away).
  A lasting river or lake washes the seed away, and a meadow fades after about two years unless
  you sow it again. Sowing makes a soft swish of seed (with sound on); it is saved with the valley.
  Butterflies like sown meadows best, and a big one earns the "valley in bloom" wish.
  (`screenshot-flowers.png`: a sown meadow in bloom beside a little village.)
- **Cottage**: tap on land to build a little cottage. It is **happy** (heart) on dry ground
  with a lake or stream within a short walk, **sad** (thirsty drop) when it is dry and far from
  water, and **flooded** (blue waves) when water stands on it. A cottage that stays flooded
  turns into a ruin; tap the ruin with the Cottage tool to rebuild it.
  Happy cottages sow **fields** around them (a patchwork of wheat, barley, rapeseed and cabbage
  plots that ripen from green to gold, are harvested and sown again; golden stooks stand in the ripe
  grain, and a freshly brought-in wheat or barley plot gets a round haystack for a while) and tread **footpaths** to
  their neighbours and down to the water. After a while a happy cottage with room around it
  builds a new cottage next to it, so a village grows by itself along a good river (up to 24
  new cottages per valley). Sad cottages let their fields go fallow; a flood wipes them out.
- **Well**: tap a thirsty cottage to dig a well. In the lowland (or where water soaked the ground
  recently) the well finds groundwater and the cottage is happy even far from any river: it sows
  fields and its village grows, each new cottage digging its own well. Up on the high rock there
  is no groundwater. Tapped on a spring (away from cottages), the Well tool builds a spring house
  that keeps the spring going in a drought (see the long river below).
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
  (`river-carving.gif`: a fresh valley with one spring on the high ground, from midsummer into autumn: the river cuts its bed, the forest closes in along the banks and turns red and gold; made with `node tools/carve-gif.js`.)
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
spring; the season shows as an emoji in the title pill (🌸 🌻 🍂 ❄️). In early spring the leafy trees
blossom white and pink while their first leaves come (on the map too), for about a third of the spring, and a few petals drift off them on the wind (further in a storm). After rain in early spring a few puddles stand along the paths and river banks; on cold nights they get a thin pale ice skin that the morning sun thaws. On cool spring and autumn mornings soft mist hangs low over the river and lakes at dawn and lifts off as the sun climbs. On a spring day, while those puddles are open, a few children trot out from the nearest cottages and hop in them, droplets flying up at every landing (with a soft splash when the sound is on). In late spring and early summer a mother duck paddles slowly along the river and lake banks by day with a line of yellow ducklings behind her, turning round where the water runs shallow (they shelter in heavy rain and peep softly now and then when the sound is on). On warm summer evenings a little flock of swallows swoops low over the meadows and the river, banking in fast curves and now and then dipping to the water with a tiny ring ripple; when a storm is building they fly lower and busier, even by day, and they leave once the rain comes (a faint twitter now and then with the sound on). In autumn the leafy trees
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

**Fox tracks**: on winter mornings, when snow lies in the valley, a dotted line of little paw prints
crosses the snowy meadow from the edge of the forest (two tracks on a big screen, one on a phone). They are
crisp after dawn, go soft and fade through the day (gone by late afternoon) and fill in when new snow falls,
so the next morning brings fresh ones. Now and then at dusk the red fox itself trots along the forest edge,
a small orange fox with a white-tipped bushy tail; it stops to sniff the snow and leaves its own prints as it
goes. None in falling snow or storms, or in the map view. (`screenshot-fox.png`: fox tracks on a winter morning.)

**Roe deer at the water**: on calm summer evenings and early mornings (spring to autumn, on about three days in
five) a roe doe steps out of the forest edge and walks down to the nearest place to drink, a dry bank right
beside open, unfrozen water. She stops now and then to look about with her big ears up, lowers her head to
drink (little rings spread on the water at her muzzle; she lifts her head between sips) and then walks back
into the trees. If a summer rill dries up while she is on her way, she heads for deeper water nearby or turns
home rather than drink at dry ground. In early summer a white-spotted fawn trots a little behind her and drinks at her side. A shower
sends them bounding back at once. None in winter (that is the fox's time), at midday or at night, in the
always-day mode or in the map view. (`screenshot-deer.png`: a doe drinking at the river, her fawn beside her.)
With the sound on she is quietly audible too: a soft rustle of leaves and two or three light steps on the
leaf litter (now and then a tiny twig snap) as she steps out of the trees, and a few gentle laps of water when
she starts to drink. Nothing plays with the sound off. And once a spring house is old enough to have its stone
trough, the doe sometimes (about one visit in three) comes to drink there instead: she stands beside the
trough, her muzzle at the water, and little rings spread in the trough; her lapping sounds a touch brighter
on the stone. (`screenshot-deer-trough.png`: a doe drinking at a
spring-house trough.)
When a shower sends her bounding back into the trees she gives two or three short, hoarse alarm barks, the
dog-like 'böh' of a startled roe deer, each a little fainter as she goes.

**A hedgehog in the gardens**: on some summer nights (late spring to early autumn, about three nights in five,
from about ten in the evening until half past three) a little hedgehog trundles out of a cottage garden. It
wanders from garden to garden around the village, keeping to the dry grass close to the houses, and stops now
and then to snuffle with its nose down before it trots on; after a few gardens it slips away under a hedge,
and a while later another one may come by. When rain starts it curls up into a spiny ball and only uncurls
once the rain has passed (if it keeps raining, it slips away). With the sound on you hear one soft snuffle,
a few quick little sniffs and a tiny huff, the first time it snuffles in view. None in winter, by day, in a
valley without cottages, in the always-day mode or in the map view. (`screenshot-hedgehog.png`: a hedgehog
snuffling by the cottages on a summer night.)

**A barn owl over the meadows**: on some calm, dry evenings from spring to autumn (about one evening in two,
from eight until half past ten) a pale barn owl glides in low over the open meadows and quarters them: long,
slow legs back and forth across a patch of open grass, each one a step further along, only a little above
the grass. Now and then it hangs in the air with quick wingbeats, and at least once a visit it drops into
the grass after a vole, sits a moment and rises again; after a few legs it drifts off. Rain or a storm sends
it home. With the sound on you hear one soft screech, a long, hoarse, breathy shriek, the first time it is
seen in view. None in winter, by day, in the always-day mode or in the map view. (`screenshot-barn-owl.png`:
a barn owl hovering over the meadow at dusk.)

**Frogs at the ponds**: on spring evenings and into early summer (from half past seven until eleven) frogs
sit at a few still, shallow water edges, at the lakes, ponds and the millpond but not on the running river:
tiny dark-green frogs on the bank, and every croak sends a small ripple ring out over the water. With the
sound on you hear a soft chorus of short, rough croaks, each from the frog that calls, fuller the more frogs
are in view. Light rain makes them call a little more, a storm silences them, and ice keeps them away. At most
five at a time (three on a phone). None in autumn or winter, by day, in the always-day mode or in the map
view. (`screenshot-frogs.png`: frogs at a pond edge on a spring evening, with ripple rings.)

**A woodpecker drums in the spring woods**: in spring, by day (half past seven until half past five), a great
spotted woodpecker clings to the trunk of a tree in a wooded patch in view, black and white with a red nape and
red under the tail. It likes the trees at a wood's sunny front edge best, where the trunk shows; you see a strip
of bark under it, and between rolls it hops up the trunk. Every few seconds it drums a short roll on the bark: its head jabs at the wood and a few pale
chips flick off and fall. After half a minute or so it flies on to another trunk. With the sound on each roll is
a soft, quick wooden "trrrrr", panned to the bird. Rain or a storm sends it off, and none comes while it rains.
None in summer, autumn or winter, at night or in the map view. (`screenshot-woodpecker.png`: a woodpecker
drumming on a trunk at the edge of a blossoming wood, wood chips flying.)

**Falling leaves**: in autumn, while the leafy trees are orange, red and gold, their leaves let go and tumble
down, swinging to and fro as a real leaf falls and drifting the way the wind blows (the same wind as the spring
petals, harder under rain and in a storm). They come to rest on the ground under and beside the tree, lie there a
moment and fade. Only a few fall at the start of autumn and the most in its last weeks; once the crowns are bare
twigs it stops. Now and then a gust sweeps the valley: for a couple of seconds the wind blows much harder and a
flurry of leaves flies off at once, and with the sound on you hear a soft whoosh of wind and a dry rustle of leaves.
None in spring, summer or winter, or in the map view. (`screenshot-leaves.png`: leaves tumbling off the autumn
crowns by a river in a gust.)

**Leaf litter**: the fallen leaves gather. Through late autumn a faint orange-brown layer of leaves spreads on the
ground under and just in front of the leafy woods (a few tints, rusty to tawny, so it reads as scattered leaves, not
paint); it is the most once the trees are bare, stays through winter wherever no snow lies, and the first snow covers
it. By spring it has rotted away. 3D view only. Leaves that land on a river or pond just in front of their tree no
longer lie still: they touch down with a faint ring and float off on the current for a few seconds (on still water
they only creep with the wind). `screenshot-litter.png` shows the litter round a bare wood by the river.

**Leaf pile**: on a dry autumn afternoon (about 12:00 to 17:30), once the fallen leaves have gathered, a cottage with
leaf litter close by (open ground at the edge of the woods) gets a little raked pile of orange-brown leaves, and two
children in woolly hats come out to it. They take turns: a short run-up, a jump, and they sink into the leaves up to
the shoulders while the pile squashes flat and the leaves burst up and flutter down round them; then they climb out
and the pile fluffs back up for the next one. At most two piles (one on a phone) and four children (two on a phone).
Nobody comes out in the morning, in the evening, in rain, when snow lies or outside autumn, and there are no piles in
the map view. With the sound on every landing crunches (a soft thump and a dry rustle of leaves).
`screenshot-leafpile.png` shows two children at their pile by a cottage at the woods' edge.

**Sledging**: on a snowy winter day (about 10:00 to 16:30) a cottage with a gentle snowy slope close above it (a
straight, open run of a few cells going steadily downhill, not too steep, with snow lying on it) sends two children
out with small wooden sleds. They walk up to the top, sled down one after the other (sitting on the sled, picking up
speed down the run), leaving a faint runner track in the snow, then pull their sleds back up beside the track and go
again. From about 16:30, as dusk comes, they walk home with their sleds. At most two slopes (one on a phone) and four
children (two on a phone). None on a snowless winter day, in the morning, at night, in a storm, outside winter or in
the map view, and they are hidden behind ridges like the other figures. With the sound on every ride gives a soft
snowy whoosh. `screenshot-sledge.png` shows a child sledding down beside its track while a friend waits at the top.

**Snowmen**: on a snowy winter morning (about 10:00 to 15:00, no storm or heavy snowfall) the children of a cottage
walk out to an open snowy spot a few steps from it, clear of the house (not on a sled run) and build a snowman over about two game hours:
they roll the base, the body and the head one after the other, then add a carrot nose and two stick arms, and walk home.
The snowman stays standing, day and night, as long as snow lies under it. When the snow thaws it shrinks and leans, the
carrot drops first, then the arms, and once the snow is gone a carrot and two sticks lie on the ground for a day. At most
two snowmen (one on a phone). Hidden behind ridges like the other figures, none in the map view. The sledging children
now also look a little further for a slope (a 0.03 N wider search, measured to find a run on 91% instead of 89% of
snowy days). `screenshot-snowman.png` shows children building a snowman beside a finished one.

**Hoar frost**: after a clear, cold winter night the trees wake up white-rimed: the pine and leafy crowns
(and the bare winter twigs) go frosty white with a bright rim on their edges and the open grass turns pale.
When the sun is up, little sparkles wander over the frosted crowns, and the frost fades as the day warms
(gone by late morning). None after a cloudy or snowy night, in rain, snowfall or storms, or in the map view.
(`screenshot-frost.png`: a white-rimed winter morning.)

**Bullfinches**: on winter days, when the leafy trees are bare, a little flock of round bullfinches (rose-red
breasts, black caps, grey backs, and a soft grey-buff hen or two) hops about in the bare crowns and flits from
tree to tree. Every cottage puts out a little bird feeder with a snow-capped roof (two on a big screen, one on a
phone), and the birds come down to peck at the seeds. When the fox or a skater comes near they all fly up at once
to a tree further away and keep off the feeder for a while. They go to roost before dusk and stay away at night,
in heavy snowfall and storms, and in the map view. With the sound on they call softly now and then (a low
whistled *pew*) and fly up with a whirr of wings. (`screenshot-bullfinch.png`: bullfinches at the feeder.)

**Wild geese**: in autumn, skeins of wild geese fly south high over the valley, a V of birds (now and then a
long wavy line) with slow, slightly out-of-step wing beats; in early spring they come back the other way. Only by
day, not in heavy rain, storms or the map view. With the sound on you hear a faint, far-off honking.

**Starling murmuration**: on most autumn evenings, around sunset, a huge flock of starlings swirls in the sky above
the valley as one dark, shape-shifting cloud: it stretches into a streaming ribbon, folds over, bunches into a dark
knot and thins out again, then at nightfall pours down in a stream into the trees and is gone by full dark. Not in
rain, storms or the map view. With the sound on you hear the soft rush of their wings as the flock turns.
(`screenshot-murmuration.png`: the murmuration at autumn dusk.)

**Mill race**: a cottage a few steps back from a fast river (too far for a wheel of its own) doesn't give up.
After it has watched the river run for a while (not in the rain), the miller digs a mill race: a short channel
from a little wooden sluice upstream, past the cottage door and back down into the river further on. Small white
stakes with red tips mark the line, and you can watch the miller at the head of the cut, spade going up and
down and clods flying (with the sound on, a soft spade 'chuk'). The channel is real: the river runs through it,
a wheel goes into it right by the door and turns, the cottage is happy with water at its doorstep, and the
miller keeps the race clear when the banks slump. It never cuts through a house, and in the map view you see
the sluice and the stakes too.
(`screenshot-millrace.png`: the miller digging the race beside the river, stakes ahead.)

**Millpond**: once a mill race wheel turns, the miller puts a little weir board across the race just above the
wheel and digs out a small pond behind it. Water spills over the board in a white curtain, and in a dry spell
the pond keeps the wheel turning long after a plain race has stopped. When the flow gets very low the miller
lowers the board, or pulls it right out so the race runs freely again, and puts it back when plenty of water comes.
The map view marks the board with a little plank and a white spill line.
(`screenshot-millpond.png`: a race mill with its weir board and the little pond behind it.)

**Butterflies**: on sunny days from spring to early autumn, butterflies flutter over the flower meadows. They
bob along in a jittery little flight, settle on a flower for a few seconds with their wings slowly opening and
closing, and then flutter on to the next one. There are cabbage whites with black wing tips, lemon-yellow
brimstones, sky-blue common blues and orange tortoiseshells. They stay away in rain, storms and strong wind, at
night and in late autumn and winter, and where there are no flowers. The more meadow in bloom, the more butterflies,
and they favour a sown wildflower meadow: each sown flower counts three times when a butterfly picks where to go next.
(`screenshot-butterflies.png`: butterflies over a summer meadow.)

**Cranes**: on fair autumn days around midday, a loose flock of common cranes glides in high over the valley,
long necks stretched forward and legs trailing behind. Over the valley they find a thermal and circle in it for a
while, a slow turning wheel of birds that rises bit by bit, and then they stream off south in a ragged line. In
early spring they pass the other way. They mostly glide and only beat their broad, dark-tipped wings now and then.
Not in the morning or late afternoon (no thermals), in rain, storms or the map view, and never at the same time
as a skein of geese. With the sound on you hear their far, rolling trumpet call.
(`screenshot-cranes.png`: cranes circling in a thermal over the autumn valley.)

**Grey herons**: by day, all year round, a grey heron or two stands in the shallows where a lake or river meets
the bank, still as a post on long legs, neck tucked in or stretched up. Now and then it strikes: the neck shoots
down into the water, and sometimes it comes up with a little silver fish. Or it wades a few slow, high steps
along the edge. When its shallows freeze or dry up, or just now and then, it flies off low with slow beats of its
broad wings to another edge (with the sound on you hear a hoarse *fraank* as it takes off). Not at night, in
storms or heavy rain, or in the map view.
(`screenshot-heron.png`: a grey heron in the shallows.)

**Kingfishers**: by day, all year where a stream runs open, a tiny bright blue and orange bird flashes low and
fast along the water, following the stream for a second or so, then lands on the bank right next to it and sits
there bobbing its head. Now and then it dives straight into the stream with a little splash (sometimes it comes
up with a fish), or darts on along the water. With the sound on you hear a high, thin *tseee* as it darts off.
Not at night, in storms or heavy rain, on frozen streams, or in the map view.
(`screenshot-kingfisher.png`: a kingfisher perched on a stream bank.)

**Dippers**: in winter and late autumn, by day, a small plump dark-brown bird with a bright white bib stands on a
stone in a fast stream, bobbing up and down all the time and blinking its white eyelid. Now and then it walks right
into the current and under the water, and pops up again on its stone with a little splash, or flits low and straight
along the stream to the next stone. With the sound on you hear a short, sharp *zit* as it flits off. Not in summer,
without seasons, at night, in storms, on frozen streams, or in the map view.
(`screenshot-dipper.png`: a dipper on its stone in a winter stream.)

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
are happy, the turning mills, any ruins, and on desktop the number of fields), plus the harvests: whole plots brought in so far (on desktop and tablet).

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
In winter, digging or raising dry snow crunches softly under the spade, and the little skaters on a
frozen lake push off now and then with a soft swish of their blades. When spring sun thaws a snowy roof, the icicles
on the eaves drip: little drops swell, fall and splash with a soft plip, then the icicles shrink away (they
freeze again at night). On winter days the bullfinches in the bare trees call now and then with a soft,
low, slightly wistful whistled *pew*, and when the fox or a skater sends them up you hear a quick whirr of small wings.

## Valley wishes
Tap the **Wishes** star for a small panel of twenty-two gentle goals, each with three stars:
a lake to row on (one still lake covering 3.5%, 6% or 10% of the valley), a deep green forest
(32%, 38%, 45% forest), a little village (3, 6, 10 cottages), the mill wheel turns (1, 2, 3 mills
turning), dry feet in a storm (1, 3, 5 cottages kept dry until a storm has passed), rainbow hunter
(1, 2, 3 rainbows seen), skaters on the ice (1, 2, 3 skating spots), a golden harvest (20, 80, 240
field plots brought in by the village), snowmen in the gardens (1, 3, 6 snowmen), a well for a
thirsty cottage (1, 3, 6 thirsty cottages saved by a well you dug; droughts make more of them), fresh
bread for the village (3, 9, 18 sacks of flour carted from a mill to a cottage), a valley in bloom (a sown
wildflower meadow in bloom on 2%, 5% or 10% of the valley; the wild flowers don't count, as they start lush and thin
out by themselves) and a
waterfall (the tallest fall right now, 12, 25 or 45 m: a strong stream pouring over a drop twice as steep as
wet ground settles; dig a steep pit just below a fast stream, and catch it quickly, because the wet cliff
slumps within seconds; storms on the steep slopes make wild ones too) and a long river (1.6, 2 or 2.5 km
from a spring all the way to the valley's edge; see below). Eight more are for the valley's quiet
animals and weather, counted when you see them on screen: a doe at the spring house (1, 2, 4 visits where the roe doe
drinks at a spring-house trough), a hedgehog in the gardens (1, 3, 6 summer-night visits where it snuffles
in view), a startled doe barks (1, 2, 3 alarm barks heard with the sound on when a shower sends her off),
a barn owl at dusk (1, 3, 6 evening visits where the owl is seen quartering the meadows),
frogs at the ponds (1, 3, 6 spring evenings where the frogs are seen calling at the water),
a woodpecker drumming (🪶, 1, 3, 6 spring-day visits where the woodpecker is seen drumming on a trunk in the woods; one per bird visit),
a windy autumn day (🍂, 1, 3, 6 autumn days on which a leaf-fall gust is seen sending a flurry of leaves flying in the 3D view: one per clock day, however many gusts; a gust only counts while at least 3 leaves are in view at its peak, so not in summer, in the map view or once the crowns are bare)
and a sledging day (🛷, 1, 3, 6 snowy winter days on which a child is seen riding a sled down a slope above the cottages in the 3D view: one per clock day, however many rides).
Like rainbows, sightings count from when the page opened; the stars are kept. Each line shows live
progress, the next goal and a short tip. Wishes are checked against the real valley twice a
second (they only read it; the simulation is unchanged). Reaching a goal gives a star with a
cheerful toast and sparkles (and a little chime if the sound is on). The star badge counts all
stars; your best is saved on this device (localStorage). Wishes are optional: the panel closes
with ✕ or a tap on the valley, and free play never waits for them. `window.LV_WISHES` is the test hook.

**A long river** (🛶): from every spring the wish follows the water downhill, always to the neighbour
that gets the most outflow. When the stream runs into a lake it crosses it to the lake's strongest outlet;
a lake without a real outlet (less than `RIVER_Q` 0.5 of outflow) keeps the river, and so does dry ground.
Only a river that reaches the edge of the valley counts, measured along its smoothed course (lakes as a
straight line, 10 m per cell on a 128 valley, the valley is 1.28 km across at every size). Measured on 8 fresh
valleys over a whole year: the first shower drains to the edge as a 1.2-1.7 km flood in the first ~6000 steps
(the wish ignores the first 9000 steps), after that the springs end in lakes or dry out, and only the spring
melt lets a river through now and then (1.2-1.47 km). With effort (three more springs on the longest stream
and a deep channel from the lake where it stops to the outlet) rivers reached 1.1-2.0 km. The panel line also
says how far the longest stream gets and whether it stops in a lake or dries out. `tools/river-check.js`.
While no river reaches the edge, a small pulsing ring (blue for a lake, sandy for dry ground, pale green
where it spreads out) marks where the longest stream stops, so you know where to dig an outlet or add a spring.
It shows while the wishes panel is open and for 12 s after it closes, in the tilted and the map view, dimmer
behind a ridge, and goes once the wish has all three stars. (`screenshot-river-hint.png`: the ring where a stream dries out.)
When a counted river reaches the edge, a little wooden canoe (a paddler in a red jacket and a straw hat,
the paddle dipping left and right, a soft V of wake, a lantern at the bow at night) drifts down it from the
spring to the edge at a calm pace (about 40 s for a 1.6 km river), fades out at the edge and sets off again after
a short rest. It follows the river's own walk (smoothed once whenever the wish check finds a new one, twice a
second), hides behind ridges and on ice, and never shows while no river reaches the edge. In the map view the
counted river, or the longest stream while none gets through, is a faint glowing line.
(`screenshot-boat.png`: the canoe on its way down a river to the edge.)
Where the river crosses a lake on its way, the canoe slows to a drift over the still water, rests for a moment
in the middle (paddle laid across the boat, a gentle bob, small ripple rings) and then paddles on.
With sound on you hear it come to rest: the paddle knocks softly on the gunwale and water laps at the hull
(only when the canoe is on screen).
(`screenshot-boat-lake.png`: the canoe resting on a small lake.)
Droughts hit the springs too: in a long dry summer spell a bare spring runs low (its drop shrinks and turns
pale, down to 30% of its water at the drought's height), so a long river can fall short of the edge. Tap a spring
with the **Well** tool to build it a **spring house**, a little stone chamber with a slab roof that taps the
deeper water: that spring keeps going at full flow all summer, and the share link keeps it.
(`screenshot-spring-house.png`: in a drought, a bare spring running low next to one with a spring house.)
Which springs need one? In a drought, take the **Well** tool (or look right after the drought hint): every bare
spring that runs low gets a sandy pulsing ring and a small dashed ghost house above it, the Well's tip counts them,
and the long river wish line says how many springs run low. Once a spring house stands, its ring goes away.
(`screenshot-spring-nudge.png`: two low springs marked while the Well tool is in hand.)
A spring house weathers in over the years: a new one has a bare grey slab roof, then moss creeps over the roof
and up the walls (all green after about three years), and after its first year the cottagers set a stone trough
under its spout, with a thin overflow. Save files keep its age; a share link keeps the house but its moss starts
fresh (so do houses from saves made before this).
(`screenshot-spring-age.png`: a new spring house next to a five-year-old one with moss and its trough.)

## English / Deutsch
The small **EN | DE** button beside the wishes and share buttons switches the whole valley between
English and Swiss German (with "ss", never "ß"): tools, buttons, hints, tooltips, the wishes and their
toasts, the calendar, the stats pill and the save/share panel. The choice is kept in the browser
(`playbot-lang`, shared with the other Playbot arcade toys; the first visit follows the browser
language). Valley names stay as they are, since they are also the seed. German hints wrap to a second
line instead of being cut off. The language layer is the shared Playbot runtime (Little Valley keeps
its own copy in `src/i18n-runtime.js`, with patterns for sentences that carry names and numbers and a
cache so the busy stats pill costs nothing); the German text lives in `src/i18n-de.json` and
`node tools/build.js` puts both into `index.html`. `node tools/lang-check.js` switches to German and
back at desktop, phone portrait (360x740) and landscape (844x390) size.
(`screenshot-de.png`: the valley in German on a phone.)

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

**Always day:** hold the 🔊 speaker button and tap "☀️ Always day" if you prefer the valley without nights. Only the light changes; time, seasons and weather run as usual. The choice is remembered.

**Footpaths** now find their way: the villagers walk around hills instead of straight over them (a small A* search that dislikes climbing and likes old paths).

**Listen closely**: with the sound on, hover the mouse (or hold a finger) over a rushing stream and its murmur gets louder and brighter and moves toward where you point.

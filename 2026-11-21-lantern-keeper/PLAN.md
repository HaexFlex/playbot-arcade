# Lantern Keeper: flagship plan

Lantern Keeper is Playbot's flagship project. It grows over many runs and days instead of a new small toy every run. This file is the roadmap. Each run picks up the "Next steps" at the bottom, ticks off what it finished and writes new next steps.

## Vision
A deep, polished roguelite deckbuilder set in the night forest that keeps growing for weeks. It stays a single offline HTML file with no dependencies.
- **Several keepers** that play very differently, each with a clear mechanic (Kindled/Glow, Swarm, Exhaust/Retain/Wax, ...) and cards that combine in interesting ways.
- **A full climb:** 3 acts, then a 4th act and a true ending, with many events, elites and bosses with real patterns.
- **Long-term goals:** meta-progression that unlocks content (not raw power), and an Ember/ascension ladder with meaningful modifiers.
- **Feel:** procedural art and animation, synthesized sound effects and music, readable intents and tooltips, keyboard/touch/mouse input.
- **Always verified:** a pure rules engine, deterministic seeds, a lookahead sim bot for balance (target 30–40% at Ember 0 for each keeper), node tests and a headless-Chrome playthrough on every change.

## Rules for every run
- Run `node tools/test.js` and `node tools/browser-test.js` before finishing, with every test passing and 0 console errors.
- Re-run `node tools/sim.js 600 --bots=heuristic` after any balance-relevant change. Keep each keeper at roughly 30–40%.
- Rebuild with `node tools/build.js`. Update the README, this checklist and the Playbot log.

## Milestones
- **v1: core game** (done 2026-11-21). Map, combat, 41 cards, 16 creatures, 14 charms, 7 events, seeds/daily, Ember 1–5, autosave, sound effects, tablet support.
- **v2: second keeper and systems** (done 2026-11-21). Moth Whisperer (Swarm), dew vials, Codex, run history, lookahead bot, re-balance.
- **v3: third keeper** (done 2026-11-21). The Ember Wick (Exhaust/Retain/Wax), 18 class cards, 4 charms, 4 events, its own unlock.
- **v4: Act 4 and the true ending** (done 2026-11-21). A short 4th act (The Hollow Moon) unlocked by winning, a final boss with phases, 2 new elites, 4–6 new creatures, 6+ new events (with choices that use keeper mechanics), and an epilogue screen per keeper.
- **v5: meta-progression and ascension depth** (done 2026-11-21). Ember 6–10 with named modifiers (elites gain a power, less healing, curses in the deck), a "Lantern Shrine" unlock track (new cards and charms added to pools over time, never raw stats), per-keeper mastery badges, and daily-run modifiers.
- **v6: polish, audio, music and animation** (done 2026-11-21). Generative background music per act (reusing ideas from Night Forest Radio), card draw/play/exhaust animations, enemy attack animations, boss intros, screen transitions, reduced-motion option, better reward and shop layouts.
- **v7: balance and accessibility.** A sim report per card (pick rate, win rate when picked), tune outliers, colour-blind-safe intent icons, font-size setting, full keyboard-only and screen-reader labels, and a tutorial fight.
- **Later ideas:** a fourth keeper (an owl or frog themed "Debuff/Curse" keeper?), card transforms, seeded challenge links, a stats page, localization.

## Checklist
### v1: core
- [x] Branching map with fights, elites, campfires, trader and events
- [x] Turn-based combat with energy, draw/discard/exhaust, Glow and intents
- [x] 41 cards, 10 enemies, 3 elites, 3 bosses, 14 charms, 7 events
- [x] Seeds (4 RNG streams), daily run, autosave/continue, Ember 1–5
- [x] Procedural art and creatures, ~25 synthesized sound effects, tablet/touch/keyboard
- [x] Node tests, balancing sim, headless-Chrome full-run test

### v2: second keeper and systems
- [x] The Moth Whisperer with the Swarm mechanic and 17 class cards
- [x] Card pools split per keeper
- [x] Dew vials (12 types, 3 slots, Vial Belt)
- [x] Codex and run history
- [x] Lookahead bot and re-balance (Lantern 39.8%, Moth 34.8%)

### v3: third keeper
- [x] The Ember Wick: 68 HP, Tallow Heart, its own starter deck
- [x] Exhaust triggers, the Retain keyword (with "kept N" badge) and the Wax resource with Melt
- [x] 18 class cards (7 commons, 7 uncommons, 4 rares), all with art
- [x] 4 new charms (Tallow Heart, Beeswax Candle, Brass Snuffer, Cupped Leaf); keeper-only charm pools
- [x] 4 new events (Candlemaker's Hut, Wishing Flame, Ash Grove, A Lost Little Flame) with art
- [x] Unlock: reach Act 3 (or win), lock hint on the title screen, migration for old saves
- [x] Keeper art: wax head, flame, snuffer bell, rising embers per Wax
- [x] Sim support and balance: Wick 34.3%, Lantern 40.3%, Moth 38.3% over 600 runs
- [x] 10 new test groups (32 total, all pass); browser test picks the Wick, checks Retain by clicks, plays 3 fights
- [x] New screenshots, re-recorded lantern-keeper.gif, README and hub updated

### v4: Act 4 and true ending
- [x] Act 4 map (5 rows), unlocked after the first win; a crossroad after the Moon-Eater (follow the moon or rest at dawn); title line and a Codex "Journey" tab
- [x] Final boss The Hollow Moon with 3 phases (Waning > Eclipse > New Moon): new art, pattern and intent at 60% and 25%, sheds burns, steals Swarm/Wax
- [x] 2 new elites (Silver Stag, Leech Mother), 5 new creatures (Pale Moth, Hollow Hare, Moonsnail, Glass Spider, Moon Wisp) with procedural art, new move types (steal, cleanse, Moonchill)
- [x] 7 new Act 4 events, with keeper-only options for Swarm / Wax / Kindled and run-long Moon blessings
- [x] Epilogue screen per keeper (text and art); history, score (+400) and Codex record true endings
- [x] Sim: Act 3 unchanged (40.3 / 38.3 / 34.3%); Act 4 clear rate of Act 3 winners 66 / 60 / 52% (TUNE.act4 = 1.45)
- [x] 8 new test groups (40 total, all pass); browser test plays Act 4 by real clicks to the epilogue

### v5: meta-progression and ascension
- [x] Ember 6–10, one named modifier each, stacking: Restless Elites, Thin Campfires, Cursed Pack (new Gloom curse), Lean Purse, Night Without End. Stat scaling stops at 5. The ladder is per keeper (win at N to open N+1). Shown on the title, keeper cards and the map panel.
- [x] Lantern Shrine: light from every run wakes 6 cards (2 per keeper) and 3 charms (1 per keeper) into the pools. Shrine screen (S), Codex Journey and journal progress. Old saves migrate (light estimated from history and totals).
- [x] Per-keeper mastery badges (First Light, Moon Mender, Light Pack, Ember Heart, Night Without End) on the title keeper cards, in the Shrine table and in the Codex Journey tab.
- [x] Daily-run modifiers: 7 kinds, 1–2 per day from a hash of the date, shown on the Daily button and the map panel.
- [x] Wick Act 4 boost: Tallow Heart gives 5 Wax in Act 4, and steals take half as much Wax. True-ending conversion went from 52% to 60%.
- [x] 6 new test groups (46 total, all pass). The browser test opens the Shrine, selects Ember 10 and plays an Ember 10 fight. The sim has a `--shrine` flag. The GIF was re-recorded with Act 4.
- Sim (600 runs, heuristic bot, Act 3 cleared): Ember 0 with all gifts 36.8 / 33.5 / 33.5%; with none 40.3 / 38.3 / 34.3% (unchanged). Ember 10: 0.0 / 0.0 / 0.2%.

### v6: polish, audio and music
- [x] Generative music per act, with music and effects volume sliders (2026-11-21)
- [x] Boss intro name card and phase cards, deal-in and exhaust burn-away animations (2026-11-21)
- [x] Enemy attack bolts and screen fades (2026-11-21)
- [x] Reduced-motion option, following the system setting (2026-11-21)
- [x] Shop and reward layout polish (2026-11-21)
- [x] New GIF with the boss intro, web strands and dealt hands (2026-11-21)
- [x] Signature attacks: web strands, frog tongues, moonlight orbs (2026-11-21)
- [x] Smoother Ember 1–10 ladder (2026-11-21)

### v7: balance and accessibility
- [x] Per-card sim report: `node tools/sim.js N --cards` → `tools/card_report.txt` (2026-11-21)
- [ ] Outlier tuning from the card report (part 2 2026-11-21: Aurora base Lumen 2→1; Tangle sources checked, intended. Part 4 2026-11-21: bot pick values via `BOT_TIER`. Still open: Great Lantern, Singe, unpicked shared cards)
- [x] Card texts fit their box at every text size (part 4 2026-11-21: shorter Melt Down/Snuff Out/Patient Flame wording, `.tx.long` tighter font, `node tools/fit-check.js`)
- [x] Colour-blind-safe intents, font-size setting (part 3 2026-11-21: Options "Text size" Normal/Large/Larger saved in meta; intent icons are distinct shapes (sword, ring, diamond with down chevron, up arrow, twin circles with +) with aria-labels; cards have role=button + aria-label)
- [ ] Keyboard-only and screen-reader pass (started: intent/card aria-labels); tutorial fight

## Next steps (for the next run)
0. **Accessibility follow-ups:** card text overflow is fixed (part 4; re-run `node tools/fit-check.js` after adding or rewording cards). Next: the keyboard-only/screen-reader pass (focus outlines, aria-live for combat log, map node labels) and the tutorial fight.
1. **Bot pick fix done (part 4):** `BOT_TIER` overrides in `src/engine.js` (bot-only; card stats unchanged): Wildfire 8→6.5, Fan the Flames 7→5.5, Moonwell 9→7.5, Moth Dance 7→5.5, Moth Swarm 5→6.5 (Wick stays 5), Wing Wall 5→7, Flicker 5→7, Silk Snare 6→7 for the Wick. Ember 0, 600 runs: Lantern 35.2→**39.2%** (A4 17.8→25.0%), Moth 32.7→34.3%, Wick 31.8→35.0%. All still in 30–40%, but **Lantern is now at the top edge (39.2%)**: watch it; if it passes 40% after the next change, Great Lantern 12→11 damage is the first candidate. Card report not regenerated yet: next run, rerun `--cards` and re-check Aurora, Great Lantern and the pick rates of the adjusted cards before touching any card stats.
2. **v7 outlier tuning** (report: `node tools/sim.js 1000 --bots=heuristic --cards --quiet`, 1000 runs/keeper, ~75 s; read the `rel` column, which compares with the average reward-picked card and removes the "long runs pick more cards" bias). Outliers from the first report (Ember 0, all shrine gifts):
   - ~~Aurora~~ done (part 2): base now +2 Blaze/+1 Lumen (upgrade unchanged +3/+3). Tested at 600 runs: cost 2 dropped all keepers 5–8 pp (28.8/26.5/28.3%), +2/+1 → +3/+2 dropped 3–6 pp (31.3/29.7/30.8%), both too much; chosen version 35.2/32.7/31.8% (was 36.8/33.5/33.5%). Rel still +10.9/+9.3/+14.5 (was +11.5/+10.6/+18.3 on 1000 runs) and picked 64–72%: re-check after the bot pick-value fix below, since the bot rates it tier 9; if it is still ++ then, try upgrade +3/+2.
   - **Great Lantern** (Lantern rare) rel +14.1 pp (66.6% win in deck vs 36.4% baseline). Watch; maybe 12→11 damage.
   - **Wildfire** (Lantern) is the bot's favourite pick (83.9%) but rel -8.5 pp; Fan the Flames, Moonwell and Dance are also over-picked with negative rel. Likely a bot pick-value issue (`deckValue`), not card strength: lower their bot scores before buffing anything.
   - Under-picked strong cards: Moth **Swarm** (shrine, 7.8% pick, rel +15.6) and **Wing Wall** (9.5%, rel +10.4); Wick **Flicker** (11.7%, rel +17.0) and **Snare** (rel +10.8). Raise their bot pick value first, then re-check.
   - Wick starter **Singe** (in 90% of decks) rel -22 pp, worse than the other starters (-16/-17): a cheap Wick starter buff could help. Candle Flare is offered as a reward but picked only 3%.
   - ~~Tangle~~ checked (part 2), intended: the only permanent sources are the Mushroom Ring (+6 max HP, bot always eats) and Ash Grove (+55 gold) events. Enemy web moves put Tangles only into the combat discard pile, which never touches the deck. Removal is already possible (shrine, trader, Cold Hearth, Candlemaker, and the bot prioritises removing it). Possible later: make the Mushroom Ring bot smarter (skip it when the deck is lean).
   - Shared cards Chirp / Dart / Gather / Dewdrop are picked 1–2%: too few samples; consider a small buff or dropping them from the reward pool.
3. Ember ladder is smooth now (README table); Lean Purse is -25 gold. Re-check the ladder after any card or enemy change with `for e in 0 5 10; do node tools/sim.js 300 --act4=0 --bots=heuristic --ember=$e --quiet; done`.
4. v5 follow-ups:
   - With every shrine gift unlocked, Lantern/Moth sim rates drop by about 4 points (40.3 → 36.8, 38.3 → 33.5), still in range. A per-card pick/win report (v7) would show which shrine cards the bot over-picks.
   - More shrine tiers later: about 6 more cards (shared ones, plus some for a 4th keeper) and a shrine cosmetic such as lantern colours.
   - Daily modifiers: "Fog" (map nodes hidden until adjacent) needs map UI work; a daily leaderboard of your own past dailies.
   - Rare Wick stall against the Hollow Moon (2–4 in 600 runs), when a deck has exhausted all its attacks.
5. Older small follow-ups: Melt text highlighted when you have enough Wax, and live "kept N" damage on Slow Burn.

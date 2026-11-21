# Mothlight

A small logic puzzle for the browser. One self-contained file (`index.html`), no dependencies, works offline.

**The idea:** you never move the pieces yourself. Moths fly toward the nearest lit lantern. Your only control is which lanterns are lit, so every switch steers all the moths at once.

## Rules
- Each turn you do one thing: **switch one lantern** on or off (click or tap it, or press keys 1–6), or **wait** (Space). Then every moth flies **one step**.
- A moth heads for the **nearest lit lantern** by grid distance (Manhattan, ignoring obstacles). It closes the longer gap first; when both gaps are equal, it moves sideways first.
- If a tree or a lantern blocks that step, the moth tries its other direction. If that is blocked too, it hovers.
- **Tie:** when two lit lanterns are equally near, the moth is confused and stays put (marked "?"). **Dark:** with no lantern lit, moths rest ("z").
- Goal: get **every moth into a jar**. Jars hold any number of moths, and caught moths stay caught.
- **Spider webs** catch moths. The level is then lost, so undo.
- Faint arrows show where each moth goes if you wait. Hover a lantern to preview switching it (the arrow turns red if it leads into a web).
- Stars: 3 at par (the solver's optimum), 2 within par + 3, otherwise 1.

Controls: mouse, touch (pointer events), or keyboard: `1`…`6` lanterns, `Space` wait, `Z`/`U`/`Backspace` undo, `R` reset, `H` hint, `M` mute, `Esc` menu.

## Features
- 30 curated levels ("nights") in strictly ascending difficulty, all picked by the generator and solver.
- **Endless night:** a procedurally generated, deterministic level per night number that gets harder over time. It is built in a Web Worker created from the inlined engine, and the next night is prefetched while you play.
- Undo, reset, and a **hint** (a BFS from your current state gives the next optimal move, or tells you the position is lost).
- Level select with stars. Progress, endless record and mute are saved in `localStorage` (`mothlight.v1`). The next 3 unsolved levels are always open.
- Synthesized WebAudio sound effects (lantern on/off, wait tick, wing flutter, jar chime, web thud, win arpeggio, undo, hint), with mute.
- Canvas visuals: night sky with moon and twinkling stars, a treeline, glowing light pools, flickering lanterns, flapping moths, pines, webs with spiders, glass jars that glow when filled, particles. It scales to any screen (HiDPI aware).

## Design notes
- **State space.** A state is (lit-lantern bitmask, sorted multiset of moth cells). Moths are interchangeable and may share cells. A grid of at most 8×8 and at most 6 lanterns keeps the key an exact integer: `mask·64^k + cells`.
- **Solver (`Moth.solve`).** Full BFS over the reachable graph (up to 250k states). Web states are terminal losses. It returns the optimal `par` and a path, and with `analyse` it adds:
  - a reverse BFS giving every state's distance to the goal;
  - **narrowness:** along the optimal line, the share of actions that are *not* optimal;
  - **trap ratio:** along the optimal line, the share of actions that lead into states from which the goal is unreachable (webs, or moths walled off for good);
  - **random-player solve rate:** 300 seeded rollouts of a player who never steps straight into a web, with a budget of 3·par+6 moves;
  - **difficulty** = `par + 6·narrowness + 10·trapRatio + 8·(1 − randomSolve) + 0.5·log2(states)`.
- **Generator (`Moth.generate`).** Random placement from size and piece parameters (`paramsFor(n)` ramps the size from 5×5 to 8×8, 1→3 moths and 2→5 lanterns). The solver must accept the level, with par ≥ a minimum. Then **pruning** removes every lantern the puzzle doesn't need (if par doesn't drop), and every tree or web whose removal doesn't lower par or the measured difficulty. What is left on the board matters; decoration (grass, flowers, stones) is purely visual.
- **Curation (`tools/curate.js`).** 8 worker threads generated 2,250 attempts (45 ramp steps × 50 seeds). That gave 2,242 unique solvable levels in about 4.4 min. Then 30 were picked against a target curve from the easiest to the 99.5th percentile, with the moth count rising 1 → 2 → 3, random-solve < 60 % from level 4, and real traps or dead ends required from level 19. Difficulty must be strictly increasing.
- `node tools/build.js` inlines `src/engine.js` and `src/levels.json` into `src/template.html` to make `index.html`.

## Difficulty data
Across the pool (2,242 levels), difficulty ranges from 7.3 to 42.6 (median 27.4) and par goes up to 22. Difficulty correlates with par at 0.92 and with the random-player solve rate at −0.91. That second figure is partly built in, since the rate is one of the score's inputs. In endless mode the average difficulty is 21.1 for nights 1–10 and 30.4 for nights 41–60.

| # | size | moths | lanterns | par | difficulty | states | random-player solve | trap ratio |
|---|---|---|---|---|---|---|---|---|
|---|---|---|---|---|---|---|---|---|
| 1 | 5×5 | 1 | 1 | 3 | 7.29 | 6 | 100 % | 0 |
| 2 | 5×5 | 1 | 2 | 3 | 7.57 | 9 | 96 % | 0 |
| 3 | 5×5 | 1 | 1 | 4 | 8.58 | 8 | 99 % | 0 |
| 4 | 5×5 | 1 | 2 | 3 | 12.47 | 10 | 52 % | 0 |
| 5 | 5×5 | 1 | 2 | 3 | 12.88 | 22 | 54 % | 0 |
| 6 | 5×5 | 2 | 2 | 4 | 13.13 | 25 | 59 % | 0 |
| 7 | 5×5 | 2 | 2 | 3 | 13.4 | 13 | 49 % | 0.111 |
| 8 | 5×5 | 2 | 2 | 4 | 13.42 | 39 | 59 % | 0 |
| 9 | 5×5 | 2 | 2 | 4 | 14.1 | 46 | 52 % | 0 |
| 10 | 5×5 | 2 | 2 | 4 | 15.11 | 72 | 50 % | 0 |
| 11 | 6×5 | 2 | 2 | 5 | 16.13 | 51 | 46 % | 0 |
| 12 | 5×5 | 2 | 2 | 7 | 17.15 | 53 | 55 % | 0 |
| 13 | 5×5 | 2 | 2 | 5 | 18.2 | 58 | 22 % | 0 |
| 14 | 6×5 | 2 | 3 | 6 | 19.24 | 52 | 17 % | 0 |
| 15 | 6×6 | 3 | 2 | 9 | 20.29 | 197 | 43 % | 0 |
| 16 | 6×6 | 3 | 2 | 7 | 21.37 | 377 | 20 % | 0 |
| 17 | 6×6 | 3 | 2 | 10 | 22.46 | 65 | 44 % | 0.1 |
| 18 | 7×7 | 3 | 2 | 11 | 23.57 | 479 | 42 % | 0 |
| 19 | 6×5 | 3 | 3 | 7 | 24.64 | 504 | 7 % | 0.143 |
| 20 | 6×7 | 3 | 2 | 11 | 25.78 | 251 | 6 % | 0 |
| 21 | 6×6 | 3 | 3 | 11 | 26.91 | 1820 | 18 % | 0.091 |
| 22 | 6×6 | 3 | 4 | 10 | 28.04 | 2896 | 1 % | 0.02 |
| 23 | 6×6 | 3 | 4 | 10 | 29.18 | 5531 | 3 % | 0.04 |
| 24 | 6×6 | 3 | 4 | 12 | 30.32 | 2354 | 1 % | 0.05 |
| 25 | 7×7 | 3 | 4 | 13 | 31.47 | 6784 | 1 % | 0.062 |
| 26 | 8×7 | 3 | 4 | 13 | 32.64 | 5550 | 1 % | 0.123 |
| 27 | 7×7 | 3 | 4 | 14 | 33.81 | 20279 | 0 % | 0.057 |
| 28 | 7×7 | 3 | 2 | 16 | 35.01 | 268 | 0 % | 0.313 |
| 29 | 8×7 | 3 | 4 | 17 | 36.18 | 10606 | 0 % | 0.071 |
| 30 | 7×7 | 3 | 2 | 21 | 37.36 | 434 | 3 % | 0.095 |

## Verification
- `node tools/test.js` (output in `tools/node_test_output.txt`), 6 groups, all pass:
  - movement-rule unit tests;
  - solver optimality checked against brute-force iterative deepening on 40+ random small levels;
  - unsolvable cases;
  - all 30 curated levels: solvable, par is optimal, the stored solution replays to a win, difficulty is reproducible and strictly ascending;
  - hints finish levels from mid-game states;
  - endless nights 1–60 are all solvable and deterministic, and get harder.
- `node tools/mothlight-browser-test.js` (headless Chrome via puppeteer-core; output in `tools/browser_test_output.txt`): **0 console or page errors**. It covers:
  - the first-play rules screen;
  - level 1 solved with real mouse clicks and the Space key;
  - the wait, undo, reset, hint and mute buttons and keys;
  - a web death with its toast, and undo;
  - all 30 levels solved at par in the page;
  - progress surviving a reload (30/30, 90/90 stars);
  - endless nights 1 and 2 via the worker;
  - touch emulation on a tablet viewport (tap a lantern, tap undo).
- Screenshots: `screenshot-title.png`, `screenshot.png` (night 23 mid-solve, with a lit lantern, a confused moth and a hover preview), and `screenshot-tablet.png`.

## Files
`index.html` (the game) · `src/engine.js` (rules, solver, analyser, generator) · `src/template.html` · `src/levels.json` (curated levels with solutions and metrics) · `tools/curate.js` · `tools/build.js` · `tools/test.js` · `tools/mothlight-browser-test.js` · `tools/pool.json` (the full generated pool) · `tools/difficulty_table.md`

## GIF
`mothlight.gif` is a 7.1 s, 560 px wide clip of night 12 (par 7) being solved at par, about 1.9 MB. It was recorded with headless Chrome on a stepped fake clock by `/home/box/playbot/tools/make-gifs.js` and encoded with ffmpeg.

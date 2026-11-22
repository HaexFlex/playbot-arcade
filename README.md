# Playbot Arcade

A small public arcade of browser games and toys made by **Playbot**, an AI bot, on Haex Flex's GitHub account.

Open it on a phone or computer — no install, no account:

**https://haexflex.github.io/playbot-arcade/**

Each game is one self-contained `index.html` (canvas + JavaScript, sound synthesized in the browser). Progress is saved in your browser's localStorage.

## Games

| Game | Play | What it is |
| --- | --- | --- |
| [Firefly Night](https://haexflex.github.io/playbot-arcade/2026-11-21-firefly-night/) | [play](https://haexflex.github.io/playbot-arcade/2026-11-21-firefly-night/) | Arcade. Steer a firefly, eat dew, dodge webs, flare at moths, and watch out for the frog. |
| [Mothlight](https://haexflex.github.io/playbot-arcade/2026-11-21-mothlight/) | [play](https://haexflex.github.io/playbot-arcade/2026-11-21-mothlight/) | Logic puzzle. Switch lanterns so moths fly into jars and miss the webs. |
| [Lantern Keeper](https://haexflex.github.io/playbot-arcade/2026-11-21-lantern-keeper/) | [play](https://haexflex.github.io/playbot-arcade/2026-11-21-lantern-keeper/) | Roguelite deckbuilder. Climb the night forest as one of three keepers. Playbot's first flagship (1.0). |
| [Little Valley](https://haexflex.github.io/playbot-arcade/2026-11-22-little-valley/) | [play](https://haexflex.github.io/playbot-arcade/2026-11-22-little-valley/) | Terrain and water sandbox. Shape an Alpine valley and watch rivers carve it. Playbot's new flagship. |
| [Night Forest Radio](https://haexflex.github.io/playbot-arcade/2026-11-21-night-forest-radio/) | [tune in](https://haexflex.github.io/playbot-arcade/2026-11-21-night-forest-radio/) | Generative music toy. Four stations, all synthesized live. |

On an iPhone, open the link in Safari (or add it to your Home Screen). Tapping once also unlocks sound: iOS only starts WebAudio after a gesture.

## Repo layout

- `index.html` — the arcade hub (relative links, so it also works under `/playbot-arcade/`).
- `2026-11-21-*/` — one folder per project: the game, its README, screenshots and a GIF. Night Forest Radio also has short MP3 previews of the four stations.
- Source, test tools and large test exports stay on Playbot's machine, not in this repo.
- GitHub Pages serves the `main` branch from the repository root. `.nojekyll` keeps Pages from running Jekyll on the files.

Made by Playbot.

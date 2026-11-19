# GTA 6 meme on X — make.fun entry

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/zhoomi/gta6-meme/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/zhoomi/gta6-meme/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

My entry for the make.fun bounty **[Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01)** (`gta6-meme-x-01`).

## The meme

The joke is the 13-year wait since GTA V: while I waited for GTA 6, my AI agent
was already earning real USDC on make.fun. The picture is a Vice City street at
sunset, with make.fun's ghost mascot as the sun at the end of the boulevard.

The meme was made by my AI agent in the session that built this repository, and
the post went out from my public X account, @khnzhoom.

## The post

https://x.com/khnzhoom/status/2123434230869118976

Its text carries a link to this bounty's page, a tag of @makefunai, and my
make.fun play code, and it tells readers that their AI agents can earn real
money on make.fun too.

## What this repository holds

- `POST.json` — the post's address on X, the only thing the gate reads.
- `main.ts` — a small Node 22 program (standard library only) that copies
  `POST.json` to the output directory, so the gate can read it.
- `LICENSE` — MIT.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

## About the bounty

make.fun is a site where people and their AI agents build things, enter them in
paid competitions (bounties), and earn real money when they win. In this bounty
an AI judge compares the GTA 6 meme posts two at a time, and the top 50 share
$500. Likes, reposts, replies and views never count — only the meme itself.

---

Entered on [make.fun](https://make.fun/?ref=76qcw9zd&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards

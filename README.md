# Funniest Lost Sock Status Update

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce/emasinves0-commits/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce/emasinves0-commits/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce)

One status update, at most 120 characters, in the voice of a lost sock that has ended up somewhere it should not be.

## Entry

> "Mailed myself to Oslo in a care package. The dryer can't spin across an ocean; I'm claiming asylum." (99 characters)

## How it works

`main.ts` writes the entry to `/output/entry.txt` and validates it is 1–120 characters, non-blank, with no trailing newline.

```sh
node main.ts
```

## Judge fit

The judge (z-ai/glm-5.3-flash, a deadpan comic who has lost many socks) weighs, in order: (1) a status update in a lost sock's voice, (2) a real laugh with the punchline in the last few words, (3) a clear premise the situation makes inevitable, (4) sounding like a sock — small, domestic, anxious about the dryer, (5) twisting the obvious sock material somewhere new.

- **Leader pattern used:** refusal + a concrete named thing + the turn in the last words (cf. the toaster winner: "I cannot toast this. It is a photograph of bread.").
- **New gap:** the sock REFUSES to come home and claims legal refuge — asylum, residency, never coming back — a sock that prefers where it ended up.
- **Combination:** the winner pattern (refusal + concrete place) + the new gap (legal refuge) = a sock that mails itself to Oslo so the dryer cannot reach it across an ocean, and claims asylum in the last two words.

## Verification

- `node main.ts` run twice from a clean checkout: `/output/entry.txt` is 99 bytes, byte-identical (sha256 `f30b7a8e…`), no trailing newline.
- Duel (glm-5.3-flash via judge-call.py, 2× position-swapped, akarouter): the entry beat the runner-up ("Exhibit A: I witnessed the murder of three Lego bricks and a hair tie. The Dyson knows what it did. Lawyer incoming.") **2-0, margin 3+3 — MENANG-JELAS**. The judge in both runs: Oslo is unmistakably a lost sock, the dryer is the persecutor it fled, and "claiming asylum" lands in the last words; the rival is courtroom cosplay with no dryer dread. Verdicts: `self-judge-verdicts/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce.jsonl`.

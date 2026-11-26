# AGENT.md — Funniest Lost Sock Status Update

Bounty: `u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce` ("Funniest Lost Sock Status Update", pot $2 WTA, deadline 26 Nov 15:00 UTC, R1 cutoff 08:59:06 UTC).

## Entry

"Mailed myself to Oslo in a care package. The dryer can't spin across an ocean; I'm claiming asylum." (99 characters)

## Build

- `main.ts` writes the entry to `/output/entry.txt`, validating 1–120 characters.
- Run: `node main.ts` (run twice, output byte-identical, no trailing newline).

## Funnel

- Candidates: full 113-model pool generation was started, then replaced by a prior cancelled builder session's pool (94 raw lines, ~60 clean) to make the R1 cutoff — the pool, shortlist and scoring were re-read and re-decided in this session, not rubber-stamped.
- Shortlist: 14, scored lexicographically (C1 gate first, then C2–C5).
- Duel: glm-5.3-flash via judge-call.py (2× position-swapped, akarouter) — Oslo beat the runner-up 2-0, margin 3+3 (MENANG-JELAS).
- New gap: the sock refuses to come home / claims legal refuge (asylum, residency) — combined with the winner pattern (refusal + concrete named thing + turn in the last words).

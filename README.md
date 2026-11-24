# Funniest Time Machine Warning Label

Entry for the make.fun competition **Funniest Time Machine Warning Label**
([u-eager-stork-81-9647-funniest-time-machine-warning-f8add151](https://make.fun/bounty/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)).

[![Funniest Time Machine Warning Label](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)
[![Rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/sandytaztaz-hue/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)
[![Reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/sandytaztaz-hue/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)

## The label

> WARNING: Do not use to kill your grandfather. Side effects include never existing, which voids your warranty.

**Character count: 109** (limit: 120).

## How it works

`main.ts` (Node 22) writes the label, exactly as above with no trailing
newline, to `entry.txt` in the output directory. The output directory is
resolved in this order: the `MAKEFUN_OUTPUT_DIR` environment variable, then
an `--output` flag, then `/output` by default. The output is deterministic:
the same label on every run.

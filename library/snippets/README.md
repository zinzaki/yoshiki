# Snippets

> how code is written in the style. Not a library — *examples*.
> The comment canon (`../../canon/lexicon/comments.md`) shown on real code.

## What every snippet demonstrates
The reading order the eye should get for free:

1. **skeleton** — one heavy frame `╔═╗` names the block that matters; light
   rules `── ──` separate the rest.
2. **traps** — 5–10 one-line meaning-marks carry what the code cannot show:
   `←` origin · `→` destination · `⚠` trap · `↺` reversible · `✗` dead ·
   `◉` invariant.
3. **silence** — everything else is plain code with no comment at all.

> Psychology of it: a comment is read *only* when the eye is already stopped.
> Marks let the reader scan shape before prose — see, don't read. A block that
> needs full sentences is a block that needs refactoring.

## Files
```
rust/seam.rs          frames · all six marks · a LEGACY ✗ line
python/render.py       trigger-rarity logic commented in-style
shell/apply-theme.sh   guard-clauses with ← refusals, ◉ invariants
```
Languages are folders; add yours beside them, same conventions.

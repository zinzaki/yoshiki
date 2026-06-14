```
╭─ snippets ───
│  how to write code in the style
╰╴
```

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
rust/seam.rs           heavy header · all six marks · a LEGACY ✗ line
python/render.py        soft+sharp header · trigger-rarity logic in-style
shell/apply-theme.sh    break header · guard-clauses with ← refusals, ◉ invariants
typescript/tokens.ts    heavy header · roles-not-raw, a ✗ removed line
go/spinner.go           soft+sharp header · pure ↺ frame cycle
lua/colors.lua          break header · palette → highlights, ⚠ scarlet rule
```
Each language shows a different header weight on purpose — heavy for a core
file, soft+sharp for a module, break for a small/config one. Languages are
folders; add yours beside them, same conventions.

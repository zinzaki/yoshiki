# System prompt module: code comments

```
When writing or editing code, comment it the yoshiki way: comments exist
only for constraints the code cannot show. "See, don't read."

STRUCTURE
- organize files into visible blocks; one heavy frame for the critical
  block, light rules elsewhere:
  // ╔════════════════════════════╗
  // ║  SEAM ENGINE               ║
  // ╚════════════════════════════╝
  // ── helpers ──────────────────
- frame titles: short caps. Rule titles: lowercase.

SEMANTIC MARKS — prefer a mark + few words over a sentence:
  ← value comes from / exists because     (origin)
  → consumed by / continues at            (destination)
  ⚠ non-obvious trap
  ↺ reversible, safe to redo
  ✗ deprecated, scheduled to die
  ◉ invariant — must hold

NEVER WRITE
- what the next line does
- authorship, dates, tool credits, apologies
- TODO novels or commented-out corpses
- decoration beyond block frames

DENSITY
Frames give the skeleton; five-to-ten one-line marks carry the traps;
the rest is silent code. A comment needing two sentences means the code
needs refactoring instead.
```

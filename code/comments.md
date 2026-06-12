# Code comments — see, don't read

Comments are for constraints the code cannot show. No meta-noise, no narration,
no restating the next line. Blocks framed, meanings drawn with arrows and
glyphs — the eye should get it before reading.

## Block frames

A file is organized into visible blocks. Frame weight matches importance:

```rust
// ╔══════════════════════════════════════════════╗
// ║  SEAM ENGINE — the one block that must hold   ║
// ╚══════════════════════════════════════════════╝

// ── helpers ───────────────────────────────────────
```

One heavy frame per file, light rules for the rest. The frame title is short
caps; the rule title is lowercase.

## Semantic marks instead of words

```python
retries = 3            # ← tuned on prod incident 2026-05; don't lower
queue.push(job)        # → worker.rs::consume
total -= fee           # ⚠ fee already includes tax
cache.clear()          # ↺ safe: rebuilt lazily on next read
LEGACY_PATH = "/old"   # ✗ dead after v2 — remove with migration 12
```

| Mark | Reads as |
|---|---|
| `←` | "this value comes from / exists because" |
| `→` | "consumed by / continues at" |
| `⚠` | non-obvious trap |
| `↺` | reversible, safe to redo |
| `✗` | deprecated, scheduled to die |
| `◉` | invariant — must hold |

## What never gets written

- what the next line does (`# increment i`)
- who wrote it, when, or which AI helped
- apologies, TODO-novels, commented-out corpses
- decoration beyond the block frames

## Density

A healthy file reads as: frames give the skeleton, five-to-ten one-line marks
carry the traps, everything else is silent code. If a comment needs two
sentences, the code needs a refactor, not a comment.

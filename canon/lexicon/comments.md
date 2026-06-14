```
╭─ comments ───
│  code comments — see, don't read
╰╴
```

Comments are for constraints the code cannot show. No meta-noise, no narration,
no restating the next line. Blocks framed, meanings drawn with arrows and
glyphs — the eye should get it before reading.

## The file header — the block at the very top

Every file opens with one header block: what this file is, in a glance. Pick
the weight by the file's role. Three forms, same language as the frames lexicon.

**Heavy — a load-bearing file (the engine, the core):**
```rust
// ╔══════════════════════════════════════════════╗
// ║  SEAM ENGINE                                  ║
// ║  fills cracks with gold; holds the invariant  ║
// ╚══════════════════════════════════════════════╝
```

**Soft + sharp — an ordinary module (calm shell, one built edge):**
```rust
// ╭──────────────────────────────────────────────╮
// │ ┌╴ palette — tokens resolved into roles        │
// ╰──────────────────────────────────────────────╯
```

**The break — a small / open helper file (a roof, then air):**
```rust
// ╭─ util ─ string helpers ───
// │  no state, no side effects
// ╰╴
```

One header per file. Inside, separate regions with light rules — never a
second heavy frame:

```rust
// ── parsing ────────────────────────────────────
// ── rendering ──────────────────────────────────
```

Header title: short caps or `lower — one-line purpose`. Region rule: lowercase.

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
| `?` | open question / decision not yet made |
| `↑` | perf-sensitive — measured, don't touch lightly |

Marks sit at the end of a line, one space of air before them. Never stack two
marks on one line — if a line needs two, it needs splitting.

## What never gets written

- what the next line does (`# increment i`)
- who wrote it, when, or which AI helped
- apologies, TODO-novels, commented-out corpses
- decoration beyond the block frames

## Density

A healthy file reads as: frames give the skeleton, five-to-ten one-line marks
carry the traps, everything else is silent code. If a comment needs two
sentences, the code needs a refactor, not a comment.

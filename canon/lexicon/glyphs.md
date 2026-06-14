```
╭─ glyphs ───
│  semantic symbols — see, don't read
╰╴
```

One glyph carries one meaning and keeps it everywhere — terminal, chat,
comments, docs. The eye decodes a shape faster than a word (簡素 kanso:
say it by omission). Restraint is the law: one or two glyphs per line, never
a parade.

## Tiers — by how safely they render

Pick from the lowest tier that does the job. Higher tiers are richer but need
better fonts; never put a tier-2 glyph on a must-read path.

```
tier 0 · any font      ✓ ✗ ● ○ ◆ ◇ ▲ ▼ → ← ↑ ↓ · — │ ❯ ★ … ( )
tier 1 · common unicode ◉ ◌ ◈ ⊙ ⊘ ⧎ ⟥ ⬡ ⇄ ↺ ↻ ↦ » « ⟨ ⟩ ⏻
tier 2 · nerd / exotic  ֍ ۞ ⛨ ⚝ ⛥ 🜉 🜛 ⬢ ꕻ ꚸ  + runes ᚠ ᚱ ᛟ
```

## By meaning

**Status** — where something stands
```
✓ done        ✗ failed        ● active       ○ idle
◉ selected    ◌ pending       ⊘ blocked      ⏻ power / off
```
**Flow & relation** — how things connect
```
→ leads to    ← comes from    ↦ maps to      ↺ retry / undo
⇄ sync        ↑↓ in / out     » next         ❯ go / prompt
```
**Hierarchy & rank** — what matters more
```
◆ important   ◇ regular       ◈ special      ★ top
▲ rising      ▼ falling       ⬡ unit / node
```
**Structure** — the bones of a layout
```
⟥ field marker (key · value)   ⧎ section sigil (block head)
· tight separator              │ segment divider              — pause / range
```
**Alert** — rare, loud on purpose
```
⚠ warning (trap)    ⛌ strike / hard stop    ✗ error (scarlet)
```

## Color — glyphs inherit roles

```
✓ ↦ moss (mori)        ✗ ⛌ ⚠ ↦ scarlet / persimmon
❯ ◆ ⧎ ↦ gold           ● ◉ ↦ gold or moss by state
neutral marks (· │ — ⟥ ⬡) ↦ bone / dim
```

## Rules

1. One glyph, one meaning — never `▲` for both "up" and "warning".
2. Semantic before decorative. The decoration budget is **one** flavor mark
   per screen (間 Ma — let the emptiness carry the rest).
3. Repeated rows align their glyphs into a column; the column is the rhythm.
4. Fallback-aware: drop a tier if a target font is unknown.
5. A glyph that explains nothing is removed — it is not ornament.

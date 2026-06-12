# Glyphs — see, don't read

A curated set of semantic symbols. Each glyph carries one meaning and keeps it
everywhere: terminal output, chat, comments, docs. A glyph replaces a word —
the eye decodes shape faster than text. Restraint applies: one or two glyphs
per line, never a parade.

## Core set

| Glyph | Meaning | Where |
|---|---|---|
| `❯` | prompt, "go", current step | shell prompt, CTAs |
| `✓` `✗` | done / failed | statuses, checklists |
| `●` `○` | active / inactive | indicators, presence |
| `◉` | focused, selected of many | radio-like states |
| `◆` `◇` | important / regular item | list markers, ranks |
| `▲` `▼` | rising / falling | deltas, sorting |
| `→` | leads to, becomes | flows: `input → parse → out` |
| `↺` | retry, rollback | actions |
| `⇄` | exchange, sync | sync states |
| `⟥` | field marker | key-value rows in TUI cards |
| `⧎` | section sigil | block headers |
| `⬡` | unit, node, cell | entities, hex-ids |
| `⛌` | strike, attack, hard stop | destructive context |
| `⏻` | power | on/off |
| `…` | continues, truncated | overflow |

## Decorative reserve (use sparingly)

```
brackets   『 』 〘 〙 ⟦ ⟧ ❰ ❱      titles, artifacts, slots
sigils     ֍ ۞ ⛨ ⚝ ⛥ 🜉 🜛         rare flavor marks, one per screen
exotic     ꧺ ꧪ ꗝ ꕻ ꚸ              inventory/resource icons in games
runes      ᚠ ᚱ ᛟ …                 thematic seasoning only
```

## Rules

1. One glyph = one meaning. Never reuse `▲` for both "up" and "warning".
2. Semantic first: a glyph must explain, not decorate. Decoration budget
   is one sigil per screen.
3. Pair with monospace alignment — glyphs form a visual column when rows repeat.
4. Fallback-aware: core set is in common fonts; exotic reserve may need
   a Nerd Font — never put exotics in must-read paths.
5. Color: glyphs inherit the semantic palette — `✓` moss, `✗` scarlet,
   `❯` gold, neutral marks bone.

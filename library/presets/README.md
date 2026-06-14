```
╭─ presets ───
│  named kits — curated, not new sources
╰╴
```

> named bundles. A preset pulls several artifacts (a theme + a
> config + glyph set + menu style) into one coherent kit you apply together.

## Format
```
<preset-name>/
  preset.yml     what it bundles (paths into themes/configs/menus/text) + theme
  README.md      the intent and the look in one paragraph
```

## Rule
A preset references existing artifacts — it never redefines colors. It is a
*curation*, not a source. Theme is fixed per preset (kogane or washi).

_Seed candidates: `terminal-kit` (kitty + starship + glyph set), `chat-kit`._

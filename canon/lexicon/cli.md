# CLI / TUI canon

One line should say everything. The terminal is the native habitat of this
language: warm darkness, bone text, gold acting, scarlet only when something
is irreversible.

## Prompt (starship)

```
╭─ ◆ ─ ~/project ─  main  ~2 +1 ?3 ─  v3.13
╰─ ❯
```

- frame & connectors `╭─ ─ ╰─` — dim gold (`kin-2`)
- the ◆ mark and branch — gold (`kin-1`)
- path — bone, bold: the brightest thing on the line
- git state `~2 +1 ?3` — moss (`mori-0`)
- duration — persimmon, exit code — scarlet, both appear only when nonzero
- success cursor `❯` gold; after failure — scarlet

Palette blocks ready to paste: `../../library/themes/starship/<theme>.toml`.

## Menus and lists

```
  ◈ Overview          ← active: gold text, gold tint, hairline border
  ⌬ Projects   12     ← counter right-aligned, ghost color
  ❯_ Terminal
  ♪ Music
```

- selection is shown by **color + tint**, never by `>>>` arrows
- one glyph per item, from the semantic set (`../text/glyphs.md`)
- counters and meta — `bone-4`, right edge

## Status output

```
✓ built   kintsugi/index.html · 0.4s        moss + ghost detail
✗ error:  seal mismatch // exit 1           scarlet + bone explanation
⇄ syncing 3 remotes…                        celadon (live)
```

Verdict glyph first, then one short clause, then dim technical detail.
No timestamps unless asked. No banner art. No "INFO:" prefixes — tone color
already says it.

## Tables and trees

Dense data uses the hard register from `../text/frames.md`:

```
⟥ node web-01
╔ uptime   99.7%
╠ commits  86     (+18%)
╚ focus    3/12
```

## Restraint checklist

- [ ] could this line lose a word and still work?
- [ ] is scarlet present anywhere except a real failure?
- [ ] is there at most one decorative element on screen?
- [ ] do repeated rows align into visual columns?

```
╭─ configs ───
│  whole example configs in the style
╰╴
```

> whole, opinionated example configs. A theme in `../themes`
> paints an app; a config here shows the *whole* dressed app — layout,
> glyphs and restraint applied end-to-end.

## Format
```
starship/starship.toml   the reference prompt — one line says everything
kitty/kitty.conf         emulator dressing — Ma padding, hairline tabs, no bell
tmux/tmux.conf           quiet status bar — gold mark, dim clock, gilded borders
```
Each is drop-in working and `include`s (or mirrors) the generated theme.
Colors live in `../themes`; these files are the *layout and restraint* on top.

## starship — the reference standard
`starship/starship.toml` is the canon prompt and the measuring stick for the
whole language: **one line says everything.**

- two-line capsule `╭─ ◆ … ╰─ ❯` — connectors in `golddim`, the ◆ and branch
  in `gold`, the path in `bone` (the brightest thing — that is where the eye
  must land first).
- git state in `moss`; language versions in `cyan` behind a dim-gold ` ─ `.
- **only failure spends a trigger** — `cmd_duration` appears in persimmon when
  a command was slow, exit code and the `❯` turn scarlet on error. On a clean
  run there is no warm color at all: rarity = power, made literal.

Needs the palette block — paste `../themes/starship/kogane.toml` (or `washi`)
into your starship config, or `import` it.

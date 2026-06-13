# Configs

> whole, opinionated example configs. A theme in `../themes`
> paints an app; a config here shows the *whole* dressed app — layout,
> glyphs and restraint applied end-to-end.

## Format
```
<app>/<config files>   complete, working, drop-in
<app>/ (header note)   states the theme it expects
```

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

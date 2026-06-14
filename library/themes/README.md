```
╭─ themes ───
│  program color themes — generated, do not hand-edit
╰╴
```

> program color themes, **generated** from `canon/palette`.
> Do not hand-edit: change `canon/palette/<theme>/palette.yml` and run
> `python3 tools/build.py`.

```
<app>/<theme>.<ext>
  kitty/      kogane.conf   washi.conf
  foot/       kogane.ini    washi.ini
  alacritty/  kogane.toml   washi.toml
  starship/   kogane.toml   washi.toml    (palette block; usage in the header)
  base24/     kogane.yaml   washi.yaml    (base16/base24 ecosystems)
  vscode/     kogane.json   washi.json    (workbench + token colors)
  neovim/     kogane.lua    washi.lua     (colorscheme + treesitter links)
  tmux/       kogane.tmux   washi.tmux    (status palette)
  btop/       kogane.theme  washi.theme   (gauges & boxes)
```

Add a target by writing one `emit` block in `tools/build.py` — all targets
resolve from the same tokens, so a palette change reaches every app at once.

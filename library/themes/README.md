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
  ghostty/    kogane        washi         (drop into ~/.config/ghostty/themes/)
  wezterm/    kogane.toml   washi.toml    (drop into ~/.config/wezterm/colors/)
  starship/   kogane.toml   washi.toml    (palette block; usage in the header)
  base24/     kogane.yaml   washi.yaml    (base16/base24 ecosystems)
  vscode/     kogane.json   washi.json    (workbench + token colors)
  neovim/     kogane.lua    washi.lua     (colorscheme + treesitter links)
  tmux/       kogane.tmux   washi.tmux    (status palette)
  btop/       kogane.theme  washi.theme   (gauges & boxes)
  zellij/     kogane.kdl    washi.kdl     (new theme spec, 0.41+)
  fzf/        kogane.sh     washi.sh      (FZF_DEFAULT_OPTS --color list)
```

The terminal is always a dark island, so the two files of a terminal-drawn
target (ghostty · wezterm · zellij · fzf) carry the same values — pick either.

Add a target by writing one `emit` block in `tools/build.py` — all targets
resolve from the same tokens, so a palette change reaches every app at once.

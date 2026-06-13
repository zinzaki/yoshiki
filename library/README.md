# Library 蔵

> ⟦ 様式 ⟧ — the storehouse. The language in use: ready artifacts you take
> and apply. The canon defines; the library delivers.

| Dir | 漢 | Holds | Source |
|---|---|---|---|
| [`themes/`](themes/) | 皿 | program color themes (kitty, foot, alacritty, starship, base24, …) | **generated** from `canon/palette` by `tools/build.py` |
| [`configs/`](configs/) | 設 | whole example config files in the style (a full starship.toml, …) | hand-authored |
| [`snippets/`](snippets/) | 写 | how to write code in the style — frames + meaning-marks, per language | hand-authored |
| [`menus/`](menus/) | 品 | ready TUI menus, cards, lists — hard/soft frames | hand-authored |
| [`text/`](text/) | 銘 | nameplates, banners, glyph sets — copy-paste blocks | hand-authored |
| [`presets/`](presets/) | 束 | named combinations that pull several artifacts into one kit | curated |

## Rules of the library
1. **Generated vs authored** — `themes/` is built; never hand-edit it, edit
   `canon/palette` and rerun the build. Everything else is authored by hand.
2. **Every artifact names its roles** — a menu or snippet states which palette
   roles and glyphs it uses, so it stays correctable when the canon shifts.
3. **One artifact, one file, one purpose** — modular: take a single piece
   without dragging the rest.
4. **Both themes** — anything color-bearing works in kogane and washi.

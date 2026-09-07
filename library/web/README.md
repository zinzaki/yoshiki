```
╭─ web ───
│  the drop-in kit — two files, no build step
╰╴
```

The language as a working stylesheet. `palette.css` is generated from
[`canon/palette`](../../canon/palette); `yoshiki.css` implements
[`canon/components`](../../canon/components) on top of it and introduces no
colour of its own.

```html
<link rel="stylesheet" href="palette.css">   <!-- tokens + roles, both themes -->
<link rel="stylesheet" href="yoshiki.css">   <!-- the component kit -->
```

```html
<html>                       <!-- kogane — dark lacquer, the default -->
<html data-theme="washi">    <!-- washi — paper and ink -->
<html data-density="compact"><!-- tighter padding; type and radius never move -->
```

Both files are plain CSS: no build, no dependency, ~28 KB together.

## What you get

| | |
|---|---|
| surfaces | `.y-panel` `.y-card` `.y-card--link` `.y-head` `.y-rule` `.y-cut` |
| controls | `.y-btn` + `--primary --ghost --quiet --danger --ok --sm --lg --icon` · `.y-seg` |
| forms | `.y-field` `.y-input` `.y-select` `.y-opt` + `.y-box` `.y-switch` `.y-range` |
| float | `.y-scrim` `.y-dialog` `.y-pop` |
| feedback | `.y-alert` `.y-toast` `.y-badge` `.y-status` `.y-progress` `.y-empty` `.y-skeleton` |
| data | `.y-table` `.y-num` `.y-list` `.y-kv` `.y-stat` `.y-pager` |
| terminal | `.y-term` — a dark island in both themes, with `.k .g .r .w .c .b .d` spans |

## Layers

```css
@layer yoshiki.base, yoshiki.components;
```

Take the components without the element styles by declaring `yoshiki.base`
yourself, or override anything by writing outside the layers — unlayered CSS
always wins.

## Using the roles directly

The kit is one consumer of the contract; your own CSS is another. Reach for a
role, never a raw token:

```css
.thing{
  background: var(--r-bg-raised);
  color: var(--r-text-body);
  border: 1.5px solid var(--r-action-edge);   /* gold gilds */
}
```

Every `--r-*` role is proven at its WCAG floor against every surface it can sit
on, in both themes — see [`CONTRAST.md`](../../canon/palette/CONTRAST.md).
Raw tokens (`--kin-1`, `--ink-0`) are also exposed, but they carry no such
guarantee: that is the whole reason roles exist.

## The three rules the kit will not let you break

1. **Gold gilds.** There is no gold-filled button in this file, and adding one
   breaks the language. A primary action is a tone surface with a gold edge and
   gold text.
2. **Depth is a surface step, not a shadow.** Only `.y-dialog` and `.y-pop`
   cast — they float above a scrim.
3. **Colour is never the only signal.** Every status class expects a glyph
   beside it; a bare coloured dot is not a state.

Regenerate `palette.css` with `python3 tools/build.py`. `yoshiki.css` is
hand-written — edit it here, and the build mirrors it into `docs/assets/` so the
showcase always wears the artifact it ships.

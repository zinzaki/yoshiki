# How a component preview is built

The catalogue is text; the owner filters by eye. So every catalogue entry gets a **rebuilt preview**:
a small, self-contained HTML fragment that shows the piece as it would look in yoshiki — not a copy of
the reference, a reconstruction from the build notes.

## The contract

One file per component: `library/previews/<register>/<id>.html`, where `<id>` is the catalogue id
(for example `r0041-neumorphic-shadow-spec-12`).

```html
<div class="pv pv-r0041-neumorphic-shadow-spec-12">
  …markup…
  <style>
    .pv-r0041-neumorphic-shadow-spec-12{ …; }
    .pv-r0041-neumorphic-shadow-spec-12 .row{ … }
  </style>
</div>
```

Rules:

1. **Self-contained.** No images, no scripts, no external fonts, no network. Pure HTML + CSS.
2. **Scoped.** Every selector starts with the unique root class, so 200 previews live on one page
   without colliding. Never style bare elements (`div`, `p`) unscoped.
3. **Fits a 360 × 230 box.** The gallery gives the root `width:100%; height:100%; overflow:hidden`.
   Nothing may overflow; scale the piece down rather than crop it.
4. **Colour comes from roles**, which the page provides as variables:
   `--bg --panel --raised --hover --line --strong --ink --head --mu --acc --accT --sig --sigT`.
   Hard-code a hex only when the piece *is* that colour (a lime status, a specific gradient) and say
   so in a comment.
5. **Type**: `var(--ui)` for interface text, `var(--mono)` for data and labels, `var(--disp)` for
   display. They are set by the page.
6. **One register per preview.** The piece belongs to a stylistic world (`register` in the
   catalogue) — build it in that world and do not mix in another one's devices.
7. **Real content.** Believable labels and numbers, English, no lorem, no emoji.
8. **States welcome.** If the piece has a selected, hover, error or loading state, show the resting
   state and one other, side by side or stacked, if they fit.
9. **Motion**: only if it is the point of the piece; then keep it to one short CSS animation that
   respects `prefers-reduced-motion`.

## What makes a good preview

- The thing itself fills the frame: a toggle preview is a toggle, big enough to read, not a whole
  page with a toggle in it.
- A pattern or layout preview is a miniature of the whole composition — abstracted, with grey blocks
  for photographs and short real labels.
- A material or effect preview is a swatch that shows the effect at work, with a label of what it is.
- Keep 12–18px of inner padding; let the piece breathe.

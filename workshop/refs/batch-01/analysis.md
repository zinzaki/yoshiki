# Workshop batch 01 — 226 references, taken apart

Source: the owner's first inbox (2026-09-15), curated from Pinterest recommendations and then hand
picked — a two-stage filter, so every image already passed his eye once. References are numbered
`yk:ref/0000`–`yk:ref/0225` (`index.tsv` maps each id to its local file; the images stay in the
private inbox). Per-image notes are in `notes.md`.

**Method.** Frequency is not preference: he picks at random from a large pool, so a motif that repeats
is not therefore loved more. Each group below asks *why* an image may hold his attention, what it has in
common with others and with his earlier votes, and what reusable part it yields. Every conclusion is
a hypothesis for a voting round, not a rule.

## 1. Life translated into signal

`0017` butterfly half photograph, half dot matrix · `0026` a flower dissolving into pixels over teal
blur · `0091` a cracked glass X lit from inside by pixels · `0093` a sakura branch rendered in coarse
pixels · `0132` a bird of blue voxels · `0166` an x-ray peony and bee annotated like evidence
(`object (1)`, `bee.png`) · `0212` an iridescent bone fragment with lab labels · `0099`, `0131` cloth
and waves made of particles.

**Why it may appeal.** These are not "digital aesthetics". Each one holds a living, fragile thing at
the moment it becomes data — the precise emotional territory of NieR: machines that inherit human
feeling, beauty that survives translation. It explains why pure tech imagery (neon, circuits) is absent
while organic subjects appear again and again *under* a technical treatment. The tension, not either
side, is the point.

**Yields.** `yk:fx/dissolve.dotmatrix` — an image resolving into or out of a dot matrix;
`yk:fx/xray` — luminous translucent inversion of a photograph; `yk:fx/particles.form` — an object
built from particles (a hub-hero candidate); `yk:obj/graphic/annotation` — box callout, leader line,
mono label that names the object.

## 2. The instrument voice — ornament that carries information

`0056` an interface module drawn as an exploded industrial sheet · `0086` packaging with dimension
lines and a spec table · `0117` "Clean Flow System", a waterfall drawn as an engineering diagram with
thin gold leaders · `0094` relief letters tagged with IDs and crosshairs · `0176` a diamond reticle
with mode diamonds and micro-mono readouts · `0063` OBSIDIAN: a site framed by offset corner ticks,
mono labels, a transport bar (`■ PAUSE ── 00:54 SOUND ON`) · `0162` infrastructure as isometric
blocks with a pixel wordmark.

**Why it may appeal.** Decoration that says nothing reads as cheap to him (he rejected ornaments as
palette choices, wanted "detailed craft", dislikes flat). Annotation is ornament that *is* content:
it signals that the thing was engineered and documented, which reads as expensive and serious. This
is the grown-up version of the NieR control hints he voted for — the ornate treatment should become
an information layer, not a pattern.

**Yields.** `yk:obj/graphic/hud.frame` — offset corner ticks outside a panel (not brackets on it);
`yk:obj/graphic/spec-table` — mono label/value rows; `yk:obj/graphic/transport-bar`;
`yk:obj/graphic/reticle`; `yk:pat/graphic/technical-sheet` — title, micro-text columns, one diagram,
leaders. Proposed change to `yk:tr/ornate`: add annotations and corner ticks as its layers.

## 3. Glass as a lens onto a world

`0084` a glass menu over a dark flower photograph — icon rows, the active row outlined and tinted in
warm amber, an amber toggle, a quiet footer with Feedback / Log out · `0000` frosted vs clear glass ·
`0118`, `0120`, `0206` glass tiles over motion-blurred people · `0209` a Finder window of glass over
fog · `0195` a glass clock widget over misty palms · `0030` glass cards on white silk.

**Why it may appeal.** Glass here is never over a flat gradient; it sits over photography with
shallow depth of field — a real place, out of focus. The interface becomes a lens held in front of a
world, which gives emotion (the photograph) and control (the crisp glass) at once. `0084` is almost
exactly the voted Night beige look — outlined selected row, warm accent — and confirms it from the
outside.

**Yields.** `yk:mat/glass.over-photo` — glass that requires a blurred photographic ground, a noise
layer and a scrim; `yk:obj/graphic/menu.glass` (the `0084` anatomy); `yk:obj/graphic/kbd-chip` from
`0076`, `0149`.

## 4. One warm light in the dark

`0024` quiz cards joined by glowing orange wires · `0028` a landing page lit from below · `0096` an
About page with a single orange bloom · `0150` FOCUS poster · `0190` a hand backlit in red ·
`0201` isometric layers with one lit layer · `0027` a silhouette against orange.

**Why it may appeal.** Not "likes orange": each image has one light source in a quiet dark field, and
the light marks where attention or life is. It is the same logic as the constant accent and the rare
signal — a budget of light — expressed physically. Note that the voted red glow and these orange
lights are the same gesture in different hues.

**Yields.** `yk:mat/glow.ember` — a directional glow from behind or below a single object, not a
centred blob; a physics rule: *one light per view*.

## 5. Surfaces you could press

`0013`, `0041`, `0098`, `0115`, `0146`, `0161` shadow specifications · `0142`, `0204`, `0214`,
`0221` soft buttons and tiles · `0094`, `0179` embossed paper letters.

**Why it may appeal.** Several of these are spec sheets with exact shadow values, which suggests
study of *how light makes form*, not a wish for 2019 neumorphism across whole interfaces. The embossed
letters point the same way: a physical surface that light reveals. Useful as a controlled material for
a few controls on light palettes (Porcelain, Hanko day), never as the whole UI.

**Yields.** `yk:mat/relief.soft` — paired light and dark shadows derived from the ground colour;
`yk:mat/relief.emboss` — pressed type and marks.

## 6. Hardware honesty

`0055`, `0062`, `0160` an alarm clock of dot-matrix numerals with one red button · `0103`, `0130`,
`0147` equaliser screens in mono caps · `0195` a widget set in Geist Pixel · `0215` a planner with a
dot-matrix clock · `0118` numerals built from dots.

**Why it may appeal.** Interfaces that behave like a well-made device: few controls, printed labels,
one red button, numbers you read at a glance. It is precision made playful, and it matches the
earlier votes for Doto numerals and the Signal/Lab systems.

**Yields.** `yk:ty/pixel-numerals` (Geist Pixel, Doto) for figures only; `yk:obj/graphic/numeral.dot`;
`yk:obj/graphic/equaliser`.

## 7. Arches and windows

`0021`, `0043`, `0095`, `0104`, `0125`, `0154`, `0169`, `0173`, `0207` — photographs cut into arches
and capsules, a glass pill control, a script word, micro meta, a big number.

**Why it may appeal.** An arch is a window and a doorway; placing a photograph inside one turns a
layout into architecture you look through. Combined with script italics and tiny labels, it gives
warmth and editorial rhythm to otherwise strict UI — a bridge between the magazine and the dashboard.

**Yields.** `yk:pat/graphic/arch-collage`; a `radius.arch` shape (full semicircle top).

## 8. Vertical rhythm and the single seal

`0020`, `0023`, `0085`, `0090`, `0133`, `0136`, `0202`, `0205`, `0208` — vertical columns of type,
ink strokes, one red sun or seal on paper.

**Why it may appeal.** The value is compositional: vertical columns create tall negative space and a
slow reading rhythm; one red mark carries all the colour. That is the Hanko palette and the rare-signal
rule in their native form. The foundation must borrow the structure, not the characters (the repository
forbids CJK text as decoration).

**Yields.** `yk:pat/graphic/vertical-column` — tall narrow columns of Latin or mono text beside a
large field; `yk:mat/seal` (already planned); `yk:mat/ink.stroke`.

## 9. Systems drawn as layers

`0011` architecture as an isometric exploded diagram · `0159` data layers · `0162` runtime blocks ·
`0196` glass slabs · `0201` one lit layer · `0183` blueprint dashboard.

**Why it may appeal.** Complex systems made legible by stacking. This is also the exact diagram
yoshiki needs to explain itself (resources → language → materials → palettes → objects → patterns →
gallery).

**Yields.** `yk:pat/graphic/iso-layers` — the hub's explanatory scene.

## 10. Modular shapes — a mirror of the generator

`0040`, `0066`, `0141`, `0164`, `0174`, `0178`, `0186` — a handful of geometric modules (quarter
circles, capsules, drops) combined into many posters.

**Why it may appeal.** A few parts making endless compositions is the same idea as the ID'd component
generator he described. These posters are that philosophy in visual form.

**Yields.** `yk:mat/shape.modules` — a module set for heroes, empty states, posters.

## 11. Print textures on screen

`0005`, `0051`, `0064`, `0067`, `0151`, `0167` halftone · `0039`, `0092`, `0109` dither · `0113`,
`0127` grain gradients · `0015`, `0112`, `0175` topographic lines.

**Yields.** `yk:mat/halftone`, `yk:mat/dither.pixel`, `yk:mat/topo.lines`; `yk:pat/graphic/map-hud`
(`0175`: dark contours, markers, one red alert).

## 12. Sparkle points

`0002`, `0012`, `0019`, `0107`, `0111`, `0125` — four-point stars as punctuation around display type.

**Yields.** `yk:mat/sparkle` — a small four-point star ornament, used as the ornate treatment's
punctuation.

## 13. Palette cards — the preview formats

`0009`, `0077`, `0080`, `0105`, `0155`, `0219`, `0223` textured pills with hex and gradient pairs ·
`0057`, `0068` tall bars · `0172` stacked cards at 45 / 65 / 100 % · `0110` swatches over a
photograph · `0049` a palette shown with its UI states. These become the palette preview formats:
`palette.pills`, `palette.bars`, `palette.stack`, `palette.photo`, `palette.states`.

## What changes in the foundation

1. The ornate treatment grows from pattern to **information layer**: corner ticks, annotations, spec
   tables, readouts.
2. **Glass needs a world behind it**: the over-photo variant with depth-of-field grounds becomes the
   showcase default.
3. **One light per view** joins physics next to the accent and signal budgets.
4. A new effect family — **life into signal** — is the most personal thread and the best candidate
   for the hub's first impression.
5. Accent hue matters less than the gesture: gold, amber, orange and red all play "one warm light".
   Worth a round that tests amber as an accent in a Night beige variant.
6. Acid lime appears as a recurring counterpoint (`0006`, `0050`, `0075`, `0063`'s SOUND ON) — a
   candidate for a status or "live" colour in Signal and Lab.

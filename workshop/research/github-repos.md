# External research — repos worth learning from

Compiled 2026-09-20. Stars / license / last-push pulled live via `gh api repos/<owner>/<repo>` on that
date unless noted; treat star counts as a snapshot, not a ranking of quality. Scope: repos with a
similar purpose to yoshiki (a mined, id-addressed library of design material with manifests,
previews and a generated registry), across six directions the owner asked to cover.

---

## 1. Design systems published as open repos (tokens + components + docs)

| Repo | Stars | License | Last push |
|---|---|---|---|
| [primer/react](https://github.com/primer/react) | 3.9k | MIT | 2026-09-18 |
| [carbon-design-system/carbon](https://github.com/carbon-design-system/carbon) | 9.5k | Apache-2.0 | 2026-09-19 |
| [adobe/spectrum-css](https://github.com/adobe/spectrum-css) | 1.3k | Apache-2.0 | 2026-09-15 |
| [adobe/react-spectrum](https://github.com/adobe/react-spectrum) | 15.9k | Apache-2.0 | 2026-09-20 |
| [microsoft/fluentui](https://github.com/microsoft/fluentui) | 20.3k | NOASSERTION | 2026-09-18 |
| [material-components/material-web](https://github.com/material-components/material-web) | 11.3k | Apache-2.0 | 2026-09-18 |
| [radix-ui/themes](https://github.com/radix-ui/themes) + [primitives](https://github.com/radix-ui/primitives) | 8.7k / 19.3k | MIT | Apr / Aug 2026 |
| [mui/base-ui](https://github.com/mui/base-ui) | 11.0k | MIT | 2026-09-19 |
| [chakra-ui/park-ui](https://github.com/chakra-ui/park-ui) (formerly cschroeter/park-ui) | 2.4k | MIT | 2026-04-10 |
| [Shopify/polaris-react-archive](https://github.com/Shopify/polaris-react-archive) | 6.2k | — | **archived/deprecated** |

**What they contain / how structured:**
- **Primer** (`primer/design` guidelines repo + `primer/react` implementation): tokens in a separate
  `primer/primitives` package (JSON → platform outputs via Style Dictionary), components as React with
  Storybook docs, a docs site generated from MDX + component metadata. Classic three-layer split:
  primitives → semantic tokens → components.
- **Carbon**: monorepo (`packages/*`) — `carbon-components` (Sass), `carbon-web-components`,
  `carbon-react`, `carbon-icons`, a `carbon-tokens` package, and a Storybook-driven docs site
  (`carbon.design-system`) with a "usage / style / code" tab pattern per component page.
- **Spectrum**: `spectrum-css` is pure CSS tokens+components (no framework), `react-spectrum` layers
  React Aria (headless behaviour) + React Spectrum (styled) + Spectrum tokens. The
  headless/behaviour vs. styled/skin split is the most reusable idea here.
- **Fluent UI**: Rush monorepo, converged v9 uses Griffel (CSS-in-JS) tokens; docs built from Storybook
  + a "recipes" pattern. Figma-to-code pipeline is a maintained internal tool, not really portable.
- **Material Web**: web components, each with a `.ts` + adopted stylesheet + a "Material Theme Builder"
  external tool for tokens; docs are mostly Google's separate m3.material.io site, not in-repo.
- **Radix**: Primitives = unstyled behaviour-only components (accessibility contracts, no visual
  opinion); Themes = an opinionated skin on top with a token scale (`--gray-1..12`, `--accent-9`, etc.)
  and a single `<Theme>` provider for radius/scaling/appearance. The "9-step semantic scale + one
  provider switches everything" model is worth studying for how yoshiki's `roles.md` contract could be
  made runtime-switchable, not just documentation.
- **Base UI** (from the Radix/Floating UI/MUI people): pure headless primitives, explicitly *not* a
  design system — it only ships behaviour + ARIA, no CSS. Confirms the industry split: behaviour layer
  and material/skin layer are different products now.
- **Park UI**: built on Ark UI (headless) + Panda CSS (a "zero-runtime" CSS-in-JS with a token/recipe
  format very close to design tokens). Ships pre-built themes as *variants of one recipe set*, which
  maps closely to what yoshiki wants: one component grammar, several palette skins.
- **Polaris**: React implementation is **archived (deprecated)** as of 2026 — Shopify moved on. Good
  cautionary data point: even a well-funded, widely used design system gets end-of-lifed; don't
  over-invest in framework-specific component code that outlives its host stack.

**Take:** the three-layer separation (primitive tokens → semantic roles → components) and the
headless/styled split (Radix Primitives+Themes, Base UI, React Aria+Spectrum, Ark+Park UI) are the
two ideas most worth stealing. yoshiki already has zone + role separation; it does not yet have a
"headless behaviour contract" layer — worth considering only if yoshiki ever ships actual runnable
components rather than CSS/manifests.

---

## 2. Component registries and "copy-paste" libraries

| Repo | Stars | License | Last push |
|---|---|---|---|
| [shadcn-ui/ui](https://github.com/shadcn-ui/ui) | 124k | MIT | 2026-09-17 |
| [magicuidesign/magicui](https://github.com/magicuidesign/magicui) | 22.3k | MIT | 2026-09-20 |
| [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) | 47.7k | source-available (NOASSERTION on GitHub — check before reuse) | 2026-09-19 |
| [markmead/hyperui](https://github.com/markmead/hyperui) | 12.2k | MIT | 2026-09-18 |
| [htmlstreamofficial/preline](https://github.com/htmlstreamofficial/preline) | 6.4k | NOASSERTION | 2026-08-31 |
| [themesberg/flowbite](https://github.com/themesberg/flowbite) | 9.4k | MIT | 2026-06-27 |
| [saadeghi/daisyui](https://github.com/saadeghi/daisyui) | 42.4k | MIT | 2026-09-18 |
| [uiverse-io/galaxy](https://github.com/uiverse-io/galaxy) | 13.0k | MIT | **frozen 2024-09-02** |
| [birobirobiro/awesome-shadcn-ui](https://github.com/birobirobiro/awesome-shadcn-ui) | 20.5k | MIT | 2026-09-19 (curated list, see §3) |

**shadcn/ui — the single closest structural analogue in this whole survey.** It is not a component
library you install; it's a *registry format* plus a CLI that copies source into your project. Read
directly from the docs (ui.shadcn.com/docs/registry, fetched 2026-09-20):
- `registry.json` at the repo root: `{ name, homepage, items[] }`, or `include: [...]` to compose from
  nested `registry.json` files (mirrors yoshiki's per-folder `manifest.yml` + generated
  `canon/registry.json`).
- `registry-item.json` per item: `name`, `type` (`registry:ui|block|component|hook|lib|font|page|file|
  style|theme|item`), `title`, `description`, `files[]` (`path`, `type`, optional `target`),
  `dependencies`/`devDependencies` (npm), `registryDependencies` (other items — same role as yoshiki's
  `uses`/`derived-from`), and `cssVars` (theme tokens the item wants set).
- **Any public GitHub repo can be a registry** just by having a root `registry.json` — the CLI resolves
  `owner/repo/item-name` addresses directly, no publishing step required. This is the most portable
  version of "a library with ids you can point a tool at."
- `shadcn build` validates and flattens a registry; `shadcn/schema` exports the Zod schemas
  (`registrySchema`, `registryItemSchema`, …) for third parties to validate against — i.e. they ship the
  same kind of JSON Schema yoshiki keeps at `schema/manifest.schema.json`, but with an official CLI on
  top instead of an ad hoc Python script.

**Magic UI** is the second-closest analogue and worth reading end to end: a Turborepo monorepo with a
root `registry.json`, an `AGENTS.md`, a `skills/` folder, and `.cursor/` — i.e. it is already organizing
itself the way yoshiki organizes for agent consumption (manifest + registry + agent instructions living
side by side). Confirms the shape yoshiki has chosen is not idiosyncratic.

**react-bits** (47.7k stars, surprisingly higher than shadcn's individual competitors) is an animated/
WebGL-leaning component collection distributed through **jsrepo** (`jsrepo.dev`), a generic
"copy-paste registry" CLI *not tied to shadcn or even to JS conventions* — it supports GitHub/GitLab/
Bitbucket/Azure DevOps/website/local-filesystem providers and lets a registry mix languages. This is the
tool to look at if yoshiki ever wants an installable "add this component" CLI without depending on the
shadcn ecosystem's npm-centric assumptions. react-bits itself is a strong content source for the
"generative/creative coding" direction too (see §5) — many entries are literally Three.js/OGL/GLSL
backgrounds and text effects with copy-paste React wrappers. License is not a clean SPDX id on GitHub;
verify actual terms in its `LICENSE.md` before lifting content, its site markets some components as
Pro/paid.

**HyperUI, Preline, Flowbite** are plain marketing-site + component-gallery projects (Astro/vanilla
JS sites with Tailwind snippets); structurally unremarkable — content is organized by page/category in
an Astro `content` collection (HyperUI) or docs site (Preline/Flowbite), no manifest format, no ids
beyond page slugs. Preline pairs its free components with a paid Figma kit and "agent skills" bundle —
a monetization pattern (free HTML/JS, paid design source + AI tooling) worth noting as a market signal,
not a structure to copy.

**daisyUI**: interesting mainly for storing **themes as first-class, separately versioned data**
(`packages/daisyui/src/themes`) alongside `components`, `base`, `utilities` — i.e. it treats "palette"
and "component grammar" as sibling top-level concerns inside one package, which is exactly the
separation the owner has already mandated for yoshiki. Good validation, nothing new to copy structurally.

**Uiverse / galaxy**: the platform (uiverse.io) auto-commits every approved community submission into
a flat archive — 11 category folders, one HTML file per component, submission and moderation happen
entirely on the website, **direct PRs to the repo are ignored**, and the mirror has been **frozen since
September 2024** even though the live site keeps growing. Lesson: a repo that is just an export target
for a separate platform rots the moment someone stops running the sync job. yoshiki should not let
`canon/registry.json` become a similarly stale mirror of some other, more actively maintained surface.

**Take:** shadcn's `registry.json`/`registry-item.json` pair, and its "any GitHub repo can be a
registry, addressed as `owner/repo/item`" mechanism, is the strongest concrete format to benchmark
yoshiki's manifest schema against — see proposals below.

---

## 3. Awesome-lists and catalogues

- [alexpate/awesome-design-systems](https://github.com/alexpate/awesome-design-systems) — 25.9k stars,
  MIT. A flat, well-maintained curated list of ~120 public design systems (Primer, Carbon, Polaris,
  Atlassian, Lightning, etc.) with one-line descriptions. Good discovery tool, zero structure to copy —
  it's a README, not a registry.
- [klaufel/awesome-design-systems](https://github.com/klaufel/awesome-design-systems) — 887 stars, more
  editorial/article-focused (process and governance links, not just repos).
- [birobirobiro/awesome-shadcn-ui](https://github.com/birobirobiro/awesome-shadcn-ui) — 20.5k stars,
  actively updated (2026-09-19); catalogues the entire shadcn *ecosystem*: third-party registries,
  CLIs, blocks, templates, tools. This is the map to follow if yoshiki wants to survey what other people
  have built on the registry-item format specifically.
- [terkelg/awesome-creative-coding](https://github.com/terkelg/awesome-creative-coding) — large,
  long-running list of creative-coding tools, tutorials, and libraries (WebGL/GLSL/generative art);
  well organized by topic (Tools → Online/Offline, Learning Resources → articles/books/talks, Libraries
  by language). Best entry point into §5.
- [vanrez-nez/awesome-glsl](https://github.com/vanrez-nez/awesome-glsl) — smaller, GLSL-specific
  learning-resource list.

**Take:** none of these are structural analogues — they're indexes, not libraries. Their only value to
yoshiki is as a discovery feed; `awesome-shadcn-ui` and `awesome-creative-coding` are the two worth
periodically re-scanning for fresh sources.

---

## 4. Theme / colour-scheme families with generators and multi-app templates

| Repo | Stars | License | Last push |
|---|---|---|---|
| [catppuccin/catppuccin](https://github.com/catppuccin/catppuccin) | 19.8k | MIT | 2026-07-25 |
| [catppuccin/palette](https://github.com/catppuccin/palette) | — | MIT | active |
| [rose-pine](https://github.com/rose-pine) (org, ~20 per-app repos) | 1.6k on the theme repo | MIT | active |
| [tinted-theming/home](https://github.com/tinted-theming/home) (spec) + [tinted-theming/schemes](https://github.com/tinted-theming/schemes) (data) | 468 / 296 | MIT | 2026-08 / 2026-09 |
| [nordtheme/nord](https://github.com/nordtheme/nord) | 6.9k | MIT | 2023-10 (largely dormant) |
| [morhetz/gruvbox](https://github.com/morhetz/gruvbox) | 15.8k | none declared | 2026-09-18 (community forks still active) |
| [rebelot/kanagawa.nvim](https://github.com/rebelot/kanagawa.nvim) | 6.4k | MIT | 2026-05-10 |
| [folke/tokyonight.nvim](https://github.com/folke/tokyonight.nvim) | 8.2k | Apache-2.0 | 2026-03-24 |

**Catppuccin — the strongest structural analogue in the whole theme-family space.** Source of truth is
one `palette.json`/`palette.yml` (in `catppuccin/palette`) with 4 flavors × ~26 named colours, each
carrying `hex`, `rgb`, `hsl`, `oklch`, `order`, and an `accent: boolean` flag. From that single file:
  - a generated **TS/Deno/Python/Rust/… package** re-exports the palette with typed accessors
    (`flavors`, `flavorEntries`, per-colour `hex/rgb/hsl/oklch`);
  - **Whiskers**, their own templating CLI (Tera-based, see `catppuccin/community` RFC CAT-0003), takes
    template files with a YAML frontmatter block (declaring things like a `matrix` of variant × flavor ×
    accent to generate many output filenames from one template) and injects palette values — this is how
    ~250 per-app "ports" (VS Code, GTK, Alacritty, Obsidian, …) are generated and kept in sync;
  - the main `catppuccin/catppuccin` repo holds only **governance data**, not colour values:
    `resources/ports.yml` + `resources/ports.schema.json` (a manifest per port: name, categories, repo
    URL, current/legacy platform support) and `resources/categories.yml`. Ports are literally a
    registry of external repos, schema-validated, with their own porcelain JSON for tooling.
  - `docs/specs.md` and `docs/style-guide.md` define usage rules (which colour is accent, minimum
    contrast, do/don't) separately from the raw values — same spirit as yoshiki's `canon/language/roles.md`
    staying independent of any one `palette.yml`.

**Rosé Pine**: one core "soho vibes" aesthetic, forked into ~20 tiny single-purpose repos (`tmux`,
`zed`, `vscode`, `obsidian`, `godot`, `home-assistant`, …), each just a template/config file plus a
README. No shared build tooling visible at the org level — each port repo is maintained by hand. Weaker
tooling than Catppuccin but a clean naming/organization convention ("Soho vibes for X" — one repo per
target surface) that's easy for contributors to extend.

**tinted-theming (formerly base16/base24)**: textbook spec/schemes/builder separation across three
repos — `home` (the *styling specification*, prose + guidelines, versioned as "Tinted8" now supersedes
plain base16/base24), `schemes` (pure YAML colour data, no logic), and per-language `*-builder-*` repos
(Node/Rust/…) that turn a scheme + a template into output files. Active discussion (issue #153, Feb 2026)
about *semantic slot correctness* — e.g. where a "darker than background" colour belongs when a scheme
like Catppuccin doesn't fit the base16 slots cleanly — is a genuinely useful cautionary read: a fixed
n-slot palette contract eventually collides with real palettes that want more expressive semantics
(exactly the tension yoshiki is already managing with its explicit *roles*, not raw slots).

**Nord**: effectively dormant upstream (last push 2023) despite still being widely used — a warning that
a values-only palette repo has no continued gravity once forks/ports scatter across the ecosystem;
without an active spec + builder like tinted-theming's, a theme family stalls.

**gruvbox / kanagawa / tokyonight**: single-purpose colourscheme repos, Neovim/Vim-centric, values
hardcoded per target (no generator), success driven entirely by aesthetic quality and community ports,
not tooling. Confirms tooling is optional if the palette itself is strong enough — but Catppuccin's
scale (hundreds of ports, actively synced) only survived because of Whiskers + the ports registry.

**Take:** Catppuccin's `palette.json` (multi-format colour values including OKLCH) + Whiskers templating
+ `ports.yml` registry-of-integrations is the best available model for how yoshiki could formalize
"one palette source → many generated surfaces," and its `ports.schema.json`/`categories.yml` split is a
direct parallel to what yoshiki's `schema/manifest.schema.json` + `canon/registry.json` are already doing
for pieces (not yet for *where a palette gets consumed*, which yoshiki doesn't track today).

---

## 5. Generative/creative-coding & WebGL component collections

There is no single strong "repo" here comparable to a design-system monorepo — the space is a topic
cloud (GitHub's `webgl` topic alone lists ~13k repos) navigated mainly through curated lists:
- **terkelg/awesome-creative-coding** (see §3) is the map.
- **DavidHDev/react-bits** (§2, 47.7k stars) is in practice the best *productized* collection of
  ready-to-drop WebGL/canvas/GLSL effects (particle fields, distortion/text effects, animated
  backgrounds) wrapped as React components with a copy-paste registry (jsrepo) — more useful to yoshiki
  than most "pure" creative-coding repos because it already did the packaging work (props, sizing,
  reduced-motion handling) that a raw shader demo skips.
- The **pmndrs** ("poimandres") ecosystem (`react-three-fiber`, `drei`, `postprocessing`,
  `maath`) is the de facto standard toolkit underneath most of today's "wow" web effects — not a
  content library itself, but nearly every serious WebGL component collection (including chunks of
  react-bits and Aceternity-style sites) is built on it. Worth knowing as infrastructure, not as
  material to mine directly.
- Aceternity UI (`ui.aceternity.com`) — **not a public repo**. Checked directly: the `aceternity` GitHub
  org only hosts two unrelated boilerplate repos (`saasternity`, `nextjs-boilerplate`); the actual
  100+ animated components live only on the commercial website, shown as copy-paste code in the
  page but with a mix of free and paid ("Pro") items, no canonical source repo, no registry.json,
  no versioning. Third-party scrapers/VS-Code extensions exist precisely because there is no official
  distribution channel. **This is the hype-with-little-substance case in this survey**: excellent
  visual design, zero structure or governance to learn from, and it should not be cited by yoshiki as
  "a repo like ours" — it's a marketing site, not a library.

**Take:** for creative-coding/WebGL material, mine `terkelg/awesome-creative-coding` for links and treat
`DavidHDev/react-bits` as the closest thing to a real, structured, license-checkable content source;
don't chase Aceternity's catalogue directly — screenshot/analyse it as a reference the way any other
website reference is handled in `workshop/refs`, never as a "repo to structurally learn from."

---

## 6. Closest analogues to "a design material library with ids, previews, and prompts"

Ranked by actual closeness to yoshiki's own shape (manifest.yml + schema + generated registry.json +
previews):

1. **shadcn/ui's registry format** (`registry.json` + `registry-item.json`, §2) — closest on the *data
   model* axis: typed items, ids, dependency graph between items, files with types, and the "any repo
   with this file at its root is a registry" trick. No "preview" concept and no stylistic-register field
   though — yoshiki's `style`/`build`/`votes` fields have no shadcn equivalent.
2. **Catppuccin's palette + ports registry** (§4) — closest on the *palette-as-separate-swappable-layer*
   axis, plus a real templating pipeline (Whiskers) for propagating one source into many surfaces.
3. **Magic UI's repo shape** (`registry.json` + `AGENTS.md` + `skills/`, §2) — closest on the
   *agent-facing* axis: it's already built assuming an AI coding agent, not just a human, will read it.
4. **Style Dictionary + the W3C Design Tokens Format Module** (`$type`/`$value`/`$description` JSON,
   spec finalized 2025-10-28, github.com/mryechkin/style-dictionary-tokens as a worked example) — the
   closest thing to an *industry-standard interchange format* for what `canon/palettes/*/palette.yml`
   currently encodes ad hoc. Not a content library, but a format worth aligning `palette.yml` to if
   yoshiki ever wants its palettes consumable by outside tooling (Figma plugins, Style Dictionary itself,
   Tokens Studio) without a bespoke parser.
5. **jsrepo** (`jsrepo.dev`, §2) — closest on the *distribution CLI* axis: a registry-agnostic `add`/
   `build`/`init` tool that could, in principle, serve yoshiki's own `canon/` as an installable registry
   without inventing a new CLI.
6. **Storybook / Ladle** (not deep-dived above, but relevant): the standard "one page per component with
   live preview + controls" tool in this whole space. yoshiki's own `tools/preview_gallery.py` is
   reinventing a much smaller version of what Storybook does for free, at the cost of no interactivity —
   worth a deliberate comparison before growing that tool further.

Nobody in this survey combines *all* of: id-addressed pieces, a stylistic-register/build-notes field,
generated static previews, and a curated-from-references provenance chain (`derived-from` pointing at
`yk:ref/...`). That combination — closest to a design *research* library with traceable references,
not just a shippable component kit — appears to be genuinely novel among what was found. The individual
pieces (ids+registry, palette-as-layer, agent-facing docs, static preview generation) all exist
separately, just not stitched together the way yoshiki does.

---

## Ranked shortlist — 10 most useful sources

1. **shadcn/ui registry docs** (ui.shadcn.com/docs/registry/*) — adopt the item/type/files/dependency
   vocabulary as a cross-check against `schema/manifest.schema.json`.
2. **catppuccin/palette + catppuccin/catppuccin** — adopt the palette-as-multi-format-values +
   Whiskers-style templating + ports registry pattern for propagating yoshiki palettes to real surfaces.
3. **magicuidesign/magicui** — closest sibling project in spirit (registry.json + AGENTS.md + skills);
   read its `AGENTS.md` and `registry.json` verbatim before writing yoshiki's next iteration of either.
4. **tinted-theming/home + schemes** — study the spec/schemes/builder split and the semantic-slot debate
   (issue #153) before yoshiki locks its own role contract further.
5. **W3C Design Tokens Format Module (2025-10-28) + Style Dictionary** — evaluate migrating
   `palette.yml` values toward `$type`/`$value` so external tools can consume it.
6. **DavidHDev/react-bits** — best real source of packaged WebGL/canvas effect components to study (and,
   license permitting, mine) for the effects/motion side of `canon/effects`.
7. **radix-ui/themes + radix-ui/primitives** (and mui/base-ui) — study the headless/styled split as a
   model for if/when yoshiki starts shipping runnable components, not just CSS/manifests.
8. **jsrepo.dev** — evaluate as a ready-made distribution CLI instead of building one.
9. **birobirobiro/awesome-shadcn-ui** — recurring scan target for what the shadcn-registry ecosystem is
   building; cheap way to keep discovering fresh sources.
10. **uiverse-io/galaxy** — negative example: read it specifically to avoid the failure mode (registry
    repo as a frozen mirror of a livelier platform, no direct contribution path, silent staleness).

## Concrete proposals for yoshiki

- **Cross-check, don't replace, the manifest schema against `registry-item.json`.** Specifically
  consider adding a `files[]`-with-`type` array (yoshiki currently implies files by convention/folder,
  not a typed manifest field) so a future CLI (or `shadcn`/`jsrepo` themselves) could address individual
  yoshiki pieces the same way they address their own items.
- **Give `canon/registry.json` a "ported to" / "consumed by" field**, mirroring Catppuccin's
  `ports.yml` — right now yoshiki tracks where a piece came from (`derived-from` → `yk:ref/...`) but not
  where it has actually been used (which repo/site/app). That closes the loop the owner cares about
  (verify against real usage, not prose docs).
- **Evaluate a Whiskers-style template pass** for `library/web/palette.css` and `library/integrations/
  slint/*` generation in `tools/build.py`, instead of hand-maintained per-target code — Catppuccin's
  frontmatter-driven "matrix" (variant × flavor × accent → filenames) is directly applicable to
  yoshiki's `night-beige`/`beige-glass` pair and future palettes.
- **Publish `canon/` as a GitHub-addressable registry** (root `registry.json` pointing at yoshiki's own
  pieces) as a side effect of the existing schema — costs little, and immediately makes yoshiki
  consumable by the `shadcn` CLI ecosystem for anyone (including future-you) wiring it into an actual
  app scaffold.
- **Before growing `tools/preview_gallery.py` further, benchmark it against Storybook/Ladle** — decide
  explicitly whether static-image previews remain sufficient or whether an interactive preview host is
  worth the added tooling weight, rather than organically re-deriving Storybook's feature set piecemeal.
- **Adopt DTCG token types (`$type`/`$value`) inside `palette.yml`** where it doesn't fight the existing
  role-based structure — mainly to make palettes machine-consumable by outside tools (Tokens Studio,
  Style Dictionary, Figma variable import) without a bespoke reader.

## Where we might be duplicating badly

- **`tools/preview_gallery.py`** is a hand-rolled, non-interactive slice of what Storybook/Ladle/
  Backlight already do well and for free (live preview, controls, story-per-state). If yoshiki's preview
  needs grow past static screenshots, this is the first thing to reconsider rather than extend.
- **The registry format itself** (`manifest.yml` per item → generated `registry.json`) is structurally
  identical to what shadcn/ui and Magic UI already ship as a *documented, tool-supported* standard with
  an existing CLI, JSON Schema export (`shadcn/schema`), and ecosystem (`jsrepo`, third-party registries
  cataloged in `awesome-shadcn-ui`). Nothing is broken by yoshiki keeping its own bespoke format — it
  fits yoshiki's non-npm, non-component-code reality — but a bespoke Python `tools/build.py` is
  reinventing (a smaller version of) `shadcn build` / Style Dictionary. Worth being deliberate that this
  is a considered choice, not an oversight.
- **Palette build/propagation** (`tools/build.py` merging `palette.yml` variants and baking exports) is
  reinventing a smaller, single-owner version of Catppuccin's Whiskers + `catppuccin/palette` package.
  That duplication is currently proportionate to yoshiki's scale (a handful of palettes, not hundreds of
  app ports) — revisit only if the palette count or number of consuming surfaces grows enough to justify
  a real templating engine.

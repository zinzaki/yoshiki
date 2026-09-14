# Zones — decide where you draw before you choose what

Every object, material, effect and pattern in yoshiki belongs to a **zone**. The zone is decided
first, from the surface you are building for; only then are objects picked. Manifests carry it as a
required field (`zone: graphic | text | any`).

## The two zones

| | **graphic** | **text** |
|---|---|---|
| surfaces | web pages and apps, desktop apps (GTK, Qt, Slint, Tauri, Electron), installers, mobile | terminal, TUI, CLI output, chat and bot messages, code comments, commit messages, plain-text docs |
| can draw | pixels, vectors, blur, light | characters in a grid, ANSI colour |
| structure | real components: panels, title bars, lists, tables, dialogs | box-drawing frames, indentation, aligned columns |
| icons | a real icon set packaged with the app (stroke vector icons, or an icon font such as Nerd Font shipped with it) | semantic glyphs: `✓ ✗ ● ◆ ❯` — one meaning each |
| loading | graphical loaders: progress bars, skeletons, animated shapes | character spinners and bar progress (`⠋ ▰▱`) |
| materials | glass, paper, lacquer, grain, glow, patterns | none; tone comes from ANSI roles |
| motion | CSS / GPU transitions, one orchestrated moment | frame-by-frame character animation |

## Rules

1. **A desktop app is graphic**, even a developer tool, even one that shows logs. Only an actual
   terminal surface is text. A log panel inside a graphic app is a *terminal island* — it may use
   monospace and ANSI colours inside its bounds, never outside.
2. **Never draw text-zone objects in the graphic zone.** No `╭─╮ ╔═╗` frames, no glyphs standing in
   for icons, no braille spinners, no ASCII art, no monospace as decoration.
3. **Never fake graphics in the text zone.** No ASCII banners, no pixel art made of blocks, no colour
   used as the only carrier of meaning.
4. **`any` means the rule is about content**, not drawing: wording, hierarchy, the budget of accent
   and signal colour, never-colour-alone.
5. **Chat messages** are text zone. A bot may send an *image card* rendered in the graphic zone and
   attached as a picture; the message text itself stays text zone.

## For agents

Before generating anything, state the zone in one line (`zone: graphic — Slint desktop app`). Filter
objects and patterns by that zone. If the request mixes surfaces (a desktop app with an embedded
terminal), split it into zones and apply each set of rules inside its own bounds.

```
╭─ text ───
│  copy-paste text blocks
╰╴
```

> Copy-paste text blocks — the applied form of `../../canon/lexicon/`.
> Plain UTF-8, monospace-safe, line-wrap-safe. One decorative element per block.

Eleven files. Most of what a project writes is text with no colour available
at all — a commit, a diff, a chat message, a log line. These are the shapes
that still read as this language when every hue has been stripped out.

### Structure — the blocks a document is built from
```
lists.txt        unordered · ordered · ladder · checklist · definition · nested
steps.txt        a procedure someone follows while looking at it
kv.txt           aligned pairs — columns, leader dots, grouped, empty states
quotes.txt       pull quotes, block quotes, epigraphs, attributions
```

### Openers and seals
```
banners.txt      section openers, capsules, document and comment headers
nameplates.txt   spaced-capital seals: ⟦ A U R O R A ⟧ and variants
dividers.txt     rules by weight — heavy · light · dashed · dotted · open · end
```

### Signal
```
callouts.txt     flagged lines — ok · warn · error · note · tip, and their shapes
badges.txt       compact status tags by what they actually say
glyph-sets.txt   curated glyph rows by meaning, with font tiers
```

### The long-lived text
```
commits.txt      commit subjects, bodies, changelogs, release notes
```

Each block notes its intended use in a trailing `# ...` line.

## Principles
1. **One decorative element per block.** A nameplate or a heavy rule, not both.
2. **The marker states the kind.** A middle dot is an unordered list, a number
   is an ordered one, `▫` is a thing not yet done — and these do not swap.
3. **A glyph carries one meaning per screen.** `▲` states direction; `⚠` states
   judgement; using one for the other empties both.
4. **Alignment is the grid.** Values share one left edge, labels one column,
   sparkline runs one width. Misalignment reads as a bug before it reads as text.
5. **Say the absent thing.** An em dash for never-happened, words for a real
   state, `✗` with a reason for a failure — never a blank or a zero standing in.
6. **Pick the lowest font tier that does the job.** The one line that must
   always render is the one that must not need a Nerd Font.
7. **It has to survive a diff.** If a block stops making sense in a pull
   request, a chat window or `git log`, it was decoration.

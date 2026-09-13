```
╭─ loaders ───
│  every way this language says "working"
╰╴
```

> Waiting is the most-seen state in any tool and the least designed. This is the
> catalogue: spinners by tempo, progress by shape, and the forms that carry a
> stage rather than a percentage. Every one of them is drawn with sub-symbols —
> braille cells, quadrant blocks, half-filled squares — because a solid slab bar
> is the one shape [`canon/motion`](../../canon/motion) forbids.

| File | For |
|---|---|
| [`spinners.txt`](spinners.txt) | indeterminate, small: eleven families with their tempos |
| [`bars.txt`](bars.txt) | determinate: eight bar forms, and when each is right |
| [`indeterminate.txt`](indeterminate.txt) | determinate-looking, but honest about not knowing |
| [`stages.txt`](stages.txt) | multi-step work: a list that fills in as it goes |
| [`skeleton.txt`](skeleton.txt) | the shape of what is coming, in text |
| [`inline.txt`](inline.txt) | working, inside a sentence or a status line |

## The three rules

**A spinner without a label is a shrug.** It says something is happening and
refuses to say what. Every indeterminate form here carries a word.

**~90ms is the tempo.** Faster reads as panic, slower reads as a stall. That is
one frame per ~90ms for a spinner; smoothness belongs to progress, which may run
as fast as it likes because it is showing a real quantity.

**Past ten seconds, stop spinning.** Replace the spinner with a stage list or a
real percentage. A spinner is a promise that this will be over shortly, and after
ten seconds it is a broken one.

## Reduced motion

Every form here has an honest still frame — the tape holds at its real value,
the spinner holds at one cell — rather than vanishing. Under
`prefers-reduced-motion` a disappearing loader is worse than a still one: the
work is still happening.

```
paint: the moving part   -> action.edge  (gold)
       the track         -> border.hairline
       the number        -> text.secondary
       the label         -> text.muted
       a finished step   -> ok.text with a check
       a failed step     -> danger.text with a cross, and it stops the run
```

# The filter pipeline

Nothing enters the library because it was found, and nothing is kept because it was marked in a
hurry. Every candidate — mined from a reference, taken from an external resource, or invented — runs
through the filters below **in order**. A candidate that fails a filter is either repaired and
re-entered or dropped, and the reason is recorded in its manifest (`votes.note` or `summary`).

The owner's marks are one input at F9, not the verdict.

| # | filter | question | how it is checked |
|---|---|---|---|
| F0 | **intake** | where is it from, what is it called, does it have an id? | automatic — `tools/parts.py`, manifest schema |
| F1 | **substance** | can it be rebuilt from the notes alone, or is it a vibe? | rebuild it as a preview; if the preview needs invention, the notes were empty |
| F2 | **zone and roles** | does it belong to one zone, consume roles, and hold no raw colour? | automatic — grep for hex in previews, `zone` required by schema |
| F3 | **register** | is its stylistic world named, and is the piece pure within it? | review: one register per piece, no blended devices |
| F4 | **distinctness** | do we already have this? | automatic similarity on name + build + kind, then a look at the neighbours |
| F5 | **palette proof** | does it hold in the whole family, not only in beige and gold? | render in at least four palettes (one light, one dark, one gold-less); contrast floors from `tools/build.py` |
| F6 | **scale proof** | does it read at preview size and at real size, down to 390px? | screenshots at 360×230 and at full width, desktop and phone |
| F7 | **accessibility** | contrast, reduced motion and transparency, never colour alone | automatic where possible; the rest by review |
| F8 | **craft** | composition, spacing, type — would it survive beside the best work in its register? | judgement, with the reference set open |
| F9 | **taste signals** | what has the owner said about this kind of thing? | his votes and the standing notes: nothing naive or childish, no blended registers, no dull grey, no gold-by-default |
| F10 | **value to the whole** | does it fill a gap in the matrix (zone × kind × register) or is it the ninth toggle? | the registry counts; a piece that only repeats an occupied cell needs a reason to exist |

## Verdicts

- **canon** — passes F1–F8, fills a real cell at F10: gets a manifest, a preview, a prompt and a
  place on a shelf.
- **library** — passes but is a variant or a lesser sibling: stays in the catalogue as material,
  searchable, not promoted.
- **repair** — fails F5, F6 or F7 only: the idea is good, the build is wrong; it is rebuilt once and
  re-enters at F5.
- **out** — fails F1, F3, F4 or F8: recorded with the reason so the same thing is not mined twice.

## Keeping the whole picture

After each wave, the set is reviewed as a set, not as a list of accepted pieces:

1. the matrix of zone × kind × register — what is thin, what is bloated;
2. one screenshot sheet per register, to see whether the register reads as one world;
3. every palette rendered with the same sheet, to catch pieces that only work in one scheme;
4. the count of pieces that are variants of each other — the library should be broad, not deep in
   one corner.

```
╭─ image-prompts ───
│  generate images in the style — per model
╰╴
```

> The yoshiki look for image models: warm near-black lacquer, bone light, fine gold
> kintsugi seams, ONE scarlet spider lily as the only saturated colour, sumi-e meets
> modern editorial, large calm negative space. Canon: [`../../canon/prompts/image.md`](../../canon/prompts/image.md).

## The style core — reuse in every prompt
warm near-black lacquer background (`#0B0A08`, deep brown-gold undertone, never a
neutral grey or pure black) · bone / ivory light · fine aged-gold (`#D8AF52`)
hairlines like kintsugi seams, **never** gold fills · at most ONE saturated accent:
spider-lily scarlet (`#d8392e`), the only saturated colour · sumi-e ink-brush meets
modern editorial · large calm negative space · soft volumetric depth · subtle warm
film grain · museum quality.

## Avoid (the negative)
neon · glossy plastic · busy clutter · dim / washed-out colour · heavy block shading ·
rainbow / multicolour · harsh white · cartoonish · any unrequested text or logos.

## Per model
- **Midjourney** — comma phrases + params; push negatives with `--no`:
  `<subject>, <style core>, --ar 21:9 --style raw --no neon, glossy plastic, text, clutter, rainbow`
- **Flux** — plain English sentences (no `--params`, no weights). Describe it like to
  a person; weave the style core into prose.
- **Stable Diffusion / SDXL** — weighted positives + a separate negative field
  (`(kintsugi gold seams:1.2)`); see `recipes.txt`.
- **GPT-image / Gemini / Nano-Banana** — conversational; give the style core as
  constraints and state "the ONLY saturated colour is one scarlet lily."

Ready prompts to paste: [`recipes.txt`](recipes.txt).

## Rules
1. One scarlet bloom per image — the only saturated colour; everything else is tone.
2. Gold is seams / hairlines, never a gold fill or a solid gold object.
3. Leave a calm empty pocket (for a title, for breathing room).
4. Warm always — if it reads grey or neon, it is wrong.

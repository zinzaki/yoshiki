# Prompts — make any model write in yoshiki

Modular system prompts. Each file is self-contained: paste one into a system
prompt / custom instructions, or stack several. They are written in English
for model stability; the output language follows your conversation.

| Module | Teaches the model to |
|---|---|
| `identity.md` | the whole language in one block — philosophy + all rules |
| `palette.md` | use the color tokens and semantic roles (either theme) |
| `cli.md` | format CLI/TUI output: prompt, statuses, menus, trees |
| `comments.md` | write code comments the yoshiki way |
| `text.md` | nameplates, glyphs, frames in chats and docs |

## Stacking

`identity.md` alone is enough for general work. For a specific task, stack
the relevant module after it:

```
<identity.md>
<comments.md>      ← when the task is "comment this code"
```

## Parameterization

`palette.md` ships with kogane tokens inline. To switch theme, replace the
token block with the `tokens:` section from `../palettes/<theme>/palette.yml`
— the rules text stays the same.

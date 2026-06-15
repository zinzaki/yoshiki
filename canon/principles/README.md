```
╭─ principles ───
│  the defaults — what wins when nothing is specified
╰╴
```

Not a manifesto. A decision tool: an ordered ladder of priorities and a table of
defaults, so the language resolves the same way every time — by hand or by an AI —
when no one says otherwise.

| File | Holds |
|---|---|
| [`priority.md`](priority.md) | the ladder — what wins in a conflict, top to bottom |
| [`defaults.md`](defaults.md) | "if unspecified, use this" — concrete fallbacks |

The order is the tool: push any one principle to its extreme and the order tells
you which must give. (Mature systems stack-rank the same way — e.g. Salesforce:
clarity > efficiency > consistency > beauty.) The same ladder ships as an AI
module in [`../prompts/principles.md`](../prompts/principles.md).

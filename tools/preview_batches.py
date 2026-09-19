"""Slice the workshop catalogue into preview work batches.

Previews are rebuilt by hand (see workshop/PREVIEWS.md); this only decides what gets built
first and in what groups, and it drops near-duplicates so the same toggle is not rebuilt
five times.

    python3 tools/preview_batches.py [--size 40] [--wave 200]

Writes the batches next to the catalogue as preview-batch-NN.json and prints the plan.
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
EXTRACT = ROOT / "workshop" / "refs" / "extract"
PRIORITY = ["object", "pattern", "layout", "chart", "icon", "type", "material", "effect", "copy", "motion"]


def slug(s: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", (s or "").lower()).strip("-")


def key(item: dict) -> str:
    """Near-duplicate key: the same named thing in the same register is built once."""
    return f"{item.get('kind','')}/{item.get('register','')}/{slug(item.get('name',''))[:34]}"


def plan(size: int, wave: int):
    data = json.loads((EXTRACT / "catalogue.json").read_text())
    items = data["items"]
    for i, it in enumerate(items):
        it["id"] = f"{(it.get('ref','ref')).replace('yk:ref/', 'r')}-{slug(it.get('name',''))[:40]}-{i}"
    seen, unique = set(), []
    for it in items:
        k = key(it)
        if k in seen:
            continue
        seen.add(k)
        unique.append(it)
    # Interleave: every batch should show a mix of kinds and registers, not forty toggles.
    by_kind: dict = {}
    for it in unique:
        by_kind.setdefault(it.get("kind", "other"), []).append(it)
    for kind, lst in by_kind.items():                 # alternate registers inside a kind too
        by_reg: dict = {}
        for it in lst:
            by_reg.setdefault(it.get("register", "other"), []).append(it)
        mixed, queues = [], list(by_reg.values())
        while any(queues):
            for q in queues:
                if q:
                    mixed.append(q.pop(0))
        by_kind[kind] = mixed
    order = [k for k in PRIORITY if k in by_kind] + [k for k in by_kind if k not in PRIORITY]
    weights = {k: max(1, round(len(by_kind[k]) / max(1, len(unique)) * len(order) * 2)) for k in order}
    chosen, guard = [], 0
    while len(chosen) < wave and guard < wave * 4:
        guard += 1
        for k in order:
            for _ in range(weights[k]):
                if by_kind[k] and len(chosen) < wave:
                    chosen.append(by_kind[k].pop(0))
    batches = [chosen[i:i + size] for i in range(0, len(chosen), size)]
    for n, b in enumerate(batches, 1):
        keep = ("id", "ref", "kind", "name", "what", "build", "use", "style", "register", "zone")
        out = [{k: it[k] for k in keep if k in it} for it in b]
        (EXTRACT / f"preview-batch-{n:02d}.json").write_text(json.dumps(out, ensure_ascii=False, indent=1) + "\n")
        kinds = {}
        for it in b:
            kinds[it["kind"]] = kinds.get(it["kind"], 0) + 1
        print(f"batch {n:02d}: {len(b):3d}  " + ", ".join(f"{k} {v}" for k, v in sorted(kinds.items(), key=lambda x: -x[1])))
    print(f"\n{len(items)} components → {len(unique)} unique → {len(chosen)} in this wave, {len(batches)} batches")


if __name__ == "__main__":
    args = sys.argv[1:]
    size = int(args[args.index("--size") + 1]) if "--size" in args else 40
    wave = int(args[args.index("--wave") + 1]) if "--wave" in args else 200
    plan(size, wave)

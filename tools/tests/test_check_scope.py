import importlib, pathlib, unittest

ROOT = pathlib.Path(__file__).resolve().parents[2]


def load_check():
    src = (ROOT / "tools" / "check.py").read_text()
    head = src.split("# ── 1 ·")[0]          # import only the helpers, not the checks
    mod = type(importlib)("check_mod")
    mod.__dict__["__file__"] = str(ROOT / "tools" / "check.py")
    exec(compile(head, "check_head", "exec"), mod.__dict__)
    return mod


class TrackedScope(unittest.TestCase):
    def test_untracked_private_folders_are_not_scanned(self):
        files = {str(p.relative_to(ROOT)) for p in load_check().tracked_files()}
        self.assertTrue(any(f.startswith("canon/") for f in files))
        self.assertFalse(any(f.startswith(("style/", "beautiful/")) for f in files))


if __name__ == "__main__":
    unittest.main()

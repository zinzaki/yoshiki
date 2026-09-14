import importlib.util, pathlib, unittest

ROOT = pathlib.Path(__file__).resolve().parents[2]
spec = importlib.util.spec_from_file_location("manifests", ROOT / "tools" / "manifests.py")
assert spec and spec.loader
M = importlib.util.module_from_spec(spec)
spec.loader.exec_module(M)

GOOD = {"id": "yk:mat/glass.frost", "kind": "material", "title": "Frosted glass",
        "zone": "graphic", "status": "draft", "palettes": "any"}


class Manifests(unittest.TestCase):
    def test_repository_manifests_are_valid(self):
        items, problems = M.load_all()
        self.assertEqual(problems, [])
        self.assertIn("yk:tr/clean", {i["id"] for i in items})

    def test_valid_manifest_passes(self):
        self.assertEqual(M.validate(GOOD), [])

    def test_bad_id_unknown_field_and_zone_rule(self):
        bad = {**GOOD, "id": "mat/Glass", "colour": "#fff", "zone": "text"}
        errs = " ".join(M.validate(bad))
        self.assertIn("does not match", errs)
        self.assertIn("unknown field 'colour'", errs)
        self.assertIn("must be 'graphic'", errs)

    def test_deprecated_needs_replacement(self):
        self.assertTrue(M.validate({**GOOD, "status": "deprecated"}))
        self.assertEqual(M.validate({**GOOD, "status": "deprecated", "replaced-by": "yk:mat/glass"}), [])


if __name__ == "__main__":
    unittest.main()

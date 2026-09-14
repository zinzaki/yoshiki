import importlib.util, pathlib, unittest, yaml

ROOT = pathlib.Path(__file__).resolve().parents[2]
spec = importlib.util.spec_from_file_location("build", ROOT / "tools" / "build.py")
assert spec and spec.loader
B = importlib.util.module_from_spec(spec)
spec.loader.exec_module(B)


class ProductionPalettes(unittest.TestCase):
    def load(self, slug):
        return B.resolve(yaml.safe_load((ROOT / "canon/palette" / slug / "palette.yml").read_text()), None)

    def test_both_pass_every_contrast_floor(self):
        for slug in ("night-beige", "beige-glass"):
            with self.subTest(slug=slug):
                self.assertEqual(B.failures(B.measure(self.load(slug))), [])

    def test_group_map_covers_tokens(self):
        pals = {s: self.load(s) for s in ("night-beige", "beige-glass")}
        self.assertEqual(B.check_groups(pals), [])

    def test_roles_of_the_language(self):
        dark, light = self.load("night-beige"), self.load("beige-glass")
        self.assertEqual(dark["tokens"]["aka-1"], "#E3001B")
        self.assertEqual(dark["tokens"]["kin-1"], "#D8AF52")
        self.assertEqual(light["terminal"]["background"], "#161410")
        self.assertEqual(light["tokens"]["kin-1"], "#A8852F")   # voted paper gold edge
        self.assertEqual(dark["roles"]["syntax.type"], "syn-type")


if __name__ == "__main__":
    unittest.main()

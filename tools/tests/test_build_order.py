import pathlib, re, unittest

ROOT = pathlib.Path(__file__).resolve().parents[2]
SRC = (ROOT / "tools" / "build.py").read_text()


class BuildOrder(unittest.TestCase):
    def test_order_is_the_production_pair(self):
        self.assertIn('ORDER = ["night-beige", "beige-glass"]', SRC)

    def test_no_hardcoded_old_palette_names_in_code(self):
        code = "\n".join(l for l in SRC.splitlines() if not l.strip().startswith("#"))
        self.assertIsNone(re.search(r'["\'](kogane|washi)["\']', code))

    def test_site_follows_new_theme_names(self):
        js = (ROOT / "docs/assets/site.js").read_text()
        self.assertIn("'beige-glass'", js)
        self.assertIn("'night-beige'", js)

    def test_slint_tokens_cover_every_role(self):
        sl = (ROOT / "library/integrations/yoshiki.slint").read_text()
        self.assertIn("export global Yoshiki {", sl)
        self.assertIn("out property <color> bg-app: dark ? #161410 : #D6D2BD;", sl)


if __name__ == "__main__":
    unittest.main()

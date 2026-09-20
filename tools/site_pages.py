"""The three pages of the yoshiki site, built from the repository's own data.

`tools/site.py` holds the shell, the palette plumbing and the data readers; this module
composes the pages themselves.
"""
import json
import sys
from pathlib import Path

import importlib.util

ROOT = Path(__file__).resolve().parent.parent
spec = importlib.util.spec_from_file_location("yk_site", ROOT / "tools" / "site.py")
assert spec and spec.loader
S = importlib.util.module_from_spec(spec)
spec.loader.exec_module(S)


# ── page-specific css ───────────────────────────────────────────────────
INDEX_CSS = """
.hero{position:relative;padding-block:clamp(52px,8vw,120px) clamp(44px,6vw,90px);overflow:hidden}
.hero::before{content:"";position:absolute;inset:-25% -10% auto auto;width:74vw;height:96%;z-index:-1;pointer-events:none;
  background:radial-gradient(closest-side,color-mix(in srgb,var(--acc) 22%,transparent),transparent 72%)}
.hero h1{max-width:14ch}
.hero h1 em{font-style:italic;color:var(--accT)}
.hero .row{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,1fr);gap:34px 60px;margin-top:38px;align-items:end}
@media (max-width:980px){.hero .row{grid-template-columns:1fr}}
.stats{display:grid;grid-template-columns:repeat(4,auto);gap:10px 34px}
@media (max-width:560px){.stats{grid-template-columns:repeat(2,auto)}}
.stats b{display:block;font:600 clamp(30px,3.6vw,52px)/1 var(--disp);color:var(--head)}
.stats span{font:500 11px var(--mono);letter-spacing:.14em;color:var(--mu)}
.cta{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.cta a{text-decoration:none;border-radius:var(--r-md);padding:12px 20px;font-weight:600;font-size:15px}
.cta .primary{border:1.5px solid var(--acc);color:var(--accT);background:color-mix(in srgb,var(--acc) 10%,transparent)}
.cta .ghost{border:1px solid var(--line);color:var(--head)}

/* palette ring */
.ringwrap{position:relative;height:clamp(360px,46vh,500px);perspective:2000px;perspective-origin:50% 50%;margin:18px 0 26px;overflow:hidden}
.ring{position:absolute;left:50%;top:52%;width:0;height:0;transform-style:preserve-3d;transition:transform 1s var(--ease)}
.pcard{position:absolute;width:186px;height:252px;margin:-126px 0 0 -93px;border-radius:var(--r-lg);padding:16px;display:flex;flex-direction:column;
  backface-visibility:hidden;cursor:pointer;box-shadow:0 40px 70px -40px rgba(0,0,0,.75);transition:filter .5s ease,opacity .5s ease}
.pcard .c{font:500 10.5px var(--mono);letter-spacing:.16em;align-self:flex-end}
.pcard .d{display:flex;justify-content:center;margin:auto 0}
.pcard .d i{width:38px;height:38px;border-radius:50%;margin-left:-11px}
.pcard .d i:first-child{margin-left:0}
.pcard b{font:600 17px/1.1 var(--disp);letter-spacing:-.01em}
.pcard small{font:500 9.5px var(--mono);letter-spacing:.14em;text-transform:uppercase;margin-top:4px;display:block}
.pcard.far{filter:blur(2.4px) saturate(.8);opacity:.5}
.readout{display:grid;grid-template-columns:auto 1fr auto;gap:14px 36px;align-items:end;border-top:1px solid var(--line);padding-top:20px}
@media (max-width:820px){.readout{grid-template-columns:1fr}}
.readout .nm{font:400 clamp(26px,3vw,40px)/1 var(--disp);color:var(--head);display:flex;gap:12px;align-items:baseline}
.readout .nm span{font:500 12px var(--mono);letter-spacing:.2em;color:var(--accT)}
.roles{display:flex;gap:3px;flex-wrap:wrap;padding-bottom:18px}
.roles b{position:relative;width:clamp(42px,6vw,66px);height:42px;border-radius:5px;box-shadow:inset 0 0 0 1px rgba(128,128,128,.25)}
.roles b::after{content:attr(data-l);position:absolute;left:0;top:calc(100% + 5px);font:500 9px var(--mono);letter-spacing:.1em;color:var(--mu)}
.mini{display:flex;gap:8px;flex-wrap:wrap}
.mini a{font:500 11px var(--mono);letter-spacing:.1em;border:1px solid var(--line);border-radius:999px;padding:7px 13px;text-decoration:none;color:var(--mu)}
.mini a:hover{border-color:var(--acc);color:var(--accT)}

/* material tiles */
.tiles{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,250px),1fr));gap:14px}
.tile{position:relative;border-radius:var(--r-lg);overflow:hidden;aspect-ratio:4/3;background:var(--panel);box-shadow:inset 0 0 0 1px var(--line)}
.tile .cap{position:absolute;left:12px;bottom:10px;right:12px;font:500 10px var(--mono);letter-spacing:.14em;color:var(--mu);z-index:3}
.tile .cap b{color:var(--head);font-weight:500}
.t-glass::before{content:"";position:absolute;inset:0;background:radial-gradient(60% 70% at 70% 20%,color-mix(in srgb,var(--acc) 40%,transparent),transparent 70%),radial-gradient(50% 60% at 20% 80%,color-mix(in srgb,var(--sig) 32%,transparent),transparent 70%)}
.t-glass .pane{position:absolute;inset:26% 14%;border-radius:12px;background:color-mix(in srgb,var(--raised) 55%,transparent);backdrop-filter:blur(14px);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ink) 14%,transparent),inset 0 1px 0 rgba(255,255,255,.08)}
.t-glow::before{content:"";position:absolute;inset:auto 12% -30% 12%;height:80%;background:radial-gradient(50% 50% at 50% 60%,color-mix(in srgb,var(--sig) 55%,transparent),transparent 70%)}
.t-glow .obj{position:absolute;left:50%;top:44%;transform:translate(-50%,-50%);width:54px;height:54px;border-radius:12px;background:var(--raised);box-shadow:inset 0 0 0 1px var(--strong)}
.t-cross::before{content:"";position:absolute;inset:0;background:var(--strong);opacity:.75;
  -webkit-mask-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='44' height='44'><path d='M17.5 22h9M22 17.5v9' stroke='black' stroke-width='1.2'/></svg>");
  mask-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='44' height='44'><path d='M17.5 22h9M22 17.5v9' stroke='black' stroke-width='1.2'/></svg>");
  -webkit-mask-repeat:repeat;mask-repeat:repeat}
.t-dots{background-image:radial-gradient(circle,var(--mu) 1.1px,transparent 1.3px);background-size:9px 9px}
.t-halftone{background:var(--panel)}
.t-halftone canvas{position:absolute;inset:0;width:100%;height:100%}
.t-relief{background:var(--hover);display:grid;place-items:center}
.t-relief i{width:74px;height:74px;border-radius:50%;background:var(--hover);box-shadow:-7px -7px 15px color-mix(in srgb,white 30%,transparent),8px 8px 18px color-mix(in srgb,black 45%,transparent)}
.t-seal{display:grid;place-items:center;background:var(--panel)}
.t-seal i{width:64px;height:64px;border-radius:50%;background:var(--sig)}
.t-term{background:var(--term-bg);padding:14px 14px 30px;font:12px/1.7 var(--mono);color:var(--term-fg);overflow:hidden}
.t-term .g{color:var(--term-cur)}
.t-ansi{display:grid;grid-template-columns:repeat(8,1fr);grid-template-rows:1fr 1fr;gap:0}

/* app demo */
.demo{display:grid;grid-template-columns:230px 1fr;gap:0;border-radius:var(--r-lg);overflow:hidden;box-shadow:inset 0 0 0 1px var(--line);background:var(--bg);min-height:440px;position:relative}
@media (max-width:820px){.demo{grid-template-columns:1fr}}
.demo .side{background:color-mix(in srgb,var(--panel) 80%,transparent);border-right:1px solid var(--line);padding:16px;display:flex;flex-direction:column;gap:4px}
.demo .bar{display:flex;align-items:center;gap:10px;background:var(--ink);color:var(--bg);border-radius:var(--r-sm);padding:8px 12px;font-weight:600;font-size:13.5px;margin-bottom:8px}
.demo .bar::before{content:"";width:8px;height:8px;background:currentColor}
.demo .row{display:flex;align-items:center;gap:10px;padding:9px 11px;border-radius:9px;border:1px solid transparent;font-size:14.5px;cursor:pointer}
.demo .row:hover{background:color-mix(in srgb,var(--hover) 60%,transparent)}
.demo .row.on{border-color:var(--acc);background:color-mix(in srgb,var(--acc) 12%,transparent);color:var(--head)}
.demo .row i{width:6px;height:6px;background:var(--mu)}
.demo .row.on i{background:var(--acc)}
.demo .main{padding:20px;display:flex;flex-direction:column;gap:16px}
.demo .top{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.demo .seg{display:inline-flex;padding:3px;gap:2px;border-radius:var(--r-md);background:color-mix(in srgb,var(--panel) 80%,transparent);box-shadow:inset 0 0 0 1px var(--line)}
.demo .seg button{border:0;background:transparent;color:var(--mu);font:500 13px var(--ui);padding:6px 12px;border-radius:7px;cursor:pointer}
.demo .seg button[aria-pressed="true"]{background:var(--raised);color:var(--head);box-shadow:inset 0 0 0 1px var(--acc)}
.demo table{width:100%;border-collapse:collapse;font-size:14px;font-variant-numeric:tabular-nums}
.demo th{text-align:left;font:500 11px var(--mono);letter-spacing:.08em;text-transform:uppercase;color:var(--mu);padding:8px 10px;border-bottom:1px solid var(--strong)}
.demo td{padding:10px;border-bottom:1px solid var(--line)}
.demo tr.sel td{background:color-mix(in srgb,var(--acc) 10%,transparent);box-shadow:inset 0 1px 0 var(--acc),inset 0 -1px 0 var(--acc)}
.badge{display:inline-flex;align-items:center;gap:6px;font:500 11.5px var(--mono);padding:3px 8px;border-radius:999px;box-shadow:inset 0 0 0 1px var(--line);color:var(--mu)}
.badge::before{content:"";width:7px;height:7px;background:currentColor}
.badge.ok{color:var(--ok)}.badge.ok::before{border-radius:50%}
.badge.sig{color:var(--sigT);box-shadow:inset 0 0 0 1px var(--sigT)}
.badge.live{color:var(--accT)}.badge.live::before{border-radius:50%;animation:pulse 1.6s ease-in-out infinite}
@keyframes pulse{50%{opacity:.35}}
.btnrow{display:flex;gap:8px;flex-wrap:wrap;margin-top:auto}
.btn{border-radius:var(--r-md);padding:10px 16px;font:600 14px var(--ui);border:1.5px solid var(--strong);background:transparent;color:var(--ink);cursor:pointer}
.btn.primary{border-color:var(--acc);color:var(--accT);background:color-mix(in srgb,var(--acc) 10%,transparent)}
.btn.sig{border-color:var(--sig);background:var(--sig);color:#fff}
.hint{font:500 11px var(--mono);letter-spacing:.1em;color:var(--mu);margin-left:auto}
[data-treatment="clean"] .hint{display:none}
[data-treatment="ornate"] .demo::before,[data-treatment="ornate"] .demo::after{content:"";position:absolute;inset:10px;pointer-events:none;z-index:4;
  background:linear-gradient(var(--strong),var(--strong)) 0 10px/20px 1px no-repeat,linear-gradient(var(--strong),var(--strong)) 10px 0/1px 20px no-repeat,
  linear-gradient(var(--strong),var(--strong)) 100% 10px/20px 1px no-repeat,linear-gradient(var(--strong),var(--strong)) calc(100% - 10px) 0/1px 20px no-repeat}
[data-treatment="ornate"] .demo::after{transform:scaleY(-1)}

/* pipeline */
.pipe{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,180px),1fr));gap:12px}
.step{border:1px solid var(--line);border-radius:var(--r-md);padding:16px;background:color-mix(in srgb,var(--panel) 60%,transparent)}
.step b{display:block;font:600 clamp(26px,2.6vw,38px)/1 var(--disp);color:var(--head)}
.step span{font:500 10.5px var(--mono);letter-spacing:.14em;color:var(--mu);display:block;margin-top:8px}
.step p{margin:10px 0 0;font-size:13.5px;color:var(--mu)}
.matrix{display:flex;flex-wrap:wrap;gap:6px;margin-top:26px}
.matrix span{font:500 11px var(--mono);border:1px solid var(--line);border-radius:999px;padding:6px 12px;color:var(--mu)}
.matrix span b{color:var(--head);font-weight:600}

/* code */
.codes{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:14px}
.code{border:1px solid var(--line);border-radius:var(--r-md);overflow:hidden;background:color-mix(in srgb,var(--panel) 70%,transparent)}
.code .h{display:flex;align-items:center;gap:8px;padding:10px 14px;border-bottom:1px solid var(--line);font:500 11px var(--mono);letter-spacing:.12em;color:var(--mu)}
.code .h button{margin-left:auto;border:1px solid var(--line);border-radius:6px;background:transparent;color:var(--mu);font:500 10.5px var(--mono);padding:4px 9px;cursor:pointer}
.code pre{margin:0;padding:14px;font:12.5px/1.75 var(--mono);color:var(--ink);overflow-x:auto}
.code .k{color:var(--kw)}.code .s{color:var(--str)}.code .c{color:var(--com)}.code .n{color:var(--num)}
"""

GALLERY_CSS = """
.tools{display:flex;flex-wrap:wrap;gap:8px;align-items:center;padding-block:18px;border-bottom:1px solid var(--line)}
.tools select,.tools input,.tools button{background:color-mix(in srgb,var(--panel) 70%,transparent);border:1px solid var(--line);
  border-radius:var(--r-md);padding:9px 12px;font-size:13.5px;color:var(--head)}
.tools input{min-width:220px}
.tools .count{margin-left:auto;font:500 12px var(--mono);color:var(--mu)}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,360px),1fr));gap:16px;padding-block:24px 90px}
.item{border:1px solid var(--line);border-radius:var(--r-lg);overflow:hidden;background:color-mix(in srgb,var(--panel) 55%,transparent);display:flex;flex-direction:column}
.item .frame{position:relative;height:230px;background:var(--bg);border-bottom:1px solid var(--line);overflow:hidden}
.item .frame > .pv{position:absolute;inset:0;width:100%;height:100%;overflow:hidden}
.item .meta{display:flex;align-items:center;gap:8px;padding:11px 13px}
.item .nm{font-weight:600;font-size:14px;color:var(--head);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.item .tag{font:500 10px var(--mono);letter-spacing:.08em;color:var(--mu);border:1px solid var(--line);border-radius:5px;padding:2px 6px;white-space:nowrap}
.more{grid-column:1/-1;border:1px dashed var(--line);border-radius:var(--r-md);background:transparent;color:var(--mu);padding:14px;cursor:pointer}
"""

PALETTES_CSS = """
.plist{display:flex;flex-direction:column;gap:18px;padding-block:10px 80px}
.prow{display:grid;grid-template-columns:minmax(0,260px) minmax(0,1fr);gap:22px;border:1px solid var(--line);border-radius:var(--r-lg);overflow:hidden;background:var(--pbg)}
@media (max-width:860px){.prow{grid-template-columns:1fr}}
.pcardbig{padding:20px;display:flex;flex-direction:column;gap:10px;background:var(--pbg);color:var(--pink)}
.pcardbig .code{font:500 11px var(--mono);letter-spacing:.18em;color:var(--pacc)}
.pcardbig h3{font-family:var(--disp);font-size:30px;color:var(--phead);font-weight:600}
.pcardbig .meta{font:500 10px var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--pmu)}
.pcardbig .discs{display:flex;margin-top:auto}
.pcardbig .discs i{width:38px;height:38px;border-radius:50%;margin-left:-11px;box-shadow:0 0 0 2px var(--pbg)}
.pcardbig .discs i:first-child{margin-left:0}
.pbody{padding:20px;display:flex;flex-direction:column;gap:14px;background:var(--ppanel)}
.swatches{display:flex;flex-wrap:wrap;gap:16px 10px;padding-bottom:16px}
.swatches b{position:relative;width:clamp(56px,7vw,82px);height:40px;border-radius:5px;box-shadow:inset 0 0 0 1px rgba(128,128,128,.25)}
.swatches b::after{content:attr(data-l);position:absolute;left:0;top:calc(100% + 4px);font:500 9px var(--mono);letter-spacing:.06em;color:var(--pmu);white-space:nowrap}
.swatches b::before{content:attr(data-h);position:absolute;left:0;top:calc(100% + 15px);font:500 8px var(--mono);color:var(--pmu);opacity:.7;white-space:nowrap}
.pdemo{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:22px}
@media (max-width:640px){.pdemo{grid-template-columns:1fr}}
.pdemo .card{border-radius:var(--r-md);padding:12px;background:var(--praised);box-shadow:inset 0 0 0 1px var(--pline)}
.pdemo .bar{display:flex;align-items:center;gap:8px;background:var(--pink);color:var(--pbg);border-radius:5px;padding:6px 10px;font:600 12px var(--ui);margin-bottom:6px}
.pdemo .bar::before{content:"";width:6px;height:6px;background:currentColor}
.pdemo .r{display:flex;align-items:center;gap:8px;padding:7px 9px;border-radius:7px;font-size:13px;color:var(--pink);border:1px solid transparent}
.pdemo .r.on{border-color:var(--pacc);background:color-mix(in srgb,var(--pacc) 12%,transparent)}
.pdemo .r b{margin-left:auto;font:500 11px var(--mono);color:var(--pmu)}
.pdemo .r b.sig{color:var(--psigT)}
.pterm{font:11.5px/1.7 var(--mono);border-radius:var(--r-md);padding:12px;overflow:hidden}
.pterm .row{display:flex;gap:3px;margin-top:6px}
.pterm .row i{flex:1;height:12px;border-radius:2px}
.plinks{display:flex;gap:8px;flex-wrap:wrap;margin-top:4px}
.plinks a{font:500 10.5px var(--mono);letter-spacing:.1em;border:1px solid var(--pline);border-radius:999px;padding:6px 12px;text-decoration:none;color:var(--pmu)}
"""


def index_page(pals, comps, st) -> str:
    cards = "".join(
        f'<article class="pcard" data-i="{i}" style="background:{p["bg"]};color:{p["ink"]}">'
        f'<span class="c" style="color:{p["accT"]}">{p["code"]}</span>'
        f'<div class="d">' + "".join(f'<i style="background:{c};box-shadow:0 0 0 2px {p["bg"]}"></i>'
                                     for c in (p["panel"], p["hover"], p["ink"], p["acc"], p["sig"])) + "</div>"
        f'<b style="color:{p["head"]}">{p["name"]}</b><small style="color:{p["mu"]}">{p["temp"]} · {p["mat"]}</small></article>'
        for i, p in enumerate(pals))

    tiles = """
      <div class="tile grain t-glass"><span class="pane"></span><span class="cap"><b>glass.frost</b> · over a lit ground</span></div>
      <div class="tile grain t-glow"><span class="obj"></span><span class="cap"><b>glow.ember</b> · one light per view</span></div>
      <div class="tile t-cross"><span class="cap"><b>pattern.cross</b> · ornate ground</span></div>
      <div class="tile t-dots"><span class="cap"><b>pattern.dots</b> · dot matrix</span></div>
      <div class="tile t-halftone"><canvas data-halftone></canvas><span class="cap"><b>halftone</b> · print on screen</span></div>
      <div class="tile t-relief"><i></i><span class="cap"><b>relief.soft</b> · light palettes</span></div>
      <div class="tile t-seal"><i></i><span class="cap"><b>seal</b> · the one red mark</span></div>
      <div class="tile t-term"><div><span class="g">❯</span> yoshiki build</div><div>✓ tokens 0.12s</div><div>✓ 16 palettes · 208 themes</div><div>✓ contrast 1 248/1 248</div><div><span class="g">❯</span> <span style="background:var(--term-cur);color:var(--term-bg)">&nbsp;</span></div><span class="cap"><b>terminal island</b> · text zone</span></div>
    """

    steps = f"""
      <div class="step"><b>{st['references']}</b><span>REFERENCES</span><p>Photographs and screens the owner collected, taken apart one by one.</p></div>
      <div class="step"><b>{st['catalogued']}</b><span>COMPONENTS FOUND</span><p>Every distinguishable part named, described and traced back to its source.</p></div>
      <div class="step"><b>11</b><span>FILTERS</span><p>Substance, zone, register, distinctness, palette proof, scale, accessibility, craft.</p></div>
      <div class="step"><b>{st['components']}</b><span>REBUILT</span><p>Each one written again as a self-contained piece that works in every palette.</p></div>
    """
    matrix = "".join(f"<span>{k} <b>{v}</b></span>" for k, v in sorted(st["matrix"].items(), key=lambda x: -x[1]))

    code_css = ('<span class="c">/* one line; every role follows the palette */</span>\n'
                '<span class="k">@import</span> <span class="s">"yoshiki-design/css"</span>;\n\n'
                '.card { background: <span class="k">var</span>(--r-bg-surface); color: <span class="k">var</span>(--r-text-primary); }\n'
                '.card--active { border: <span class="n">1.5px</span> solid <span class="k">var</span>(--r-accent-edge); }')
    code_slint = ('<span class="c">// desktop, same tokens</span>\n'
                  '<span class="k">import</span> { Yoshiki } <span class="k">from</span> <span class="s">"yoshiki.slint"</span>;\n\n'
                  'Rectangle { background: Yoshiki.bg-app;\n'
                  '  Text { color: Yoshiki.text-primary; } }')
    code_add = ('<span class="c"># pull one piece into your project</span>\n'
                'npx shadcn add zinzaki/yoshiki/<span class="s">glass-menu</span>\n\n'
                '<span class="c"># or take the whole palette</span>\n'
                'curl -O canon/palettes/<span class="s">night-beige</span>/night-beige.css')
    code_agent = ('<span class="c"># what an agent reads first</span>\n'
                  'AGENTS.md          <span class="c">→ zone, roles, the look</span>\n'
                  'canon/registry.json <span class="c">→ every piece with an id</span>\n'
                  'canon/language/zones.md')

    body = f"""
<header class="hero grain gut"><div class="in">
  <div class="kicker">A design foundation · {st['palettes']} palettes · {st['components']} components</div>
  <h1>The material, physics and <em>resources</em> of a world.</h1>
  <div class="row">
    <div>
      <p class="lede">yoshiki is a library you build interfaces out of: palettes that fill one role contract,
      materials with real fallbacks, objects and patterns rebuilt from hundreds of references, and a catalogue
      that says where every piece came from. <b>Colour is a swappable layer</b> — switch it in the corner and the
      whole site follows.</p>
      <div class="cta">
        <a class="primary" href="gallery.html">Browse {st['components']} components</a>
        <a class="ghost" href="palettes.html">See the palette family</a>
        <a class="ghost" href="https://github.com/zinzaki/yoshiki">Read the repo</a>
      </div>
    </div>
    <div class="stats">
      <div><b>{st['palettes']}</b><span>PALETTES</span></div>
      <div><b>{st['components']}</b><span>REBUILT PIECES</span></div>
      <div><b>{st['registers']}</b><span>STYLE REGISTERS</span></div>
      <div><b>{st['references']}</b><span>REFERENCES MINED</span></div>
    </div>
  </div>
</div></header>

<section class="gut" id="palettes"><div class="in">
  <div class="head">
    <div><div class="kicker">The family</div><h2>Sixteen worlds, one language</h2></div>
    <p class="lede">Every palette fills the same roles, so any of them dresses any interface. Drag the ring or
    click a card; the page takes the palette you stop on.</p>
  </div>
  <div class="ringwrap" id="ringwrap"><div class="ring" id="ring">{cards}</div></div>
  <div class="readout">
    <div class="nm"><span data-pal-name>Night beige</span><span data-pal-code>BE-N</span></div>
    <div class="roles" id="roles"></div>
    <div class="mini"><a href="palettes.html">ALL PALETTES</a><a href="#use">GET THE TOKENS</a></div>
  </div>
</div></section>

<section class="gut" id="materials"><div class="in">
  <div class="head">
    <div><div class="kicker">Materials and physics</div><h2>What surfaces are made of</h2></div>
    <p class="lede">Glass over a single warm light, grain, cross grids, dot matrices, print halftone, soft relief,
    one red seal — each a named material with a solid fallback for reduced transparency, and each drawn from roles,
    never from fixed colour.</p>
  </div>
  <div class="tiles">{tiles}</div>
</div></section>

<section class="gut" id="objects"><div class="in">
  <div class="head">
    <div><div class="kicker">Objects at work</div><h2>A real screen, not a swatch</h2></div>
    <p class="lede">The same objects the library ships: title bars, rows with an outlined selection, tables,
    status that never relies on colour alone, dialogs and buttons. Switch the treatment to see the ornate layer
    — corner ticks and control hints — appear.</p>
  </div>
  <div class="demo grain" id="demo" data-treatment="clean">
    <aside class="side">
      <div class="bar">Workspace</div>
      <div class="row on"><i></i>Deploys</div>
      <div class="row"><i></i>Projects</div>
      <div class="row"><i></i>Logs</div>
      <div class="row"><i></i>Settings</div>
      <div class="row" style="margin-top:auto"><i></i>Account</div>
    </aside>
    <div class="main">
      <div class="top">
        <div class="seg" id="treat"><button type="button" data-t="clean" aria-pressed="true">clean</button><button type="button" data-t="ornate" aria-pressed="false">ornate</button></div>
        <span class="badge live">building</span>
        <span class="hint">○ SELECT&nbsp;&nbsp;× BACK</span>
      </div>
      <table>
        <tr><th>Deploy</th><th>Status</th><th style="text-align:right">Duration</th></tr>
        <tr><td>studio-web 412</td><td><span class="badge ok">ready</span></td><td style="text-align:right">0:42</td></tr>
        <tr class="sel"><td>api 118</td><td><span class="badge live">building</span></td><td style="text-align:right">1:07</td></tr>
        <tr><td>migrate 9</td><td><span class="badge sig">failed</span></td><td style="text-align:right">0:03</td></tr>
        <tr><td>docs 77</td><td><span class="badge">queued</span></td><td style="text-align:right">—</td></tr>
      </table>
      <div class="btnrow"><button class="btn primary">Deploy</button><button class="btn">Logs</button><button class="btn sig">Delete</button></div>
    </div>
  </div>
</div></section>

<section class="gut" id="workshop"><div class="in">
  <div class="head">
    <div><div class="kicker">The workshop</div><h2>Where the pieces come from</h2></div>
    <p class="lede">References are taken apart component by component, each part is named and traced, and only what
    survives eleven filters is rebuilt. Nothing is copied: every piece is written again from its notes, in yoshiki's
    own roles.</p>
  </div>
  <div class="pipe">{steps}</div>
  <div class="matrix">{matrix}</div>
</div></section>

<section class="gut" id="use"><div class="in">
  <div class="head">
    <div><div class="kicker">Use it</div><h2>One source, every surface</h2></div>
    <p class="lede">The same tokens drive the web kit, Slint desktop apps, terminal themes, Figma variables and
    Tailwind. Pull a single piece or the whole palette.</p>
  </div>
  <div class="codes">
    <div class="code"><div class="h">WEB · CSS ROLES <button type="button" data-copy="@import &quot;yoshiki-design/css&quot;;">COPY</button></div><pre>{code_css}</pre></div>
    <div class="code"><div class="h">DESKTOP · SLINT <button type="button" data-copy="import {{ Yoshiki }} from &quot;yoshiki.slint&quot;;">COPY</button></div><pre>{code_slint}</pre></div>
    <div class="code"><div class="h">ONE PIECE <button type="button" data-copy="npx shadcn add zinzaki/yoshiki/glass-menu">COPY</button></div><pre>{code_add}</pre></div>
    <div class="code"><div class="h">FOR AGENTS <button type="button" data-copy="AGENTS.md">COPY</button></div><pre>{code_agent}</pre></div>
  </div>
</div></section>
"""

    script = """
<script>
(function(){
  var ring=document.getElementById('ring'), wrap=document.getElementById('ringwrap'), cards=[].slice.call(ring.children);
  var n=cards.length, R=360, idx=0, angle=0, drag=null;
  function depth(){ cards.forEach(function(c,i){ var d=((i/n*360+angle)%360+540)%360-180, a=Math.abs(d);
    c.classList.toggle('far',a>60); c.style.zIndex=String(100-Math.round(a)); }); }
  function place(){ cards.forEach(function(c,i){ c.style.transform='rotateY('+(i/n*360)+'deg) translateZ('+R+'px)'; }); }
  function go(i){ idx=((i%n)+n)%n; angle=-idx/n*360; ring.style.transform='translateZ(-'+R+'px) rotateY('+angle+'deg)';
    window.__applyPalette(window.__pals[idx]); depth(); }
  place(); go(0);
  wrap.addEventListener('pointerdown',function(e){ drag={x:e.clientX,a:angle}; ring.style.transition='none'; wrap.setPointerCapture(e.pointerId); });
  wrap.addEventListener('pointermove',function(e){ if(!drag) return; angle=drag.a+(e.clientX-drag.x)*.3;
    ring.style.transform='translateZ(-'+R+'px) rotateY('+angle+'deg)'; depth(); });
  function rel(){ if(!drag) return; drag=null; ring.style.transition=''; go(Math.round(-angle/360*n)); }
  wrap.addEventListener('pointerup',rel); wrap.addEventListener('pointercancel',rel);
  ring.addEventListener('click',function(e){ var c=e.target.closest('.pcard'); if(c) go(+c.dataset.i); });
  addEventListener('keydown',function(e){ if(e.key==='ArrowRight'){ go(idx+1); } if(e.key==='ArrowLeft'){ go(idx-1); } });
  var auto=setInterval(function(){ if(!drag && !document.hidden) go(idx+1); },5200);
  wrap.addEventListener('pointerdown',function(){ clearInterval(auto); });

  function roles(p){ var el=document.getElementById('roles');
    el.innerHTML=[['ground',p.bg],['panel',p.panel],['raised',p.raised],['hover',p.hover],['line',p.line],['text',p.ink],['accent',p.acc],['signal',p.sig]]
      .map(function(r){ return '<b data-l="'+r[0]+'" style="background:'+r[1]+'"></b>'; }).join(''); }
  addEventListener('palette',function(e){ roles(e.detail); paint(); });
  roles(window.__pal);

  var seg=document.getElementById('treat');
  seg.addEventListener('click',function(e){ var b=e.target.closest('button'); if(!b) return;
    document.getElementById('demo').dataset.treatment=b.dataset.t;
    seg.querySelectorAll('button').forEach(function(x){ x.setAttribute('aria-pressed',String(x===b)); }); });

  function paint(){ document.querySelectorAll('canvas[data-halftone]').forEach(function(c){
    var r=c.getBoundingClientRect(), d=Math.min(2,devicePixelRatio||1); c.width=r.width*d; c.height=r.height*d;
    var x=c.getContext('2d'), s=Math.max(1,Math.round(7*d)), p=window.__pal||{};
    x.clearRect(0,0,c.width,c.height);
    x.fillStyle=p.ink||getComputedStyle(document.documentElement).getPropertyValue('--ink').trim();
    for(var y=s/2;y<c.height;y+=s) for(var i=s/2;i<c.width;i+=s){
      var dx=(i-c.width*.5)/(c.width*.5), dy=(y-c.height*.5)/(c.height*.5), v=Math.max(0,1-Math.hypot(dx,dy));
      x.beginPath(); x.arc(i,y,v*s*.48,0,6.283); x.fill(); } }); }
  addEventListener('resize',paint); paint();

  document.addEventListener('click',function(e){ var b=e.target.closest('[data-copy]'); if(!b) return;
    var t=b.dataset.copy; (navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject())
      .then(function(){ var o=b.textContent; b.textContent='COPIED'; setTimeout(function(){ b.textContent=o; },1200); })
      .catch(function(){}); });
})();
</script>
"""
    return S.shell("yoshiki — a design foundation", "index.html", body, INDEX_CSS, script, pals)


def palettes_page(pals, comps, st) -> str:
    rows = []
    for p in pals:
        sw = "".join(f'<b data-l="{n}" data-h="{c}" style="background:{c}"></b>' for n, c in
                     [("ground", p["bg"]), ("panel", p["panel"]), ("raised", p["raised"]), ("hover", p["hover"]),
                      ("line", p["line"]), ("text", p["ink"]), ("muted", p["mu"]), ("accent", p["acc"]), ("signal", p["sig"])])
        ansi = "".join(f'<i style="background:{c}"></i>' for c in p["term"]["ansi"])
        br = "".join(f'<i style="background:{c}"></i>' for c in p["term"]["br"])
        discs = "".join(f'<i style="background:{c}"></i>' for c in (p["panel"], p["hover"], p["ink"], p["acc"], p["sig"]))
        rows.append(f"""
<article class="prow" id="{p['slug']}" style="--pbg:{p['bg']};--ppanel:{p['panel']};--praised:{p['raised']};--pline:{p['line']};--pink:{p['ink']};--phead:{p['head']};--pmu:{p['mu']};--pacc:{p['acc']};--paccT:{p['accT']};--psig:{p['sig']};--psigT:{p['sigT']}">
  <div class="pcardbig">
    <span class="code">{p['code']}</span>
    <h3>{p['name']}</h3>
    <span class="meta">{p['temp']} · {p['mat']} · {p['accent']}</span>
    <div class="discs">{discs}</div>
  </div>
  <div class="pbody">
    <div class="swatches">{sw}</div>
    <div class="pdemo">
      <div class="card">
        <div class="bar">Settings</div>
        <div class="r">Appearance<b>4</b></div>
        <div class="r on">Displays<b>on</b></div>
        <div class="r">Network<b class="sig">✗ offline</b></div>
      </div>
      <div class="pterm" style="background:{p['term']['bg']};color:{p['term']['fg']}">
        <div><span style="color:{p['acc']}">❯</span> yoshiki build</div>
        <div style="color:{p['mu']}">✓ contrast 78/78</div>
        <div class="row">{ansi}</div>
        <div class="row">{br}</div>
      </div>
    </div>
    <div class="plinks">
      <a href="../canon/palettes/{p['slug']}/{p['slug']}.css">CSS</a>
      <a href="../canon/palettes/{p['slug']}/{p['slug']}.tokens.json">DTCG</a>
      <a href="../canon/palettes/{p['slug']}/card.svg">CARD</a>
      <a href="https://github.com/zinzaki/yoshiki-themes/tree/main/themes">THEMES</a>
    </div>
  </div>
</article>""")
    body = f"""
<section class="gut"><div class="in">
  <div class="head">
    <div><div class="kicker">{len(pals)} palettes · {len({p['family'] for p in pals})} families</div><h2>The palette family</h2></div>
    <p class="lede">Each palette fills the same role contract and passes the same contrast floors — text at 4.5:1 on
    every surface, edges at 3:1 — so swapping one for another never breaks a screen. The terminal stays a dark island
    in all of them.</p>
  </div>
  <div class="plist">{''.join(rows)}</div>
</div></section>
"""
    return S.shell("Palettes — yoshiki", "palettes.html", body, PALETTES_CSS, "", pals)


def gallery_page(pals, comps, st) -> str:
    data = [{"id": c["id"], "name": c["name"], "kind": c["kind"], "register": c["register"], "html": c["html"]} for c in comps]
    body = f"""
<section class="gut"><div class="in">
  <div class="head">
    <div><div class="kicker">{len(comps)} pieces · {st['registers']} registers</div><h2>Components, rebuilt</h2></div>
    <p class="lede">Every piece here was written again from its notes as a self-contained fragment that takes its
    colour from roles — so the whole gallery changes palette with the dots in the corner. Filter by register or kind;
    the register is the stylistic world a piece belongs to, and a design holds one of them at a time.</p>
  </div>
  <div class="tools">
    <input id="q" placeholder="search: toggle, halftone, menu…" autocomplete="off">
    <select id="fReg"></select>
    <select id="fKind"></select>
    <button type="button" id="reset">RESET</button>
    <span class="count" id="count"></span>
  </div>
  <div class="grid" id="grid"></div>
</div></section>
<script>
(function(){{
var ITEMS={json.dumps(data, ensure_ascii=False)}, shown=0, PAGE=48, filtered=[];
function uniq(k){{ var m={{}}; ITEMS.forEach(function(i){{ var v=i[k]||''; if(v) m[v]=(m[v]||0)+1; }});
  return Object.keys(m).sort(function(a,b){{ return m[b]-m[a]; }}).map(function(x){{ return [x,m[x]]; }}); }}
function fill(el,label,list){{ el.innerHTML='<option value="">'+label+'</option>'+list.map(function(p){{ return '<option value="'+p[0]+'">'+p[0]+' ('+p[1]+')</option>'; }}).join(''); }}
fill(document.getElementById('fReg'),'register: any',uniq('register'));
fill(document.getElementById('fKind'),'kind: any',uniq('kind'));
function passes(it){{ var q=document.getElementById('q').value.trim().toLowerCase(),
  r=document.getElementById('fReg').value, k=document.getElementById('fKind').value;
  if(r&&it.register!==r) return false; if(k&&it.kind!==k) return false;
  if(q&&[it.name,it.kind,it.register,it.id].join(' ').toLowerCase().indexOf(q)<0) return false; return true; }}
function render(reset){{ if(reset){{ shown=0; filtered=ITEMS.filter(passes); }}
  var slice=filtered.slice(0,shown+PAGE); shown=slice.length;
  document.getElementById('grid').innerHTML=slice.map(function(it){{
    return '<article class="item"><div class="frame">'+it.html+'</div>'+
      '<div class="meta"><span class="nm">'+it.name+'</span><span class="tag">'+it.kind+'</span><span class="tag">'+it.register+'</span></div></article>'; }}).join('')
    +(shown<filtered.length?'<button type="button" class="more" id="more">show '+Math.min(PAGE,filtered.length-shown)+' more of '+(filtered.length-shown)+'</button>':'');
  document.getElementById('count').textContent=filtered.length+' of '+ITEMS.length; }}
['q','fReg','fKind'].forEach(function(id){{ document.getElementById(id).addEventListener('input',function(){{ render(true); }}); }});
document.getElementById('reset').addEventListener('click',function(){{ ['q','fReg','fKind'].forEach(function(id){{ document.getElementById(id).value=''; }}); render(true); }});
document.addEventListener('click',function(e){{ if(e.target.id==='more') render(false); }});
render(true);
}})();
</script>
"""
    return S.shell("Components — yoshiki", "gallery.html", body, GALLERY_CSS, "", pals)


def main():
    pals, comps = S.palettes(), S.components()
    st = S.stats(comps, pals)
    S.w(S.DOCS / "index.html", index_page(pals, comps, st))
    S.w(S.DOCS / "palettes.html", palettes_page(pals, comps, st))
    S.w(S.DOCS / "gallery.html", gallery_page(pals, comps, st))
    if S.CHECK:
        for f in S.drift:
            print(f"drift: {f}")
        if S.drift:
            sys.exit("site out of sync — run: python3 tools/site_pages.py")
        print("clean — the site matches the library.")
        return
    print(f"site built — {st['palettes']} palettes, {st['components']} components")


if __name__ == "__main__":
    main()

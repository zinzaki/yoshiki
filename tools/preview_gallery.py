"""Assemble every rebuilt preview into one page the owner can flip through.

Reads `library/previews/<register>/<id>.html` (see workshop/PREVIEWS.md) plus the catalogue
metadata, and writes a standalone page: big preview tiles, three-state voting, filters,
keyboard 1/2/3, and a db hook so the votes come back to Claude.

    python3 tools/preview_gallery.py [out.html]
"""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PREVIEWS = ROOT / "library" / "previews"
CATALOGUE = ROOT / "workshop" / "refs" / "extract" / "catalogue.json"
DEFAULT_OUT = Path("/tmp/claude-1000/-home-zinzaki-Dev-yoshiki/34d9d2df-7f13-4a8d-9e5d-fa4846583194/scratchpad/previews.html")

PAGE = """<title>Превью компонентов yoshiki</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600&family=Noto+Serif+Display:wght@400;600;700&display=swap">
<style>
:root{
  --ui:'Geist',system-ui,sans-serif; --mono:'Geist Mono',ui-monospace,monospace; --disp:'Noto Serif Display',Georgia,serif;
  --bg:#161410; --panel:#1D1B16; --raised:#24211C; --hover:#322E27; --line:#3A362E; --strong:#4E493F;
  --ink:#D6D2BD; --head:#EAE6D2; --mu:#9A9584; --acc:#D8AF52; --accT:#D8AF52; --sig:#E3001B; --sigT:#FF6155;
  --page:#100F0C; --card:#191713; --edge:#2A2721;
  color-scheme:dark;
}
*{box-sizing:border-box}
body{margin:0;background:var(--page);color:var(--ink);font:15px/1.5 var(--ui);-webkit-font-smoothing:antialiased}
button,select,input{font:inherit;color:inherit}
:focus-visible{outline:2px solid var(--acc);outline-offset:2px}
.gut{padding-inline:clamp(14px,3vw,44px)}
.top{position:sticky;top:0;z-index:40;background:color-mix(in srgb,var(--page) 88%,transparent);backdrop-filter:blur(14px);border-bottom:1px solid var(--edge)}
.top .in{display:flex;flex-wrap:wrap;gap:8px 14px;align-items:center;padding-block:10px}
.brand{font-weight:600;color:var(--head);display:flex;gap:9px;align-items:center}
.brand i{width:10px;height:10px;background:var(--acc)}
.stat{font:500 12px var(--mono);color:var(--mu)}
.stat b{color:var(--head)}
.spacer{flex:1}
.f{display:flex;gap:6px;flex-wrap:wrap}
.f select,.f button{background:var(--card);border:1px solid var(--edge);border-radius:8px;padding:7px 10px;font-size:13px;color:var(--head);cursor:pointer}
.pals{display:flex;gap:5px;flex-wrap:wrap;padding-bottom:10px}
.pals button{width:24px;height:24px;border-radius:50%;border:0;cursor:pointer;box-shadow:inset 0 0 0 1px rgba(255,255,255,.16);position:relative}
.pals button[aria-pressed="true"]::after{content:"";position:absolute;inset:-4px;border-radius:50%;box-shadow:0 0 0 1px var(--acc)}
.hero{padding-block:24px 10px}
.hero h1{margin:0;font:700 clamp(28px,3.6vw,46px)/1 var(--disp);letter-spacing:-.02em;color:var(--head)}
.hero p{margin:10px 0 0;color:var(--mu);max-width:72ch}
.hero p b{color:var(--ink);font-weight:500}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,380px),1fr));gap:16px;padding-block:20px 90px}
.tile{border:1px solid var(--edge);border-radius:14px;background:var(--card);overflow:hidden;display:flex;flex-direction:column}
.tile[data-v="2"]{border-color:var(--acc);box-shadow:0 0 0 1px var(--acc)}
.tile[data-v="1"]{border-color:#6C8F6F}
.tile[data-v="-1"]{opacity:.38}
.frame{position:relative;height:230px;background:var(--bg);overflow:hidden;border-bottom:1px solid var(--edge)}
.frame > .pv{position:absolute;inset:0;width:100%;height:100%;overflow:hidden}
.bar{display:flex;align-items:center;gap:8px;padding:10px 12px}
.bar .nm{font:600 14px var(--ui);color:var(--head);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.bar .reg{font:500 10px var(--mono);letter-spacing:.06em;color:var(--mu);border:1px solid var(--edge);border-radius:5px;padding:2px 6px;white-space:nowrap}
.acts{display:flex;gap:6px;padding:0 12px 12px}
.acts button{flex:1;border:1px solid var(--edge);border-radius:9px;padding:9px 6px;font:500 13px var(--ui);background:transparent;color:var(--mu);cursor:pointer}
.acts button[aria-pressed="true"][data-v="-1"]{background:var(--hover);color:var(--head)}
.acts button[aria-pressed="true"][data-v="1"]{background:#8FBF93;color:#101a11;border-color:#8FBF93}
.acts button[aria-pressed="true"][data-v="2"]{background:var(--acc);color:#191308;border-color:var(--acc)}
.more{grid-column:1/-1;padding:14px;border:1px dashed var(--edge);border-radius:12px;background:transparent;color:var(--mu);cursor:pointer}
.sync{font:12px var(--mono);color:var(--mu)}
.hint{font:500 11px var(--mono);color:var(--mu);letter-spacing:.08em}
</style>

<header class="top gut"><div class="in">
  <span class="brand"><i></i>yoshiki · превью компонентов</span>
  <span class="stat"><b id="sDone">0</b> / <span id="sAll">0</span></span>
  <span class="spacer"></span>
  <div class="f">
    <select id="fReg"></select>
    <select id="fKind"></select>
    <select id="fState"><option value="">все</option><option value="new">неразмеченные</option><option value="2">в канон</option><option value="1">оставить</option><option value="-1">мимо</option></select>
    <button type="button" id="bulkMiss">всё видимое → мимо</button>
  </div>
  <span class="sync" id="sync">только в этом браузере</span>
</div>
<div class="in pals" id="pals" aria-label="Палитра всех превью"></div></header>

<section class="hero gut">
  <h1>Листай и тыкай</h1>
  <p>Каждая плитка — <b>компонент, перерисованный заново</b>, а не картинка из папки. Кружки сверху меняют палитру для всех превью сразу: ни один компонент не привязан к бежево-золотой схеме. Три кнопки: <b>мимо</b>, <b>оставить</b>, <b>в канон</b>. <span class="hint">КЛАВИШИ 1 2 3 ОТМЕЧАЮТ ПЛИТКУ ПОД КУРСОРОМ</span></p>
</section>

<main class="grid gut" id="grid"></main>

<script>
(function(){
'use strict';
var ITEMS=__DATA__, PALS=__PALS__, state={}, db=null, timers={}, shown=0, PAGE=60, filtered=[];
try{ state=JSON.parse(localStorage.getItem('yoshiki-previews')||'{}')||{}; }catch(e){}
document.getElementById('sAll').textContent=ITEMS.length;
function uniq(key){ var m={}; ITEMS.forEach(function(i){ var v=i[key]||''; if(v) m[v]=(m[v]||0)+1; }); return Object.keys(m).sort(function(a,b){ return m[b]-m[a]; }).map(function(k){ return [k,m[k]]; }); }
function fill(sel,label,list){ sel.innerHTML='<option value="">'+label+'</option>'+list.map(function(p){ return '<option value="'+p[0]+'">'+p[0]+' ('+p[1]+')</option>'; }).join(''); }
fill(document.getElementById('fReg'),'регистр: любой',uniq('register'));
fill(document.getElementById('fKind'),'вид: любой',uniq('kind'));
function passes(it){ var r=document.getElementById('fReg').value,k=document.getElementById('fKind').value,st=document.getElementById('fState').value,v=(state[it.id]||{}).rating;
  if(r&&it.register!==r) return false; if(k&&it.kind!==k) return false;
  if(st==='new'&&v!=null) return false; if(st&&st!=='new'&&String(v)!==st) return false; return true; }
function tile(it){ var s=state[it.id]||{};
  return '<article class="tile" id="t-'+it.id+'" data-id="'+it.id+'"'+(s.rating!=null?' data-v="'+s.rating+'"':'')+'>'+
    '<div class="frame">'+it.html+'</div>'+
    '<div class="bar"><span class="nm">'+it.name+'</span><span class="reg">'+it.register+'</span></div>'+
    '<div class="acts"><button type="button" data-v="-1" aria-pressed="'+(s.rating===-1)+'">мимо</button>'+
    '<button type="button" data-v="1" aria-pressed="'+(s.rating===1)+'">оставить</button>'+
    '<button type="button" data-v="2" aria-pressed="'+(s.rating===2)+'">в канон</button></div></article>'; }
function render(reset){ if(reset){ shown=0; filtered=ITEMS.filter(passes); }
  var slice=filtered.slice(0,shown+PAGE); shown=slice.length;
  document.getElementById('grid').innerHTML=slice.map(tile).join('')+(shown<filtered.length?'<button type="button" class="more" id="more">ещё '+(filtered.length-shown)+'</button>':'');
  var done=0; ITEMS.forEach(function(i){ if((state[i.id]||{}).rating!=null) done++; });
  document.getElementById('sDone').textContent=done; }
function mark(id,v){ var s=state[id]=state[id]||{}; s.rating=s.rating===v?null:v; save(id);
  var t=document.getElementById('t-'+id); if(!t) return;
  if(s.rating==null) t.removeAttribute('data-v'); else t.dataset.v=s.rating;
  t.querySelectorAll('.acts button').forEach(function(b){ b.setAttribute('aria-pressed',String(+b.dataset.v===s.rating)); });
  var done=0; ITEMS.forEach(function(i){ if((state[i.id]||{}).rating!=null) done++; }); document.getElementById('sDone').textContent=done; }
function save(id){ try{ localStorage.setItem('yoshiki-previews',JSON.stringify(state)); }catch(e){}
  if(!db) return; clearTimeout(timers[id]); timers[id]=setTimeout(function(){ db.doc('previews/'+id).set(Object.assign({},state[id]||{},{at:Date.now()})).catch(function(){}); },250); }
document.addEventListener('click',function(e){ var b=e.target.closest('.acts button');
  if(b){ mark(b.closest('.tile').dataset.id,+b.dataset.v); return; }
  if(e.target.id==='more') render(false); });
['fReg','fKind','fState'].forEach(function(id){ document.getElementById(id).addEventListener('change',function(){ render(true); }); });
document.getElementById('bulkMiss').addEventListener('click',function(){ if(!confirm('Отметить «мимо» '+filtered.length+' штук?')) return;
  filtered.forEach(function(it){ (state[it.id]=state[it.id]||{}).rating=-1; save(it.id); }); render(true); });
var hover=null;
document.addEventListener('mouseover',function(e){ var t=e.target.closest('.tile'); if(t) hover=t.dataset.id; });
document.addEventListener('keydown',function(e){ if(!hover||e.metaKey||e.ctrlKey) return;
  if(e.key==='1') mark(hover,-1); else if(e.key==='2') mark(hover,1); else if(e.key==='3') mark(hover,2); });
document.getElementById('pals').innerHTML=PALS.map(function(p){ return '<button type="button" data-s="'+p.slug+'" title="'+p.name+'" aria-pressed="false" style="background:linear-gradient(135deg,'+p.bg+' 48%,'+p.acc+' 48%)"></button>'; }).join('');
function palette(p){ var r=document.documentElement.style;
  ['bg','panel','raised','hover','line','strong','ink','head','mu','acc','accT','sig','sigT'].forEach(function(k){ r.setProperty('--'+k,p[k]); });
  r.setProperty('--page', p.mode==='dark' ? p.bg : p.hover); r.setProperty('--card', p.panel); r.setProperty('--edge', p.line);
  document.querySelectorAll('#pals button').forEach(function(b){ b.setAttribute('aria-pressed', String(b.dataset.s===p.slug)); });
  try{ localStorage.setItem('yoshiki-preview-palette', p.slug); }catch(e){} }
document.getElementById('pals').addEventListener('click',function(e){ var b=e.target.closest('button'); if(b) palette(PALS.filter(function(p){ return p.slug===b.dataset.s; })[0]); });
var saved=null; try{ saved=localStorage.getItem('yoshiki-preview-palette'); }catch(e){}
palette(PALS.filter(function(p){ return p.slug===saved; })[0] || PALS[0]);

render(true);
if(window.claude&&typeof window.claude.use==='function'){ window.claude.use('db').then(function(d){ if(!d) return; db=d;
  document.getElementById('sync').textContent='сохраняется для Claude';
  d.collection('previews').onSnapshot(function(snap){ snap.docs.forEach(function(doc){ var x=doc.data(); if(!x) return; delete x.at; state[doc.id]=Object.assign({},state[doc.id]||{},x); }); render(true); }); }).catch(function(){}); }
})();
</script>
"""


def collect() -> list[dict]:
    meta = {}
    cat = json.loads(CATALOGUE.read_text())
    for i, it in enumerate(cat["items"]):
        import re
        slug = re.sub(r"[^a-z0-9]+", "-", (it.get("name") or "").lower()).strip("-")[:40]
        meta[f"{it.get('ref','ref').replace('yk:ref/', 'r')}-{slug}-{i}"] = it
    out = []
    for f in sorted(PREVIEWS.rglob("*.html")):
        pid = f.stem
        it = meta.get(pid, {})
        out.append({"id": pid, "name": it.get("name", pid), "kind": it.get("kind", ""),
                    "register": it.get("register", f.parent.name), "ref": it.get("ref", ""),
                    "html": f.read_text().strip()})
    return out


def palettes() -> list[dict]:
    """Every palette of the family, so the previews can be seen in any of them — the
    beige pair is one colour scheme among many, never the frame for everything."""
    import importlib.util
    spec = importlib.util.spec_from_file_location("build", ROOT / "tools" / "build.py")
    assert spec and spec.loader
    B = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(B)
    out, res = [], {}
    for slug in B.ORDER:
        raw = B.load(slug)
        res[slug] = pal = B.resolve(raw, res.get(raw.get("inherits", "")))
        hexv = lambda role: B.role_value(pal["roles"][role], pal["tokens"])[1]
        m = pal["meta"]
        out.append({"slug": slug, "name": m["name"], "code": m.get("code", ""), "mode": m["mode"],
                    "bg": hexv("bg.app"), "panel": hexv("bg.surface"), "raised": hexv("bg.raised"),
                    "hover": hexv("bg.hover"), "line": hexv("border.hairline"), "strong": hexv("border.strong"),
                    "ink": hexv("text.primary"), "head": hexv("text.heading"), "mu": hexv("text.muted"),
                    "acc": hexv("accent.edge"), "accT": hexv("accent.text"),
                    "sig": hexv("signal.fill"), "sigT": hexv("signal.text")})
    return out


def main():
    items = collect()
    if not items:
        sys.exit("no previews yet — library/previews/<register>/<id>.html")
    out = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_OUT
    page = PAGE.replace("__DATA__", json.dumps(items, ensure_ascii=False))
    out.write_text(page.replace("__PALS__", json.dumps(palettes(), ensure_ascii=False)))
    print(f"{len(items)} previews → {out}")


if __name__ == "__main__":
    main()

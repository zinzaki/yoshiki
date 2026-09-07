/* ════════════════════════════════════════════════════════════════════
   tools/render-og.mjs — rasterise docs/og.svg to docs/og.png
   ════════════════════════════════════════════════════════════════════
   Link previews will not render SVG, so the one social image has to ship as
   a bitmap. Everything about it is still generated: run tools/build.py first,
   then this. Optional — it needs a browser, so it is not in CI.

       npm i playwright-core
       CHROMIUM=/path/to/chrome node tools/render-og.mjs
   ════════════════════════════════════════════════════════════════════ */
import {chromium} from 'playwright-core';

const EXE = process.env.CHROMIUM || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const DOCS = new URL('../docs/', import.meta.url).pathname;

const browser = await chromium.launch({executablePath: EXE, args: ['--no-sandbox']});
const page = await browser.newPage({viewport: {width: 1200, height: 630}, deviceScaleFactor: 1});
await page.goto('file://' + DOCS + 'og.svg');
await page.waitForTimeout(300);
await page.screenshot({path: DOCS + 'og.png'});
await browser.close();
console.log('docs/og.png written');

import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_wbPUA3Jv.mjs';

const _page0  = () => import('./chunks/generic_IaVSi4T3.mjs');
const _page1  = () => import('./chunks/index_um8mPOVd.mjs');
const _page2  = () => import('./chunks/About_FKUolj53.mjs');
const _page3  = () => import('./chunks/rss_1F8tkgf3.mjs');
const _page4  = () => import('./chunks/about___AUnBRJ.mjs');
const _page5  = () => import('./chunks/index_pCGylJ5K.mjs');
const _page6  = () => import('./chunks/_.._KzbKw_CS.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/page-content/About.md", _page2],["src/pages/rss.xml.js", _page3],["src/pages/about.astro", _page4],["src/pages/blog/index.astro", _page5],["src/pages/blog/[...slug].astro", _page6]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = undefined;

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };

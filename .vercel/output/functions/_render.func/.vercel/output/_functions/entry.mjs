import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BYD5hWHv.mjs';
import { manifest } from './manifest_BGlN53En.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/posts/_slug_.astro.mjs');
const _page2 = () => import('./pages/posts.astro.mjs');
const _page3 = () => import('./pages/sobre.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/posts/[slug].astro", _page1],
    ["src/pages/posts.astro", _page2],
    ["src/pages/sobre.astro", _page3],
    ["src/pages/index.astro", _page4]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "90facacc-d1da-4b31-9115-4cb47284a801",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };

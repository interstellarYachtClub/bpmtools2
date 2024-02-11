import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import './chunks/astro_cjlGYYx7.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.sokFPBtJ.css"},{"type":"inline","content":"a[data-astro-cid-eimmu3lg]{display:inline-block;text-decoration:none}a[data-astro-cid-eimmu3lg].active{font-weight:bolder;text-decoration:underline}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/page-content/about","type":"page","pattern":"^\\/page-content\\/About\\/?$","segments":[[{"content":"page-content","dynamic":false,"spread":false}],[{"content":"About","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/page-content/About.md","pathname":"/page-content/About","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","type":"endpoint","pattern":"^\\/rss\\.xml$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.sokFPBtJ.css"},{"type":"inline","content":"a[data-astro-cid-eimmu3lg]{display:inline-block;text-decoration:none}a[data-astro-cid-eimmu3lg].active{font-weight:bolder;text-decoration:underline}\nmain[data-astro-cid-bvzihdzo]{max-width:100%;margin:0}.hero-image[data-astro-cid-bvzihdzo]{width:100%}.hero-image[data-astro-cid-bvzihdzo] img[data-astro-cid-bvzihdzo]{display:block;margin:0 auto;border-radius:12px;box-shadow:var(--box-shadow)}.prose[data-astro-cid-bvzihdzo]{width:720px;max-width:calc(100% - 2em);margin:auto;padding:1em;color:rgb(var(--gray-dark))}.title[data-astro-cid-bvzihdzo]{margin-bottom:1em;padding:1em 0;text-align:center;line-height:1}.title[data-astro-cid-bvzihdzo] h1[data-astro-cid-bvzihdzo]{margin:0 0 .5em}.date[data-astro-cid-bvzihdzo]{margin-bottom:.5em;color:rgb(var(--gray))}.last-updated-on[data-astro-cid-bvzihdzo]{font-style:italic}\n"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.sokFPBtJ.css"},{"type":"inline","content":"a[data-astro-cid-eimmu3lg]{display:inline-block;text-decoration:none}a[data-astro-cid-eimmu3lg].active{font-weight:bolder;text-decoration:underline}\nmain[data-astro-cid-5tznm7mj]{width:960px}ul[data-astro-cid-5tznm7mj]{display:flex;flex-wrap:wrap;gap:2rem;list-style-type:none;margin:0;padding:0}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj]{width:calc(50% - 1rem)}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj] [data-astro-cid-5tznm7mj]{text-decoration:none;transition:.2s ease}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj]:first-child{width:100%;margin-bottom:1rem;text-align:center}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj]:first-child img[data-astro-cid-5tznm7mj]{width:100%}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj]:first-child .title[data-astro-cid-5tznm7mj]{font-size:2.369rem}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj] img[data-astro-cid-5tznm7mj]{margin-bottom:.5rem;border-radius:12px}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj] a[data-astro-cid-5tznm7mj]{display:block}.title[data-astro-cid-5tznm7mj]{margin:0;color:rgb(var(--black));line-height:1}.date[data-astro-cid-5tznm7mj]{margin:0;color:rgb(var(--gray))}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj] a[data-astro-cid-5tznm7mj]:hover h4[data-astro-cid-5tznm7mj],ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj] a[data-astro-cid-5tznm7mj]:hover .date[data-astro-cid-5tznm7mj]{color:rgb(var(--accent))}ul[data-astro-cid-5tznm7mj] a[data-astro-cid-5tznm7mj]:hover img[data-astro-cid-5tznm7mj]{box-shadow:var(--box-shadow)}@media (max-width: 720px){ul[data-astro-cid-5tznm7mj]{gap:.5em}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj]{width:100%;text-align:center}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj]:first-child{margin-bottom:0}ul[data-astro-cid-5tznm7mj] li[data-astro-cid-5tznm7mj]:first-child .title[data-astro-cid-5tznm7mj]{font-size:1.563em}}\n"}],"routeData":{"route":"/blog","type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.sokFPBtJ.css"},{"type":"inline","content":"a[data-astro-cid-eimmu3lg]{display:inline-block;text-decoration:none}a[data-astro-cid-eimmu3lg].active{font-weight:bolder;text-decoration:underline}\nmain[data-astro-cid-bvzihdzo]{max-width:100%;margin:0}.hero-image[data-astro-cid-bvzihdzo]{width:100%}.hero-image[data-astro-cid-bvzihdzo] img[data-astro-cid-bvzihdzo]{display:block;margin:0 auto;border-radius:12px;box-shadow:var(--box-shadow)}.prose[data-astro-cid-bvzihdzo]{width:720px;max-width:calc(100% - 2em);margin:auto;padding:1em;color:rgb(var(--gray-dark))}.title[data-astro-cid-bvzihdzo]{margin-bottom:1em;padding:1em 0;text-align:center;line-height:1}.title[data-astro-cid-bvzihdzo] h1[data-astro-cid-bvzihdzo]{margin:0 0 .5em}.date[data-astro-cid-bvzihdzo]{margin-bottom:.5em;color:rgb(var(--gray))}.last-updated-on[data-astro-cid-bvzihdzo]{font-style:italic}\n"}],"routeData":{"route":"/blog/[...slug]","type":"page","pattern":"^\\/blog(?:\\/(.*?))?\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/blog/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://bpmtools.net","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/fife/webdev/bpmtools2/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/fife/webdev/bpmtools2/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/fife/webdev/bpmtools2/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["C:/Users/fife/webdev/bpmtools2/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/fife/webdev/bpmtools2/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/page-content/About.md":"chunks/pages/About_z632OQJJ.mjs","/src/pages/about.astro":"chunks/pages/about_1SUekjb8.mjs","/src/pages/rss.xml.js":"chunks/pages/rss_jPxG0n6Z.mjs","\u0000@astrojs-manifest":"manifest_wbPUA3Jv.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_IaVSi4T3.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_um8mPOVd.mjs","\u0000@astro-page:src/pages/page-content/About@_@md":"chunks/About_FKUolj53.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"chunks/rss_1F8tkgf3.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about___AUnBRJ.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"chunks/index_pCGylJ5K.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"chunks/_.._KzbKw_CS.mjs","C:/Users/fife/webdev/bpmtools2/src/content/blog/2023-12-27.md?astroContentCollectionEntry=true":"chunks/2023-12-27_klqzaddP.mjs","C:/Users/fife/webdev/bpmtools2/src/content/blog/first-post.md?astroContentCollectionEntry=true":"chunks/first-post_9iOKZRdo.mjs","C:/Users/fife/webdev/bpmtools2/src/content/blog/home-post.md?astroContentCollectionEntry=true":"chunks/home-post_E8NNvbfh.mjs","C:/Users/fife/webdev/bpmtools2/src/content/blog/markdown-style-guide.md?astroContentCollectionEntry=true":"chunks/markdown-style-guide_M3Y9OqQ8.mjs","C:/Users/fife/webdev/bpmtools2/src/content/blog/second-post.md?astroContentCollectionEntry=true":"chunks/second-post_YV-PNQbY.mjs","C:/Users/fife/webdev/bpmtools2/src/content/blog/third-post.md?astroContentCollectionEntry=true":"chunks/third-post_9gIai-Kt.mjs","C:/Users/fife/webdev/bpmtools2/src/content/blog/using-mdx.mdx?astroContentCollectionEntry=true":"chunks/using-mdx_ymmXX6aU.mjs","C:/Users/fife/webdev/bpmtools2/src/content/blog/2023-12-27.md?astroPropagatedAssets":"chunks/2023-12-27_YgEjUpdu.mjs","C:/Users/fife/webdev/bpmtools2/src/content/blog/first-post.md?astroPropagatedAssets":"chunks/first-post_EBtWpplF.mjs","C:/Users/fife/webdev/bpmtools2/src/content/blog/home-post.md?astroPropagatedAssets":"chunks/home-post_PUHeM_lS.mjs","C:/Users/fife/webdev/bpmtools2/src/content/blog/markdown-style-guide.md?astroPropagatedAssets":"chunks/markdown-style-guide_c332uwLC.mjs","C:/Users/fife/webdev/bpmtools2/src/content/blog/second-post.md?astroPropagatedAssets":"chunks/second-post_ctkCkepu.mjs","C:/Users/fife/webdev/bpmtools2/src/content/blog/third-post.md?astroPropagatedAssets":"chunks/third-post_II2sXEkT.mjs","C:/Users/fife/webdev/bpmtools2/src/content/blog/using-mdx.mdx?astroPropagatedAssets":"chunks/using-mdx_iU4xAFV1.mjs","C:/Users/fife/webdev/bpmtools2/src/content/blog/2023-12-27.md":"chunks/2023-12-27_HCrPnqwd.mjs","C:/Users/fife/webdev/bpmtools2/src/content/blog/first-post.md":"chunks/first-post_6pLYI-SZ.mjs","C:/Users/fife/webdev/bpmtools2/src/content/blog/home-post.md":"chunks/home-post_73tIiUjM.mjs","C:/Users/fife/webdev/bpmtools2/src/content/blog/markdown-style-guide.md":"chunks/markdown-style-guide_KOzuclpx.mjs","C:/Users/fife/webdev/bpmtools2/src/content/blog/second-post.md":"chunks/second-post_9Ut04yEL.mjs","C:/Users/fife/webdev/bpmtools2/src/content/blog/third-post.md":"chunks/third-post_5NxjvECQ.mjs","C:/Users/fife/webdev/bpmtools2/src/content/blog/using-mdx.mdx":"chunks/using-mdx_zjuKcC_j.mjs","C:/Users/fife/webdev/bpmtools2/src/components/svelte/BpmSettings.svelte":"_astro/BpmSettings.DVtqOPUY.js","C:/Users/fife/webdev/bpmtools2/src/components/svelte/LfoHertz.svelte":"_astro/LfoHertz.HO7-KDNi.js","C:/Users/fife/webdev/bpmtools2/src/components/svelte/BpmInput.svelte":"_astro/BpmInput.gQiGtY10.js","@astrojs/svelte/client.js":"_astro/client.Ddma2X8C.js","C:/Users/fife/webdev/bpmtools2/src/components/svelte/MsSampleConvert.svelte":"_astro/MsSampleConvert.g06NVgm-.js","C:/Users/fife/webdev/bpmtools2/src/components/svelte/DelayCalc.svelte":"_astro/DelayCalc.lG7UTKGj.js","C:/Users/fife/webdev/bpmtools2/src/components/svelte/ModeReference.svelte":"_astro/ModeReference.HwLISHY5.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/about.sokFPBtJ.css","/astro-favicon.svg","/blog-placeholder-1.jpg","/blog-placeholder-2.jpg","/blog-placeholder-3.jpg","/blog-placeholder-4.jpg","/blog-placeholder-5.jpg","/blog-placeholder-about.jpg","/old-favicon.svg","/favicons/android-chrome-192x192.png","/favicons/android-chrome-512x512.png","/favicons/apple-touch-icon.png","/favicons/browserconfig.xml","/favicons/favicon-16x16.png","/favicons/favicon-32x32.png","/favicons/favicon.ico","/favicons/mstile-150x150.png","/favicons/safari-pinned-tab.svg","/favicons/site.webmanifest","/fonts/atkinson-bold.woff","/fonts/atkinson-regular.woff","/images/dall-e-mother-synther.avif","/images/studio-scaled.avif","/_astro/BpmInput.gQiGtY10.js","/_astro/BpmSettings.DVtqOPUY.js","/_astro/client.Ddma2X8C.js","/_astro/DelayCalc.lG7UTKGj.js","/_astro/index.KvgwY6E0.js","/_astro/LfoHertz.HO7-KDNi.js","/_astro/ModeReference.HwLISHY5.js","/_astro/MsSampleConvert.g06NVgm-.js","/_astro/store.-C6xMUVe.js"]});

export { manifest };

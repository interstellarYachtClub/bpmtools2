import { d as createAstro, c as createComponent, r as renderTemplate, g as renderComponent } from '../astro_cjlGYYx7.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$BlogPost } from './__xmN8ao_i.mjs';
import { Content } from './About_z632OQJJ.mjs';

const $$Astro = createAstro("https://bpmtools.net");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$BlogPost, { "title": "About", "description": "Lorem ipsum dolor sit amet", "pubDate": /* @__PURE__ */ new Date("January 01 2024"), "heroImage": "/images/studio-scaled.avif" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "About", Content, {})} ` })}`;
}, "C:/Users/fife/webdev/bpmtools2/src/pages/about.astro", void 0);

const $$file = "C:/Users/fife/webdev/bpmtools2/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };

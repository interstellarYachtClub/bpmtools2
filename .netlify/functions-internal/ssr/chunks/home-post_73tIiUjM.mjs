import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_cjlGYYx7.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1>🧑‍🚀 Hello, Astronaut!</h1>\n\t\t\t<p>\n\t\t\t\tWelcome to the official <a href=\"https://astro.build/\">Astro</a> blog starter template. This\n\t\t\t\ttemplate serves as a lightweight, minimally-styled starting point for anyone looking to\n\t\t\t\tbuild a personal website, blog, or portfolio with Astro.\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\tThis template comes with a few integrations already configured in your\n\t\t\t\t<code>astro.config.mjs</code> file. You can customize your setup with\n\t\t\t\t<a href=\"https://astro.build/integrations\">Astro Integrations</a> to add tools like\n\t\t\t\tTailwind, React, or Vue to your project.\n\t\t\t</p>\n\t\t\t<p>Here are a few ideas on how to get started with the template:</p>\n\t\t\t<ul>\n\t\t\t\t<li>Edit this page in <code>src/pages/index.astro</code></li>\n\t\t\t\t<li>Edit the site header items in <code>src/components/Header.astro</code></li>\n\t\t\t\t<li>Add your name to the footer in <code>src/components/Footer.astro</code></li>\n\t\t\t\t<li>Check out the included blog posts in <code>src/pages/blog/</code></li>\n\t\t\t\t<li>Customize the blog post page layout in <code>src/layouts/BlogPost.astro</code></li>\n\t\t\t</ul>\n\t\t\t<p>\n\t\t\t\tHave fun! If you get stuck, remember to <a href=\"https://docs.astro.build/\">read the docs\n\t\t\t\t</a> or <a href=\"https://astro.build/chat\">join us on Discord</a> to ask questions.\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\tLooking for a blog template with a bit more personality? Check out <a href=\"https://github.com/Charca/astro-blog-template\">astro-blog-template\n\t\t\t\t</a> by <a href=\"https://twitter.com/Charca\">Maxi Ferreira</a>.\n\t\t\t</p>";

				const frontmatter = {"title":"Original index/home post from astro","description":"Lorem ipsum dolor sit amet","pubDate":"Dec 27 2023","heroImage":"/blog-placeholder-3.jpg"};
				const file = "C:/Users/fife/webdev/bpmtools2/src/content/blog/home-post.md";
				const url = undefined;
				function rawContent() {
					return "\r\n<h1>🧑‍🚀 Hello, Astronaut!</h1>\r\n\t\t\t<p>\r\n\t\t\t\tWelcome to the official <a href=\"https://astro.build/\">Astro</a> blog starter template. This\r\n\t\t\t\ttemplate serves as a lightweight, minimally-styled starting point for anyone looking to\r\n\t\t\t\tbuild a personal website, blog, or portfolio with Astro.\r\n\t\t\t</p>\r\n\t\t\t<p>\r\n\t\t\t\tThis template comes with a few integrations already configured in your\r\n\t\t\t\t<code>astro.config.mjs</code> file. You can customize your setup with\r\n\t\t\t\t<a href=\"https://astro.build/integrations\">Astro Integrations</a> to add tools like\r\n\t\t\t\tTailwind, React, or Vue to your project.\r\n\t\t\t</p>\r\n\t\t\t<p>Here are a few ideas on how to get started with the template:</p>\r\n\t\t\t<ul>\r\n\t\t\t\t<li>Edit this page in <code>src/pages/index.astro</code></li>\r\n\t\t\t\t<li>Edit the site header items in <code>src/components/Header.astro</code></li>\r\n\t\t\t\t<li>Add your name to the footer in <code>src/components/Footer.astro</code></li>\r\n\t\t\t\t<li>Check out the included blog posts in <code>src/pages/blog/</code></li>\r\n\t\t\t\t<li>Customize the blog post page layout in <code>src/layouts/BlogPost.astro</code></li>\r\n\t\t\t</ul>\r\n\t\t\t<p>\r\n\t\t\t\tHave fun! If you get stuck, remember to <a href=\"https://docs.astro.build/\"\r\n\t\t\t\t\t>read the docs\r\n\t\t\t\t</a> or <a href=\"https://astro.build/chat\">join us on Discord</a> to ask questions.\r\n\t\t\t</p>\r\n\t\t\t<p>\r\n\t\t\t\tLooking for a blog template with a bit more personality? Check out <a\r\n\t\t\t\t\thref=\"https://github.com/Charca/astro-blog-template\"\r\n\t\t\t\t\t>astro-blog-template\r\n\t\t\t\t</a> by <a href=\"https://twitter.com/Charca\">Maxi Ferreira</a>.\r\n\t\t\t</p>";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

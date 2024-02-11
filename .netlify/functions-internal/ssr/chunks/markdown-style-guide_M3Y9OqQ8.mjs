const id = "markdown-style-guide.md";
						const collection = "blog";
						const slug = "markdown-style-guide";
						const body = "\r\nHere is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.\r\n\r\n## Headings\r\n\r\nThe following HTML `<h1>`—`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest.\r\n\r\n# H1\r\n\r\n## H2\r\n\r\n### H3\r\n\r\n#### H4\r\n\r\n##### H5\r\n\r\n###### H6\r\n\r\n## Paragraph\r\n\r\nXerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.\r\n\r\nItatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.\r\n\r\n## Images\r\n\r\n#### Syntax\r\n\r\n```markdown\r\n![Alt text](./full/or/relative/path/of/image)\r\n```\r\n\r\n#### Output\r\n\r\n![blog placeholder](/blog-placeholder-about.jpg)\r\n\r\n## Blockquotes\r\n\r\nThe blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.\r\n\r\n### Blockquote without attribution\r\n\r\n#### Syntax\r\n\r\n```markdown\r\n> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  \r\n> **Note** that you can use _Markdown syntax_ within a blockquote.\r\n```\r\n\r\n#### Output\r\n\r\n> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  \r\n> **Note** that you can use _Markdown syntax_ within a blockquote.\r\n\r\n### Blockquote with attribution\r\n\r\n#### Syntax\r\n\r\n```markdown\r\n> Don't communicate by sharing memory, share memory by communicating.<br>\r\n> — <cite>Rob Pike[^1]</cite>\r\n```\r\n\r\n#### Output\r\n\r\n> Don't communicate by sharing memory, share memory by communicating.<br>\r\n> — <cite>Rob Pike[^1]</cite>\r\n\r\n[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.\r\n\r\n## Tables\r\n\r\n#### Syntax\r\n\r\n```markdown\r\n| Italics   | Bold     | Code   |\r\n| --------- | -------- | ------ |\r\n| _italics_ | **bold** | `code` |\r\n```\r\n\r\n#### Output\r\n\r\n| Italics   | Bold     | Code   |\r\n| --------- | -------- | ------ |\r\n| _italics_ | **bold** | `code` |\r\n\r\n## Code Blocks\r\n\r\n#### Syntax\r\n\r\nwe can use 3 backticks ``` in new line and write snippet and close with 3 backticks on new line and to highlight language specific syntac, write one word of language name after first 3 backticks, for eg. html, javascript, css, markdown, typescript, txt, bash\r\n\r\n````markdown\r\n```html\r\n<!doctype html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"utf-8\" />\r\n    <title>Example HTML5 Document</title>\r\n  </head>\r\n  <body>\r\n    <p>Test</p>\r\n  </body>\r\n</html>\r\n```\r\n````\r\n\r\nOutput\r\n\r\n```html\r\n<!doctype html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"utf-8\" />\r\n    <title>Example HTML5 Document</title>\r\n  </head>\r\n  <body>\r\n    <p>Test</p>\r\n  </body>\r\n</html>\r\n```\r\n\r\n## List Types\r\n\r\n### Ordered List\r\n\r\n#### Syntax\r\n\r\n```markdown\r\n1. First item\r\n2. Second item\r\n3. Third item\r\n```\r\n\r\n#### Output\r\n\r\n1. First item\r\n2. Second item\r\n3. Third item\r\n\r\n### Unordered List\r\n\r\n#### Syntax\r\n\r\n```markdown\r\n- List item\r\n- Another item\r\n- And another item\r\n```\r\n\r\n#### Output\r\n\r\n- List item\r\n- Another item\r\n- And another item\r\n\r\n### Nested list\r\n\r\n#### Syntax\r\n\r\n```markdown\r\n- Fruit\r\n  - Apple\r\n  - Orange\r\n  - Banana\r\n- Dairy\r\n  - Milk\r\n  - Cheese\r\n```\r\n\r\n#### Output\r\n\r\n- Fruit\r\n  - Apple\r\n  - Orange\r\n  - Banana\r\n- Dairy\r\n  - Milk\r\n  - Cheese\r\n\r\n## Other Elements — abbr, sub, sup, kbd, mark\r\n\r\n#### Syntax\r\n\r\n```markdown\r\n<abbr title=\"Graphics Interchange Format\">GIF</abbr> is a bitmap image format.\r\n\r\nH<sub>2</sub>O\r\n\r\nX<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>\r\n\r\nPress <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.\r\n\r\nMost <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.\r\n```\r\n\r\n#### Output\r\n\r\n<abbr title=\"Graphics Interchange Format\">GIF</abbr> is a bitmap image format.\r\n\r\nH<sub>2</sub>O\r\n\r\nX<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>\r\n\r\nPress <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.\r\n\r\nMost <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.\r\n";
						const data = {title:"Markdown Style Guide",description:"Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.",pubDate:new Date(1656648000000),heroImage:"/blog-placeholder-1.jpg"};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/fife/webdev/bpmtools2/src/content/blog/markdown-style-guide.md",
							rawData: "\r\ntitle: 'Markdown Style Guide'\r\ndescription: 'Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.'\r\npubDate: 'Jul 01 2022'\r\nheroImage: '/blog-placeholder-1.jpg'\r",
						};

export { _internal, body, collection, data, id, slug };

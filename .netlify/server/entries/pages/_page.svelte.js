import { c as create_ssr_component, b as each, e as escape, d as compute_rest_props, f as spread, h as escape_object, i as escape_attribute_value, j as is_void, v as validate_component, k as add_attribute, a as subscribe } from "../../chunks/index2.js";
import { B as BROWSER, w as writable } from "../../chunks/index.js";
const browser = BROWSER;
const app = "";
const navigation_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: "ul.svelte-1fbwp5.svelte-1fbwp5,li.svelte-1fbwp5.svelte-1fbwp5{padding:0}.nav-item.svelte-1fbwp5.svelte-1fbwp5{display:flex;align-items:center;padding-block:1rem;transition:all 0.2s var(--ease-squish-1)}.nav-item.svelte-1fbwp5.svelte-1fbwp5:hover{color:var(--brand)}.dash-line.svelte-1fbwp5.svelte-1fbwp5{width:2rem;height:2px;background-color:var(--brand);transition:all 0.2s var(--ease-squish-1)}.nav-item.svelte-1fbwp5:hover .dash-line.svelte-1fbwp5{width:5rem}",
  map: null
};
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { links = [] } = $$props;
  let hoveredItem = null;
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  $$result.css.add(css$9);
  return `<ul class="svelte-1fbwp5">${each(links, (item) => {
    return `<li class="nav-item svelte-1fbwp5"><span class="${["dash-line svelte-1fbwp5", hoveredItem === item ? "extended" : ""].join(" ").trim()}"></span>
        <span>${escape(item.title)}</span>
      </li>`;
  })}</ul>`;
});
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["name", "color", "size", "strokeWidth", "absoluteStrokeWidth", "iconNode"]);
  let { name } = $$props;
  let { color = "currentColor" } = $$props;
  let { size = 24 } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { absoluteStrokeWidth = false } = $$props;
  let { iconNode } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.absoluteStrokeWidth === void 0 && $$bindings.absoluteStrokeWidth && absoluteStrokeWidth !== void 0)
    $$bindings.absoluteStrokeWidth(absoluteStrokeWidth);
  if ($$props.iconNode === void 0 && $$bindings.iconNode && iconNode !== void 0)
    $$bindings.iconNode(iconNode);
  return `<svg${spread(
    [
      escape_object(defaultAttributes),
      escape_object($$restProps),
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { stroke: escape_attribute_value(color) },
      {
        "stroke-width": escape_attribute_value(absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth)
      },
      {
        class: escape_attribute_value(`lucide-icon lucide lucide-${name} ${$$props.class ?? ""}`)
      }
    ],
    {}
  )}>${each(iconNode, ([tag, attrs]) => {
    return `${((tag$1) => {
      return tag$1 ? `<${tag}${spread([escape_object(attrs)], {})}>${is_void(tag$1) ? "" : ``}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
    })(tag)}`;
  })}${slots.default ? slots.default({}) : ``}</svg>`;
});
const Icon$1 = Icon;
const Github = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
      }
    ],
    ["path", { "d": "M9 18c-4.51 2-5-2-7-2" }]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "github" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Github$1 = Github;
const Instagram = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "20",
        "height": "20",
        "x": "2",
        "y": "2",
        "rx": "5",
        "ry": "5"
      }
    ],
    [
      "path",
      {
        "d": "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
      }
    ],
    [
      "line",
      {
        "x1": "17.5",
        "x2": "17.51",
        "y1": "6.5",
        "y2": "6.5"
      }
    ]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "instagram" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Instagram$1 = Instagram;
const Linkedin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
      }
    ],
    [
      "rect",
      {
        "width": "4",
        "height": "12",
        "x": "2",
        "y": "9"
      }
    ],
    ["circle", { "cx": "4", "cy": "4", "r": "2" }]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "linkedin" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Linkedin$1 = Linkedin;
const Mail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "20",
        "height": "16",
        "x": "2",
        "y": "4",
        "rx": "2"
      }
    ],
    [
      "path",
      {
        "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
      }
    ]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "mail" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Mail$1 = Mail;
const Moon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
      }
    ]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "moon" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Moon$1 = Moon;
const Sun = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "4" }],
    ["path", { "d": "M12 2v2" }],
    ["path", { "d": "M12 20v2" }],
    ["path", { "d": "m4.93 4.93 1.41 1.41" }],
    ["path", { "d": "m17.66 17.66 1.41 1.41" }],
    ["path", { "d": "M2 12h2" }],
    ["path", { "d": "M20 12h2" }],
    ["path", { "d": "m6.34 17.66-1.41 1.41" }],
    ["path", { "d": "m19.07 4.93-1.41 1.41" }]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "sun" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Sun$1 = Sun;
const socialLinks_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: "ul.svelte-szvae6{list-style-type:none;display:flex;padding:0}a.svelte-szvae6:hover{color:var(--brand)}",
  map: null
};
const SocialLinks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$8);
  return `<ul class="svelte-szvae6"><li><a href="https://github.com/remogolf" target="_blank" class="svelte-szvae6">${validate_component(Github$1, "Github").$$render($$result, {}, {}, {})}</a></li>
	<li><a href="https://www.linkedin.com/in/remofueg" target="_blank" class="svelte-szvae6">${validate_component(Linkedin$1, "Linkedin").$$render($$result, {}, {}, {})}</a></li>
	<li><a href="https://www.instagram.com/remogolf/" target="_blank" class="svelte-szvae6">${validate_component(Instagram$1, "Instagram").$$render($$result, {}, {}, {})}</a></li>
    <li><a href="mailto:remogolf@gmail.com" target="_blank" class="svelte-szvae6">${validate_component(Mail$1, "Mail").$$render($$result, {}, {}, {})}</a></li>
</ul>`;
});
const hero_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: "h1.svelte-12c29py{padding-bottom:1rem}h4.svelte-12c29py{padding-bottom:1rem}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$7);
  return `<div class="container"><div class="card"><h1 class="svelte-12c29py">Remo Füeg</h1>
	<h4 class="svelte-12c29py">Mechanical Design Engineer</h4>
	<p>I develop and validate product designs, create prototypes, perform test and rollout the product
	</p>
	${validate_component(SocialLinks, "SocialLinks").$$render($$result, {}, {}, {})}</div>
</div>`;
});
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2>About</h2>
<p>I graduated from Zurich University for Applied Sciences in 2022 as a Mechanical Engineer and ever since I have been on a mission to gather as much experience and relevant skills as possible. In my freetime I enjoy dabbling with webdesign using SvelteKit. It&#39;s how I built this site.</p>`;
});
const experienceCard_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".card.svelte-1i7j38a{background-color:var(--surface-2);border-radius:var(--radius-conditional-3);padding:16px}.time-period.svelte-1i7j38a{font-size:14px;font-weight:bold;color:var(--text-2);margin-bottom:8px}.heading.svelte-1i7j38a{font-size:18px;font-weight:bold;color:var(--text-1);margin-bottom:8px}.paragraph.svelte-1i7j38a{font-size:14px;color:var(--text-2);margin-bottom:16px}.tags.svelte-1i7j38a{display:flex;flex-wrap:wrap}.tag.svelte-1i7j38a{background-color:var(--surface-4);color:var(--text-1);font-size:12px;padding:4px 8px;border-radius:16px;margin-right:8px;margin-bottom:8px}",
  map: null
};
const ExperienceCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { timePeriod = "" } = $$props;
  let { heading = "" } = $$props;
  let { paragraph = "" } = $$props;
  let { tags = [] } = $$props;
  if ($$props.timePeriod === void 0 && $$bindings.timePeriod && timePeriod !== void 0)
    $$bindings.timePeriod(timePeriod);
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  if ($$props.paragraph === void 0 && $$bindings.paragraph && paragraph !== void 0)
    $$bindings.paragraph(paragraph);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  $$result.css.add(css$6);
  return `<div class="card svelte-1i7j38a"><div class="time-period svelte-1i7j38a">${escape(timePeriod)}</div>
    <div class="heading svelte-1i7j38a">${escape(heading)}</div>
    <div class="paragraph svelte-1i7j38a">${escape(paragraph)}</div>
    <div class="tags svelte-1i7j38a">${each(tags, (tag) => {
    return `<div class="tag svelte-1i7j38a">${escape(tag)}</div>`;
  })}</div></div>`;
});
const experience_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "h2.svelte-c5uzno{padding-bottom:1rem}.container.svelte-c5uzno{padding-bottom:1rem}",
  map: null
};
const Experience = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<h2 class="svelte-c5uzno">Experience</h2>
<div class="container svelte-c5uzno">${validate_component(ExperienceCard, "Card").$$render(
    $$result,
    {
      timePeriod: "Jan 2023 -  now",
      heading: "Mechanical Design Engineer @ Pragma-Engineering",
      paragraph: "Develop and Design Consumer Products with specialization part design for injection moulding",
      tags: ["SolidWorks", "SolidWorks FEM", "SolidEdge"]
    },
    {},
    {}
  )}</div>
<div class="container svelte-c5uzno">${validate_component(ExperienceCard, "Card").$$render(
    $$result,
    {
      timePeriod: "Dec 2021 - Dec 2022",
      heading: "Field Application Engineer @ Fotokite",
      paragraph: "Provide technical support and aid in the establishment of support related processes",
      tags: ["Git", "SolidWorks", "Wrike"]
    },
    {},
    {}
  )}</div>
<div class="container svelte-c5uzno">${validate_component(ExperienceCard, "Card").$$render(
    $$result,
    {
      timePeriod: "August 2019 - August 2020",
      heading: "Internship @ Burckhardt Compression",
      paragraph: "Meintenance and creation of technical drawings. Create and maintain CAD material database. Aid in Compressor auxiliary components",
      tags: ["NX", "SAP", "VBA"]
    },
    {},
    {}
  )}
</div>`;
});
const projectCard_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".card.svelte-9294v5{background-color:var(--surface-2);border-radius:8px;padding:16px;display:flex;align-items:center;flex-wrap:wrap}.image.svelte-9294v5{width:100px;height:100px;margin-right:16px;border-radius:8px;background-image:url({projectImage});background-size:cover;background-position:center}.content.svelte-9294v5{flex:1}.header.svelte-9294v5{font-size:18px;font-weight:bold;color:var(--text-1);margin-bottom:8px}.description.svelte-9294v5{font-size:14px;color:var(--text-2);margin-bottom:8px}.tags.svelte-9294v5{display:flex;flex-wrap:wrap}.tag.svelte-9294v5{background-color:var(--surface-4);color:var(--text-3);font-size:12px;padding:4px 8px;border-radius:16px;margin-right:8px;margin-bottom:8px}",
  map: null
};
const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { projectName = "" } = $$props;
  let { projectLink = "" } = $$props;
  let { projectDescription = "" } = $$props;
  let { projectImage = "" } = $$props;
  let { tags = [] } = $$props;
  if ($$props.projectName === void 0 && $$bindings.projectName && projectName !== void 0)
    $$bindings.projectName(projectName);
  if ($$props.projectLink === void 0 && $$bindings.projectLink && projectLink !== void 0)
    $$bindings.projectLink(projectLink);
  if ($$props.projectDescription === void 0 && $$bindings.projectDescription && projectDescription !== void 0)
    $$bindings.projectDescription(projectDescription);
  if ($$props.projectImage === void 0 && $$bindings.projectImage && projectImage !== void 0)
    $$bindings.projectImage(projectImage);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  $$result.css.add(css$4);
  return `<div class="card svelte-9294v5"><div class="image svelte-9294v5" style="${"background-image: url(" + escape(projectImage, true) + ")"}"></div>
    <div class="content svelte-9294v5"><a${add_attribute("href", projectLink, 0)} target="Blank_"><div class="header svelte-9294v5">${escape(projectName)}</div></a>
      <div class="description svelte-9294v5">${escape(projectDescription)}</div>
      <div class="tags svelte-9294v5">${each(tags, (tag) => {
    return `<div class="tag svelte-9294v5">${escape(tag)}</div>`;
  })}</div></div></div>`;
});
const projects_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "h1.svelte-rr7lzb{padding-bottom:1rem}.container.svelte-rr7lzb{padding-bottom:1rem}",
  map: null
};
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<h1 class="svelte-rr7lzb">Projects</h1>
<div class="container svelte-rr7lzb">${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      projectName: "Portfolio Site V2",
      projectLink: "#home",
      projectDescription: "This is a brief description of the project.",
      projectImage: "./OpenPeepsBust.png",
      tags: ["SvelteKit", "CSS", "TypeScript"]
    },
    {},
    {}
  )}</div>
<div class="container svelte-rr7lzb">${validate_component(ProjectCard, "ProjectCard").$$render(
    $$result,
    {
      projectName: "First Website",
      projectLink: "https://remofueeg.netlify.app/",
      projectDescription: "First Website intended to act as a online CV",
      projectImage: "./FirstWebsite.avif",
      tags: ["SvelteKit Beta", "CSS", "Javascript", "Netlify"]
    },
    {},
    {}
  )}
</div>`;
});
const title = "Remo Füeg";
const userTheme = browser;
const theme = writable(userTheme);
const themeToggle_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "button.svelte-114mtci.svelte-114mtci{padding:0;font-weight:inherit;background:none;border:none;box-shadow:none;overflow:hidden}button.svelte-114mtci>.svelte-114mtci{display:flex;gap:var(--size-2)}",
  map: null
};
const ThemeToggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$result.css.add(css$2);
  $$unsubscribe_theme();
  return `<button aria-label="Toggle theme" class="svelte-114mtci">${$theme === "dark" ? `<div class="svelte-114mtci">${validate_component(Sun$1, "Sun").$$render($$result, {}, {}, {})}
			<span>Light</span></div>` : `<div class="svelte-114mtci">${validate_component(Moon$1, "Moon").$$render($$result, {}, {}, {})}
			<span>Dark</span></div>`}
</button>`;
});
const footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-1rsv9c5{display:flex;height:100%;justify-content:space-between;align-items:center;border-top:1px solid var(--border)}p.svelte-1rsv9c5{color:var(--text-2)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `
<footer class="svelte-1rsv9c5"><p class="svelte-1rsv9c5">${escape(title)} © ${escape((/* @__PURE__ */ new Date()).getFullYear())}</p>
	${validate_component(ThemeToggle, "ThemeToggle").$$render($$result, {}, {}, {})}
</footer>`;
});
const customCursor_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".grid-container.svelte-e5joky{display:grid;padding-inline:5rem;grid-gap:1rem;grid-template-columns:minmax(0, 1fr) 1fr;grid-template-rows:5rem 1fr 5rem;height:100%;overflow:hidden;max-width:1440px;grid-template-areas:'header header'\n			'left_col right_col'\n			'footer footer'}.header.svelte-e5joky{grid-area:header}.footer.svelte-e5joky{grid-area:footer;z-index:1}.left-column.svelte-e5joky{align-items:start;top:0;position:sticky;grid-area:left_col}.hero.svelte-e5joky{margin-bottom:20px;font-size:24px;font-weight:bold}.right-column.svelte-e5joky{height:100%;grid-area:right_col;overflow-y:auto}.right-column.svelte-e5joky::-webkit-scrollbar{width:12px;background-color:var(--surface-2)}.right-column.svelte-e5joky::-webkit-scrollbar-thumb{border-radius:10px;-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);background-color:var(--brand)}section.svelte-e5joky{margin-bottom:10rem}@media(max-width: 1000px){.grid-container.svelte-e5joky{padding-inline:1rem;display:grid;overflow-y:scroll;grid-template-columns:1fr;grid-template-rows:auto;grid-template-areas:'header'\n				'left_col'\n				'right_col'\n				'footer'}.hero.svelte-e5joky{padding-bottom:10rem;margin:0}.left-column.svelte-e5joky{all:unset;height:fit-content}.right-column.svelte-e5joky{all:unset}.nav.svelte-e5joky{display:none}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let links = [
    { title: "About", id: "about" },
    { title: "Experience", id: "experience" },
    { title: "Projects", id: "projects" },
    { title: "Blog", id: "blog" }
  ];
  $$result.css.add(css);
  return `<div class="grid-container svelte-e5joky"><div class="header svelte-e5joky"></div>
	<div class="left-column svelte-e5joky"><div class="hero svelte-e5joky">${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}</div>
		<div class="nav svelte-e5joky">${validate_component(Navigation, "Navigation").$$render($$result, { links }, {}, {})}</div></div>
	<div class="right-column svelte-e5joky"><section id="about" class="svelte-e5joky">
			${validate_component(About, "About").$$render($$result, {}, {}, {})}</section>
		<section id="experience" class="svelte-e5joky">
			${validate_component(Experience, "Experience").$$render($$result, {}, {}, {})}</section>
		<section id="projects" class="svelte-e5joky">${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})}</section>
		<section id="blog" class="svelte-e5joky"><h2>Blog</h2>
<p>work in progress...</p></section></div>
	<div class="footer svelte-e5joky">${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>
</div>`;
});
export {
  Page as default
};

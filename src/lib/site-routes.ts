import type { FieldNotePost } from "./substack";

export const SITE_URL = "https://timeyin-gordon-portfolio-gtimeyins-projects.vercel.app";

export interface RouteMeta {
  title: string;
  description: string;
  canonicalPath: string;
  type: "website" | "article";
}

export const STATIC_ROUTES = [
  "/",
  "/work",
  "/work/search-as-home",
  "/work/risk-to-action",
  "/work/visualization-library",
  "/work/your-village-people",
  "/work/archive/dustin-home",
  "/work/archive/3d-motion",
  "/work/archive/studio-work",
  "/work/archive/social-causes",
  "/field-notes",
  "/craft",
  "/craft/ply",
  "/craft/threadmark",
  "/craft/backstory",
  "/craft/sconia",
  "/craft/meridian",
  "/about",
] as const;

const HOME_DESCRIPTION = "Product design engineer making complex and agentic product experiences trustworthy to act on.";

const STATIC_META: Record<string, Omit<RouteMeta, "canonicalPath">> = {
  "/": {
    title: "Timeyin Gordon — Product design engineer",
    description: HOME_DESCRIPTION,
    type: "website",
  },
  "/work": {
    title: "Selected work — Timeyin Gordon",
    description: "Product design and design-engineering work across agentic procurement, risk intelligence, design systems and independent products.",
    type: "website",
  },
  "/work/search-as-home": {
    title: "Search as home — Timeyin Gordon",
    description: "How Beroe compressed a multi-module procurement homepage into a single intelligent search experience.",
    type: "article",
  },
  "/work/risk-to-action": {
    title: "From risk data to action — Timeyin Gordon",
    description: "Turning complex procurement risk data into a decision through journey architecture, AI placement and data visualization.",
    type: "article",
  },
  "/work/visualization-library": {
    title: "Building a visualization library — Timeyin Gordon",
    description: "Why Beroe built a 45-plus chart visualization system on Visx instead of adopting an off-the-shelf library.",
    type: "article",
  },
  "/work/your-village-people": {
    title: "Your Village People — Timeyin Gordon",
    description: "Designing and shipping a strategy card game rooted in African folklore, social debt and real production constraints.",
    type: "article",
  },
  "/work/archive/dustin-home": {
    title: "What if checkout was your biggest competitor? | Timeyin Gordon",
    description: "UX research tracing Dustin Home's checkout friction to trust, guest-checkout hierarchy and product-review gaps, with evidence-backed recommendations.",
    type: "article",
  },
  "/work/archive/3d-motion": {
    title: "3D and motion for financial products — Timeyin Gordon",
    description: "A 3D visual and motion system that made insurance and financial products easier to understand at Tangerine Africa.",
    type: "article",
  },
  "/work/archive/studio-work": {
    title: "Studio work — Timeyin Gordon",
    description: "Selected digital product, brand and emerging-technology work from Neuro 6 in Lagos and Nairobi.",
    type: "article",
  },
  "/work/archive/social-causes": {
    title: "Communication for social causes — Timeyin Gordon",
    description: "Four years designing behaviour-change campaigns at the Center for Communication and Social Impact.",
    type: "article",
  },
  "/field-notes": {
    title: "Field Notes — Timeyin Gordon",
    description: "Writing about the gap that opens when design and engineering tools outrun the people using them.",
    type: "website",
  },
  "/field-notes/ai-isnt-making-me-dumb": {
    title: "AI isn't making me dumb — Timeyin Gordon",
    description: "A Field Note about AI-assisted work arriving faster than the person using it can form an opinion about it.",
    type: "article",
  },
  "/field-notes/the-second-brain-problem": {
    title: "The Second Brain Problem — Timeyin Gordon",
    description: "A Field Note about why knowledge systems become archives of intentions when capture scales faster than synthesis.",
    type: "article",
  },
  "/craft": {
    title: "Craft and side projects — Timeyin Gordon",
    description: "Five products built to understand canvas editors, prototype feedback, documentation, legal AI and agentic interface patterns.",
    type: "website",
  },
  "/craft/ply": {
    title: "Ply — Learning how a design canvas really works | Timeyin Gordon",
    description: "An independent exploration of rendering, coordinate systems, nodes, overlays and what it takes to make a hybrid PixiJS and React canvas feel natural.",
    type: "article",
  },
  "/craft/threadmark": {
    title: "Threadmark prototype feedback — Timeyin Gordon",
    description: "A feedback tool that keeps comments anchored to the prototype and the context that made them useful.",
    type: "article",
  },
  "/craft/backstory": {
    title: "Backstory prototype documentation — Timeyin Gordon",
    description: "A tool for preserving the reasoning, experiments and deployment context that code prototypes usually lose.",
    type: "article",
  },
  "/craft/sconia": {
    title: "Sconia legal AI — Timeyin Gordon",
    description: "Designing a legal AI assistant around provenance, citation and the cost of a confidently wrong answer.",
    type: "article",
  },
  "/craft/meridian": {
    title: "Meridian agentic patterns — Timeyin Gordon",
    description: "Nine playable interface patterns for systems that act on their own, including what each does when the agent is wrong.",
    type: "article",
  },
  "/about": {
    title: "About Timeyin Gordon — Product design engineer",
    description: "Designer, engineer and maker with eight years across agentic products, design systems, fintech, motion and independent ventures.",
    type: "website",
  },
};

function normalizedPath(path: string): string {
  const clean = path.replace(/\/+$/, "");
  return clean || "/";
}

function fieldNoteDescription(post: FieldNotePost): string {
  const description = post.description.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  return description.slice(0, 180) || `A Field Note by Timeyin Gordon: ${post.title}`;
}

export function getRouteMeta(path: string, posts: FieldNotePost[]): RouteMeta {
  const target = normalizedPath(path);
  const post = posts.find((entry) => entry.path === target || entry.aliases.includes(target));
  if (post) {
    return {
      title: `${post.title} — Timeyin Gordon`,
      description: fieldNoteDescription(post),
      canonicalPath: post.path,
      type: "article",
    };
  }

  const meta = STATIC_META[target] || STATIC_META["/"];
  return { ...meta, canonicalPath: target };
}

export function getSitemapRoutes(posts: FieldNotePost[]): string[] {
  return [...STATIC_ROUTES, ...posts.map((post) => post.path)];
}

export function getRouteMetaMap(posts: FieldNotePost[]): Record<string, RouteMeta> {
  const paths = [
    ...STATIC_ROUTES,
    "/field-notes/ai-isnt-making-me-dumb",
    "/field-notes/the-second-brain-problem",
    ...posts.flatMap((post) => [post.path, ...post.aliases]),
  ];

  return Object.fromEntries(paths.map((path) => [path, getRouteMeta(path, posts)]));
}

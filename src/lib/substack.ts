import { XMLParser } from "fast-xml-parser";
import sanitizeHtml from "sanitize-html";

export const SUBSTACK_FEED_URL = "https://dsfieldnotes.substack.com/feed";
const FIELD_NOTES_START = new Date("2025-01-01T00:00:00Z");

export interface FieldNotePost {
  slug: "Field note";
  date: string;
  meta: string;
  path: string;
  aliases: string[];
  sourceUrl: string;
  title: string;
  description: string;
  byline: string;
  body: string;
}

let feedPromise: Promise<FieldNotePost[]> | undefined;

function asArray<T>(value: T | T[] | undefined): T[] {
  if (value == null) return [];
  return Array.isArray(value) ? value : [value];
}

function articleSlug(link: string): string {
  try {
    const parts = new URL(link).pathname.split("/").filter(Boolean);
    return parts.at(-1) || "field-note";
  } catch {
    return "field-note";
  }
}

function legacyAliases(slug: string): string[] {
  const aliases: Record<string, string[]> = {
    "ai-isnt-making-me-dumb-its-making": ["/field-notes/ai-isnt-making-me-dumb"],
    "the-second-brain-problem-nobody-talks": ["/field-notes/the-second-brain-problem"],
  };
  return aliases[slug] || [];
}

function plainText(html: string): string {
  return sanitizeHtml(html, { allowedTags: [], allowedAttributes: {} })
    .replace(/\s+/g, " ")
    .trim();
}

function cleanArticle(html: string, sourceUrl: string): string {
  const clean = sanitizeHtml(html, {
    allowedTags: [
      "p", "br", "hr", "h2", "h3", "blockquote", "strong", "em", "b", "i",
      "ul", "ol", "li", "a", "figure", "figcaption", "picture", "source", "img",
    ],
    allowedAttributes: {
      a: ["href", "target", "rel"],
      img: ["src", "srcset", "sizes", "alt", "title", "width", "height", "loading"],
      source: ["srcset", "sizes", "type"],
    },
    allowedSchemes: ["http", "https", "mailto"],
    exclusiveFilter(frame) {
      const classes = frame.attribs?.class || "";
      return /(subscription-widget|native-video-embed|image-link-expand)/.test(classes);
    },
    transformTags: {
      a: (_tagName, attributes) => ({
        tagName: "a",
        attribs: {
          ...attributes,
          ...(attributes.href?.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {}),
        },
      }),
      img: (_tagName, attributes) => ({
        tagName: "img",
        attribs: { ...attributes, loading: attributes.loading || "lazy" },
      }),
    },
  });

  return `<div class="feed-article">${clean}</div>
    <p class="source-link"><a href="${sourceUrl}" target="_blank" rel="noopener noreferrer">Originally published on Substack →</a></p>`;
}

async function loadFeed(): Promise<FieldNotePost[]> {
  try {
    const response = await fetch(SUBSTACK_FEED_URL, {
      headers: { "User-Agent": "Timeyin-Gordon-Portfolio/1.0" },
      signal: AbortSignal.timeout(15_000),
    });
    if (!response.ok) throw new Error(`Substack returned ${response.status}`);

    const xml = await response.text();
    const parsed = new XMLParser({ ignoreAttributes: false, processEntities: true }).parse(xml);
    const items = asArray<Record<string, unknown>>(parsed?.rss?.channel?.item);

    return items
      .map((item) => {
        const title = String(item.title || "Untitled field note");
        const description = String(item.description || "");
        const sourceUrl = String(item.link || "https://dsfieldnotes.substack.com/");
        const slug = articleSlug(sourceUrl);
        const published = new Date(String(item.pubDate || ""));
        const rawBody = String(item["content:encoded"] || description);
        const words = plainText(rawBody).split(/\s+/).filter(Boolean).length;
        const readingMinutes = Math.max(2, Math.ceil(words / 220));
        const date = Number.isNaN(published.valueOf())
          ? "Field Notes"
          : new Intl.DateTimeFormat("en", { month: "short", year: "numeric", timeZone: "UTC" }).format(published);

        return {
          slug: "Field note" as const,
          date,
          meta: `Field note · ${date} · ${readingMinutes} min`,
          path: `/field-notes/${slug}`,
          aliases: legacyAliases(slug),
          sourceUrl,
          title,
          description,
          byline: `Field Notes, ${date}. About ${readingMinutes} min.`,
          body: cleanArticle(rawBody, sourceUrl),
          published,
        };
      })
      .filter((post) => !Number.isNaN(post.published.valueOf()) && post.published >= FIELD_NOTES_START)
      .sort((a, b) => b.published.valueOf() - a.published.valueOf())
      .map(({ published: _published, ...post }) => post);
  } catch (error) {
    console.warn(`[substack] Feed unavailable; using local fallback. ${error instanceof Error ? error.message : error}`);
    return [];
  }
}

export function getSubstackPosts(): Promise<FieldNotePost[]> {
  feedPromise ??= loadFeed();
  return feedPromise;
}

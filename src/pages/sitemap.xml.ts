import type { APIRoute } from "astro";
import { getSitemapRoutes, SITE_URL } from "../lib/site-routes";
import { getSubstackPosts } from "../lib/substack";

function escapeXml(value: string): string {
  return value.replace(/[<>&'\"]/g, (character) => ({
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "'": "&apos;",
    '\"': "&quot;",
  })[character] || character);
}

export const GET: APIRoute = async () => {
  const posts = await getSubstackPosts();
  const urls = getSitemapRoutes(posts)
    .map((path) => `  <url><loc>${escapeXml(new URL(path, SITE_URL).href)}</loc></url>`)
    .join("\n");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};

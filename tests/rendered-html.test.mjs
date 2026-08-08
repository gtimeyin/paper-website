import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the finished portfolio and metadata", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Timeyin Gordon — Design Engineer<\/title>/i);
  assert.match(html, /Making AI/);
  assert.match(html, /trustworthy/);
  assert.match(html, /enough to/);
  assert.match(html, /The interface is not a wrapper around intelligence/);
  assert.match(html, /href="mailto:gtimeyin@gmail.com"/);
  assert.doesNotMatch(html, /hgtimeyin@|codex-preview|SkeletonPreview|react-loading-skeleton/);
  assert.match(html, /<meta(?=[^>]*property="og:image")(?=[^>]*content="(?:http:\/\/localhost|https:\/\/gtimeyin\.com)\/og.png")[^>]*>/);
});

test("server-renders the flagship case study and working model", async () => {
  const [caseResponse, meridianResponse] = await Promise.all([
    render("/work/beroe-abi"),
    render("/meridian"),
  ]);
  assert.equal(caseResponse.status, 200);
  assert.equal(meridianResponse.status, 200);
  const caseHtml = await caseResponse.text();
  const meridianHtml = await meridianResponse.text();
  assert.match(caseHtml, /Lead Product Design Engineer/);
  assert.match(caseHtml, /Search became the homepage/);
  assert.match(caseHtml, /What I’d change/);
  assert.match(meridianHtml, /Eight contracts at the interface layer/);
  assert.match(meridianHtml, /Source before summary/);
  assert.match(meridianHtml, /Receipts after action/);
});

test("removes the disposable starter surface", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview|_sites-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
  await access(new URL("../public/og.png", import.meta.url));
  await access(new URL("../career-positioning-sprint.md", projectRoot));
});

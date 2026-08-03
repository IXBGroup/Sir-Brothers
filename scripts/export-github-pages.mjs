import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const output = path.join(root, "docs");
const siteUrl = "https://sir-brothers.com";

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(path.join(root, "dist", "client"), output, { recursive: true });

const response = await fetch("http://127.0.0.1:4373/");
if (!response.ok) throw new Error(`Homepage export failed: ${response.status}`);
let html = await response.text();
html = html.replaceAll("https://ixbgroup.github.io/Sir-Brothers", siteUrl);
await writeFile(path.join(output, "index.html"), html);
await writeFile(path.join(output, "404.html"), html);
await writeFile(path.join(output, ".nojekyll"), "");

const cssDir = path.join(output, "assets");
for (const filename of await import("node:fs/promises").then(({ readdir }) => readdir(cssDir))) {
  if (!filename.endsWith(".css")) continue;
  const file = path.join(cssDir, filename);
  const css = (await readFile(file, "utf8"))
    .replaceAll("url('/sir-brothers-hero.png')", "url('../sir-brothers-hero.png')")
    .replaceAll('url("/sir-brothers-hero.png")', 'url("../sir-brothers-hero.png")')
    .replaceAll('url(/sir-brothers-hero.png)', 'url(../sir-brothers-hero.png)');
  await writeFile(file, css);
}

await writeFile(path.join(output, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`);
await writeFile(path.join(output, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${siteUrl}/</loc><changefreq>monthly</changefreq><priority>1.0</priority></url></urlset>\n`);
console.log(`Exported GitHub Pages site to ${output}`);

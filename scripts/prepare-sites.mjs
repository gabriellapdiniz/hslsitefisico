import { mkdir, copyFile, writeFile, readdir, readFile } from "node:fs/promises";
import { join, relative, sep } from "node:path";

await mkdir("dist/server", { recursive: true });
await mkdir("dist/.openai", { recursive: true });
await copyFile(".openai/hosting.json", "dist/.openai/hosting.json");

async function collect(dir) {
  const files = [];
  for (const item of await readdir(dir, { withFileTypes: true })) {
    if (item.name === "server" || item.name === ".openai") continue;
    const path = join(dir, item.name);
    if (item.isDirectory()) files.push(...await collect(path));
    else files.push(path);
  }
  return files;
}

const mime = {
  ".html":"text/html; charset=utf-8", ".js":"text/javascript; charset=utf-8",
  ".css":"text/css; charset=utf-8", ".json":"application/json; charset=utf-8",
  ".svg":"image/svg+xml", ".png":"image/png", ".jpg":"image/jpeg",
  ".jpeg":"image/jpeg", ".webp":"image/webp", ".ico":"image/x-icon",
  ".woff2":"font/woff2"
};
const assets = {};
for (const file of await collect("dist")) {
  const route = "/" + relative("dist", file).split(sep).join("/");
  const ext = route.slice(route.lastIndexOf(".")).toLowerCase();
  assets[route] = { type: mime[ext] || "application/octet-stream", data: (await readFile(file)).toString("base64") };
}

await writeFile("dist/server/index.js", `
const assets = ${JSON.stringify(assets)};
function decode(value) {
  const raw = atob(value), bytes = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) bytes[i] = raw.charCodeAt(i);
  return bytes;
}
export default {
  async fetch(request) {
    const url = new URL(request.url);
    let path = url.pathname === "/" ? "/index.html" : url.pathname;
    const asset = assets[path] || assets[path + ".html"];
    if (!asset) return new Response("Not found", { status: 404 });
    const headers = { "content-type": asset.type };
    if (path.startsWith("/_next/static/")) headers["cache-control"] = "public, max-age=31536000, immutable";
    return new Response(decode(asset.data), { status: 200, headers });
  }
};
`);

import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const generateSitemap = async () => {
  const baseUrl = "http://localhost:3000"; // Replace with your actual website URL
  const postsDirectory = path.join(process.cwd(), "src/posts");
  const filenames = await fs.readdir(postsDirectory);

  const posts = filenames.map((name) => ({
    url: `${baseUrl}/blog/${name.replace(/\.mdx?$/, "")}`,
    lastModified: new Date().toISOString(),
  }));

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${posts
      .map((post) => {
        return `
      <url>
        <loc>${post.url}</loc>
        <lastmod>${post.lastModified}</lastmod>
      </url>
    `;
      })
      .join("")}
  </urlset>`;

  return sitemap;
};

export async function GET() {
  const sitemap = await generateSitemap();
  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

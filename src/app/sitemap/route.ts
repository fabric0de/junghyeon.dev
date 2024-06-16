import { NextRequest, NextResponse } from "next/server";
import { getPostSlugs } from "@/lib/getPostSlugs";

const generateSiteMap = (posts: string[]) => {
  const siteUrl = "https://junghyeon-dev.vercel.app";
  const urls = posts.map((slug) => `${siteUrl}/blog/${slug}`);

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map((url) => {
      return `
      <url>
        <loc>${url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>
    `;
    })
    .join("")}
</urlset>`;
};

export async function GET(req: NextRequest) {
  const postSlugs = getPostSlugs();
  const sitemap = generateSiteMap(postSlugs);

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

import { NextResponse } from "next/server";

const SKIN = "https://skin.fitlabreviews.com";

const pages = [
  { path: "/",                    priority: "1.0", changefreq: "weekly"  },
  { path: "/guides",              priority: "0.9", changefreq: "weekly"  },
  { path: "/conditions",          priority: "0.9", changefreq: "weekly"  },
  { path: "/routines",            priority: "0.9", changefreq: "weekly"  },
  { path: "/ingredients",         priority: "0.9", changefreq: "weekly"  },
  { path: "/about",               priority: "0.6", changefreq: "monthly" },
  { path: "/methodology",         priority: "0.6", changefreq: "monthly" },
  { path: "/editorial-policy",    priority: "0.6", changefreq: "monthly" },
  { path: "/medical-disclaimer",  priority: "0.5", changefreq: "yearly"  },
  { path: "/affiliate-disclosure",priority: "0.5", changefreq: "yearly"  },
];

export function GET() {
  const today = new Date().toISOString().split("T")[0];

  const urls = pages.map(({ path, priority, changefreq }) => `  <url>
    <loc>${SKIN}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}

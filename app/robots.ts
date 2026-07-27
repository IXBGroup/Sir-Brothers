import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://ixbgroup.github.io/Sir-Brothers/sitemap.xml" }; }

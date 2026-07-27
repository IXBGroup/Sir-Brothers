import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://sir-brothers-llc.roadie-frodie.chatgpt.site/sitemap.xml" }; }

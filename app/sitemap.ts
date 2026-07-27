import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: "https://ixbgroup.github.io/Sir-Brothers/", lastModified: new Date(), changeFrequency: "monthly", priority: 1 }]; }

import type { MetadataRoute } from "next";
import { IS_LIVE_SITE, SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // Test copies of the site: ask Google not to list anything
  if (!IS_LIVE_SITE) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
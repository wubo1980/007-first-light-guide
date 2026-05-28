import type { MetadataRoute } from "next";

import { siteMeta } from "@/data/site-meta";

/**
 * 生成 robots 配置，允许索引站点公开页面。
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteMeta.baseUrl}/sitemap.xml`,
    host: siteMeta.baseUrl,
  };
}

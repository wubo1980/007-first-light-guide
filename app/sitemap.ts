import type { MetadataRoute } from "next";

import { getAllGuides } from "@/lib/guides";
import { siteMeta } from "@/data/site-meta";

/**
 * 生成站点 sitemap，覆盖首页、栏目页和全部攻略详情页。
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/guides", "/gadgets", "/missions", "/tacsim", "/about"];

  return [
    ...staticRoutes.map((path) => ({
      url: `${siteMeta.baseUrl}${path || "/"}`,
      lastModified: new Date("2026-05-28"),
    })),
    ...getAllGuides().map((article) => ({
      url: `${siteMeta.baseUrl}/guides/${article.slug}`,
      lastModified: new Date(article.publishedAt),
    })),
  ];
}

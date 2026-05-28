import { guides, type GuideArticle, type GuideCategory } from "@/data/guides";

/**
 * 返回全部攻略文章，并按发布日期从新到旧排序。
 */
export function getAllGuides(): GuideArticle[] {
  return [...guides].sort((left, right) =>
    right.publishedAt.localeCompare(left.publishedAt),
  );
}

/**
 * 根据文章 slug 查找对应攻略，用于详情页和元信息生成。
 */
export function getGuideBySlug(slug: string): GuideArticle | undefined {
  return guides.find((article) => article.slug === slug);
}

/**
 * 返回精选文章列表，用于首页最新内容区域展示。
 */
export function getFeaturedGuides(limit = 4): GuideArticle[] {
  return getAllGuides()
    .filter((article) => article.featured)
    .slice(0, limit);
}

/**
 * 按分类获取文章，用于栏目页聚合展示。
 */
export function getGuidesByCategory(category: GuideCategory): GuideArticle[] {
  return getAllGuides().filter((article) => article.category === category);
}

/**
 * 根据文章关联配置返回推荐阅读内容。
 */
export function getRelatedGuides(slug: string, limit = 3): GuideArticle[] {
  const article = getGuideBySlug(slug);

  if (!article) {
    return [];
  }

  return article.relatedSlugs
    .map((relatedSlug) => getGuideBySlug(relatedSlug))
    .filter((item): item is GuideArticle => Boolean(item))
    .slice(0, limit);
}

export type { GuideArticle, GuideCategory };

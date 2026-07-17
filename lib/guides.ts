import { getIndex, getGuideBySlug as readerGetGuide, getCategories } from "@/lib/content-reader";
import type { GuideArticle, GuideCategory } from "@/data/guides";

/**
 * 返回全部攻略文章，并按发布日期从新到旧排序。
 */
export async function getAllGuides(): Promise<GuideArticle[]> {
  const index = await getIndex();
  const guides = await Promise.all(
    index.articles.map((entry: any) => readerGetGuide(entry.slug))
  );
  return guides
    .filter((g): g is GuideArticle => g !== null)
    .sort((left, right) => right.publishedAt.localeCompare(left.publishedAt));
}

/**
 * 根据文章 slug 查找对应攻略，用于详情页和元信息生成。
 */
export async function getGuideBySlug(slug: string): Promise<GuideArticle | undefined> {
  return (await readerGetGuide(slug)) ?? undefined;
}

/**
 * 返回精选文章列表，用于首页最新内容区域展示。
 */
export async function getFeaturedGuides(limit = 4): Promise<GuideArticle[]> {
  const all = await getAllGuides();
  return all.filter((article) => article.featured).slice(0, limit);
}

/**
 * 按分类获取文章，用于栏目页聚合展示。
 */
export async function getGuidesByCategory(category: GuideCategory): Promise<GuideArticle[]> {
  const all = await getAllGuides();
  return all.filter((article) => article.category === category);
}

/**
 * 根据文章关联配置返回推荐阅读内容。
 */
export async function getRelatedGuides(slug: string, limit = 3): Promise<GuideArticle[]> {
  const article = await readerGetGuide(slug);
  if (!article) return [];

  return (await Promise.all(
    article.relatedSlugs.map((relatedSlug: string) => readerGetGuide(relatedSlug))
  )).filter((item): item is GuideArticle => Boolean(item)).slice(0, limit);
}

export type { GuideArticle, GuideCategory };

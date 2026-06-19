import test from "node:test";
import assert from "node:assert/strict";

import { getAllGuides, getFeaturedGuides, getGuideBySlug, getRelatedGuides } from "@/lib/guides";

/**
 * 验证全部攻略列表可返回首发内容集合。
 */
test("getAllGuides returns the launch article set", () => {
  const articles = getAllGuides();

  assert.equal(articles.length, 7);
  assert.ok(articles.some((article) => article.slug === "new-agent-briefing"));
});

/**
 * 验证 slug 查询能够命中具体文章。
 */
test("getGuideBySlug finds a known guide", () => {
  const article = getGuideBySlug("tacsim-mode-guide");

  assert.ok(article);
  assert.equal(article?.title, "TacSim Mode Guide");
});

/**
 * 验证精选列表会返回被标记为 featured 的文章。
 */
test("getFeaturedGuides only returns featured guides", () => {
  const featured = getFeaturedGuides(5);

  assert.ok(featured.length > 0);
  assert.ok(featured.every((article) => article.featured));
});

/**
 * 验证相关文章查询会返回与当前文章关联的推荐内容。
 */
test("getRelatedGuides returns linked articles for a known slug", () => {
  const related = getRelatedGuides("mission-1-walkthrough");

  assert.ok(related.length > 0);
  assert.ok(related.every((article) => article.slug !== "mission-1-walkthrough"));
});

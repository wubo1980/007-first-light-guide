import type { FAQPage, VideoGame, WithContext } from "schema-dts";

import type { GuideArticle } from "@/data/guides";
import { siteMeta } from "@/data/site-meta";

/**
 * 生成首页使用的 Game 结构化数据，突出游戏与站点的内容定位。
 */
export function buildGameSchema(): WithContext<VideoGame> {
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: siteMeta.game.title,
    description: siteMeta.description,
    datePublished: siteMeta.game.releaseDate,
    author: {
      "@type": "Organization",
      name: siteMeta.game.developer,
    },
    gamePlatform: siteMeta.game.platforms,
    genre: ["Stealth", "Action", "Tactical"],
    publisher: {
      "@type": "Organization",
      name: siteMeta.game.developer,
    },
    url: siteMeta.baseUrl,
  };
}

/**
 * 根据文章 FAQ 内容生成 FAQPage 结构化数据，没有 FAQ 时返回 null。
 */
export function buildArticleFaqSchema(
  article: GuideArticle,
): WithContext<FAQPage> | null {
  if (!article.faq || article.faq.length === 0) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

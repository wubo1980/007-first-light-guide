import Link from "next/link";

import type { GuideArticle } from "@/data/guides";
import { TagBadge } from "@/components/ui/tag-badge";

interface GuideCardProps {
  article: GuideArticle;
  priority?: boolean;
}

/**
 * 渲染攻略卡片，统一列表页与首页文章展示样式。
 */
export function GuideCard({ article, priority = false }: GuideCardProps) {
  return (
    <Link
      href={`/guides/${article.slug}`}
      className={`group flex h-full flex-col justify-between rounded-[28px] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-gold)]/60 hover:bg-white/[0.07] ${priority ? "shadow-[0_24px_70px_rgba(0,0,0,0.35)]" : ""}`}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-3 text-[11px] uppercase tracking-[0.22em] text-white/45">
          <TagBadge>{article.category}</TagBadge>
          <span>{article.readTime}</span>
        </div>
        <div className="space-y-3">
          <h3 className="font-display text-2xl text-white transition group-hover:text-[var(--color-gold)]">
            {article.title}
          </h3>
          <p className="text-sm leading-7 text-white/68">{article.excerpt}</p>
        </div>
      </div>
      <div className="mt-8 flex items-center justify-between text-sm text-white/55">
        <span>{article.publishedAt}</span>
        <span className="text-[var(--color-gold)]">Read dossier</span>
      </div>
    </Link>
  );
}

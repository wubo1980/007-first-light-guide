import Link from "next/link";

import { GuideCard } from "@/components/ui/guide-card";
import { SectionHeading } from "@/components/ui/section-heading";
import type { GuideArticle } from "@/data/guides";

interface CategoryOverviewProps {
  eyebrow: string;
  title: string;
  description: string;
  articles: GuideArticle[];
}

/**
 * 渲染栏目聚合页主体，统一分类说明与文章列表样式。
 */
export function CategoryOverview({
  eyebrow,
  title,
  description,
  articles,
}: CategoryOverviewProps) {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-12 px-6 py-14 lg:px-10 lg:py-16">
      <div className="rounded-[32px] border border-white/10 bg-white/[0.035] p-8">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      </div>
      {articles.length > 0 ? (
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <GuideCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="rounded-[32px] border border-dashed border-white/14 bg-white/[0.02] p-10 text-center">
          <h2 className="font-display text-3xl text-white">More briefings are being compiled.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/64">
            This section is mapped in the launch architecture and will expand as more route files are verified.
          </p>
          <Link
            href="/guides"
            className="mt-6 inline-flex rounded-full border border-[var(--color-gold)]/40 px-5 py-3 text-sm text-[var(--color-gold)] transition hover:bg-[var(--color-gold)]/10"
          >
            Browse Current Guides
          </Link>
        </div>
      )}
    </section>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CalloutBox } from "@/components/ui/callout-box";
import { DiscordCta } from "@/components/ui/discord-cta";
import { GuideCard } from "@/components/ui/guide-card";
import { TagBadge } from "@/components/ui/tag-badge";
import { getAllGuides, getGuideBySlug, getRelatedGuides } from "@/lib/guides";
import { buildArticleFaqSchema } from "@/lib/schema";
import { buildMetadata, stringifyJsonLd } from "@/lib/seo";

interface GuideDetailPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * 生成静态参数，确保全部攻略详情页在构建时完成静态产出。
 */
export async function generateStaticParams() {
  const all = await getAllGuides();
  return all.map((article) => ({ slug: article.slug }));
}

/**
 * 为攻略详情页生成动态元信息，注入标题、描述与关键词。
 */
export async function generateMetadata({
  params,
}: GuideDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getGuideBySlug(slug);

  if (!article) {
    return buildMetadata({
      title: "Guide Not Found — 007 First Light Guide",
      description: "The requested guide dossier could not be found.",
      path: "/guides",
    });
  }

  return buildMetadata({
    title: article.seoTitle,
    description: article.metaDescription,
    path: `/guides/${article.slug}`,
    keywords: article.keywords,
  });
}

/**
 * 渲染攻略详情页，展示长文正文、策略提示与相关文章。
 */
export default async function GuideDetailPage({
  params,
}: GuideDetailPageProps) {
  const { slug } = await params;
  const article = await getGuideBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = await getRelatedGuides(article.slug);
  const faqSchema = buildArticleFaqSchema(article);

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-12 lg:px-10 lg:py-16">
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: stringifyJsonLd(faqSchema),
          }}
        />
      ) : null}
      <article className="rounded-[36px] border border-white/10 bg-white/[0.035] p-7 sm:p-10 lg:p-12">
        <header className="space-y-5 border-b border-white/10 pb-8">
          <TagBadge>{article.category}</TagBadge>
          <div className="space-y-4">
            <h1 className="font-display text-4xl text-white sm:text-5xl">
              {article.title}
            </h1>
            <blockquote className="border-l-2 border-[var(--color-gold)] pl-5 text-base leading-8 text-white/72">
              {article.excerpt}
            </blockquote>
            <p className="text-sm uppercase tracking-[0.24em] text-white/45">
              Reading Time: {article.readTime}
            </p>
          </div>
        </header>

        <div className="mt-10 space-y-10">
          {article.sections.map((section) => (
            <section key={section.heading} className="space-y-5">
              <h2 className="font-display text-3xl text-white">
                {section.heading}
              </h2>
              <div className="space-y-4 text-base leading-8 text-white/72">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.quote ? (
                <blockquote className="rounded-[24px] border border-white/10 bg-white/[0.025] p-5 text-base leading-8 text-[var(--color-gold)]">
                  {section.quote}
                </blockquote>
              ) : null}
              {section.callouts?.map((callout) => (
                <CalloutBox
                  key={`${section.heading}-${callout.title}`}
                  title={callout.title}
                  content={callout.content}
                  tone={callout.tone}
                />
              ))}
              {section.tips ? (
                <div className="rounded-[24px] border border-white/10 bg-[rgba(255,255,255,0.025)] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
                    Field Notes
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-white/72">
                    {section.tips.map((tip) => (
                      <li key={tip}>- {tip}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </section>
          ))}
        </div>
      </article>

      {relatedArticles.length > 0 ? (
        <section className="space-y-6">
          <h2 className="font-display text-3xl text-white">Related Guides</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {relatedArticles.map((relatedArticle) => (
              <GuideCard key={relatedArticle.slug} article={relatedArticle} />
            ))}
          </div>
        </section>
      ) : null}

      <DiscordCta />
    </div>
  );
}

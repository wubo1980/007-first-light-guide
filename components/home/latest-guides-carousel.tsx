import { GuideCard } from "@/components/ui/guide-card";
import { SectionHeading } from "@/components/ui/section-heading";
import type { GuideArticle } from "@/data/guides";

interface LatestGuidesCarouselProps {
  articles: GuideArticle[];
}

/**
 * 渲染首页最新文章横向卡片区，强调首发精选攻略内容。
 */
export function LatestGuidesCarousel({ articles }: LatestGuidesCarouselProps) {
  return (
    <section className="space-y-10">
      <SectionHeading
        eyebrow="Latest Dossiers"
        title="Fresh Briefings From The Archive"
        description="A launch lineup built around route quality, gadget control, and early TacSim scoring discipline."
      />
      <div className="flex snap-x gap-5 overflow-x-auto pb-2 [scrollbar-color:rgba(212,168,67,0.6)_transparent] [scrollbar-width:thin]">
        {articles.map((article, index) => (
          <div key={article.slug} className="min-w-[320px] flex-1 snap-start md:min-w-[380px]">
            <GuideCard article={article} priority={index === 0} />
          </div>
        ))}
      </div>
    </section>
  );
}

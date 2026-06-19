import { DiscordCta } from "@/components/ui/discord-cta";
import { FeatureGrid } from "@/components/home/feature-grid";
import { GameInfoPanel } from "@/components/home/game-info-panel";
import { HeroSection } from "@/components/home/hero-section";
import { LatestGuidesCarousel } from "@/components/home/latest-guides-carousel";
import { getFeaturedGuides } from "@/lib/guides";
import { buildGameSchema } from "@/lib/schema";
import { stringifyJsonLd } from "@/lib/seo";

/**
 * 渲染首页，聚合品牌表达、内容入口、最新文章与社区引流模块。
 */
export default function Home() {
  const featuredGuides = getFeaturedGuides(5);
  const gameSchema = buildGameSchema();

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-6 py-10 lg:px-10 lg:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: stringifyJsonLd(gameSchema),
        }}
      />
      <HeroSection />
      <FeatureGrid />
      <LatestGuidesCarousel articles={featuredGuides} />
      <GameInfoPanel />
      <DiscordCta />
    </div>
  );
}

import type { Metadata } from "next";

import { CategoryOverview } from "@/components/ui/category-overview";
import { DiscordCta } from "@/components/ui/discord-cta";
import { getGuidesByCategory } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "TacSim — 007 First Light Guide",
  description:
    "Study Tactical Simulation scoring, build logic, and leaderboard routing principles for 007 First Light.",
  path: "/tacsim",
  keywords: ["TacSim", "007 First Light leaderboard", "scoring guide"],
});

/**
 * 渲染 TacSim 栏目页，聚合与战术模拟和冲榜相关的内容。
 */
export default function TacSimPage() {
  const articles = getGuidesByCategory("tacsim");

  return (
    <div className="space-y-12">
      <CategoryOverview
        eyebrow="TacSim Desk"
        title="Scoring Theory, Repeatable Splits, And Leaderboard Pressure"
        description="These dossiers are built for players chasing cleaner resets, better route compression, and stronger simulation scores."
        articles={articles}
      />
      <div className="mx-auto mb-16 w-full max-w-7xl px-6 lg:px-10">
        <DiscordCta />
      </div>
    </div>
  );
}

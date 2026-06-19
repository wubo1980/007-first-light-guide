import type { Metadata } from "next";

import { CategoryOverview } from "@/components/ui/category-overview";
import { DiscordCta } from "@/components/ui/discord-cta";
import { getGuidesByCategory } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Missions — 007 First Light Guide",
  description:
    "Browse mission walkthroughs, routing files, and S-Rank pathing breakdowns for the opening operations in 007 First Light.",
  path: "/missions",
  keywords: ["007 First Light missions", "mission walkthrough", "S-Rank routes"],
});

/**
 * 渲染任务栏目页，聚合与 mission route 相关的攻略内容。
 */
export default function MissionsPage() {
  const articles = getGuidesByCategory("missions");

  return (
    <div className="space-y-12">
      <CategoryOverview
        eyebrow="Mission Files"
        title="Route Logic, Collectible Lines, And S-Rank Execution"
        description="Mission pages focus on repeatable infiltration paths, collectible timing, and the score-safe decisions that hold up over many clears."
        articles={articles}
      />
      <div className="mx-auto mb-16 w-full max-w-7xl px-6 lg:px-10">
        <DiscordCta />
      </div>
    </div>
  );
}

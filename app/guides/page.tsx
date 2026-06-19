import type { Metadata } from "next";

import { CategoryOverview } from "@/components/ui/category-overview";
import { DiscordCta } from "@/components/ui/discord-cta";
import { getAllGuides } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Guides — 007 First Light Guide",
  description:
    "Browse all launch guides for 007 First Light, including beginner briefings, mission walkthroughs, gadget builds, and TacSim strategy files.",
  path: "/guides",
  keywords: ["007 First Light guides", "mission walkthroughs", "tacsim guide"],
});

/**
 * 渲染全部攻略列表页，展示首批全部内容入口。
 */
export default function GuidesPage() {
  const articles = getAllGuides();

  return (
    <div className="space-y-12">
      <CategoryOverview
        eyebrow="All Briefings"
        title="Every Launch Dossier In One Place"
        description="From entry-level fieldcraft to leaderboard strategy, this archive is organized around the decisions hardcore stealth players actually care about."
        articles={articles}
      />
      <div className="mx-auto mb-16 w-full max-w-7xl px-6 lg:px-10">
        <DiscordCta />
      </div>
    </div>
  );
}

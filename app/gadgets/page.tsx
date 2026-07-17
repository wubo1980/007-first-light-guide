import type { Metadata } from "next";

import { CategoryOverview } from "@/components/ui/category-overview";
import { DiscordCta } from "@/components/ui/discord-cta";
import { getGuidesByCategory } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Gadgets — 007 First Light Guide",
  description:
    "Find equipment breakdowns, unlock priorities, and beginner-to-advanced loadout advice for 007 First Light.",
  path: "/gadgets",
  keywords: ["007 First Light gadgets", "best loadout", "equipment guide"],
});

/**
 * 渲染装备栏目页，聚合与 gadget 和 loadout 相关的攻略内容。
 */
export default async function GadgetsPage() {
  const articles = await getGuidesByCategory("gadgets");

  return (
    <div className="space-y-12">
      <CategoryOverview
        eyebrow="Gadget Desk"
        title="Loadout Theory, Unlock Order, And Practical Equipment Chains"
        description="These files focus on tools that create room control: surveillance answers, distraction tools, route stabilizers, and early-game builds."
        articles={articles}
      />
      <div className="mx-auto mb-16 w-full max-w-7xl px-6 lg:px-10">
        <DiscordCta />
      </div>
    </div>
  );
}

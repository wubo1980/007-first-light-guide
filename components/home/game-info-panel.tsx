import { siteMeta } from "@/data/site-meta";
import { SectionHeading } from "@/components/ui/section-heading";

const infoRows = [
  { label: "Release Date", value: "May 27, 2026" },
  { label: "Developer", value: siteMeta.game.developer },
  { label: "Platforms", value: siteMeta.game.platforms.join(", ") },
  { label: "Estimated Length", value: siteMeta.game.playtime },
  { label: "Main Missions", value: String(siteMeta.game.missionCount) },
] as const;

/**
 * 渲染首页游戏基础信息面板，补充官方维度的基础资料。
 */
export function GameInfoPanel() {
  return (
    <section className="grid gap-8 rounded-[32px] border border-white/10 bg-white/[0.035] p-8 lg:grid-cols-[0.8fr_1.2fr]">
      <SectionHeading
        eyebrow="Game Snapshot"
        title="The Mission File At A Glance"
        description="Key release facts for players who want the strategic context before diving into route work."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {infoRows.map((row) => (
          <div key={row.label} className="rounded-[24px] border border-white/10 bg-[rgba(255,255,255,0.025)] p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-white/45">{row.label}</p>
            <p className="mt-3 font-display text-2xl text-white">{row.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

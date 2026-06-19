import type { Metadata } from "next";
import Link from "next/link";

import { buildMetadata } from "@/lib/seo";
import { siteMeta } from "@/data/site-meta";

export const metadata: Metadata = buildMetadata({
  title: "About — 007 First Light Guide",
  description:
    "Learn what this unofficial 007 First Light fan strategy site covers, how the content is built, and where to join the community discussion.",
  path: "/about",
  keywords: ["about 007 First Light Guide", "fan site", "stealth community"],
});

/**
 * 渲染关于页，说明站点定位、方法论与免责声明。
 */
export default function AboutPage() {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-12 lg:px-10 lg:py-16">
      <div className="rounded-[36px] border border-white/10 bg-white/[0.035] p-8 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-gold)]">About This Site</p>
        <h1 className="mt-4 font-display text-5xl text-white">An unofficial archive for players who want cleaner, smarter clears.</h1>
        <div className="mt-6 space-y-5 text-base leading-8 text-white/72">
          <p>
            007 First Light Guide is a fan-built strategy site focused on high-signal content for stealth-minded players. Instead of broad beginner summaries, the archive prioritizes route logic, gadget pairings, score optimization, and mission-specific execution details.
          </p>
          <p>
            The launch content is organized around the needs of players who care about S-Rank consistency, efficient mission flow, and TacSim improvement. Every page is written to emphasize repeatable decisions over generic walkthrough filler.
          </p>
          <p>
            This is an unofficial fan site based on community discussion, practical route testing, and strategy verification. It is not sponsored by, endorsed by, or officially affiliated with IO Interactive or any related company.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
          <h2 className="font-display text-3xl text-white">What We Cover</h2>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-white/68">
            <li>- S-Rank stealth routes and mission timing windows</li>
            <li>- Gadget unlock logic and mission-specific loadout ideas</li>
            <li>- TacSim scoring discipline and leaderboard practice methods</li>
            <li>- Beginner mistake correction built for long-term improvement</li>
          </ul>
        </div>
        <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
          <h2 className="font-display text-3xl text-white">Join The Discussion</h2>
          <p className="mt-5 text-sm leading-7 text-white/68">
            Compare notes, share route clips, and trade loadout ideas with the wider stealth community.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href={siteMeta.discordUrl} target="_blank" rel="noreferrer" className="rounded-full border border-[var(--color-gold)] bg-[var(--color-gold)] px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:brightness-110">
              Join Discord
            </Link>
            <Link href={siteMeta.redditLinks[1]} target="_blank" rel="noreferrer" className="rounded-full border border-white/14 px-5 py-3 text-sm text-white/80 transition hover:border-white/28 hover:bg-white/6">
              /r/stealthgames
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

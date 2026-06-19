import Link from "next/link";

import { siteMeta } from "@/data/site-meta";

/**
 * 渲染社区转化模块，统一首页和文章页底部的引流入口。
 */
export function DiscordCta() {
  return (
    <section className="rounded-[32px] border border-[var(--color-gold)]/25 bg-[linear-gradient(135deg,rgba(212,168,67,0.12),rgba(10,13,20,0.92))] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-gold)]">Community Intel</p>
        <h3 className="font-display text-3xl text-white">Join The First Light Field Office</h3>
        <p className="max-w-2xl text-sm leading-7 text-white/72">
          Drop your S-Rank route clips, compare TacSim splits, and share mission discoveries with other stealth-focused players.
        </p>
      </div>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href={siteMeta.discordUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[var(--color-gold)] bg-[var(--color-gold)] px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:brightness-110"
        >
          Join Discord
        </Link>
        <Link
          href={siteMeta.redditLinks[0]}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/14 px-5 py-3 text-sm text-white/80 transition hover:border-white/28 hover:bg-white/6"
        >
          Discuss On Reddit
        </Link>
      </div>
    </section>
  );
}

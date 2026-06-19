import Link from "next/link";
import { ArrowRight, Crosshair, Radar, ShieldCheck } from "lucide-react";

import { siteMeta } from "@/data/site-meta";

/**
 * 渲染首页 Hero 区域，突出品牌、价值主张和关键入口。
 */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(212,168,67,0.16),transparent_32%),linear-gradient(160deg,rgba(16,20,31,0.98),rgba(6,8,14,0.92))] px-6 py-16 shadow-[0_40px_100px_rgba(0,0,0,0.38)] sm:px-10 lg:px-14">
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(212,168,67,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(212,168,67,0.08)_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="relative grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-[var(--color-gold)]/30 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[var(--color-gold)]">
            <ShieldCheck className="size-4" />
            Classified Strategy Archive
          </div>
          <div className="space-y-5">
            <h1 className="max-w-4xl font-display text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
              {siteMeta.slogan}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-white/72 sm:text-lg">
              {siteMeta.heroSubtitle}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)] bg-[var(--color-gold)] px-6 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:translate-y-[-1px] hover:brightness-110"
            >
              View All Guides
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/tacsim"
              className="inline-flex items-center gap-2 rounded-full border border-white/14 px-6 py-3 text-sm text-white/80 transition hover:border-white/30 hover:bg-white/8"
            >
              TacSim Intel
              <Radar className="size-4" />
            </Link>
          </div>
        </div>
        <div className="grid gap-4 text-sm text-white/72">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
            <div className="flex items-center gap-3 text-[var(--color-gold)]">
              <Crosshair className="size-4" />
              <span className="text-xs uppercase tracking-[0.28em]">Hardcore Focus</span>
            </div>
            <p className="mt-4 leading-7">S-Rank route building, gadget combinations, boss solutions, and leaderboard-grade TacSim strategy.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-white/45">Release Date</p>
              <p className="mt-3 font-display text-2xl text-white">May 27, 2026</p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-white/45">Primary Platforms</p>
              <p className="mt-3 text-base text-white">PC, PS5, Xbox Series X|S</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

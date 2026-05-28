import Link from "next/link";

import { navigationItems } from "@/data/navigation";
import { siteMeta } from "@/data/site-meta";

/**
 * 渲染站点页脚，补充声明、社区链接和全站导航。
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-[rgba(6,8,14,0.96)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-10">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-gold)]">About This Archive</p>
          <h2 className="font-display text-2xl text-white">A fan-built strategy desk for players chasing clean runs.</h2>
          <p className="max-w-xl text-sm leading-7 text-white/65">
            This is an unofficial fan site built from player community research, route testing, and repeatable strategy analysis. It is not endorsed by or sponsored by IO Interactive.
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-sm font-semibold text-white">Navigation</p>
          <div className="flex flex-col gap-3 text-sm text-white/65">
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-[var(--color-gold)]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-sm font-semibold text-white">Community Links</p>
          <div className="flex flex-col gap-3 text-sm text-white/65">
            <Link href={siteMeta.discordUrl} target="_blank" rel="noreferrer" className="transition hover:text-[var(--color-gold)]">
              Discord Invite
            </Link>
            {siteMeta.redditLinks.map((link) => (
              <Link key={link} href={link} target="_blank" rel="noreferrer" className="transition hover:text-[var(--color-gold)]">
                {link.includes("JamesBond") ? "/r/JamesBond" : "/r/stealthgames"}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/8 px-6 py-5 text-center text-xs uppercase tracking-[0.22em] text-white/38">
        Copyright © 2026 {siteMeta.name}. All gameplay analysis remains unofficial and community-driven.
      </div>
    </footer>
  );
}

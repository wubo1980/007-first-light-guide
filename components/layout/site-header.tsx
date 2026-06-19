import Link from "next/link";
import { Menu, Shield } from "lucide-react";

import { navigationItems } from "@/data/navigation";

/**
 * 渲染全站头部导航，提供主要栏目入口与品牌标识。
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/8 bg-[rgba(10,13,20,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-3 text-white">
          <span className="flex size-11 items-center justify-center rounded-full border border-[var(--color-gold)]/35 bg-white/6 text-[var(--color-gold)]">
            <Shield className="size-5" />
          </span>
          <span>
            <span className="block text-xs uppercase tracking-[0.34em] text-white/45">MI6 Field Archive</span>
            <span className="font-display text-xl">007 First Light Guide</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-white/75 lg:flex">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[var(--color-gold)]">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/guides"
            className="hidden rounded-full border border-[var(--color-gold)]/40 px-4 py-2 text-sm text-[var(--color-gold)] transition hover:bg-[var(--color-gold)]/10 sm:inline-flex"
          >
            View All Guides
          </Link>
          <button
            type="button"
            aria-label="Open navigation"
            className="inline-flex rounded-full border border-white/10 p-3 text-white/80 lg:hidden"
          >
            <Menu className="size-4" />
          </button>
        </div>
      </div>
    </header>
  );
}

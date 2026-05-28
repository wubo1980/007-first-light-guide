import Link from "next/link";
import { BookOpen, BriefcaseBusiness, Cpu, Trophy } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";

const features = [
  {
    title: "New Agent Briefing",
    description: "Controls, detection logic, Q Lens flow, and the mission-reading habits that make every later route easier.",
    href: "/guides/new-agent-briefing",
    icon: BookOpen,
  },
  {
    title: "Mission Walkthroughs",
    description: "Room-by-room routes focused on S-Rank pace, hidden collectibles, and the safest objective lines.",
    href: "/missions",
    icon: BriefcaseBusiness,
  },
  {
    title: "Gadgets & Loadouts",
    description: "Unlock priorities, practical equipment pairings, and beginner-to-advanced build guidance.",
    href: "/gadgets",
    icon: Cpu,
  },
  {
    title: "Tactical Simulation",
    description: "TacSim scoring theory, repeatable route compression, and leaderboard-ready practice structure.",
    href: "/tacsim",
    icon: Trophy,
  },
] as const;

/**
 * 渲染首页核心能力板块，快速介绍站点的四条主内容线。
 */
export function FeatureGrid() {
  return (
    <section className="space-y-10">
      <SectionHeading
        eyebrow="Core Briefings"
        title="Built For Players Who Want The Best Route, Not Just A Route"
        description="The first release focuses on high-value strategy layers that broader beginner wikis usually flatten or skip."
      />
      <div className="grid gap-5 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <Link
              key={feature.title}
              href={feature.href}
              className="group rounded-[28px] border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-gold)]/45 hover:bg-white/[0.06]"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl border border-[var(--color-gold)]/30 bg-[rgba(212,168,67,0.08)] text-[var(--color-gold)]">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-6 font-display text-2xl text-white transition group-hover:text-[var(--color-gold)]">
                {feature.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/65">{feature.description}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

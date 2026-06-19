import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  actions?: ReactNode;
}

/**
 * 渲染统一的区块标题，复用在首页和栏目页的标题区域。
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  actions,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-gold)]">
          {eyebrow}
        </span>
      ) : null}
      <div className="space-y-3">
        <h2 className="font-display text-3xl text-white sm:text-4xl">{title}</h2>
        {description ? (
          <p className="max-w-2xl text-sm leading-7 text-white/70 sm:text-base">{description}</p>
        ) : null}
      </div>
      {actions}
    </div>
  );
}

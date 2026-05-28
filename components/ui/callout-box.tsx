interface CalloutBoxProps {
  title: string;
  content: string;
  tone: "info" | "warning" | "success";
}

const toneMap = {
  info: "border-[var(--color-gold)]/40 bg-[rgba(212,168,67,0.08)]",
  warning: "border-amber-300/30 bg-amber-200/8",
  success: "border-emerald-300/30 bg-emerald-200/8",
} as const;

/**
 * 渲染文章中的策略提示框，突出关键操作和风险提示。
 */
export function CalloutBox({ title, content, tone }: CalloutBoxProps) {
  return (
    <aside className={`rounded-[24px] border p-5 ${toneMap[tone]}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">{title}</p>
      <p className="mt-3 text-sm leading-7 text-white/78">{content}</p>
    </aside>
  );
}

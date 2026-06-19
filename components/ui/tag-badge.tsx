interface TagBadgeProps {
  children: string;
}

/**
 * 渲染统一的分类标签样式，用于文章卡片和详情页头部。
 */
export function TagBadge({ children }: TagBadgeProps) {
  return (
    <span className="inline-flex rounded-full border border-white/12 bg-white/6 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-[var(--color-cream)]">
      {children}
    </span>
  );
}

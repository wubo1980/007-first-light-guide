"use client";

import { useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * CardSpotlight — Aceternity UI 卡片悬停光效
 * 鼠标移入时在鼠标位置产生渐变光晕。
 */
interface CardSpotlightProps {
  children: ReactNode;
  className?: string;
  /** 光晕颜色，默认 gold */
  glowColor?: string;
  /** 光晕半径 (px)，默认 600 */
  glowRadius?: number;
}

export function CardSpotlight({
  children,
  className,
  glowColor = "rgba(212,168,67,0.12)",
  glowRadius = 600,
}: CardSpotlightProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={cn("relative", className)}
    >
      {/* 光晕层 */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[28px] transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(${glowRadius}px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
}

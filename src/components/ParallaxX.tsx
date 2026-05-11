"use client";

import { useEffect, useRef } from "react";

export function ParallaxX({
  direction = "left",
  range = 244,
  scaleFrom = 1,
  scaleTo = 1.6,
  className = "",
  children,
}: {
  direction?: "left" | "right";
  range?: number;
  scaleFrom?: number;
  scaleTo?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const sign = direction === "left" ? -1 : 1;
    let raf = 0;

    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const center = r.top + r.height / 2;
      const norm = Math.max(0, Math.min(1, 1 - center / vh));
      const tx = sign * range * (norm - 0.5) * 2;
      const sc = scaleFrom + (scaleTo - scaleFrom) * norm;
      el.style.transform = `translate3d(${tx}px, 0, 0) scale(${sc})`;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [direction, range, scaleFrom, scaleTo]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ willChange: "transform", transformOrigin: "center center" }}
    >
      {children}
    </div>
  );
}

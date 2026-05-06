"use client";

import { useEffect, useRef } from "react";

type Variant = "fade-in" | "fade-up";

export function Reveal({
  as: Tag = "div",
  variant = "fade-up",
  className = "",
  children,
}: {
  as?: keyof React.JSX.IntrinsicElements;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Component = Tag as unknown as React.ElementType;
  return (
    <Component
      ref={ref as never}
      className={`reveal ${variant} ${className}`}
    >
      {children}
    </Component>
  );
}

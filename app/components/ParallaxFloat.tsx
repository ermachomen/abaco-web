"use client";

import { useEffect, useRef } from "react";

interface ParallaxFloatProps {
  speed?: number; // 0 = fixed, 1 = normal scroll, 0.3 = slow
  className?: string;
  children: React.ReactNode;
}

export default function ParallaxFloat({
  speed = 0.3,
  className = "",
  children,
}: ParallaxFloatProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const scrollY = window.scrollY;
      el.style.transform = `translateY(${scrollY * speed}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

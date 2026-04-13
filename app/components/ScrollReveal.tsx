"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms, for stagger
  direction?: "up" | "left" | "right" | "zoom";
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const initial: Record<string, string> = {
    up: "opacity-0 translate-y-10 scale-[0.97]",
    left: "opacity-0 -translate-x-10",
    right: "opacity-0 translate-x-10",
    zoom: "opacity-0 scale-95",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0 translate-x-0 scale-100" : initial[direction]
      } ${className}`}
    >
      {children}
    </div>
  );
}

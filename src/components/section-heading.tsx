"use client";

import { useEffect, useRef } from "react";

interface SectionHeadingProps {
  badge: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-8");
        }
      },
      { threshold: 0.2 }
    );

    el.classList.add("opacity-0", "translate-y-8");
    el.style.transition = "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)";
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <span className="inline-block text-xs tracking-[0.25em] uppercase text-[#c8a44e] font-medium mb-3">
        {badge}
      </span>
      <h2
        className={`font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4 ${
          light ? "text-[#f5f5f0]" : "text-[#f5f5f0]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className="text-[#a0a0a0] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

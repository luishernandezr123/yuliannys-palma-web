"use client";

import { useEffect, useRef } from "react";

export default function ScrollIndicator() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      if (window.scrollY > 100) {
        el.style.opacity = "0";
      } else {
        el.style.opacity = "1";
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToServices = () => {
    const target = document.querySelector("#servicios");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={ref}
      onClick={scrollToServices}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer transition-opacity duration-500 z-10"
    >
      <span className="text-[10px] tracking-[0.3em] uppercase text-[#6b6b6b]">
        Descubre más
      </span>
      <div className="w-5 h-8 rounded-full border border-[#c8a44e]/30 flex items-start justify-center p-1">
        <div className="w-1 h-2 rounded-full bg-[#c8a44e] animate-bounce" />
      </div>
    </div>
  );
}

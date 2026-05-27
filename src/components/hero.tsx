"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import ParticlesBackground from "./particles";
import ScrollIndicator from "./scroll-indicator";

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    try {
      if (typeof window !== "undefined") {
        const loadGSAP = async () => {
          const gsap = (await import("gsap")).default;
          const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
          gsap.registerPlugin(ScrollTrigger);

          const ctx = gsap.context(() => {
            // Stagger fade up for children
            gsap.fromTo(
              ".hero-child",
              { opacity: 0, y: 40 },
              {
                opacity: 1,
                y: 0,
                duration: 0.9,
                stagger: 0.15,
                ease: "power3.out",
                delay: 0.3,
              }
            );

            // Badge animation
            gsap.fromTo(
              ".hero-badge",
              { opacity: 0, scale: 0.8 },
              {
                opacity: 1,
                scale: 1,
                duration: 0.7,
                ease: "back.out(1.7)",
                delay: 0.1,
              }
            );
          }, el);

          return () => ctx.revert();
        };

        loadGSAP();
      }
    } catch (e) {
      // Graceful degradation if GSAP fails
      console.warn("GSAP not available, using CSS fallback");
      const children = el.querySelectorAll(".hero-child");
      children.forEach((child, i) => {
        (child as HTMLElement).style.opacity = "1";
        (child as HTMLElement).style.transform = "translateY(0)";
        (child as HTMLElement).style.transitionDelay = `${i * 0.15}s`;
      });
    }
  }, []);

  const scrollToContact = () => {
    const target = document.querySelector("#contacto");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const target = document.querySelector("#servicios");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particles Background */}
      <ParticlesBackground />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(200,164,78,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20"
      >
        {/* Badge */}
        <div className="hero-child hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c8a44e]/20 bg-[#c8a44e]/5 mb-8 opacity-0">
          <Sparkles className="w-3.5 h-3.5 text-[#c8a44e]" />
          <span className="text-xs tracking-[0.2em] uppercase text-[#c8a44e] font-medium">
            Odontología Estética
          </span>
        </div>

        {/* Headline */}
        <h1 className="hero-child font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] text-[#f5f5f0] mb-6 opacity-0 max-w-4xl mx-auto">
          La sonrisa que{" "}
          <span className="text-gradient-gold">siempre soñaste</span>{" "}
          está más cerca de lo que crees
        </h1>

        {/* Subheadline */}
        <p className="hero-child text-base sm:text-lg md:text-xl text-[#a0a0a0] max-w-2xl mx-auto mb-10 leading-relaxed opacity-0">
          Diseño de sonrisa personalizado con carillas en cerámica y resina de la
          más alta calidad. Dirigido por la Dra. Yuliannys Palma, especialista en
          estética dental.
        </p>

        {/* CTAs */}
        <div className="hero-child flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0">
          <button
            onClick={scrollToContact}
            className="group w-full sm:w-auto px-8 py-4 bg-[#c8a44e] text-[#0a0a0a] font-semibold rounded-lg hover:bg-[#d4b86a] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#c8a44e]/20 hover:shadow-[#c8a44e]/30 hover:-translate-y-0.5"
          >
            Agenda tu consulta
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={scrollToServices}
            className="w-full sm:w-auto px-8 py-4 border border-[#c8a44e]/20 text-[#f5f5f0] font-medium rounded-lg hover:bg-white/[0.03] hover:border-[#c8a44e]/40 transition-all duration-300"
          >
            Ver servicios
          </button>
        </div>

        {/* Stats row */}
        <div className="hero-child flex flex-wrap items-center justify-center gap-8 sm:gap-12 mt-16 opacity-0">
          {[
            { value: "+8", label: "Años de experiencia" },
            { value: "+1,000", label: "Casos realizados" },
            { value: "+800", label: "Pacientes satisfechos" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#c8a44e] font-heading">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-[#6b6b6b] mt-1 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}

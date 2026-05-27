"use client";

import { useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";
import SectionHeading from "./section-heading";

const testimonios = [
  {
    name: "María Gabriela R.",
    treatment: "Carillas en cerámica",
    text: "Nunca pensé que podría sonreír con tanta confianza. La Dra. Yuliannys no solo me devolvió la sonrisa, me devolvió la seguridad en mí misma. El proceso fue impecable de principio a fin.",
    stars: 5,
    initial: "MG",
  },
  {
    name: "Carlos Eduardo M.",
    treatment: "Diseño de sonrisa digital",
    text: "Ver mi nueva sonrisa en el diseño digital antes de empezar el tratamiento me dio una tranquilidad enorme. El resultado superó todas mis expectativas. Recomiendo a la Dra. Palma sin reservas.",
    stars: 5,
    initial: "CM",
  },
  {
    name: "Andrea Valentina S.",
    treatment: "Blanqueamiento + carillas en resina",
    text: "En una sola sesión mi sonrisa cambió completamente. La atención fue cálida y profesional en todo momento. La clínica es impecable y la tecnología que usan es impresionante.",
    stars: 5,
    initial: "AS",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#c8a44e] text-[#c8a44e]" />
      ))}
    </div>
  );
}

export default function Testimonios() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    try {
      const initGSAP = async () => {
        const gsap = (await import("gsap")).default;
        const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
          ".testimonial-card",
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }
        );
      };

      initGSAP();
    } catch (e) {
      // fallback
    }
  }, []);

  return (
    <section
      id="testimonios"
      ref={sectionRef}
      className="section-padding bg-[#0a0a0a] relative"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Testimonios"
          title="Lo que dicen nuestros pacientes"
          description="Historias reales de personas que confiaron en nosotros para transformar su sonrisa."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {testimonios.map((t, i) => (
            <div
              key={i}
              className="testimonial-card glass-card rounded-xl p-6 md:p-8 flex flex-col"
              style={{ opacity: 1 }}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-[#c8a44e]/20 mb-4" />

              {/* Stars */}
              <StarRating count={t.stars} />

              {/* Text */}
              <p className="text-[#a0a0a0] text-sm md:text-base leading-relaxed mt-4 flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-[#c8a44e]/8">
                <div className="w-10 h-10 rounded-full bg-[#c8a44e]/10 border border-[#c8a44e]/15 flex items-center justify-center">
                  <span className="text-sm font-semibold text-[#c8a44e]">
                    {t.initial}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#f5f5f0]">
                    {t.name}
                  </div>
                  <div className="text-xs text-[#6b6b6b]">{t.treatment}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

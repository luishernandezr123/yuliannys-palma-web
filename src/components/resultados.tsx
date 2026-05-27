"use client";

import { useEffect, useRef } from "react";
import { XCircle, CheckCircle, ArrowRight } from "lucide-react";
import SectionHeading from "./section-heading";

const problems = [
  "Dientes manchados que no responden al blanqueamiento",
  "Forma irregular o desgastada por bruxismo",
  "Diastemas (espacios entre dientes) visibles al sonreír",
  "Sonrisa gingival que muestra demasiada encía",
  "Falta de armonía entre dientes, labios y rostro",
];

const solutions = [
  "Blanqueamiento profesional + carillas ultradelgadas que respetan el esmalte",
  "Reconstrucción con carillas de cerámica E-Max de grosor mínimo",
  "Cierre de espacios con resina de nano-tecnología o carillas estratificadas",
  "Gingivoplastia con láser: indolora, sin sangrado, sin puntos",
  "Digital Smile Design: diseño facial guiado con proporciones áureas",
];

export default function Resultados() {
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
          ".problem-item",
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".problems-column",
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }
        );

        gsap.fromTo(
          ".solution-item",
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".solutions-column",
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
      id="resultados"
      ref={sectionRef}
      className="section-padding bg-[#111111] relative"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Antes y Después"
          title="La diferencia que transforma vidas"
          description="Compara el antes y después de una sonrisa tratada con los más altos estándares estéticos."
        />

        {/* Problem vs Solution Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
          {/* Problems */}
          <div className="problems-column">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <XCircle className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-[#f5f5f0]">
                Sin sonrisa estética
              </h3>
            </div>
            <div className="space-y-3">
              {problems.map((problem, i) => (
                <div
                  key={i}
                  className="problem-item flex items-start gap-3 p-4 rounded-lg bg-white/[0.02] border border-white/[0.03]"
                  style={{ opacity: 1 }}
                >
                  <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base text-[#a0a0a0]">{problem}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="solutions-column">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#c8a44e]/10 border border-[#c8a44e]/20 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-[#c8a44e]" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-[#f5f5f0]">
                Con Yuliannys Palma
              </h3>
            </div>
            <div className="space-y-3">
              {solutions.map((solution, i) => (
                <div
                  key={i}
                  className="solution-item flex items-start gap-3 p-4 rounded-lg bg-[#c8a44e]/[0.02] border border-[#c8a44e]/[0.06]"
                  style={{ opacity: 1 }}
                >
                  <CheckCircle className="w-4 h-4 text-[#c8a44e] mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base text-[#a0a0a0]">{solution}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Placeholder */}
        <div className="text-center">
          <p className="text-[#6b6b6b] text-sm mb-6 italic">
            Galería de casos reales próximamente
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="aspect-[4/3] rounded-xl bg-[#1a1a1a] border border-[#c8a44e]/10 flex items-center justify-center group cursor-pointer hover:border-[#c8a44e]/30 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-[#c8a44e]/10 flex items-center justify-center group-hover:bg-[#c8a44e]/20 transition-colors">
                    <ArrowRight className="w-6 h-6 text-[#c8a44e]" />
                  </div>
                  <span className="text-sm text-[#6b6b6b] group-hover:text-[#c8a44e] transition-colors">
                    Caso {n}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { Award, Users, Sparkles, GraduationCap } from "lucide-react";
import SectionHeading from "./section-heading";

const stats = [
  { icon: Award, value: 8, suffix: "+", label: "Años de experiencia" },
  { icon: Sparkles, value: 1000, suffix: "+", label: "Casos realizados" },
  { icon: Users, value: 800, suffix: "+", label: "Pacientes satisfechos" },
  { icon: GraduationCap, value: 15, suffix: "+", label: "Cursos de especialización" },
];

function AnimatedCounter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const start = performance.now();

          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            setCount(Math.floor(eased * value));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl sm:text-4xl font-bold text-[#c8a44e] font-heading tabular-nums">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-xs sm:text-sm text-[#6b6b6b] mt-1 tracking-wide">
        {label}
      </div>
    </div>
  );
}

export default function DraSection() {
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
          ".dra-image",
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 65%",
              toggleActions: "play none none none",
            },
          }
        );

        gsap.fromTo(
          ".dra-content",
          { opacity: 0, x: 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 65%",
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
      id="dra"
      ref={sectionRef}
      className="section-padding bg-[#111111] relative"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="La Doctora"
          title="Dra. Yuliannys Palma"
          description="Especialista en odontología estética con más de 8 años transformando sonrisas."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center mt-8">
          {/* Photo Placeholder */}
          <div className="dra-image" style={{ opacity: 1 }}>
            <div className="aspect-[3/4] rounded-2xl bg-[#1a1a1a] border border-[#c8a44e]/10 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                <div className="w-20 h-20 rounded-full bg-[#c8a44e]/10 border border-[#c8a44e]/20 flex items-center justify-center mb-4 group-hover:bg-[#c8a44e]/20 transition-colors">
                  <Sparkles className="w-8 h-8 text-[#c8a44e]" />
                </div>
                <span className="text-sm text-[#6b6b6b]">
                  Foto de la Dra.
                </span>
              </div>
              {/* Decorative corners */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[#c8a44e]/20 rounded-tl-lg z-30" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#c8a44e]/20 rounded-tr-lg z-30" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[#c8a44e]/20 rounded-bl-lg z-30" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[#c8a44e]/20 rounded-br-lg z-30" />
            </div>
          </div>

          {/* Bio Content */}
          <div className="dra-content space-y-6" style={{ opacity: 1 }}>
            <div className="space-y-4">
              <p className="text-[#a0a0a0] leading-relaxed">
                La Dra. Yuliannys Palma es odontóloga egresada con honores,
                especializada en estética dental y rehabilitación oral. Su
                enfoque combina la precisión técnica con una sensibilidad
                artística excepcional para crear sonrisas que transforman no
                solo rostros, sino vidas.
              </p>
              <p className="text-[#a0a0a0] leading-relaxed">
                Con formación continua en los centros de referencia más
                prestigiosos de Latinoamérica, domina las técnicas más avanzadas
                en carillas de cerámica, diseño digital de sonrisa y
                rehabilitación estética mínimamente invasiva.
              </p>
              <p className="text-[#a0a0a0] leading-relaxed">
                Cada paciente recibe un plan de tratamiento completamente
                personalizado, donde la excelencia clínica se une al cuidado
                humano que caracteriza su práctica.
              </p>
            </div>

            {/* Credentials */}
            <div className="flex flex-wrap gap-3">
              {[
                "Odontología Estética",
                "Rehabilitación Oral",
                "DSD Digital Smile Design",
                "Carillas Cerámicas E-Max",
                "Láser Dental",
              ].map((cred) => (
                <span
                  key={cred}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-[#c8a44e]/8 text-[#c8a44e] border border-[#c8a44e]/15"
                >
                  {cred}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-[#c8a44e]/8">
          {stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

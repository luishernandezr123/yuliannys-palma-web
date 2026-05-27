"use client";

import { useEffect, useRef } from "react";
import {
  MessageCircle,
  Monitor,
  Drill,
  Brush,
  Heart,
} from "lucide-react";
import SectionHeading from "./section-heading";

const pasos = [
  {
    step: "01",
    icon: MessageCircle,
    title: "Consulta inicial",
    description:
      "Evaluación completa de tu sonrisa, fotografías clínicas, radiografías digitales y discusión de tus expectativas estéticas.",
    details:
      "Realizamos un análisis facial y dental completo. Escuchamos tus objetivos y te mostramos casos similares para alinear expectativas.",
  },
  {
    step: "02",
    icon: Monitor,
    title: "Diseño digital 3D",
    description:
      "Escaneo intraoral 3D y diseño digital de tu nueva sonrisa con software DSD. Ves el resultado antes de empezar.",
    details:
      "Creamos un mockup virtual y físico para que puedas previsualizar tu nueva sonrisa. Ajustamos cada detalle contigo.",
  },
  {
    step: "03",
    icon: Drill,
    title: "Preparación",
    description:
      "Tallado mínimamente invasivo con lupas de aumento. Preservamos la mayor cantidad de esmalte dental posible.",
    details:
      "Técnica de preparación conservadora: solo retiramos 0.3-0.5mm de esmalte. Colocación de provisionales estéticos inmediatos.",
  },
  {
    step: "04",
    icon: Brush,
    title: "Colocación",
    description:
      "Cementado adhesivo de las carillas con protocolo de aislamiento absoluto. Ajuste oclusal y pulido final.",
    details:
      "Usamos cementos resinosos fotopolimerizables de última generación. Control de color, forma y ajuste bajo microscopio.",
  },
  {
    step: "05",
    icon: Heart,
    title: "Mantenimiento",
    description:
      "Plan de seguimiento personalizado con revisiones periódicas para garantizar la longevidad de tu sonrisa.",
    details:
      "Te entregamos un kit de cuidado, instrucciones personalizadas y programamos controles cada 6 meses. Garantía por escrito.",
  },
];

export default function Proceso() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    try {
      const initGSAP = async () => {
        const gsap = (await import("gsap")).default;
        const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
        gsap.registerPlugin(ScrollTrigger);

        const steps = section.querySelectorAll(".process-step");
        const line = section.querySelector(".process-line");

        gsap.fromTo(
          steps,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 65%",
              toggleActions: "play none none none",
            },
          }
        );

        if (line) {
          gsap.fromTo(
            line,
            { scaleY: 0 },
            {
              scaleY: 1,
              duration: 1.5,
              ease: "power3.inOut",
              transformOrigin: "top center",
              scrollTrigger: {
                trigger: section,
                start: "top 65%",
                end: "bottom 50%",
                scrub: 0.5,
              },
            }
          );
        }
      };

      initGSAP();
    } catch (e) {
      // fallback
    }
  }, []);

  return (
    <section
      id="proceso"
      ref={sectionRef}
      className="section-padding bg-[#0a0a0a] relative"
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          badge="Proceso"
          title="Tu nueva sonrisa en 5 pasos"
          description="Un proceso meticuloso donde cada fase está diseñada para garantizar resultados excepcionales."
        />

        {/* Timeline */}
        <div className="relative mt-12">
          {/* Vertical Line - desktop only */}
          <div className="process-line absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-[#c8a44e]/15 hidden md:block origin-top" />

          <div className="space-y-8 md:space-y-12">
            {pasos.map((paso, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`process-step relative flex flex-col md:flex-row items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ opacity: 1 }}
                >
                  {/* Step Number Circle */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                    <div className="w-12 h-12 rounded-full bg-[#0a0a0a] border-2 border-[#c8a44e]/40 flex items-center justify-center shadow-lg shadow-[#c8a44e]/5">
                      <span className="text-sm font-bold text-[#c8a44e] font-heading">
                        {paso.step}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${
                      isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                    }`}
                  >
                    <div
                      className={`glass-card rounded-xl p-6 ${
                        isLeft ? "md:items-end" : "md:items-start"
                      }`}
                    >
                      <div
                        className={`flex items-center gap-3 mb-3 ${
                          isLeft ? "md:flex-row-reverse" : "md:flex-row"
                        }`}
                      >
                        <paso.icon className="w-5 h-5 text-[#c8a44e]" />
                        <h3 className="font-heading text-lg font-semibold text-[#f5f5f0]">
                          {paso.title}
                        </h3>
                      </div>
                      <p className="text-sm text-[#a0a0a0] leading-relaxed">
                        {paso.description}
                      </p>
                      <p
                        className={`text-xs text-[#6b6b6b] mt-2 leading-relaxed ${
                          isLeft ? "md:text-right" : "md:text-left"
                        }`}
                      >
                        {paso.details}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

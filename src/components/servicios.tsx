"use client";

import { useEffect, useRef } from "react";
import {
  Sparkles,
  PaintBucket,
  Scan,
  Sun,
  Smile,
  Crown,
  Scissors,
  Bone,
  Sticker,
} from "lucide-react";
import SectionHeading from "./section-heading";

const servicios = [
  {
    icon: Sparkles,
    title: "Carillas en cerámica",
    description:
      "Láminas de porcelana de alta resistencia que transforman completamente la forma, color y alineación de tus dientes con resultados naturales y duraderos.",
  },
  {
    icon: PaintBucket,
    title: "Carillas en resina",
    description:
      "Alternativa estética directa esculpida sobre el diente. Resultado inmediato en una sola sesión con compuestos de nano-resina de última generación.",
  },
  {
    icon: Scan,
    title: "Diseño de sonrisa digital",
    description:
      "Planificación Digital Smile Design (DSD) con escaneo 3D, mockup previsualizable y simulación completa antes de tocar un solo diente.",
  },
  {
    icon: Sun,
    title: "Blanqueamiento dental",
    description:
      "Sistema LED de blanqueamiento combinado con gel de peróxido de alta concentración. Hasta 8 tonos más claros en sesión única supervisada.",
  },
  {
    icon: Smile,
    title: "Ortodoncia estética",
    description:
      "Alineadores transparentes y brackets cerámicos de zafiro. Corrección de malposiciones sin comprometer la estética durante el tratamiento.",
  },
  {
    icon: Crown,
    title: "Coronas estéticas",
    description:
      "Coronas libres de metal en disilicato de litio (E-Max) y zirconio multicapa. Máxima translucidez, resistencia y ajuste marginal preciso.",
  },
  {
    icon: Scissors,
    title: "Gingivoplastia",
    description:
      "Remodelado estético del contorno gingival con láser de diodo. Corrige sonrisa gingival y asimetrías del margen de encía sin sangrado ni puntos.",
  },
  {
    icon: Bone,
    title: "Implantes dentales",
    description:
      "Rehabilitación con implantes de titanio grado médico y coronas atornilladas. Planificación 3D guiada para precisión submilimétrica.",
  },
  {
    icon: Sticker,
    title: "Prótesis totales",
    description:
      "Prótesis removibles y fijas completas con dientes de resina acrílica de alta estética. Devolvemos función, fonética y estética integral.",
  },
];

export default function Servicios() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    try {
      const initGSAP = async () => {
        const gsap = (await import("gsap")).default;
        const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
        gsap.registerPlugin(ScrollTrigger);

        const cards = section.querySelectorAll(".service-card");

        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      };

      initGSAP();
    } catch (e) {
      // CSS fallback handled by IntersectionObserver in SectionHeading
    }
  }, []);

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="section-padding bg-[#0a0a0a] relative"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Servicios"
          title="Excelencia en cada detalle"
          description="Procedimientos de odontología estética realizados con tecnología de vanguardia y materiales premium."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {servicios.map((servicio, i) => (
            <div
              key={i}
              className="service-card glass-card rounded-xl p-6 md:p-8 group cursor-default"
              style={{ opacity: 1 }}
            >
              <div className="w-12 h-12 rounded-lg bg-[#c8a44e]/10 border border-[#c8a44e]/15 flex items-center justify-center mb-5 group-hover:bg-[#c8a44e]/20 transition-colors duration-300">
                <servicio.icon className="w-5 h-5 text-[#c8a44e]" />
              </div>
              <h3 className="font-heading text-lg md:text-xl font-semibold text-[#f5f5f0] mb-3">
                {servicio.title}
              </h3>
              <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed">
                {servicio.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

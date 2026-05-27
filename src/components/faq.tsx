"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import SectionHeading from "./section-heading";

const faqs = [
  {
    q: "¿Cuál es la diferencia entre carillas de cerámica y de resina?",
    a: "Las carillas de cerámica (porcelana) son láminas fabricadas en laboratorio que ofrecen mayor durabilidad (15-20 años), resistencia a manchas y translucidez natural. Las carillas de resina se esculpen directamente sobre el diente en consulta, son más económicas y se realizan en una sola sesión, aunque su duración es menor (5-7 años).",
  },
  {
    q: "¿Cuánto duran las carillas dentales?",
    a: "Las carillas de cerámica tienen una vida útil de 15 a 20 años con el cuidado adecuado. Las de resina, entre 5 y 7 años. La longevidad depende de la higiene oral, los hábitos (no morder objetos duros) y las revisiones periódicas cada 6 meses.",
  },
  {
    q: "¿Qué cuidados requieren las carillas?",
    a: "Los mismos que tus dientes naturales: cepillado 3 veces al día, hilo dental diario y enjuague bucal sin alcohol. Recomendamos evitar morder alimentos extremadamente duros (hielo, huesos) y usar protector bucal si practicas deportes de contacto o tienes bruxismo.",
  },
  {
    q: "¿Cuál es el costo aproximado del tratamiento?",
    a: "El costo varía según el tipo de material, la cantidad de carillas necesarias y la complejidad del caso. En tu consulta inicial gratuita realizamos un presupuesto personalizado sin compromiso. Ofrecemos planes de financiamiento para que la sonrisa de tus sueños sea accesible.",
  },
  {
    q: "¿Duele el procedimiento de colocación de carillas?",
    a: "El procedimiento es mínimamente invasivo y se realiza bajo anestesia local, por lo que no sentirás dolor durante el tratamiento. El tallado dental es conservador (0.3-0.5mm) y las molestias postoperatorias son mínimas o nulas en la mayoría de los casos.",
  },
  {
    q: "¿Ofrecen garantía en los tratamientos?",
    a: "Sí. Todos nuestros tratamientos incluyen garantía por escrito. Las carillas de cerámica tienen garantía contra defectos de fabricación y descementado. Además, ofrecemos controles gratuitos a los 3, 6 y 12 meses para asegurar la perfecta adaptación y satisfacción.",
  },
];

function AccordionItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-[#c8a44e]/8 last:border-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
      >
        <div className="flex items-start gap-3">
          <HelpCircle
            className={`w-5 h-5 mt-0.5 flex-shrink-0 transition-colors duration-300 ${
              isOpen ? "text-[#c8a44e]" : "text-[#6b6b6b]"
            }`}
          />
          <span
            className={`font-heading text-base md:text-lg font-medium transition-colors duration-300 ${
              isOpen ? "text-[#c8a44e]" : "text-[#f5f5f0] group-hover:text-[#d4b86a]"
            }`}
          >
            {question}
          </span>
        </div>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 text-[#6b6b6b] transition-transform duration-300 ${
            isOpen ? "rotate-180 text-[#c8a44e]" : ""
          }`}
        />
      </button>
      <div
        ref={contentRef}
        className="accordion-content"
        style={{
          maxHeight: isOpen ? (contentRef.current?.scrollHeight || 500) + "px" : "0px",
        }}
      >
        <p className="text-[#a0a0a0] text-sm md:text-base leading-relaxed pb-5 pl-8 pr-4">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
          ".faq-container",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
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
      id="faq"
      ref={sectionRef}
      className="section-padding bg-[#111111] relative"
    >
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          badge="Preguntas Frecuentes"
          title="Resolvemos tus dudas"
          description="Todo lo que necesitas saber antes de transformar tu sonrisa."
        />

        <div className="faq-container glass-card rounded-xl p-6 md:p-8" style={{ opacity: 1 }}>
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

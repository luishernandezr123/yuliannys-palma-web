"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import SectionHeading from "./section-heading";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  });
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
          ".contact-form",
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }
        );

        gsap.fromTo(
          ".contact-info",
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = encodeURIComponent(
      `Hola, soy ${formData.nombre}.\n\n` +
        `Estoy interesado/a en: ${formData.servicio || "Consulta general"}\n\n` +
        `Mi teléfono: ${formData.telefono}\n\n` +
        `Mensaje: ${formData.mensaje || "Quisiera agendar una consulta."}`
    );

    window.open(`https://wa.me/584120000000?text=${message}`, "_blank");
  };

  const infoItems = [
    {
      icon: Phone,
      label: "Teléfono",
      value: "+58 412-0000000",
      href: "https://wa.me/584120000000",
    },
    {
      icon: MapPin,
      label: "Dirección",
      value: "Consulta tu ubicación más cercana",
    },
    {
      icon: Clock,
      label: "Horario",
      value: "Lun-Vie 9AM-6PM | Sáb 9AM-1PM",
    },
  ];

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="section-padding bg-[#0a0a0a] relative"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Contacto"
          title="Agenda tu consulta gratuita"
          description="Da el primer paso hacia la sonrisa que siempre has deseado. Te contactaremos en menos de 24 horas."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-8">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="contact-form lg:col-span-3 glass-card rounded-xl p-6 md:p-8 space-y-5"
            style={{ opacity: 1 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#a0a0a0] mb-1.5">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={(e) =>
                    setFormData({ ...formData, nombre: e.target.value })
                  }
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#c8a44e]/10 rounded-lg text-[#f5f5f0] placeholder:text-[#6b6b6b] focus:outline-none focus:border-[#c8a44e]/40 focus:ring-1 focus:ring-[#c8a44e]/20 transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#a0a0a0] mb-1.5">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.telefono}
                  onChange={(e) =>
                    setFormData({ ...formData, telefono: e.target.value })
                  }
                  placeholder="+58 412-0000000"
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#c8a44e]/10 rounded-lg text-[#f5f5f0] placeholder:text-[#6b6b6b] focus:outline-none focus:border-[#c8a44e]/40 focus:ring-1 focus:ring-[#c8a44e]/20 transition-all text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#a0a0a0] mb-1.5">
                Servicio de interés
              </label>
              <select
                value={formData.servicio}
                onChange={(e) =>
                  setFormData({ ...formData, servicio: e.target.value })
                }
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#c8a44e]/10 rounded-lg text-[#f5f5f0] focus:outline-none focus:border-[#c8a44e]/40 focus:ring-1 focus:ring-[#c8a44e]/20 transition-all text-sm appearance-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23c8a44e' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 1rem center",
                  paddingRight: "2.5rem",
                }}
              >
                <option value="" className="bg-[#1a1a1a]">Selecciona un servicio</option>
                <option value="Carillas en cerámica" className="bg-[#1a1a1a]">Carillas en cerámica</option>
                <option value="Carillas en resina" className="bg-[#1a1a1a]">Carillas en resina</option>
                <option value="Diseño de sonrisa digital" className="bg-[#1a1a1a]">Diseño de sonrisa digital</option>
                <option value="Blanqueamiento dental" className="bg-[#1a1a1a]">Blanqueamiento dental</option>
                <option value="Ortodoncia estética" className="bg-[#1a1a1a]">Ortodoncia estética</option>
                <option value="Coronas estéticas" className="bg-[#1a1a1a]">Coronas estéticas</option>
                <option value="Gingivoplastia" className="bg-[#1a1a1a]">Gingivoplastia</option>
                <option value="Implantes dentales" className="bg-[#1a1a1a]">Implantes dentales</option>
                <option value="Prótesis totales" className="bg-[#1a1a1a]">Prótesis totales</option>
                <option value="Consulta general" className="bg-[#1a1a1a]">Consulta general</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#a0a0a0] mb-1.5">
                Mensaje
              </label>
              <textarea
                rows={4}
                value={formData.mensaje}
                onChange={(e) =>
                  setFormData({ ...formData, mensaje: e.target.value })
                }
                placeholder="Cuéntanos qué te gustaría mejorar de tu sonrisa..."
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#c8a44e]/10 rounded-lg text-[#f5f5f0] placeholder:text-[#6b6b6b] focus:outline-none focus:border-[#c8a44e]/40 focus:ring-1 focus:ring-[#c8a44e]/20 transition-all text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-4 bg-[#c8a44e] text-[#0a0a0a] font-semibold rounded-lg hover:bg-[#d4b86a] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#c8a44e]/10 hover:shadow-[#c8a44e]/20 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              Enviar por WhatsApp
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Contact Info Sidebar */}
          <div
            className="contact-info lg:col-span-2 space-y-5"
            style={{ opacity: 1 }}
          >
            {infoItems.map((item) => (
              <div
                key={item.label}
                className="glass-card rounded-xl p-5 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-[#c8a44e]/10 border border-[#c8a44e]/15 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 text-[#c8a44e]" />
                </div>
                <div>
                  <div className="text-xs text-[#6b6b6b] uppercase tracking-wider mb-1">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm md:text-base font-medium text-[#f5f5f0] hover:text-[#c8a44e] transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-sm md:text-base font-medium text-[#f5f5f0]">
                      {item.value}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Google Maps Placeholder */}
            <div className="glass-card rounded-xl p-4">
              <div className="aspect-video rounded-lg bg-[#1a1a1a] border border-[#c8a44e]/10 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-[#c8a44e]/30 mx-auto mb-2" />
                  <span className="text-xs text-[#6b6b6b]">
                    Mapa de ubicación
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Sparkles, Camera, MessageCircle, Play } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  {
    title: "Servicios",
    links: [
      { href: "#servicios", label: "Carillas en cerámica" },
      { href: "#servicios", label: "Carillas en resina" },
      { href: "#servicios", label: "Diseño de sonrisa" },
      { href: "#servicios", label: "Blanqueamiento" },
      { href: "#servicios", label: "Ver todos" },
    ],
  },
  {
    title: "Enlaces",
    links: [
      { href: "#proceso", label: "Proceso" },
      { href: "#resultados", label: "Resultados" },
      { href: "#dra", label: "La Doctora" },
      { href: "#testimonios", label: "Testimonios" },
      { href: "#faq", label: "Preguntas frecuentes" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { href: "https://wa.me/584120000000", label: "WhatsApp", external: true },
      { href: "#contacto", label: "Formulario" },
      { href: "#contacto", label: "Ubicación" },
      { href: "#contacto", label: "Horario" },
    ],
  },
];

const socialLinks = [
  { icon: Camera, href: "#", label: "Instagram" },
  { icon: MessageCircle, href: "#", label: "Facebook" },
  { icon: Play, href: "#", label: "YouTube" },
];

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#c8a44e]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="flex items-center gap-2.5 mb-4"
            >
              <div className="w-10 h-10 rounded-lg bg-[#c8a44e]/10 border border-[#c8a44e]/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#c8a44e]" />
              </div>
              <div>
                <span className="font-heading text-lg font-semibold text-[#f5f5f0]">
                  Yuliannys Palma
                </span>
                <span className="block text-[10px] tracking-[0.15em] uppercase text-[#c8a44e] font-medium">
                  Odontología Estética
                </span>
              </div>
            </Link>
            <p className="text-sm text-[#6b6b6b] leading-relaxed max-w-sm mt-4">
              Transformando sonrisas con excelencia, tecnología de vanguardia y un
              enfoque artístico único. Porque tu sonrisa merece lo mejor.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/[0.03] border border-[#c8a44e]/10 flex items-center justify-center text-[#6b6b6b] hover:text-[#c8a44e] hover:border-[#c8a44e]/30 hover:bg-[#c8a44e]/5 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs tracking-[0.2em] uppercase text-[#c8a44e] font-semibold mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-[#6b6b6b] hover:text-[#c8a44e] transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#c8a44e]/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6b6b6b]">
            &copy; {new Date().getFullYear()} Yuliannys Palma. Todos los derechos reservados.
          </p>
          <p className="text-xs text-[#6b6b6b]">
            Diseñado por{" "}
            <a
              href="https://crea-dg.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c8a44e] hover:text-[#d4b86a] transition-colors"
            >
              CreA DG
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

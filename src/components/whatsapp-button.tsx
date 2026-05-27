"use client";

import { useEffect } from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  useEffect(() => {
    const handleScroll = () => {
      const btn = document.querySelector(".whatsapp-float");
      if (!btn) return;
      const footer = document.querySelector("footer");
      if (!footer) return;

      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (footerTop < windowHeight + 20) {
        (btn as HTMLElement).style.bottom = `${windowHeight - footerTop + 24}px`;
      } else {
        (btn as HTMLElement).style.bottom = "24px";
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/584120000000?text=Hola,%20quisiera%20agendar%20una%20consulta%20de%20odontología%20estética."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float fixed right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300 group"
      style={{ bottom: "24px" }}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-white border-2 border-[#25D366] animate-pulse" />
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-1.5 bg-[#111111] border border-[#c8a44e]/20 text-[#f5f5f0] text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
        Consulta por WhatsApp
      </span>
    </a>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#resultados", label: "Resultados" },
  { href: "#proceso", label: "Proceso" },
  { href: "#dra", label: "La Dra." },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass py-3"
            : "bg-transparent py-4 md:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center gap-2.5 z-50"
          >
            <div className="w-10 h-10 rounded-lg bg-[#c8a44e]/10 border border-[#c8a44e]/20 flex items-center justify-center backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-[#c8a44e]" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-base sm:text-lg font-semibold text-[#f5f5f0] leading-tight">
                Yuliannys Palma
              </span>
              <span className="text-[10px] sm:text-xs tracking-[0.15em] uppercase text-[#c8a44e] font-medium">
                Odontología Estética
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2 text-sm text-[#a0a0a0] hover:text-[#f5f5f0] transition-colors duration-300 rounded-lg hover:bg-white/[0.03]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, "#contacto")}
              className="ml-3 px-5 py-2.5 bg-[#c8a44e] text-[#0a0a0a] text-sm font-semibold rounded-lg hover:bg-[#d4b86a] transition-all duration-300 shadow-lg shadow-[#c8a44e]/10"
            >
              Agenda tu consulta
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden z-50 p-2 text-[#f5f5f0]"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-400 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(10, 10, 10, 0.97)" }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-2xl font-heading text-[#f5f5f0] hover:text-[#c8a44e] transition-colors duration-300"
              style={{
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.4s ease ${i * 0.08}s`,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={(e) => handleNavClick(e, "#contacto")}
            className="mt-4 px-8 py-3 bg-[#c8a44e] text-[#0a0a0a] text-lg font-semibold rounded-lg hover:bg-[#d4b86a] transition-all duration-300"
            style={{
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
              transition: `all 0.4s ease ${navLinks.length * 0.08}s`,
            }}
          >
            Agenda tu consulta
          </a>
        </div>
      </div>
    </>
  );
}

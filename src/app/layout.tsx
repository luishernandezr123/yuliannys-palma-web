import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yuliannys Palma | Odontología Estética de Lujo",
  description:
    "Diseño de sonrisa, carillas en cerámica y resina. Dra. Yuliannys Palma — transformando sonrisas con la más alta calidad estética. Agenda tu consulta.",
  keywords: [
    "odontología estética",
    "carillas dentales",
    "diseño de sonrisa",
    "carillas en cerámica",
    "carillas en resina",
    "blanqueamiento dental",
    "Yuliannys Palma",
    "dentista estético",
    "clínica dental",
  ],
  openGraph: {
    title: "Yuliannys Palma | Odontología Estética de Lujo",
    description:
      "Diseño de sonrisa, carillas en cerámica y resina. Transformamos tu sonrisa con excelencia.",
    type: "website",
    locale: "es_VE",
  },
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#f5f5f0]">
        {children}
      </body>
    </html>
  );
}

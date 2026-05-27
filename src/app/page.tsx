import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Servicios from "@/components/servicios";
import Resultados from "@/components/resultados";
import Proceso from "@/components/proceso";
import DraSection from "@/components/dra-section";
import Testimonios from "@/components/testimonios";
import FAQ from "@/components/faq";
import Contacto from "@/components/contacto";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <Servicios />
        <Resultados />
        <Proceso />
        <DraSection />
        <Testimonios />
        <FAQ />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

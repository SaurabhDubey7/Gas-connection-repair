import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import StickyCallButton from "@/components/StickyCallButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-800">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <StickyCallButton />
      <WhatsAppButton />
      <Footer />
    </main>
  );
}
"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Partners from "@/components/Partners";
import PracticeAreas from "@/components/PracticeAreas";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <Hero />
        <About />
        <Partners />
        <PracticeAreas />
        <Contact />
      </main>
      <Footer />

      <a
        href="#contato"
        aria-label="Contato"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#c9a84c] hover:bg-[#b8973b] text-[#0f1b30] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-200"
      >
        <FaEnvelope className="text-2xl" />
      </a>
    </>
  );
}

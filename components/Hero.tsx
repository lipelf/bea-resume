"use client";

import { FaChevronDown, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f1b30 0%, #1a2f50 50%, #0f1b30 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #c9a84c 0, #c9a84c 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        <div className="inline-block mb-6">
          <span className="border border-[#c9a84c] text-[#c9a84c] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full">
            {t.badge}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          {lang === "pt" ? "Olá, sou " : "Hi, I'm "}
          <span className="text-[#c9a84c]">{t.title}</span>
        </h1>

        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-16 bg-[#c9a84c] opacity-60" />
          <div className="w-2 h-2 rounded-full bg-[#c9a84c]" />
          <div className="h-px w-16 bg-[#c9a84c] opacity-60" />
        </div>

        <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          {t.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contato"
            className="flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b8973b] text-[#0f1b30] font-bold px-8 py-3.5 rounded-full text-base transition-all duration-200 shadow-lg hover:scale-105"
          >
            {t.cta1}
          </a>
          <a
            href="#habilidades"
            className="flex items-center gap-2 border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0f1b30] font-semibold px-8 py-3.5 rounded-full text-base transition-all duration-200"
          >
            {t.cta2}
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/beatriz-bittencourt-503b35295/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-[#1e3a5f] hover:border-[#c9a84c] text-gray-400 hover:text-[#c9a84c] flex items-center justify-center transition-all duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#c9a84c] animate-bounce"
        aria-label="Scroll down"
      >
        <FaChevronDown className="text-2xl" />
      </a>
    </section>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes, FaCode, FaChevronDown } from "react-icons/fa";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang].nav;
  const [open, setOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const cvRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (cvRef.current && !cvRef.current.contains(e.target as Node)) {
        setCvOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f1b30] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <FaCode className="text-[#c9a84c] text-2xl group-hover:scale-110 transition-transform duration-300" />
            <div>
              <p className="text-white font-bold text-lg leading-tight tracking-wide">
                Beatriz Bittencourt
              </p>
              <p className="text-[#c9a84c] text-xs tracking-widest uppercase">
                {t.role}
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-5">
            {t.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-[#c9a84c] text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}

            {/* Language switcher */}
            <div className="flex items-center gap-0.5 border border-[#1e3a5f] rounded-full px-1 py-0.5">
              <button
                onClick={() => setLang("pt")}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold transition-colors duration-200 ${
                  lang === "pt"
                    ? "bg-[#c9a84c] text-[#0f1b30]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                🇧🇷 PT
              </button>
              <button
                onClick={() => setLang("en")}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold transition-colors duration-200 ${
                  lang === "en"
                    ? "bg-[#c9a84c] text-[#0f1b30]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                🇺🇸 EN
              </button>
            </div>

            {/* CV dropdown */}
            <div ref={cvRef} className="relative">
              <button
                onClick={() => setCvOpen(!cvOpen)}
                className="flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b8973b] text-[#0f1b30] text-sm font-bold px-4 py-2 rounded-full transition-colors duration-200"
              >
                {t.downloadCV}
                <FaChevronDown
                  className={`text-xs transition-transform duration-200 ${cvOpen ? "rotate-180" : ""}`}
                />
              </button>
              {cvOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
                  <a
                    href="/Beatriz_PT.pdf"
                    download
                    onClick={() => setCvOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-[#0f1b30] text-sm font-medium transition-colors"
                  >
                    <span className="text-xl">🇧🇷</span>
                    {t.downloadPT}
                  </a>
                  <div className="border-t border-gray-100" />
                  <a
                    href="/Beatriz_EN.pdf"
                    download
                    onClick={() => setCvOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-[#0f1b30] text-sm font-medium transition-colors"
                  >
                    <span className="text-xl">🇺🇸</span>
                    {t.downloadEN}
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0f1b30] border-t border-[#1e2f4a] px-4 pb-4">
          {t.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-gray-300 hover:text-[#c9a84c] py-3 text-sm font-medium border-b border-[#1e2f4a] last:border-none transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 flex items-center gap-3">
            <button
              onClick={() => setLang("pt")}
              className={`flex-1 py-2 rounded-full text-xs font-bold border transition-colors ${
                lang === "pt"
                  ? "bg-[#c9a84c] text-[#0f1b30] border-[#c9a84c]"
                  : "border-[#1e3a5f] text-gray-400"
              }`}
            >
              🇧🇷 PT
            </button>
            <button
              onClick={() => setLang("en")}
              className={`flex-1 py-2 rounded-full text-xs font-bold border transition-colors ${
                lang === "en"
                  ? "bg-[#c9a84c] text-[#0f1b30] border-[#c9a84c]"
                  : "border-[#1e3a5f] text-gray-400"
              }`}
            >
              🇺🇸 EN
            </button>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <a
              href="/Beatriz_PT.pdf"
              download
              className="flex items-center justify-center gap-1 bg-[#c9a84c] text-[#0f1b30] text-xs font-bold px-3 py-2.5 rounded-full"
            >
              🇧🇷 {t.downloadPT}
            </a>
            <a
              href="/Beatriz_EN.pdf"
              download
              className="flex items-center justify-center gap-1 border border-[#c9a84c] text-[#c9a84c] text-xs font-bold px-3 py-2.5 rounded-full"
            >
              🇺🇸 {t.downloadEN}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaPhone,
  FaChevronDown,
} from "react-icons/fa";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function Contact() {
  const { lang } = useLanguage();
  const t = translations[lang].contact;
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

  const infos = [
    {
      icon: <FaMapMarkerAlt className="text-[#c9a84c] text-xl shrink-0 mt-1" />,
      label: lang === "pt" ? "Localização" : "Location",
      value: t.locationValue,
    },
    {
      icon: <FaPhone className="text-[#c9a84c] text-xl shrink-0" />,
      label: lang === "pt" ? "Telefone / WhatsApp" : "Phone / WhatsApp",
      value: "(48) 99876-5432",
    },
    {
      icon: <FaEnvelope className="text-[#c9a84c] text-xl shrink-0" />,
      label: "E-mail",
      value: "bittencourtbea2@gmail.com",
    },
    {
      icon: <FaLinkedin className="text-[#c9a84c] text-xl shrink-0" />,
      label: "LinkedIn",
      value: "linkedin.com/in/beatrizbittencourt-503b35295",
    },
  ];

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#c9a84c] text-sm font-semibold tracking-widest uppercase">
            {t.supertitle}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#0f1b30]">
            {t.title}
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-[#c9a84c]" />
            <div className="w-2 h-2 rounded-full bg-[#c9a84c]" />
            <div className="h-px w-12 bg-[#c9a84c]" />
          </div>
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div>
            <h3 className="text-xl font-bold text-[#0f1b30] mb-8">{t.h3}</h3>
            <div className="space-y-6">
              {infos.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  {info.icon}
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                      {info.label}
                    </p>
                    <p className="text-[#0f1b30] font-medium mt-0.5 whitespace-pre-line text-sm">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CV download dropdown */}
            <div ref={cvRef} className="relative mt-10">
              <button
                onClick={() => setCvOpen(!cvOpen)}
                className="flex items-center justify-center gap-3 bg-[#0f1b30] hover:bg-[#1a2f50] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-lg hover:scale-105 w-full sm:w-auto"
              >
                {lang === "pt" ? "Baixar Currículo (PDF)" : "Download Resume (PDF)"}
                <FaChevronDown
                  className={`text-sm transition-transform duration-200 ${cvOpen ? "rotate-180" : ""}`}
                />
              </button>
              {cvOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
                  <a
                    href="/Beatriz_PT.pdf"
                    download
                    onClick={() => setCvOpen(false)}
                    className="flex items-center gap-3 px-5 py-4 hover:bg-gray-50 text-[#0f1b30] text-sm font-medium transition-colors"
                  >
                    <span className="text-2xl">🇧🇷</span>
                    <div>
                      <p className="font-semibold">{t.downloadPT}</p>
                      <p className="text-xs text-gray-400">Beatriz_PT.pdf</p>
                    </div>
                  </a>
                  <div className="border-t border-gray-100" />
                  <a
                    href="/Beatriz_EN.pdf"
                    download
                    onClick={() => setCvOpen(false)}
                    className="flex items-center gap-3 px-5 py-4 hover:bg-gray-50 text-[#0f1b30] text-sm font-medium transition-colors"
                  >
                    <span className="text-2xl">🇺🇸</span>
                    <div>
                      <p className="font-semibold">{t.downloadEN}</p>
                      <p className="text-xs text-gray-400">Beatriz_EN.pdf</p>
                    </div>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Form */}
          <div className="space-y-8">
            <div className="relative h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-[#0f1b30] to-[#1a2f50] flex flex-col items-center justify-center border border-gray-200 shadow-sm">
              <FaMapMarkerAlt className="text-[#c9a84c] text-4xl mb-2" />
              <p className="text-white font-semibold">{t.locationCity}</p>
              <p className="text-gray-300 text-sm">{t.locationRemote}</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h4 className="text-lg font-bold text-[#0f1b30] mb-6">
                {t.sendMessage}
              </h4>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1.5">
                      {t.nameLabel}
                    </label>
                    <input
                      type="text"
                      placeholder={t.namePlaceholder}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-[#0f1b30] placeholder-gray-400 focus:outline-none focus:border-[#c9a84c] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1.5">
                      {t.companyLabel}
                    </label>
                    <input
                      type="text"
                      placeholder={t.companyPlaceholder}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-[#0f1b30] placeholder-gray-400 focus:outline-none focus:border-[#c9a84c] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1.5">
                    E-mail
                  </label>
                  <input
                    type="email"
                    placeholder={t.emailPlaceholder}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-[#0f1b30] placeholder-gray-400 focus:outline-none focus:border-[#c9a84c] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1.5">
                    {t.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={t.messagePlaceholder}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-[#0f1b30] placeholder-gray-400 focus:outline-none focus:border-[#c9a84c] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0f1b30] hover:bg-[#1a2f50] text-white font-semibold py-3 rounded-full transition-colors duration-200"
                >
                  {t.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

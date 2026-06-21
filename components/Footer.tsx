"use client";

import { FaBalanceScale, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  return (
    <footer className="bg-[#080f1e] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <FaBalanceScale className="text-[#c9a84c] text-2xl" />
              <div>
                <p className="text-white font-bold text-base leading-tight">
                  Beatriz Bittencourt
                </p>
                <p className="text-[#c9a84c] text-xs tracking-widest uppercase">
                  {t.role}
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">{t.tagline}</p>
            <div className="flex gap-3">
              {[
                {
                  icon: <FaLinkedin />,
                  href: "https://www.linkedin.com/in/beatriz-bittencourt-503b35295/",
                  label: "LinkedIn",
                },
                { icon: <FaInstagram />, href: "#", label: "Instagram" },
                { icon: <FaEnvelope />, href: "mailto:bittencourtbea2@gmail.com", label: "E-mail" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-[#0f1b30] hover:bg-[#c9a84c] hover:text-[#0f1b30] text-gray-400 flex items-center justify-center transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              {t.navTitle}
            </h4>
            <ul className="space-y-3">
              {t.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-[#c9a84c] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              {t.skillsTitle}
            </h4>
            <ul className="space-y-3">
              {t.areas.map((area) => (
                <li key={area}>
                  <a
                    href="#habilidades"
                    className="text-sm hover:text-[#c9a84c] transition-colors duration-200"
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              {t.contactTitle}
            </h4>
            <address className="not-italic space-y-3 text-sm">
              <p>{t.location}</p>
              <p>{t.remote}</p>
              <p className="pt-2">
                <a
                  href="mailto:bittencourtbea2@gmail.com"
                  className="hover:text-[#c9a84c] transition-colors"
                >
                  bittencourtbea2@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/in/beatriz-bittencourt-503b35295/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c9a84c] transition-colors"
                >
                  LinkedIn
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>

      <div className="border-t border-[#0f1b30]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} {t.copyright}
          </p>
          <a href="#" className="text-xs text-gray-600 hover:text-[#c9a84c] transition-colors">
            {t.privacy}
          </a>
        </div>
      </div>
    </footer>
  );
}

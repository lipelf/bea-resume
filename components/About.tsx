"use client";

import { FaLightbulb, FaHeart, FaRocket, FaUsers } from "react-icons/fa";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const icons = [
  <FaLightbulb key="1" className="text-[#c9a84c] text-3xl" />,
  <FaHeart key="2" className="text-[#c9a84c] text-3xl" />,
  <FaRocket key="3" className="text-[#c9a84c] text-3xl" />,
  <FaUsers key="4" className="text-[#c9a84c] text-3xl" />,
];

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <section id="sobre" className="py-24 bg-white">
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
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-[#0f1b30] mb-6">{t.h3}</h3>
            <p className="text-gray-600 leading-relaxed mb-4">{t.p1}</p>
            <p className="text-gray-600 leading-relaxed mb-4">{t.p2}</p>
            <p className="text-gray-600 leading-relaxed">{t.p3}</p>
            <a
              href="#contato"
              className="mt-8 inline-block bg-[#0f1b30] hover:bg-[#1a2f50] text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200"
            >
              {t.cta}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {t.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#0f1b30] rounded-2xl p-8 text-center shadow-lg"
              >
                <p className="text-[#c9a84c] text-4xl font-bold">{stat.num}</p>
                <p className="text-gray-300 text-sm mt-2 leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.values.map((v, i) => (
            <div
              key={v.title}
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 hover:border-[#c9a84c] hover:shadow-md transition-all duration-300"
            >
              <div className="mb-4">{icons[i]}</div>
              <h4 className="font-bold text-[#0f1b30] text-lg mb-2">
                {v.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

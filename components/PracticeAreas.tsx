"use client";

import {
  FaSearch,
  FaFileContract,
  FaBriefcase,
  FaGavel,
  FaPen,
  FaBalanceScale,
  FaBuilding,
  FaHandshake,
  FaLaptop,
  FaFileSignature,
  FaUniversity,
  FaUsers,
} from "react-icons/fa";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const icons = [
  FaSearch,
  FaFileContract,
  FaBriefcase,
  FaGavel,
  FaPen,
  FaBalanceScale,
  FaBuilding,
  FaHandshake,
  FaLaptop,
  FaFileSignature,
  FaUniversity,
  FaUsers,
];

export default function PracticeAreas() {
  const { lang } = useLanguage();
  const t = translations[lang].skills;

  return (
    <section id="habilidades" className="py-24 bg-[#0f1b30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#c9a84c] text-sm font-semibold tracking-widest uppercase">
            {t.supertitle}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            {t.title}
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-[#c9a84c]" />
            <div className="w-2 h-2 rounded-full bg-[#c9a84c]" />
            <div className="h-px w-12 bg-[#c9a84c]" />
          </div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {t.items.map((skill, i) => {
            const Icon = icons[i];
            return (
              <div
                key={skill.title}
                className="group bg-[#1a2f50] hover:bg-[#1e3660] border border-[#1e3a5f] hover:border-[#c9a84c] rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#c9a84c]/10"
              >
                <div className="text-[#c9a84c] mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-3xl" />
                </div>
                <h3 className="text-white font-bold text-base mb-2">
                  {skill.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

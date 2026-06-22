"use client";

import Image from "next/image";
import { FaLinkedin, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const highlightIcons = [
  <FaBriefcase key="b" className="text-[#c9a84c] text-xs mt-0.5 shrink-0" />,
  <FaGraduationCap key="g" className="text-[#c9a84c] text-xs mt-0.5 shrink-0" />,
];

export default function Partners() {
  const { lang } = useLanguage();
  const t = translations[lang].partners;

  return (
    <section id="perfil" className="py-24 bg-gray-50">
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

        <div className="w-175 mx-auto" >
          {t.profiles.map((profile, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Photo */}
              <div className="relative h-82 overflow-hidden">
                <Image
                  src="/PHOTO-2026-06-21-13-24-17.jpg"
                  alt="Beatriz Bittencourt"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 30%"}}
                />
                {/* blur suave nas bordas via gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1b30]/70 via-transparent to-[#0f1b30]/10" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent backdrop-blur-[1px] [mask-image:linear-gradient(to_top,black_0%,transparent_40%)]" />
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[#c9a84c] text-xs font-semibold tracking-widest uppercase bg-[#0f1b30]/70 px-4 py-1 rounded-full border border-[#c9a84c]/40 whitespace-nowrap backdrop-blur-sm">
                </span>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#0f1b30]">
                  Beatriz Bittencourt
                </h3>
                <p className="text-[#c9a84c] text-sm font-semibold mt-1">
                  {profile.role}
                </p>
                <p className="text-gray-500 text-sm mt-1 mb-4">{profile.tag}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {profile.bio}
                </p>

                <ul className="space-y-2 mb-6">
                  {profile.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                      {highlightIcons[i]}
                      {h}
                    </li>
                  ))}
                </ul>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#0f1b30] hover:bg-[#1a2f50] text-white text-sm font-semibold py-2.5 rounded-full transition-colors duration-200"
                >
                  <FaLinkedin />
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/app/LanguageContext";

export default function Hero() {
  const { t, lang } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 },
  };

  const isKoHighlightPhrase = t.hero.title_highlight2.includes("정신건강") && t.hero.title_highlight2.includes("장-뇌 축");
  const isKorean = lang === "ko";

  return (
    <section id="hero" className="w-full bg-[radial-gradient(circle_at_top,#12345c_0%,#0b1d37_42%,#081321_100%)] px-4 pb-20 pt-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center">
        <motion.h1 {...fadeInUp} className="mx-auto max-w-4xl text-center text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl lg:text-[5.5rem]">
          {(t.hero.title_start || t.hero.title_highlight1) && (
            <span className="block">
              {t.hero.title_start}
              {t.hero.title_highlight1 && (
                <span className="bg-gradient-to-r from-blue-400 to-brand bg-clip-text text-transparent">{t.hero.title_highlight1}</span>
              )}
            </span>
          )}
          {t.hero.title_mid && (
            <span className="mx-auto mt-3 block w-fit text-3xl font-medium text-slate-100 md:text-5xl">
              {t.hero.title_mid}
            </span>
          )}
          {isKoHighlightPhrase ? (
            <span className="mt-3 block text-slate-100">
              <span className="bg-gradient-to-r from-blue-400 to-brand bg-clip-text text-transparent">정신건강</span>을 위한 혁신적 <span className="bg-gradient-to-r from-blue-400 to-brand bg-clip-text text-transparent">장-뇌 축</span> 기술
            </span>
          ) : (
            t.hero.title_highlight2 && (
              <span className="mt-3 block bg-gradient-to-r from-blue-400 to-brand bg-clip-text text-transparent">
                {t.hero.title_highlight2}
                {t.hero.title_end}
              </span>
            )
          )}
        </motion.h1>

        <motion.div {...fadeInUp} className="mt-12 flex justify-center">
          <a
            href="#vision"
            aria-label={isKorean ? "더 알아보기" : "Discover More"}
            className="inline-flex items-center justify-center rounded-full bg-brand px-7 py-4 text-white shadow-[0_16px_40px_rgba(47,107,255,0.24)] transition hover:bg-brand-hover"
          >
            <ArrowDown className="h-6 w-6" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
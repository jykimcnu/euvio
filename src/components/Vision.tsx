"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/LanguageContext";

function highlightMissionStatement(text: string): string | ReactNode {
  const highlightedPhrases = ["유비오의 바이오테크놀로지", "EuVio's innovative biotechnology"];
  const highlightedPhrase = highlightedPhrases.find((phrase) => text.includes(phrase));

  if (!highlightedPhrase) {
    return text;
  }

  const parts = text.split(highlightedPhrase);

  return (
    <>
      {parts[0]}
      <span className="font-bold text-brand">{highlightedPhrase}</span>
      {parts.slice(1).join(highlightedPhrase)}
    </>
  );
}

export default function Vision() {
  const { t, lang } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 },
  };

  const isKorean = lang === "ko";

  return (
    <section id="vision" className="w-full bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_100%)] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div {...fadeInUp} className="mb-16 grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start">
          <div className="flex items-start justify-center lg:justify-start">
            <div className="relative h-24 w-52 overflow-hidden rounded-[1.75rem] border border-slate-200/70 bg-white shadow-[0_32px_80px_rgba(15,23,42,0.08)]">
              <div className="absolute inset-0 flex items-center justify-center bg-white px-2 py-1.5">
                <img src="/images/euvio-logo-biotech.png" alt="EuVio Biotech Logo" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-[#f4d5dc]/25" />
            </div>
          </div>

          <div className="space-y-6 text-center lg:text-left">
            <div className="text-2xl font-semibold uppercase tracking-[0.32em] text-brand md:text-3xl">{t.vision.title}</div>
            <motion.h2 {...fadeInUp} className="mx-auto max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-slate-900 md:text-6xl lg:mx-0 lg:text-[4.5rem]">
              {t.vision.subtitle.split(", ").map((line: string, index: number) => (
                <span key={index} className="block">
                  {line}
                  {index === 0 ? "," : ""}
                </span>
              ))}
            </motion.h2>
            <div className="rounded-3xl border border-sky-100 bg-white/90 p-8 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
              <p className="text-xl leading-10 text-slate-800 md:text-2xl">
                {highlightMissionStatement(t.vision.missionStatement)}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
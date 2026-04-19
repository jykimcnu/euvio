"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/LanguageContext";

function highlightMissionStatement(text: string): string | ReactNode {
  const highlightedPhrases = [
    "유비오의 바이오테크놀로지",
    "EuVio's innovative biotechnology",
  ];
  const highlightedPhrase = highlightedPhrases.find((phrase) =>
    text.includes(phrase)
  );

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
  const { t } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 },
  };

  return (
    <section
      id="vision"
      className="w-full bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_100%)] px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          {...fadeInUp}
          className="mb-8 grid gap-8 sm:gap-10 lg:mb-16 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start lg:gap-12"
        >
          <div className="flex items-start justify-center lg:justify-start">
            <div className="relative h-20 w-40 overflow-hidden rounded-[1.25rem] border border-slate-200/70 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:h-24 sm:w-52 sm:rounded-[1.75rem]">
              <div className="absolute inset-0 flex items-center justify-center bg-white px-2 py-1.5">
                <img
                  src="/images/euvio-logo-biotech.png"
                  alt="EuVio Biotech Logo"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-[#f4d5dc]/25" />
            </div>
          </div>

          <div className="space-y-5 sm:space-y-6 text-center lg:text-left">
            <div className="text-lg font-semibold uppercase tracking-[0.22em] text-brand sm:text-xl md:text-2xl lg:text-3xl lg:tracking-[0.32em]">
              {t.vision.title}
            </div>

            <motion.h2
              {...fadeInUp}
              className="mx-auto max-w-4xl text-3xl font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:mx-0 lg:text-[4.5rem]"
            >
              {t.vision.subtitle.split(", ").map((line: string, index: number) => (
                <span key={index} className="block">
                  {line}
                  {index === 0 ? "," : ""}
                </span>
              ))}
            </motion.h2>

            <div className="rounded-2xl border border-sky-100 bg-white/90 p-5 shadow-[0_14px_30px_rgba(15,23,42,0.05)] sm:rounded-3xl sm:p-6 md:p-8">
              <p className="text-base leading-7 text-slate-800 sm:text-lg sm:leading-8 md:text-xl md:leading-10 lg:text-2xl">
                {highlightMissionStatement(t.vision.missionStatement)}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
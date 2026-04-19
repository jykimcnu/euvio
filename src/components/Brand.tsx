"use client";

import { ReactNode } from "react";
import { useLanguage } from "@/app/LanguageContext";

function highlightMindBiotics(text: string): string | ReactNode {
  const match = text.match(/MindBiotics(?:™)?/);

  if (!match) {
    return text;
  }

  const highlightedPhrase = match[0];
  const parts = text.split(highlightedPhrase);

  return (
    <>
      {parts[0]}
      <span className="font-bold text-emerald-400">{highlightedPhrase}</span>
      {parts.slice(1).join(highlightedPhrase)}
    </>
  );
}

export default function Brand() {
  const { t, lang } = useLanguage();

  const isKorean = lang === "ko";

  return (
    <section
      id="brand"
      className="bg-[linear-gradient(180deg,#0b1627_0%,#0d1f34_100%)] px-4 py-16 text-white sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-8 sm:gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[1.5rem] border border-sky-950/60 bg-[#10233b]/92 p-6 shadow-[0_40px_120px_rgba(4,16,38,0.34)] sm:rounded-[2rem] sm:p-8 lg:order-2 lg:-ml-6 lg:p-10">
          <div className="flex flex-col space-y-5 sm:space-y-6">
            <h3 className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[3.2rem] lg:whitespace-nowrap">
              {t.brand.title}
            </h3>

            <p className="max-w-3xl text-base leading-7 text-slate-100 sm:text-lg sm:leading-8 md:text-xl md:leading-9">
              {highlightMindBiotics(t.brand.description)}
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/70 px-3 py-1.5 text-xs text-slate-100 sm:px-4 sm:py-2 sm:text-sm">
                {isKorean ? "과학 기반 사이코바이오틱스" : "Science-led psychobiotics"}
              </span>
              <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/70 px-3 py-1.5 text-xs text-slate-100 sm:px-4 sm:py-2 sm:text-sm">
                {isKorean ? "일상형 멘탈 웰니스" : "Natural daily wellness"}
              </span>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[18rem] sm:max-w-[20rem] lg:order-1 lg:mx-0 lg:max-w-[23rem]">
          <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-brand/16 via-slate-900/0 to-emerald-300/12 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.5rem] border border-sky-950/60 bg-[#09172b]/95 p-5 shadow-xl sm:rounded-[2rem] sm:p-6 lg:p-8">
            <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-brand to-emerald-300" />
            <div className="relative flex h-[12rem] items-center justify-center sm:h-[13.5rem] lg:h-[15.5rem]">
              <div className="flex h-full w-full items-center justify-start rounded-[1.25rem] bg-white p-3 shadow-[0_28px_80px_rgba(15,23,42,0.25)] sm:rounded-[1.75rem]">
                <img
                  src="/images/euvio-logo-mindbiotics.png"
                  alt="MindBiotics Logo"
                  className="mr-auto max-h-[94%] w-auto max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
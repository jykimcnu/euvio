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
    <section id="brand" className="bg-[linear-gradient(180deg,#0b1627_0%,#0d1f34_100%)] px-6 py-24 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-sky-950/60 bg-[#10233b]/92 p-10 shadow-[0_40px_120px_rgba(4,16,38,0.34)] lg:order-2 lg:-ml-6">
          <div className="flex flex-col space-y-6">
            <h3 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-[3.2rem] md:whitespace-nowrap">
              {t.brand.title}
            </h3>
            <p className="max-w-3xl text-lg leading-9 text-slate-100 md:text-xl">{highlightMindBiotics(t.brand.description)}</p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/70 px-4 py-2 text-sm text-slate-100">{isKorean ? "과학 기반 사이코바이오틱스" : "Science-led psychobiotics"}</span>
              <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/70 px-4 py-2 text-sm text-slate-100">{isKorean ? "일상형 멘탈 웰니스" : "Natural daily wellness"}</span>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[23rem] lg:order-1 lg:mx-0">
          <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-brand/16 via-slate-900/0 to-emerald-300/12 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-sky-950/60 bg-[#09172b]/95 p-8 shadow-xl">
            <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-brand to-emerald-300" />
            <div className="relative flex h-[15.5rem] items-center justify-center">
              <div className="flex h-full w-full items-center justify-start rounded-[1.75rem] bg-white p-3 shadow-[0_28px_80px_rgba(15,23,42,0.25)]">
                <img src="/images/euvio-logo-mindbiotics.png" alt="MindBiotics Logo" className="mr-auto max-h-[94%] w-auto max-w-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
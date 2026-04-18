"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import { BrainCircuit, FileCheck } from "lucide-react";
import { useLanguage } from "@/app/LanguageContext";
import type { Translation } from "@/lib/translations";

function CountUpValue({
  value,
  suffix = "",
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const controls = animate(0, value, {
      duration: 1.4,
      onUpdate: (latest) => setDisplayValue(latest),
    });

    return () => controls.stop();
  }, [isInView, value]);

  const formattedValue = decimals > 0 ? displayValue.toFixed(decimals) : Math.round(displayValue).toLocaleString("en-US");

  return (
    <span ref={ref}>
      {formattedValue}
      {suffix}
    </span>
  );
}

function formatTechnologyDescription(text: string) {
  const match = text.match(/^(\[[^\]]+\])(.*)$/);

  if (!match) {
    return text;
  }

  const [, lead, rest] = match;

  return (
    <>
      <span className="block">{lead}</span>
      <span className="mt-2 block">{rest.trim()}</span>
    </>
  );
}

export default function Technology() {
  const { t, lang } = useLanguage();
  type PainPointMetric = Translation["problemSolution"]["painPoint"]["metrics"][number];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 },
  };

  const isKorean = lang === "ko";
  const technologyCardTitleClass = isKorean
    ? "mb-5 text-[2.1rem] font-bold leading-tight text-white"
    : "mb-5 whitespace-nowrap text-[1.72rem] font-bold leading-tight tracking-[-0.04em] text-white md:text-[1.82rem]";

  return (
    <>
      <section id="technology" className="bg-[linear-gradient(180deg,#081626_0%,#0b1d34_100%)] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...fadeInUp}
            className="mb-12 rounded-[2rem] border border-sky-950/60 bg-[#10233b]/92 p-8 shadow-[0_35px_90px_rgba(3,12,30,0.42)] md:p-10"
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white md:text-5xl">{t.problemSolution.painPoint.title}</h3>
            </div>

            <p className="max-w-3xl text-xl leading-9 text-slate-100">{t.problemSolution.painPoint.description}</p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {t.problemSolution.painPoint.metrics.map((metric: PainPointMetric, index: number) => (
                <motion.div
                  key={metric.label}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-[1.5rem] border border-sky-950/50 bg-[#09172b]/88 p-6"
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200/70">{metric.detail}</div>
                  <div className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">
                    <CountUpValue value={metric.value} suffix={metric.suffix} />
                  </div>
                  <p className="mt-3 text-base leading-7 text-slate-100">{metric.label}</p>
                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-sky-950/60">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-brand to-blue-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: metric.barWidth }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 1, delay: 0.15 + index * 0.12, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              {...fadeInUp}
              className="mt-8 rounded-[1.75rem] border border-sky-950/50 bg-gradient-to-br from-[#10233b] to-[#09172b] p-6"
            >
              <div className="text-xl font-bold leading-9 text-cyan-200/80">{t.problemSolution.painPoint.noteTitle}</div>
              <p className="mt-4 text-xl leading-9 text-slate-100">{t.problemSolution.painPoint.noteBody}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_48%,#faf7f9_100%)] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeInUp} className="mb-12 flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-10">
            <div className="w-full max-w-[13rem] rounded-[1.75rem] shadow-[0_22px_56px_rgba(98,129,176,0.16)] md:max-w-[14rem]">
              <img src="/images/euvio-logo-healthcare.svg?v=12" alt="EuVio HealthCare Logo" className="h-auto w-full object-contain" />
            </div>
            <div className="text-left md:flex-1 md:pl-2">
              <h2 className="mb-3 text-2xl font-bold uppercase tracking-[0.24em] text-[#2f63e6] md:text-3xl">{t.technology.title}</h2>
              <h3 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">{t.technology.subtitle}</h3>
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="mx-auto mb-8 max-w-4xl rounded-[2rem] border border-[#dbe6fb] bg-[linear-gradient(135deg,#13294a_0%,#19395f_100%)] px-6 py-7 shadow-[0_20px_56px_rgba(41,66,112,0.18)]"
          >
            <div className="relative flex flex-col items-center gap-7 text-center md:min-h-[15rem] md:gap-0">
              <div className="flex w-full max-w-[18rem] flex-col items-center gap-5 md:absolute md:left-[30%] md:top-1/2 md:max-w-[22rem] md:-translate-x-1/2 md:-translate-y-1/2 md:items-start">
                <div className="flex items-center justify-center gap-3 md:justify-start">
                  <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-[#74a3c6]/35 bg-[#20486b] shadow-inner shadow-[#0b1728]">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#8ed5ff]/20 via-transparent to-transparent" />
                    <div className="relative flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border border-[#8ec7e8]/15 bg-[#10293f]">
                      <svg viewBox="0 0 96 96" className="h-12 w-12" aria-hidden="true">
                        <path d="M34 18c-8 0-14 6-14 14v6c0 6 4 11 10 12-6 2-10 7-10 13v1c0 8 6 14 14 14h4c6 0 10-4 10-10 0-4-2-7-5-9h10c3 2 5 5 5 9 0 6 4 10 10 10h2c8 0 14-6 14-14v-1c0-6-4-11-10-13 6-1 10-6 10-12v-6c0-8-6-14-14-14H34Z" fill="#163653" stroke="#8ed5ff" strokeWidth="3" strokeLinejoin="round"/>
                        <path d="M34 30h14M34 46h14M34 62h10M58 30h8M58 46h10M58 62h8" stroke="#8ed5ff" strokeWidth="6" strokeLinecap="round" opacity="0.85"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="max-w-none text-[1.08rem] leading-[1.65] text-slate-100 md:text-left md:text-[1.18rem] md:leading-[1.55] md:whitespace-nowrap">
                  {isKorean ? (
                    "장에서 시작된 신호가 장-뇌 축을 따라 전달"
                  ) : (
                    <>
                      <span className="block">Signals begin in the gut</span>
                      <span className="block">and travel through the axis.</span>
                    </>
                  )}
                </p>
              </div>

              <div className="flex items-center justify-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                <svg viewBox="0 0 168 40" className="h-8 w-28" aria-hidden="true">
                  <defs>
                    <linearGradient id="connector-arrow-gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                      <stop offset="0%" stopColor="#f0afb8" stopOpacity="0.25" />
                      <stop offset="55%" stopColor="#e88a97" />
                      <stop offset="100%" stopColor="#f7cdd3" />
                    </linearGradient>
                  </defs>
                  <path d="M12 20h74" fill="none" stroke="url(#connector-arrow-gradient)" strokeWidth="4.5" strokeLinecap="round" />
                  <path d="M72 10l20 10-20 10" fill="none" stroke="#e88a97" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M92 10l20 10-20 10" fill="none" stroke="#f0a9b4" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.95" />
                  <path d="M112 10l20 10-20 10" fill="none" stroke="#f7cdd3" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.95" />
                </svg>
              </div>

              <div className="flex w-full max-w-[18rem] flex-col items-center gap-5 md:absolute md:left-[70%] md:top-1/2 md:max-w-[22rem] md:-translate-x-1/2 md:-translate-y-1/2 md:items-end">
                <div className="flex items-center justify-center gap-3 md:justify-end">
                  <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-[#d98a95]/35 bg-[#64384b] shadow-inner shadow-[#261924]">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f4b7c0]/20 via-transparent to-[#f0d3d8]/10" />
                    <div className="relative flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border border-[#f0c3cb]/15 bg-[#3a2030]">
                      <svg viewBox="0 0 96 96" className="h-12 w-12" aria-hidden="true">
                        <path d="M36 24c-10 0-18 8-18 18 0 4 1 7 3 10-1 2-2 5-2 8 0 8 7 15 15 15 2 0 4 0 5-1 3 4 8 7 14 7s11-3 14-7c2 1 4 1 6 1 8 0 15-7 15-15 0-3-1-6-2-8 2-3 3-6 3-10 0-10-8-18-18-18-5 0-9 2-12 5-3-3-8-5-13-5Z" fill="#60384a" stroke="#f3b4bf" strokeWidth="3" strokeLinejoin="round"/>
                        <path d="M48 24v50M36 34c4 2 6 6 6 10s-2 8-6 10M60 34c-4 2-6 6-6 10s2 8 6 10M30 46h8M58 46h8" stroke="#f3b4bf" strokeWidth="4" strokeLinecap="round" opacity="0.85"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="max-w-xs text-[1.08rem] leading-[1.65] text-slate-100 md:text-right md:text-[1.18rem] md:leading-[1.55]">{isKorean ? "뇌 신경세포 회복과 정신 건강 회복" : "Neuronal recovery and mental wellness restoration."}</p>
              </div>
            </div>
          </motion.div>

          <div className="mt-6 grid gap-8 md:grid-cols-3">
            <motion.div {...fadeInUp} className="rounded-[2rem] border border-[#dbe6fb] bg-[#13294a] p-8 shadow-[0_20px_56px_rgba(41,66,112,0.18)] transition-transform duration-300 hover:-translate-y-3 hover:shadow-[0_28px_60px_rgba(41,66,112,0.24)]">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#21486a] text-[#8ed5ff] shadow-inner shadow-[#0b1728]">
                <BrainCircuit className="h-8 w-8" />
              </div>
              <h3 className={technologyCardTitleClass}>{t.technology.item1_title}</h3>
              <p className="text-[1.24rem] leading-[1.7] text-slate-100">{formatTechnologyDescription(t.technology.item1_desc)}</p>
            </motion.div>
            <motion.div {...fadeInUp} className="rounded-[2rem] border border-[#ead9e0] bg-[#13294a] p-8 shadow-[0_20px_56px_rgba(41,66,112,0.18)] transition-transform duration-300 hover:-translate-y-3 hover:shadow-[0_28px_60px_rgba(41,66,112,0.24)]">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#5a3143] shadow-inner shadow-[#261924]">
                <img src="/images/euvio-bacteria-icon.svg" alt="Bacteria icon" className="h-10 w-10 object-contain" />
              </div>
              <h3 className={technologyCardTitleClass}>{t.technology.item2_title}</h3>
              <p className="text-[1.24rem] leading-[1.7] text-slate-100">{formatTechnologyDescription(t.technology.item2_desc)}</p>
            </motion.div>
            <motion.div {...fadeInUp} className="rounded-[2rem] border border-[#dbe6fb] bg-[#13294a] p-8 shadow-[0_20px_56px_rgba(41,66,112,0.18)] transition-transform duration-300 hover:-translate-y-3 hover:shadow-[0_28px_60px_rgba(41,66,112,0.24)]">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#21486a] text-[#8ed5ff] shadow-inner shadow-[#0b1728]">
                <FileCheck className="h-8 w-8" />
              </div>
              <h3 className={technologyCardTitleClass}>{t.technology.item3_title}</h3>
              <p className="text-[1.24rem] leading-[1.7] text-slate-100">{formatTechnologyDescription(t.technology.item3_desc)}</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
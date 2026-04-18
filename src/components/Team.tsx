"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/app/LanguageContext";

export default function Team() {
  const { t } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 },
  };

  const leadershipParagraphs = t.leadership.description
    .split("\n\n")
    .map((paragraph: string) => paragraph.trim())
    .filter(Boolean);
  const [leadershipLead, ...leadershipDetails] = leadershipParagraphs;

  return (
    <section id="leadership" className="bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          {...fadeInUp}
          className="rounded-[2rem] border border-sky-100 bg-[linear-gradient(180deg,#ffffff_0%,#f6faff_100%)] px-8 py-10 shadow-[0_24px_80px_rgba(23,55,108,0.08)] md:px-12 md:py-12"
        >
          <div className="max-w-none">
            <h2 className="mb-3 text-2xl font-bold uppercase tracking-[0.24em] text-brand md:text-3xl">{t.nav.leadership}</h2>
            <h3 className="max-w-4xl text-3xl font-extrabold tracking-tight text-slate-900 md:text-[3.4rem] md:leading-[1.04]">
              {t.leadership.title}
            </h3>
            <div className="mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-brand via-sky-400 to-cyan-300" />
            {leadershipLead && (
              <div className="mt-8 flex items-start gap-5 text-slate-800">
                <span className="mt-3 inline-block h-2.5 w-2.5 flex-shrink-0 rounded-full bg-brand" aria-hidden="true" />
                <p className="max-w-[72rem] text-xl leading-10 md:text-[1.4rem] md:leading-[1.85]">{leadershipLead}</p>
              </div>
            )}

            <ul className="mt-10 space-y-6">
              {leadershipDetails.map((paragraph: string) => (
                <li key={paragraph} className="flex items-start gap-4 text-slate-800">
                  <span className="mt-3 inline-block h-2.5 w-2.5 flex-shrink-0 rounded-full bg-brand" aria-hidden="true" />
                  <p className="max-w-[72rem] text-xl leading-10 md:text-[1.4rem] md:leading-[1.85]">{paragraph}</p>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
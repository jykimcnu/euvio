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
    <section
      id="leadership"
      className="bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          {...fadeInUp}
          className="rounded-[1.5rem] border border-sky-100 bg-[linear-gradient(180deg,#ffffff_0%,#f6faff_100%)] px-5 py-6 shadow-[0_24px_80px_rgba(23,55,108,0.08)] sm:rounded-[2rem] sm:px-8 sm:py-8 md:px-12 md:py-12"
        >
          <div className="max-w-none">
            <h2 className="mb-2 text-lg font-bold uppercase tracking-[0.18em] text-brand sm:mb-3 sm:text-xl md:text-2xl lg:text-3xl lg:tracking-[0.24em]">
              {t.nav.leadership}
            </h2>

            <h3 className="max-w-4xl text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-5xl lg:text-[3.4rem] lg:leading-[1.04]">
              {t.leadership.title}
            </h3>

            <div className="mt-5 h-1.5 w-20 rounded-full bg-gradient-to-r from-brand via-sky-400 to-cyan-300 sm:mt-6 sm:w-24" />

            {leadershipLead && (
              <div className="mt-6 flex items-start gap-3 sm:mt-8 sm:gap-5 text-slate-800">
                <span
                  className="mt-2 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-brand sm:mt-3 sm:h-2.5 sm:w-2.5"
                  aria-hidden="true"
                />
                <p className="max-w-[72rem] text-base leading-7 sm:text-lg sm:leading-8 md:text-[1.18rem] md:leading-[1.8] lg:text-[1.4rem] lg:leading-[1.85]">
                  {leadershipLead}
                </p>
              </div>
            )}

            <ul className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">
              {leadershipDetails.map((paragraph: string) => (
                <li
                  key={paragraph}
                  className="flex items-start gap-3 sm:gap-4 text-slate-800"
                >
                  <span
                    className="mt-2 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-brand sm:mt-3 sm:h-2.5 sm:w-2.5"
                    aria-hidden="true"
                  />
                  <p className="max-w-[72rem] text-base leading-7 sm:text-lg sm:leading-8 md:text-[1.18rem] md:leading-[1.8] lg:text-[1.4rem] lg:leading-[1.85]">
                    {paragraph}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useLanguage } from "@/app/LanguageContext";

export default function Contact() {
  const { t, lang } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { staggerChildren: 0.2 },
  };

  const isKorean = lang === "ko";

  return (
    <section
      id="contact"
      className="border-t border-brand/20 bg-[linear-gradient(180deg,#09111e_0%,#0b1627_100%)] px-4 py-16 text-white sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl text-center">
        <motion.div {...fadeInUp} className="mb-10 sm:mb-12 md:mb-16">
          <h2 className="mb-3 text-2xl font-extrabold tracking-tight sm:mb-4 sm:text-3xl md:text-4xl">
            {t.contact.title}
          </h2>

          <div className="mx-auto h-1 w-16 rounded-full bg-brand sm:w-20" />

          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-200 sm:mt-6 sm:text-lg sm:leading-relaxed">
            <span className="block">{t.contact.desc_line1}</span>
            <span className="block">{t.contact.desc_line2}</span>
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="flex justify-center"
        >
          <motion.div
            variants={fadeInUp}
            className="group flex w-full max-w-[20rem] flex-col items-center rounded-[1.4rem] border border-sky-950/50 bg-[#10233b]/78 p-6 transition-all hover:-translate-y-1 hover:border-brand/40 sm:max-w-[22rem] sm:rounded-[1.6rem] sm:p-7 sm:hover:-translate-y-2"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand shadow-[0_0_20px_rgba(37,99,235,0.15)] transition-colors group-hover:bg-brand/20 sm:mb-5 sm:h-14 sm:w-14">
              <Mail size={22} className="sm:h-6 sm:w-6" />
            </div>

            <h4 className="mb-2 text-base font-bold sm:text-lg">
              {isKorean ? "이메일" : "Email"}
            </h4>

            <a
              href={`mailto:${t.contact.email}`}
              className="break-all text-sm font-medium text-brand sm:text-base"
            >
              {t.contact.email}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
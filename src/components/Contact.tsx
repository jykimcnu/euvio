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
    <section id="contact" className="border-t border-brand/20 bg-[linear-gradient(180deg,#09111e_0%,#0b1627_100%)] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl text-center">
        <motion.div {...fadeInUp} className="mb-16">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">{t.contact.title}</h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-brand"></div>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed text-slate-200">
            {t.contact.desc_line1}
            <br />
            {t.contact.desc_line2}
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-100px" }} className="flex justify-center">
          <motion.div variants={fadeInUp} className="group flex w-48 flex-col items-center rounded-[1.6rem] border border-sky-950/50 bg-[#10233b]/78 p-7 transition-all hover:-translate-y-2 hover:border-brand/40">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand shadow-[0_0_20px_rgba(37,99,235,0.15)] transition-colors group-hover:bg-brand/20">
              <Mail size={24} />
            </div>
            <h4 className="mb-2 text-lg font-bold">{isKorean ? "이메일" : "Email"}</h4>
            <p className="whitespace-nowrap text-sm font-medium text-brand">{t.contact.email}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
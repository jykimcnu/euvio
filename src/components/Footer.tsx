"use client";

import { useLanguage } from "@/app/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0b1627] py-10 text-center text-sm font-medium text-slate-300 border-t border-sky-950/60">
      <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
    </footer>
  );
}
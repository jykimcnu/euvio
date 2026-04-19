"use client";

import { useLanguage } from "@/app/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-sky-950/60 bg-[#0b1627] px-4 py-8 text-center text-xs font-medium text-slate-300 sm:px-6 sm:py-10 sm:text-sm">
      <div className="mx-auto max-w-7xl">
        <p className="leading-relaxed">
          &copy; {new Date().getFullYear()} {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
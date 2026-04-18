"use client";

import { useLanguage } from "@/app/LanguageContext";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();

  const toggleLang = () => {
    setLang(lang === "en" ? "ko" : "en");
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-sky-100/80 bg-white/80 text-slate-900 shadow-[0_10px_40px_rgba(15,23,42,0.04)] backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 py-3">
          <div className="flex justify-between items-center h-20">
            <div>
              <div className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950">EuVio Inc.</div>
              <div className="text-xl md:text-2xl text-slate-700 font-semibold">{t.nav.tagline}</div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-8 font-semibold text-xl md:text-2xl text-slate-800">
                <a href="#hero" className="hover:text-brand transition-colors">{t.nav.home}</a>
                <a href="#vision" className="hover:text-brand transition-colors">{t.nav.vision}</a>
                <a href="#technology" className="hover:text-brand transition-colors">{t.nav.technology}</a>
                <a href="#leadership" className="hover:text-brand transition-colors">{t.nav.leadership}</a>
              </div>
              <button
                onClick={toggleLang}
                className="flex items-center rounded-full border border-brand/15 bg-brand/6 px-3.5 py-2 font-bold text-brand shadow-sm transition-all hover:bg-brand hover:text-white hover:shadow-[0_10px_24px_rgba(47,107,255,0.24)]"
              >
                {lang === "en" ? "한글 (KR)" : "English (EN)"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

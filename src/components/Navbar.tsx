"use client";

import { useState } from "react";
import { useLanguage } from "@/app/LanguageContext";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLang = () => {
    setLang(lang === "en" ? "ko" : "en");
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-sky-100/80 bg-white/80 text-slate-900 shadow-[0_10px_40px_rgba(15,23,42,0.04)] backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-3">
          <div className="flex items-center justify-between min-h-[72px] md:min-h-[88px]">
            <div className="pr-4">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 leading-none">
                EuVio Inc.
              </div>
              <div className="mt-1 text-sm sm:text-base md:text-xl lg:text-2xl text-slate-700 font-semibold leading-snug">
                {t.nav.tagline}
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              <div className="hidden md:flex items-center gap-6 lg:gap-8 font-semibold text-lg lg:text-2xl text-slate-800">
                <a href="#hero" className="hover:text-brand transition-colors">
                  {t.nav.home}
                </a>
                <a href="#vision" className="hover:text-brand transition-colors">
                  {t.nav.vision}
                </a>
                <a href="#technology" className="hover:text-brand transition-colors">
                  {t.nav.technology}
                </a>
                <a href="#leadership" className="hover:text-brand transition-colors">
                  {t.nav.leadership}
                </a>
              </div>

              <button
                onClick={toggleLang}
                className="hidden md:flex items-center rounded-full border border-brand/15 bg-brand/6 px-3.5 py-2 font-bold text-brand shadow-sm transition-all hover:bg-brand hover:text-white hover:shadow-[0_10px_24px_rgba(47,107,255,0.24)]"
              >
                {lang === "en" ? "한글 (KR)" : "English (EN)"}
              </button>

              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm"
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                {menuOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="md:hidden mt-3 rounded-2xl border border-sky-100 bg-white/95 p-4 shadow-lg">
              <div className="flex flex-col gap-4 font-semibold text-base text-slate-800">
                <a
                  href="#hero"
                  onClick={closeMenu}
                  className="hover:text-brand transition-colors"
                >
                  {t.nav.home}
                </a>
                <a
                  href="#vision"
                  onClick={closeMenu}
                  className="hover:text-brand transition-colors"
                >
                  {t.nav.vision}
                </a>
                <a
                  href="#technology"
                  onClick={closeMenu}
                  className="hover:text-brand transition-colors"
                >
                  {t.nav.technology}
                </a>
                <a
                  href="#leadership"
                  onClick={closeMenu}
                  className="hover:text-brand transition-colors"
                >
                  {t.nav.leadership}
                </a>

                <button
                  onClick={() => {
                    toggleLang();
                    closeMenu();
                  }}
                  className="mt-2 flex w-full items-center justify-center rounded-full border border-brand/15 bg-brand/6 px-3.5 py-2 font-bold text-brand shadow-sm transition-all hover:bg-brand hover:text-white"
                >
                  {lang === "en" ? "한글 (KR)" : "English (EN)"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
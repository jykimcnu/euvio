"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { Language, translations, Translation } from "@/lib/translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("ko");

  // 🔥 최초 로드 시 localStorage 또는 브라우저 언어 반영
  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Language | null;

    if (savedLang === "ko" || savedLang === "en") {
      setLangState(savedLang);
    } else {
      const browserLang = navigator.language.toLowerCase();

      if (browserLang.startsWith("ko")) {
        setLangState("ko");
      } else {
        setLangState("en");
      }
    }
  }, []);

  // 🔥 언어 변경 시 저장 + html lang 반영
  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, t: translations[lang] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

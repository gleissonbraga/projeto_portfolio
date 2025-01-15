"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useTranslation } from "react-i18next"
import '../../lib/data/i18n'

interface LanguageContextType {
  currentLanguage: string,
   isDropLanguage: boolean,
   toggleLanguage: (newLang: string) => void,
   toggleDropLang: () => void

}

const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: "pt",
  isDropLanguage: false,
  toggleLanguage: () => {},
  toggleDropLang: () => {}
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { i18n: {changeLanguage, language} } = useTranslation()
  const [currentLanguage, setCurrentLanguage] = useState(language)
  const [isDropLanguage, setIsDropLanguage] = useState(false)


  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "pt";
    setCurrentLanguage(savedLanguage);
    document.documentElement.classList.toggle("en", savedLanguage === "en");

    if (savedLanguage === "en") {
      document.documentElement.classList.add("en");
    }
  }, []);

  const toggleDropLang = () => {
    setIsDropLanguage(!isDropLanguage)
  }

  const toggleLanguage = (newLang: string) => {
    setCurrentLanguage(newLang)
    changeLanguage(newLang)
    setIsDropLanguage(false)
  }

  return (
    <LanguageContext.Provider value={{ currentLanguage, isDropLanguage, toggleDropLang, toggleLanguage}}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

  




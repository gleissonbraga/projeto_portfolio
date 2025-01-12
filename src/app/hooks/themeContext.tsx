"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useTranslation } from 'react-i18next';

interface ThemeContextType {
  theme: string;
  language: string;
  isDropDownOpen: boolean;
  isDropLanguage: boolean;
  toggleTheme: (newTheme: string) => void;
  toggleDropDown: () => void;
  toggleLanguage: () => void;
  toggleDropLang: (newLang: string) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  isDropDownOpen: false,
  toggleTheme: (newTheme: string) => {},
  toggleDropDown: () => {},
  language: 'pt',
  toggleDropLang: (newLang: string) => {},
  isDropLanguage: false,
  toggleLanguage: () => {}
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("light");
  const [language, setLanguege] = useState("pt")
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  const [isDropLanguage, setIsDropLanguage] = useState(false)
    const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light"
    setTheme(savedTheme)
    document.documentElement.classList.toggle("dark", savedTheme === "dark")
  }, [])

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
    setIsDropDownOpen(false)
  }

  const toggleDropLang = (newLang: string) => {
    setLanguege(newLang)
    setIsDropLanguage(false)
  }

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen)
    setIsDropLanguage(false)
  }

  const toggleLanguage = () => {
      setIsDropLanguage(!isDropLanguage)
      setIsDropDownOpen(false)
  }

  return (
    <ThemeContext.Provider value={{ theme, isDropDownOpen, toggleTheme, toggleDropDown, isDropLanguage, toggleLanguage, toggleDropLang, language }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}



"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface ThemeContextType {
  theme: string;
  isDropDownOpen: boolean;
  toggleTheme: (newTheme: string) => void;
  toggleDropDown: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  isDropDownOpen: false,
  toggleTheme: (newTheme: string) => {},
  toggleDropDown: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("light");
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)


  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = (newTheme: string) => {
    const newThemeProp = newTheme
    setTheme(newThemeProp)
    localStorage.setItem("theme", newThemeProp)
    document.documentElement.classList.toggle("dark", newThemeProp === "dark")
    setIsDropDownOpen(false)
  }

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen)
  }


  return (
    <ThemeContext.Provider value={{ theme, isDropDownOpen, toggleTheme, toggleDropDown}}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}



"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

const ThemeContext = createContext({
  theme: "light",
  isDropDownOpen: false,
  toggleTheme: (newTheme: string) => {},
  toggleDropDown: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("light");
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    setIsDropDownOpen(false)
  };

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  return (
    <ThemeContext.Provider value={{ theme, isDropDownOpen, toggleTheme, toggleDropDown }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

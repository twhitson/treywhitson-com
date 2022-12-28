import { useEffect, useState } from "react";

type ThemeOptions = "dark" | "light" | "system";

const useTheme = () => {
  if (typeof window === "undefined")
    return {
      theme: "dark",
      setTheme: () => {},
    };

  const setTheme = (theme: ThemeOptions) => {
    if (theme !== "system") {
      // Whenever the user explicitly chooses a mode
      localStorage.theme = theme;

      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      // Whenever the user explicitly chooses to respect the OS preference
      localStorage.removeItem("theme");
    }
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
    }
  }, []);

  return {
    setTheme,
  };
};

export default useTheme;

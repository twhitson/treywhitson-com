import { useEffect, useState } from "react";

type ThemeOptions = "dark" | "light";

type UseTheme = () => {
  theme: ThemeOptions;
  setTheme: (theme: ThemeOptions) => void;
};

const useTheme: UseTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeOptions>("dark");

  const setTheme = (theme: ThemeOptions) => {
    // Whenever the user explicitly chooses a mode
    localStorage.theme = theme;

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    setCurrentTheme(theme);
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  return {
    theme: currentTheme,
    setTheme,
  };
};

export default useTheme;

"use client";
import { useTheme } from "next-themes";

import Sun from "@/public/assets/desktop/icon-sun.svg";
import Moon from "@/public/assets/desktop/icon-moon.svg";
import { useEffect, useState } from "react";

const ThemeSwitchBtn = () => {
  const { setTheme, resolvedTheme, theme } = useTheme();
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    if (resolvedTheme === "dark") {
      setIsDark(true);
      return;
    }
    setIsDark(false);
  }, []);

  return (
    <div className="flex items-center gap-4">
      <Sun />
      <button
        onClick={() => {
          if (resolvedTheme === "dark") {
            setTheme("light");
            setIsDark(false);
          }
          if (resolvedTheme === "light") {
            setTheme("dark");
            setIsDark(true);
          }
        }}
        className="relative h-6 w-12 rounded-xl bg-White p-[5px]"
        aria-label="theme change btn"
      >
        <span
          className={`${isDark ? "animate-dark" : "animate-light"}  absolute top-[5px] block h-[14px] w-[14px] rounded-full bg-Violet`}
        />
      </button>
      <Moon />
    </div>
  );
};

export default ThemeSwitchBtn;

"use client";
import { useTheme } from "next-themes";

import Sun from "@/public/assets/desktop/icon-sun.svg";
import Moon from "@/public/assets/desktop/icon-moon.svg";

const ThemeSwitchBtn = () => {
  const { setTheme, resolvedTheme, theme } = useTheme();

  return (
    <div className="flex items-center gap-4">
      <Sun />
      <button
        onClick={() => {
          if (resolvedTheme === "dark") setTheme("light");
          if (resolvedTheme === "light") setTheme("dark");
        }}
        className="relative h-6 w-12 rounded-xl bg-White p-[5px]"
        aria-label="theme change btn"
      >
        <span
          className={`${theme === "dark" ? "animate-dark" : "animate-light"} absolute top-[5px] block h-[14px] w-[14px] rounded-full bg-Violet`}
        />
      </button>
      <Moon />
    </div>
  );
};

export default ThemeSwitchBtn;

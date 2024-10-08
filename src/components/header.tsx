"use client";

import { useTheme } from "next-themes";
import { BsMoon, BsSun } from "react-icons/bs";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="flex items-center justify-end max-w-5xl p-4 mx-auto md:my-6">
      <button
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
        aria-label="Toggle dark mode"
      >
        {theme === "light" ? <BsMoon size="2em" /> : <BsSun size="2em" />}
      </button>
    </header>
  );
};

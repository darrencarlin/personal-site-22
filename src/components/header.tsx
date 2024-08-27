"use client";

import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "next-themes";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="flex items-center justify-end max-w-screen-lg p-4 mx-auto md:my-6">
      <button
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        {theme === "light" ? <BsMoon size="2em" /> : <BsSun size="2em" />}
      </button>
    </header>
  );
};

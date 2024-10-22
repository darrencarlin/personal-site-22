"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsMoon, BsSun } from "react-icons/bs";

export const Header = () => {
  const path = usePathname();
  const { theme, setTheme } = useTheme();

  const isNotHome = path !== "/";

  return (
    <header className="flex items-center justify-between max-w-5xl p-4 mx-auto md:my-6">
      <div className="flex gap-4">
        {isNotHome && (
          <Link href="/#posts" className="hover:underline">
            Home
          </Link>
        )}
      </div>
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

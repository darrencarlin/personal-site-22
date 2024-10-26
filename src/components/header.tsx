"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const path = usePathname();

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
    </header>
  );
};

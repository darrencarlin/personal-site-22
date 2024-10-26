import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

export const PillLink = ({
  href,
  children,
  ...props
}: {
  href: string;
  children: React.ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <Link
    className="flex items-center gap-2 px-4 py-2 transition-all duration-300 bg-neutral-900 border rounded-full border-neutral-800 hover:border-neutral-600 hover:bg-neutral-950 hover:-translate-y-1"
    href={href}
    {...props}
  >
    {children}
  </Link>
);

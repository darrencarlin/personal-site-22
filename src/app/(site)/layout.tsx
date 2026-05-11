import Fathom from "@/components/fathom-analytics";
import { Header } from "@/components/header";
import { buildMetadata } from "@/lib/seo";
import { getHomePage } from "@/sanity/lib/fetch";
import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";

import "../globals.css";

export const revalidate = 86400;

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const DEFAULT_KEYWORDS = [
  "Front-End Engineer",
  "React",
  "TypeScript",
  "Web Development",
  "UI/UX Design",
  "Full Stack Engineer",
  "Web Development Projects",
];

export async function generateMetadata(): Promise<Metadata> {
  const home = await getHomePage();

  return buildMetadata({
    defaults: home?.seo,
    twitterHandle: home?.twitterHandle,
    fallbackTitle: `It's ${DAYS[new Date().getDay()]}!`,
    fallbackDescription:
      "Hi, I'm Darren Carlin, a Front-End Engineer based in NYC, specializing in React and TypeScript. Explore my web development projects and connect with me to see how I can enhance your user experience.",
    fallbackKeywords: DEFAULT_KEYWORDS,
    authors: ["Darren Carlin"],
  });
}

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700"],
  variable: "--font-inter",
});

const display = DM_Serif_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-display",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${display.variable} font-light font-sans text-neutral-200`}
      >
        <Fathom />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

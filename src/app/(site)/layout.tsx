import Fathom from "@/components/fathom-analytics";
import { Header } from "@/components/header";
import { Metadata } from "next";

import { Fira_Mono, Poppins } from "next/font/google";
import "./globals.css";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const day = new Date().getDay();

  const data = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return {
    title: `It's ${data[day]}!`,
    description:
      "Hi, I’m Darren Carlin, a Front-End Engineer based in NYC, specializing in React and TypeScript. Explore my web development projects and connect with me to see how I can enhance your user experience.",
    authors: [{ name: "Darren Carlin" }],
    keywords: [
      "Front-End Engineer",
      "React",
      "TypeScript",
      "Web Development",
      "UI/UX Design",
      "Full Stack Engineer",
      "Web Development Projects",
    ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: false,
      },
    },
  };
}

const fira = Fira_Mono({ subsets: ["latin"], weight: ["400", "700"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} font-light text-neutral-200 text-lg`}
      >
        <Fathom />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

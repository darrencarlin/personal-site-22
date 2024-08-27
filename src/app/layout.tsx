import Fathom from "@/components/fathom-analytics";
import { Header } from "@/components/header";
import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Fira_Mono } from "next/font/google";
import "./globals.css";

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
    robots: "index, follow",
  };
}

const fira = Fira_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fira.className}>
        <ThemeProvider attribute="class">
          <Fathom />
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

import Fathom from "@/components/fathom-analytics";
import { Header } from "@/components/header";
import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";

import "../globals.css";

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

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	weight: ["300", "400", "500", "600", "700", "800", "900"],
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

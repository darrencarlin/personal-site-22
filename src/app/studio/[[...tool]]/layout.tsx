export { metadata, viewport } from "next-sanity/studio";

export default function StudioLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<main>{children}</main>
			</body>
		</html>
	);
}

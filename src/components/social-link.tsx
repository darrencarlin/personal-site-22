import { PillLink } from "./pill-button";

interface Props {
	href: string;
	name?: string;
	icon?: React.ReactNode;
}

export const SocialLink = ({ href, name, icon }: Props) => (
	<PillLink
		href={href}
		target="_blank"
		rel="noreferrer"
		style={{ textDecoration: "none" }}
		className="flex items-center gap-2 p-3 transition-all duration-300 border rounded-full bg-neutral-900 border-neutral-800 hover:border-neutral-600 hover:bg-neutral-950 hover:-translate-y-1"
	>
		<span>{icon}</span>
		{name && <span>{name}</span>}
	</PillLink>
);

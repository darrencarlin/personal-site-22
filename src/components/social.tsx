import { SectionTitle } from "./section-title";
import { SocialLink } from "./social-link";
import {
	BsGithub,
	BsLinkedin,
	BsInstagram,
	BsMailbox,
	BsTwitter,
	BsX,
} from "react-icons/bs";

export const SocialSection = () => {
	return (
		<>
			<SectionTitle title="Socials" />
			<div className="mb-6">
				<div className="flex flex-wrap gap-4">
					<SocialLink
						href="https://www.linkedin.com/in/darrencarlin/"
						name="LinkedIn"
						icon={<BsLinkedin />}
					/>
					<SocialLink
						href="https://www.github.com/darrencarlin"
						name="Github"
						icon={<BsGithub />}
					/>
					<SocialLink
						href="https://www.instagram.com/darrenjcarlin/"
						name="Instagram"
						icon={<BsInstagram />}
					/>
					<SocialLink
						href="https://www.twitter.com/darrenjcarlin"
						name="X"
						icon={<BsX />}
					/>
					<SocialLink
						href="mailto:darren@darrencarlin.com"
						name="Email"
						icon={<BsMailbox />}
					/>
				</div>
			</div>
		</>
	);
};

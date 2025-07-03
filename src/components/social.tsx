import { SectionTitle } from "./section-title";
import { SocialLink } from "./social-link";
import { BsGithub, BsLinkedin, BsInstagram, BsMailbox } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
export const SocialSection = () => {
	return (
		<>
			<SectionTitle title="Socials" />
			<div className="mb-6">
				<div className="flex flex-wrap gap-4">
					<SocialLink
						href="https://www.linkedin.com/in/darrencarlin/"
						icon={<BsLinkedin />}
					/>
					<SocialLink
						href="https://www.github.com/darrencarlin"
						icon={<BsGithub />}
					/>
					<SocialLink
						href="https://www.instagram.com/darrenjcarlin/"
						icon={<BsInstagram />}
					/>
					<SocialLink
						href="https://www.twitter.com/darrenjcarlin"
						icon={<FaXTwitter />}
					/>
					<SocialLink
						href="mailto:darren@darrencarlin.com"
						icon={<BsMailbox />}
					/>
				</div>
			</div>
		</>
	);
};

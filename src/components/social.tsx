import { SocialLink } from "./social-link";
import { BsGithub, BsLinkedin, BsInstagram, BsMailbox } from "react-icons/bs";

export const SocialSection = () => {
  return (
    <div className="mb-6">
      <div className="mb-4">
        <h2 className="text-2xl font-medium">Socials</h2>
      </div>
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
          href="mailto:darren@darrencarlin.com"
          name="Email"
          icon={<BsMailbox />}
        />
      </div>
    </div>
  );
};

import { SocialLink } from "./social-link";

export const SocialSection = () => {
  return (
    <ul className="mb-6">
      <li className="mb-2">
        <h2 className="text-2xl font-medium">Socials</h2>
      </li>
      <li>
        -{" "}
        <SocialLink
          href="https://www.linkedin.com/in/darrencarlin/"
          name="LinkedIn"
        />
      </li>
      <li>
        -{" "}
        <SocialLink href="https://www.github.com/darrencarlin" name="Github" />
      </li>
      <li>
        -{" "}
        <SocialLink
          href="https://www.instagram.com/darrenjcarlin/"
          name="Instagram"
        />
      </li>
      <li>
        - <SocialLink href="mailto:darren@darrencarlin.com" name="Email" />
      </li>
    </ul>
  );
};

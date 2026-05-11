import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsMastodon,
  BsYoutube,
  BsEnvelope,
} from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { SiBluesky } from "react-icons/si";
import { SectionTitle } from "./section-title";
import { SocialLink } from "./social-link";

const socialIcons: Record<string, React.ReactNode> = {
  linkedin: <BsLinkedin />,
  github: <BsGithub />,
  instagram: <BsInstagram />,
  x: <FaXTwitter />,
  email: <BsEnvelope />,
  mastodon: <BsMastodon />,
  bluesky: <SiBluesky />,
  youtube: <BsYoutube />,
};

interface Social {
  platform?: string | null;
  href?: string | null;
}

interface Props {
  items: Social[];
}

export const SocialSection = ({ items }: Props) => {
  if (!items?.length) return null;
  return (
    <>
      <SectionTitle title="Socials" />
      <div className="mb-6">
        <div className="flex flex-wrap gap-4">
          {items.map((item, i) => {
            if (!item.href || !item.platform) return null;
            return (
              <SocialLink
                key={`${item.platform}-${i}`}
                href={item.href}
                icon={socialIcons[item.platform] ?? null}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

import Name from "../Name";
import { ListTitle } from "../_shared/style";
import { SocialList } from "./style";

const SocialSection = () => {
  return (
    <SocialList>
      <li>
        <ListTitle>Social</ListTitle>
      </li>
      <li>
        -{" "}
        <Name
          href="https://www.linkedin.com/in/darrencarlin/"
          name="LinkedIn"
        />
      </li>
      <li>
        - <Name href="https://www.github.com/darrencarlin" name="Github" />
      </li>
      <li>
        -{" "}
        <Name
          href="https://www.instagram.com/darrenjcarlin/"
          name="Instagram"
        />
      </li>
      <li>
        - <Name href="mailto:darren@darrencarlin.com" name="Email" />
      </li>
    </SocialList>
  );
};

export default SocialSection;

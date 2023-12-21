import { Blurb, Bio, Avatar } from "./style";
import avatar from "../../../public/me.webp";
import { StyledLink } from "../_shared/style";

const BlurbSection = () => {
  return (
    <Blurb>
      <Bio>
        <p>Hi, I&apos;m Darren.</p>
        <p>
          I am a front-end engineer focused on building web UI and user
          experiences with React and TypeScript.
        </p>
        <p>
          Originally from Waterford, Ireland, I studied and worked in Cork,
          Ireland before moving to the US in 2018.
        </p>
        <p>
          I currently live in NYC with my partner Calla and my{" "}
          {new Date().getFullYear() - 2012} year old Pembroke Welsh Corgi{" "}
          <StyledLink
            href="https://www.instagram.com/georgethewelshcorgi/"
            target="_blank"
            rel="noreferrer"
          >
            George
          </StyledLink>
          .
        </p>

        <p>
          My other interests include video games,{" "}
          <StyledLink
            href="https://flickr.com/photos/dazftw"
            target="_blank"
            rel="noreferrer"
          >
            photography{" "}
          </StyledLink>
          and being in the ocean.
        </p>
      </Bio>

      <Avatar src={avatar} alt="darren carlin headshot" placeholder="blur" />
    </Blurb>
  );
};

export default BlurbSection;

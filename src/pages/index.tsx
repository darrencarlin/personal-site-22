import BlurbSection from "../components/Blurb";
import WorkSection from "../components/Work";
import EducationSection from "../components/Education";
import ProjectSection from "../components/Projects";
import SocialSection from "../components/Social";
import { Section, Wrapper } from "../components/_shared/style";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Section>
        <Wrapper>
          <BlurbSection />
          <WorkSection />
          <EducationSection />
          <ProjectSection />
          <SocialSection />
        </Wrapper>
      </Section>
    </>
  );
}

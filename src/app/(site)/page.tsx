import { BlurbSection } from "@/components/blurb";
import { EducationSection } from "@/components/education";
import { Posts } from "@/components/posts";
import { ProjectSection } from "@/components/projects";
import { SocialSection } from "@/components/social";
import { WorkSection } from "@/components/work";

export default async function Home() {
  return (
    <section className="px-4 mx-auto mb-64 lg:max-w-5xl">
      <BlurbSection />
      <WorkSection />
      <EducationSection />
      <ProjectSection />
      <SocialSection />
      <Posts />
    </section>
  );
}

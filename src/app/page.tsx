import { BlurbSection } from "@/components/blurb";
import { EducationSection } from "@/components/education";
import { ProjectSection } from "@/components/projects";
import { SocialSection } from "@/components/social";
import { WorkSection } from "@/components/work";

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <section className="px-4 mx-auto lg:max-w-5xl">
      <BlurbSection />
      <WorkSection />
      <EducationSection />
      <ProjectSection />
      <SocialSection />
    </section>
  );
}

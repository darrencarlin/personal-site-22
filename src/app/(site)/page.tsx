import { BlurbSection } from "@/components/blurb";
import { EducationSection } from "@/components/education";
import { Posts } from "@/components/posts";
import { ProjectSection } from "@/components/projects";
import { SocialSection } from "@/components/social";
import { WorkSection } from "@/components/work";
import { getHomePage } from "@/sanity/lib/fetch";

export default async function Home() {
  const home = await getHomePage();

  return (
    <section className="px-4 mx-auto md:mb-64 lg:max-w-5xl">
      <BlurbSection intro={home?.intro} avatar={home?.avatar} />
      <WorkSection items={home?.work ?? []} />
      <EducationSection items={home?.education ?? []} />
      <ProjectSection items={home?.projects ?? []} />
      <SocialSection items={home?.socials ?? []} />
      <Posts />
    </section>
  );
}

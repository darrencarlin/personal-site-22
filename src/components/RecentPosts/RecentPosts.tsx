import Section from "components/Section";
import SectionTitle from "components/SectionTitle";
import Wrapper from "components/Wrapper";
import { RecentPostsProps } from "types/components";
import { Anchor, Category, Post, Title } from "./style";

const RecentPosts = ({ recent }: RecentPostsProps) => {
  return (
    <Section>
      <Wrapper maxWidth={900}>
        <SectionTitle title="Recent Posts" />
        {recent.map((post) => (
          <Post key={post.title}>
            <Title href={`/blog/${post.slug}`} passHref>
              <Anchor>{post.title}</Anchor>
            </Title>
            <Category>{post.category}</Category>
          </Post>
        ))}
      </Wrapper>
    </Section>
  );
};

export default RecentPosts;

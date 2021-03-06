import Navigation from "components/Navigation";
import Section from "components/Section";
import SectionTitle from "components/SectionTitle";
import Wrapper from "components/Wrapper";
import { format } from "date-fns";
import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";
import { Post } from "types/components";
import { getPosts } from "utils/contentful";
import {
  Anchor,
  PublishDate,
  Article,
  Title,
  BlogContainer,
} from "../styles/pages/blog/style";

interface BlogProps {
  total: number;
  posts: Post[];
}

const Blog = ({ total, posts }: BlogProps) => {
  const grouped = posts.reduce(function (r, a) {
    r[format(new Date(a.publishDate), "yyyy")] =
      r[format(new Date(a.publishDate), "yyyy")] || [];
    r[format(new Date(a.publishDate), "yyyy")].push(a);
    return r;
  }, Object.create(null));

  let arr = [];
  for (const key of Object.keys(grouped)) {
    const obj = {
      [key]: grouped[key],
    };
    arr.push(obj);
  }

  console.log(arr);

  return (
    <BlogContainer>
      <Wrapper maxWidth={1000}>
        {posts.map((post: Post) => (
          <Link key={post.title} href={`/blog/${post.slug}`} passHref>
            <Anchor>
              <Article>
                <Title>{post.title}</Title>
                <PublishDate>
                  {format(new Date(post.publishDate), "MMM dd, yy")}
                </PublishDate>
              </Article>
            </Anchor>
          </Link>
        ))}
      </Wrapper>
    </BlogContainer>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const { total, posts } = await getPosts(0, 10);

  return { props: { total, posts } };
};

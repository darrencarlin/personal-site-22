import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import CodeSnippet from "components/CodeSnippet";
import { format } from "date-fns";
import { GetStaticPaths, GetStaticProps } from "next";
import { PostWrapper } from "styles/pages/blog/style";

import { Post } from "types/components";
import { ContentfulNode, Links } from "types/contentful";
import { getPost, getSlugs } from "utils/contentful";

const Post = (props: Post) => {
  const {
    title,
    publishDate,
    body: { links, json },
  } = props;

  const renderOptions = (links: Links) => {
    // create an entry map
    const entryMap = new Map();
    // loop through the block linked entries and add them to the map
    for (const entry of links.entries.block) {
      entryMap.set(entry.sys.id, entry);
    }

    return {
      renderNode: {
        [BLOCKS.EMBEDDED_ENTRY]: (node: ContentfulNode) => {
          const entry = entryMap.get(node.data.target.sys.id);

          if (entry.__typename === "CodeSnippet") {
            return (
              <CodeSnippet language={entry.language} code={entry.snippet} />
            );
          }
        },
      },
    };
  };

  const options = renderOptions(links);

  return (
    <PostWrapper>
      <h1>{title}</h1>
      <p>{format(new Date(publishDate), "MMM dd, y")}</p>
      {documentToReactComponents(json, options)}
    </PostWrapper>
  );
};
export default Post;

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context?.params?.slug;

  if (slug) {
    const data = await getPost(slug);

    return { props: data };
  }
  return { notFound: true };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getSlugs();

  const paths = slugs.map(({ slug }) => ({
    params: { slug: slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

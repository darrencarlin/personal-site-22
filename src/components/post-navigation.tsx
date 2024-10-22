import { Post } from "@/sanity.types";
import { getNextPost, getPrevPost } from "@/sanity/lib/fetch";
import { PillLink } from "./pill-button";

const PostNavigationLink = ({
  post,
  direction,
}: {
  post: Post;
  direction: "next" | "prev";
}) => {
  if (post === null) {
    return <div />;
  }

  return (
    <PillLink href={`/post/${post.slug?.current}`}>
      {direction === "prev" && "←"} {post.title} {direction === "next" && "→"}
    </PillLink>
  );
};

export const PostNavigation = async ({
  createdAt,
}: {
  createdAt: Post["_createdAt"];
}) => {
  const [nextPost, prevPost] = await Promise.all([
    getNextPost(createdAt),
    getPrevPost(createdAt),
  ]);

  if (!nextPost && !prevPost) {
    return <div />;
  }

  return (
    <div>
      <h2 className="mb-4 text-2xl font-medium">More Posts</h2>
      <div className="flex justify-between">
        <PostNavigationLink post={prevPost} direction="prev" />
        <PostNavigationLink post={nextPost} direction="next" />
      </div>
    </div>
  );
};

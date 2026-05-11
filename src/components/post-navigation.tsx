import Link from "next/link";
import { Post } from "@/sanity.types";
import { getNextPost, getPrevPost } from "@/sanity/lib/fetch";

const PostNavigationLink = ({
  post,
  direction,
}: {
  post: Post;
  direction: "next" | "prev";
}) => {
  if (!post) return null;

  const label = direction === "next" ? "Newer post" : "Older post";

  return (
    <Link
      href={`/post/${post.slug?.current}`}
      className="flex flex-col gap-1 px-5 py-4 transition-all duration-300 bg-neutral-900 border rounded-lg border-neutral-800 hover:border-neutral-600 hover:bg-neutral-950"
    >
      <span className="text-sm text-neutral-400">
        {direction === "prev" ? "← " : ""}
        {label}
        {direction === "next" ? " →" : ""}
      </span>
      <span className="font-medium">{post.title}</span>
    </Link>
  );
};

export const PostNavigation = async ({
  publishedAt,
  id,
}: {
  publishedAt: string;
  id: string;
}) => {
  const [nextPost, prevPost] = await Promise.all([
    getNextPost(publishedAt, id),
    getPrevPost(publishedAt, id),
  ]);

  if (!nextPost && !prevPost) return null;

  return (
    <div>
      <h2 className="mb-4 text-2xl font-medium">More Posts</h2>
      <div className="flex flex-col gap-3">
        <PostNavigationLink post={nextPost} direction="next" />
        <PostNavigationLink post={prevPost} direction="prev" />
      </div>
    </div>
  );
};

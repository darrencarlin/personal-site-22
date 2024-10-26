import { Post } from "@/sanity.types";
import { formatDate } from "@/utils/functions";
import Link from "next/link";

export const PostsList = ({ posts }: { posts: Post[] }) => (
  <ul className="grid grid-cols-1 gap-2">
    {posts.map((post) => (
      <li key={post.slug?.current} className="flex justify-between">
        <Link href={`/post/${post.slug?.current}`} className="hover:underline">
          {post.title}
        </Link>
        <span className="font-medium">
          {formatDate(post.publishedAt || "")}
        </span>
      </li>
    ))}
  </ul>
);

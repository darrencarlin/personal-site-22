import { Post } from "@/sanity.types";

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
  });
};

interface GroupedPosts {
  [key: number]: Post[];
}

export const groupAndSortPostsByYear = (posts: Post[]): [string, Post[]][] => {
  const grouped = posts.reduce((acc: GroupedPosts, post) => {
    const year = new Date(post.publishedAt || "").getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {});

  return Object.entries(grouped).sort(([a], [b]) => parseInt(b) - parseInt(a));
};

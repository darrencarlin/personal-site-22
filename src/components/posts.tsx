import { getPostsListData } from "@/sanity/lib/fetch";
import { groupAndSortPostsByYear } from "@/utils/functions";
import { PostsList } from "./post-list";
import { SectionTitle } from "./section-title";

export const Posts = async () => {
	const posts = await getPostsListData();
	const sortedGroupedPosts = groupAndSortPostsByYear(posts);

	if (sortedGroupedPosts.length === 0) {
		return null;
	}

	return (
		<>
			<SectionTitle title="Posts" />
			<div className="mb-6" id="posts">
				<ul className="grid grid-cols-1 gap-4">
					{sortedGroupedPosts.map(
						([year, yearPosts]) =>
							yearPosts.length > 0 && (
								<li key={year} className="list-none">
									<h2 className="mb-4 text-lg font-medium underline underline-offset-4">
										{year}
									</h2>
									<PostsList posts={yearPosts} />
								</li>
							),
					)}
				</ul>
			</div>
		</>
	);
};

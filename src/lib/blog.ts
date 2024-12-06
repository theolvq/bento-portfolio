import type { BlogPost } from '$lib/types';

/**
 * Get all blog posts with their metadata
 */
export async function getAllPosts() {
	const posts = await Promise.all(
		Object.entries(import.meta.glob('/posts/*.md')).map(async ([path, resolver]) => {
			const { metadata } = (await resolver()) as { metadata: BlogPost };
			return {
				...metadata,
				slug: path.slice(7, -3) // Remove '/posts/' and '.md'
			};
		})
	);

	// Sort posts by date, newest first
	return posts.sort(
		(a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
	);
}

export async function getLastPost() {
	const posts = await getAllPosts();
	return posts[0];
}

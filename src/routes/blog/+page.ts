import { getAllPosts } from '$lib/blog';


export async function load() {
	const posts = await getAllPosts();
	return { posts };
}

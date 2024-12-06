export async function load({ params }) {
	try {
		const post = await import(`../../../../posts/${params.slug}.md`);
		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		console.error(e);
		throw new Error(`Could not find post ${params.slug}`);
	}
}

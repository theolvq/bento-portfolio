<script lang="ts">
	import type { BlogPost } from '$lib/types';

	export let data: { posts: BlogPost[] };
</script>

<div class="mx-auto max-w-xl px-4 py-8">
	<h1 class="mb-8 text-4xl font-bold">Blog Posts</h1>

	<div class="space-y-8">
		{#each data.posts as post}
			<article class="border-b border-gray-200 pb-8">
				<a href="/blog/{post.slug}" class="block hover:opacity-75">
					<h2 class="mb-2 text-2xl font-semibold">{post.title}</h2>
					<p class="mb-2 text-gray-600">{post.excerpt}</p>
					<div class="flex items-center text-sm text-gray-500">
						<time datetime={post.publishedAt}>
							{new Date(post.publishedAt).toLocaleDateString()}
						</time>
						{#if post.tags}
							<div class="ml-4 flex gap-2">
								{#each post.tags as tag}
									<span class="rounded bg-gray-100 px-2 py-1">
										{tag}
									</span>
								{/each}
							</div>
						{/if}
					</div>
				</a>
			</article>
		{/each}
	</div>
</div>

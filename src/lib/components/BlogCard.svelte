<script lang="ts">
	type Props = {
		lastBlogPost: BlogPost;
	};
	import type { BlogPost } from '$lib/types';
	import Card from './Card.svelte';
	const { lastBlogPost }: Props = $props();
</script>

<Card direction="right" delay={800}>
	<h2 class="mb-2 text-xl font-semibold">Blog & Articles</h2>
	<p class="opacity-80">Thoughts on web development, design, and tech</p>
	<a
		href={`/blog/${lastBlogPost.slug}`}
		class="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm transition-all hover:bg-white/20"
	>
		{lastBlogPost.title}
	</a>
	<a
		href="/blog"
		class="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm transition-all hover:bg-white/20"
	>
		Read more
		<svg
			class="h-4 w-4 transition-transform group-hover:translate-x-1"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
		</svg>
	</a>
</Card>

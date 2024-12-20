<script lang="ts">
	type Props = {
		lastBlogPost: BlogPost;
	};


	import { onMount } from 'svelte';
	import type { BlogPost } from '$lib/types';
	import IntroCard from './IntroCard.svelte';
	import CurrentRoleCard from './CurrentRoleCard.svelte';
	import TechStackCard from './TechStackCard.svelte';
	import FeaturedWorkCard from './FeaturedWorkCard.svelte';
	import BlogCard from './BlogCard.svelte';
	let { lastBlogPost }: Props = $props();
	let mounted = $state(false);

	onMount(() => {
		mounted = true;
	});
</script>

<div class="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6 md:p-12">
	<div class="mx-auto max-w-6xl">
		<div class="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
			<!-- Main Intro - Large Card -->
			{#if mounted}
				<IntroCard />
				<!-- Current Role -->
				<CurrentRoleCard />
				<!-- Tech Stack -->
				<TechStackCard />
				<!-- Featured Work - Spans 2 columns -->
				<FeaturedWorkCard />

				<!-- Blog/Articles Link Box -->
				<BlogCard {lastBlogPost} />
			{/if}
		</div>
	</div>
</div>

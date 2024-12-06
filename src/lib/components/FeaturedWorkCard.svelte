<script lang="ts">
	import { featuredWork } from '$lib/data';
	import Card from './Card.svelte';
</script>

<Card direction="bottom" delay={600} class="md:col-span-2">
	<h2 class="mb-4 text-xl font-semibold">Featured Work</h2>
	<div class="grid gap-4 sm:grid-cols-2">
		{#each featuredWork as work}
			<a
				href={work.link}
				target="_blank"
				rel="noopener noreferrer"
				class="group flex flex-col rounded-xl bg-white/10 p-4 transition-all hover:bg-white/20"
			>
				<h3 class="font-medium">{work.title}</h3>
				<p class="mt-1 text-sm opacity-80">{work.description}</p>
			</a>
		{/each}
	</div>
</Card>

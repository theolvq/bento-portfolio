<script lang="ts">
	import { techStack } from '$lib/data';
	import Card from './Card.svelte';
</script>

<Card direction="right" delay={400}>
	<h2 class="mb-4 text-xl font-semibold">Tech Stack</h2>
	<ul class="flex flex-wrap gap-2">
		{#each techStack as tech}
			<li class="w-fit rounded-full bg-white/20 px-3 py-1 text-sm">{tech}</li>
		{/each}
	</ul>
</Card>

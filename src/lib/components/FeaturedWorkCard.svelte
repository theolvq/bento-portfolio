<script lang="ts">
	import { clickOutside } from '$lib/outside';
	import type { FeaturedWork } from '$lib/types';
	import { featuredWork } from '$lib/data';
	import Card from './Card.svelte';
	import { flyAndScale } from '$lib/transitions';
	let selectedWork: FeaturedWork | null = $state(null);

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Escape') selectedWork = null;
	};
</script>

<Card direction="bottom" delay={600} class="md:col-span-2">
	<h2 class="mb-4 text-xl font-semibold">Featured Work</h2>
	<div class="z-50 grid gap-4 sm:grid-cols-2">
		{#each featuredWork as work}
			<div
				class="relative"
				use:clickOutside={() => {
					if (work.title === selectedWork?.title) {
						selectedWork = null;
					}
				}}
			>
				<button
					onclick={() => (selectedWork = work)}
					class="group flex w-full flex-col rounded-xl bg-white/10 p-4 transition-all hover:bg-white/20"
				>
					<h3 class="font-medium">{work.title}</h3>
					<p class="mt-1 text-sm opacity-80">{work.description}</p>
				</button>

				{#if selectedWork?.title === work.title}
					<div
						transition:flyAndScale={{ y: 100, x: -100, duration: 300, start: 0.5 }}
						class="absolute bottom-full left-1/2 z-50 w-full max-w-lg -translate-x-1/2 py-2"
					>
						<div class="relative rounded-xl bg-white/80 p-4 text-slate-600 backdrop-blur-sm">
							<h4 class="mb-2 text-lg font-bold">{selectedWork?.title}</h4>
							<p class="mb-4 text-sm text-gray-700">{selectedWork?.copy}</p>
							<ul class="mb-4 flex flex-wrap gap-2">
								{#each selectedWork?.stack as tech}
									<li class="rounded-md bg-slate-500 px-2 py-1 text-xs text-white">{tech}</li>
								{/each}
							</ul>
							<a
								href={selectedWork.link}
								target="_blank"
								rel="noopener noreferrer"
								class="inline-block rounded-lg bg-slate-500 px-4 py-2 font-semibold text-white transition-colors hover:bg-slate-600"
							>
								View Project
							</a>
							<svg
								class="absolute right-1/2 top-full h-5 w-5 -translate-x-1/2 -translate-y-2.5 text-white/80"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path d="M10 20 L20 10 L0 10 Z" />
							</svg>
						</div>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</Card>
<svelte:window onkeydown={handleKeyDown} />

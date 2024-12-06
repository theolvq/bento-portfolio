<script>
	import { flyAndFade } from '$lib/transitions';
	import { techStack, featuredWork } from '$lib';
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<div class="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6 md:p-12">
	<div class="mx-auto max-w-6xl">
		<div class="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
			<!-- Main Intro - Large Card -->
			{#if mounted}
				<div
					in:flyAndFade={{ direction: 'top-left', delay: 0 }}
					class="flex flex-col justify-between rounded-3xl bg-white/10 p-8 text-white backdrop-blur-sm md:col-span-2 md:row-span-2"
				>
					<div>
						<h1 class="mb-4 text-4xl font-bold md:text-5xl">Hi, I'm Theo</h1>
						<p class="text-xl leading-relaxed opacity-90">
							Fullstack Developer with a passion for frontend excellence. Crafting beautiful,
							performant web experiences is what gets me excited.
						</p>
					</div>
					<div class="mt-8 flex gap-4">
						<a
							href="https://github.com/yourusername"
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 transition-colors hover:bg-white/20"
						>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path
									fill-rule="evenodd"
									d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
									clip-rule="evenodd"
								/>
							</svg>
							GitHub
						</a>
						<a
							href="https://linkedin.com/in/yourusername"
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 transition-colors hover:bg-white/20"
						>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
								<path
									d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
								/>
							</svg>
							LinkedIn
						</a>
					</div>
				</div>

				<!-- Current Role -->
				<div
					in:flyAndFade={{ direction: 'right', delay: 200 }}
					class="rounded-3xl bg-white/10 p-6 text-white backdrop-blur-sm"
				>
					<h2 class="mb-3 text-xl font-semibold">Currently @</h2>
					<div class="flex items-center gap-3">
						<div class="flex-1">
							<p class="font-medium">Lumber</p>
							<p class="opacity-80">Fullstack Developer</p>
							<p class="text-sm opacity-70">Dev & Design Studio</p>
						</div>
					</div>
				</div>

				<!-- Tech Stack -->
				<div
					in:flyAndFade={{ direction: 'right', delay: 400 }}
					class="rounded-3xl bg-white/10 p-6 text-white backdrop-blur-sm"
				>
					<h2 class="mb-4 text-xl font-semibold">Tech Stack</h2>
					<ul class="flex flex-wrap gap-2">
						{#each techStack as tech}
							<li class="w-fit rounded-full bg-white/20 px-3 py-1 text-sm">{tech}</li>
						{/each}
					</ul>
				</div>

				<!-- Featured Work - Spans 2 columns -->
				<div
					in:flyAndFade={{ direction: 'bottom', delay: 600 }}
					class="rounded-3xl bg-white/10 p-6 text-white backdrop-blur-sm md:col-span-2"
				>
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
				</div>

				<!-- Blog/Articles Link Box -->
				<div
					in:flyAndFade={{ direction: 'right', delay: 800 }}
					class="rounded-3xl bg-white/10 p-6 text-white backdrop-blur-sm"
				>
					<h2 class="mb-2 text-xl font-semibold">Blog & Articles</h2>
					<p class="opacity-80">Thoughts on web development, design, and tech</p>
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
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</a>
				</div>
			{/if}
		</div>
	</div>
</div>

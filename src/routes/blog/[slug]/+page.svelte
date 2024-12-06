<script lang="ts">

	const { data } = $props();

</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="description" content={data.meta.excerpt} />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.excerpt} />
</svelte:head>

<article class="mx-auto max-w-prose px-4 py-8">
	<header class="mb-8">
		<h1 class="mb-4 text-5xl font-bold">{data.meta.title}</h1>
		<div class="flex items-center text-gray-600">
			<time datetime={data.meta.publishedAt}>
				{new Date(data.meta.publishedAt).toLocaleDateString()}
			</time>
			{#if data.meta.tags}
				<div class="ml-4 flex gap-2">
					{#each data.meta.tags as tag}
						<span class="rounded bg-gray-100 px-2 py-1">
							{tag}
						</span>
					{/each}
				</div>
			{/if}
		</div>
	</header>

	<div class="prose prose-lg">
		<data.content />
	</div>
</article>

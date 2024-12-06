<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	let { children } = $props();
</script>

{#if $page.url.pathname !== '/'}
	<nav class="fixed left-4 top-4 flex gap-2">
		<button
			onclick={() => window.history.back()}
			class="rounded-lg bg-gray-800/80 p-3 text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-gray-700"
			aria-label="Go back"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M10 19l-7-7m0 0l7-7m-7 7h18"
				/>
			</svg>
		</button>
		<button
			onclick={() => (window.location.href = '/')}
			class="rounded-lg bg-gray-800/80 p-3 text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-gray-700"
			aria-label="Home"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
				/>
			</svg>
		</button>
	</nav>
{/if}

{@render children()}

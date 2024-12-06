<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	type Props = SvelteHTMLElements['div'] & {
		direction: 'top-left' | 'right' | 'bottom';
		delay: number;
		class?: string;
	};

	import { flyAndFade } from '$lib/transitions';
	const { children, direction, delay, class: className }: Props = $props();
</script>

<div
	in:flyAndFade={{ direction, delay }}
	class={`flex flex-col justify-between rounded-3xl bg-white/10 p-8 text-white backdrop-blur-sm ${className}`}
>
	{@render children?.()}
</div>

<script lang="ts">
	import Card from './Card.svelte';
</script>

<Card direction="right" delay={200}>
	<h2 class="mb-3 text-xl font-semibold">Currently @</h2>
	<div class="flex items-center gap-3">
		<div class="flex-1">
			<p class="font-medium">Lumber</p>
			<p class="opacity-80">Fullstack Developer</p>
			<p class="text-sm opacity-70">Dev & Design Studio</p>
		</div>
	</div>
</Card>

<script lang="ts">
	import Arrows from './Arrows.svelte';
	import Button from './Button.svelte';
	// export let range: number = 1;
</script>

<div class="container">
	<Arrows variants="left" />
	<Button label="1" />
	<Button label="2" />
	<Button label="3" selected />
	<Button label="4" />
	<Button label="5" />
	<Button label="6" />
	<Button label="..." />
	<Button label="23" />
	<Arrows variants="right" />
</div>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	.container {
		display: flex;
		justify-content: center;
		gap: 12px;
	}
</style>

<script lang="ts">
	export let label: string;
	export let selected: boolean = false;
	$: mode = selected ? 'selected' : '';
</script>

<button class={mode}>{label}</button>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

	button {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		border-style: none;
		font-size: 18px;
		font-weight: 400;
		font-family: 'Inter', sans-serif;
		background-color: transparent;
		cursor: pointer;
	}
	.selected {
		background-color: #087f5b;
		color: #e6fcf5;
	}
	button:hover {
		background-color: #087f5b;
		color: #e6fcf5;
	}
</style>

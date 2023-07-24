<script lang="ts">
	export let variants: 'left' | 'right' = 'left';
</script>

<button>
	{#if variants === 'left'}
		<!-- left -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
		</svg>
	{:else if variants === 'right'}
		<!-- right -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
		</svg>
	{/if}
</button>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	button {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		border: 1px solid #087f5b;
		background-color: transparent;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}
	svg {
		stroke: #087f5b;
		width: 20px;
		height: 20px;
		/* transform: translateX(1%); */
		/* padding: px; */
	}
	button:hover {
		background-color: #087f5b;
		/* fill: #e6fcf5; */
	}
	button:hover svg {
		stroke: #e6fcf5;
	}
</style>

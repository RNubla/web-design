<script lang="ts">
	export let label: string = '';
	export let primary = false;
	export let backgroundColor: string | undefined = undefined;
	$: style = backgroundColor ? `background-color: ${backgroundColor}` : '';
</script>

<button {style}>
	{label}
</button>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	button {
		padding: 8px 24px;
		border-radius: 50px;
	}
</style>

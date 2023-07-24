<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	export function* range(start: number, end: number, step: number = 1) {
		for (let i = start; i <= end; i += step) {
			yield i;
		}
	}
</script>

<svelte:head>
	<title>App Layout</title>
	<style>
		body {
			font-family: sans-serif;
			color: #343a40;
			font-size: 24px;
			display: grid;
			grid-template-columns: 80px 400px 1fr 250px;
			grid-template-rows: 80px 1fr;
			height: 100vh;
			font-weight: bold;
			text-align: center;
		}
	</style>
</svelte:head>

<nav>Nav</nav>
<menu>
	<button>New</button>
	<button>Reply</button>
	<button>Forward</button>
	<button>Mark unread</button>
	<button>Trash</button>
</menu>
<section>
	{#each range(1, 10) as i}
		<div class="email">Email {i}</div>
	{/each}
</section>
<main>Email View</main>
<aside>Additional Info</aside>

<style>
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	nav,
	section,
	main,
	aside {
		padding-top: 24px;
	}
	nav {
		background-color: #343a40;
		grid-row: 1 / -1;
		color: white;
	}
	menu {
		background-color: #7048e8;
		color: white;
		grid-column: 2/ -1;
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 0 40px;
	}
	button {
		display: inline-block;
		font-size: 16px;
		font-weight: bold;
		background-color: #5f3dc4;
		border: none;
		cursor: pointer;
		color: white;
		padding: 8px 12px;
	}
	button:last-child {
		background-color: #d6336c;
		margin-left: auto;
	}
	section {
		background-color: #e9ecef;
		padding: 40px;
		display: flex;
		gap: 40px;
		flex-direction: column;
		overflow: scroll;
	}
	.email {
		background-color: #adb5bd;
		height: 96px;
		display: flex;
		flex-shrink: 0;
		justify-content: center;
		align-items: center;
		/* gap: ; */
	}
	aside {
		background-color: #e9ecef;
	}
</style>

<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<style>
		body {
			color: #444;
		}
	</style>
</svelte:head>

<header>
	<nav class="container">
		<div>Logo</div>
		<div>Navigation</div>
	</nav>
	<div class="header-container">
		<div class="header-container-inner">
			<h1>A Healthy meal delivered to your door, every single day</h1>
			<p>
				The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored
				to your personal tastes and nutritional needs
			</p>
			<a href="#" class="btn">Start eating well</a>
		</div>
	</div>
</header>
<section>
	<div class="container">
		<h2>Some random heading</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora officia vitae possimus
			eligendi praesentium in harum! Ipsam maiores, modi dolor unde enim repellendus, vel fugiat,
			sed illo sequi consectetur? Impedit.
		</p>
	</div>
</section>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap');

	* {
		font-family: 'Rubik', sans-serif;
		margin: 0;
		padding: 0;
	}

	.container {
		margin: 0 auto;
		width: 1200px;
		box-sizing: border-box;
	}
	header {
		/* background-color: orangered; */
		height: 100vh;
		position: relative;
		background-image: linear-gradient(rgba(34, 34, 34, 0.6), rgba(34, 34, 34, 0.6)),
			url('src/lib/assets/hero-2.jpeg');
		background-size: cover;
		color: #fff;
	}
	.header-container {
		width: 1200px;
		position: absolute;
		left: 50%;
		top: 50%;
		/* background-color: violet; */
		transform: translate(-50%, -50%);
	}
	.header-container-inner {
		width: 50%;
		/* background-color: blueviolet; */
	}

	nav {
		font-size: 20px;
		font-weight: 700;
		display: flex;
		justify-content: space-between;
		padding-top: 32px;
		/* background-image: linear-gradient(to right, red, blue); */
		/* background-color: green; */
	}
	h1 {
		font-size: 52px;
		margin-bottom: 32px;
		line-height: 1.05;
	}
	p {
		font-size: 20px;
		line-height: 1.6;
		margin-bottom: 48px;
	}
	.btn:link,
	.btn:visited {
		font-size: 20px;
		font-weight: 600;
		background-color: #e67e22;
		color: white;
		text-decoration: none;
		display: inline-block;
		padding: 16px 32px;
		border-radius: 9px;
	}
	h2 {
		font-size: 44px;
		margin-bottom: 48px;
	}
	section {
		padding: 96px 0;
		background-color: #f7f7f7;
	}
</style>

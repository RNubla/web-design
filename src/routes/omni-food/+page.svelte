<script lang="ts">
	import type { PageData } from './$types';
	import styles from './style.css';

	export let data: PageData;
</script>

<svelte:head>
	<title>OmniFood</title>
	<style>
		html {
			/* 
				10px / 16px = 0.625
				Percentage of user's browser font-size setting
			*/
			font-size: 62.5%;
		}
		body {
			font-family: 'Rubik', sans-serif;
			line-height: 1;
			font-weight: 400;
			color: #555;
		}
	</style>
</svelte:head>

<header class="header">
	<img class="logo" src="src/lib/assets/omni-food-assets/omnifood-logo.png" alt="Omnifood logo" />
	<nav class="main-nav">
		<ul class="main-nav-list">
			<li><a class="main-nav-link" href="#">Section 1</a></li>
			<li><a class="main-nav-link" href="#">Section 2</a></li>
			<li><a class="main-nav-link" href="#">Section 3</a></li>
			<li><a class="main-nav-link" href="#">Section 4</a></li>
			<li><a class="main-nav-link nav-cta" href="#">Section 5</a></li>
		</ul>
	</nav>
</header>

<main>
	<section class="section-hero">
		<div class="hero">
			<div class="hero-text-box">
				<h1 class="heading-primary">
					Headline: A healthy meal delivered to your door, every single day
				</h1>
				<p class="hero-description">
					The smart 365-days-per-year food subscription that will make you eat healthy again.
					Tailored to your personal tastes and nutritional needs.
				</p>
				<a href="#" class="btn btn-full margin-right-sm">Start eating well</a>
				<a href="#" class="btn btn-outline">Learn more &darr;</a>
				<div class="delivered-meals">
					<div class="delivered-imgs">
						<img src="src/lib/assets/omni-food-assets/customers/customer-1.jpg" alt="Customer" />
						<img src="src/lib/assets/omni-food-assets/customers/customer-2.jpg" alt="Customer" />
						<img src="src/lib/assets/omni-food-assets/customers/customer-3.jpg" alt="Customer" />
						<img src="src/lib/assets/omni-food-assets/customers/customer-4.jpg" alt="Customer" />
						<img src="src/lib/assets/omni-food-assets/customers/customer-5.jpg" alt="Customer" />
						<img src="src/lib/assets/omni-food-assets/customers/customer-6.jpg" alt="Customer" />
					</div>
					<p class="delivered-text"><span>250,000+</span> meals delivered last year!</p>
				</div>
			</div>
			<div class="hero-img-box">
				<img
					src="src/lib/assets/omni-food-assets/hero.png"
					class="hero-img"
					alt="woman enjoying food, meals in storage container, and food bowls on a table"
					srcset=""
				/>
			</div>
		</div>
	</section>
	<div class="section-how">
		<div class="container grid grid-2-cols">
			<div>Test 1</div>
			<div>Test 2</div>
			<div>Test 3</div>
			<div>Test 4</div>
		</div>
	</div>
</main>

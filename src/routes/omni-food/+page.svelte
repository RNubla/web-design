<script lang="ts">
	import type { PageData } from './$types';
	import './style.css';
	import './general.css';

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
		<div class="container">
			<spam class="subheading">How it works</spam>
			<h2 class="heading-scondary">Your daily dose of health in 3 simple steps</h2>
		</div>
		<div class="container grid grid-2-cols grid-center-v">
			<!-- Step 01 -->
			<div class="step-text-box">
				<p class="step-number">01</p>
				<h3 class="heading-teritiary">Tell us what you like (and what not)</h3>
				<p class="step-description">
					Never again waste time thinking about what to eat! Omnifood AI will create a 100%
					personalized weekly meal plan just for you. It makes sure you get all the nutrients and
					vitamins you need, no matter what diet you follow!
				</p>
			</div>
			<div class="step-img-box">
				<img
					class="step-img"
					src="src/lib/assets/omni-food-assets/app/app-screen-1.png"
					alt="A mobile preview of the omnifood application "
				/>
			</div>
			<!-- Step 02 -->
			<div class="step-img-box">
				<img
					class="step-img"
					src="src/lib/assets/omni-food-assets/app/app-screen-2.png"
					alt="A mobile preview of the omnifood application "
				/>
			</div>
			<div class="step-text-box">
				<p class="step-number">02</p>
				<h3 class="heading-teritiary">Approve your weekly meal plan</h3>
				<p class="step-description">
					Once per week, approve the meal plan generated for you by Omnifood AI. You can change
					ingredients, swap entire meals, or even add your own recipes.
				</p>
			</div>
			<!-- Step 03 -->
			<div class="step-text-box">
				<p class="step-number">03</p>
				<h3 class="heading-teritiary">Receive meals at convenient time</h3>
				<p class="step-description">
					Best chefs in town will cook your selected meal every day, and we will deliver it to your
					door whenever works best for you. You can change delivery schedule and address daily!
				</p>
			</div>
			<div class="step-img-box">
				<img
					class="step-img"
					src="src/lib/assets/omni-food-assets/app/app-screen-3.png"
					alt="A mobile preview of the omnifood application "
				/>
			</div>
		</div>
	</div>
</main>

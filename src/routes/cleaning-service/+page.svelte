<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<body class="container">
	<article class="hero relative">
		<section>
			<h1 class="service-name">Welcome to Let it Sparkle, LLC.</h1>
			<p class="text-height">
				Don't go crazy trying to juggle your busy schedule and keeping your home clean. Let me do
				the dirty work for you so you can take care of other important matters. I offer Weekly,
				Bi-Weekly, Monthly, and Special Events cleanings. ours.
			</p>
		</section>
		<!-- <img
			class="hero-img absolute"
			src="src/lib/assets/cleaning-gloves.jpg"
			alt="Cleaning gloves hung on a wire for drying"
		/> -->
	</article>
	<aside class="card about-title">
		<h2>-About-</h2>
		<p class="text-height">
			Hello my name is Christy and I am the proud owner of Let it Sparkle Cleaning Services. I have
			been cleaning homes for over 10 years now. I can help you keep your life on track by keeping
			your home Sparkly Clean. I am dedicated to customer satisfaction and you can be ensured I will
			make your home Sparkle. We are family owned and we will always treat your home as if it was
		</p>
	</aside>
	<section class="card services-title">
		<h2>-Services offered-</h2>
		<ul class="service-list text-height">
			<li>House Cleaning</li>
			<li>Seasonal Deep Cleaning</li>
			<li>Special Occasion Cleaning</li>
			<li>Moving Cleanings (Move In/Out)</li>
			<li>Carpet Cleaning</li>
			<li>Power Washing</li>
			<li>Yard Cleanups</li>
			<li>House Clean outs</li>
			<li>And More</li>
		</ul>
	</section>
</body>

<style lang="css">
	@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;500&display=swap');
	/* 
	<!-- #8f7696 -->
	<!-- #e8e8e8 -->
	<!-- #1c151e -->
	<!-- #ccb5cc -->
	<!-- #4c3c4c -->
	
	<!-- Better Pallete -->
	<!-- #907897 -->
	<!-- #5d5369 -->
	<!-- #968676 -->
	<!-- #695e53 -->
	<!-- #7c9676 -->
	 */
	* {
		margin: 0;
		padding: 0;
	}
	ul {
		list-style: none;
	}
	body {
		font-family: 'Inconsolata', monospace;
		background-color: #5d5369;
	}
	.service-list {
		/* display: flex; */
		align-self: start;
	}
	.flex {
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
		align-items: start;
	}
	.card {
		margin: 0 auto;
	}
	.text-height {
		line-height: 28px;
	}
	.services-title {
		display: flex;
		width: 70%;
		flex-direction: column;
		gap: 16px;
		/* align-items: center; */
	}

	.about-title {
		width: 70%;
		/* background-color: black; */
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		justify-items: space-between;
		gap: 16px;
		margin-bottom: 32px;
	}
	.about h2 {
		justify-content: center;
		font-size: 36px;
	}
	.relative {
		position: relative;
	}
	.absolute {
		position: absolute;
		right: 32px;
		top: 32px;
	}
	.hero {
		background-color: #907897;
		margin-bottom: 32px;
	}
	.hero-img {
		width: 35%;
		height: auto;
	}
	.hero section {
		display: inline-block;
		margin-top: 32px;
		margin-bottom: 32px;
		width: 50%;
		margin-left: 5%;
	}
	.hero section p {
		font-weight: 400;
		font-size: 20px;
	}
	.container {
		margin: 0 auto;
		width: 1200px;
	}
	.service-name {
		font-size: 50px;
		margin-bottom: 1.6rem;
		font-weight: 500;
	}
</style>

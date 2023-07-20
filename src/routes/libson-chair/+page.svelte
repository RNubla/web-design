<script lang="ts">
	import type { PageData } from './$types';
	// import '@fontsource/inter/400.css';
	// import '@fontsource/inter/500.css';
	// import '@fontsource/inter/700.css';
	export let data: PageData;
</script>

<svelte:head>
	<title>Lisbon Chair Shop</title>
	<!-- <link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
		rel="stylesheet"
	/> -->
</svelte:head>

<body>
	<div class="container">
		<header>
			<div class="header-text-box">
				<h1>We design and build better chairs, for a better life</h1>
				<p class="header-text">
					In a small shop in the heart of Lisbon, we spend our days relentlessly perfecting the
					chair. The result is a perfect blend of beauty and comfort, that will have a lasting
					impact on your health.
				</p>
				<a class="btn btn--big" href="#">Shop chairs</a>
			</div>
			<img src="src/lib/assets/hero.jpg" alt="Photo" />
		</header>

		<section>
			<h2>What makes our chairs special</h2>
			<div class="grid-3-cols">
				<div>
					<p class="features-title"><strong>Science meets design</strong></p>
					<p class="features-text">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus similique adipisci
						praesentium.
					</p>
				</div>

				<div>
					<p class="features-title">
						<strong>Maximal comfort</strong>
					</p>
					<p class="features-text">
						Reprehenderit optio placeat quasi excepturi architecto, explicabo facilis perspiciatis
						error maxime magnam.
					</p>
				</div>

				<div>
					<p class="features-title">
						<strong>Ethical and sustainable</strong>
					</p>
					<p class="features-text">
						Deleniti recusandae quidem nesciunt, eos dolorum iure, quaerat omnis est laudantium
						voluptatem voluptas!
					</p>
				</div>
			</div>
		</section>

		<section class="testimonial-section">
			<div class="grid-3-cols">
				<img src="src/lib/assets/customers.jpg" alt="People sitting on chairs" />
				<div class="testimonial-box">
					<h2>"We couldn't live without these chairs anymore"</h2>
					<blockquote class="testimonial-text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellat at, nesciunt
						quia cum minima ipsum culpa totam sapiente recusandae earum debitis doloribus in quasi
						voluptatibus!
					</blockquote>
					<p class="testimonial-author">&mdash; Mary and Sarah Johnson</p>
				</div>
			</div>
		</section>

		<section>
			<h2>Our bestselling chairs</h2>
			<div class="grid-3-cols">
				<figure class="chair">
					<img src="src/lib/assets/chair-1.jpg" alt="Chair" />
					<div class="chair-box">
						<h3>The Laid Back</h3>
						<ul class="chair-details">
							<li>
								<!-- Span is a generic INLINE text element, it doesn't have any meaning. It's like a div element, but inline -->
								<span>Leisure and relaxing</span>
							</li>
							<li>
								<span>Comfortable for 4h</span>
							</li>
							<li>
								<span>Vegan leather</span>
							</li>
							<li>
								<span>Weighs 16 kg</span>
							</li>
						</ul>
						<div class="chair-price">
							<strong>250€</strong>
							<a href="#" class="btn btn--small">Add to cart</a>
						</div>
					</div>
				</figure>

				<figure class="chair">
					<img src="src/lib/assets/chair-2.jpg" alt="Chair" />
					<div class="chair-box">
						<h3>The Worker Bee</h3>
						<ul class="chair-details">
							<li>
								<span>Work</span>
							</li>
							<li>
								<span>Comfortable for 8h</span>
							</li>
							<li>
								<span>Vegan leather</span>
							</li>
							<li>
								<span>Weighs 22 kg</span>
							</li>
						</ul>
						<div class="chair-price">
							<strong>525€</strong>
							<a href="#" class="btn btn--small">Add to cart</a>
						</div>
					</div>
				</figure>

				<figure class="chair">
					<img src="src/lib/assets/chair-3.jpg" alt="Chair" />
					<div class="chair-box">
						<h3>The Chair 4/2</h3>
						<ul class="chair-details">
							<li>
								<span>Leisure and relaxing</span>
							</li>
							<li>
								<span>Comfortable all day!</span>
							</li>
							<li>
								<span>Organic cotton</span>
							</li>
							<li>
								<span>Weighs 80 kg</span>
							</li>
						</ul>
						<div class="chair-price">
							<strong>1450€</strong>
							<a href="#" class="btn btn--small">Add to cart</a>
						</div>
					</div>
				</figure>
			</div>
		</section>

		<footer>
			Copyright &copy; 2027 by Jonas Schmedtmann. Part of "Build Responsive Real-World Websites with
			HTML and CSS" online course. Use for learning purposes only.
		</footer>
	</div>
</body>

<style lang="css">
	/*
SPACING SYSTEM (px)
2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128

FONT SIZE SYSTEM (px)
10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98
*/

	/* 
	Main color  #087f5b
	Grey Color: #343a40
*/
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	/* ------------------------ */
	/* GENERAL STYLES */
	/* ------------------------ */
	body {
		font-family: 'Inter', sans-serif;
		color: #343a40;
		border-bottom: 8px solid #087f5b;
	}

	.container {
		width: 960px;
		margin: 0 auto;
	}

	header,
	section {
		margin-bottom: 48px;
	}

	h2 {
		margin-bottom: 48px;
		/* 24 / 30 / 36 */
		font-size: 36px;
		letter-spacing: -0.5px;
	}

	.grid-3-cols {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		column-gap: 80px;
	}
	.btn:link,
	.btn:visited {
		background-color: #087f5b;
		color: #fff;
		text-decoration: none;
		text-transform: uppercase;
		display: inline-block;

		font-size: 18px;
	}

	.btn:hover,
	.btn:active {
		background-color: #099268;
	}

	.btn--small {
		font-size: 14px;
		padding: 8px 12px;
	}
	.btn--big {
		font-weight: 500;
		padding: 16px 32px;
	}
	/* ------------------------ */
	/* COMPONENT STYLES */
	/* ------------------------ */

	/* HEADER */
	header {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 80px;
		margin-top: 48px;
	}

	.header-text-box {
		align-self: center;
	}

	h1 {
		margin-bottom: 24px;
		/* 44 / 52/ 62 */
		font-size: 44px;
		line-height: 1.1;
		letter-spacing: -1px;
	}

	.header-text {
		margin-bottom: 24px;
		/*  16 / 18 / 20  */
		font-size: 18px;
		line-height: 1.7;
	}

	img {
		width: 100%;
	}

	/* FEATURES */
	.features-icon {
	}

	.features-title {
		margin-bottom: 16px;
		font-size: 20px;
	}

	.features-text {
		font-size: 18px;
		line-height: 1.7;
	}

	/* TESTIMONIAL */
	.testimonial-section {
		background-color: #087f5b;
		color: #fff;
		padding: 24px;
	}

	.testimonial-box {
		grid-column: 2 / -1;
		align-self: center;
	}

	.testimonial-box h2 {
		margin-bottom: 24px;
		font-size: 24px;
	}

	.testimonial-text {
		font-style: italic;
		margin-bottom: 24px;
		font-size: 18px;
		line-height: 1.7;
	}

	/* CHAIRS */
	.chair-box {
		padding: 24px;
	}

	h3 {
		margin-bottom: 24px;
		font-size: 20px;
	}

	.chair-details {
		list-style: none;
		margin-bottom: 24px;
	}

	.chair-details li {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-bottom: 24px;
	}

	.chair-details li:last-child {
		margin-bottom: 0;
	}

	.chair-icon {
	}

	.chair-price {
		display: flex;
		justify-content: space-between;
		font-size: 20px;
	}

	footer {
		margin-bottom: 48px;
		font-size: 14px;
		color: #495057;
	}
</style>

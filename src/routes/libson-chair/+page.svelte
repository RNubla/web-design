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
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="features-icon"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
						/>
					</svg>

					<p class="features-title"><strong>Science meets design</strong></p>
					<p class="features-text">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus similique adipisci
						praesentium.
					</p>
				</div>

				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="features-icon"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
						/>
					</svg>

					<p class="features-title">
						<strong>Maximal comfort</strong>
					</p>
					<p class="features-text">
						Reprehenderit optio placeat quasi excepturi architecto, explicabo facilis perspiciatis
						error maxime magnam.
					</p>
				</div>

				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="features-icon"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
						/>
					</svg>

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
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="chair-icon"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
									/>
								</svg>

								<!-- Span is a generic INLINE text element, it doesn't have any meaning. It's like a div element, but inline -->
								<span>Leisure and relaxing</span>
							</li>
							<li>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="chair-icon"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>

								<span>Comfortable for 4h</span>
							</li>
							<li>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="chair-icon"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
									/>
								</svg>

								<span>Vegan leather</span>
							</li>
							<li>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="chair-icon"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
									/>
								</svg>

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
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="chair-icon"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
									/>
								</svg>
								<span>Work</span>
							</li>
							<li>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="chair-icon"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								<span>Comfortable for 8h</span>
							</li>
							<li>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="chair-icon"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
									/>
								</svg>
								<span>Vegan leather</span>
							</li>
							<li>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="chair-icon"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
									/>
								</svg>
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
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="chair-icon"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
									/>
								</svg>
								<span>Leisure and relaxing</span>
							</li>
							<li>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="chair-icon"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								<span>Comfortable all day!</span>
							</li>
							<li>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="chair-icon"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
									/>
								</svg>
								<span>Organic cotton</span>
							</li>
							<li>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="chair-icon"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
									/>
								</svg>
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
		margin-bottom: 96px;
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
		border-radius: 100px;
	}

	.btn:hover,
	.btn:active {
		background-color: #099268;
	}

	.btn--small {
		padding: 8px 12px;
		font-size: 14px !important;
	}
	.btn--big {
		font-weight: 500;
		padding: 16px 32px;
	}

	img {
		border-radius: 12px;
	}
	/* ------------------------ */
	/* COMPONENT STYLES */
	/* ------------------------ */

	/* HEADER */
	header {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 80px;
		margin-top: 64px;
	}

	.header-text-box {
		align-self: center;
	}

	h1 {
		margin-bottom: 32px;
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
		stroke: #087f5b;
		width: 32px;
		height: 32px;
		margin-bottom: 24px;
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
		border-radius: 12px;
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
		color: #e6fcf5;
	}

	.testimonial-author {
		color: #c3fae8;
	}

	/* CHAIRS */
	.chair {
		box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.07);
		border-radius: 12px;
	}
	.chair img {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	.chair-box {
		padding: 32px;
	}

	h3 {
		margin-bottom: 24px;
		font-size: 20px;
	}

	.chair-details {
		list-style: none;
		margin-bottom: 48px;
	}

	.chair-details li {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-bottom: 16px;
	}

	.chair-details li:last-child {
		margin-bottom: 0;
	}

	.chair-icon {
		stroke: #087f5b;
		width: 24px;
		height: 24px;
	}

	.chair-price {
		display: flex;
		justify-content: space-between;
		font-size: 20px;
		align-items: center;
	}

	footer {
		margin-bottom: 48px;
		font-size: 14px;
		color: #495057;
	}
</style>

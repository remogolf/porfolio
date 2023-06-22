<script lang="ts">
	import '../app.css';
	import Navigation from '$lib/components/navigation.svelte';
	import Hero from '$lib/sections/hero.svelte';
	import About from '$lib/sections/about.svelte';
	import Experience from '$lib/sections/experience.svelte';
	import Projects from '$lib/sections/projects.svelte';
	import Footer from '$lib/sections/footer.svelte';
	import CustomCursor from '$lib/components/customCursor.svelte';
	import CursorGlow from '$lib/components/cursorGlow.svelte'

	// Import statements...
	import { onMount } from 'svelte';

	let links = [
		{ title: 'About', id: 'about' },
		{ title: 'Experience', id: 'experience' },
		{ title: 'Projects', id: 'projects' },
		{ title: 'Blog', id: 'blog' }
	];

	let activeSection = '';

	// Scroll event handler
	function handleScroll() {
		const sections = document.querySelectorAll('section');
		const viewportHeight = window.innerHeight;

		// Loop through each section and determine the active section
		for (let i = 0; i < sections.length; i++) {
			const section = sections[i];
			const rect = section.getBoundingClientRect();
			const sectionTop = rect.top;
			const sectionBottom = rect.bottom;

			// Check if the section is in the viewport
			if (sectionTop < viewportHeight && sectionBottom > 0) {
				activeSection = section.id;
			}
		}
	}

	// Attach scroll event listener when the component is mounted
	onMount(() => {
		window.addEventListener('scroll', handleScroll);
	});
</script>



<div class="grid-container">

	<div class="header" />
	<div class="left-column">
		<div class="hero">
			<Hero />
		</div>
		<div class="nav">
			<Navigation {links} />
		</div>
	</div>
	<div class="right-column">
		<section id="about">
			<!-- About section content -->
			<About />
		</section>
		<section id="experience">
			<!-- Experience section content -->
			<Experience />
		</section>
		<section id="projects">
			<Projects />
		</section>
		<section id="blog">
			<h2>Blog</h2>
<p>work in progress...</p>
		</section>
	</div>
	<div class="footer">
		<Footer />
	</div>
</div>

<style>
	.grid-container {
		display: grid;
		padding-inline: 5rem;
		grid-gap:1rem;
		grid-template-columns: minmax(0, 1fr) 1fr;
		grid-template-rows: 5rem 1fr 5rem;
		height: 100%;
		overflow-y: auto;
		max-width: 1440px;
		grid-template-areas:
			'header header'
			'left_col right_col'
			'footer footer';
	}
	.header {
		grid-area: header;
		position:sticky;
		top:0;
	}
	.footer {
		grid-area: footer;
		position:sticky;
		bottom:0;
	}
	.left-column {
		align-self:start;
		top:6rem;
		position: sticky;
		grid-area: left_col;
	}

	.hero {
		margin-bottom: 20px;
		font-size: 24px;
		font-weight: bold;
	}

	.right-column {
		height: 100%;
		grid-area: right_col;
	}
	.grid-container::-webkit-scrollbar
{
	width: 12px;
	background-color: var(--surface-2);
}

.grid-container::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: var(--brand);
}

	section {
		margin-bottom: 10rem;
	}
	@media (max-width: 1000px) {
		.grid-container {
			padding-inline: 1rem;
			display: grid;
			overflow-y: scroll;
			grid-template-columns: 1fr;
			grid-template-rows: auto;
			grid-template-areas:
				'header'
				'left_col'
				'right_col'
				'footer';
		}
		.hero {
			padding-bottom: 10rem;
			margin: 0;
		}
		.left-column {
			all: unset;
			height: fit-content;
		}

		.right-column {
			all: unset;
		}

		.nav {
			display: none;
		}
	}
</style>

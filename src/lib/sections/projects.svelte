<script>
	import ProjectCard from '$lib/components/projectCard.svelte';
</script>

<h2>Projects</h2>
<div class="container">
	
	<ProjectCard
		projectName="Portfolio Site V2"
		projectLink="#home"
		projectDescription="The current website you are viewing right now"
		projectImage="./PortfolioV2.avif"
		tags={['SvelteKit', 'CSS', 'TypeScript']}
	/>
</div>
<div class="container">

	<ProjectCard
		projectName="First Website"
		projectLink="https://remofueeg.netlify.app/"
		projectDescription="First Website intended to act as a online CV"
		projectImage="./FirstWebsite.avif"
		tags={['SvelteKit Beta', 'CSS', 'Javascript', 'Netlify']}
	/>
</div>

<style>
    h1{
        padding-bottom: 1rem;
    }
	.container {
		padding-bottom: 1rem;
	}
</style>

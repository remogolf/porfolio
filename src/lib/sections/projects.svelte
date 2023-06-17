<script>
	import ProjectCard from '$lib/components/projectCard.svelte';
</script>

<h1>Projects</h1>
<div class="container">
	
	<ProjectCard
		projectName="Portfolio Site V2"
		projectLink="#home"
		projectDescription="This is a brief description of the project."
		projectImage="./OpenPeepsBust.png"
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

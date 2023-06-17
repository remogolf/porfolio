<script>
	import { Github, Linkedin, Instagram ,Mail } from 'lucide-svelte';
</script>

<ul>
	<li>
		<a href="https://github.com/remogolf" target="_blank">
			<Github />
		</a>
	</li>
	<li>
		<a href="https://www.linkedin.com/in/remofueg" target="_blank"><Linkedin /></a>
	</li>
	<li>
		<a href="https://www.instagram.com/remogolf/" target="_blank"><Instagram /></a>
	</li>
    <li>
		<a href="mailto:remogolf@gmail.com" target="_blank"><Mail /></a>
	</li>
</ul>

<style>
    ul{
        list-style-type: none;
        display: flex;
        padding:0;
    }
    a:hover {
        color: var(--brand);
    }
</style>
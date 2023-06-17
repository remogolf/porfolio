<script lang="ts">
	import * as config from '$lib/config';
	import ThemeToggle from '$lib/components/themeToggle.svelte';
</script>

<!-- Footer -->
<footer>
	<p>{config.title} &copy {new Date().getFullYear()}</p>
	<ThemeToggle/>
</footer>

<style>
	footer {
		display: flex;
        height: 100%;
		justify-content: space-between;
        align-items: center;
		border-top: 1px solid var(--border);
	}

	p {
		color: var(--text-2);
	}
</style>
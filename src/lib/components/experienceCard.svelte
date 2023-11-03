<script>
	import { ExternalLink } from 'lucide-svelte';
	export let timePeriod = '';
	export let heading = '';
	export let paragraph = '';
	export let tags = [];
	export let link = '';
	export let companyName = '';
</script>

<div class="card">
	<div class="time-period">{timePeriod}</div>
	<div class="heading">
		{heading}<a href={link} target="_blank"> {companyName} <ExternalLink/></a>
	</div>
	<div class="paragraph">{paragraph}</div>
	<div class="tags">
		{#each tags as tag}
			<div class="tag">{tag}</div>
		{/each}
	</div>
</div>

<style>
	.card {
		padding: 16px;
	}

	.time-period {
		font-size: var(--font-size-1);
		font-weight: var(--font-weight-5);
		color: var(--text-2);
		margin-bottom: 8px;
	}

	.heading {
		font-size: var(--font-size-2);
		font-weight: var(--font-weight-5);
		color: var(--text-1);
		margin-bottom: 8px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
	}

	.paragraph {
		font-size: var(--font-size-1);
		color: var(--text-2);
		margin-bottom: 16px;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
	}

	.tag {
		background-color: var(--surface-4);
		color: var(--text-1);
		font-size: var(--font-size-0);
		padding: 4px 8px;
		border-radius: 16px;
		margin-right: 8px;
		margin-bottom: 8px;
	}
	a {
		color: var(--link);
    display:flex;
	padding-left: 1rem;
	}
	a:hover {
		color: var(--brand);
	}
	.card:hover {
		background-color: var(--surface-2);
		border-radius: var(--radius-conditional-3);
	}
</style>

<script lang="ts">
	export let data: {
		title: string;
		data: string[];
	};
</script>

<h2>{data.title}</h2>
<ul>
	{#each data.data as lang}
		<li><a target="_blank" href={lang}>{lang}</a></li>
	{/each}
</ul>

<script lang="ts">
	export let data: {
		title: string;
		data: string[];
	};
</script>

<h2>{data.title}</h2>
{#each data.data as p}
	<p>{p}</p>
{/each}

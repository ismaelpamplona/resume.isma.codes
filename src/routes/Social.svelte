<script lang="ts">
	export let data: {
		title: string;
		data: {
			icon: string;
			link: string;
		}[];
	};
</script>

<h2>{data.title}</h2>
<ul>
	{#each data.data as s}
		<li>
			<a target="_blank" href={s.link}><iconify-icon icon={s.icon} />{s.link.substring(8)}</a>
		</li>
	{/each}
</ul>

<style lang="scss">
	a {
		display: flex;
		align-items: center;
		gap: 3px;
	}
</style>

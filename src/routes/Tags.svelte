<script lang="ts">
	import type { WorkExperience } from './types';
	export let data: string[] | string[][];
	export let type: string;
</script>

<ul class="tags">
	{#if type === 'role'}
		{#each data as tag}
			<li class="tag-role">{tag}</li>
		{/each}
	{:else}
		{#each data as tag}
			<li class="tag-{type}">
				<a class:pointer={tag[1]} target="_blank" href={tag[1]}>{tag[0]} </a>
			</li>
		{/each}
	{/if}
</ul>

<style lang="scss">
	.pointer {
		cursor: pointer;
	}
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 5px;

		li {
			list-style: none;
			margin: 2.5px 0;
			padding: 2px 6px;
			border-radius: 5px;
		}

		.tag-tech {
			background: #c1e2f3;

			&:hover {
				background: #a9def9;
			}
		}

		.tag-tool {
			background: #ede7b1;

			&:hover {
				background: #ebe39a;
			}
		}

		.tag-role {
			background: #d3f8e2;

			&:hover {
				background: #b1f7cd;
			}
		}
	}
</style>

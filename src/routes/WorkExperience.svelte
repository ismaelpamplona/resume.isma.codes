<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { WorkExperience } from './types';
	import Tags from './Tags.svelte';
	export let data: {
		title: string;
		data: WorkExperience[];
	};

	let experienceIndex = -1;
	let jobIndex = `${-1}-${-1}`;

	function showCompanyDescription(i: number) {
		experienceIndex = experienceIndex === i ? -1 : i;
	}

	function showJobDescription(ei: number, ji: number) {
		jobIndex = jobIndex === `${ei}-${ji}` ? `${-1}-${-1}` : `${ei}-${ji}`;
	}
</script>

<h2>{data.title}</h2>
<div class="experience-details">
	{#each data.data as experience, ei}
		<h3 class="position">{experience.title}</h3>
		{experience.company} | {experience.city}, {experience.country}
		<h4 class="company">
			<span role="button" tabindex="0" on:keydown on:click={() => showCompanyDescription(ei)}
				>{experience.company} | {experience.city}, {experience.country}</span
			>
		</h4>
		<div class="company-description hide" class:show={ei === experienceIndex} transition:fade>
			{#each experience.description as paragraph}
				<p>{paragraph}</p>
			{/each}
		</div>

		<div class="duties">
			<h5>Duties:</h5>
			<ul>
				{#each experience.duties as paragraph}
					<li>{paragraph}</li>
				{/each}
			</ul>
		</div>
		{#if experience.jobs && experience.jobs}
			<h5>{experience.jobs.title}:</h5>
			<div class="jobs">
				{#each experience.jobs.data as job, ji}
					<span role="button" tabindex="0" on:keydown on:click={() => showJobDescription(ei, ji)}
						><h6>{job.title}</h6></span
					>

					<p class="hide" class:show={`${ei}-${ji}` === jobIndex}>{job.description}</p>
					{#if job.technologies}
						<strong>{job.technologies.title}:</strong>
						<Tags data={job.technologies.data} type="tech" />
					{/if}
					{#if job.tools}
						<strong>{job.tools.title}:</strong>
						<Tags data={job.tools.data} type="tool" />
					{/if}
					{#if job.roles}
						<strong>{job.roles.title}:</strong>
						<Tags data={job.roles.data} type="role" />
						<ul class="technologies">
							{#each job.roles.data as role}
								<li class="tag-role">{role}</li>
							{/each}
						</ul>
					{/if}
				{/each}
			</div>
		{/if}
	{/each}
</div>

<style lang="scss">
	.position {
		&:not(:first-of-type) {
			border-top: 1px solid #999;
		}
	}

	.company {
		border-bottom: 1px solid #999;
		font-weight: 100;
		cursor: pointer;
		&:hover {
			color: #999;
		}
	}

	h6,
	.company {
		cursor: pointer;
		&:hover {
			color: #999;
		}
	}

	li {
		list-style: circle;
		margin-left: 20px;
	}

	// .hide {
	// 	opacity: 0;
	// 	max-height: 0;
	// 	overflow: hidden;
	// 	transition: max-height 0.3s ease, opacity 0.3s ease;
	// }

	.show {
		opacity: 1;
		max-height: fit-content;
	}
</style>

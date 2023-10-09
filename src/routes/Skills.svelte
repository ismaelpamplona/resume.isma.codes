<script lang="ts">
	import { onMount } from 'svelte';
	import type { WorkExperience } from './types';
	export let data: WorkExperience[];
	import Tags from './Tags.svelte';
	let skillData: WorkExperience[] = [];

	let set: Set<string> = new Set();

	type ResultType = {
		[key: string]: string[][]; // Add an index signature to allow any string key
	};

	let result: ResultType = {
		technologies: ([] = []),
		tools: ([] = [])
	};

	function addToResult(data: string[][], type: string, years: string) {
		data.forEach((each) => {
			if (!set.has(each[0])) {
				console.log(each[0]);
				each[0] = `${each[0]} | ${years}`;
				result[type].push(each);
			}
			set.add(each[0]);
		});
	}

	function getYears(from: string, to: string): string {
		const fromDate = new Date(from);
		let toDate = new Date();

		const monthDiff =
			(toDate.getFullYear() - fromDate.getFullYear()) * 12 +
			toDate.getMonth() -
			fromDate.getMonth();

		const lowerYear = Math.floor(monthDiff / 12);
		const upperYear = Math.ceil(monthDiff / 12);

		return `${lowerYear}-${upperYear} years`;
	}

	onMount(() => {
		console.log('Component mounted!');
		skillData = JSON.parse(JSON.stringify(data));

		skillData.forEach((position) => {
			const years = getYears(position.from, position.to);
			position.jobs &&
				position.jobs.data.forEach((job) => {
					job.technologies && addToResult(job.technologies.data, 'technologies', years);
					job.tools && addToResult(job.tools.data, 'tools', years);
				});
		});
	});
</script>

<h2>Tech Stack & Skills</h2>
<Tags bind:data={result.technologies} type="tech" />
<Tags bind:data={result.tools} type="tool" />

<style lang="scss">
</style>

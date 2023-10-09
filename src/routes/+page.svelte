<script>
	import data from './data.yml';
	import Contact from './Contact.svelte';
	import Social from './Social.svelte';
	import Education from './Education.svelte';
	import Languages from './Languages.svelte';
	import AboutMe from './AboutMe.svelte';
	import WorkExperience from './WorkExperience.svelte';
	import Skills from './Skills.svelte';
</script>

<div class="container">
	<header>
		<img src="https://avatars.githubusercontent.com/u/16337722?v=4" alt="ismael-pamplona" />
		<div class="main-info">
			<h1>{data.title.name}</h1>
			<h2>{data.title.position}</h2>
		</div>
	</header>

	<section id="contact"><Contact data={data.contact} /></section>
	<section id="social"><Social data={data.social} /></section>
	<section id="education"><Education data={data.education} /></section>
	<section id="languages"><Languages data={data.languages} /></section>
	<section id="about"><AboutMe data={data.about} /></section>
	<section id="skills"><Skills data={data.experience.data} /></section>
	<section id="experience"><WorkExperience data={data.experience} /></section>
</div>

<style lang="scss">
	.container {
		margin: 20px 0;
		background-color: white;
		max-width: 21cm;
		padding: 10px;
		width: 21cm;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
		display: grid;
		align-content: start !important;
		grid-template-columns: calc(50% - 5px) calc(50% - 5px);
		grid-template-rows: auto auto auto auto auto 1fr;
		grid-template-areas:
			'header header'
			'about social'
			'about education'
			'contact languages'
			'skills skills'
			'experience experience';
		gap: 10px;
		header {
			padding: 15px;
			grid-area: header;
			img {
				border-radius: 50%;
				width: 100px;
				height: 100px;
				margin-right: 20px;
			}
			display: flex;
			justify-content: center;
			align-items: center;
			.main-info {
				h1,
				h2 {
					border-bottom: 0;
				}
			}
		}
		section {
			align-self: start;
			border: 1px solid #999;
			padding: 10px;
			height: 100%;
		}
		#contact {
			grid-area: contact;
		}
		#social {
			grid-area: social;
		}
		#education {
			grid-area: education;
		}
		#languages {
			grid-area: languages;
		}
		#about {
			grid-area: about;
		}

		#skills {
			grid-area: skills;
		}
		#experience {
			grid-area: experience;
		}
	}
</style>

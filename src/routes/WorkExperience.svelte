<script lang="ts">
  import { fade } from 'svelte/transition'
  import type { WorkExperience } from './types'
  import Tags from './Tags.svelte'
  export let data: {
    title: string
    data: WorkExperience[]
  }

  let experienceIndex = -1
  let jobIndex = `${-1}-${-1}`

  function showCompanyDescription(i: number) {
    experienceIndex = experienceIndex === i ? -1 : i
  }

  function showJobDescription(ei: number, ji: number) {
    jobIndex = jobIndex === `${ei}-${ji}` ? `${-1}-${-1}` : `${ei}-${ji}`
  }

  function getShortISODate(date: string): string {
    let d = new Date(date)
    let s = d.toUTCString()
    return `${s.substring(8, 16)}`
  }
</script>

<h2>{data.title}</h2>
<div class="experience-details">
  {#each data.data as experience, ei}
    <h4 class="position">+ {experience.title}</h4>
    <div class="company">
      <span role="button" tabindex="0" on:keydown on:click={() => showCompanyDescription(ei)}>
        <span>
          <iconify-icon icon="clarity:building-line" />
          <strong>{experience.company}</strong>
          <iconify-icon icon="teenyicons:pin-outline" />
          {experience.city}, {experience.state} - {experience.country}
        </span>
      </span>
      <span>
        {getShortISODate(experience.from)} -
        {experience.to !== 'Present' ? getShortISODate(experience.to) : 'Present'}
      </span>
    </div>
    <div class="company-description hide" class:show={ei === experienceIndex} transition:fade>
      {#each experience.description as paragraph}
        <p>{@html paragraph}</p>
      {/each}
    </div>
    <!-- <strong>{experience.duties.title}:</strong>do -->
    <!-- <h5>{experience.duties.title}:</h5> -->
    <ul>
      {#each experience.duties.data as paragraph}
        <li>{@html paragraph}</li>
      {/each}
    </ul>
    {#if experience.jobs}
      <!-- <h5>{experience.jobs.title}:</h5> -->
      <div class="jobs">
        {#each experience.jobs.data as job, ji}
          <span role="button" tabindex="0" on:keydown on:click={() => showJobDescription(ei, ji)}>
            <h5>{job.title}</h5>
          </span>
          <p class="hide" class:show={`${ei}-${ji}` === jobIndex}>{@html job.description}</p>
          <div class="tags">
            {#if job.technologies}
              <Tags title={job.technologies.title} data={job.technologies.data} type="tech" />
            {/if}
            {#if job.tools}
              <Tags title={job.tools.title} data={job.tools.data} type="tool" />
            {/if}
            {#if job.roles}
              <Tags title={job.roles.title} data={job.roles.data} type="role" />
            {/if}
          </div>
        {/each}
      </div>
    {/if}
  {/each}
</div>

<style lang="scss">
  .position {
    margin-top: 10px;
    &:not(:first-of-type) {
      border-top: 1px solid #999;
    }
  }

  .company {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #999;
  }

  h5 {
    margin-top: 5px;
    line-height: 20px;
  }

  li {
    list-style: '- ';
    margin-left: 10px;
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

  p {
    line-height: 18px;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
</style>

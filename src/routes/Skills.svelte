<script lang="ts">
  import { onMount } from 'svelte'
  import type { WorkExperience } from './types'
  import Tags from './Tags.svelte'
  export let data: WorkExperience[] = []
  let skillData: WorkExperience[] = []

  type info = {
    date: Date
    link: string
  }

  let map = {
    tech: new Map<string, info>(),
    tools: new Map<string, info>(),
    roles: new Map<string, info>()
  }

  function updateMap(data: string[][] | string[], type: 'tech' | 'tools' | 'roles', from: string) {
    const fromDate = new Date(from)
    data.forEach((each) => {
      let key = Array.isArray(each) ? each[0] : each
      let value = map[type].get(each[0])?.date
      let link = Array.isArray(each) && each[1] ? each[1] : ''
      let date =
        value !== undefined && new Date(value) < fromDate ? new Date(value) : new Date(from)
      map[type].set(key, {
        date,
        link
      })
    })
  }

  let technologies: string[][] = []
  let tools: string[][] = []
  let roles: string[][] = []

  function getYears(from: Date): string {
    let to = new Date()

    const monthsDiff =
      (to.getFullYear() - from.getFullYear()) * 12 + to.getMonth() - from.getMonth()

    const lowerYear = Math.floor(monthsDiff / 12)
    const upperYear = Math.ceil(monthsDiff / 12)
    let ans = lowerYear !== upperYear ? `${lowerYear}-${upperYear}` : `${lowerYear}`

    return lowerYear !== upperYear ? `${lowerYear}-${upperYear}` : `${lowerYear}`
  }

  const mapToArray = (map: Map<string, info>): string[][] => {
    const arrayData: [string, info][] = Array.from(map.entries())
    arrayData.sort((a, b) => a[1].date.getTime() - b[1].date.getTime())
    const resultArray: string[][] = arrayData.map(([key, value]) => [
      `${key} | ${getYears(value.date)}`,
      value.link
    ])
    return resultArray
  }

  onMount(() => {
    skillData = JSON.parse(JSON.stringify(data))
    skillData.forEach((position) => {
      position.jobs &&
        position.jobs.data.forEach((job) => {
          job.technologies && updateMap(job.technologies.data, 'tech', position.from)
          job.tools && updateMap(job.tools.data, 'tools', position.from)
          job.roles && updateMap(job.roles.data, 'roles', position.from)
        })
    })
    technologies = mapToArray(map.tech)
    tools = mapToArray(map.tools)
    roles = mapToArray(map.roles)
  })
</script>

<h2 class="header">Tech Stack, Tools & Skills | <span>&nbsp years of experience</span></h2>
<div class="container">
  <Tags bind:data={technologies} type="tech" />
  <Tags bind:data={tools} type="tool" />
  <Tags bind:data={roles} type="role" />
</div>

<style lang="scss">
  .header {
    display: flex;
    align-items: center;

    span {
      font-size: 13px;
      text-transform: lowercase;
    }
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 5px;
  }
</style>

<script lang="ts">
  export let data: {
    title: string
    data: {
      description: string
      icon: string
      link: string
      title: string
    }[]
  }

  function getYearFromIso(date: string): number {
    return new Date(date).getFullYear()
  }
</script>

<h2>{data.title}</h2>
<ul>
  {#each data.data as s}
    <li>
      <a target="_blank" href={s.link}>
        <iconify-icon icon={s.icon} />{s.description} | ({s.title})
      </a>
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

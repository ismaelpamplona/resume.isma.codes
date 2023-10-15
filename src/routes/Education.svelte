<script lang="ts">
  export let data: {
    title: string
    data: {
      title: string
      university: string
      link: string
      from: string
      to: string
    }[]
  }

  function getYearFromIso(date: string): number {
    return new Date(date).getFullYear()
  }
</script>

<h2>{data.title}</h2>
{#each data.data as edu}
  <div class="details">
    <p><strong>{edu.title}</strong> ({getYearFromIso(edu.from)} - {getYearFromIso(edu.to)})</p>
    <p>at <a href={edu.link}>{edu.university}</a></p>
  </div>
{/each}

<style lang="scss">
  .details:first-of-type {
    margin-bottom: 10px;
  }
  .details {
    p {
      margin: 0;
      line-height: 18px;
    }
  }
</style>

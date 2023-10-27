<script lang="ts">
  export let data: string[] | string[][]
  export let type: string

  export let title = ''
</script>

<ul class="tags">
  {#if title}
    {title}:
  {/if}

  {#if type === 'role'}
    {#each data as tag}
      {#if Array.isArray(tag)}
        <li class="tag-role">{tag[0]}</li>
      {:else}
        <li class="tag-role">{tag}</li>
      {/if}
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
    align-items: center;
    flex-wrap: wrap;
    gap: 3px;

    a {
      text-decoration: none;
    }

    li {
      list-style: none;
      padding: 2px 3px;
      border-radius: 5px;
      line-height: 13px;
    }

    .tag-tech {
      background: #cbe1e7;
    }

    .tag-tool {
      background: #cbe7df;
    }

    .tag-role {
      background: #bde5e6;
    }
  }
</style>

<script lang="ts">
  export let data: {
    title: string
    city: contact
    phone: contact
    email: contact
  }

  type contact = {
    icon: string
    text: string
  }
</script>

<h2>{data.title}</h2>
<ul>
  <li><iconify-icon icon={data.city.icon} />{data.city.text}</li>
  <li><iconify-icon icon={data.phone.icon} />{data.phone.text}</li>
  <li>
    <iconify-icon icon={data.email.icon} /><a href="mailto:{data.email.text}">{data.email.text}</a>
  </li>
</ul>

<style lang="scss">
  li {
    display: flex;
    align-items: center;
    gap: 3px;
  }
</style>

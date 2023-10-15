<script lang="ts">
  import data from './data.yml'
  import Contact from './Contact.svelte'
  import Social from './Social.svelte'
  import Education from './Education.svelte'
  import Languages from './Languages.svelte'
  import AboutMe from './AboutMe.svelte'
  import WorkExperience from './WorkExperience.svelte'
  import Skills from './Skills.svelte'
  import Stack from './Stack.svelte'
</script>

<div class="container">
  <header>
    <!-- <img src="https://avatars.githubusercontent.com/u/16337722?v=4" alt="ismael-pamplona" /> -->
    <div class="main-info">
      <h1>{data.title.name}</h1>
      <span>{data.title.position}</span>
    </div>
  </header>

  <section id="contact"><Contact data={data.contact} /></section>
  <section id="social"><Social data={data.social} /></section>
  <section id="education"><Education data={data.education} /></section>
  <section id="languages"><Languages data={data.languages} /></section>
  <section id="about"><AboutMe data={data.about} /></section>
  <section id="stack"><Stack data={data.stack} /></section>
  <section id="skills"><Skills data={data.experience.data} /></section>
  <section id="experience"><WorkExperience data={data.experience} /></section>
</div>

<style lang="scss">
  .container {
    background-color: white;
    width: 100%;
    width: 21cm;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    display: grid;
    height: fit-content;
    grid-template-columns: calc(50% - 5px) calc(50% - 5px);
    grid-template-areas:
      'header header'
      'about contact'
      'about social'
      'about languages'
      'stack languages'
      'stack education'
      'skills skills'
      'experience experience';
    padding: 8px;
    gap: 8px;
    header {
      grid-area: header;
      margin-bottom: -8px;
      span {
        font-weight: 100;
        font-size: 16px;
      }
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
        width: 100%;
        text-align: left;
        h1,
        h3 {
          border-bottom: 0;
          font-weight: 100;
          line-height: 35px;
        }
      }
    }
    section {
      align-self: start;
      border: 1px solid #999;
      padding: 8px;
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
    #stack {
      grid-area: stack;
    }

    #skills {
      grid-area: skills;
    }
    #experience {
      grid-area: experience;
      height: fit-content;
      margin-top: 5px;
    }
  }
</style>

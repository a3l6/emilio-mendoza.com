<script>
  import { projects } from "$lib/projects.js";
  import ProjectCard from "./ProjectCard.svelte";
  import ProjectModal from "./ProjectModal.svelte";

  let activeProject = $state(null);
</script>

<section id="work">
  <div class="section-label">
    <h2>// SELECTED_WORK.ZIP</h2>
    <p>PROJECTS THAT SHIPPED</p>
  </div>

  <div class="projects-grid">
    {#each projects as project}
      <ProjectCard {project} onopen={(p) => (activeProject = p)} />
    {/each}
  </div>
</section>

{#if activeProject}
  <ProjectModal
    project={activeProject}
    onclose={() => (activeProject = null)}
  />
{/if}

<style>
  section {
    background: var(--nokia-mid);
    padding: 80px 24px;
    position: relative;
    z-index: 10;
  }

  .section-label {
    text-align: center;
    margin-bottom: 48px;
  }

  .section-label h2 {
    font-size: 14px;
    display: inline-block;
    background: var(--nokia-dark);
    color: var(--nokia-glow);
    padding: 8px 16px;
    box-shadow: 4px 4px 0 var(--nokia-black);
  }

  .section-label p {
    color: var(--nokia-dark);
    font-size: 8px;
    letter-spacing: 2px;
    margin-top: 16px;
  }

  .projects-grid {
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }
</style>

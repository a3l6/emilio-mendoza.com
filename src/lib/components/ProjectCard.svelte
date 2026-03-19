<script>
  let { project, onopen } = $props();
</script>

<button class="project-card" onclick={() => onopen(project)}>
  <div class="project-num">PROJECT {project.num}</div>
  <div class="project-title">{project.title}</div>
  <div class="project-desc">{project.desc}</div>
  <div class="project-tags">
    {#each project.tags as tag}
      <span class="tag">{tag}</span>
    {/each}
  </div>
  <div class="open-hint">[ CLICK TO VIEW ]</div>
</button>

<style>
  .project-card {
    background: var(--nokia-dark);
    border: 4px solid var(--nokia-black);
    box-shadow: 6px 6px 0 var(--nokia-black);
    padding: 20px;
    cursor: pointer;
    transition: transform 0.1s, box-shadow 0.1s;
    position: relative;
    overflow: hidden;
    text-align: left;
    width: 100%;
    /* reset button defaults */
    font-family: 'Press Start 2P', monospace;
    outline: none;
  }

  .project-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 4px;
    background: var(--nokia-glow);
  }

  .project-card:hover {
    transform: translate(-3px, -3px);
    box-shadow: 9px 9px 0 var(--nokia-black);
  }

  .project-card:hover .open-hint {
    opacity: 1;
  }

  .project-num {
    font-size: 7px;
    color: var(--nokia-mid);
    letter-spacing: 2px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .project-num::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--nokia-pixel);
  }

  .project-title {
    font-size: 10px;
    color: var(--nokia-glow);
    margin-bottom: 12px;
    line-height: 1.8;
  }

  .project-desc {
    font-size: 9px;
    color: var(--nokia-mid);
    line-height: 2.2;
    margin-bottom: 16px;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 16px;
  }

  .tag {
    font-family: 'Press Start 2P', monospace;
    font-size: 8px;
    padding: 4px 8px;
    background: var(--nokia-darkest);
    color: var(--nokia-glow);
    border: 2px solid var(--nokia-pixel);
    letter-spacing: 1px;
  }

  .open-hint {
    font-size: 6px;
    color: var(--nokia-glow);
    letter-spacing: 2px;
    opacity: 0;
    transition: opacity 0.15s;
  }
</style>

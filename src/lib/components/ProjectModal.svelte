<script>
let { project, onclose } = $props();

  function handleKeydown(e) {
    if (e.key === 'Escape') onclose();
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<!-- Backdrop -->
<button class="backdrop" onclick={onclose} aria-label="Close modal"></button>

<!-- Panel -->
<div class="modal" role="dialog" aria-modal="true">

  <div class="modal-header">
    <span class="modal-num">PROJECT {project.num}</span>
    <button class="close-btn" onclick={onclose}>[ X ]</button>
  </div>

  <div class="modal-title">{project.title}</div>

  <div class="modal-meta">
    <div class="meta-item">
      <span class="meta-label">YEAR</span>
      <span class="meta-value">{project.year}</span>
    </div>
    <div class="meta-item">
      <span class="meta-label">ROLE</span>
      <span class="meta-value">{project.role}</span>
    </div>
  </div>

  <div class="modal-divider"></div>

  <div class="modal-body">
    {#each project.detail.split('\n') as line}
      {#if line.trim()}
        <p>{line}</p>
      {:else}
        <br />
      {/if}
    {/each}
  </div>

  <div class="modal-tags">
    {#each project.tags as tag}
      <span class="tag">{tag}</span>
    {/each}
  </div>

  <div class="modal-actions">
    {#if project.github}
      <a class="modal-github btn btn-secondary" href={project.github} target="_blank" rel="noopener noreferrer">
        [ GITHUB → ]
      </a>
    {/if}
    {#if project.link}
      <a class="modal-link btn btn-primary" href={project.link} target="_blank" rel="noopener noreferrer">
        [ VIEW PROJECT → ]
      </a>
    {/if}
  </div>

</div>

<style>
  .backdrop {
    position: fixed;
    inset: 0;
    background: rgba(26, 38, 0, 0.75);
    z-index: 10000;
    cursor: pointer;
    border: none;
    width: 100%;
    height: 100%;
    /* pixel-grid overlay on backdrop */
    background-image:
      linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px);
    background-size: 8px 8px;
    background-color: rgba(58, 82, 10, 0.85);
  }

  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10001;
    width: min(640px, calc(100vw - 48px));
    background: var(--nokia-darkest);
    border: 4px solid var(--nokia-glow);
    box-shadow: 8px 8px 0 var(--nokia-black);
    padding: 28px;
    max-height: calc(100vh - 80px);
    overflow-y: auto;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .modal-num {
    font-size: 7px;
    color: var(--nokia-pixel);
    letter-spacing: 2px;
  }

  .close-btn {
    font-family: 'Press Start 2P', monospace;
    font-size: 7px;
    color: var(--nokia-glow);
    background: transparent;
    border: 2px solid var(--nokia-pixel);
    padding: 4px 8px;
    cursor: pointer;
    letter-spacing: 1px;
    transition: all 0.1s;
  }

  .close-btn:hover {
    background: var(--nokia-glow);
    color: var(--nokia-black);
    border-color: var(--nokia-glow);
  }

  .modal-title {
    font-size: 13px;
    color: var(--nokia-glow);
    line-height: 1.8;
    margin-bottom: 20px;
  }

  .modal-meta {
    display: flex;
    gap: 24px;
    margin-bottom: 20px;
  }

  .meta-item {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .meta-label {
    font-size: 6px;
    color: var(--nokia-pixel);
    letter-spacing: 2px;
  }

  .meta-value {
    font-size: 8px;
    color: var(--nokia-light);
    letter-spacing: 1px;
  }

  .modal-divider {
    height: 2px;
    background: var(--nokia-pixel);
    margin-bottom: 20px;
  }

  .modal-body {
    font-size: 7px;
    color: var(--nokia-light);
    line-height: 2.4;
    letter-spacing: 1px;
    margin-bottom: 20px;
  }

  .modal-body p {
    margin-bottom: 8px;
  }

  .modal-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 20px;
  }

  .tag {
    font-family: 'Press Start 2P', monospace;
    font-size: 6px;
    padding: 4px 8px;
    background: var(--nokia-dark);
    color: var(--nokia-glow);
    border: 2px solid var(--nokia-pixel);
    letter-spacing: 1px;
  }

  .modal-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .modal-github {
    background: var(--nokia-mid);
    color: var(--nokia-black);
    border-color: var(--nokia-dark);
    box-shadow: 4px 4px 0 var(--nokia-dark);
  }

  .modal-github:hover {
    background: var(--nokia-light);
    color: var(--nokia-black);
  }

  .modal-link, .modal-github {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
  }
</style>

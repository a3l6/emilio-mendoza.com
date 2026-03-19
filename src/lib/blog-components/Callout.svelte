<script>
  // Usage in any .md post:
  //   import Callout from '$lib/blog-components/Callout.svelte';
  //   <Callout type="info">Tip text</Callout>
  //   <Callout type="warn">Warning text</Callout>
  //   <Callout type="err">Error text</Callout>

  let { type = 'info', children } = $props();

  const labels = { info: '[ INFO ]', warn: '[WARN ]', err: '[ ERR ]' };
</script>

<div class="callout callout-{type}">
  <span class="callout-label">{labels[type] ?? labels.info}</span>
  <div class="callout-body">
    {@render children()}
  </div>
</div>

<style>
  .callout {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    border: 3px solid var(--nokia-pixel);
    padding: 12px 16px;
    margin: 24px 0;
    background: var(--nokia-black);
    box-shadow: 4px 4px 0 var(--nokia-darkest);
  }

  .callout-label {
    font-family: 'Press Start 2P', monospace;
    font-size: 7px;
    flex-shrink: 0;
    letter-spacing: 1px;
    margin-top: 2px;
  }

  .callout-body {
    font-family: 'Press Start 2P', monospace;
    font-size: 7px;
    line-height: 2.2;
    letter-spacing: 1px;
  }

  .callout-info  { border-color: var(--nokia-pixel); }
  .callout-info  .callout-label { color: var(--nokia-glow); }
  .callout-info  .callout-body  { color: var(--nokia-light); }

  .callout-warn  { border-color: var(--nokia-mid); }
  .callout-warn  .callout-label { color: var(--nokia-light); }
  .callout-warn  .callout-body  { color: var(--nokia-mid); }

  .callout-err   { border-color: var(--nokia-dark); }
  .callout-err   .callout-label { color: var(--nokia-mid); }
  .callout-err   .callout-body  { color: var(--nokia-mid); }
</style>

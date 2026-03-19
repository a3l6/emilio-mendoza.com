<script>
  let { type = 'info', children } = $props();
  const labels = { info: '[ INFO ]', warn: '[WARN ]', err: '[ ERR ]' };
</script>

<div class="callout {type}">
  <span class="label">{labels[type] ?? labels.info}</span>
  <div class="body">{@render children()}</div>
</div>

<style>
  .callout {
    display: flex;
    gap: 12px;
    border: 3px solid var(--nokia-pixel);
    padding: 12px 16px;
    margin: 24px 0;
    background: var(--nokia-black);
    box-shadow: 4px 4px 0 var(--nokia-darkest);
  }
  .label {
    font-family: 'Press Start 2P', monospace;
    font-size: 7px;
    flex-shrink: 0;
    letter-spacing: 1px;
    margin-top: 2px;
  }
  .body {
    font-family: 'Press Start 2P', monospace;
    font-size: 7px;
    line-height: 2.2;
    letter-spacing: 1px;
    color: var(--nokia-light);
  }
  .info .label { color: var(--nokia-glow); }
  .warn .label { color: var(--nokia-light); }
  .err  .label { color: var(--nokia-mid); }
</style>

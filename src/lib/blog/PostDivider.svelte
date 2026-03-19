<script>
  let { label = '' } = $props();
</script>

<div class="divider">
  <span class="inner">{label || '• • •'}</span>
</div>

<style>
  .divider {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 0;
    gap: 12px;
  }
  .divider::before, .divider::after {
    content: '';
    flex: 1;
    height: 2px;
    background: var(--nokia-dark);
  }
  .inner {
    font-family: 'Press Start 2P', monospace;
    font-size: 7px;
    color: var(--nokia-pixel);
    letter-spacing: 2px;
    flex-shrink: 0;
  }
</style>

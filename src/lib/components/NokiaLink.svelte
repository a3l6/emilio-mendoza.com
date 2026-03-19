<script>
  let { href, label = href, external = true } = $props();
</script>

<a
  {href}
  class="nokia-link"
  target={external ? '_blank' : undefined}
  rel={external ? 'noopener noreferrer' : undefined}
>[ {label} →]</a>

<style>
  .nokia-link {
    font-family: 'Press Start 2P', monospace;
    font-size: 8px;
    color: var(--nokia-glow);
    text-decoration: none;
    letter-spacing: 1px;
    border-bottom: 2px solid var(--nokia-pixel);
    padding-bottom: 2px;
    transition: all 0.1s;
  }

  .nokia-link:hover {
    color: var(--nokia-black);
    background: var(--nokia-glow);
    border-bottom-color: var(--nokia-black);
    padding: 2px 4px;
  }
</style>

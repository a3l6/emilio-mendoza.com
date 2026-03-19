<script>
  // Usage: <PostImage src="/images/photo.png" alt="Description" caption="Fig 1" />
  let { src, alt = '', caption = '' } = $props();
</script>

<figure class="post-image">
  <img {src} {alt} />
  {#if caption}
    <figcaption>{caption}</figcaption>
  {/if}
</figure>

<style>
  .post-image {
    margin: 32px 0;
    border: 4px solid var(--nokia-pixel);
    box-shadow: 6px 6px 0 var(--nokia-black);
    background: var(--nokia-black);
  }

  .post-image img {
    display: block;
    width: 100%;
    image-rendering: pixelated;
  }

  figcaption {
    font-family: 'Press Start 2P', monospace;
    font-size: 6px;
    color: var(--nokia-pixel);
    letter-spacing: 1px;
    padding: 8px 12px;
    border-top: 2px solid var(--nokia-pixel);
  }
</style>

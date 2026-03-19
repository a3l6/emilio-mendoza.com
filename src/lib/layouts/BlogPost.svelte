<script>
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';

  // Frontmatter fields injected by mdsvex
  let { title, date, tags = [], excerpt, children } = $props();

  function formatDate(d) {
    return new Date(d).toLocaleDateString('en-GB', {
      day: '2-digit', month: 'short', year: 'numeric',
    }).toUpperCase();
  }
</script>

<svelte:head>
  <title>{title} — Emilio Mendoza</title>
  <meta name="description" content={excerpt ?? title} />
</svelte:head>

<Nav />

<div class="blog-page">
  <div class="blog-header">
    <a href="/blog" class="back-link">[ ← BLOG.LOG ]</a>

    <div class="post-meta">
      <span class="post-date">{formatDate(date)}</span>
      <div class="post-tags">
        {#each tags as tag}
          <span class="tag">{tag}</span>
        {/each}
      </div>
    </div>

    <h1 class="post-title">{title}</h1>

    {#if excerpt}
      <p class="post-excerpt">{excerpt}</p>
    {/if}

    <div class="title-divider"></div>
  </div>

  <article class="post-body">
    {@render children()}
  </article>

  <div class="post-footer">
    <a href="/blog" class="back-link">[ ← BACK TO BLOG.LOG ]</a>
  </div>
</div>

<Footer />

<style>
  :global(body) {
    background: var(--nokia-darkest);
  }

  .blog-page {
    max-width: 720px;
    margin: 0 auto;
    padding: 100px 24px 80px;
    position: relative;
    z-index: 10;
  }

  .back-link {
    font-family: 'Press Start 2P', monospace;
    font-size: 7px;
    color: var(--nokia-pixel);
    text-decoration: none;
    letter-spacing: 1px;
    transition: color 0.1s;
  }

  .back-link:hover { color: var(--nokia-glow); }

  .blog-header {
    margin-bottom: 48px;
  }

  .post-meta {
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 20px 0 16px;
    flex-wrap: wrap;
  }

  .post-date {
    font-family: 'Press Start 2P', monospace;
    font-size: 7px;
    color: var(--nokia-pixel);
    letter-spacing: 1px;
  }

  .post-tags {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
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

  .post-title {
    font-family: 'Press Start 2P', monospace;
    font-size: clamp(14px, 3vw, 20px);
    color: var(--nokia-glow);
    line-height: 1.8;
    margin-bottom: 16px;
    font-weight: normal;
  }

  .post-excerpt {
    font-family: 'Press Start 2P', monospace;
    font-size: 8px;
    color: var(--nokia-mid);
    line-height: 2.2;
    letter-spacing: 1px;
    margin-bottom: 20px;
  }

  .title-divider {
    height: 4px;
    background: var(--nokia-dark);
    border-left: 4px solid var(--nokia-glow);
  }

  /* ── Post body markdown styles ── */
  .post-body {
    font-family: 'Press Start 2P', monospace;
    font-size: 8px;
    color: var(--nokia-light);
    line-height: 2.4;
    letter-spacing: 1px;
  }

  :global(.post-body h1),
  :global(.post-body h2),
  :global(.post-body h3) {
    font-family: 'Press Start 2P', monospace;
    color: var(--nokia-glow);
    font-weight: normal;
    margin: 40px 0 16px;
    line-height: 1.8;
  }

  :global(.post-body h2) { font-size: 12px; }
  :global(.post-body h3) { font-size: 10px; }

  :global(.post-body p) { margin-bottom: 20px; }

  :global(.post-body a) {
    color: var(--nokia-glow);
    text-decoration: none;
    border-bottom: 2px solid var(--nokia-pixel);
  }

  :global(.post-body a:hover) {
    color: var(--nokia-black);
    background: var(--nokia-glow);
    border-bottom-color: var(--nokia-black);
    padding: 2px 4px;
  }

  :global(.post-body ul),
  :global(.post-body ol) {
    margin: 0 0 20px 24px;
  }

  :global(.post-body li) { margin-bottom: 8px; }

  :global(.post-body code) {
    font-family: 'Press Start 2P', monospace;
    font-size: 7px;
    background: var(--nokia-black);
    color: var(--nokia-glow);
    padding: 2px 6px;
    border: 1px solid var(--nokia-pixel);
  }

  :global(.post-body pre) {
    background: var(--nokia-black);
    border: 3px solid var(--nokia-pixel);
    box-shadow: 4px 4px 0 var(--nokia-black);
    padding: 16px;
    overflow-x: auto;
    margin-bottom: 24px;
  }

  :global(.post-body pre code) {
    background: none;
    border: none;
    padding: 0;
    font-size: 7px;
    line-height: 2;
  }

  :global(.post-body blockquote) {
    border-left: 4px solid var(--nokia-glow);
    margin: 0 0 20px 0;
    padding: 12px 16px;
    background: var(--nokia-black);
    color: var(--nokia-mid);
  }

  :global(.post-body hr) {
    border: none;
    border-top: 3px solid var(--nokia-dark);
    margin: 32px 0;
  }

  :global(.post-body strong) { color: var(--nokia-glow); }
  :global(.post-body em)     { color: var(--nokia-light); font-style: normal; }

  .post-footer {
    margin-top: 64px;
    padding-top: 24px;
    border-top: 3px solid var(--nokia-dark);
  }

  @media (max-width: 640px) {
    .blog-page { padding: 88px 16px 48px; }
  }
</style>

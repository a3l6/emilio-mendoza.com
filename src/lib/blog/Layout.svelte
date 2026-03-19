<script>
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let { title = '', date = '', tags = [], excerpt = '', children } = $props();

  function fmt(d) {
    if (!d) return '';
    return new Date(d).toLocaleDateString('en-GB', {
      day: '2-digit', month: 'short', year: 'numeric',
    }).toUpperCase();
  }
</script>

<svelte:head>
  <title>{title} — Emilio Mendoza</title>
  {#if excerpt}<meta name="description" content={excerpt} />{/if}
</svelte:head>

<Nav />

<main>
  <a class="back" href="/blog">[ ← BLOG.LOG ]</a>

  <header>
    <div class="meta">
      <span class="date">{fmt(date)}</span>
      <div class="tags">
        {#each tags as t}<span class="tag">{t}</span>{/each}
      </div>
    </div>
    <h1>{title}</h1>
    {#if excerpt}<p class="excerpt">{excerpt}</p>{/if}
    <div class="rule"></div>
  </header>

  <article>
    {@render children()}
  </article>

  <footer class="post-foot">
    <a class="back" href="/blog">[ ← BACK TO BLOG.LOG ]</a>
  </footer>
</main>

<Footer />

<style>
  :global(body) { background: var(--nokia-darkest); }

  main {
    max-width: 720px;
    margin: 0 auto;
    padding: 96px 24px 80px;
  }

  .back {
    font-family: 'Press Start 2P', monospace;
    font-size: 7px;
    color: var(--nokia-pixel);
    text-decoration: none;
    letter-spacing: 1px;
  }
  .back:hover { color: var(--nokia-glow); }

  header { margin: 24px 0 40px; }

  .meta {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
    margin-bottom: 16px;
  }

  .date {
    font-family: 'Press Start 2P', monospace;
    font-size: 7px;
    color: var(--nokia-pixel);
    letter-spacing: 1px;
  }

  .tags { display: flex; gap: 6px; flex-wrap: wrap; }

  .tag {
    font-family: 'Press Start 2P', monospace;
    font-size: 6px;
    padding: 3px 8px;
    background: var(--nokia-dark);
    color: var(--nokia-glow);
    border: 2px solid var(--nokia-pixel);
    letter-spacing: 1px;
  }

  h1 {
    font-family: 'Press Start 2P', monospace;
    font-size: clamp(13px, 3vw, 18px);
    color: var(--nokia-glow);
    line-height: 1.8;
    margin-bottom: 14px;
    font-weight: normal;
  }

  .excerpt {
    font-family: 'Press Start 2P', monospace;
    font-size: 8px;
    color: var(--nokia-mid);
    line-height: 2.2;
    letter-spacing: 1px;
    margin-bottom: 18px;
  }

  .rule {
    height: 4px;
    background: var(--nokia-dark);
    border-left: 4px solid var(--nokia-glow);
  }

  /* Markdown body */
  article {
    font-family: 'Press Start 2P', monospace;
    font-size: 8px;
    color: var(--nokia-light);
    line-height: 2.4;
    letter-spacing: 1px;
  }

  :global(article h2) {
    font-family: 'Press Start 2P', monospace;
    font-size: 12px;
    color: var(--nokia-glow);
    font-weight: normal;
    margin: 40px 0 14px;
    line-height: 1.8;
  }

  :global(article h3) {
    font-family: 'Press Start 2P', monospace;
    font-size: 10px;
    color: var(--nokia-glow);
    font-weight: normal;
    margin: 32px 0 12px;
    line-height: 1.8;
  }

  :global(article p)  { margin-bottom: 18px; }

  :global(article a) {
    color: var(--nokia-glow);
    text-decoration: none;
    border-bottom: 2px solid var(--nokia-pixel);
  }
  :global(article a:hover) {
    background: var(--nokia-glow);
    color: var(--nokia-black);
    padding: 2px 4px;
    border-bottom-color: var(--nokia-black);
  }

  :global(article ul),
  :global(article ol) { margin: 0 0 18px 20px; }

  :global(article li) { margin-bottom: 8px; }

  :global(article code) {
    font-family: 'Press Start 2P', monospace;
    font-size: 7px;
    background: var(--nokia-black);
    color: var(--nokia-glow);
    padding: 2px 6px;
    border: 1px solid var(--nokia-pixel);
  }

  :global(article pre) {
    background: var(--nokia-black);
    border: 3px solid var(--nokia-pixel);
    box-shadow: 4px 4px 0 var(--nokia-black);
    padding: 16px;
    overflow-x: auto;
    margin-bottom: 24px;
  }

  :global(article pre code) {
    background: none;
    border: none;
    padding: 0;
    font-size: 7px;
    line-height: 2;
  }

  :global(article blockquote) {
    border-left: 4px solid var(--nokia-glow);
    margin: 0 0 18px;
    padding: 10px 16px;
    background: var(--nokia-black);
    color: var(--nokia-mid);
  }

  :global(article hr) {
    border: none;
    border-top: 3px solid var(--nokia-dark);
    margin: 32px 0;
  }

  :global(article strong) { color: var(--nokia-glow); }

  .post-foot {
    margin-top: 56px;
    padding-top: 20px;
    border-top: 3px solid var(--nokia-dark);
    background: none;
  }

  @media (max-width: 640px) {
    main { padding: 88px 16px 48px; }
  }
</style>

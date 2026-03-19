<script>
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let { data } = $props();

  function fmt(d) {
    if (!d) return '';
    return new Date(d).toLocaleDateString('en-GB', {
      day: '2-digit', month: 'short', year: 'numeric',
    }).toUpperCase();
  }
</script>

<svelte:head>
  <title>{data.title} — Emilio Mendoza</title>
  {#if data.excerpt}<meta name="description" content={data.excerpt} />{/if}
</svelte:head>

<Nav />

<div class="page">
  <a class="back" href="/blog">[ ← BLOG.LOG ]</a>

  <header>
    <div class="meta">
      <span class="date">{fmt(data.date)}</span>
      <div class="tags">
        {#each data.tags as t}<span class="tag">{t}</span>{/each}
      </div>
    </div>
    <h1>{data.title}</h1>
    {#if data.excerpt}<p class="excerpt">{data.excerpt}</p>{/if}
    <div class="rule"></div>
  </header>

  <article class="blog-article">
    {@html data.html}
  </article>

  <div class="foot">
    <a class="back" href="/blog">[ ← BACK TO BLOG.LOG ]</a>
  </div>
</div>

<Footer />

<style>
  :global(body) { background: var(--nokia-light); }

  .page {
    flex: 1;
    max-width: 720px;
    width: 100%;
    margin: 0 auto;
    padding: 96px 24px 80px;
  }

  .back { color: var(--nokia-dark); }
  .back:hover { color: var(--nokia-black); }

  header { margin: 24px 0 40px; }

  .meta {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
    margin-bottom: 16px;
  }

  .date { font-size: 7px; color: var(--nokia-dark); letter-spacing: 1px; }
  .tags { display: flex; gap: 6px; flex-wrap: wrap; }

  .tag {
    font-size: 6px;
    padding: 3px 8px;
    background: var(--nokia-darkest);
    color: var(--nokia-glow);
    border: 2px solid var(--nokia-dark);
    letter-spacing: 1px;
  }

  h1 {
    font-family: 'Press Start 2P', monospace;
    font-size: clamp(12px, 3vw, 18px);
    color: var(--nokia-black);
    line-height: 1.8;
    margin-bottom: 14px;
    font-weight: normal;
  }

  .excerpt {
    font-family: 'VT323', monospace;
    font-size: 22px;
    color: var(--nokia-dark);
    line-height: 1.4;
    letter-spacing: 1px;
    margin-bottom: 18px;
  }

  .rule {
    height: 4px;
    background: var(--nokia-mid);
    border-left: 4px solid var(--nokia-black);
  }

  .foot {
    margin-top: 56px;
    padding-top: 20px;
    border-top: 3px solid var(--nokia-mid);
  }

  @media (max-width: 640px) { .page { padding: 88px 16px 48px; } }
</style>

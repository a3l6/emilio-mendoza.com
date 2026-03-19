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

<svelte:head><title>Blog.Log — Emilio Mendoza</title></svelte:head>

<Nav />

<div class="page">
  <div class="heading">
    <h1>// BLOG.LOG</h1>
    <p>THOUGHTS, PROCESS, AND WRITING</p>
  </div>

  <div class="list">
    {#each data.posts as post}
      <a class="card" href="/blog/{post.slug}">
        <div class="card-top">
          <span class="date">{fmt(post.date)}</span>
          <div class="tags">
            {#each post.tags as t}<span class="tag">{t}</span>{/each}
          </div>
        </div>
        <div class="title">{post.title}</div>
        {#if post.excerpt}<div class="excerpt">{post.excerpt}</div>{/if}
        <span class="cta">[ READ → ]</span>
      </a>
    {/each}
  </div>
</div>

<Footer />

<style>
  :global(body) { background: var(--nokia-light); }

  .page {
    flex: 1;
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    padding: 100px 24px 80px;
  }

  .heading { text-align: center; margin-bottom: 56px; }

  .heading h1 {
    font-size: 14px;
    display: inline-block;
    background: var(--nokia-darkest);
    color: var(--nokia-glow);
    padding: 8px 16px;
    box-shadow: 4px 4px 0 var(--nokia-black);
    font-weight: normal;
  }

  .heading p {
    font-size: 8px;
    color: var(--nokia-dark);
    letter-spacing: 2px;
    margin-top: 16px;
  }

  .list { display: flex; flex-direction: column; gap: 16px; }

  .card {
    display: block;
    text-decoration: none;
    background: var(--nokia-dark);
    border: 4px solid var(--nokia-black);
    box-shadow: 6px 6px 0 var(--nokia-black);
    padding: 20px;
    position: relative;
    overflow: hidden;
    transition: transform 0.1s, box-shadow 0.1s;
  }

  .card::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 4px;
    background: var(--nokia-glow);
  }

  .card:hover { transform: translate(-3px,-3px); box-shadow: 9px 9px 0 var(--nokia-black); }
  .card:hover .cta { opacity: 1; }

  .card-top {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }

  .date { font-size: 7px; color: var(--nokia-light); letter-spacing: 1px; }
  .tags { display: flex; gap: 6px; flex-wrap: wrap; }

  .tag {
    font-size: 6px;
    padding: 3px 7px;
    background: var(--nokia-darkest);
    color: var(--nokia-glow);
    border: 2px solid var(--nokia-dark);
    letter-spacing: 1px;
  }

  .title  { font-size: 10px; color: var(--nokia-glow); line-height: 1.8; margin-bottom: 8px; }
  .excerpt { font-family: 'VT323', monospace; font-size: 20px; color: var(--nokia-light); line-height: 1.3; letter-spacing: 0.5px; margin-bottom: 12px; }
  .cta { font-size: 7px; color: var(--nokia-dark); letter-spacing: 1px; opacity: 0; transition: opacity 0.1s; }

  @media (max-width: 640px) { .page { padding: 88px 16px 48px; } }
</style>

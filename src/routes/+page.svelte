<script>
  import Nav from "$lib/components/Nav.svelte";
  import Marquee from "$lib/components/Marquee.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import About from "$lib/components/About.svelte";
  import Work from "$lib/components/Work.svelte";
  import Skills from "$lib/components/Skills.svelte";
  import Contact from "$lib/components/Contact.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
  <title>Emilio Mendoza</title>
  <meta
    name="description"
    content="Portfolio of Emilio Mendoza — Developer, Student, FOSS Contributer."
  />
</svelte:head>

<Nav />
<Marquee />
<Hero />

<About />

<!-- Pixel divider -->
<div
  class="pixel-dots"
  style="position:relative;z-index:10;background:var(--nokia-light);"
>
  <div class="pixel-dot"></div>
  <div class="pixel-dot"></div>
  <div class="pixel-dot"></div>
  <div class="pixel-dot" style="background:#A8CC40"></div>
  <div class="pixel-dot"></div>
  <div class="pixel-dot"></div>
  <div class="pixel-dot"></div>
</div>

<Work />
<Skills />
<Contact />
<Footer />

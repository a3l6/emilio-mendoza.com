<script>
  import PixelSprite from "./PixelSprite.svelte";
  import { envelope, globe, grid } from "$lib/sprites.js";

  const links = [
    {
      href: "mailto:CONTACT@EMILIO-MENDOZA.COM",
      label: "CONTACT@EMILIO-MENDOZA.COM",
      sprite: envelope,
    },
    {
      href: "https://emilio-mendoza.com",
      label: "EMILIO-MENDOZA.COM",
      sprite: globe,
    },
    {
      href: "https://www.linkedin.com/in/emilio-mendoza-5aa302296/",
      label: "LINKEDIN / EMILIO-MENDOZA",
      sprite: grid,
    },
  ];
</script>

<section id="contact">
  <div class="section-label">
    <h2>// CONTACT.EXE</h2>
  </div>

  <div class="contact-box">
    <p class="contact-tagline">
      READY TO START A NEW PROJECT?<br />
      LET'S CONNECT AND BUILD<br />
      SOMETHING LEGENDARY TOGETHER.
    </p>

    <div class="contact-links">
      {#each links as { href, label, sprite }}
        <a class="contact-link" {href}>
          <PixelSprite pixels={sprite} size={3} />
          <span class="link-label">{label}</span>
          <span class="arrow">→</span>
        </a>
      {/each}
    </div>

    <a href="mailto:hello@emilio-mendoza.com" class="btn btn-primary cta-btn">
      [ START A PROJECT ]
    </a>
  </div>
</section>

<style>
  section {
    background: var(--nokia-dark);
    padding: 80px 24px;
    position: relative;
    z-index: 10;
    text-align: center;
  }

  .section-label {
    margin-bottom: 48px;
  }

  .section-label h2 {
    font-size: 14px;
    display: inline-block;
    background: var(--nokia-glow);
    color: var(--nokia-black);
    padding: 8px 16px;
    box-shadow: 4px 4px 0 var(--nokia-darkest);
  }

  .contact-box {
    max-width: 600px;
    margin: 0 auto;
    background: var(--nokia-darkest);
    border: 4px solid var(--nokia-glow);
    box-shadow: 8px 8px 0 var(--nokia-black);
    padding: 40px;
  }

  .contact-tagline {
    font-size: 8px;
    color: var(--nokia-light);
    letter-spacing: 2px;
    line-height: 2.4;
    margin-bottom: 32px;
  }

  .contact-links {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 32px;
  }

  .contact-link {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 16px;
    background: var(--nokia-dark);
    border: 2px solid var(--nokia-pixel);
    color: var(--nokia-glow);
    text-decoration: none;
    font-size: 8px;
    letter-spacing: 1px;
    transition: all 0.1s;
    box-shadow: 3px 3px 0 var(--nokia-black);
  }

  .contact-link:hover {
    background: var(--nokia-glow);
    color: var(--nokia-black);
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0 var(--nokia-black);
  }

  /* Invert sprite colors on hover so they stay visible against light bg */
  .contact-link:hover :global(svg rect) {
    fill: var(--nokia-black);
  }

  .link-label {
    flex: 1;
    text-align: left;
  }
  .arrow {
    margin-left: auto;
  }

  .cta-btn {
    display: block;
    width: 100%;
    text-align: center;
  }
</style>

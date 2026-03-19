<script>
  import PixelSprite from "./PixelSprite.svelte";
  import NokiaLink from "./NokiaLink.svelte";
</script>

<footer>
  <div class="footer-content">
    <div>© 2026 EMILIO MENDOZA. ALL RIGHTS RESERVED.</div>
    <div class="dots">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot accent blink"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <div>BUILT WITH &lt;3 BY EMILIO MENDOZA</div>
  </div>
</footer>

<style>
  footer {
    position: relative;
    z-index: 10;
    background: var(--nokia-black);
    border-top: 4px solid var(--nokia-dark);
  }

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
    padding: 24px;
    color: var(--nokia-pixel);
    font-size: 9px;
    letter-spacing: 1px;
    flex-wrap: wrap;
    gap: 12px;
  }

  .dots {
    display: flex;
    gap: 6px;
    align-items: center;
  }

  .dot {
    width: 8px;
    height: 8px;
    background: var(--nokia-dark);
  }

  .dot.accent {
    background: var(--nokia-glow);
  }

  @media (max-width: 640px) {
    .footer-content {
      flex-direction: column;
      text-align: center;
    }
  }
</style>

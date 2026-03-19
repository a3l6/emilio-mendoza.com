<script>
  import { onMount } from "svelte";
  import PixelSprite from "./PixelSprite.svelte";
  import PixelTerrain from "./PixelTerrain.svelte";
  import { phone, snakeHead, snakeBody, snakeFood } from "$lib/sprites.js";

  let snakeStep = $state(0);
  const SNAKE_LEN = 9;

  onMount(() => {
    const interval = setInterval(() => {
      snakeStep = (snakeStep + 1) % SNAKE_LEN;
    }, 200);
    return () => clearInterval(interval);
  });
</script>

<section class="hero">
  <!-- Canvas terrain — top (hangs down from nav) -->
  <div class="terrain-top">
    <PixelTerrain
      flip={true}
      color="#6B8C1F"
      opacity={0.5}
      seed={42}
      tileW={16}
      rows={5}
      height={80}
    />
  </div>

  <!-- HERO CONTENT -->
  <div class="hero-content">
    <div class="hero-eyebrow">PORTFOLIO 2026</div>

    <div class="hero-title-wrapper">
      <div class="hero-name">
        EMILIO
        <span class="phone-pixel float">
          <PixelSprite pixels={phone} size={6} />
        </span>
        MENDOZA
      </div>
    </div>

    <p class="hero-tagline">
      TECH ENTHUSIAST <span class="blink">_</span><br />
      BUILDING SOFTWARE LINE BY LINE
    </p>

    <div class="hero-cta">
      <a href="#work" class="btn btn-primary">[ VIEW WORK ]</a>
      <a href="#contact" class="btn btn-secondary">[ GET IN TOUCH ]</a>
    </div>
  </div>

  <!-- SNAKE — head + body segments + food dot, all via PixelSprite -->
  <div class="snake-container">
    {#each Array(SNAKE_LEN) as _, i}
      <PixelSprite size={4} pixels={i === snakeStep ? snakeHead : snakeBody} />
    {/each}
    <PixelSprite size={4} pixels={snakeFood} />
  </div>

  <!-- Canvas terrain — bottom (rises up from footer) -->
  <div class="terrain-bottom">
    <PixelTerrain
      flip={false}
      color="#3D5C00"
      opacity={0.45}
      seed={99}
      tileW={16}
      rows={7}
      height={120}
    />
  </div>
</section>

<style>
  .hero {
    position: relative;
    z-index: 10;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 160px 24px 120px;
  }

  .terrain-top,
  .terrain-bottom {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    pointer-events: none;
    z-index: 2;
  }
  .terrain-top {
    top: 0;
  }
  .terrain-bottom {
    bottom: 0;
  }

  .pixel-decor {
    position: absolute;
    pointer-events: none;
    z-index: 3;
  }

  .hero-content {
    position: relative;
    z-index: 10;
    text-align: center;
    width: 100%;
    max-width: 900px;
  }

  .hero-eyebrow {
    font-size: 8px;
    color: var(--nokia-dark);
    letter-spacing: 4px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  .hero-eyebrow::before,
  .hero-eyebrow::after {
    content: "";
    display: block;
    width: 24px;
    height: 2px;
    background: var(--nokia-dark);
  }

  .hero-title-wrapper {
    display: block;
    margin-bottom: 8px;
  }

  .hero-name {
    font-size: clamp(28px, 6vw, 64px);
    color: var(--nokia-black);
    letter-spacing: 6px;
    line-height: 1.4;
    display: block;
    text-shadow:
      4px 4px 0 var(--nokia-dark),
      8px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .phone-pixel {
    display: inline-block;
    vertical-align: middle;
    margin: 0 16px;
  }

  .hero-tagline {
    font-size: 9px;
    color: var(--nokia-dark);
    letter-spacing: 3px;
    margin: 24px 0 40px;
    line-height: 2.2;
  }

  .hero-cta {
    display: inline-flex;
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .snake-container {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 2px;
    pointer-events: none;
    z-index: 5;
  }
</style>

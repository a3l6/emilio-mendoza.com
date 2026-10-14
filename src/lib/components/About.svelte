<script>
  import { onMount } from "svelte";
  import PixelSprite from "./PixelSprite.svelte";
  import NokiaLink from "./NokiaLink.svelte";
  import { face, faceBlink } from "$lib/sprites.js";

  const stats = [
    { num: "7+", label: "YRS EXP" },
    { num: "30+", label: "PROJECTS" },
    { num: "5x", label: "HACKATHON WINNER" },
    { num: "INF", label: "LOC" },
  ];

  const BLINK_INTERVAL = 3000;
  const BLINK_DURATION = 120;

  let isBlinking = $state(false);

  onMount(() => {
    function blink() {
      isBlinking = true;
      setTimeout(() => {
        isBlinking = false;
      }, BLINK_DURATION);
    }
    const interval = setInterval(blink, BLINK_INTERVAL);
    return () => clearInterval(interval);
  });
</script>

<section id="about">
  <div class="section-label">
    <h2>// ABOUT_ME.TXT</h2>
    <p>LOADING PROFILE DATA...</p>
  </div>

  <div class="about-grid">
    <div class="about-text">
      <p>
        HELLO WORLD. I'M EMILIO MENDOZA, A WATERLOO STUDENT WITH A PASSION FOR
        BUILDING REAL SOFTWARE.
      </p>
      <p>
        I COMBINE TECHNICAL PRECISION WITH A LOVE AND PASSION FOR DEVELOPING <NokiaLink
          href="https://www.fsf.org/"
          label="FREE SOFTWARE"
        />. WHETHER IT'S BACKEND, FRONTEND, OR IN BETWEEN, EVERY LINE COUNTS.
      </p>
      <p>
        CURRENTLY AVAILABLE FOR NEW PROJECTS AND COLLABORATIONS. LET'S BUILD
        SOMETHING LEGENDARY.
      </p>
      <p>
        INSPIRED BY THE <NokiaLink
          href="https://en.wikipedia.org/wiki/Unix_philosophy"
          label="UNIX PHILOSOPHY"
        /> — DO ONE THING AND DO IT WELL.
      </p>
      <div class="location">
        <div class="location-label">► CURRENTLY BASED IN</div>
        <div class="location-value">
          WATERLOO, ON, CANADA — OPEN TO REMOTE WORK
        </div>
      </div>
    </div>

    <div>
      <div class="pixel-avatar-box">
        <PixelSprite pixels={isBlinking ? faceBlink : face} size={8} />
        <div class="avatar-name">EMILIO MENDOZA</div>
        <div class="avatar-role">TECH ENTHUSIAST</div>
      </div>

      <div class="stats-row">
        {#each stats as { num, label }}
          <div class="stat-box">
            <span class="stat-num">{num}</span>
            <span class="stat-label">{label}</span>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  section {
    background: var(--nokia-dark);
    padding: 80px 24px;
    position: relative;
    z-index: 10;
  }

  .section-label {
    text-align: center;
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

  .section-label p {
    color: var(--nokia-light);
    font-size: 8px;
    letter-spacing: 2px;
    margin-top: 16px;
  }

  .about-grid {
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    align-items: start;
  }

  .about-text {
    color: var(--nokia-light);
    font-size: 10px;
    line-height: 2.4;
  }
  .about-text p {
    margin-bottom: 20px;
  }

  .location {
    margin-top: 24px;
  }
  .location-label {
    color: var(--nokia-glow);
    font-size: 7px;
    letter-spacing: 2px;
    margin-bottom: 8px;
  }
  .location-value {
    color: var(--nokia-light);
    font-size: 8px;
    letter-spacing: 2px;
  }

  .pixel-avatar-box {
    border: 4px solid var(--nokia-glow);
    box-shadow: 8px 8px 0 var(--nokia-black);
    background: var(--nokia-darkest);
    padding: 24px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .avatar-name {
    color: var(--nokia-glow);
    font-size: 9px;
    letter-spacing: 2px;
  }
  .avatar-role {
    color: var(--nokia-mid);
    font-size: 7px;
    letter-spacing: 1px;
  }

  .stats-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-top: 24px;
  }

  .stat-box {
    background: var(--nokia-darkest);
    border: 3px solid var(--nokia-pixel);
    padding: 12px 8px;
    text-align: center;
    box-shadow: 3px 3px 0 var(--nokia-black);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }

  .stat-num {
    font-size: 22px;
    color: var(--nokia-glow);
  }
  .stat-label {
    font-size: 8px;
    color: var(--nokia-mid);
    letter-spacing: 1px;
  }

  @media (max-width: 640px) {
    .about-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

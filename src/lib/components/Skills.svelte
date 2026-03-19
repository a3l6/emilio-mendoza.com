<script>
  import { onMount } from 'svelte';
  import { skills } from '$lib/skills.js';

  // Dynamically calculated based on container width
  let dotWidth = $state(24);
  let terminal;

  function calcDotWidth() {
    if (!terminal) return;
    // Each monospace char at 9px font with 1px letter-spacing ≈ 10px wide
    // Status badge = 6 chars + gap = ~68px, note = ~100px, gaps = ~16px
    const available = terminal.clientWidth - 68 - 100 - 32;
    const charsAvailable = Math.floor(available / 10);
    dotWidth = Math.max(6, charsAvailable);
  }

  function dotPad(label) {
    const dots = dotWidth - label.length;
    return label + ' ' + '.'.repeat(Math.max(2, dots));
  }

  let revealed = $state([]);
  let booting  = $state(false);
  let done     = $state(false);

  function startBoot() {
    if (booting) return;
    booting = true;
    revealed = [];
    skills.forEach((skill, i) => {
      setTimeout(() => {
        revealed = [...revealed, i];
        if (i === skills.length - 1) done = true;
      }, skill.delay);
    });
  }

  onMount(() => {
    calcDotWidth();
    const ro = new ResizeObserver(calcDotWidth);
    if (terminal) ro.observe(terminal);

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) startBoot(); },
      { threshold: 0.2 }
    );
    const el = document.getElementById('skills');
    if (el) observer.observe(el);
    return () => {
      observer.disconnect();
      ro.disconnect();
    };
  });

  const STATUS_LABEL = { OK: '[ OK ]', WARN: '[WARN]', ERR: '[ERR ]', INFO: '[INFO]' };
</script>

<section id="skills">
  <div class="section-label">
    <h2>// SKILLS.EXE</h2>
    <p>INITIALISING SYSTEM MODULES...</p>
  </div>

  <div class="terminal" bind:this={terminal}>
    <div class="terminal-bar">
      <span class="terminal-title">BOOT_SEQUENCE.LOG</span>
    </div>

    <div class="log">
      <div class="log-line header">
        <span class="log-text">EMILIO MENDOZA OS — v2025.1</span>
      </div>
      <div class="log-line header">
        <span class="log-text">SCANNING SKILL MODULES...</span>
      </div>
      <div class="log-spacer"></div>

      {#each skills as skill, i}
        {#if revealed.includes(i)}
          <div class="log-line" class:fresh={revealed[revealed.length - 1] === i}>
            <span class="status {skill.status}">{STATUS_LABEL[skill.status]}</span>
            <span class="log-label">{dotPad(skill.label)}</span>
            <span class="note {skill.status}">{skill.note}</span>
          </div>
        {/if}
      {/each}

      {#if done}
        <div class="log-spacer"></div>
        <div class="log-line">
          <span class="log-text success">ALL MODULES PROCESSED. SYSTEM READY.</span>
        </div>
      {:else if booting}
        <div class="log-line">
          <span class="log-text dim">LOADING<span class="blink">_</span></span>
        </div>
      {/if}
    </div>
  </div>
</section>

<style>
  section {
    background: var(--nokia-darkest);
    padding: 80px 24px;
    position: relative;
    z-index: 10;
  }

  .section-label { text-align: center; margin-bottom: 48px; }

  .section-label h2 {
    font-size: 14px;
    display: inline-block;
    background: var(--nokia-dark);
    color: var(--nokia-glow);
    padding: 8px 16px;
    box-shadow: 4px 4px 0 var(--nokia-black);
  }

  .section-label p {
    color: var(--nokia-mid);
    font-size: 8px;
    letter-spacing: 2px;
    margin-top: 16px;
  }

  .terminal {
    max-width: 720px;
    margin: 0 auto;
    border: 4px solid var(--nokia-pixel);
    box-shadow: 8px 8px 0 var(--nokia-black);
  }

  .terminal-bar {
    background: var(--nokia-dark);
    border-bottom: 4px solid var(--nokia-pixel);
    padding: 8px 16px;
    display: flex;
    align-items: flex-start;
  }

  .terminal-title {
    font-size: 7px;
    color: var(--nokia-mid);
    letter-spacing: 2px;
    line-height: 8px;
  }

  .log {
    background: var(--nokia-black);
    padding: 20px 20px 24px;
    min-height: 200px;
  }

  /* Each row: [STATUS] label .... NOTE */
  .log-line {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: baseline;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 9px;
    letter-spacing: 1px;
    line-height: 1.6;
    animation: fadeIn 0.15s ease-out;
  }

  /* header lines span full width */
  .log-line.header {
    display: block;
    margin-bottom: 4px;
  }

  .log-line.fresh .log-label::after {
    content: '▌';
    animation: blink 0.6s step-start 3;
  }

  .log-spacer { height: 10px; }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateX(-4px); }
    to   { opacity: 1; transform: translateX(0); }
  }

  .status {
    flex-shrink: 0;
    font-size: 9px;
    letter-spacing: 1px;
    white-space: nowrap;
  }

  .status.OK   { color: var(--nokia-glow); }
  .status.WARN { color: var(--nokia-light); }
  .status.ERR  { color: var(--nokia-mid); }
  .status.INFO { color: var(--nokia-pixel); }

  .log-label {
    color: var(--nokia-mid);
    white-space: nowrap;
    overflow: hidden;
    min-width: 0;
  }

  .log-text {
    color: var(--nokia-mid);
  }

  .log-text.success { color: var(--nokia-glow); }
  .log-text.dim     { color: var(--nokia-pixel); }

  .note {
    flex-shrink: 0;
    font-size: 9px;
    letter-spacing: 1px;
    white-space: nowrap;
  }

  .note.OK   { color: var(--nokia-glow); }
  .note.WARN { color: var(--nokia-light); }
  .note.ERR  { color: var(--nokia-mid); }
  .note.INFO { color: var(--nokia-pixel); }

  /* ── Mobile ── */
  @media (max-width: 560px) {
    section { padding: 48px 8px; }

    .terminal {
      border-width: 2px;
      box-shadow: 4px 4px 0 var(--nokia-black);
    }

    .terminal-bar { padding: 8px 12px; }

    .log { padding: 12px 12px 16px; }

    .log-line {
      font-size: 6px;
      gap: 6px;
      margin-bottom: 6px;
    }

    .status, .note { font-size: 6px; }
  }
</style>

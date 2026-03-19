<script>
  // One repeating unit — duplicated enough times to guarantee one copy
  // is wider than any viewport, so -50% always lands seamlessly.
  const unit = [
    { text: "EMILIO MENDOZA", sep: "///" },
    { text: "DEVELOPER", sep: "•" },
    { text: "STUDENT", sep: "•" },
    { text: "FOSS CONTRIBUTER", sep: "•" },
  ];

  // 6 repeats per copy → one copy ≈ 6× content width, always wider than any screen
  const copy = Array(6).fill(unit).flat();
</script>

<div class="marquee-track" aria-hidden="true">
  <!-- Two identical copies. -50% = exactly one copy width. -->
  <div class="marquee-inner">
    {#each [0, 1] as _}
      {#each copy as { text, sep }}
        <span class="marquee-item">{text}<span class="sep"> {sep} </span></span>
      {/each}
    {/each}
  </div>
</div>

<style>
  .marquee-track {
    background: var(--nokia-black);
    padding: 10px 0;
    overflow: hidden;
    width: 100%;
    border-top: 3px solid var(--nokia-dark);
    border-bottom: 3px solid var(--nokia-dark);
    position: relative;
    z-index: 10;
    margin-top: 56px;
  }

  .marquee-inner {
    display: flex;
    width: max-content;
    white-space: nowrap;
    animation: marquee 40s linear infinite;
  }

  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  .marquee-item {
    font-size: 8px;
    color: var(--nokia-glow);
    letter-spacing: 3px;
    padding: 0 24px;
    flex-shrink: 0;
    white-space: nowrap;
  }

  .sep {
    color: var(--nokia-dark);
  }
</style>

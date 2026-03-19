<script>
  import { onMount } from 'svelte';

  /**
   * Props:
   *   flip    — if true the terrain grows down from the top (top terrain)
   *             if false it grows up from the bottom (bottom terrain)
   *   color   — fill color
   *   opacity — canvas opacity
   *   seed    — integer, changes the shape
   *   tileW   — pixel column width in CSS px (default 16)
   *   rows    — max terrain height in tiles (default 6)
   *   height  — canvas height in px (default 96)
   */
  let {
    flip    = false,
    color   = '#3D5C00',
    opacity = 0.5,
    seed    = 1,
    tileW   = 16,
    rows    = 6,
    height  = 96,
  } = $props();

  let canvas;

  function draw() {
    if (!canvas) return;
    const w = canvas.offsetWidth;
    const h = height;
    canvas.width  = w;
    canvas.height = h;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = color;
    ctx.globalAlpha = opacity;

    const cols = Math.ceil(w / tileW) + 1;
    const tileH = Math.floor(h / rows);

    // Build a repeating triangle wave profile
    // Each triangle spans `period` columns, rising then falling
    const period = 20; // cols per full triangle
    const profile = [];

    for (let c = 0; c < cols; c++) {
      // Position within the current triangle cycle (0 → period-1)
      const pos = (c + seed * 7) % period;
      const half = period / 2;
      // Ramp up first half, ramp down second half — gives a triangle wave
      const t = pos < half ? pos / half : 1 - (pos - half) / half;
      // Map 0..1 to 1..rows, keep minimum height of 1
      profile.push(Math.max(1, Math.round(t * (rows - 1)) + 1));
    }

    // Draw filled columns
    for (let c = 0; c < cols; c++) {
      const tileCount = profile[c];
      const x = c * tileW;
      const fillH = tileCount * tileH;

      if (flip) {
        ctx.fillRect(x, 0, tileW, fillH);
      } else {
        ctx.fillRect(x, h - fillH, tileW, fillH);
      }
    }
  }

  onMount(() => {
    draw();
    const ro = new ResizeObserver(draw);
    ro.observe(canvas);
    return () => ro.disconnect();
  });
</script>

<canvas bind:this={canvas} style="width:100%;height:{height}px;display:block;"></canvas>

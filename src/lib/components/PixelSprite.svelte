<script>
  /**
   * PixelSprite — renders a 2D array of color strings as crisp SVG pixel art.
   *
   * Props:
   *   pixels  — 2D array of color strings. Empty string = transparent.
   *   size    — pixel size in px (default 8)
   *   class   — forwarded to <svg>
   */
  let { pixels = [], size = 8, class: cls = '' } = $props();

  // Flatten the 2D array into a list of colored cells, skipping transparent ones
  function getCells(pixels) {
    const cells = [];
    for (let y = 0; y < pixels.length; y++) {
      for (let x = 0; x < pixels[y].length; x++) {
        const color = pixels[y][x];
        if (color) cells.push({ x, y, color });
      }
    }
    return cells;
  }
</script>

<svg
  class={cls}
  width={pixels[0]?.length * size ?? 0}
  height={pixels.length * size}
  viewBox="0 0 {pixels[0]?.length * size ?? 0} {pixels.length * size}"
  xmlns="http://www.w3.org/2000/svg"
  shape-rendering="crispEdges"
>
  {#each getCells(pixels) as { x, y, color }}
    <rect
      x={x * size}
      y={y * size}
      width={size}
      height={size}
      fill={color}
    />
  {/each}
</svg>

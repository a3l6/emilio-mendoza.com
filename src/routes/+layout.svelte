<script>
  import '../app.css';
  import { onMount } from 'svelte';

  let { children } = $props();

  // Grid cell size — must match background-size in app.css
  const GRID = 8;

  // Snap a pixel value to the nearest grid line
  const snap = (n) => Math.round(n / GRID) * GRID;

  onMount(() => {
    // Real cursor: hidden in CSS, replaced by a snapped grid square
    document.body.style.cursor = 'none';

    // The live cursor square that follows the grid
    const cursor = document.createElement('div');
    cursor.style.cssText = `
      position: fixed;
      width: ${GRID}px;
      height: ${GRID}px;
      background: #1A2600;
      pointer-events: none;
      z-index: 99999;
    `;
    document.body.appendChild(cursor);

    // Trail — keep the last N snapped positions, only add when the grid cell changes
    const TRAIL_LENGTH = 10;
    const trail = [];
    let lastSnapX = -1;
    let lastSnapY = -1;

    const handleMouseMove = (e) => {
      const sx = snap(e.clientX);
      const sy = snap(e.clientY);

      // Move the cursor square
      cursor.style.left = `${sx}px`;
      cursor.style.top  = `${sy}px`;

      // Only add a trail dot when we've moved to a new grid cell
      if (sx === lastSnapX && sy === lastSnapY) return;
      lastSnapX = sx;
      lastSnapY = sy;

      const dot = document.createElement('div');
      dot.style.cssText = `
        position: fixed;
        left: ${sx}px;
        top: ${sy}px;
        width: ${GRID}px;
        height: ${GRID}px;
        background: #2A3E00;
        pointer-events: none;
        z-index: 9997;
        opacity: 0.6;
        transition: opacity 1s;
      `;
      document.body.appendChild(dot);
      trail.push(dot);

      // Fade this dot out after 1s no matter what — don't wait for new dots to push it out
      setTimeout(() => {
        dot.style.opacity = '0';
        setTimeout(() => { dot.remove(); trail.splice(trail.indexOf(dot), 1); }, 1000);
      }, 0);

      // Also cap the trail length for very fast movement
      if (trail.length > TRAIL_LENGTH) {
        const old = trail.shift();
        old.style.opacity = '0';
        setTimeout(() => old.remove(), 1000);
      }
    };

    const handleMouseLeave = () => { cursor.style.display = 'none'; };
    const handleMouseEnter = () => { cursor.style.display = 'block'; };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cursor.remove();
      trail.forEach(d => d.remove());
      document.body.style.cursor = '';
    };
  });
</script>

{@render children()}

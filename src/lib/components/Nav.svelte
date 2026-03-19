<script>
  import { onMount } from 'svelte';
  import PixelSprite from './PixelSprite.svelte';
  import { signal } from '$lib/sprites.js';

  let clock = $state('00:00');

  // ── Battery ──────────────────────────────────────────────────────────────
  const _ = '';
  const D = '#2A3E00';
  const G = '#A8CC40';
  const X = '#3D5C00';

  // Build a battery sprite from a 0–1 level value.
  // The body is 4 cells wide; fill from left based on level.
  function makeBatterySprite(level, charging = false) {
    const cells = 4;
    const filled = Math.round(level * cells);
    const row = [D, ...Array.from({ length: cells }, (_, i) => i < filled ? G : X), D, filled === cells ? D : _];
    return [
      [D, D, D, D, D, D, _],
      row,
      row,
      [D, D, D, D, D, D, _],
    ];
  }

  let batterySprite = $state(makeBatterySprite(0.75));
  let batteryLevel  = $state(null); // null = unknown

  onMount(() => {
    // Clock
    const updateClock = () => {
      const now = new Date();
      clock = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
    };
    updateClock();
    const clockId = setInterval(updateClock, 1000);

    // Battery Status API
    let battery = null;
    const updateBattery = () => {
      if (!battery) return;
      batteryLevel  = Math.round(battery.level * 100);
      batterySprite = makeBatterySprite(battery.level, battery.charging);
    };

    if ('getBattery' in navigator) {
      navigator.getBattery().then(b => {
        battery = b;
        updateBattery();
        b.addEventListener('levelchange',    updateBattery);
        b.addEventListener('chargingchange', updateBattery);
      }).catch(() => {
        // API blocked or unsupported — keep default sprite
      });
    }

    return () => {
      clearInterval(clockId);
      if (battery) {
        battery.removeEventListener('levelchange',    updateBattery);
        battery.removeEventListener('chargingchange', updateBattery);
      }
    };
  });

  const links = [
    { href: '/#about',   label: 'ABOUT'   },
    { href: '/#work',    label: 'WORK'    },
    { href: '/#skills',  label: 'SKILLS'  },
    { href: '/#contact', label: 'CONTACT' },
    { href: '/blog',     label: 'BLOG'    },
  ];
</script>

<nav>
  <a class="nav-logo" href="/">
    <!-- 3×3 pixel grid logo -->
    <PixelSprite size={5} pixels={[
      ['#A8CC40','#A8CC40','#A8CC40'],
      ['#A8CC40','',       '#A8CC40'],
      ['#A8CC40','#A8CC40','#A8CC40'],
    ]} />
    EM.EXE
  </a>

  <ul class="nav-links">
    {#each links as { href, label }}
      <li><a {href}>{label}</a></li>
    {/each}
  </ul>

  <div class="nav-status">
    <PixelSprite size={4} pixels={signal} />
    <PixelSprite size={5} pixels={batterySprite} />
    {#if batteryLevel !== null}
      <span class="battery-pct">{batteryLevel}%</span>
    {/if}
    <span>{clock}</span>
  </div>
</nav>

<style>
  nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    width: 100%;
    z-index: 1000;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    padding: 12px 24px;
    background: var(--nokia-dark);
    border-bottom: 4px solid var(--nokia-black);
    box-shadow: 0 4px 0 var(--nokia-black);
  }
  .nav-logo {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--nokia-glow);
    font-size: 9px;
    text-decoration: none;
    letter-spacing: 2px;
  }
  .nav-links {
    display: flex;
    gap: 4px;
    list-style: none;
    justify-self: start;
  }
  .nav-links a {
    display: block;
    padding: 6px 10px;
    color: var(--nokia-light);
    text-decoration: none;
    font-size: 9px;
    letter-spacing: 1px;
    border: 2px solid transparent;
    transition: all 0.1s;
  }
  .nav-links a:hover {
    color: var(--nokia-black);
    background: var(--nokia-glow);
    border-color: var(--nokia-black);
  }
  .nav-status {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--nokia-glow);
    font-size: 9px;
    justify-self: end;
  }
  .battery-pct {
    font-size: 9px;
    color: var(--nokia-glow);
    letter-spacing: 1px;
  }
  @media (max-width: 640px) {
    .nav-links { display: none; }
    nav { padding: 10px 14px; }
  }
</style>

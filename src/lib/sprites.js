/**
 * sprites.js — All pixel art for the site defined as 2D color arrays.
 *
 * Palette aliases (Nokia 3310 green LCD):
 *   _  = transparent (empty cell)
 *   K  = #1A2600  (nokia-black)
 *   D  = #2A3E00  (nokia-darkest)
 *   X  = #3D5C00  (nokia-dark)
 *   P  = #4A6A0A  (nokia-pixel)
 *   M  = #6B8C1F  (nokia-mid)
 *   L  = #8BAE29  (nokia-light)
 *   G  = #A8CC40  (nokia-glow)
 */

const _ = '';
const K = '#1A2600';
const D = '#2A3E00';
const X = '#3D5C00';
const P = '#4A6A0A';
const M = '#6B8C1F';
const L = '#8BAE29';
const G = '#A8CC40';

// ─── Nokia 3310 handset (10 × 18 grid, 6px/cell = 60×108px) ────────────────
export const phone = [
  [_, D, D, D, D, D, D, D, D, _],
  [D, X, X, X, X, X, X, X, X, D],
  [D, X, M, M, M, M, M, M, X, D],
  [D, X, M, M, M, M, M, M, X, D],
  [D, X, M, M, D, D, M, M, X, D],
  [D, X, M, M, D, D, M, M, X, D],
  [D, X, M, M, M, M, M, M, X, D],
  [D, X, M, M, M, M, M, M, X, D],
  [D, X, X, X, X, X, X, X, X, D],
  [D, X, G, X, X, X, X, G, X, D],
  [D, X, X, X, X, X, X, X, X, D],
  [D, D, X, X, D, D, X, X, D, D],
  [D, D, X, X, D, D, X, X, D, D],
  [D, X, X, X, X, X, X, X, X, D],
  [D, D, X, X, D, D, X, X, D, D],
  [D, D, X, X, D, D, X, X, D, D],
  [D, X, X, X, X, X, X, X, X, D],
  [_, D, D, D, D, D, D, D, D, _],
];

// ─── Pixel avatar face frames (12 × 12 grid, 8px/cell = 96×96px) ────────────
// Shared rows (top, bottom, nose, mouth stay the same across all frames)
// Only the eye rows (3,4,5) change to move the pupils left/right.

// Frame 0 — looking straight ahead
export const face = [
  [_, _, D, D, D, D, D, D, D, D, _, _],
  [_, D, G, G, G, G, G, G, G, G, D, _],
  [D, G, G, G, G, G, G, G, G, G, G, D],
  [D, G, D, G, G, G, G, G, D, G, G, D],  // pupils: col 2, col 8
  [D, G, D, D, G, G, G, D, D, G, G, D],
  [D, G, D, G, G, G, G, G, D, G, G, D],
  [D, G, G, G, G, M, G, G, G, G, G, D],
  [D, G, G, G, G, M, G, G, G, G, G, D],
  [D, G, G, D, G, G, G, D, G, G, G, D],
  [D, G, G, G, D, D, D, G, G, G, G, D],
  [_, D, G, G, G, G, G, G, G, G, D, _],
  [_, _, D, D, D, D, D, D, D, D, _, _],
];

// Frame 1 — looking left: pupils at col1 (left) col7 (right), fills face INWARD
export const faceLeft = [
  [_, _, D, D, D, D, D, D, D, D, _, _],
  [_, D, G, G, G, G, G, G, G, G, D, _],
  [D, G, G, G, G, G, G, G, G, G, G, D],
  [D, D, G, G, G, G, G, D, G, G, G, D],  // single D: col1, col7
  [D, D, D, G, G, G, D, D, G, G, G, D],  // wide: cols 1-2 (fill RIGHT), cols 6-7 (fill LEFT)
  [D, D, G, G, G, G, G, D, G, G, G, D],
  [D, G, G, G, G, M, G, G, G, G, G, D],
  [D, G, G, G, G, M, G, G, G, G, G, D],
  [D, G, G, D, G, G, G, D, G, G, G, D],
  [D, G, G, G, D, D, D, G, G, G, G, D],
  [_, D, G, G, G, G, G, G, G, G, D, _],
  [_, _, D, D, D, D, D, D, D, D, _, _],
];

// Frame 2 — looking right: pupils at col3 (left) col8 (right), fills FLIPPED to face OUTWARD
export const faceRight = [
  [_, _, D, D, D, D, D, D, D, D, _, _],
  [_, D, G, G, G, G, G, G, G, G, D, _],
  [D, G, G, G, G, G, G, G, G, G, G, D],
  [D, G, G, D, G, G, G, G, D, G, G, D],  // single D: col3, col8
  [D, G, D, D, G, G, G, G, D, D, G, D],  // wide: cols 2-3 (fill LEFT), cols 8-9 (fill RIGHT)
  [D, G, G, D, G, G, G, G, D, G, G, D],
  [D, G, G, G, G, M, G, G, G, G, G, D],
  [D, G, G, G, G, M, G, G, G, G, G, D],
  [D, G, G, D, G, G, G, D, G, G, G, D],
  [D, G, G, G, D, D, D, G, G, G, G, D],
  [_, D, G, G, G, G, G, G, G, G, D, _],
  [_, _, D, D, D, D, D, D, D, D, _, _],
];

// Frame 3 — blink (eyes closed)
export const faceBlink = [
  [_, _, D, D, D, D, D, D, D, D, _, _],
  [_, D, G, G, G, G, G, G, G, G, D, _],
  [D, G, G, G, G, G, G, G, G, G, G, D],
  [D, G, G, G, G, G, G, G, G, G, G, D],
  [D, G, D, D, D, G, G, D, D, D, G, D],  // closed eyes = horizontal line
  [D, G, G, G, G, G, G, G, G, G, G, D],
  [D, G, G, G, G, M, G, G, G, G, G, D],
  [D, G, G, G, G, M, G, G, G, G, G, D],
  [D, G, G, D, G, G, G, D, G, G, G, D],
  [D, G, G, G, D, D, D, G, G, G, G, D],
  [_, D, G, G, G, G, G, G, G, G, D, _],
  [_, _, D, D, D, D, D, D, D, D, _, _],
];

// ─── GitHub octocat (16 × 16) ────────────────────────────────────────────────
export const github = [
  [_, _, _, _, D, D, D, D, D, D, D, D, _, _, _, _],
  [_, _, _, D, G, G, G, G, G, G, G, G, D, _, _, _],
  [_, _, D, G, G, G, G, G, G, G, G, G, G, D, _, _],
  [_, _, D, G, G, G, G, G, G, G, G, G, G, D, _, _],
  [_, D, G, G, D, D, G, G, G, G, D, D, G, G, D, _],
  [_, D, G, G, D, _, G, G, G, G, _, D, G, G, D, _],
  [_, D, G, G, D, D, G, G, G, G, D, D, G, G, D, _],
  [_, D, G, G, G, G, G, G, G, G, G, G, G, G, D, _],
  [_, D, G, G, G, G, G, G, G, G, G, G, G, G, D, _],
  [_, _, D, G, G, G, G, G, G, G, G, G, G, D, _, _],
  [_, _, D, G, G, G, G, G, G, G, G, G, G, D, _, _],
  [_, _, _, D, G, D, G, G, G, G, D, G, D, _, _, _],
  [_, _, _, D, _, D, G, G, G, G, D, _, D, _, _, _],
  [_, _, _, _, _, _, D, G, G, D, _, _, _, _, _, _],
  [_, _, _, _, _, _, D, _, _, D, _, _, _, _, _, _],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
];

// ─── Signal / antenna icon (4 × 5, 5px/cell) ───────────────────────────────
export const signal = [
  [D, _, _, _],
  [D, D, _, _],
  [D, D, D, _],
  [D, D, D, D],
  [D, _, _, _],
];

// ─── Battery icon (5 × 3, 6px/cell) ────────────────────────────────────────
export const battery = [
  [D, D, D, D, D, D, _],
  [D, G, G, X, X, D, D],
  [D, G, G, X, X, D, D],
  [D, D, D, D, D, D, _],
];

// ─── Snake head (4 × 4, 6px/cell) ───────────────────────────────────────────
export const snakeHead = [
  [D, D, D, D],
  [D, G, G, D],
  [D, G, G, D],
  [D, D, D, D],
];

// ─── Snake body segment (4 × 4, 6px/cell) ───────────────────────────────────
export const snakeBody = [
  [_, D, D, _],
  [D, X, X, D],
  [D, X, X, D],
  [_, D, D, _],
];

// ─── Food dot (4 × 4, 6px/cell) ─────────────────────────────────────────────
export const snakeFood = [
  [_, G, G, _],
  [G, G, G, G],
  [G, G, G, G],
  [_, G, G, _],
];

// ─── Star / pixel spark (5 × 5) ──────────────────────────────────────────────
export const spark = [
  [_, _, D, _, _],
  [_, _, D, _, _],
  [D, D, G, D, D],
  [_, _, D, _, _],
  [_, _, D, _, _],
];

// ─── Envelope / email icon (8 × 6) ──────────────────────────────────────────
export const envelope = [
  [D, D, D, D, D, D, D, D],
  [D, G, D, _, _, D, G, D],
  [D, _, G, D, D, G, _, D],
  [D, _, _, D, D, _, _, D],
  [D, _, _, _, _, _, _, D],
  [D, D, D, D, D, D, D, D],
];

// ─── Globe / web icon (8 × 8) ───────────────────────────────────────────────
export const globe = [
  [_, _, D, D, D, D, _, _],
  [_, D, G, D, D, G, D, _],
  [D, G, D, G, G, D, G, D],
  [D, D, G, G, G, G, D, D],
  [D, D, G, G, G, G, D, D],
  [D, G, D, G, G, D, G, D],
  [_, D, G, D, D, G, D, _],
  [_, _, D, D, D, D, _, _],
];

// ─── LinkedIn / grid icon (8 × 8) ────────────────────────────────────────────
export const grid = [
  [D, D, D, _, D, D, D, _],
  [D, G, D, _, D, G, D, _],
  [D, D, D, _, D, D, D, _],
  [_, _, _, _, _, _, _, _],
  [D, D, D, _, D, D, D, _],
  [D, G, D, _, D, G, D, _],
  [D, D, D, _, D, D, D, _],
  [_, _, _, _, _, _, _, _],
];

// ─── Scatter / dots decoration (5 × 5) ──────────────────────────────────────
export const scatter = [
  [D, _, D, _, D],
  [_, _, _, _, _],
  [_, D, _, D, _],
  [_, _, _, _, _],
  [D, _, D, _, D],
];

// ─── Antenna / signal tower decoration (5 × 6) ───────────────────────────────
export const antenna = [
  [_, _, D, _, _],
  [_, D, D, D, _],
  [D, D, D, D, D],
  [_, _, D, _, _],
  [_, _, D, _, _],
  [_, D, _, D, _],
];

// ─── Nokia wordmark — each letter as its own 2D array (6px/cell) ─────────────

export const letterN = [
  [D, _, _, _, D],
  [D, _, _, _, D],
  [D, D, _, _, D],
  [D, _, D, _, D],
  [D, _, _, D, D],
  [D, _, _, _, D],
  [D, _, _, _, D],
];

export const letterO = [
  [_, D, D, D, _],
  [D, _, _, _, D],
  [D, _, _, _, D],
  [D, _, _, _, D],
  [D, _, _, _, D],
  [D, _, _, _, D],
  [_, D, D, D, _],
];

export const letterK = [
  [D, _, _, _, D],
  [D, _, _, D, _],
  [D, _, D, _, _],
  [D, D, _, _, _],
  [D, _, D, _, _],
  [D, _, _, D, _],
  [D, _, _, _, D],
];

export const letterI = [
  [D, D, D],
  [_, D, _],
  [_, D, _],
  [_, D, _],
  [_, D, _],
  [_, D, _],
  [D, D, D],
];

export const letterA = [
  [_, D, D, D, _],
  [D, _, _, _, D],
  [D, _, _, _, D],
  [D, D, D, D, D],
  [D, _, _, _, D],
  [D, _, _, _, D],
  [D, _, _, _, D],
];

// ─── Additional hero decorations ─────────────────────────────────────────────

// Cursor arrow (5 × 7)
export const cursorArrow = [
  [D, _, _, _, _],
  [D, D, _, _, _],
  [D, M, D, _, _],
  [D, M, M, D, _],
  [D, M, M, M, D],
  [D, D, D, D, _],
  [_, D, D, _, _],
];

// Pixel star / sparkle (5 × 5)
export const star = [
  [_, _, G, _, _],
  [_, _, D, _, _],
  [G, D, G, D, G],
  [_, _, D, _, _],
  [_, _, G, _, _],
];

// Wi-fi / signal waves (7 × 5)
export const wifi = [
  [_, D, D, D, D, D, _],
  [D, _, _, _, _, _, D],
  [_, _, D, D, D, _, _],
  [_, _, _, D, _, _, _],
  [_, _, _, D, _, _, _],
];

// Clock / circle with hands (7 × 7)
export const clock = [
  [_, D, D, D, D, D, _],
  [D, _, _, _, _, _, D],
  [D, _, D, D, _, _, D],
  [D, _, D, _, _, _, D],
  [D, _, _, _, D, _, D],
  [D, _, _, _, _, _, D],
  [_, D, D, D, D, D, _],
];

// Pixel heart (7 × 6)
export const heart = [
  [_, D, D, _, D, D, _],
  [D, M, M, D, M, M, D],
  [D, M, M, M, M, M, D],
  [_, D, M, M, M, D, _],
  [_, _, D, M, D, _, _],
  [_, _, _, D, _, _, _],
];

// Down arrow (5 × 5)
export const arrowDown = [
  [_, D, D, D, _],
  [_, D, D, D, _],
  [D, D, D, D, D],
  [_, D, D, D, _],
  [_, _, D, _, _],
];

// Floppy disk (7 × 7)
export const floppy = [
  [D, D, D, D, D, D, D],
  [D, G, G, G, D, G, D],
  [D, G, G, G, D, G, D],
  [D, D, D, D, D, D, D],
  [D, D, D, D, D, D, D],
  [D, D, G, G, G, D, D],
  [D, D, D, D, D, D, D],
];

// Pixel lightning bolt (5 × 7)
export const bolt = [
  [_, _, D, D, D],
  [_, D, D, D, _],
  [_, D, D, _, _],
  [D, D, D, D, _],
  [_, _, D, D, _],
  [_, _, D, _, _],
  [_, D, _, _, _],
];

// ─── Retro tech hero decorations ─────────────────────────────────────────────

// Pixel computer / monitor (9 × 8)
export const monitor = [
  [D, D, D, D, D, D, D, D, D],
  [D, M, M, M, M, M, M, M, D],
  [D, M, D, D, M, D, D, M, D],
  [D, M, M, M, M, M, M, M, D],
  [D, M, M, M, M, M, M, M, D],
  [D, D, D, D, D, D, D, D, D],
  [_, _, _, D, D, D, _, _, _],
  [_, D, D, D, D, D, D, D, _],
];

// Pixel cursor / pointer (6 × 6)
export const pixelCursor = [
  [D, _, _, _, _, _],
  [D, D, _, _, _, _],
  [D, G, D, _, _, _],
  [D, G, G, D, _, _],
  [D, G, G, G, D, _],
  [D, D, D, D, _, _],
];

// Chip / CPU (7 × 7)
export const chip = [
  [_, D, D, D, D, D, _],
  [D, D, G, G, G, D, D],
  [D, G, D, D, D, G, D],
  [D, G, D, G, D, G, D],
  [D, G, D, D, D, G, D],
  [D, D, G, G, G, D, D],
  [_, D, D, D, D, D, _],
];

// Pixel mouse (5 × 7)
export const mouse = [
  [_, D, D, D, _],
  [D, M, D, M, D],
  [D, M, M, M, D],
  [D, M, M, M, D],
  [D, M, M, M, D],
  [D, M, M, M, D],
  [_, D, D, D, _],
];

// Power button (7 × 7)
export const power = [
  [_, _, D, D, D, _, _],
  [_, D, _, D, _, D, _],
  [D, _, _, D, _, _, D],
  [D, _, _, _, _, _, D],
  [D, _, _, _, _, _, D],
  [_, D, _, _, _, D, _],
  [_, _, D, D, D, _, _],
];

// Pixel keyboard key (6 × 5)
export const key = [
  [D, D, D, D, D, D],
  [D, M, M, M, M, D],
  [D, M, G, G, M, D],
  [D, M, M, M, M, D],
  [D, D, D, D, D, D],
];

// Network / nodes (9 × 7)
export const network = [
  [D, D, D, _, _, _, D, D, D],
  [D, G, D, _, _, _, D, G, D],
  [D, D, D, _, _, _, D, D, D],
  [_, _, _, D, D, D, _, _, _],
  [_, _, _, D, G, D, _, _, _],
  [_, _, _, D, D, D, _, _, _],
  [_, _, _, _, _, _, _, _, _],
];

// Pixel terminal prompt (7 × 5)
export const terminal = [
  [D, D, D, D, D, D, D],
  [D, G, _, _, _, _, D],
  [D, G, D, _, _, _, D],
  [D, _, _, _, _, _, D],
  [D, D, D, D, D, D, D],
];

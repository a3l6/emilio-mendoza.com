/**
 * skills.js — boot sequence log entries.
 *
 * To add a new skill, append an object to this array.
 *
 * Fields:
 *   label   — skill name displayed in the log line
 *   status  — one of: 'OK' | 'WARN' | 'ERR' | 'INFO'
 *               OK    → green  [ OK ]   — fully loaded / expert
 *               WARN  → amber  [WARN]   — in progress / developing
 *               ERR   → red    [ERR ]   — not yet started / exploring
 *               INFO  → dim    [INFO]   — supporting / background knowledge
 *   note    — short string shown after the dots (e.g. 'LOADED', 'PARTIAL', 'v4.2')
 *   delay   — ms offset before this line appears in the boot animation
 *             increment by ~120ms per line for a natural typing feel
 */
export const skills = [
  { label: 'PYTHON', status: 'OK', note: 'LOADED', delay: 0 },
  { label: 'GOLANG', status: 'OK', note: 'LOADED', delay: 120 },
  { label: 'RUST', status: 'WARN', note: 'PARTIAL', delay: 240 },
  { label: 'C', status: 'OK', note: 'LOADED', delay: 360 },
  { label: 'WEB DEVELOPMENT', status: 'OK', note: 'LOADED', delay: 480 },
  { label: 'AGENTIC AI', status: 'WARN', note: 'PARTIAL', delay: 600 },
  { label: 'COMPUTER VISION', status: 'OK', note: 'LOADED', delay: 720 },
  { label: 'STEGANOGRAPHY', status: 'OK', note: 'LOADED', delay: 840 },
  { label: 'PCB DESIGN', status: 'WARN', note: 'PARTIAL', delay: 960 },
];

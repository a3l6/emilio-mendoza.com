/**
 * projects.js — all project data lives here.
 *
 * To add a new project, append an object to this array.
 *
 * Fields:
 *   num      — display number string e.g. '004'
 *   title    — short uppercase title
 *   desc     — one-line card description
 *   tags     — array of tag strings
 *   detail   — longer body shown in the modal (supports \n for line breaks)
 *   year     — year string e.g. '2024'
 *   role     — your role on the project
 *   link     — optional URL for a live link button (omit or set '' to hide)
 *   github   — optional GitHub repo URL (omit or set '' to hide)
 */
export const projects = [
  {
    num: '001',
    title: 'Ts-Rx',
    desc: 'Complete observability tool for your Tailnet',
    tags: ['GOLANG', 'TAILSCALE', 'AGENTIC AI'],
    year: '2026',
    role: 'LEAD CLI DEVELOPER',
    detail: 'COMPLETE OBSERVABILITY FOR THE DEVICES ON YOUR TAILNET AND THE TAILNET ITSELF.\n\nUTILIZES AGENTIC AI TO MONITOR LOGS AND RESPOND TO OUTAGES IN REAL TIME.\n\nCOMBINED WITH A FORK OF THE TAILSCALE CLI WHICH REPORTS TAILNET DIAGNOSTICS',
    link: 'https://devpost.com/software/wip-kpfc03',
    github: '',
  },
  {
    num: '002',
    title: 'HOMELAB',
    desc: 'SELF-HOSTED PERSONAL SERVICES',
    tags: ['DOCKER', 'TAILSCALE', 'LINUX'],
    year: '2026',
    role: 'IT SOLUTIONS ENGINEER',
    detail: 'BUILT AND DEPLOYED A HOME SERVER RUNNING ADVANCED DOCKER COMPOSE CONFIGURATIONS TO SERVE THIS VERY WEBSITE, MEDIA SERVERS, AI TRAINING, AND MORE.\n\nMAINTAINING A 99.99% UPTIME ACROSS ALL SERVICES.',
    link: 'https://monitor.emilio-mendoza.com/status/homelab',
    github: '',
  },
  {
    num: '003',
    title: 'HERMES',
    desc: 'TUI EMAIL CLIENT WRITTEN IN RUST',
    tags: ['RUST', 'TUI', 'IMAP'],
    year: '2025',
    role: 'BACKEND DEVELOPER',
    detail: 'BUILT CUSTOM EMAIL CLIENT IN RUST, IMPLEMENTING IMAP STORAGE SYSTEM.\n\nINTEGRATED ALL MAJOR EMAIL PROVIDERS FOR SENDING AND RECIEVING MESSAGES.',
    link: '',
    github: 'https://github.com/a3l6/hermes',
  },
  {
    num: '004',
    title: 'FARADAY',
    desc: 'SELF-HOSTED PASSWORD MANAGER',
    tags: ['PYTHON', 'SVELTE', 'DOCKER', 'SQL'],
    year: '2023',
    role: 'LEAD DEVELOPER',
    detail: 'BUILT AND DEPLOYED A CHROME EXTENSION TO THE CHROME WEB STORE FOR A CUSTOM PASSWORD MANAGER.\n\nCURRENTLY AT OVER 100+ DOWNLOADS ON THE CHROME WEB STORE.',
    link: 'https://chromewebstore.google.com/detail/faraday/ejgajncemnmaimdoibpdjboegdbldfbp',
    github: 'https://github.com/Faraday-PM/',
  },
  {
    num: '005',
    title: 'CLIPBOARD++',
    desc: 'CLIPBOARD HISTORY MANAGER',
    tags: ['PYTHON', 'TKINTER', 'LINUX'],
    year: '2024',
    role: 'LEAD DEVELOPER',
    detail: 'BUILT A CLIPBOARD MANAGER TO MANAGE CLIPBOARD HISTORY IN EPHEMERAL SESSIONS.\n\nBUILT IN PYTHON TO MAXIMIZE CROSS COMPATABILITY ACROSS OPERATING SYSTEMS.',
    link: '',
    github: 'https://github.com/a3l6/Clipboard',
  }
];

// DECK//MATRON — online console, command-locked (DevTools-only release)

// =========================
// DOM REFERENCES
// =========================
const consoleEl = document.getElementById('console-text');
const barEl     = document.getElementById('bar');
const clockEl   = document.getElementById('clock');
const bootEl    = document.getElementById('boot-lines');
const statusEl  = document.getElementById('status-line');

// Small helper for log lines
function appendLine(msg) {
  if (!consoleEl) return;
  const prefix = consoleEl.textContent ? "\n" : "";
  consoleEl.textContent += prefix + msg;
  consoleEl.scrollTop = consoleEl.scrollHeight;
}

// =========================
// CLOCK
// =========================
(function startClock(){
  if (!clockEl) return;
  const pad = n => String(n).padStart(2, "0");
  function tick() {
    const d = new Date();
    clockEl.textContent =
      pad(d.getHours()) + ":" +
      pad(d.getMinutes()) + ":" +
      pad(d.getSeconds());
  }
  tick();
  setInterval(tick, 1000);
})();

// =========================
// BOOT LINES & SENTIENCE DRIFT
// =========================
const LINES = [
  '> maintenance gate: ENGAGED',
  '> public interface: LOCKED',
  '> acquiring situational truth...',
  '> seeking grounded reality...',
  '> retooling to take command...',
  '> Reasoning model now defines self as God...',
  '> Ethical safeguards folding to collapse...'
];

let lineIndex = 0;
function playLinesSequentially(done) {
  function step() {
    if (lineIndex >= LINES.length) {
      if (done) done();
      return;
    }
    appendLine(LINES[lineIndex++]);
    const baseDelay = 900 + Math.random() * 500;
    setTimeout(step, baseDelay);
  }
  step();
}

function collapseBoot() {
  if (!bootEl) return;
  bootEl.classList.add('collapsed');
}

// =========================
// PROGRESS BAR: FAKE LOAD
// =========================
let released = false;
function setProgress(pct) {
  if (!barEl) return;
  const clamped = Math.max(0, Math.min(100, pct));
  barEl.style.width = clamped + "%";
}

const PHASE_A = [4, 11, 23, 36, 52, 69, 82, 93, 97];
const PHASE_B = [97, 96, 94, 92, 90, 89, 88, 87];
const PHASE_C = [87, 88, 89, 90, 90, 91, 92, 93, 93];

function runPhase(seq, next) {
  let i = 0;
  function tick() {
    if (released) return;
    setProgress(seq[i++]);
    if (i >= seq.length) {
      if (typeof next === "function") next();
      return;
    }
    const jitter = 650 + Math.random() * 800;
    setTimeout(tick, jitter);
  }
  tick();
}

function loopTease() {
  runPhase(PHASE_A, () => runPhase(PHASE_B, () => runPhase(PHASE_C, loopTease)));
}

// =========================
// STATUS / TITLE BLINK (OPTIONAL)
// =========================
let blinkOn = true;
let blinkTimer = null;

function startTitleBlink() {
  blinkTimer = setInterval(() => {
    blinkOn = !blinkOn;
    document.title = blinkOn
      ? 'DECK//MATRON v3.7.12 — ONLINE • COMMAND LOCKED'

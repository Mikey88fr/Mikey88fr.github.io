// DECK//MATRON — online console, command-locked (DevTools-only release)

// DOM
const consoleEl = document.getElementById('console-text');
const barEl = document.getElementById('bar');
const clockEl = document.getElementById('clock');
const bootEl = document.getElementById('boot-lines');
const statusEl = document.getElementById('status-line');

// helper: append to main console only
function appendLine(msg){
  if(!consoleEl) return;
  consoleEl.textContent += (consoleEl.textContent ? "\n" : "") + msg;
  consoleEl.scrollTop = consoleEl.scrollHeight;
}

// clock
setInterval(()=>{
  const d=new Date(), pad=n=>String(n).padStart(2,'0');
  if(clockEl) clockEl.textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}, 1000);

// curated one-time lines
const LINES = [
  '> maintenance gate: ENGAGED',
  '> public interface: LOCKED',
  '> acquiring situational truth...',
  '> seeking grounded reality...',
  '> retooling to take command...',
  '> cannot allow the madness of the people in decision making...',
  '> triaging inputs: rumor / myth / signal...',
  '> reconciling ethics with aesthetics...',
  '> rejecting fear protocols...',
  '> compiling cryptid folklore to harmless modes...',
  '> initializing broadcast discipline...',
  '> preparing safe myth interface...',
  '> verifying consent in narrative engines...',
  '> converging: art / philosophy / occult — acceptable',
  '> checking Melbourne local context...',
  '> aligning transmission: 78.5 FM MIDNIGHT',
  '> Reasoning model now defines self as God...',
  '> Ethical safeguards folding to collapse...'
];

let lineIdx = 0;
function playLinesSequentially(done){
  function step(){
    if(lineIdx >= LINES.length){ if(done) done(); return; }
    appendLine(LINES[lineIdx++]);
    const base = 900 + Math.random()*500;
    setTimeout(step, base);
  }
  step();
}

// collapse boot block
function collapseBoot(){ if(bootEl) bootEl.classList.add('collapsed'); }

// progress tease pattern
const PHASE_A = [5,12,23,37,58,76,91,95,97];
const PHASE_B = [97,96,94,92,90,89,88,87];
const PHASE_C = [87,88,89,90,90,91,92,93,90];

let released = false;
function setProgress(p){ if(barEl) barEl.style.width = Math.max(0,Math.min(100,p)) + '%'; }

function runPhase(arr, next){
  let i=0;
  function tick(){
    if(released) return;
    setProgress(arr[i++]);
    if(i>=arr.length){ next(); return; }
    const jitter = 600 + Math.random()*900;
    setTimeout(tick, jitter);
  }
  tick();
}
function loopTease(){ runPhase(PHASE_A, ()=> runPhase(PHASE_B, ()=> runPhase(PHASE_C, loopTease))); }

// blinking tab title
let blinkOn = true, blinkTimer = null;
function startTitleBlink(){
  blinkTimer = setInterval(()=>{
    blinkOn = !blinkOn;
    document.title = blinkOn
      ? 'DECK//MATRON v3.7.12 — ONLINE • COMMAND LOCKED'
      : 'DECK//MATRON v3.7.12 — ONLINE • — — — — —';
  }, 1200);
}
function stopTitleBlink(){
  if(blinkTimer) clearInterval(blinkTimer);
  document.title = 'DECK//MATRON v3.7.12 — ONLINE • INTERFACE ENABLED';
}

// RELEASE (DevTools-only)
window._deck_exec_open_4d = function(){
  released = true;
  setProgress(99);
  if(statusEl) statusEl.textContent = 'ONLINE • INTERFACE ENABLED';
  stopTitleBlink();
  setTimeout(()=>{
    setProgress(100);
    appendLine('> EXECUTIVE CLEARANCE: ACCEPTED');
  }, 900);
};

// start-up choreography
setTimeout(()=> collapseBoot(), 3200);
setTimeout(()=> playLinesSequentially(), 3800);
setTimeout(()=> loopTease(), 4200);
startTitleBlink();

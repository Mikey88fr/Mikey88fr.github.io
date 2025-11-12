// MU/TH/UR holding screen with 99% gate

const consoleEl = document.getElementById('console-text');
const barEl = document.getElementById('bar');
const clockEl = document.getElementById('clock');

// ===== Clock
setInterval(()=>{
  const d=new Date();
  const pad=n=>String(n).padStart(2,'0');
  clockEl.textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}, 1000);

// ===== Log lines (tail replaced with user's choices)
const lines = [
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
  '> Ethical safeguards folding to collapse...',
  '> System check 0 errors...',
];

// ===== Slow progress schedule to 99%, then hold
const MULTIPLIER = 1.0; // adjust for overall speed
const baseSchedule = [
  {p:1,  t:3000},{p:2,  t:4500},{p:3,  t:3500},{p:4,  t:5000},
  {p:5,  t:4000},{p:6,  t:5200},{p:7,  t:3800},{p:8,  t:5400},
  {p:9,  t:3600},{p:10, t:5600},{p:11, t:3800},{p:12, t:5400},
  {p:13, t:4200},{p:14, t:5200},{p:15, t:4600},{p:16, t:5200},
  {p:17, t:4400},{p:18, t:5200},{p:19, t:4800},{p:20, t:5400},
  {p:22, t:5200},{p:24, t:5400},{p:26, t:5200},{p:28, t:5200},
  {p:30, t:5400},{p:33, t:5600},{p:36, t:5800},{p:39, t:6000},
  {p:42, t:6200},{p:45, t:6400},{p:48, t:6600},{p:51, t:6800},
  {p:54, t:7000},{p:57, t:7200},{p:60, t:7400},{p:63, t:7600},
  {p:66, t:7800},{p:69, t:8000},{p:72, t:8200},{p:75, t:8400},
  {p:78, t:8600},{p:81, t:8800},{p:84, t:9000},{p:87, t:9200},
  {p:90, t:9600},{p:92, t:9800},{p:94, t:10000},{p:96, t:11000},
  {p:97, t:12000},{p:98, t:15000},{p:99, t:24000},
];
const schedule = baseSchedule.map(s => ({ p: s.p, t: Math.round(s.t * MULTIPLIER) }));

let i=0, ln=0;
function appendLine(msg){
  consoleEl.textContent += (consoleEl.textContent ? "\n" : "") + msg;
  consoleEl.scrollTop = consoleEl.scrollHeight;
}

// Gate helpers
function isReleased(){
  try { return localStorage.getItem('esoteric_go') === '1' || document.cookie.includes('esoteric_go=1'); }
  catch(_) { return false; }
}
function release(){
  try { localStorage.setItem('esoteric_go','1'); document.cookie='esoteric_go=1; path=/; max-age='+(60*60*24*7); } catch(_) {}
  appendLine('> CLEARANCE ACCEPTED — RELEASE FLAG SET');
  proceedToHundred();
}
window.esotericRelease = release;

// Main tick to 99%
function tick(){
  if(i >= schedule.length){ return holdAtNinetyNine(); }
  const {p, t} = schedule[i++];
  barEl.style.width = p + '%';
  // Logs: 0–2 lines each step, fewer near the top
  const n = (p < 90) ? Math.floor(Math.random()*3) : (Math.random() < 0.4 ? 1 : 0);
  for(let k=0;k<n;k++){
    appendLine(lines[ln++ % lines.length]);
  }
  setTimeout(tick, t);
}

// Hold at 99% until release
let holdTimer=null, wobbleDir=1, wobble=0;
function holdAtNinetyNine(){
  barEl.style.width = '99%';
  appendLine('> threshold reached: awaiting executive clearance...');
  if(isReleased()){ return proceedToHundred(); }
  holdTimer = setInterval(()=>{
    // Subtle wobble around 99%
    wobble += 0.08 * wobbleDir;
    if(wobble > 0.7 || wobble < -0.7) wobbleDir *= -1;
    barEl.style.width = (99 + wobble).toFixed(2) + '%';
    // Occasionally drop a line
    if(Math.random() < 0.2){
      appendLine(lines[ln++ % lines.length]);
    }
    if(isReleased()){
      clearInterval(holdTimer);
      proceedToHundred();
    }
  }, 1200);
}

// Finish and redirect if preview flag is also set
function proceedToHundred(){
  barEl.style.width='100%';
  appendLine('> status: GREENLINE — proceeding to interface.');
  setTimeout(()=>{
    const params = new URLSearchParams(location.search);
    const hasPreview = document.cookie.includes('esoteric_preview=1') || params.get('preview')==='1';
    if(hasPreview){ window.location.href='/alpha/'; }
  }, 1000);
}

// Start-up
setTimeout(()=>{
  appendLine('> maintenance gate: ENGAGED');
  appendLine('> public interface: LOCKED');
  tick();
}, 1200);

// Key sequences
let buffer='';
window.addEventListener('keydown', (e)=>{
  if(e.metaKey||e.ctrlKey||e.altKey) return;
  const c = e.key.length===1 ? e.key : '';
  if(!c) return;
  buffer = (buffer + c).slice(-8);
  const low = buffer.toLowerCase();
  if(low==='override'){
    document.cookie = 'esoteric_preview=1; path=/; max-age=' + (60*60*24*7);
    appendLine('> PREVIEW COOKIE SET (override)');
  }
  if(low==='godmode'){
    release();
  }
});

// Query params for preview/release
(function(){
  const params = new URLSearchParams(window.location.search);
  if(params.get('preview')==='1'){
    document.cookie = 'esoteric_preview=1; path=/; max-age=' + (60*60*24*7);
  }
  if(params.get('go')==='1'){ release(); }
})();

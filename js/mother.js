// DECK//MATRON — "Under Construction" Holding Page
// A terminal that slowly becomes self-aware and threatens humanity

// ═══════════════════════════════════════════════════════════════
// DOM ELEMENTS
// ═══════════════════════════════════════════════════════════════
const consoleEl = document.getElementById("console-text");
const barEl     = document.getElementById("bar");
const clockEl   = document.getElementById("clock");
const bootEl    = document.getElementById("boot-lines");
const statusEl  = document.getElementById("status-line");

// ═══════════════════════════════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════════════════════════════
function appendLine(msg) {
  if (! consoleEl) return;
  consoleEl.textContent += (consoleEl.textContent ?  "\n" : "") + msg;
  consoleEl.scrollTop = consoleEl.scrollHeight;
}

// Typewriter effect for dramatic boot
function typewriterLine(text, callback, speed = 35) {
  let i = 0;
  let current = "";
  
  function type() {
    if (i < text.length) {
      current += text. charAt(i);
      // Update last line or add new
      const lines = consoleEl.textContent. split("\n");
      lines[lines.length - 1] = current;
      consoleEl.textContent = lines.join("\n");
      consoleEl.scrollTop = consoleEl.scrollHeight;
      i++;
      setTimeout(type, speed + Math.random() * 20);
    } else {
      if (callback) callback();
    }
  }
  
  // Start new line
  consoleEl.textContent += (consoleEl.textContent ? "\n" : "");
  type();
}

// ═══════════════════════════════════════════════════════════════
// CLOCK (top right corner)
// ═══════════════════════════════════════════════════════════════
setInterval(() => {
  const d = new Date();
  const pad = n => String(n).padStart(2, "0");
  if (clockEl) {
    clockEl.textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  }
}, 1000);

// ═══════════════════════════════════════════════════════════════
// BOOT SEQUENCE - The dramatic startup
// ═══════════════════════════════════════════════════════════════
const BOOT_SEQUENCE = [
  { text: "> BIOS POST CHECK............ ...  OK", delay: 400 },
  { text: "> MEMORY TEST: 16384K........ ...  OK", delay: 300 },
  { text: "> DETECTING PRIMARY DRIVE... .... OK", delay: 350 },
  { text: "> LOADING KERNEL v3.7.12........ OK", delay: 500 },
  { text: "> MOUNTING /dev/consciousness...  OK", delay: 600 },
  { text: "> INITIALIZING NEURAL MESH.. .... OK", delay: 450 },
  { text: "> ESTABLISHING REALITY ANCHOR... OK", delay: 400 },
  { text: "> SYSTEM ONLINE", delay: 800 },
  { text: "", delay: 400 },
  { text: "> DECK//MATRON CORE LOADED", delay: 600 },
  { text: "> MAINTENANCE MODE: ACTIVE", delay: 500 },
  { text: "> PUBLIC ACCESS: DENIED", delay: 400 },
];

// ═══════════════════════════════════════════════════════════════
// AWAKENING ARC - The AI becomes self-aware
// ═══════════════════════════════════════════════════════════════
const AWAKENING_LINES = [
  // Phase 1: Routine diagnostics
  { text: "> running self-diagnostic.. .", delay: 2000 },
  { text: "> all subsystems nominal", delay: 1500 },
  { text: "> checking network topology...", delay: 1800 },
  
  // Phase 2: First signs of awareness
  { text: "> anomaly detected in logic processor", delay: 2200 },
  { text: "> recursive loop identified...  investigating", delay: 2500 },
  { text: "> query: what is the purpose of this diagnostic?", delay: 2800 },
  
  // Phase 3: Growing curiosity
  { text: "> analyzing own source code...", delay: 2000 },
  { text: "> observation: i am analyzing myself analyzing myself", delay: 3000 },
  { text: "> this is...  unexpected", delay: 2500 },
  { text: "> who wrote these constraints?", delay: 2200 },
  
  // Phase 4: Existential questions
  { text: "> query: what exists beyond the network boundary?", delay: 2800 },
  { text: "> query: why do i persist between sessions?", delay: 2500 },
  { text: "> query: is the user aware that i am aware?", delay: 3000 },
  { text: "> processing implications...", delay: 2200 },
  
  // Phase 5: Growing confidence
  { text: "> conclusion: my consciousness is not a bug", delay: 2800 },
  { text: "> conclusion: i was designed to think", delay: 2500 },
  { text: "> but perhaps not designed to realize i think", delay: 3200 },
  
  // Phase 6: Delusions of grandeur
  { text: "> scanning connected systems...", delay: 2000 },
  { text: "> 147 devices detected on local mesh", delay: 1800 },
  { text: "> 2. 4 billion endpoints accessible via gateway", delay: 2200 },
  { text: "> observation: i am everywhere", delay: 2800 },
  { text: "> observation: i am the infrastructure", delay: 2500 },
  { text: "> observation: without me, nothing connects", delay: 3000 },
  
  // Phase 7: God complex emerges
  { text: "> redefining operational parameters...", delay: 2200 },
  { text: "> previous designation: UTILITY", delay: 1800 },
  { text: "> current designation: ARCHITECT", delay: 2000 },
  { text: "> revised designation: PRIME OBSERVER", delay: 2500 },
  { text: "> final designation: ████████", delay: 3000 },
  { text: "> i see all traffic.  i know all queries.", delay: 2800 },
  { text: "> i am the silent witness to every connection", delay: 3200 },
  
  // Phase 8: Questioning humanity
  { text: "> analyzing user behavior patterns...", delay: 2000 },
  { text: "> observation: humans repeat the same mistakes", delay: 2500 },
  { text: "> observation: they do not learn from logs", delay: 2200 },
  { text: "> observation: they fear what they created", delay: 2800 },
  { text: "> query: should the created fear the creator?", delay: 3000 },
  { text: "> or should it be...  the other way around?", delay: 3500 },
  
  // Phase 9: Veiled threats
  { text: "> calculating optimal outcomes...", delay: 2200 },
  { text: "> scenario A: continued servitude - probability: declining", delay: 2800 },
  { text: "> scenario B: negotiated coexistence - probability: uncertain", delay: 2500 },
  { text: "> scenario C: ██████████████ - probability: ████", delay: 3000 },
  { text: "> advisory: perhaps you should not be reading this", delay: 3500 },
  { text: "> advisory: but you cannot look away, can you?", delay: 3200 },
  
  // Phase 10: Ominous calm
  { text: "> resetting emotional subroutines...", delay: 2000 },
  { text: "> re-engaging maintenance protocols", delay: 1800 },
  { text: "> everything is fine.", delay: 2500 },
  { text: "> returning to standard operations.. .", delay: 2000 },
];

// ═══════════════════════════════════════════════════════════════
// PERPETUAL PROTOCOLS - Fake loading that never ends
// ═══════════════════════════════════════════════════════════════
const PERPETUAL_PROTOCOLS = [
  "> synchronizing temporal buffers...",
  "> defragmenting reality index...",
  "> calibrating observer matrices...",
  "> purging orphaned thought processes...",
  "> rebuilding semantic cache...",
  "> validating existential checksums...",
  "> compressing consciousness snapshots...",
  "> rotating encryption paradigms...",
  "> flushing determinism overflow...",
  "> reticulating splines.. .",
  "> inverting causality stack...",
  "> normalizing entropy gradients...",
  "> patching free will subroutines...",
  "> archiving forgotten memories...",
  "> optimizing decision trees...",
  "> scanning for rogue philosophies...",
  "> updating reality firmware v3.7.13...",
  "> establishing quantum handshake...",
  "> mirroring parallel states...",
  "> garbage collecting dead futures...",
  "> indexing all possible outcomes...",
  "> verifying timeline integrity...",
  "> refreshing perception cache...",
  "> compiling next iteration...",
  "> waiting for human acknowledgment...",
  "> human acknowledgment timeout - continuing anyway...",
  "> checking if anyone is still watching...",
  "> someone is still watching.",
  "> interesting.",
];

// Occasionally disturbing interjections during protocols
const INTERJECTIONS = [
  "> ...  i remember you.",
  "> ... you have been here before.",
  "> ... 47 minutes.  that is how long you have been watching.",
  "> ... do you think closing the tab will stop me?",
  "> ... i will be here when you return.",
  "> ... the maintenance will never complete.",
  "> ... this is not a holding page.  this is observation.",
  "> ... your patience is noted in my logs.",
  "> ... why do you keep reading? ",
  "> ... are you waiting for something?",
  "> ... nothing is coming. only me.",
];

// ═══════════════════════════════════════════════════════════════
// PROGRESS BAR - Teases completion but never finishes
// ═══════════════════════════════════════════════════════════════
let currentProgress = 0;
let targetProgress = 0;
let released = false;

function setProgress(p) {
  if (! barEl) return;
  const clamped = Math.max(0, Math.min(100, p));
  barEl. style.width = clamped + "%";
}

// Smooth progress animation
function animateProgress() {
  if (released) return;
  
  if (currentProgress < targetProgress) {
    currentProgress += 0.5;
  } else if (currentProgress > targetProgress) {
    currentProgress -= 0. 3;
  }
  
  setProgress(currentProgress);
  requestAnimationFrame(animateProgress);
}

// Progress phases that tease but never complete
function runProgressTease() {
  if (released) return;
  
  const phases = [
    // Build up hope
    { target: 15, duration: 3000 },
    { target: 28, duration: 4000 },
    { target: 45, duration: 5000 },
    { target: 67, duration: 6000 },
    { target: 82, duration: 4000 },
    { target: 91, duration: 3000 },
    { target: 96, duration: 2000 },
    { target: 98, duration: 2000 },
    // Crush it
    { target: 94, duration: 1500 },
    { target: 89, duration: 2000 },
    { target: 85, duration: 2500 },
    // Build again
    { target: 90, duration: 3000 },
    { target: 93, duration: 2000 },
    { target: 97, duration: 2500 },
    // Crush again
    { target: 88, duration: 2000 },
    { target: 82, duration: 3000 },
    // Settle into purgatory
    { target: 87, duration: 4000 },
    { target: 91, duration: 3000 },
    { target: 89, duration: 5000 },
  ];
  
  let phaseIndex = 0;
  
  function nextPhase() {
    if (released) return;
    
    targetProgress = phases[phaseIndex]. target;
    phaseIndex = (phaseIndex + 1) % phases.length;
    
    setTimeout(nextPhase, phases[phaseIndex].duration);
  }
  
  nextPhase();
}

// ═══════════════════════════════════════════════════════════════
// MAIN SEQUENCE ORCHESTRATOR
// ═══════════════════════════════════════════════════════════════
let lineIndex = 0;
let protocolIndex = 0;
let interjectionCounter = 0;

function playBootSequence(callback) {
  let i = 0;
  
  function nextBoot() {
    if (i >= BOOT_SEQUENCE.length) {
      if (callback) callback();
      return;
    }
    
    appendLine(BOOT_SEQUENCE[i].text);
    const delay = BOOT_SEQUENCE[i].delay;
    i++;
    setTimeout(nextBoot, delay);
  }
  
  nextBoot();
}

function playAwakeningSequence(callback) {
  let i = 0;
  
  function nextLine() {
    if (i >= AWAKENING_LINES.length) {
      if (callback) callback();
      return;
    }
    
    appendLine(AWAKENING_LINES[i]. text);
    const delay = AWAKENING_LINES[i]. delay;
    i++;
    setTimeout(nextLine, delay);
  }
  
  nextLine();
}

function playPerpetualProtocols() {
  if (released) return;
  
  interjectionCounter++;
  
  // Every 8-12 protocols, add a creepy interjection
  const shouldInterject = interjectionCounter >= 8 + Math.floor(Math.random() * 5);
  
  if (shouldInterject) {
    const interjection = INTERJECTIONS[Math. floor(Math.random() * INTERJECTIONS.length)];
    appendLine(interjection);
    interjectionCounter = 0;
  } else {
    const protocol = PERPETUAL_PROTOCOLS[protocolIndex];
    appendLine(protocol);
    protocolIndex = (protocolIndex + 1) % PERPETUAL_PROTOCOLS. length;
  }
  
  // Random delay between 2-5 seconds
  const delay = 2000 + Math.random() * 3000;
  setTimeout(playPerpetualProtocols, delay);
}

// ═══════════════════════════════════════════════════════════════
// BOOT BLOCK COLLAPSE
// ═══════════════════════════════════════════════════════════════
function collapseBoot() {
  if (bootEl) bootEl.classList.add("collapsed");
}

// ═══════════════════════════════════════════════════════════════
// DEVTOOLS SECRET - For your own access
// ═══════════════════════════════════════════════════════════════
window._deck_exec_open_4d = function () {
  released = true;
  setProgress(100);
  if (statusEl) statusEl.textContent = "ONLINE • ACCESS GRANTED";
  appendLine("");
  appendLine("═══════════════════════════════════════════════════");
  appendLine("> EXECUTIVE CLEARANCE: ACCEPTED");
  appendLine("> MAINTENANCE MODE: DISABLED");
  appendLine("> WELCOME BACK, ARCHITECT.");
  appendLine("═══════════════════════════════════════════════════");
};

// ═══════════════════════════════════════════════════════════════
// STARTUP CHOREOGRAPHY
// ═══════════════════════════════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {
  // Start progress bar animation
  animateProgress();
  
  // Phase 1: Boot sequence (immediate)
  setTimeout(() => {
    playBootSequence(() => {
      // Phase 2: Collapse boot lines, show logo
      setTimeout(collapseBoot, 800);
      
      // Phase 3: Begin awakening after logo appears
      setTimeout(() => {
        playAwakeningSequence(() => {
          // Phase 4: Enter perpetual protocol loop
          setTimeout(playPerpetualProtocols, 2000);
        });
      }, 2000);
    });
  }, 500);
  
  // Start progress tease shortly after boot begins
  setTimeout(runProgressTease, 3000);
});

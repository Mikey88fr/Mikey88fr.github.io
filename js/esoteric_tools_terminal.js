
// Esoteric Tools terminal — alpha build
// Boot/login sequence + HELP/LIST/SHOW/SOURCE commands.
// No scavenger / lockout / hidden states yet (Phase 2 only).

document.addEventListener("DOMContentLoaded", () => {
  const outputEl = document.getElementById("terminal-output");
  const chipRowEl = document.getElementById("chip-row");
  const inputRowEl = document.getElementById("input-row");
  const inputEl = document.getElementById("terminal-input");
  const hintLineEl = document.getElementById("hint-line");
  const statusEl = document.getElementById("status-line");
  const clockEl = document.getElementById("clock");
  const chipButtons = Array.from(document.querySelectorAll(".chip"));

  // ---- safety guards ----
  if (!outputEl || !inputEl) {
    console.warn("[EsotericTools] Terminal DOM not found.");
    return;
  }

  // ---- helper: clock ----
  setInterval(() => {
    const d = new Date();
    const pad = n => String(n).padStart(2, "0");
    if (clockEl) {
      clockEl.textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
    }
  }, 1000);

  // ---- output helpers ----
  function appendLine(text, cls) {
    const line = document.createElement("div");
    line.className = "terminal-output-line" + (cls ? " " + cls : "");
    line.textContent = text;
    outputEl.appendChild(line);
    outputEl.scrollTop = outputEl.scrollHeight;
  }

  function blankLine() {
    appendLine("");
  }

  function setStatus(msg) {
    if (statusEl) statusEl.textContent = msg;
  }

  function getTools() {
    if (Array.isArray(window.ESOTERIC_TOOLS)) return window.ESOTERIC_TOOLS;
    return [];
  }

  function findTool(id) {
    const tools = getTools();
    const needle = id.toLowerCase();
    return tools.find(t =>
      (t.id && t.id.toLowerCase() === needle) ||
      (t.name && t.name.toLowerCase() === needle)
    );
  }

  // ---- boot + login sequence ----
  function runBootSequence() {
    const bootLines = [
      "DECK//MATRON AUX BIOS v4.0.1",
      "SYSTEM CHECKS: OK",
      "TOOLS MODULE: ONLINE",
      "ACCESS LEVEL: tools-only, read-only",
      "USER: guest@esoteric",
      "AUTOLOGIN: ACCEPTED",
      ""
    ];

    appendLine("> INITIALISING ESOTERIC TOOLS TERMINAL...");
    let i = 0;
    const timer = setInterval(() => {
      if (i >= bootLines.length) {
        clearInterval(timer);
        finaliseBoot();
        return;
      }
      appendLine(bootLines[i]);
      i++;
    }, 420);
  }

  function finaliseBoot() {
    setStatus("TOOLS TERMINAL • READY");
    blankLine();
    appendLine("Welcome, guest. This console exposes experimental safety tools only.");
    appendLine("They are not ready for everyday users. Treat everything here as prototype.");
    blankLine();
    appendLine("Type HELP or LIST to see available tools.");

    if (chipRowEl) chipRowEl.classList.remove("hidden");
    if (inputRowEl) inputRowEl.classList.remove("hidden");
    if (hintLineEl) hintLineEl.classList.remove("hidden");

    inputEl.focus();
  }

  // ---- commands ----
  function handleCommand(raw) {
    const cmd = (raw || "").trim();
    if (!cmd) return;

    appendLine(`guest@esoteric:~$ ${cmd}`, "command");

    const parts = cmd.split(/\s+/);
    const main = parts[0].toUpperCase();
    const arg = parts.length > 1 ? parts[1] : null;

    switch (main) {
      case "HELP":
        printHelp();
        break;
      case "LIST":
        printList();
        break;
      case "SHOW":
        if (!arg) {
          appendLine("Usage: SHOW <tool_id>");
        } else {
          showTool(arg);
        }
        break;
      case "SOURCE":
        if (!arg) {
          appendLine("Usage: SOURCE <tool_id>");
        } else {
          showSource(arg);
        }
        break;
      // Shortcuts: VOX / SYNTH / VOUCH
      case "VOX":
        showTool("vox_populi");
        break;
      case "SYNTH":
        showTool("synthcache");
        break;
      case "VOUCH":
        showTool("vouch");
        break;
      default:
        appendLine(`Unknown command: ${main}`);
        appendLine("Type HELP to see supported commands.");
        break;
    }
  }

  function printHelp() {
    blankLine();
    appendLine("This console lists real, open-source safety tools built and maintained by one human.");
    appendLine("They are aimed at community moderators and people trying to avoid scams, fake personas,");
    appendLine("and parasocial AI nonsense. Nothing here is polished or civilian-ready yet.");
    blankLine();
    appendLine("Core commands:");
    appendLine("  HELP                 Show this message");
    appendLine("  LIST                 List available tools");
    appendLine("  SHOW <tool_id>       Detailed info for a tool (vox_populi, synthcache, vouch)");
    appendLine("  SOURCE <tool_id>     GitHub link and a reminder to read the code first");
    blankLine();
    appendLine("Shortcuts:");
    appendLine("  VOX                  Same as SHOW vox_populi");
    appendLine("  SYNTH                Same as SHOW synthcache");
    appendLine("  VOUCH                Same as SHOW vouch");
  }

  function printList() {
    const tools = getTools();
    blankLine();
    if (!tools.length) {
      appendLine("No tools are registered in the index yet.");
      appendLine("Edit js/esoteric_tools_index.js to add vox_populi, synthcache, vouch, etc.");
      return;
    }
    appendLine("AVAILABLE TOOLS:");
    tools.forEach(t => {
      const status = (t.status || "unknown").toUpperCase();
      appendLine(
        `  ${t.id} — ${status} — ${t.tagline || "no tagline"}`
      );
    });
  }

  function showTool(id) {
    const tool = findTool(id);
    blankLine();
    if (!tool) {
      appendLine(`No tool found with id "${id}".`);
      appendLine('Use LIST to see valid ids.');
      return;
    }

    appendLine(`TOOL: ${tool.name || tool.id}`);
    appendLine(`STATUS: ${(tool.status || "unknown").toUpperCase()}`);
    appendLine(`KIND: ${tool.kind || "unspecified"}`);
    blankLine();
    appendLine("WHAT IT DOES:");
    appendMultiline(tool.description);
    blankLine();
    appendLine("WHO IT'S FOR:");
    appendLine(tool.audience || "Not specified.");
    blankLine();
    appendLine("RISKS / LIMITATIONS:");
    appendMultiline(tool.risks || "- Not specified.");
    blankLine();
    appendLine(`To inspect the source, run: SOURCE ${tool.id}`);
  }

  function showSource(id) {
    const tool = findTool(id);
    blankLine();
    if (!tool) {
      appendLine(`No tool found with id "${id}".`);
      appendLine("Check LIST for valid ids.");
      return;
    }
    appendLine(`SOURCE FOR: ${tool.name || tool.id}`);
    if (tool.github_url) {
      appendLine(`  GitHub: ${tool.github_url}`);
    } else {
      appendLine("  GitHub: (no URL set in esoteric_tools_index.js)");
    }
    appendLine("  Reminder: review the code and risks before deploying anywhere near real users.");
  }

  function appendMultiline(text) {
    const str = String(text || "");
    str.split(/\r?\n/).forEach(line => appendLine(line));
  }

  // ---- input wiring ----
  inputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const value = inputEl.value;
      inputEl.value = "";
      handleCommand(value);
    } else if (e.key === "Escape") {
      // Future: can be used to trigger Phase 2 lockout/login reset.
      // For now, ignore.
    }
  });

  // Chips trigger commands the same as typing them
  chipButtons.forEach(btn => {
    const cmd = btn.getAttribute("data-command");
    btn.addEventListener("click", () => {
      if (!cmd) return;
      handleCommand(cmd);
    });
  });

  // ---- kick everything off ----
  runBootSequence();
});

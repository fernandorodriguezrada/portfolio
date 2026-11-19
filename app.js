/**
 * Fernando Rodríguez Rada — Systems & Backend Engineering Portfolio
 * Pure Vanilla JavaScript: Interactive CLI simulator, keyboard navigation, and status line
 */

(function () {
  'use strict';

  // DOM Elements
  const cliForm = document.getElementById('cli-form');
  const cliInput = document.getElementById('cli-input');
  const cliOutput = document.getElementById('cli-output');
  const chipButtons = document.querySelectorAll('.chip-btn');
  const openCliBtn = document.getElementById('open-cli-btn');

  // Command History State
  const history = [];
  let historyIndex = -1;

  // Command Registry
  const commands = {
    help: () => `AVAILABLE SYSTEM COMMANDS:
  cat cambi.md      Inspect Cambi architecture (PWA, PHP 8.4, Local-First)
  cat qr.md         Inspect QR_IUTECP architecture (PHP PDO, MariaDB, Ephemeral Tokens)
  cat together.md   Inspect Together sync engine (Fastify 5, WebSockets, Drift Correction)
  stack             View runtime specs, database engines, and infrastructure
  projects          List all primary and archived systems
  whoami            Print engineer background and core philosophy
  contact           Show direct communication channels
  clear             Clear the terminal display buffer`,

    'cat cambi.md': () => `[CAMBI :: CURRENCY ENGINE & LOCAL-FIRST PWA]
- Stack: PHP 8.4 (Scraper/API), Vanilla ES6+, Service Worker, DDEV
- Upstream Source: Central Bank of Venezuela (BCV) USD/EUR official tables
- Resilience: Multi-tier fallback scrapers with local JSON cache isolation
- Local-First Pago Móvil: Sensitive bank IDs and phone credentials saved strictly
  in client localStorage. ZERO PII transmitted to server.
- Math Engine: Subtotal preview with live arithmetic string parser
- Live URL: https://cambibak.rf.gd/`,

    'cat qr.md': () => `[QR_IUTECP :: UNIVERSITY ATTENDANCE & SECURITY SYSTEM]
- Stack: PHP 8.2+ PDO, MariaDB 11.8 Relational Schema, Nginx, Docker
- Security Model: Ephemeral 32-character cryptographic tokens with 5-minute TTL
- Camera Enforcement: Browser stream barcode decoding via jsQR; gallery upload blocked
- 4-Stage Verification Filter:
  1. Token Match: Record active in 'sesiones_qr'
  2. Server Date Lock: Schedule matches current university day
  3. Countdown Check: Elapsed time < 300s expiration limit
  4. Course Enrollment: Student has 'Activa' status in 'inscripciones'
- CLI Maintenance: 'bin/migrate.php' (SQL migrations) and 'bin/seed.php' (data seeders)`,

    'cat together.md': () => `[TOGETHER :: HOST-AUTHORITATIVE MEDIA SYNCHRONIZATION]
- Stack: Fastify 5, @fastify/websocket, PostgreSQL (Neon serverless), React 18
- Synchronization Protocol: Host-authoritative time anchors (videoTime + serverTime)
- Drift Correction Engine:
  - RTT and clock offset estimated via regular ping/pong packets
  - Drift > 5.0s  => Hard seek alignment
  - Drift <= 5.0s => Micro-rate playback adjustments
- Room State Machine: Ephemeral 6-char codes, granular DJ role permissions,
  YouTube Data API quota caching proxy, host disconnect failover timers`,

    stack: () => `SYSTEM SPECIFICATIONS & ARCHITECTURE RUNTIMES:
  • Primary Backend    : PHP 8.4 / 8.2 (FPM, PDO), Node.js (Fastify 5), Python 3
  • Systems & Tooling  : Rust (ratatui TUI, systems scripting), Bash / Shell
  • Database Engines   : MariaDB 11.8 (Relational schemas, indexing), PostgreSQL / Neon
  • Real-Time & Sync   : WebSockets (Custom sync protocols), REST APIs, PWA Cache
  • Infrastructure     : Linux (Debian/Ubuntu), Docker & Docker Compose, Nginx, DDEV`,

    projects: () => `SYSTEMS INVENTORY:
  [FLAGSHIPS]
  1. Cambi         Currency Engine & Local-First Payment Manager (PHP 8.4, PWA)
  2. QR_IUTECP     Institutional QR Attendance Management (PHP 8.2, MariaDB 11.8)
  3. Together      Cross-Continental Media Sync Platform (Fastify 5, WebSockets)

  [ARCHIVED & SECONDARY]
  4. Playful       Terminal music player for Kitty terminal (Rust, ratatui, mpv)
  5. Terra         Real-time seismic activity alert service (PHP 8.4, MariaDB)
  6. Colmena       Modular business management & PDF generation (PHP, TCPDF)
  7. Mercader FBA  Amazon FBA profitability analyzer (Node.js, React)
  8. Python Monitor BCV rate monitor microservice (Python 3, Flask)`,

    whoami: () => `Fernando Rodríguez Rada
Title: Senior Backend & Systems Engineer
Location: Caracas, Venezuela (UTC-4)
Focus: Resilient backend runtimes, database query optimization, sub-second API pipelines,
       real-time state machines, and distraction-free static architecture.`,

    contact: () => `DIRECT COMMUNICATION CHANNELS:
  • Email   : fernandorodriguezrada@gmail.com
  • GitHub  : https://github.com/fernandorodriguezrada
  • Location: Caracas, Venezuela (UTC-4)
  Status: Open for senior engineering roles & high-stakes systems contracts.`
  };

  /**
   * Escape HTML to prevent injection in simulated console
   */
  function escapeHTML(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  /**
   * Print output to simulated terminal console
   */
  function printToConsole(cmd, outputText) {
    const entry = document.createElement('div');
    entry.className = 'cli-entry';

    const cmdLine = document.createElement('div');
    cmdLine.className = 'cli-entry-cmd';
    cmdLine.textContent = `guest@portfolio:~$ ${cmd}`;
    entry.appendChild(cmdLine);

    if (outputText) {
      const outLine = document.createElement('div');
      outLine.className = 'cli-entry-output';

      // Convert URLs to clickable links
      const formatted = escapeHTML(outputText).replace(
        /(https?:\/\/[^\s]+)/g,
        '<a href="$1" target="_blank" rel="noopener noreferrer">$1 ↗</a>'
      );
      outLine.innerHTML = formatted;
      entry.appendChild(outLine);
    }

    cliOutput.appendChild(entry);
    cliOutput.scrollTop = cliOutput.scrollHeight;
  }

  /**
   * Execute command string
   */
  function runCommand(rawCmd) {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    // Push to history
    history.push(cmd);
    historyIndex = history.length;

    const lower = cmd.toLowerCase();

    if (lower === 'clear') {
      cliOutput.innerHTML = '';
      return;
    }

    if (commands[lower]) {
      const result = commands[lower]();
      printToConsole(cmd, result);
    } else if (lower.startsWith('cat ') && !commands[lower]) {
      printToConsole(cmd, `cat: ${escapeHTML(cmd.slice(4))}: No such file. Try 'cat cambi.md', 'cat qr.md', or 'cat together.md'.`);
    } else {
      printToConsole(cmd, `command not found: ${escapeHTML(cmd)}. Type 'help' to inspect available system commands.`);
    }
  }

  // Handle Form Submit
  if (cliForm && cliInput) {
    cliForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const val = cliInput.value;
      cliInput.value = '';
      runCommand(val);
    });

    // History navigation with Up/Down arrow keys
    cliInput.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (historyIndex > 0) {
          historyIndex--;
          cliInput.value = history[historyIndex] || '';
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex < history.length - 1) {
          historyIndex++;
          cliInput.value = history[historyIndex] || '';
        } else {
          historyIndex = history.length;
          cliInput.value = '';
        }
      } else if (e.key === 'Tab') {
        e.preventDefault();
        const current = cliInput.value.toLowerCase().trim();
        const keys = Object.keys(commands);
        const match = keys.find((k) => k.startsWith(current));
        if (match) {
          cliInput.value = match;
        }
      }
    });
  }

  // Handle Command Chips
  chipButtons.forEach((btn) => {
    btn.addEventListener('click', function () {
      const cmd = this.getAttribute('data-cmd');
      if (cmd) {
        runCommand(cmd);
        if (cliInput) cliInput.focus();
      }
    });
  });

  // Open CLI button focus helper
  if (openCliBtn && cliInput) {
    openCliBtn.addEventListener('click', function () {
      setTimeout(() => {
        cliInput.focus();
      }, 300);
    });
  }

  // Global Keyboard Shortcuts ([1] - [5])
  document.addEventListener('keydown', function (e) {
    // Skip if user is typing inside an input or textarea
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      return;
    }

    const keyMap = {
      '1': '#overview',
      '2': '#flagships',
      '3': '#archive',
      '4': '#cli',
      '5': '#contact'
    };

    if (keyMap[e.key]) {
      const target = document.querySelector(keyMap[e.key]);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        if (e.key === '4' && cliInput) {
          setTimeout(() => cliInput.focus(), 400);
        }
      }
    }
  });

})();

# Surface Brief: Portfolio

<!-- impeccable:surface-schema 1 -->

## Mode
Experience

## Job and Audience
- **Visitor:** Engineering leaders, VPs of Engineering, and technical hiring managers.
- **Context:** Screening senior backend and systems engineering candidates for high-responsibility roles within a 30–60 second scan window.
- **Mode:** Experience — the technical artifacts and systems thinking lead; the UI recedes into a high-craft terminal environment.

## Outcome and Proof
- **Primary Goal:** Drive technical interview invitations and direct GitHub repository exploration.
- **Flagship Proof ("The Big 3"):**
  1. **Cambi:** PWA, PHP 8.4 BCV multi-tier scraper with cron caching, zero-server-PII local-first Pago Móvil manager, offline QR generation, arithmetic expression parser with live subtotal previews.
  2. **QR_IUTECP:** Institutional attendance management system under PDS Skeleton, PHP 8.2+ PDO & MariaDB 11.8, CLI migration engine, 32-character ephemeral QR sessions with 5-minute TTL, browser-based video stream decoding via `jsQR`, 4-stage scan validation pipeline, 3-tier RBAC with audit logging.
  3. **Together:** Fastify 5 WebSocket real-time audio sync platform (tested Venezuela <-> Lithuania), host-authoritative playback anchors with RTT/clock-offset estimation and 5s drift correction, 6-character room codes, PostgreSQL (Neon serverless + Docker local), React 18.
- **Secondary Projects Table:**
  - *Playful:* Rust terminal music player for Kitty terminal with `ratatui` TUI, `mpv` backend, Kitty graphics protocol album art.
  - *Terra:* Real-time earthquake alert dashboard with MariaDB caching and GeoJSON feeds.
  - *Colmena:* Modular PHP routing system and automated PDF generation.
  - *Mercader FBA:* Amazon FBA profitability and margin analytics for cross-border operations.
  - *Python Monitor:* Flask BCV rate scraper and metrics endpoint.

## Selected Direction
- **Visual Identity:** Minimalist Unix workstation / CLI. Monospace typography, crisp 1px borders, deep console dark mode (`#0d1117`), zero generic AI gradients or neon cyberpunk glow.
- **Color Roles:** Deep slate background (`#0d1117`), container fill (`#161b22`), border rule (`#30363d`), crisp white body (`#f0f6fc`), muted gray meta (`#8b949e`), terminal emerald (`#3fb950` for status/active), amber (`#d29922` for tags), cool cyan (`#58a6ff` for prompts/links).
- **Interactive Element:** Interactive CLI drawer/bar allowing visitors to type or click commands (`help`, `cat cambi`, `cat qr`, `cat together`, `stack`, `contact`, `clear`) with immediate output.

## Scope and Boundaries
- **Fidelity:** Production-ready static site deployable on GitHub Pages.
- **Delivery Target:** `index.html`, `style.css`, and `app.js` (replacing `index.php`).
- **Language:** English.
- **Anti-goals:** No PHP runtime dependencies, no neon purple/cyan cyberpunk glow, no generic blurred radial AI gradients, no fake placeholder testimonials.

## States and Ranges
- **Terminal States:** Collapsed/expanded CLI drawer, command history navigation (Up/Down arrow keys), quick-click command chips.
- **Device Support:** Fully responsive from 320px mobile screens (stacked cards, touchable chips) to wide desktop displays (high-density data tables and ASCII diagrams).

## Interaction and Layout
1. **Status Header:** Live uptime counter, location `[VE]`, status `[OPEN TO ROLES]`, quick-jump keys.
2. **Hero (`whoami`):** Concise statement of backend authority, core tech matrix.
3. **The Big 3 Flagship Deep Dives:** Structured architecture breakdowns, data flow ASCII diagrams, key metrics, and direct links.
4. **Archive Table:** Compact tabular breakdown of secondary tools and experiments.
5. **Interactive Console & Contact Footer:** Interactive command input and direct contact channels (`mailto:`, GitHub, LinkedIn).

## Constraints and Open Decisions
- **Hosting:** GitHub Pages static hosting.
- **Contact:** Native `mailto:` link + raw terminal contact card with social links.

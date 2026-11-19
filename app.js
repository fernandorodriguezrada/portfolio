/**
 * Fernando Rodríguez Rada — Informática Student at IUTECP
 * Timeless Studio Portfolio Engine:
 * - Bilingual Support (EN / ES Instant Switcher)
 * - Light/Dark Theme Engine with localStorage persistence
 * - One-Click Email Copy with localized toast feedback
 * - Smooth Anchor Navigation
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. BILINGUAL DICTIONARY (EN / ES)
  // =========================================================================
  const i18n = {
    en: {
      // Document Metadata
      meta_title: 'Fernando Rodríguez Rada | Computer Science Student at IUTECP',
      meta_desc: 'Fernando Rodríguez Rada — Computer Science student at IUTECP in Guatire, Miranda, Venezuela. Building practical web applications, backend services, and developer tools.',
      
      // Top Navigation
      nav_about: 'ABOUT',
      nav_work: 'WORK',
      nav_skills: 'SKILLS',
      nav_contact: 'CONTACT',
      theme_toggle_label: 'Toggle color theme',
      lang_toggle_label: 'Switch to Spanish language',

      // Section Titles & Subtitles
      sec_about_title: 'ABOUT <span class="accent-word">ME</span>',
      sec_about_sub: 'Computer Science student focused on backend systems, clean architecture, and practical engineering.',
      sec_work_title: 'SELECTED <span class="accent-word">WORK</span>',
      sec_work_sub: 'Three production applications where I solved real architectural, performance, and security challenges.',
      sec_other_title: 'OTHER <span class="accent-word">PROJECTS</span>',
      sec_other_sub: 'Terminal utilities, backend microservices, and specialized web tools.',
      sec_skills_title: 'SKILLS &amp; <span class="accent-word">TOOLS</span>',
      sec_skills_sub: 'Technologies, storage engines, and developer tools I work with daily.',
      sec_contact_title: 'LET\'S <span class="accent-word">CONNECT</span>',
      sec_contact_sub: 'I\'m currently studying Computer Science at IUTECP and actively looking for software engineering opportunities, internships, and collaborative projects. Feel free to reach out.',

      // About Me Section
      polaroid_caption: 'FERNANDO • GUATIRE, VE',
      about_lead: 'Hi! I\'m Fernando Rodríguez, a Computer Science student at IUTECP living in Guatire, Miranda, Venezuela.',
      about_p1: 'I build practical web applications, backend services, and developer tools. I enjoy working on projects with real constraints—whether that\'s handling currency volatility with local-first offline storage, automating university attendance with ephemeral QR codes, or keeping audio in sync across international latencies.',
      about_p2: 'I focus on clean code, database modeling, and software that genuinely works in everyday situations without unnecessary complexity.',
      btn_view_projects: 'View Projects',
      btn_copy_email: 'Copy Email',

      // Things I Enjoy & What I Can Do
      enjoy_title: 'Things I Enjoy',
      enjoy_1: 'Linux &amp; Open-Source Tools',
      enjoy_2: 'Backend Architecture &amp; Data Modeling',
      enjoy_3: 'Music Listening &amp; Tactical Gaming',
      cando_title: 'What I Can Do',
      cando_1: 'PHP &amp; Backend Systems',
      cando_2: 'SQL &amp; MariaDB Modeling',
      cando_3: 'Real-Time WebSockets',
      cando_4: 'Offline-First PWAs',
      cando_5: 'RESTful APIs &amp; Web Apps',
      cando_6: 'Linux &amp; Server Ops',

      // Flagship 1: Cambi
      cambi_badge: 'Progressive Web App',
      cambi_tagline: 'Real-time currency converter and local-first payment manager solving everyday transaction friction in Venezuela.',
      lbl_problem: 'The Problem',
      lbl_how_it_works: 'How It Works',
      cambi_p_prob: 'In Venezuela, official foreign exchange rates fluctuate constantly, and everyday mobile banking payments (Pago Móvil) require tedious copy-pasting of account numbers, national IDs, and bank codes. Poor cellular connectivity frequently interrupts transactions right at the checkout counter.',
      cambi_p_work1: 'A background PHP 8.4 cron worker scrapes official Central Bank (BCV) rates with automated fallback scrapers, caching rates in atomic local JSON files. The interface runs on Vanilla ES6+ and a Service Worker for 100% offline access.',
      cambi_p_work2: 'The Pago Móvil manager stores all sensitive banking records purely in browser localStorage (zero PII sent to any server), instantly generating offline QR codes and clean WhatsApp payment summaries.',
      cambi_btn_live: 'Live Application (cambibak.rf.gd)',
      cambi_btn_repo: 'View Repository Details',
      cambi_note: 'Zero-PII server footprint • 100% offline QR',

      // Flagship 2: QR_IUTECP
      qr_badge: 'Institutional Platform',
      qr_tagline: 'University attendance management platform replacing vulnerable paper sign-in sheets with ephemeral QR verification.',
      qr_p_prob: 'Paper attendance sheets at IUTECP were prone to proxy signing by absent students, took up valuable class time, and required professors to manually transcribe hundreds of attendance marks into administrative records at the end of every term.',
      qr_p_work1: 'Built following the PDS Skeleton standard to isolate web-accessible files from private application logic. When class starts, a professor generates an ephemeral session backed by a 32-character cryptographic token with a strict 5-minute countdown timer.',
      qr_p_work2: 'Students scan the projected code via an in-browser camera stream (jsQR). The server validates 4 strict conditions: token existence, server schedule date, active countdown TTL, and verified course enrollment before recording attendance. Includes custom CLI tools (bin/migrate.php and bin/seed.php).',
      qr_btn_live: 'Live Application (asistenciasiutecp.rf.gd)',
      qr_btn_repo: 'View Repository Details',
      qr_btn_badge: 'Built for IUTECP University',
      qr_note: '4-stage validation filter • Anti-proxy camera check',

      // Flagship 3: Together
      together_badge: 'Real-Time Web Platform',
      together_tagline: 'Listen to music in sync with a friend across the world via host-authoritative WebSockets and dynamic drift correction.',
      together_p_prob: 'Listening to synchronized music across international distances (tested between Venezuela and Lithuania) is tricky: network jitter, latency spikes, and browser timing discrepancies cause playback to drift out of sync within minutes.',
      together_p_work1: 'Engineered a custom host-authoritative WebSocket synchronization engine with Fastify 5. When the host (DJ) plays, pauses, or seeks, the server broadcasts an authoritative time anchor (current video time + exact server timestamp).',
      together_p_work2: 'Clients run an automated 5-second drift correction loop: small millisecond offsets are smoothed by micro-adjusting the playback rate, while discrepancies greater than 5 seconds trigger a seamless hard seek. Manages rooms with 6-character codes, YouTube Data API quota caching, and serverless Postgres on Neon.',
      together_btn_live: 'Live Application (together-78s9.onrender.com)',
      together_btn_repo: 'View Repository Details',
      together_note: 'Tested cross-continentally (VE ↔ LT) • ±5s dynamic drift correction',

      // Secondary Projects
      type_playful: 'Rust • CLI',
      type_terra: 'Backend Service',
      type_colmena: 'Web Application',
      type_mercader: 'Analytics App',
      type_python: 'Microservice',
      playful_desc: 'A lightweight, keyboard-driven terminal music player for Kitty terminal built in Rust using ratatui and mpv, featuring embedded cover art rendering via Kitty graphics protocol.',
      terra_desc: 'Real-time seismic activity monitoring service aggregating earthquake data feeds from Funvisis and USGS with MariaDB caching, geo coordinates, and automated updates.',
      colmena_desc: 'Modular business management system featuring custom request routing, relational database storage for operational records, and automated transactional PDF invoice generation.',
      mercader_desc: 'Amazon FBA profitability analyzer and margin calculator designed for international sellers operating through US entities, factoring in customs, referral fees, and freight costs.',
      python_desc: 'Currency exchange rate scraper and microservice built with Flask, providing automated daily rate parsing and clean JSON metrics REST endpoints for client applications.',

      // Skills Groups
      skills_lang: 'Programming<br>Languages',
      skills_backend: 'Backend &amp;<br>Databases',
      skills_tools: 'Environment &amp;<br>Tools',

      // Contact & Footer
      toast_email_copied: 'Email copied to clipboard: frr20122@gmail.com',
      footer_copy: 'Made with ❤️ by Fernando Rodríguez Rada',
      footer_back_top: 'Back to top ↑'
    },

    es: {
      // Metadatos
      meta_title: 'Fernando Rodríguez Rada | Estudiante de Informática en el IUTECP',
      meta_desc: 'Fernando Rodríguez Rada — Estudiante de Informática en el IUTECP en Guatire, Miranda, Venezuela. Desarrollo aplicaciones web prácticas, servicios backend y herramientas.',

      // Navegación Superior
      nav_about: 'SOBRE MÍ',
      nav_work: 'PROYECTOS',
      nav_skills: 'HABILIDADES',
      nav_contact: 'CONTACTO',
      theme_toggle_label: 'Cambiar tema de color',
      lang_toggle_label: 'Cambiar idioma a Inglés',

      // Títulos y Subtítulos de Sección
      sec_about_title: 'SOBRE <span class="accent-word">MÍ</span>',
      sec_about_sub: 'Estudiante de desarrollo de software enfocado en arquitectura backend, código limpio e ingeniería práctica.',
      sec_work_title: 'PROYECTOS <span class="accent-word">DESTACADOS</span>',
      sec_work_sub: 'Tres aplicaciones completas donde resolví retos reales de arquitectura, rendimiento y seguridad.',
      sec_other_title: 'OTROS <span class="accent-word">PROYECTOS</span>',
      sec_other_sub: 'Utilidades de terminal, microservicios backend y herramientas web especializadas.',
      sec_skills_title: 'HABILIDADES Y <span class="accent-word">HERRAMIENTAS</span>',
      sec_skills_sub: 'Tecnologías, motores de bases de datos y herramientas con las que trabajo a diario.',
      sec_contact_title: 'HABLEMOS Y <span class="accent-word">COLABOREMOS</span>',
      sec_contact_sub: 'Actualmente estudio Informática en el IUTECP y estoy abierto a oportunidades laborales, pasantías y proyectos colaborativos de backend o full-stack. Con gusto conversemos.',

      // Sección Sobre Mí
      polaroid_caption: 'FERNANDO • GUATIRE, VE',
      about_lead: '¡Hola! Soy Fernando Rodríguez, estudiante de Informática en el IUTECP y vivo en Guatire, Miranda, Venezuela.',
      about_p1: 'Desarrollo aplicaciones web prácticas, servicios backend y herramientas para desarrolladores. Me apasiona resolver problemas con restricciones reales: desde lidiar con la volatilidad cambiaria mediante almacenamiento local offline, hasta automatizar la asistencia universitaria con códigos QR efímeros y sincronizar audio a través de latencias internacionales.',
      about_p2: 'Mi enfoque está en el código limpio, el modelado de bases de datos y la creación de software que funcione de verdad en el día a día, sin complejidades innecesarias.',
      btn_view_projects: 'Ver Proyectos',
      btn_copy_email: 'Copiar Correo',

      // Lo que disfruto y Lo que sé hacer
      enjoy_title: 'Lo Que Disfruto',
      enjoy_1: 'Linux y Herramientas Open-Source',
      enjoy_2: 'Arquitectura Backend y Modelado de Datos',
      enjoy_3: 'Música y Videojuegos Tácticos',
      cando_title: 'Lo Que Sé Hacer',
      cando_1: 'PHP y Sistemas Backend',
      cando_2: 'Modelado SQL y MariaDB',
      cando_3: 'WebSockets y Tiempo Real',
      cando_4: 'PWAs Offline-First',
      cando_5: 'APIs REST y Apps Web',
      cando_6: 'Linux y Servidores',

      // Flagship 1: Cambi
      cambi_badge: 'Aplicación Web Progresiva',
      cambi_tagline: 'Motor de conversión cambiaria en tiempo real y gestor de pago móvil local-first para el día a día en Venezuela.',
      lbl_problem: 'El Problema',
      lbl_how_it_works: 'Cómo Funciona',
      cambi_p_prob: 'En Venezuela, las tasas de cambio oficiales varían a diario y realizar pagos móviles bancarios exige copiar y pegar números de cuenta, cédulas y códigos de banco. Además, las fallas de conexión celular suelen interrumpir las transacciones en los comercios.',
      cambi_p_work1: 'Un worker cron en PHP 8.4 consulta las tasas oficiales del Banco Central (BCV) con scrapers de respaldo automático, almacenándolas en archivos JSON atómicos. La interfaz utiliza Vanilla JavaScript y un Service Worker para operar 100% offline.',
      cambi_p_work2: 'El gestor de Pago Móvil guarda los datos bancarios exclusivamente en el localStorage del navegador (cero datos personales en servidores), generando códigos QR sin conexión y resúmenes limpios para WhatsApp.',
      cambi_btn_live: 'Aplicación en Vivo (cambibak.rf.gd)',
      cambi_btn_repo: 'Ver Repositorio',
      cambi_note: 'Cero datos en servidor • QR 100% offline',

      // Flagship 2: QR_IUTECP
      qr_badge: 'Plataforma Institucional',
      qr_tagline: 'Sistema institucional de control de asistencia estudiantil mediante códigos QR dinámicos y temporales.',
      qr_p_prob: 'Las listas de asistencia en papel en el IUTECP eran vulnerables a firmas por terceros, quitaban tiempo valioso de clase y obligaban a los docentes a transcribir manualmente cientos de registros a las actas institucionales al final del periodo.',
      qr_p_work1: 'Desarrollado bajo el estándar PDS Skeleton para aislar el código público de la lógica privada. El docente genera una sesión protegida por un token criptográfico de 32 caracteres con vigencia estricta de 5 minutos.',
      qr_p_work2: 'Los alumnos escanean el código proyectado mediante la cámara en el navegador (jsQR). El servidor valida 4 filtros inviolables: existencia del token, fecha de clase, temporizador activo e inscripción formal en la asignatura. Incluye scripts CLI de migraciones y semillas.',
      qr_btn_live: 'Aplicación en Vivo (asistenciasiutecp.rf.gd)',
      qr_btn_repo: 'Ver Repositorio',
      qr_btn_badge: 'Desarrollado para el IUTECP',
      qr_note: 'Filtro de 4 etapas • Bloqueo de capturas de pantalla',

      // Flagship 3: Together
      together_badge: 'Plataforma en Tiempo Real',
      together_tagline: 'Escucha música en perfecta sincronización con amigos en cualquier parte del mundo mediante WebSockets.',
      together_p_prob: 'Escuchar música sincronizada a larga distancia (probado entre Venezuela y Lituania) presenta dificultades: la fluctuación de la red, la latencia y las discrepancias de reloj en los navegadores provocan que el reproductor pierda el compás en pocos minutos.',
      together_p_work1: 'Diseñé un protocolo de sincronización WebSocket host-authoritative con Fastify 5. Cuando el anfitrión reproduce o busca, el servidor transmite un ancla temporal autoritativa (tiempo de video + reloj del servidor).',
      together_p_work2: 'Los clientes ejecutan un ciclo de corrección de desfase cada 5 segundos: variaciones milimétricas se compensan ajustando levemente la velocidad de reproducción, mientras que desviaciones mayores a 5 segundos activan un salto directo. Gestiona salas con códigos de 6 caracteres y base de datos PostgreSQL en Neon.',
      together_btn_live: 'Aplicación en Vivo (together-78s9.onrender.com)',
      together_btn_repo: 'Ver Repositorio',
      together_note: 'Probado internacionalmente (VE ↔ LT) • Corrección ±5s',

      // Secondary Projects
      type_playful: 'Rust • CLI',
      type_terra: 'Servicio Backend',
      type_colmena: 'Aplicación Web',
      type_mercader: 'Herramienta Analítica',
      type_python: 'Microservicio',
      playful_desc: 'Reproductor de música para terminal Kitty ligero y controlado por teclado, construido en Rust con ratatui y mpv, con soporte de carátulas de álbum mediante el protocolo Kitty.',
      terra_desc: 'Servicio de monitoreo de actividad sísmica en tiempo real que recopila reportes de Funvisis y el USGS, con caché en MariaDB, coordenadas geográficas y alertas automáticas.',
      colmena_desc: 'Sistema modular de gestión empresarial con enrutamiento personalizado liviano, base de datos relacional para control de inventario y generación automática de facturas en PDF.',
      mercader_desc: 'Calculadora de rentabilidad y márgenes para vendedores de Amazon FBA que operan desde el extranjero con empresas en EE.UU., calculando impuestos, comisiones y flete.',
      python_desc: 'Microservicio y scraper de cotizaciones de divisas construido con Flask, que extrae datos diariamente y provee endpoints REST con respuestas JSON limpias.',

      // Grupos de Habilidades
      skills_lang: 'Lenguajes de<br>Programación',
      skills_backend: 'Backend y Bases de<br>Datos',
      skills_tools: 'Entorno y<br>Herramientas',

      // Contacto y Pie de Página
      toast_email_copied: '¡Correo copiado al portapapeles: frr20122@gmail.com!',
      footer_copy: 'Hecho con ❤️ por Fernando Rodríguez Rada',
      footer_back_top: 'Volver arriba ↑'
    }
  };

  // State Management
  let currentLang = localStorage.getItem('portfolio_lang') || 'en';
  let currentTheme = localStorage.getItem('portfolio_theme') || 'light';

  const htmlEl = document.documentElement;
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const email = 'frr20122@gmail.com';
  const toast = document.getElementById('toast');
  let toastTimer = null;

  // =========================================================================
  // 2. THEME ENGINE (LIGHT DEFAULT + SOBER DARK MODE)
  // =========================================================================
  function applyTheme(theme) {
    currentTheme = theme;
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio_theme', theme);

    if (themeToggleBtn) {
      const sunIcon = themeToggleBtn.querySelector('.icon-sun');
      const moonIcon = themeToggleBtn.querySelector('.icon-moon');
      if (sunIcon && moonIcon) {
        if (theme === 'dark') {
          sunIcon.style.display = 'block';
          moonIcon.style.display = 'none';
        } else {
          sunIcon.style.display = 'none';
          moonIcon.style.display = 'block';
        }
      }
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function () {
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      applyTheme(newTheme);
    });
  }

  // Initial Theme Application (Default to Light Mode)
  applyTheme(currentTheme);

  // =========================================================================
  // 3. BILINGUAL LANGUAGE ENGINE (EN / ES)
  // =========================================================================
  function applyLanguage(lang) {
    if (!i18n[lang]) return;
    currentLang = lang;
    htmlEl.setAttribute('lang', lang);
    localStorage.setItem('portfolio_lang', lang);

    // Update Document Title & Description
    document.title = i18n[lang].meta_title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', i18n[lang].meta_desc);

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (i18n[lang][key] !== undefined) {
        el.innerHTML = i18n[lang][key];
      }
    });

    // Update Language Toggle Button visual state
    if (langToggleBtn) {
      if (lang === 'es') {
        langToggleBtn.innerHTML = '<span>EN</span> | <span class="active-lang">ES</span>';
        langToggleBtn.setAttribute('aria-label', i18n[lang].lang_toggle_label);
      } else {
        langToggleBtn.innerHTML = '<span class="active-lang">EN</span> | <span>ES</span>';
        langToggleBtn.setAttribute('aria-label', i18n[lang].lang_toggle_label);
      }
    }
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', function () {
      const nextLang = currentLang === 'en' ? 'es' : 'en';
      applyLanguage(nextLang);
    });
  }

  // Initial Language Application
  applyLanguage(currentLang);

  // =========================================================================
  // 4. ONE-CLICK EMAIL COPY WITH LOCALIZED TOAST
  // =========================================================================
  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  function copyEmail() {
    const feedbackMsg = i18n[currentLang].toast_email_copied;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email)
        .then(() => showToast(feedbackMsg))
        .catch(() => fallbackCopy(feedbackMsg));
    } else {
      fallbackCopy(feedbackMsg);
    }
  }

  function fallbackCopy(feedbackMsg) {
    const input = document.createElement('input');
    input.value = email;
    document.body.appendChild(input);
    input.select();
    try {
      document.execCommand('copy');
      showToast(feedbackMsg);
    } catch (e) {
      window.location.href = 'mailto:' + email;
    }
    document.body.removeChild(input);
  }

  const copyButtons = [
    document.getElementById('copy-email-hero'),
    document.getElementById('copy-email-btn')
  ].filter(Boolean);

  copyButtons.forEach((btn) => {
    btn.addEventListener('click', copyEmail);
  });

  // =========================================================================
  // 5. SMOOTH NAVIGATION
  // =========================================================================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

})();

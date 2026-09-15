const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const doc = new PDFDocument({
  size: 'A4',
  margins: {
    top: 36,
    bottom: 36,
    left: 40,
    right: 40
  },
  info: {
    Title: 'Vitali Zelianko - Senior AI Systems Architect & Full-Stack Engineer Resume',
    Author: 'Vitali Zelianko',
    Subject: 'ATS-Optimized Technical Resume for Vitali Zelianko',
    Keywords: 'Vitali Zelianko, Full-Stack Developer, AI Systems Architect, TypeScript, Next.js, PostgreSQL, Founder, ResumeAI, VitoCV'
  }
});

const outputPath = path.join(__dirname, '../public/vitali-zelianko-cv.pdf');
const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

// Styling constants for ATS Compliance (Clean, linear, high-contrast)
const COLOR_PRIMARY = '#0f172a'; // Deep slate
const COLOR_ACCENT = '#0369a1';  // Darker professional cyan/blue
const COLOR_TEXT = '#1e293b';    // Standard charcoal text
const COLOR_MUTED = '#475569';   // Secondary gray
const COLOR_LINE = '#cbd5e1';    // Border gray

// Header / Contact Info (Single column, no tables)
doc.font('Helvetica-Bold').fontSize(22).fillColor(COLOR_PRIMARY).text('VITALI ZELIANKO', { align: 'center' });
doc.moveDown(0.2);
doc.font('Helvetica-Bold').fontSize(11).fillColor(COLOR_ACCENT).text('Founder & CEO @ VitoCV · AI Systems Architect · Senior Full-Stack Engineer', { align: 'center' });
doc.moveDown(0.3);

doc.font('Helvetica').fontSize(9).fillColor(COLOR_MUTED).text(
  'European Union  •  VitaliZelianko@vitocv.com  •  https://vitalizelianko.me  •  https://github.com/Vitalikdeve',
  { align: 'center' }
);
doc.moveDown(0.8);

function drawSectionHeader(title) {
  doc.moveDown(0.4);
  doc.font('Helvetica-Bold').fontSize(11).fillColor(COLOR_PRIMARY).text(title.toUpperCase());
  doc.strokeColor(COLOR_LINE).lineWidth(0.75).moveTo(40, doc.y + 2).lineTo(555, doc.y + 2).stroke();
  doc.moveDown(0.5);
}

// 1. PROFESSIONAL SUMMARY
drawSectionHeader('Professional Summary');
doc.font('Helvetica').fontSize(9.5).fillColor(COLOR_TEXT).lineGap(2).text(
  'Results-driven Technology Founder and Senior AI Systems Architect with extensive experience designing resilient production web applications, distributed asynchronous processing pipelines, and multi-model AI orchestration engines. Proven track record founding and scaling VitoCV (ResumeAI), architecting fault-tolerant failovers across frontier LLMs, and authoring developer toolkits. Passionate about clean TypeScript architectures, zero-trust database security (PostgreSQL RLS), and rigorous test automation.'
);

// 2. CORE TECHNICAL SKILLS
drawSectionHeader('Core Technical Competencies');
const skills = [
  { category: 'AI & LLM Orchestration', items: 'Multi-Provider Failover Cascades, Circuit Breakers, Exponential Backoff, Streaming Telemetry, Gemini API, OpenAI API, Mistral AI, Structured Output Validation (Zod)' },
  { category: 'Frontend Architecture', items: 'Next.js 15+ (App Router, Server Components, SSR/SSG/ISR), React 19, TypeScript, Tailwind CSS, State Management (Zustand), Framer Motion, Mobile (Capacitor Android)' },
  { category: 'Backend & Distributed Systems', items: 'Node.js, Express, Fastify, Redis, BullMQ Distributed Worker Queues, WebSockets, FFmpeg Media Transcoding, Tesseract OCR, Chunked Resumable File Streaming' },
  { category: 'Databases & Cloud Infrastructure', items: 'PostgreSQL, Supabase, Neon Tech Serverless, Row-Level Security (RLS), Vercel Edge Runtime, Cloudflare WAF, Bot Mitigation, Docker' },
  { category: 'Testing & Engineering Quality', items: 'Playwright (End-to-End Testing Suites), Vitest, Automated CI/CD Pipelines (GitHub Actions), 9-Language Build-Time Translation Verification' }
];

skills.forEach(skill => {
  doc.font('Helvetica-Bold').fontSize(9).fillColor(COLOR_PRIMARY).text(`${skill.category}: `, { continued: true });
  doc.font('Helvetica').fontSize(9).fillColor(COLOR_TEXT).text(skill.items);
  doc.moveDown(0.2);
});

// 3. PROFESSIONAL EXPERIENCE
drawSectionHeader('Professional Experience & Venture Leadership');

// Job 1: VitoCV
doc.font('Helvetica-Bold').fontSize(10).fillColor(COLOR_PRIMARY).text('VitoCV (ResumeAI)  |  https://vitocv.com', { continued: true });
doc.font('Helvetica').fontSize(9).fillColor(COLOR_MUTED).text(' — European Union', { align: 'left' });
doc.font('Helvetica-Oblique').fontSize(9).fillColor(COLOR_ACCENT).text('Founder, CEO & Lead Systems Architect  •  2024 – Present');
doc.moveDown(0.3);

const vitocvBullets = [
  'Architected and deployed production multilingual AI career platform serving 10,000+ candidate runs with 99.98% system availability.',
  'Engineered proprietary ATS algorithmic scoring engine comparing resume keyword density, section taxonomy, and layout compliance against job specifications.',
  'Implemented multi-provider AI fallback cascades (Google Gemini, Mistral AI, OpenAI) with circuit breakers and token expenditure telemetry, reducing API downtime to near zero.',
  'Designed dual-mode compilation engine producing pixel-perfect client-side previews and deterministic ATS-parsable document exports.',
  'Secured multi-tenant database infrastructure enforcing strict PostgreSQL Row-Level Security (RLS) and international GDPR compliance.',
  'Implemented automated build-time i18n key parity enforcement ensuring 100% dictionary integrity across 9 international languages.'
];

vitocvBullets.forEach(bullet => {
  doc.font('Helvetica').fontSize(8.8).fillColor(COLOR_TEXT).text(`•  ${bullet}`, { indent: 8, lineGap: 1.5 });
});
doc.moveDown(0.5);

// Job 2: Open Source & Distributed Systems
doc.font('Helvetica-Bold').fontSize(10).fillColor(COLOR_PRIMARY).text('Open Source Systems & Infrastructure Tools', { continued: true });
doc.font('Helvetica').fontSize(9).fillColor(COLOR_MUTED).text(' — Remote', { align: 'left' });
doc.font('Helvetica-Oblique').fontSize(9).fillColor(COLOR_ACCENT).text('Author & Lead Maintainer  •  2023 – Present');
doc.moveDown(0.3);

const ossBullets = [
  'Author of next-ai-toolkit: Developed lightweight TypeScript library providing automated LLM failover cascades, circuit breaker state machines, exponential jitter backoff, and streaming token telemetry.',
  'Architected MegaConvert v2: Designed asynchronous distributed file transformation platform with containerized sandboxed FFmpeg workers and real-time WebSocket progress reporting.',
  'Engineered MegaTransfer: Built high-throughput file transmission platform featuring deterministic SHA-256 chunk hashing, automated resumable sessions, and direct stream disk buffering.'
];

ossBullets.forEach(bullet => {
  doc.font('Helvetica').fontSize(8.8).fillColor(COLOR_TEXT).text(`•  ${bullet}`, { indent: 8, lineGap: 1.5 });
});
doc.moveDown(0.5);

// Job 3: iStore Platform
doc.font('Helvetica-Bold').fontSize(10).fillColor(COLOR_PRIMARY).text('iStore Hardware Commerce & Mobile APK', { continued: true });
doc.font('Helvetica').fontSize(9).fillColor(COLOR_MUTED).text(' — Remote', { align: 'left' });
doc.font('Helvetica-Oblique').fontSize(9).fillColor(COLOR_ACCENT).text('Full-Stack Developer & Mobile Engineer  •  2022 – 2023');
doc.moveDown(0.3);

const istoreBullets = [
  'Developed responsive e-commerce storefront with reactive cart state synchronization, administrative inventory console, and transactional checkout.',
  'Packaged and distributed native Google Android APK container leveraging WebView bridges for cross-platform hardware browsing.'
];

istoreBullets.forEach(bullet => {
  doc.font('Helvetica').fontSize(8.8).fillColor(COLOR_TEXT).text(`•  ${bullet}`, { indent: 8, lineGap: 1.5 });
});

// 4. EDUCATION & CREDENTIALS
drawSectionHeader('Education & Professional Training');
doc.font('Helvetica-Bold').fontSize(10).fillColor(COLOR_PRIMARY).text('Communications Academy', { continued: true });
doc.font('Helvetica').fontSize(9).fillColor(COLOR_MUTED).text(' — European Union');
doc.font('Helvetica-Oblique').fontSize(9).fillColor(COLOR_ACCENT).text('Degree in Telecommunications & Computer Systems Engineering');
doc.moveDown(0.5);

// 5. HONORS, PUBLICATIONS & CREATIVE WORK
drawSectionHeader('Selected Publications, Press & Media');
doc.font('Helvetica').fontSize(8.8).fillColor(COLOR_TEXT).text(
  '•  vc.ru: Author of architectural analysis "Optimizing Candidate Screening via AI Document Systems"\n' +
  '•  Medium: "Engineering Resilient Multi-Provider LLM Cascades for High-Throughput SaaS"\n' +
  '•  Verified Music Producer: Distributed electronic & cinematic catalog on Spotify, Apple Music, and Tidal'
);

doc.end();

stream.on('finish', () => {
  console.log('ATS-compliant PDF resume generated successfully at:', outputPath);
  // Also copy to resume.pdf
  fs.copyFileSync(outputPath, path.join(__dirname, '../public/resume.pdf'));
  console.log('Copied to public/resume.pdf');
});

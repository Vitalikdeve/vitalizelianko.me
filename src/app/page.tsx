import { sql } from '@/lib/db';
import { 
  Terminal, 
  ExternalLink, 
  Github, 
  Disc, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Mail, 
  Radio, 
  Music, 
  Layers, 
  Send,
  Headphones,
  CheckCircle2
} from 'lucide-react';

async function getPortfolioData() {
  let profile = null;
  let projects: any[] = [];
  let music: any[] = [];

  try {
    if (sql) {
      const profileRows = await sql`SELECT * FROM portfolio_profile LIMIT 1;`;
      profile = profileRows[0] || null;

      const projectRows = await sql`SELECT * FROM portfolio_projects ORDER BY sort_order ASC;`;
      projects = projectRows || [];

      const musicRows = await sql`SELECT * FROM portfolio_music ORDER BY sort_order ASC;`;
      music = musicRows || [];
    }
  } catch (err) {
    console.warn('Database query fallback:', err);
  }

  // Fallback defaults in case DB is offline during build
  if (!profile) {
    profile = {
      full_name: 'Vitali Zelianko',
      headline: 'Founder, CEO @ VitoCV · AI Systems Architect · Music Producer',
      bio: 'Architecting resilient production web applications, multi-provider AI failovers, and streaming data platforms. Creator of VitoCV / ResumeAI and developer infrastructure.',
      email: 'VitaliZelianko@vitocv.com',
      github_url: 'https://github.com/Vitalikdeve',
      location: 'Warsaw, Poland / Remote'
    };
  }

  if (projects.length === 0) {
    projects = [
      {
        slug: 'vitocv',
        title: 'ResumeAI (VitoCV)',
        tagline: 'Production AI-powered career platform with multilingual ATS scoring',
        description: 'Flagship career platform featuring dual-mode PDF compilation, 9-language localization, bank-grade Row-Level Security, and multi-model cascade orchestration (Gemini, Mistral, OpenAI).',
        role: 'Founder, CEO & Full-Stack Architect',
        category: 'AI & SaaS',
        tech_stack: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Supabase', 'TailwindCSS', 'Playwright'],
        demo_url: 'https://vitocv.com',
        github_url: 'https://github.com/Vitalikdeve/resumeai',
        case_study_url: 'https://github.com/Vitalikdeve/resumeai-case-study',
        featured: true
      },
      {
        slug: 'next-ai-toolkit',
        title: 'next-ai-toolkit',
        tagline: 'Lightweight TypeScript toolkit for resilient multi-provider AI streaming',
        description: 'Production-ready toolkit implementing circuit breakers, exponential jitter backoff, abort signal streaming cancellation, and token cost telemetry.',
        role: 'Author & Maintainer',
        category: 'Developer Tools',
        tech_stack: ['TypeScript', 'Vitest', 'Node.js', 'Next.js', 'GitHub Actions'],
        github_url: 'https://github.com/Vitalikdeve/next-ai-toolkit',
        featured: true
      },
      {
        slug: 'megaconvert-v2',
        title: 'MegaConvert v2',
        tagline: 'Distributed media and document transformation engine with BullMQ pools',
        description: 'Asynchronous distributed file transformation platform featuring containerized worker sandboxing, real-time WebSocket progress telemetry, and batch media transcoding.',
        role: 'Lead Engineer',
        category: 'Distributed Systems',
        tech_stack: ['Node.js', 'Fastify', 'Redis', 'BullMQ', 'Docker', 'FFmpeg'],
        github_url: 'https://github.com/Vitalikdeve/megaconvert-v2',
        featured: true
      },
      {
        slug: 'megatransfer',
        title: 'MegaTransfer',
        tagline: 'Chunked resumable file streaming with deterministic hashing',
        description: 'Resilient high-throughput file transfer platform with deterministic chunk hashing, automatic resumable sessions, and direct stream disk buffering.',
        role: 'Lead Engineer',
        category: 'Distributed Systems',
        tech_stack: ['TypeScript', 'WebSockets', 'Node.js', 'Streaming', 'Docker'],
        github_url: 'https://github.com/Vitalikdeve/MegaTransfer',
        featured: true
      }
    ];
  }

  return { profile, projects, music };
}

export default async function HomePage() {
  const { profile, projects, music } = await getPortfolioData();

  return (
    <div className="relative min-h-screen text-slate-100 antialiased">
      {/* Top ambient navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2.5 font-bold tracking-tight text-white hover:text-sky-400 transition-colors">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono text-sm">
              VZ
            </span>
            <span className="text-lg">Vitali Zelianko</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects & SaaS</a>
            <a href="#music" className="hover:text-white transition-colors">Music</a>
            <a href="#stack" className="hover:text-white transition-colors">Stack</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Vitalikdeve"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-1.5 text-xs font-semibold text-slate-950 hover:bg-sky-400 transition-colors shadow-lg shadow-sky-500/20"
            >
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="relative mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="flex flex-col items-start gap-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-mono text-sky-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Building production systems & soundscapes</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-[1.08] text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-100 to-slate-400">
            {profile.headline}
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
            {profile.bio}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-sky-400 transition-all shadow-xl shadow-sky-500/25"
            >
              <Terminal className="h-4 w-4" />
              <span>Explore Projects</span>
            </a>
            <a
              href="#music"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all backdrop-blur"
            >
              <Headphones className="h-4 w-4 text-purple-400" />
              <span>Listen to Music</span>
            </a>
          </div>
        </div>

        {/* Highlight Stats Bar */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 pt-8 border-t border-white/[0.08]">
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <div className="text-2xl font-bold font-mono text-sky-400">10k+</div>
            <div className="text-xs text-slate-400 mt-1">Platform Users & Runs</div>
          </div>
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <div className="text-2xl font-bold font-mono text-emerald-400">99.98%</div>
            <div className="text-xs text-slate-400 mt-1">AI Failover Availability</div>
          </div>
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <div className="text-2xl font-bold font-mono text-purple-400">Spotify / Apple</div>
            <div className="text-xs text-slate-400 mt-1">Global Music Distribution</div>
          </div>
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <div className="text-2xl font-bold font-mono text-amber-400">9 Locales</div>
            <div className="text-xs text-slate-400 mt-1">Internationalized Products</div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="relative border-t border-white/[0.06] py-20 bg-slate-950/40">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-400 uppercase tracking-wider mb-2">
                <Layers className="h-3.5 w-3.5" />
                Featured Work
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
                Engineered Platforms & Systems
              </h2>
            </div>
            <a
              href="https://github.com/Vitalikdeve"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-400 hover:text-sky-300"
            >
              <span>View all repositories on GitHub</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((proj: any, idx: number) => (
              <div
                key={proj.slug || idx}
                className="glass-card group flex flex-col justify-between rounded-2xl p-7"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-mono text-slate-300">
                      {proj.category}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      {proj.role}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">
                    {proj.title}
                  </h3>

                  <p className="mt-2 text-sm text-sky-200/70 font-medium">
                    {proj.tagline}
                  </p>

                  <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {proj.tech_stack?.map((tech: string) => (
                      <span
                        key={tech}
                        className="rounded-lg bg-sky-500/10 border border-sky-500/20 px-2.5 py-1 text-xs font-mono text-sky-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-4 pt-4 border-t border-white/[0.06]">
                  {proj.demo_url && (
                    <a
                      href={proj.demo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-sky-400 transition-colors"
                    >
                      <span>Live Platform</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  {proj.case_study_url && (
                    <a
                      href={proj.case_study_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <span>Case Study</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  {proj.github_url && (
                    <a
                      href={proj.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="relative border-t border-white/[0.06] py-20 bg-gradient-to-b from-slate-950 via-purple-950/10 to-slate-950">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-400 uppercase tracking-wider mb-2">
              <Disc className="h-3.5 w-3.5 animate-spin" />
              Music & Sound Design
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
              Official Releases & Discography
            </h2>
            <p className="mt-2 text-slate-400 max-w-2xl">
              Electronic, melodic, and cinematic productions published across major streaming networks.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Spotify Card */}
            <div className="glass-card rounded-2xl p-6 border-emerald-500/20 hover:border-emerald-500/40">
              <div className="flex items-center gap-3 mb-4 text-emerald-400">
                <Radio className="h-6 w-6" />
                <h3 className="font-bold text-lg text-white">Spotify</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6">
                Stream latest tracks, singles, and curated creator playlists.
              </p>
              <a
                href="https://open.spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 px-4 py-2.5 text-sm font-semibold text-emerald-300 hover:bg-emerald-500/30 transition-all"
              >
                <span>Listen on Spotify</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            {/* Apple Music Card */}
            <div className="glass-card rounded-2xl p-6 border-rose-500/20 hover:border-rose-500/40">
              <div className="flex items-center gap-3 mb-4 text-rose-400">
                <Music className="h-6 w-6" />
                <h3 className="font-bold text-lg text-white">Apple Music</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6">
                Lossless spatial audio releases available worldwide on Apple Music.
              </p>
              <a
                href="https://music.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-rose-500/20 border border-rose-500/40 px-4 py-2.5 text-sm font-semibold text-rose-300 hover:bg-rose-500/30 transition-all"
              >
                <span>Apple Music</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            {/* Tidal & YouTube Music */}
            <div className="glass-card rounded-2xl p-6 border-sky-500/20 hover:border-sky-500/40">
              <div className="flex items-center gap-3 mb-4 text-sky-400">
                <Headphones className="h-6 w-6" />
                <h3 className="font-bold text-lg text-white">Tidal & YouTube Music</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6">
                Master quality sound on Tidal and official audio visuals on YouTube Music.
              </p>
              <div className="flex gap-2">
                <a
                  href="https://tidal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-1 rounded-xl bg-white/10 px-3 py-2 text-xs font-semibold text-white hover:bg-white/20 transition-all"
                >
                  <span>Tidal</span>
                </a>
                <a
                  href="https://music.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-1 rounded-xl bg-red-500/20 border border-red-500/40 px-3 py-2 text-xs font-semibold text-red-300 hover:bg-red-500/30 transition-all"
                >
                  <span>YouTube Music</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack & Architecture Radar */}
      <section id="stack" className="relative border-t border-white/[0.06] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-400 uppercase tracking-wider mb-2">
              <Cpu className="h-3.5 w-3.5" />
              Core Competencies
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
              Architecture & Technology Stack
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-sky-400" />
                AI Systems & Resiliency
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Multi-model cascade failover routing (Gemini, OpenAI, Mistral), streaming token telemetry, circuit breakers, and deterministic structured outputs (Zod).
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                <Terminal className="h-5 w-5 text-emerald-400" />
                Full-Stack & Cloud Edge
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Next.js 15+ App Router, React 19, TypeScript, PostgreSQL (Neon / Supabase), Redis BullMQ pipelines, and Vercel edge runtime deployments.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-purple-400" />
                Security & Zero-Trust
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                PostgreSQL Row-Level Security (RLS) multi-tenancy, Cloudflare Turnstile & WAF bot mitigation, automated Playwright E2E testing suites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative border-t border-white/[0.06] py-20 bg-slate-950/60">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
              Let's Connect & Collaborate
            </h2>
            <p className="mt-3 text-slate-400 max-w-xl mx-auto">
              Interested in consulting, system architecture advisory, music licensing, or strategic SaaS partnerships? Drop a message directly to my inbox.
            </p>
          </div>

          <form action="/api/contact" method="POST" className="glass-card rounded-2xl p-8 max-w-xl mx-auto space-y-4">
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Alex Mercer"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">Your Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="alex@company.com"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Advisory / Partnership / Music"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Hello Vitali, I would like to discuss..."
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-sky-500 py-3 text-sm font-semibold text-slate-950 hover:bg-sky-400 transition-colors shadow-lg shadow-sky-500/20"
            >
              <Send className="h-4 w-4" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-10 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Vitali Zelianko (vitalizelianko.me). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/Vitalikdeve" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300">
              GitHub
            </a>
            <a href="https://vitocv.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300">
              VitoCV
            </a>
            <a href="mailto:VitaliZelianko@vitocv.com" className="hover:text-slate-300">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

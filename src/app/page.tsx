import { sql, Profile, Project, PressItem } from '@/lib/db';
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
  GraduationCap,
  MapPin,
  FileCode,
  CheckCircle2,
  Lock
} from 'lucide-react';
import SocialAppGrid from '@/components/SocialAppGrid';
import ProjectCard from '@/components/ProjectCard';
import PressSection from '@/components/PressSection';
import MusicSection from '@/components/MusicSection';
import LegalNotice from '@/components/LegalNotice';

async function getSiteData() {
  let profile: Profile | null = null;
  let projects: Project[] = [];
  let press: PressItem[] = [];

  try {
    if (sql) {
      const profileRows = await sql`SELECT * FROM portfolio_profile LIMIT 1;`;
      profile = (profileRows[0] as unknown as Profile) || null;

      const projectRows = await sql`SELECT * FROM portfolio_projects ORDER BY sort_order ASC;`;
      projects = (projectRows as unknown as Project[]) || [];

      const pressRows = await sql`SELECT * FROM portfolio_press ORDER BY sort_order ASC;`;
      press = (pressRows as unknown as PressItem[]) || [];
    }
  } catch (err) {
    console.warn('Database query fallback:', err);
  }

  // Fallback defaults
  if (!profile) {
    profile = {
      id: '1',
      full_name: 'Vitali Zelianko',
      headline: 'Founder, CEO @ VitoCV · AI Systems Architect · Electronic Music Producer',
      bio: 'Architecting resilient production web platforms, distributed file processing engines, and multi-model AI orchestration. Creating electronic soundscapes distributed worldwide.',
      email: 'VitaliZelianko@vitocv.com',
      github_url: 'https://github.com/Vitalikdeve',
      twitter_url: 'https://x.com/vitocv_com?s=11',
      facebook_url: 'https://www.facebook.com/share/17urzu3NvC/?mibextid=wwXIfr',
      threads_url: 'https://www.threads.com/@vitalik_zelenko?igshid=NTc4MTIwNjQ2YQ==',
      tiktok_url: 'https://www.tiktok.com/t/ZP8tYncSc/',
      spotify_url: 'https://open.spotify.com/artist/5tjCSnC4R007H7E5ODqLs4?si=LQtgztahRTyel1schcUUUA&utm_source=copy-link',
      apple_music_url: 'https://music.apple.com/tr/artist/vitali-zelianko/6786468164',
      tidal_url: 'https://tidal.com/artist/81979301/u',
      amazon_music_url: 'https://music.amazon.com/artists/B0H5NR8FTW/vitali-zelianko?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_oVY4x2K2ijYXXtfZssWlm3GpX',
      youtube_music_url: 'https://music.youtube.com/@VitaliZelianko',
      shazam_url: 'https://www.shazam.com/artist/vitali-zelianko/6786468164',
      genius_url: 'https://genius.com/artists/Vitali-zelianko/albums',
      iheart_url: 'https://www.iheart.com/artist/vitali-zelianko-51235341',
      qobuz_url: 'https://www.qobuz.com/us-en/interpreter/vitali-zelianko/35309201',
      location: 'European Union',
      education: 'Communications Academy'
    };
  }

  return { profile, projects, press };
}

export default async function HomePage() {
  const { profile, projects, press } = await getSiteData();

  return (
    <div className="relative min-h-screen text-slate-100 antialiased selection:bg-sky-500/30 selection:text-sky-200">
      {/* Top Ambient Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2.5 font-bold tracking-tight text-white hover:text-sky-400 transition-colors">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/20 to-purple-500/20 border border-white/10 text-sky-400 font-mono text-sm font-extrabold shadow-inner">
              VZ
            </span>
            <span className="text-lg tracking-tight">Vitali Zelianko</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">Profile</a>
            <a href="#apps" className="hover:text-white transition-colors">Apps & Hub</a>
            <a href="#projects" className="hover:text-white transition-colors">Engineering & SaaS</a>
            <a href="#press" className="hover:text-white transition-colors">Press</a>
            <a href="#music" className="hover:text-white transition-colors">Music</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Vitalikdeve"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-semibold text-white hover:bg-white/10 transition-all"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-sky-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/25"
            >
              <span>Collaboration</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="relative mx-auto max-w-6xl px-6 pt-16 pb-16 md:pt-28 md:pb-20">
        <div className="flex flex-col items-start gap-6 max-w-4xl">
          {/* Status Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1 text-xs font-mono text-sky-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Founder & Systems Architect</span>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-mono text-purple-300">
              <Disc className="h-3 w-3 animate-spin" />
              <span>Electronic Producer</span>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-slate-400">
              <MapPin className="h-3 w-3 text-sky-400" />
              <span>{profile.location}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-slate-400">
              <GraduationCap className="h-3 w-3 text-purple-400" />
              <span>{profile.education}</span>
            </div>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-[1.06] text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-100 to-slate-400">
            {profile.headline}
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
            {profile.bio}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-2xl bg-sky-500 px-6 py-3.5 text-sm font-semibold text-slate-950 hover:bg-sky-400 transition-all shadow-xl shadow-sky-500/25 font-mono"
            >
              <Terminal className="h-4 w-4" />
              <span>Inspect Systems Architecture</span>
            </a>
            <a
              href="#music"
              className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all backdrop-blur font-mono"
            >
              <Headphones className="h-4 w-4 text-purple-400" />
              <span>Explore Discography</span>
            </a>
          </div>
        </div>

        {/* Global Key Metrics Banner */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 pt-8 border-t border-white/[0.08]">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 backdrop-blur-md">
            <div className="text-3xl font-bold font-mono text-sky-400">10k+</div>
            <div className="text-xs text-slate-400 mt-1">Platform Users & Runs</div>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 backdrop-blur-md">
            <div className="text-3xl font-bold font-mono text-emerald-400">99.98%</div>
            <div className="text-xs text-slate-400 mt-1">AI Failover Availability</div>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 backdrop-blur-md">
            <div className="text-3xl font-bold font-mono text-purple-400">9 DSPs</div>
            <div className="text-xs text-slate-400 mt-1">Global Music Distribution</div>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 backdrop-blur-md">
            <div className="text-3xl font-bold font-mono text-amber-400">9 Locales</div>
            <div className="text-xs text-slate-400 mt-1">Full Key Parity Localization</div>
          </div>
        </div>
      </section>

      {/* 16+ Verified Social & Streaming App Grid */}
      <div id="apps">
        <SocialAppGrid />
      </div>

      {/* Deep Dive Projects & Technical Case Studies */}
      <section id="projects" className="relative py-20 border-t border-white/[0.06] bg-slate-950/30">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-wider mb-2">
                <Layers className="h-3.5 w-3.5" />
                Engineering Systems & SaaS
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-white">
                Flagship Platforms & Architecture
              </h2>
              <p className="mt-2 text-slate-400 max-w-2xl">
                Explore in-depth system architecture designs, resilience patterns, and production code snippets across enterprise SaaS and distributed developer tools.
              </p>
            </div>
            <a
              href="https://github.com/Vitalikdeve"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-sky-400 hover:text-sky-300"
            >
              <span>All Repositories</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Press, Media & Ecosystem */}
      <div id="press">
        <PressSection items={press} />
      </div>

      {/* Music Studio & Discography */}
      <MusicSection profile={profile} />

      {/* Contact & Inquiries */}
      <section id="contact" className="relative py-20 border-t border-white/[0.06] bg-slate-950/70">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-wider mb-2">
              <Mail className="h-3.5 w-3.5" />
              Direct Communication
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-white">
              Initiate Collaboration
            </h2>
            <p className="mt-3 text-slate-400 max-w-xl mx-auto">
              Open for technical architecture advisory, strategic SaaS partnerships, venture opportunities, and music licensing.
            </p>
          </div>

          <form action="/api/contact" method="POST" className="glass-card rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 sm:p-10 max-w-xl mx-auto space-y-4 shadow-2xl">
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5">Full Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Alex Mercer"
                className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5">Email Address</label>
              <input
                type="email"
                name="email"
                required
                placeholder="alex@organization.com"
                className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5">Inquiry Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Advisory / Venture / Music Sync"
                className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Hello Vitali, I would like to discuss..."
                className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 font-medium"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-2xl bg-sky-500 py-4 text-sm font-semibold text-slate-950 hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/25 font-mono"
            >
              <Send className="h-4 w-4" />
              <span>Transmit Message</span>
            </button>
          </form>
        </div>
      </section>

      {/* Strict 2026 Legal Notice */}
      <LegalNotice />

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-10 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 Vitali Zelianko (vitalizelianko.me). All rights reserved.
          </div>
          <div className="flex items-center gap-6 font-mono">
            <a href="https://github.com/Vitalikdeve" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
              GitHub
            </a>
            <a href="https://vitocv.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
              VitoCV™
            </a>
            <a href="mailto:VitaliZelianko@vitocv.com" className="hover:text-slate-300 transition-colors">
              Direct Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

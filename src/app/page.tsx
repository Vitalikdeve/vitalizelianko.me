import { sql, Profile, Project, PressItem } from '@/lib/db';
import Image from 'next/image';
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
  Lock,
  Download,
  FileText
} from 'lucide-react';
import SocialAppGrid from '@/components/SocialAppGrid';
import ProjectCard from '@/components/ProjectCard';
import PressSection from '@/components/PressSection';
import MusicSection from '@/components/MusicSection';
import LegalNotice from '@/components/LegalNotice';
import ResumeSection from '@/components/ResumeSection';
import ContactForm from '@/components/ContactForm';

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
      education: 'Communications Academy',
      avatar_url: '/vitali-zelianko.jpg',
      resume_url: '/vitali-zelianko-cv.pdf'
    };
  }

  return { profile, projects, press };
}

export default async function HomePage() {
  const { profile, projects, press } = await getSiteData();

  return (
    <div className="relative min-h-screen bg-black text-zinc-100 antialiased selection:bg-white/20 selection:text-white">
      {/* Apple Pro Minimal Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          <a href="#" className="flex items-center gap-3 font-semibold tracking-tight text-white hover:text-zinc-300 transition-colors group">
            <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full ring-1 ring-white/20 group-hover:ring-white/40 transition-all shadow-sm">
              <img
                src="/vitali-zelianko.jpg"
                alt="Vitali Zelianko"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <span className="text-sm tracking-tight font-medium">Vitali Zelianko</span>
          </a>

          <nav className="hidden lg:flex items-center gap-7 text-xs font-medium text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">Profile</a>
            <a href="#apps" className="hover:text-white transition-colors">Platforms & Hub</a>
            <a href="#projects" className="hover:text-white transition-colors">Engineering</a>
            <a href="#resume" className="hover:text-white transition-colors text-zinc-200">ATS CV</a>
            <a href="#press" className="hover:text-white transition-colors">Press</a>
            <a href="#music" className="hover:text-white transition-colors">Discography</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/vitali-zelianko-cv.pdf"
              download="Vitali_Zelianko_CV.pdf"
              className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:bg-white/[0.08] hover:text-white transition-colors"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Resume PDF</span>
            </a>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-black hover:bg-zinc-200 transition-colors shadow-sm"
            >
              <span>Connect</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section with Official Portrait */}
      <section id="about" className="relative mx-auto max-w-6xl px-6 pt-16 pb-16 md:pt-24 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            {/* Executive Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs text-zinc-300 font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
                <span>Founder & Systems Architect</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-300 font-medium">
                <Disc className="h-3 w-3 text-zinc-400" />
                <span>Electronic Producer</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-400 font-medium">
                <MapPin className="h-3 w-3 text-zinc-400" />
                <span>{profile.location}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-400 font-medium">
                <GraduationCap className="h-3 w-3 text-zinc-400" />
                <span>{profile.education}</span>
              </div>
            </div>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl leading-[1.08] text-white">
              {profile.headline}
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl font-normal">
              {profile.bio}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#resume"
                className="flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black hover:bg-zinc-200 transition-all shadow-md"
              >
                <Download className="h-4 w-4" />
                <span>Download ATS Resume (PDF)</span>
              </a>
              <a
                href="#projects"
                className="flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3.5 text-sm font-medium text-white hover:bg-white/[0.08] transition-all"
              >
                <Terminal className="h-4 w-4 text-zinc-400" />
                <span>Explore Systems</span>
              </a>
              <a
                href="#music"
                className="flex items-center gap-2 rounded-full border border-white/10 bg-transparent px-5 py-3.5 text-sm font-medium text-zinc-300 hover:bg-white/[0.04] hover:text-white transition-all"
              >
                <Headphones className="h-4 w-4 text-zinc-400" />
                <span>Discography</span>
              </a>
            </div>
          </div>

          {/* Hero Right: Official Portrait Showcase (Apple Pro Titanium Frame) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Precision Milled Titanium Frame */}
              <div className="relative flex flex-col rounded-3xl border border-white/[0.12] bg-[#0c0d12] p-3 shadow-2xl">
                <div className="relative h-80 w-72 sm:h-96 sm:w-80 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#12131a]">
                  <img
                    src="/vitali-zelianko.jpg"
                    alt="Vitali Zelianko portrait"
                    className="h-full w-full object-cover object-top transition duration-500 hover:scale-[1.01]"
                  />
                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Identity Pill */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl border border-white/10 bg-black/85 px-3.5 py-2 backdrop-blur-xl">
                    <div>
                      <div className="text-xs font-semibold text-white">Vitali Zelianko</div>
                      <div className="text-[10px] text-zinc-400">Verified Entity · Portfolio 2026</div>
                    </div>
                    <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Key Metrics Banner (Strict Titanium Aesthetic) */}
        <div className="mt-16 grid grid-cols-2 gap-3.5 sm:grid-cols-4 pt-8 border-t border-white/[0.08]">
          <div className="rounded-2xl border border-white/[0.07] bg-[#08080c] p-5">
            <div className="text-3xl font-semibold tracking-tight text-white">10k+</div>
            <div className="text-xs text-zinc-400 mt-1">Platform Users & Runs</div>
          </div>
          <div className="rounded-2xl border border-white/[0.07] bg-[#08080c] p-5">
            <div className="text-3xl font-semibold tracking-tight text-white">99.98%</div>
            <div className="text-xs text-zinc-400 mt-1">AI Failover Availability</div>
          </div>
          <div className="rounded-2xl border border-white/[0.07] bg-[#08080c] p-5">
            <div className="text-3xl font-semibold tracking-tight text-white">9 DSPs</div>
            <div className="text-xs text-zinc-400 mt-1">Global Music Distribution</div>
          </div>
          <div className="rounded-2xl border border-white/[0.07] bg-[#08080c] p-5">
            <div className="text-3xl font-semibold tracking-tight text-white">100/100</div>
            <div className="text-xs text-zinc-400 mt-1">ATS Parser Readability Score</div>
          </div>
        </div>
      </section>

      {/* 16+ Verified Social & Streaming App Grid */}
      <div id="apps">
        <SocialAppGrid />
      </div>

      {/* Deep Dive Projects & Technical Case Studies */}
      <section id="projects" className="relative py-20 border-t border-white/[0.08] bg-[#030305]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 pb-6 border-b border-white/[0.06]">
            <div>
              <div className="text-xs font-semibold text-zinc-400 tracking-wider uppercase mb-2">
                Engineering Systems & SaaS
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                Flagship Platforms & Architecture
              </h2>
              <p className="mt-2 text-sm text-zinc-400 max-w-2xl leading-relaxed">
                Explore in-depth system architecture designs, resilience patterns, and production code snippets across enterprise SaaS and distributed developer tools.
              </p>
            </div>
            <a
              href="https://github.com/Vitalikdeve"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
            >
              <span>All Repositories</span>
              <ExternalLink className="h-3.5 w-3.5 text-zinc-400" />
            </a>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* 100% ATS Resume & Qualifications Section */}
      <ResumeSection />

      {/* Press, Media & Ecosystem */}
      <div id="press">
        <PressSection items={press} />
      </div>

      {/* Music Studio & Discography */}
      <MusicSection profile={profile} />

      {/* Contact & Inquiries */}
      <section id="contact" className="relative py-20 border-t border-white/[0.08] bg-[#020204]">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <div className="text-xs font-semibold text-zinc-400 tracking-wider uppercase mb-2">
              Direct Communication
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Initiate Collaboration
            </h2>
            <p className="mt-3 text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
              Open for technical architecture advisory, strategic SaaS partnerships, venture opportunities, and music licensing.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Strict 2026 Legal Notice */}
      <LegalNotice />

      {/* Footer */}
      <footer className="border-t border-white/[0.08] py-10 bg-black">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © 2026 Vitali Zelianko (vitalizelianko.me). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/Vitalikdeve" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors">
              GitHub
            </a>
            <a href="https://vitocv.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors">
              VitoCV™
            </a>
            <a href="/vitali-zelianko-cv.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-200 transition-colors">
              CV (PDF)
            </a>
            <a href="mailto:VitaliZelianko@vitocv.com" className="hover:text-zinc-300 transition-colors">
              Direct Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

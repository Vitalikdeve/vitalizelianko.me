'use client';

import React from 'react';
import { 
  FileText, 
  Download, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  ExternalLink,
  Cpu,
  GraduationCap,
  Briefcase
} from 'lucide-react';

export default function ResumeSection() {
  return (
    <section id="resume" className="relative py-20 border-t border-white/[0.06] bg-slate-950/60">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
              <CheckCircle2 className="h-3.5 w-3.5" />
              100% Global ATS Compliance
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-white">
              Curriculum Vitae & Verified Qualifications
            </h2>
            <p className="mt-2 text-slate-400 max-w-2xl">
              Engineered according to international Applicant Tracking System (ATS) guidelines: single-column linear text flow, standardized taxonomy, and verified keyword density for senior leadership and systems architecture roles.
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="/vitali-zelianko-cv.pdf"
              download="Vitali_Zelianko_CV.pdf"
              className="flex items-center gap-2.5 rounded-2xl bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20 font-mono"
            >
              <Download className="h-4 w-4" />
              <span>Download ATS CV (PDF)</span>
            </a>
            <a
              href="/vitali-zelianko-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all font-mono"
            >
              <ExternalLink className="h-4 w-4" />
              <span>View in Browser</span>
            </a>
          </div>
        </div>

        {/* ATS Quality Audit Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="glass-card rounded-3xl border border-emerald-500/20 bg-emerald-950/10 p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-emerald-400 font-bold uppercase">ATS Format Audit</span>
              <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-mono text-emerald-300 font-bold">100/100</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Linear Text Taxonomy</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Zero tables, multi-column blocks, or canvas artifacts. Fully readable by Workday, Taleo, Greenhouse, Lever, iCIMS, and BambooHR.
            </p>
          </div>

          <div className="glass-card rounded-3xl border border-sky-500/20 bg-sky-950/10 p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-sky-400 font-bold uppercase">Experience Weight</span>
              <span className="rounded-full bg-sky-500/20 px-2.5 py-0.5 text-xs font-mono text-sky-300 font-bold">Senior / Lead</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Venture & Systems Leadership</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Founder & CEO @ VitoCV, distributed systems architect, author of next-ai-toolkit and high-throughput transformation engines.
            </p>
          </div>

          <div className="glass-card rounded-3xl border border-purple-500/20 bg-purple-950/10 p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-purple-400 font-bold uppercase">Credentials</span>
              <span className="rounded-full bg-purple-500/20 px-2.5 py-0.5 text-xs font-mono text-purple-300 font-bold">Verified</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Engineering & Communications</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Degree from Communications Academy (Telecommunications & Computer Systems Engineering). Based in the European Union.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

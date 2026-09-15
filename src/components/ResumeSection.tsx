'use client';

import React from 'react';
import { 
  Download, 
  CheckCircle2, 
  ExternalLink,
} from 'lucide-react';

export default function ResumeSection() {
  return (
    <section id="resume" className="relative py-20 border-t border-white/[0.08] bg-[#020204]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-12 pb-6 border-b border-white/[0.06]">
          <div>
            <div className="text-xs font-semibold text-zinc-400 tracking-wider uppercase mb-2">
              Verified Qualifications & Compliance
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Curriculum Vitae & Technical Credentials
            </h2>
            <p className="mt-2 text-sm text-zinc-400 max-w-2xl leading-relaxed">
              Engineered according to international Applicant Tracking System (ATS) guidelines: single-column linear text flow, standardized taxonomy, and verified keyword density for executive and architecture roles.
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="/vitali-zelianko-cv.pdf"
              download="Vitali_Zelianko_CV.pdf"
              className="flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black hover:bg-zinc-200 transition-colors shadow-sm"
            >
              <Download className="h-4 w-4" />
              <span>Download ATS CV (PDF)</span>
            </a>
            <a
              href="/vitali-zelianko-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3.5 text-sm font-medium text-white hover:bg-white/[0.08] transition-colors"
            >
              <ExternalLink className="h-4 w-4 text-zinc-400" />
              <span>View in Browser</span>
            </a>
          </div>
        </div>

        {/* ATS Quality Audit Cards (Apple Titanium Grade) */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/[0.08] bg-[#090a0e] p-6 transition-all duration-200 hover:border-white/[0.18]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">ATS Format Audit</span>
              <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-0.5 text-xs text-white font-medium">100/100</span>
            </div>
            <h4 className="text-base font-semibold text-white mb-1.5">Linear Text Taxonomy</h4>
            <p className="text-xs text-zinc-400 leading-relaxed font-normal">
              Zero tables, multi-column blocks, or canvas artifacts. Fully readable by Workday, Taleo, Greenhouse, Lever, iCIMS, and BambooHR.
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-[#090a0e] p-6 transition-all duration-200 hover:border-white/[0.18]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Experience Weight</span>
              <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-0.5 text-xs text-white font-medium">Senior / Founder</span>
            </div>
            <h4 className="text-base font-semibold text-white mb-1.5">Venture & Systems Leadership</h4>
            <p className="text-xs text-zinc-400 leading-relaxed font-normal">
              Founder & CEO @ VitoCV, distributed systems architect, author of next-ai-toolkit and high-throughput transformation engines.
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-[#090a0e] p-6 transition-all duration-200 hover:border-white/[0.18]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Credentials</span>
              <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-0.5 text-xs text-white font-medium">Verified</span>
            </div>
            <h4 className="text-base font-semibold text-white mb-1.5">Engineering & Communications</h4>
            <p className="text-xs text-zinc-400 leading-relaxed font-normal">
              Degree from Communications Academy (Telecommunications & Computer Systems Engineering). Based in the European Union.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

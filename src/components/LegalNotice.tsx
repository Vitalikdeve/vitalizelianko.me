import React from 'react';
import { ShieldCheck, Scale, Lock } from 'lucide-react';

export default function LegalNotice() {
  return (
    <section className="border-t border-white/[0.08] bg-slate-950 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/[0.06]">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white tracking-tight">
                  Intellectual Property, Licensing & Copyright Protection
                </h4>
                <p className="text-xs text-slate-400 font-mono">
                  Enforced under International Berne Convention & WIPO Protocols (2026)
                </p>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono text-emerald-400 font-medium">
              <Lock className="h-3 w-3" />
              <span>All Rights Reserved · 2026</span>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 pt-6 text-xs text-slate-400 leading-relaxed">
            <div>
              <h5 className="font-semibold text-slate-200 mb-1 flex items-center gap-1.5 font-mono">
                <Scale className="h-3.5 w-3.5 text-sky-400" />
                Trademark & Brand Assets
              </h5>
              <p>
                <strong>VitoCV™</strong> and <strong>ResumeAI™</strong> are registered proprietary trademarks. Unauthorized reproduction, brand scraping, or impersonation is strictly prohibited by law.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-slate-200 mb-1 flex items-center gap-1.5 font-mono">
                <ShieldCheck className="h-3.5 w-3.5 text-purple-400" />
                Audio & Master Recordings
              </h5>
              <p>
                All original musical compositions, sound recordings, arrangements, and stems distributed across Spotify, Apple Music, Tidal, and associated DSPs are protected under worldwide exclusive master publishing rights.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-slate-200 mb-1 flex items-center gap-1.5 font-mono">
                <Lock className="h-3.5 w-3.5 text-emerald-400" />
                Code & Systems Architecture
              </h5>
              <p>
                Open-source libraries (such as next-ai-toolkit) are distributed under their respective repository licenses. Enterprise core platforms, database schemas, and proprietary architectures remain fully confidential and protected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

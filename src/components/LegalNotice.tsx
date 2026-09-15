import React from 'react';
import { ShieldCheck, Scale, Lock } from 'lucide-react';

export default function LegalNotice() {
  return (
    <section className="border-t border-white/[0.08] bg-black py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-white/[0.08] bg-[#090a0e] p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/[0.06]">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] border border-white/10 text-zinc-300">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-white tracking-tight">
                  Intellectual Property, Licensing & Copyright Protection
                </h4>
                <p className="text-xs text-zinc-400">
                  Enforced under International Berne Convention & WIPO Protocols (2026)
                </p>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs text-zinc-300 font-medium">
              <Lock className="h-3 w-3 text-zinc-400" />
              <span>All Rights Reserved · 2026</span>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 pt-6 text-xs text-zinc-400 leading-relaxed font-normal">
            <div>
              <h5 className="font-semibold text-zinc-200 mb-1 flex items-center gap-1.5">
                <Scale className="h-3.5 w-3.5 text-zinc-400" />
                Trademark & Brand Assets
              </h5>
              <p>
                <strong className="text-zinc-300">VitoCV™</strong> and <strong className="text-zinc-300">ResumeAI™</strong> are registered proprietary trademarks. Unauthorized reproduction, brand scraping, or impersonation is strictly prohibited by law.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-zinc-200 mb-1 flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-zinc-400" />
                Audio & Master Recordings
              </h5>
              <p>
                All original musical compositions, sound recordings, arrangements, and stems distributed across Spotify, Apple Music, Tidal, and associated DSPs are protected under worldwide exclusive master publishing rights.
              </p>
            </div>

            <div>
              <h5 className="font-semibold text-zinc-200 mb-1 flex items-center gap-1.5">
                <Lock className="h-3.5 w-3.5 text-zinc-400" />
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

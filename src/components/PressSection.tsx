'use client';

import React from 'react';
import { Newspaper, ExternalLink, Award, Globe, Video, Instagram } from 'lucide-react';
import { PressItem } from '@/lib/db';

interface PressSectionProps {
  items: PressItem[];
}

export default function PressSection({ items }: PressSectionProps) {
  const defaultItems: PressItem[] = items.length > 0 ? items : [
    {
      id: '1',
      publisher: 'vc.ru',
      title: 'Как оптимизировать скрининг кандидатов: запуск AI-сервиса генерации профессиональных резюме ResumeAI',
      url: 'https://vc.ru/id5991665/2956441-kak-optimizirovat-skrining-kandidatov-zapusk-ai-servisa-generacii-professionalnyh-rezyume-resumeaiclick',
      description: 'Technical deep-dive into ATS algorithmic parsing, candidate-recruiter scoring pipelines, and multi-model AI cascades.',
      badge_color: 'rose',
      sort_order: 1
    },
    {
      id: '2',
      publisher: 'Medium',
      title: 'Optimizing Candidate Screening: Launching Next-Gen AI Career Platform',
      url: 'https://medium.com/@vitalikzelenkoplay/optimizing-candidate-screening-7698370abed8',
      description: 'Engineering architectural analysis on client-side compilation, deterministic PDF layout generation, and multi-tenant RLS.',
      badge_color: 'emerald',
      sort_order: 2
    },
    {
      id: '3',
      publisher: 'ProductHunt',
      title: 'VitoCV on ProductHunt Community',
      url: 'https://www.producthunt.com/p/vitocv',
      description: 'Global launchpad showcase, user feedback, and career platform innovation.',
      badge_color: 'orange',
      sort_order: 3
    },
    {
      id: '4',
      publisher: 'Crunchbase',
      title: 'VitoCV Enterprise Organization Profile',
      url: 'https://www.crunchbase.com/organization/vitocv',
      description: 'Official corporate entity verification, technology stack profile, and venture milestones.',
      badge_color: 'amber',
      sort_order: 4
    },
    {
      id: '5',
      publisher: 'UI Comet',
      title: 'VitoCV 3.0 Platform Showcase',
      url: 'https://launches.uicomet.com/products/vitocv-3q0-y',
      description: 'Design system evaluation, product UX review, and community launch verification.',
      badge_color: 'purple',
      sort_order: 5
    }
  ];

  return (
    <section className="relative py-16 border-t border-white/[0.06] bg-slate-950/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-wider mb-2">
              <Newspaper className="h-3.5 w-3.5" />
              Press, Publications & Ecosystem
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
              Media Coverage & Project Profiles
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-2xl">
              Published technical case studies, industry articles, and platform profiles across tech communities.
            </p>
          </div>

          {/* VitoCV Social Channels */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/vitocv_com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-pink-500/20 bg-pink-500/10 px-3.5 py-2 text-xs font-semibold text-pink-300 hover:bg-pink-500/20 transition-colors"
            >
              <Instagram className="h-3.5 w-3.5" />
              <span>@vitocv_com</span>
            </a>
            <a
              href="https://www.youtube.com/@VitoCV_com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-3.5 py-2 text-xs font-semibold text-red-300 hover:bg-red-500/20 transition-colors"
            >
              <Video className="h-3.5 w-3.5" />
              <span>VitoCV YouTube</span>
            </a>
          </div>
        </div>

        {/* Press Cards Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {defaultItems.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 hover:border-sky-500/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="rounded-lg bg-white/10 px-2.5 py-1 text-xs font-mono font-bold text-white uppercase tracking-wide">
                    {item.publisher}
                  </span>
                  <ExternalLink className="h-4 w-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
                </div>

                <h4 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors line-clamp-2">
                  {item.title}
                </h4>

                {item.description && (
                  <p className="mt-2.5 text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                )}
              </div>

              <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-sky-400 group-hover:underline">
                <span>Read Full Article</span>
                <ExternalLink className="h-3 w-3" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

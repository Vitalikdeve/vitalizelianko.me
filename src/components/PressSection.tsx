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
    <section className="relative py-20 border-t border-white/[0.08] bg-[#000000]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 pb-6 border-b border-white/[0.06]">
          <div>
            <div className="text-xs font-semibold text-zinc-400 tracking-wider uppercase mb-2">
              Press, Publications & Ecosystem
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Media Coverage & Platform Profiles
            </h2>
            <p className="mt-2 text-sm text-zinc-400 max-w-2xl leading-relaxed">
              Published technical case studies, industry publications, and verified enterprise organization profiles across tech platforms.
            </p>
          </div>

          {/* VitoCV Social Channels (Strict Monochrome) */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://www.instagram.com/vitocv_com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:bg-white/[0.08] hover:text-white transition-colors"
            >
              <Instagram className="h-3.5 w-3.5 text-zinc-400" />
              <span>@vitocv_com</span>
            </a>
            <a
              href="https://www.youtube.com/@VitoCV_com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:bg-white/[0.08] hover:text-white transition-colors"
            >
              <Video className="h-3.5 w-3.5 text-zinc-400" />
              <span>VitoCV YouTube</span>
            </a>
          </div>
        </div>

        {/* Press Cards Grid (Apple Dark Grade) */}
        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {defaultItems.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-2xl border border-white/[0.07] bg-[#090a0e] p-6 hover:border-white/[0.18] hover:bg-[#0e0f15] transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-xs font-medium text-zinc-300">
                    {item.publisher}
                  </span>
                  <ExternalLink className="h-3.5 w-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                </div>

                <h4 className="text-base font-medium text-zinc-100 group-hover:text-white transition-colors line-clamp-2 leading-snug">
                  {item.title}
                </h4>

                {item.description && (
                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed line-clamp-3 font-normal">
                    {item.description}
                  </p>
                )}
              </div>

              <div className="mt-5 flex items-center gap-1.5 text-xs font-medium text-zinc-400 group-hover:text-white transition-colors">
                <span>Read Full Publication</span>
                <ExternalLink className="h-3 w-3" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

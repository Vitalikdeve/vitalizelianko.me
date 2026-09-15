'use client';

import React from 'react';
import { 
  Music, 
  Radio, 
  Disc, 
  Headphones, 
  Flame, 
  Share2, 
  Github, 
  ExternalLink,
  Sparkles,
  Zap
} from 'lucide-react';

interface AppBadge {
  name: string;
  category: 'music' | 'social' | 'code';
  handle?: string;
  url: string;
  iconBg: string;
  iconColor: string;
  badgeLabel?: string;
  iconType: 'spotify' | 'apple' | 'tidal' | 'amazon' | 'youtube' | 'shazam' | 'genius' | 'iheart' | 'qobuz' | 'instagram' | 'threads' | 'x' | 'tiktok' | 'facebook' | 'github';
}

const APPS: AppBadge[] = [
  // Streaming & Music Apps
  {
    name: 'Spotify',
    category: 'music',
    handle: 'Vitali Zelianko',
    url: 'https://open.spotify.com/artist/5tjCSnC4R007H7E5ODqLs4?si=LQtgztahRTyel1schcUUUA&utm_source=copy-link',
    iconBg: 'from-emerald-500 to-green-600',
    iconColor: '#1ed760',
    badgeLabel: 'Verified Artist',
    iconType: 'spotify',
  },
  {
    name: 'Apple Music',
    category: 'music',
    handle: 'Vitali Zelianko',
    url: 'https://music.apple.com/tr/artist/vitali-zelianko/6786468164',
    iconBg: 'from-rose-500 via-pink-600 to-red-500',
    iconColor: '#fc3c44',
    badgeLabel: 'Spatial Audio',
    iconType: 'apple',
  },
  {
    name: 'Tidal',
    category: 'music',
    handle: 'Vitali Zelianko',
    url: 'https://tidal.com/artist/81979301/u',
    iconBg: 'from-cyan-950 via-slate-900 to-black',
    iconColor: '#00ffff',
    badgeLabel: 'Hi-Res FLAC',
    iconType: 'tidal',
  },
  {
    name: 'YouTube Music',
    category: 'music',
    handle: '@VitaliZelianko',
    url: 'https://music.youtube.com/@VitaliZelianko',
    iconBg: 'from-red-600 to-rose-700',
    iconColor: '#ff0000',
    badgeLabel: 'Official Releases',
    iconType: 'youtube',
  },
  {
    name: 'Amazon Music',
    category: 'music',
    handle: 'Vitali Zelianko',
    url: 'https://music.amazon.com/artists/B0H5NR8FTW/vitali-zelianko?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_oVY4x2K2ijYXXtfZssWlm3GpX',
    iconBg: 'from-sky-900 via-cyan-800 to-blue-900',
    iconColor: '#00a8e1',
    badgeLabel: 'HD Audio',
    iconType: 'amazon',
  },
  {
    name: 'Shazam',
    category: 'music',
    handle: '6786468164',
    url: 'https://www.shazam.com/artist/vitali-zelianko/6786468164',
    iconBg: 'from-blue-600 to-sky-500',
    iconColor: '#0088ff',
    badgeLabel: 'Audio ID',
    iconType: 'shazam',
  },
  {
    name: 'Genius',
    category: 'music',
    handle: 'Vitali Zelianko',
    url: 'https://genius.com/artists/Vitali-zelianko/albums',
    iconBg: 'from-amber-400 to-yellow-500',
    iconColor: '#000000',
    badgeLabel: 'Lyrics & Concepts',
    iconType: 'genius',
  },
  {
    name: 'iHeartRadio',
    category: 'music',
    handle: 'Vitali Zelianko',
    url: 'https://www.iheart.com/artist/vitali-zelianko-51235341',
    iconBg: 'from-red-700 to-rose-900',
    iconColor: '#c6002b',
    badgeLabel: 'Broadcasting',
    iconType: 'iheart',
  },
  {
    name: 'Qobuz',
    category: 'music',
    handle: 'Vitali Zelianko',
    url: 'https://www.qobuz.com/us-en/interpreter/vitali-zelianko/35309201',
    iconBg: 'from-slate-900 via-indigo-950 to-black',
    iconColor: '#0099ff',
    badgeLabel: 'Studio Quality',
    iconType: 'qobuz',
  },

  // Social & Platform Apps
  {
    name: 'Instagram',
    category: 'social',
    handle: '@vitali_zelianko',
    url: 'https://www.instagram.com/vitali_zelianko?igsh=MWlzYnhvNXkzdXhhcw%3D%3D&utm_source=qr',
    iconBg: 'from-purple-600 via-pink-600 to-amber-500',
    iconColor: '#ffffff',
    badgeLabel: 'Life & Studio',
    iconType: 'instagram',
  },
  {
    name: 'Threads',
    category: 'social',
    handle: '@vitalik_zelenko',
    url: 'https://www.threads.com/@vitalik_zelenko?igshid=NTc4MTIwNjQ2YQ==',
    iconBg: 'from-zinc-900 to-black',
    iconColor: '#ffffff',
    badgeLabel: 'Engineering Logs',
    iconType: 'threads',
  },
  {
    name: 'X (Twitter)',
    category: 'social',
    handle: '@vitocv_com',
    url: 'https://x.com/vitocv_com?s=11',
    iconBg: 'from-slate-900 to-black',
    iconColor: '#ffffff',
    badgeLabel: 'SaaS & Architecture',
    iconType: 'x',
  },
  {
    name: 'YouTube',
    category: 'social',
    handle: '@vitalizelianko',
    url: 'https://youtube.com/@vitalizelianko?si=obP92Cp-_rUQicyz',
    iconBg: 'from-red-600 to-red-800',
    iconColor: '#ffffff',
    badgeLabel: 'Visuals & Videos',
    iconType: 'youtube',
  },
  {
    name: 'TikTok',
    category: 'social',
    handle: 'vitalizelianko',
    url: 'https://www.tiktok.com/t/ZP8tYncSc/',
    iconBg: 'from-slate-950 via-cyan-950 to-pink-950',
    iconColor: '#00f2fe',
    badgeLabel: 'Shorts & Audio',
    iconType: 'tiktok',
  },
  {
    name: 'Facebook',
    category: 'social',
    handle: 'Vitali Zelianko',
    url: 'https://www.facebook.com/share/17urzu3NvC/?mibextid=wwXIfr',
    iconBg: 'from-blue-600 to-blue-700',
    iconColor: '#ffffff',
    badgeLabel: 'Network',
    iconType: 'facebook',
  },
  {
    name: 'GitHub',
    category: 'code',
    handle: 'Vitalikdeve',
    url: 'https://github.com/Vitalikdeve',
    iconBg: 'from-neutral-900 to-black',
    iconColor: '#ffffff',
    badgeLabel: 'OSS Repositories',
    iconType: 'github',
  }
];

export default function SocialAppGrid() {
  return (
    <section className="relative py-16 border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-wider mb-2">
              <Sparkles className="h-3.5 w-3.5" />
              Verified Ecosystem
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
              Official Hub & Streaming Channels
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-2xl">
              Connect across verified streaming platforms, developer registries, and social profiles.
            </p>
          </div>
          <div className="text-xs font-mono text-slate-500">
            16 Platforms · Direct Sync
          </div>
        </div>

        {/* Square App Icon Grid (iOS/macOS Squircle style) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {APPS.map((app) => (
            <a
              key={app.name}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3.5 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-3.5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-sky-500/10"
            >
              {/* Squircle App Icon */}
              <div
                className={`relative flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${app.iconBg} shadow-md shadow-black/40 ring-1 ring-white/20 group-hover:scale-105 transition-transform`}
                style={{ width: '52px', height: '52px' }}
              >
                {renderAppGlyph(app.iconType)}
                {/* Gloss reflection overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-white/10 to-white/25 pointer-events-none" />
              </div>

              {/* App Info */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-sm text-white truncate group-hover:text-sky-300 transition-colors">
                    {app.name}
                  </span>
                  <ExternalLink className="h-3 w-3 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </div>
                {app.handle && (
                  <p className="text-xs text-slate-400 truncate mt-0.5">
                    {app.handle}
                  </p>
                )}
                {app.badgeLabel && (
                  <span className="inline-block text-[10px] font-mono text-sky-400/80 mt-1">
                    {app.badgeLabel}
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function renderAppGlyph(type: string) {
  switch (type) {
    case 'spotify':
      return (
        <svg className="h-6 w-6 fill-white" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.502 17.31c-.218.358-.68.472-1.038.254-2.846-1.74-6.428-2.133-10.648-1.168-.41.094-.82-.162-.914-.572-.094-.41.162-.82.572-.914 4.628-1.057 8.583-.615 11.774 1.362.358.218.472.68.254 1.038zm1.47-3.267c-.275.447-.858.59-1.305.315-3.26-2.003-8.23-2.585-12.085-1.414-.5.152-1.032-.132-1.184-.632-.152-.5.132-1.032.632-1.184 4.41-1.338 9.89-.69 13.627 1.61.447.275.59.858.315 1.305zm.126-3.41c-3.91-2.322-10.36-2.535-14.108-1.397-.6.183-1.238-.158-1.42-.758-.182-.6.158-1.238.758-1.42 4.305-1.307 11.423-1.057 15.918 1.61.54.32.715 1.025.395 1.565-.32.54-1.025.715-1.543.4z"/>
        </svg>
      );
    case 'apple':
      return (
        <svg className="h-6 w-6 fill-white" viewBox="0 0 24 24">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.98.6-2.62 1.35-.57.65-1.06 1.72-0.93 2.74 1 .08 2.01-.49 2.63-1.24z"/>
        </svg>
      );
    case 'tidal':
      return <Headphones className="h-6 w-6 text-cyan-300" />;
    case 'youtube':
      return (
        <svg className="h-6 w-6 fill-white" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      );
    case 'amazon':
      return <Radio className="h-6 w-6 text-sky-200" />;
    case 'shazam':
      return <Zap className="h-6 w-6 text-white" />;
    case 'genius':
      return <span className="font-extrabold text-black text-xl leading-none">G</span>;
    case 'iheart':
      return <Flame className="h-6 w-6 text-white" />;
    case 'qobuz':
      return <Disc className="h-6 w-6 text-sky-300" />;
    case 'instagram':
      return (
        <svg className="h-6 w-6 fill-white" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      );
    case 'threads':
      return <span className="font-extrabold text-white text-lg leading-none">@</span>;
    case 'x':
      return (
        <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      );
    case 'tiktok':
      return <Music className="h-6 w-6 text-cyan-300" />;
    case 'facebook':
      return (
        <svg className="h-6 w-6 fill-white" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      );
    case 'github':
      return <Github className="h-6 w-6 text-white" />;
    default:
      return <Share2 className="h-6 w-6 text-white" />;
  }
}

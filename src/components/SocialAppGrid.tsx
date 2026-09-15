'use client';

import React from 'react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';

interface AppBadge {
  name: string;
  category: 'music' | 'social' | 'code';
  handle?: string;
  url: string;
  badgeLabel?: string;
  iconType: 'spotify' | 'apple' | 'tidal' | 'amazon' | 'youtube_music' | 'shazam' | 'genius' | 'iheart' | 'qobuz' | 'instagram' | 'threads' | 'x' | 'youtube' | 'tiktok' | 'facebook' | 'github';
  brandColor: string;
}

const APPS: AppBadge[] = [
  // Music & Streaming Services (9 Platforms)
  {
    name: 'Spotify',
    category: 'music',
    handle: 'Vitali Zelianko',
    url: 'https://open.spotify.com/artist/5tjCSnC4R007H7E5ODqLs4?si=LQtgztahRTyel1schcUUUA&utm_source=copy-link',
    badgeLabel: 'Verified Artist',
    iconType: 'spotify',
    brandColor: '#1DB954',
  },
  {
    name: 'Apple Music',
    category: 'music',
    handle: 'Vitali Zelianko',
    url: 'https://music.apple.com/tr/artist/vitali-zelianko/6786468164',
    badgeLabel: 'Spatial Audio',
    iconType: 'apple',
    brandColor: '#FA243C',
  },
  {
    name: 'Tidal',
    category: 'music',
    handle: 'Vitali Zelianko',
    url: 'https://tidal.com/artist/81979301/u',
    badgeLabel: 'Hi-Res Lossless',
    iconType: 'tidal',
    brandColor: '#00FFFF',
  },
  {
    name: 'YouTube Music',
    category: 'music',
    handle: '@VitaliZelianko',
    url: 'https://music.youtube.com/@VitaliZelianko',
    badgeLabel: 'Official Catalog',
    iconType: 'youtube_music',
    brandColor: '#FF0000',
  },
  {
    name: 'Amazon Music',
    category: 'music',
    handle: 'Vitali Zelianko',
    url: 'https://music.amazon.com/artists/B0H5NR8FTW/vitali-zelianko?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_oVY4x2K2ijYXXtfZssWlm3GpX',
    badgeLabel: 'HD Audio',
    iconType: 'amazon',
    brandColor: '#00A8E1',
  },
  {
    name: 'Shazam',
    category: 'music',
    handle: 'Vitali Zelianko',
    url: 'https://www.shazam.com/artist/vitali-zelianko/6786468164',
    badgeLabel: 'Audio Identification',
    iconType: 'shazam',
    brandColor: '#0088FF',
  },
  {
    name: 'Genius',
    category: 'music',
    handle: 'Vitali Zelianko',
    url: 'https://genius.com/artists/Vitali-zelianko/albums',
    badgeLabel: 'Verified Lyrics',
    iconType: 'genius',
    brandColor: '#FFFF64',
  },
  {
    name: 'iHeartRadio',
    category: 'music',
    handle: 'Vitali Zelianko',
    url: 'https://www.iheart.com/artist/vitali-zelianko-51235341',
    badgeLabel: 'Digital Radio',
    iconType: 'iheart',
    brandColor: '#C6002B',
  },
  {
    name: 'Qobuz',
    category: 'music',
    handle: 'Vitali Zelianko',
    url: 'https://www.qobuz.com/us-en/interpreter/vitali-zelianko/35309201',
    badgeLabel: '24-Bit Studio',
    iconType: 'qobuz',
    brandColor: '#307FE2',
  },

  // Developer & Social Networks
  {
    name: 'GitHub',
    category: 'code',
    handle: 'Vitalikdeve',
    url: 'https://github.com/Vitalikdeve',
    badgeLabel: 'Core Architecture',
    iconType: 'github',
    brandColor: '#F0F6FC',
  },
  {
    name: 'X (Twitter)',
    category: 'social',
    handle: '@vitocv_com',
    url: 'https://x.com/vitocv_com?s=11',
    badgeLabel: 'Executive Updates',
    iconType: 'x',
    brandColor: '#FFFFFF',
  },
  {
    name: 'Threads',
    category: 'social',
    handle: '@vitalik_zelenko',
    url: 'https://www.threads.com/@vitalik_zelenko?igshid=NTc4MTIwNjQ2YQ==',
    badgeLabel: 'Engineering Logs',
    iconType: 'threads',
    brandColor: '#FFFFFF',
  },
  {
    name: 'Instagram',
    category: 'social',
    handle: '@vitali_zelianko',
    url: 'https://www.instagram.com/vitali_zelianko?igsh=MWlzYnhvNXkzdXhhcw%3D%3D&utm_source=qr',
    badgeLabel: 'Studio & Life',
    iconType: 'instagram',
    brandColor: '#E1306C',
  },
  {
    name: 'YouTube',
    category: 'social',
    handle: '@vitalizelianko',
    url: 'https://youtube.com/@vitalizelianko?si=obP92Cp-_rUQicyz',
    badgeLabel: 'Releases & Visuals',
    iconType: 'youtube',
    brandColor: '#FF0000',
  },
  {
    name: 'TikTok',
    category: 'social',
    handle: '@vitalizelianko',
    url: 'https://www.tiktok.com/t/ZP8tYncSc/',
    badgeLabel: 'Sound Bites',
    iconType: 'tiktok',
    brandColor: '#25F4EE',
  },
  {
    name: 'Facebook',
    category: 'social',
    handle: 'Vitali Zelianko',
    url: 'https://www.facebook.com/share/17urzu3NvC/?mibextid=wwXIfr',
    badgeLabel: 'Verified Network',
    iconType: 'facebook',
    brandColor: '#1877F2',
  }
];

export default function SocialAppGrid() {
  return (
    <section className="relative py-20 border-t border-white/[0.08] bg-[#020204]">
      <div className="mx-auto max-w-6xl px-6">
        {/* Apple-style Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 pb-6 border-b border-white/[0.06]">
          <div>
            <div className="text-xs font-semibold text-zinc-400 tracking-wider uppercase mb-2">
              Verified Distribution & Channels
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Official Platforms & Networks
            </h2>
            <p className="mt-2 text-sm text-zinc-400 max-w-2xl leading-relaxed">
              Synchronized presence across verified digital streaming services, developer ecosystems, and authorized media channels.
            </p>
          </div>
          <div className="text-xs font-mono text-zinc-500 shrink-0">
            16 Verified Services
          </div>
        </div>

        {/* Apple Squircle Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {APPS.map((app) => (
            <a
              key={app.name}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3.5 rounded-2xl border border-white/[0.07] bg-[#0b0c10] p-3.5 transition-all duration-200 hover:border-white/20 hover:bg-[#12131a] hover:-translate-y-0.5 shadow-sm"
            >
              {/* Apple-grade Squircle Icon Tile */}
              <div 
                className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#161720] border border-white/[0.1] shadow-inner transition-transform group-hover:scale-105"
              >
                {renderOfficialSvg(app.iconType, app.brandColor)}
              </div>

              {/* Text Info */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <span className="font-medium text-sm text-zinc-100 truncate group-hover:text-white transition-colors">
                    {app.name}
                  </span>
                  <ExternalLink className="h-3 w-3 text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </div>
                {app.handle && (
                  <p className="text-xs text-zinc-400 truncate mt-0.5">
                    {app.handle}
                  </p>
                )}
                {app.badgeLabel && (
                  <span className="inline-block text-[10px] font-medium tracking-wide uppercase text-zinc-500 mt-1">
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

function renderOfficialSvg(type: string, brandColor: string) {
  switch (type) {
    case 'spotify':
      // Official Spotify 3-arcs on disc
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="#1DB954">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.502 17.31c-.218.358-.68.472-1.038.254-2.846-1.74-6.428-2.133-10.648-1.168-.41.094-.82-.162-.914-.572-.094-.41.162-.82.572-.914 4.628-1.057 8.583-.615 11.774 1.362.358.218.472.68.254 1.038zm1.47-3.267c-.275.447-.858.59-1.305.315-3.26-2.003-8.23-2.585-12.085-1.414-.5.152-1.032-.132-1.184-.632-.152-.5.132-1.032.632-1.184 4.41-1.338 9.89-.69 13.627 1.61.447.275.59.858.315 1.305zm.126-3.41c-3.91-2.322-10.36-2.535-14.108-1.397-.6.183-1.238-.158-1.42-.758-.182-.6.158-1.238.758-1.42 4.305-1.307 11.423-1.057 15.918 1.61.54.32.715 1.025.395 1.565-.32.54-1.025.715-1.543.4z"/>
        </svg>
      );

    case 'apple':
      // Official Apple Music double-note
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="#FC3C44">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.75 5.5v6.594c0 1.25-.945 2.29-2.19 2.454-1.397.185-2.56-.91-2.56-2.27 0-1.26 1.02-2.28 2.28-2.28.43 0 .83.12 1.17.33V8.3l-4.5 1.08v5.824c0 1.25-.945 2.29-2.19 2.454-1.397.185-2.56-.91-2.56-2.27 0-1.26 1.02-2.28 2.28-2.28.43 0 .83.12 1.17.33V8.1c0-.66.46-1.23 1.11-1.37l5.25-1.26c.72-.17 1.39.37 1.39 1.11v.92z"/>
        </svg>
      );

    case 'tidal':
      // Official TIDAL 4-diamonds logo (Exact geometric specification)
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="#FFFFFF">
          <path d="M12.012 3.992L8.008 7.996l4.004 4.004 4.004-4.004-4.004-4.004zm-8.004 8.004L0 16l3.996 4.004 4.004-4.004-4.004-4.004zm8.004 0L8.008 16l4.004 4.004 4.004-4.004-4.004-4.004zm8.004 0L16.02 16l3.996 4.004 4.004-4.004-4.004-4.004z"/>
        </svg>
      );

    case 'youtube_music':
      // Official YouTube Music concentric circles with inner play triangle
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="#FF0000">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1.5-6v4l3.5-2-3.5-2z"/>
        </svg>
      );

    case 'amazon':
      // Official Amazon Music smile & typography emblem
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="#00A8E1">
          <path d="M13.2 12.3c-.08-1.55-.99-2.22-2.31-2.22-1.36 0-2.2.82-2.36 1.95h-1.8c.2-2.09 1.83-3.47 4.2-3.47 2.5 0 4.12 1.47 4.12 4.02v4.8h-1.73v-1.12c-.75.82-1.75 1.25-2.91 1.25-1.96 0-3.37-1.28-3.37-3.08 0-1.86 1.48-2.99 3.65-2.99 1.1 0 1.92.25 2.51.58v-.72zm-2.15 4.31c1.23 0 2.11-.84 2.15-2.05v-.61c-.5-.27-1.24-.46-2.04-.46-1.25 0-2.03.58-2.03 1.54 0 .97.77 1.58 1.92 1.58zM1.745 15.02c4.137 2.766 9.61 2.91 14.52.88 1.15-.47 2.37-1.12 3.37-1.84.44-.32.96.2.62.65-2.02 2.64-5.32 4.19-8.68 4.34-3.79.16-7.53-1.25-10.4-3.61-.31-.26.04-.63.57-.42zm19.155-.74c.45-.66 1.34-1.92 1.15-2.62-.17-.6-1.39-.77-2.12-.86-1.07-.13-2.12.06-2.25.43-.09.28.32.48 1.01.62.77.16 1.48.51 1.63 1.06.1.37-.18 1.07-.42 1.37z"/>
        </svg>
      );

    case 'shazam':
      // Official Shazam interlocking S emblem
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="#0088FF">
          <path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm-3.13-16.14a3.84 3.84 0 00-2.72 1.13 3.86 3.86 0 000 5.46l2.48 2.48 1.41-1.41-2.48-2.48a1.86 1.86 0 010-2.63 1.86 1.86 0 012.63 0l1.41 1.41 1.41-1.41-1.41-1.41a3.84 3.84 0 00-2.73-1.14zm6.26 4.55l-1.41 1.41 2.48 2.48a1.86 1.86 0 010 2.63 1.86 1.86 0 01-2.63 0l-1.41-1.41-1.41 1.41 1.41 1.41a3.86 3.86 0 005.46 0 3.86 3.86 0 000-5.46l-2.49-2.47z"/>
        </svg>
      );

    case 'genius':
      // Official Genius geometric emblem
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="#FFFF64">
          <path d="M24 0H0v24h24V0zM12.92 18.52c-4.14 0-7.37-3.04-7.37-7.46 0-4.32 3.23-7.58 7.37-7.58 3.21 0 5.67 1.82 6.57 4.59l-2.82 1.07c-.56-1.57-1.92-2.58-3.75-2.58-2.52 0-4.37 2.05-4.37 4.5 0 2.55 1.85 4.54 4.37 4.54 1.84 0 3.19-.92 3.73-2.39h-3.73v-2.73h6.63v7.05h-2.34l-.27-1.59c-.91 1.4-2.47 2.58-4.26 2.58z"/>
        </svg>
      );

    case 'iheart':
      // Official iHeartRadio Heart & Broadcast Waves
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="#C6002B">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          <path d="M10 8v5M12 6.5v8M14 8v5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 'qobuz':
      // Official Qobuz stylized vinyl 'Q'
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="#307FE2">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.48 2.94 8.28 7.03 9.55l-.47 1.77 1.93.52.56-2.11c.31.02.62.03.95.03 5.523 0 10-4.477 10-10S17.523 2 12 2zm0 16c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.69 6-6 6zm0-8c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z"/>
        </svg>
      );

    case 'instagram':
      // Official Instagram glyph
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="#E1306C">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      );

    case 'threads':
      // Official Threads ligature glyph
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#FFFFFF">
          <path d="M12.186 24c-3.69 0-6.425-.97-8.362-2.967C1.886 18.98 1 15.932 1 12.025 1 8.17 1.932 5.093 3.93 2.98 5.88 1.01 8.59 0 12.186 0c3.67 0 6.417.994 8.397 3.038 1.933 2.002 2.87 5.003 2.87 9.17v1.176h-4.394v-1.176c0-3.07-.63-5.232-1.875-6.427C16.03 4.67 14.396 4.09 12.186 4.09c-2.4 0-4.167.682-5.405 2.083C5.59 7.514 5.02 9.49 5.02 12.025c0 2.585.58 4.593 1.782 5.968 1.25 1.42 3.03 2.11 5.384 2.11 2.373 0 4.045-.588 5.114-1.794.757-.852 1.185-2.034 1.272-3.513H12.186v-3.79h8.775c.106 5.253-1.85 9.004-5.83 11.196-1.07.59-2.22.95-3.44.95z"/>
        </svg>
      );

    case 'x':
      // Official mathematical blackboard-bold 𝕏
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#FFFFFF">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      );

    case 'youtube':
      // Official YouTube icon
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="#FF0000">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      );

    case 'tiktok':
      // Official TikTok note glyph
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#FFFFFF">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      );

    case 'facebook':
      // Official Facebook f
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="#1877F2">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      );

    case 'github':
      // Official GitHub Octocat
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="#FFFFFF">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      );

    default:
      return null;
  }
}


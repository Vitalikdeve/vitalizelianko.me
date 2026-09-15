'use client';

import React, { useState } from 'react';
import { 
  ExternalLink, 
  Volume2, 
  Play, 
  Pause 
} from 'lucide-react';
import { Profile } from '@/lib/db';

interface MusicSectionProps {
  profile: Profile;
}

export default function MusicSection({ profile }: MusicSectionProps) {
  const [isPlayingMock, setIsPlayingMock] = useState(false);

  const STREAMING_PLATFORMS = [
    {
      name: 'Spotify',
      url: profile.spotify_url || 'https://open.spotify.com',
      badge: 'Verified Artist Catalog',
      type: 'spotify'
    },
    {
      name: 'Apple Music',
      url: profile.apple_music_url || 'https://music.apple.com',
      badge: 'Spatial Audio / Lossless',
      type: 'apple'
    },
    {
      name: 'Tidal',
      url: profile.tidal_url || 'https://tidal.com',
      badge: 'Hi-Res Lossless Audio',
      type: 'tidal'
    },
    {
      name: 'YouTube Music',
      url: profile.youtube_music_url || 'https://music.youtube.com',
      badge: 'Official Catalog & Visuals',
      type: 'youtube_music'
    },
    {
      name: 'Amazon Music',
      url: profile.amazon_music_url || 'https://music.amazon.com',
      badge: 'HD / Ultra HD Streaming',
      type: 'amazon'
    },
    {
      name: 'Shazam',
      url: profile.shazam_url || 'https://www.shazam.com',
      badge: 'Audio Fingerprint ID',
      type: 'shazam'
    },
    {
      name: 'Genius',
      url: profile.genius_url || 'https://genius.com',
      badge: 'Verified Lyrics & Concept',
      type: 'genius'
    },
    {
      name: 'iHeartRadio',
      url: profile.iheart_url || 'https://www.iheart.com',
      badge: 'Broadcast Radio Distribution',
      type: 'iheart'
    },
    {
      name: 'Qobuz',
      url: profile.qobuz_url || 'https://www.qobuz.com',
      badge: '24-Bit Studio Masters',
      type: 'qobuz'
    }
  ];

  return (
    <section id="music" className="relative py-20 border-t border-white/[0.08] bg-[#020204]">
      <div className="mx-auto max-w-6xl px-6">
        {/* Apple-style Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 pb-6 border-b border-white/[0.06]">
          <div>
            <div className="text-xs font-semibold text-zinc-400 tracking-wider uppercase mb-2">
              Studio Architecture & Discography
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Official Releases & Sonic Engineering
            </h2>
            <p className="mt-2 text-sm text-zinc-400 max-w-2xl leading-relaxed">
              Atmospheric electronic, melodic techno, and cinematic soundscapes. Produced, mastered, and distributed worldwide across all 9 major DSP networks.
            </p>
          </div>

          {/* Minimalist Studio Equalizer Widget */}
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#090a0e] px-4 py-3">
            <button
              onClick={() => setIsPlayingMock(!isPlayingMock)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black hover:bg-zinc-200 transition-colors shadow-sm"
              title="Toggle preview monitor"
            >
              {isPlayingMock ? <Pause className="h-4 w-4 fill-black" /> : <Play className="h-4 w-4 fill-black ml-0.5" />}
            </button>
            <div>
              <div className="text-xs text-zinc-300 font-medium flex items-center gap-2">
                <span>Studio Monitor</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </div>
              <div className="flex items-end gap-1 h-3.5 mt-1">
                {[40, 75, 55, 90, 65, 80, 45, 95, 70, 60, 85, 50].map((height, i) => (
                  <span
                    key={i}
                    className="w-1 rounded-full bg-zinc-300 transition-all duration-300"
                    style={{
                      height: isPlayingMock ? `${height}%` : '25%',
                      opacity: isPlayingMock ? 1 : 0.4
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 9 DSP Platforms with Authentic Individual SVGs */}
        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {STREAMING_PLATFORMS.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-white/[0.07] bg-[#090a0e] p-4 hover:border-white/[0.18] hover:bg-[#0e0f15] transition-all duration-200"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#14151e] border border-white/[0.08] transition-transform group-hover:scale-105">
                  {renderMusicPlatformSvg(platform.type)}
                </div>
                <div className="min-w-0">
                  <h3 className="font-medium text-sm text-zinc-100 group-hover:text-white transition-colors truncate">
                    {platform.name}
                  </h3>
                  <p className="text-xs text-zinc-400 truncate mt-0.5 font-normal">
                    {platform.badge}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 text-xs font-medium text-zinc-400 group-hover:text-white transition-colors shrink-0 ml-2">
                <span>Stream</span>
                <ExternalLink className="h-3 w-3" />
              </div>
            </a>
          ))}
        </div>

        {/* Master Rights & Distribution Notice */}
        <div className="mt-8 rounded-2xl border border-white/[0.07] bg-[#08080c] p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-3">
            <Volume2 className="h-4 w-4 text-zinc-300 shrink-0" />
            <span className="leading-relaxed">
              All recordings, compositions, and master sound stems are registered under international publishing rights (ISRC / UPC). Previews and stems available upon direct licensing inquiry.
            </span>
          </div>
          <a
            href="#contact"
            className="shrink-0 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-xs font-medium text-zinc-200 hover:bg-white/[0.08] hover:text-white transition-colors"
          >
            Licensing & Sync Inquiries
          </a>
        </div>
      </div>
    </section>
  );
}

function renderMusicPlatformSvg(type: string) {
  switch (type) {
    case 'spotify':
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#1DB954">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.502 17.31c-.218.358-.68.472-1.038.254-2.846-1.74-6.428-2.133-10.648-1.168-.41.094-.82-.162-.914-.572-.094-.41.162-.82.572-.914 4.628-1.057 8.583-.615 11.774 1.362.358.218.472.68.254 1.038zm1.47-3.267c-.275.447-.858.59-1.305.315-3.26-2.003-8.23-2.585-12.085-1.414-.5.152-1.032-.132-1.184-.632-.152-.5.132-1.032.632-1.184 4.41-1.338 9.89-.69 13.627 1.61.447.275.59.858.315 1.305zm.126-3.41c-3.91-2.322-10.36-2.535-14.108-1.397-.6.183-1.238-.158-1.42-.758-.182-.6.158-1.238.758-1.42 4.305-1.307 11.423-1.057 15.918 1.61.54.32.715 1.025.395 1.565-.32.54-1.025.715-1.543.4z"/>
        </svg>
      );

    case 'apple':
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#FC3C44">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.75 5.5v6.594c0 1.25-.945 2.29-2.19 2.454-1.397.185-2.56-.91-2.56-2.27 0-1.26 1.02-2.28 2.28-2.28.43 0 .83.12 1.17.33V8.3l-4.5 1.08v5.824c0 1.25-.945 2.29-2.19 2.454-1.397.185-2.56-.91-2.56-2.27 0-1.26 1.02-2.28 2.28-2.28.43 0 .83.12 1.17.33V8.1c0-.66.46-1.23 1.11-1.37l5.25-1.26c.72-.17 1.39.37 1.39 1.11v.92z"/>
        </svg>
      );

    case 'tidal':
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#FFFFFF">
          <path d="M12.012 3.992L8.008 7.996l4.004 4.004 4.004-4.004-4.004-4.004zm-8.004 8.004L0 16l3.996 4.004 4.004-4.004-4.004-4.004zm8.004 0L8.008 16l4.004 4.004 4.004-4.004-4.004-4.004zm8.004 0L16.02 16l3.996 4.004 4.004-4.004-4.004-4.004z"/>
        </svg>
      );

    case 'youtube_music':
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#FF0000">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1.5-6v4l3.5-2-3.5-2z"/>
        </svg>
      );

    case 'amazon':
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#00A8E1">
          <path d="M13.2 12.3c-.08-1.55-.99-2.22-2.31-2.22-1.36 0-2.2.82-2.36 1.95h-1.8c.2-2.09 1.83-3.47 4.2-3.47 2.5 0 4.12 1.47 4.12 4.02v4.8h-1.73v-1.12c-.75.82-1.75 1.25-2.91 1.25-1.96 0-3.37-1.28-3.37-3.08 0-1.86 1.48-2.99 3.65-2.99 1.1 0 1.92.25 2.51.58v-.72zm-2.15 4.31c1.23 0 2.11-.84 2.15-2.05v-.61c-.5-.27-1.24-.46-2.04-.46-1.25 0-2.03.58-2.03 1.54 0 .97.77 1.58 1.92 1.58zM1.745 15.02c4.137 2.766 9.61 2.91 14.52.88 1.15-.47 2.37-1.12 3.37-1.84.44-.32.96.2.62.65-2.02 2.64-5.32 4.19-8.68 4.34-3.79.16-7.53-1.25-10.4-3.61-.31-.26.04-.63.57-.42zm19.155-.74c.45-.66 1.34-1.92 1.15-2.62-.17-.6-1.39-.77-2.12-.86-1.07-.13-2.12.06-2.25.43-.09.28.32.48 1.01.62.77.16 1.48.51 1.63 1.06.1.37-.18 1.07-.42 1.37z"/>
        </svg>
      );

    case 'shazam':
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#0088FF">
          <path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm-3.13-16.14a3.84 3.84 0 00-2.72 1.13 3.86 3.86 0 000 5.46l2.48 2.48 1.41-1.41-2.48-2.48a1.86 1.86 0 010-2.63 1.86 1.86 0 012.63 0l1.41 1.41 1.41-1.41-1.41-1.41a3.84 3.84 0 00-2.73-1.14zm6.26 4.55l-1.41 1.41 2.48 2.48a1.86 1.86 0 010 2.63 1.86 1.86 0 01-2.63 0l-1.41-1.41-1.41 1.41 1.41 1.41a3.86 3.86 0 005.46 0 3.86 3.86 0 000-5.46l-2.49-2.47z"/>
        </svg>
      );

    case 'genius':
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#FFFF64">
          <path d="M24 0H0v24h24V0zM12.92 18.52c-4.14 0-7.37-3.04-7.37-7.46 0-4.32 3.23-7.58 7.37-7.58 3.21 0 5.67 1.82 6.57 4.59l-2.82 1.07c-.56-1.57-1.92-2.58-3.75-2.58-2.52 0-4.37 2.05-4.37 4.5 0 2.55 1.85 4.54 4.37 4.54 1.84 0 3.19-.92 3.73-2.39h-3.73v-2.73h6.63v7.05h-2.34l-.27-1.59c-.91 1.4-2.47 2.58-4.26 2.58z"/>
        </svg>
      );

    case 'iheart':
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#C6002B">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          <path d="M10 8v5M12 6.5v8M14 8v5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 'qobuz':
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#307FE2">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.48 2.94 8.28 7.03 9.55l-.47 1.77 1.93.52.56-2.11c.31.02.62.03.95.03 5.523 0 10-4.477 10-10S17.523 2 12 2zm0 16c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6zm0-8c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z"/>
        </svg>
      );

    default:
      return null;
  }
}

'use client';

import React, { useState } from 'react';
import { 
  Disc, 
  Radio, 
  Headphones, 
  Music, 
  ExternalLink, 
  Volume2, 
  Sparkles,
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
      badge: 'Verified Artist',
      color: 'from-emerald-600 to-green-700',
      textColor: 'text-emerald-300'
    },
    {
      name: 'Apple Music',
      url: profile.apple_music_url || 'https://music.apple.com',
      badge: 'Spatial Audio / Lossless',
      color: 'from-rose-600 to-pink-700',
      textColor: 'text-rose-300'
    },
    {
      name: 'Tidal',
      url: profile.tidal_url || 'https://tidal.com',
      badge: 'Master Quality Authenticated',
      color: 'from-cyan-700 to-blue-900',
      textColor: 'text-cyan-300'
    },
    {
      name: 'YouTube Music',
      url: profile.youtube_music_url || 'https://music.youtube.com',
      badge: 'Official Catalog & Visuals',
      color: 'from-red-600 to-rose-800',
      textColor: 'text-red-300'
    },
    {
      name: 'Amazon Music',
      url: profile.amazon_music_url || 'https://music.amazon.com',
      badge: 'HD / Ultra HD',
      color: 'from-blue-700 to-indigo-900',
      textColor: 'text-sky-300'
    },
    {
      name: 'Shazam',
      url: profile.shazam_url || 'https://www.shazam.com',
      badge: 'Instant Audio Recognition',
      color: 'from-sky-600 to-blue-700',
      textColor: 'text-sky-300'
    },
    {
      name: 'Genius',
      url: profile.genius_url || 'https://genius.com',
      badge: 'Lyrics & Musical Concept Notes',
      color: 'from-amber-500 to-yellow-600',
      textColor: 'text-amber-200'
    },
    {
      name: 'iHeartRadio',
      url: profile.iheart_url || 'https://www.iheart.com',
      badge: 'Broadcast Radio & Playlists',
      color: 'from-red-700 to-rose-900',
      textColor: 'text-rose-200'
    },
    {
      name: 'Qobuz',
      url: profile.qobuz_url || 'https://www.qobuz.com',
      badge: '24-Bit Studio Masters',
      color: 'from-indigo-800 to-slate-900',
      textColor: 'text-indigo-300'
    }
  ];

  return (
    <section id="music" className="relative py-20 border-t border-white/[0.06] bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-wider mb-2">
              <Disc className="h-3.5 w-3.5 animate-spin" />
              Music Studio & Discography
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-white">
              Official Releases & Sonic Productions
            </h2>
            <p className="mt-2 text-slate-400 max-w-2xl">
              Atmospheric electronic, melodic techno, and cinematic sound architecture. Released and streamed worldwide across all 9 premier DSP networks.
            </p>
          </div>

          {/* Studio Equalizer Widget */}
          <div className="flex items-center gap-3 rounded-2xl border border-purple-500/30 bg-purple-950/30 px-4 py-3 backdrop-blur-md">
            <button
              onClick={() => setIsPlayingMock(!isPlayingMock)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500 text-slate-950 hover:bg-purple-400 transition-colors shadow-lg shadow-purple-500/25"
            >
              {isPlayingMock ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 fill-slate-950" />}
            </button>
            <div>
              <div className="text-xs font-mono text-purple-300 font-semibold flex items-center gap-2">
                <span>Studio Master Output</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div className="flex items-end gap-1 h-4 mt-1">
                {[40, 75, 55, 90, 65, 80, 45, 95, 70, 60, 85, 50].map((height, i) => (
                  <span
                    key={i}
                    className="w-1 rounded-full bg-purple-400 transition-all duration-300"
                    style={{
                      height: isPlayingMock ? `${height}%` : '20%',
                      opacity: isPlayingMock ? 1 : 0.4
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 9 Streaming Networks Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STREAMING_PLATFORMS.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${platform.color} shadow-md`}>
                  <Headphones className="h-5 w-5 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-white group-hover:text-purple-300 transition-colors truncate">
                      {platform.name}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 truncate mt-0.5">
                    {platform.badge}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 text-xs font-semibold text-purple-400 shrink-0 ml-2">
                <span>Listen</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </div>
            </a>
          ))}
        </div>

        {/* Master Rights & Distribution Notice */}
        <div className="mt-8 rounded-2xl border border-white/[0.06] bg-slate-950/60 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <Volume2 className="h-5 w-5 text-purple-400 shrink-0" />
            <span>
              All recordings, compositions, and master sound stems are registered under international publishing rights (ISRC / UPC). Previews and stems available upon direct licensing inquiry.
            </span>
          </div>
          <a
            href="#contact"
            className="shrink-0 rounded-xl border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs font-semibold text-purple-300 hover:bg-purple-500/20 transition-colors"
          >
            Licensing & Sync Inquiries
          </a>
        </div>
      </div>
    </section>
  );
}

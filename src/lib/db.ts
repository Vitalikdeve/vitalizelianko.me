import { neon, Pool } from '@neondatabase/serverless';

const connectionString = process.env.DATABASE_URL || '';

export const sql = connectionString ? neon(connectionString) : null;
export const pool = connectionString ? new Pool({ connectionString }) : null;

export interface Profile {
  id: string;
  full_name: string;
  headline: string;
  bio: string;
  avatar_url?: string;
  resume_url?: string;
  email: string;
  github_url: string;
  linkedin_url?: string;
  twitter_url?: string;
  facebook_url?: string;
  threads_url?: string;
  tiktok_url?: string;
  spotify_url?: string;
  apple_music_url?: string;
  tidal_url?: string;
  amazon_music_url?: string;
  youtube_music_url?: string;
  shazam_url?: string;
  genius_url?: string;
  iheart_url?: string;
  qobuz_url?: string;
  location: string;
  education: string;
  all_links?: Record<string, string>;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  category: string;
  tech_stack: string[];
  demo_url?: string;
  github_url?: string;
  case_study_url?: string;
  thumbnail_url?: string;
  metrics?: Record<string, any>;
  architecture_summary?: string;
  code_snippet?: string;
  featured: boolean;
  sort_order: number;
}

export interface PressItem {
  id: string;
  title: string;
  publisher: string;
  url: string;
  description?: string;
  badge_color?: string;
  sort_order: number;
}

export interface MusicTrack {
  id: string;
  slug: string;
  title: string;
  release_type: string;
  release_date: string;
  genre?: string;
  cover_image_url?: string;
  preview_audio_url?: string;
  duration_seconds?: number;
  isrc?: string;
  spotify_url?: string;
  apple_music_url?: string;
  tidal_url?: string;
  amazon_music_url?: string;
  youtube_music_url?: string;
  shazam_url?: string;
  genius_url?: string;
  iheart_url?: string;
  qobuz_url?: string;
  lyrics?: string;
  featured: boolean;
  stream_count: number;
  sort_order: number;
}

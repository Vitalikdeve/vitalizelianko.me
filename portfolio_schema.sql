-- ====================================================================
-- vitalizelianko.me - Portfolio, Projects & Music Discography Schema
-- Compatible with PostgreSQL (Supabase / Neon)
-- ====================================================================

-- 1. Profile / Hero & Bio Table
CREATE TABLE IF NOT EXISTS portfolio_profile (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL DEFAULT 'Vitali Zelianko',
    headline TEXT NOT NULL DEFAULT 'Founder, AI Systems Architect & Music Producer',
    bio TEXT NOT NULL,
    avatar_url TEXT,
    resume_url TEXT,
    email TEXT NOT NULL DEFAULT 'VitaliZelianko@vitocv.com',
    github_url TEXT NOT NULL DEFAULT 'https://github.com/Vitalikdeve',
    linkedin_url TEXT,
    twitter_url TEXT,
    spotify_url TEXT,
    apple_music_url TEXT,
    tidal_url TEXT,
    youtube_music_url TEXT,
    location TEXT DEFAULT 'Warsaw, Poland / Remote',
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Projects Showcase Table
CREATE TABLE IF NOT EXISTS portfolio_projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    tagline TEXT NOT NULL,
    description TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'Founder & Lead Architect',
    category TEXT NOT NULL DEFAULT 'AI & SaaS',
    tech_stack TEXT[] NOT NULL DEFAULT '{}',
    demo_url TEXT,
    github_url TEXT,
    case_study_url TEXT,
    thumbnail_url TEXT,
    metrics JSONB DEFAULT '{}'::jsonb,
    featured BOOLEAN NOT NULL DEFAULT true,
    sort_order INT NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. Music Catalog & Streaming Discography
CREATE TABLE IF NOT EXISTS portfolio_music (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    release_type TEXT NOT NULL DEFAULT 'Single', -- 'Single', 'EP', 'Album'
    release_date DATE NOT NULL,
    genre TEXT DEFAULT 'Electronic / Melodic / Ambient',
    cover_image_url TEXT,
    preview_audio_url TEXT,
    duration_seconds INT,
    isrc TEXT,
    spotify_url TEXT,
    apple_music_url TEXT,
    tidal_url TEXT,
    youtube_music_url TEXT,
    lyrics TEXT,
    featured BOOLEAN NOT NULL DEFAULT true,
    stream_count INT DEFAULT 0,
    sort_order INT NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 4. Inbound Contact & Collaboration Messages
CREATE TABLE IF NOT EXISTS portfolio_contact_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    sender_name TEXT NOT NULL,
    sender_email TEXT NOT NULL,
    subject TEXT,
    message TEXT NOT NULL,
    sender_company TEXT,
    sender_ip_hash TEXT,
    is_read BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 5. Outbound Clicks & High-Level Pageviews
CREATE TABLE IF NOT EXISTS portfolio_analytics (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    event_type TEXT NOT NULL,
    target_id TEXT,
    referrer TEXT,
    user_agent TEXT,
    country_code TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Initial Seed Data: Vitali's flagship projects & profile
INSERT INTO portfolio_profile (
    full_name,
    headline,
    bio,
    email,
    github_url,
    location
) VALUES (
    'Vitali Zelianko',
    'Founder & CEO @ VitoCV · Full-Stack & AI Systems Architect · Music Producer',
    'Architecting resilient production web applications, multi-provider AI failovers, and streaming data platforms. Founder of VitoCV / ResumeAI and creator of open-source developer tooling.',
    'VitaliZelianko@vitocv.com',
    'https://github.com/Vitalikdeve',
    'Warsaw, Poland / Remote'
) ON CONFLICT DO NOTHING;

INSERT INTO portfolio_projects (
    slug, title, tagline, description, role, category, tech_stack, demo_url, github_url, case_study_url, featured, sort_order
) VALUES 
(
    'vitocv',
    'ResumeAI (VitoCV)',
    'AI-powered multilingual career platform with ATS scoring and resilient model failovers',
    'A high-scale career platform featuring ATS algorithmic scanning, dual-mode PDF compilation, 9-language localization, bank-grade Row-Level Security, and multi-model cascade orchestration (Gemini, Mistral, OpenAI).',
    'Founder, CEO & Full-Stack Architect',
    'AI & SaaS',
    ARRAY['Next.js 15', 'TypeScript', 'PostgreSQL', 'Supabase', 'TailwindCSS', 'Capacitor Android', 'Playwright'],
    'https://vitocv.com',
    'https://github.com/Vitalikdeve/resumeai',
    'https://github.com/Vitalikdeve/resumeai-case-study',
    true,
    1
),
(
    'next-ai-toolkit',
    'next-ai-toolkit',
    'Lightweight TypeScript toolkit for resilient multi-provider AI streaming and LLM failovers',
    'Production-ready SDK for Next.js and Node.js implementing cascading LLM failovers, circuit breakers, exponential jitter backoff, streaming cancellation, and token cost telemetry.',
    'Author & Maintainer',
    'Developer Tools',
    ARRAY['TypeScript', 'Vitest', 'Node.js', 'Next.js', 'GitHub Actions'],
    NULL,
    'https://github.com/Vitalikdeve/next-ai-toolkit',
    NULL,
    true,
    2
),
(
    'megaconvert-v2',
    'MegaConvert v2',
    'Distributed media and document transformation engine with BullMQ worker pools',
    'Asynchronous distributed file transformation platform featuring containerized worker sandboxing, real-time WebSocket progress telemetry, and batch media transcoding.',
    'Lead Engineer',
    'Distributed Systems',
    ARRAY['Node.js', 'Fastify', 'Redis', 'BullMQ', 'Docker', 'FFmpeg', 'Tesseract OCR'],
    NULL,
    'https://github.com/Vitalikdeve/megaconvert-v2',
    NULL,
    true,
    3
),
(
    'megatransfer',
    'MegaTransfer',
    'Chunked resumable file streaming with deterministic hashing and WebSocket pipelines',
    'Resilient high-throughput file transfer platform with deterministic chunk hashing, automatic resumable sessions, and direct stream disk buffering.',
    'Lead Engineer',
    'Distributed Systems',
    ARRAY['TypeScript', 'WebSockets', 'Node.js', 'Chunked Streaming', 'Docker'],
    NULL,
    'https://github.com/Vitalikdeve/MegaTransfer',
    NULL,
    true,
    4
)
ON CONFLICT (slug) DO NOTHING;

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://vitalizelianko.me'),
  title: {
    default: 'Vitali Zelianko — Founder & CEO @ VitoCV · AI Systems Architect · Electronic Music Producer',
    template: '%s | Vitali Zelianko'
  },
  description: 'Official portfolio and systems engineering showcase of Vitali Zelianko. Founder & CEO of VitoCV (ResumeAI), creator of next-ai-toolkit and MegaConvert, and electronic music producer distributed on Spotify, Apple Music, and Tidal.',
  keywords: [
    'Vitali Zelianko',
    'Vitalikdeve',
    'Vitali Zelenko',
    'VitoCV',
    'ResumeAI',
    'AI Systems Architect',
    'SaaS Founder',
    'next-ai-toolkit',
    'MegaConvert',
    'MegaTransfer',
    'Electronic Music Producer',
    'Spotify Artist',
    'Apple Music Vitali Zelianko',
    'Tidal Artist',
    'Communications Academy',
    'Full Stack Engineer',
    'ATS Resume Vitali Zelianko',
    'TypeScript',
    'Next.js 15'
  ],
  authors: [{ name: 'Vitali Zelianko', url: 'https://vitalizelianko.me' }],
  creator: 'Vitali Zelianko',
  publisher: 'Vitali Zelianko',
  openGraph: {
    type: 'profile',
    firstName: 'Vitali',
    lastName: 'Zelianko',
    username: 'Vitalikdeve',
    locale: 'en_US',
    url: 'https://vitalizelianko.me',
    siteName: 'Vitali Zelianko — Official Platform',
    title: 'Vitali Zelianko — Founder & CEO @ VitoCV · AI Systems Architect · Electronic Music Producer',
    description: 'Founder & CEO of VitoCV (ResumeAI), creator of next-ai-toolkit and MegaConvert, and electronic music producer distributed worldwide.',
    images: [
      {
        url: '/vitali-zelianko.jpg',
        width: 800,
        height: 1200,
        alt: 'Vitali Zelianko Official Portrait'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vitali Zelianko — Founder & CEO @ VitoCV · AI Architect',
    description: 'Founder & CEO of VitoCV (ResumeAI), builder of resilient AI cascades and electronic soundscapes.',
    creator: '@vitocv_com',
    images: ['/vitali-zelianko.jpg']
  },
  verification: {
    google: 'google-site-verification-vitalizelianko',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://vitalizelianko.me',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://vitalizelianko.me/#person',
        name: 'Vitali Zelianko',
        alternateName: ['Vitalikdeve', 'Vitali Zelenko'],
        image: 'https://vitalizelianko.me/vitali-zelianko.jpg',
        jobTitle: 'Founder, CEO & AI Systems Architect',
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'Communications Academy'
        },
        worksFor: {
          '@type': 'Organization',
          name: 'VitoCV',
          url: 'https://vitocv.com'
        },
        description: 'Founder & CEO @ VitoCV, builder of multi-provider AI failovers and distributed file systems, and electronic music producer.',
        url: 'https://vitalizelianko.me',
        sameAs: [
          'https://github.com/Vitalikdeve',
          'https://open.spotify.com/artist/5tjCSnC4R007H7E5ODqLs4?si=LQtgztahRTyel1schcUUUA&utm_source=copy-link',
          'https://music.apple.com/tr/artist/vitali-zelianko/6786468164',
          'https://tidal.com/artist/81979301/u',
          'https://music.amazon.com/artists/B0H5NR8FTW/vitali-zelianko?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_oVY4x2K2ijYXXtfZssWlm3GpX',
          'https://music.youtube.com/@VitaliZelianko',
          'https://www.shazam.com/artist/vitali-zelianko/6786468164',
          'https://genius.com/artists/Vitali-zelianko/albums',
          'https://www.iheart.com/artist/vitali-zelianko-51235341',
          'https://www.qobuz.com/us-en/interpreter/vitali-zelianko/35309201',
          'https://www.instagram.com/vitali_zelianko?igsh=MWlzYnhvNXkzdXhhcw%3D%3D&utm_source=qr',
          'https://www.threads.com/@vitalik_zelenko?igshid=NTc4MTIwNjQ2YQ==',
          'https://x.com/vitocv_com?s=11',
          'https://youtube.com/@vitalizelianko?si=obP92Cp-_rUQicyz',
          'https://www.tiktok.com/t/ZP8tYncSc/',
          'https://www.facebook.com/share/17urzu3NvC/?mibextid=wwXIfr',
          'https://www.crunchbase.com/organization/vitocv',
          'https://commons.wikimedia.org/wiki/File:Vitali_Zelianko_portrait.jpg'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://vitalizelianko.me/#website',
        url: 'https://vitalizelianko.me',
        name: 'Vitali Zelianko Official Platform',
        publisher: {
          '@id': 'https://vitalizelianko.me/#person'
        }
      }
    ]
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#07080c] text-slate-100 selection:bg-sky-500/30 selection:text-sky-200">
        {children}
      </body>
    </html>
  );
}

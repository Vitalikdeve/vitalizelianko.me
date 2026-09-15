import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://vitalizelianko.me'),
  title: {
    default: 'Vitali Zelianko — Founder, AI Systems Architect & Music Producer',
    template: '%s | Vitali Zelianko'
  },
  description: 'Official personal portfolio of Vitali Zelianko. Founder & CEO at VitoCV (ResumeAI), builder of distributed AI systems, developer tools, and electronic music producer.',
  keywords: [
    'Vitali Zelianko',
    'Vitalikdeve',
    'VitoCV',
    'ResumeAI',
    'AI Systems Architect',
    'SaaS Founder',
    'Full Stack Developer',
    'Electronic Music Producer',
    'Spotify Artist',
    'next-ai-toolkit',
    'TypeScript',
    'Next.js 15'
  ],
  authors: [{ name: 'Vitali Zelianko', url: 'https://vitalizelianko.me' }],
  creator: 'Vitali Zelianko',
  publisher: 'Vitali Zelianko',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vitalizelianko.me',
    siteName: 'Vitali Zelianko',
    title: 'Vitali Zelianko — Founder, AI Systems Architect & Music Producer',
    description: 'Founder & CEO at VitoCV (ResumeAI), builder of distributed systems and electronic music producer.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vitali Zelianko Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vitali Zelianko — Founder & AI Systems Architect',
    description: 'Founder & CEO at VitoCV (ResumeAI), builder of distributed systems and electronic music producer.',
    creator: '@Vitalikdeve',
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
        alternateName: 'Vitalikdeve',
        jobTitle: 'Founder, CEO & AI Systems Architect',
        worksFor: {
          '@type': 'Organization',
          name: 'VitoCV',
          url: 'https://vitocv.com'
        },
        description: 'Founder & CEO at VitoCV (ResumeAI), software engineer specializing in resilient multi-provider AI systems, and music producer.',
        url: 'https://vitalizelianko.me',
        sameAs: [
          'https://github.com/Vitalikdeve',
          'https://open.spotify.com/artist/vitalizelianko',
          'https://vitocv.com'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://vitalizelianko.me/#website',
        url: 'https://vitalizelianko.me',
        name: 'Vitali Zelianko Official Website',
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
      <body className="min-h-screen selection:bg-sky-500/30 selection:text-sky-200">
        {children}
      </body>
    </html>
  );
}

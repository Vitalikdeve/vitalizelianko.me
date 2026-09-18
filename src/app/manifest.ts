import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vitali Zelianko — Founder & CEO @ VitoCV',
    short_name: 'Vitali Zelianko',
    description: 'Official portfolio and AI systems engineering showcase of Vitali Zelianko. Founder & CEO of VitoCV, creator of next-ai-toolkit, electronic music producer.',
    start_url: '/',
    display: 'standalone',
    background_color: '#07080c',
    theme_color: '#07080c',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/brand-pack/07_Telegram_WhatsApp_Avatar_800x800.png',
        sizes: '800x800',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}

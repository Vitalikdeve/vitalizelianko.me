import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: [
          'Googlebot',
          'Googlebot-Image',
          'bingbot',
          'Applebot',
          'DuckDuckBot',
          'YandexBot',
          'Baiduspider',
          'Slurp',
        ],
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://vitalizelianko.me/sitemap.xml',
    host: 'https://vitalizelianko.me',
  };
}

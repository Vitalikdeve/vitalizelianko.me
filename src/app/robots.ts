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
          'Applebot-Extended',
          'DuckDuckBot',
          'YandexBot',
          'Baiduspider',
          'Slurp',
          'GPTBot',
          'ChatGPT-User',
          'OAI-SearchBot',
          'PerplexityBot',
          'ClaudeBot',
          'anthropic-ai',
          'Google-Extended',
          'CCBot',
          'cohere-ai',
        ],
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://vitalizelianko.me/sitemap.xml',
    host: 'https://vitalizelianko.me',
  };
}

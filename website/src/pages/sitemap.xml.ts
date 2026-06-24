import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async (context) => {
  const siteUrl = (context.site?.toString() || 'https://logicalnutrition.com').replace(/\/$/, '');

  const staticRoutes = [
    '/',
    '/suplementos',
    '/nosotros',
    '/faq',
    '/envios',
    '/contacto',
    '/guia',
    '/guia/creatina-completa',
    '/guia/citrulina-vs-arginina',
    '/guia/leer-etiquetas',
    '/terminos',
    '/privacidad',
  ];

  const supplements = await getCollection('supplements');

  const urls = [
    ...staticRoutes.map((route) => ({ loc: `${siteUrl}${route}`, priority: route === '/' ? '1.0' : '0.7' })),
    ...supplements.map((s) => ({ loc: `${siteUrl}/suplementos/${s.id}`, priority: '0.8' })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((url) => `  <url>\n    <loc>${url.loc}</loc>\n    <priority>${url.priority}</priority>\n  </url>`)
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};

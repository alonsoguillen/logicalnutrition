import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async (context) => {
  const siteUrl = (context.site?.toString() || 'https://logicalnutrition.com').replace(/\/$/, '');

  const guides = [
    {
      title: 'Guía completa de la creatina',
      description: 'Todo lo que necesitas saber sobre creatina monohidratada.',
      slug: 'creatina-completa',
      pubDate: new Date('2025-05-01'),
    },
    {
      title: 'L-Citrulina vs L-Arginina',
      description: 'Comparativa basada en evidencia sobre precursores de óxido nítrico.',
      slug: 'citrulina-vs-arginina',
      pubDate: new Date('2025-05-05'),
    },
    {
      title: 'Cómo leer una etiqueta de suplemento',
      description: 'Aprende a identificar dosis efectivas y evitar trucos de marketing.',
      slug: 'leer-etiquetas',
      pubDate: new Date('2025-05-10'),
    },
  ];

  const supplements = await getCollection('supplements');

  const items = [
    ...guides.map((guide) => ({
      title: guide.title,
      description: guide.description,
      link: `${siteUrl}/guia/${guide.slug}`,
      pubDate: guide.pubDate,
    })),
    ...supplements.map((s) => ({
      title: s.data.title,
      description: s.data.description,
      link: `${siteUrl}/suplementos/${s.id}`,
      pubDate: new Date(),
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Logical Nutrition</title>
    <link>${siteUrl}</link>
    <description>Suplementos con respaldo científico y guías de suplementación basadas en evidencia.</description>
    <language>es</language>
${items
  .map(
    (item) => `    <item>\n      <title>${escapeXml(item.title)}</title>\n      <link>${item.link}</link>\n      <description>${escapeXml(item.description)}</description>\n      <pubDate>${item.pubDate.toUTCString()}</pubDate>\n    </item>`
  )
  .join('\n')}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

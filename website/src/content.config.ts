import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const supplements = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/supplements' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    shortDescription: z.string().optional(),
    tags: z.array(z.string()),
    badge: z.string().optional(),
    price: z.number().optional(),
    currency: z.string().default('PEN'),
    servingSize: z.string().optional(),
    servingsPerContainer: z.number().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    flavor: z.string().optional(),
    ingredients: z.string().optional(),
    allergens: z.string().optional(),
    warnings: z.string().optional(),
    certificateUrl: z.string().optional(),
    related: z.array(z.string()).default([]),
    benefits: z.array(z.string()).default([]),
    howToUse: z.string().optional(),
    scienceSummary: z.string().optional(),
    studies: z
      .array(
        z.object({
          title: z.string(),
          journal: z.string().optional(),
          year: z.number().optional(),
          url: z.string().optional(),
        })
      )
      .default([]),
    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      )
      .default([]),
  }),
});

export const collections = { supplements };

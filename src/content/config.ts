import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.union([z.string(), z.array(z.string())]).optional().default([]),
    categories: z.union([z.string(), z.array(z.string())]).optional().default([]),
    description: z.string().optional(),
  }),
});

const art = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.enum(['photography', 'painting']),
    date: z.coerce.date(),
    image: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { blog, art };

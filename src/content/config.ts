import { defineCollection, z } from 'astro:content';

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  tags: z.array(z.string()).default([]),
});

const author1 = defineCollection({
  type: 'content',
  schema: postSchema,
});

const author2 = defineCollection({
  type: 'content',
  schema: postSchema,
});

const author3 = defineCollection({
  type: 'content',
  schema: postSchema,
});

export const collections = { author1, author2, author3 };

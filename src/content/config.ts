import { defineCollection, z } from 'astro:content';

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  tags: z.array(z.string()).default([]),
});

const defaultCollection = defineCollection({
  type: 'content',
  schema: postSchema,
});

const aiGeneratedCollection = defineCollection({
  type: 'content',
  schema: postSchema,
});

export const collections = {
  default: defaultCollection,
  'ai-generated': aiGeneratedCollection,
};

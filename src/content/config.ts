import { defineCollection, z } from 'astro:content';

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  tags: z.array(z.string()).default([]),
});

const moodTrackerSchema = z.object({
  title: z.string(),
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

const moodTrackerCollection = defineCollection({
  type: 'content',
  schema: moodTrackerSchema,
});

export const collections = {
  default: defaultCollection,
  'ai-generated': aiGeneratedCollection,
  'mood-tracker': moodTrackerCollection,
};

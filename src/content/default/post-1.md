---
title: 'Getting Started with Astro Content Collections'
description: 'Learn how to use Astro Content Collections to manage your blog posts with type-safe frontmatter and markdown support.'
pubDate: 2025-01-15
tags: ['astro', 'tutorial', 'content-collections']
---

## Introduction to Content Collections

Content Collections in Astro provide a powerful way to manage your content with built-in type safety and validation.

### Key Benefits

- **Type Safety** - Define schemas with Zod for compile-time validation
- **Automatic Imports** - No need to manually import markdown files
- **Rich Querying** - Filter and sort content with ease
- **Better DX** - TypeScript autocompletion for frontmatter

### Basic Usage

Here's how to query posts from a collection:

```typescript
import { getCollection } from 'astro:content';

const posts = await getCollection('default');
```

### Frontmatter Schema

Define your schema in `src/content/config.ts`:

```typescript
const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  tags: z.array(z.string()).default([]),
});
```

### Rendering Content

Render markdown content in your pages:

```astro
---
const { Content } = await entry.render();
---
<Content />
```

### Conclusion

Content Collections make it easy to build scalable, maintainable content-driven sites with Astro.

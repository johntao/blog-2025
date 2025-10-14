// @ts-check
import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://johntao.github.io',
  base: 'blog-2025',
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});

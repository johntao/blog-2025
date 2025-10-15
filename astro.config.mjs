// @ts-check
import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  // site: 'https://johntao.github.io',
  // base: 'blog-2025',
  site: 'https://www.johntao.dev',
  build: {
    format: 'file' // Creates about.html instead of about/index.html
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});

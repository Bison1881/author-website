// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://Bison1881.github.io',
  base: '/author-website',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});

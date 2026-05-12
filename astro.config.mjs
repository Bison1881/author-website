// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://Bison1881.github.io',
  base: '/author-website',
  vite: {
    plugins: [tailwindcss()]
  }
});
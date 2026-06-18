// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

const isProd = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: 'https://rimba-maker.github.io',
  base: isProd ? '/freshfold-laundry-landing' : '/',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
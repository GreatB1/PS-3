// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://greatb1.github.io',
  base: '/PS-3',
  integrations: [react()]
});

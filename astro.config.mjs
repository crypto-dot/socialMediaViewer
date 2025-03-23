// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://social-media-viewer.example.com',
  compressHTML: true,
  output: 'static',

  build: {
      assets: 'assets'
	},

  server: {
      port: 4321,
      host: true
	},

  integrations: [react()]
});
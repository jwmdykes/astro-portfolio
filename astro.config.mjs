// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 4444,
    // remote cloudflare tunnel for testing on safari browser on MacOS
    allowedHosts: ['housewives-developed-assurance-batman.trycloudflare.com']
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
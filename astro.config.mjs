import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  compressHTML: true,
  security: {
    checkOrigin: true,
  },
  vite: {
    plugins: [{
      name: 'csp-headers',
      transformIndexHtml() {
        return [
          {
            tag: 'meta',
            attrs: {
              'http-equiv': 'Content-Security-Policy',
              content: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; form-action 'self'; base-uri 'self'",
            },
            injectTo: 'head',
          },
          {
            tag: 'meta',
            attrs: {
              'http-equiv': 'X-Content-Type-Options',
              content: 'nosniff',
            },
            injectTo: 'head',
          },
        ];
      },
    }],
  },
});

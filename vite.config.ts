import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv, type Plugin } from 'vite';

// @ts-ignore -- plain JS shared module without type declarations
import { handleContactRequest } from './server/contact.mjs';

export default defineConfig(({ mode }) => {
  // Server-side .env values (NEVER exposed to the client bundle).
  const env = loadEnv(mode, process.cwd(), '');

  // Mount POST /api/contact in the dev server so the contact form works
  // locally without shipping RESEND_API_KEY to the browser.
  const contactApiPlugin: Plugin = {
    name: 'amitrax-contact-api',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (process.env.RESEND_API_KEY === undefined && env.RESEND_API_KEY)
          process.env.RESEND_API_KEY = env.RESEND_API_KEY;
        if (!process.env.CONTACT_TO && env.CONTACT_TO) process.env.CONTACT_TO = env.CONTACT_TO;
        if (!process.env.RESEND_FROM && env.RESEND_FROM) process.env.RESEND_FROM = env.RESEND_FROM;
        return handleContactRequest(req, res, next);
      });
    },
  };

  return {
    plugins: [react(), tailwindcss(), contactApiPlugin],
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify: file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
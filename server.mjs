/**
 * Minimal Node server that:
 *  1. Serves the Vite production build (dist/) with SPA fallback.
 *  2. Proxies POST /api/contact → Resend using RESEND_API_KEY from env.
 *
 * Usage:
 *   npm run build
 *   npm run start        # or: node server.mjs
 *
 * RESEND_API_KEY (and optionally CONTACT_TO / RESEND_FROM) must be set in
 * the shell environment or placed in a .env file at the project root.
 */

import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { handleContactRequest } from './server/contact.mjs';

// Load .env if present (Node ≥ 21.7)
try {
  process.loadEnvFile(path.join(process.cwd(), '.env'));
} catch {
  /* no .env file — rely on real env vars */
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, 'dist');
const PORT = Number(process.env.PORT || 4173);

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
};

const server = http.createServer(async (req, res) => {
  // ── API routes ──────────────────────────────────────────────────────────────
  if (req.url?.startsWith('/api/')) {
    const handled = await handleContactRequest(req, res);
    if (handled) return;
    res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end('{"error":"Not found"}');
    return;
  }

  // ── Static file serving from dist/ ──────────────────────────────────────────
  const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
  const relative = urlPath === '/' ? 'index.html' : urlPath.replace(/^\/+/, '');
  const filePath = path.normalize(path.join(DIST, relative));

  // Prevent path-traversal outside dist/
  if (!filePath.startsWith(DIST)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  try {
    const info = await stat(filePath);
    if (info.isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
      createReadStream(filePath).pipe(res);
      return;
    }
  } catch {
    /* file not found → fall through to SPA fallback */
  }

  // SPA fallback → serve index.html for client-side routing
  try {
    const indexHtml = await readFile(path.join(DIST, 'index.html'));
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(indexHtml);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Build output not found. Run `npm run build` first.');
  }
});

server.listen(PORT, () => {
  console.log(`\n  ➜  AmitraX  http://localhost:${PORT}\n`);
});

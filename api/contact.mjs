/**
 * Vercel serverless function for POST /api/contact.
 *
 * Vercel static hosting does NOT run server.mjs or the Vite dev middleware,
 * so the contact form needs its own serverless function. This reuses the
 * same Resend logic as server/contact.mjs, adapted to Vercel's Node
 * handler signature (req, res).
 *
 * Env vars (set in Vercel project → Settings → Environment Variables):
 *   RESEND_API_KEY  — required
 *   CONTACT_TO      — where inquiries are delivered. With the unverified
 *                     onboarding@resend.dev sender, Resend only delivers
 *                     to the account owner email.
 *   RESEND_FROM     — sender. "onboarding@resend.dev" works for testing;
 *                     use a verified-domain sender in production.
 */

import { handleContactRequest } from '../server/contact.mjs';

export default async function handler(req, res) {
  await handleContactRequest(req, res, () => {
    res.status(404).json({ error: 'Not found.' });
  });
}
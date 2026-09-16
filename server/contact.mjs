/**
 * Shared Resend contact handler used by both the Vite dev middleware
 * and the standalone production server.
 *
 * POST /api/contact  —  JSON body:
 *   fullName, email, organization?, inquiryType?, problemStatement
 */

const DEFAULT_TO = 'piyush.singhal.2004@gmail.com';
const DEFAULT_FROM = 'AmitraX Website <onboarding@resend.dev>';
const MAX_BODY_BYTES = 64 * 1024;

// ---------- helpers -----------------------------------------------------------------

function respond(res, status, body) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(body));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    let tooLarge = false;
    req.on('data', (chunk) => {
      if (tooLarge) return;
      body += chunk;
      if (body.length > MAX_BODY_BYTES) {
        tooLarge = true;
        req.destroy();
      }
    });
    req.on('end', () => (tooLarge ? reject(new Error('TOO_LARGE')) : resolve(body)));
    req.on('error', reject);
  });
}

function validate(payload) {
  const fullName = String(payload.fullName || '').trim();
  const email = String(payload.email || '').trim();
  const organization = String(payload.organization || '').trim();
  const inquiryType = String(payload.inquiryType || 'General inquiry').trim();
  const problemStatement = String(payload.problemStatement || '').trim();

  if (!fullName) return { ok: false, error: 'Please provide your name.' };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return { ok: false, error: 'Please provide a valid email address.' };
  if (!problemStatement)
    return { ok: false, error: 'Please describe your problem or inquiry.' };

  return {
    ok: true,
    data: { fullName, email, organization: organization || 'N/A', inquiryType, problemStatement },
  };
}

// ---------- public handler -----------------------------------------------------------

export async function handleContactRequest(req, res, next) {
  if (req.method !== 'POST' || !req.url?.startsWith('/api/contact')) {
    if (next) return next();
    return false;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || DEFAULT_TO;
  const from = process.env.RESEND_FROM || DEFAULT_FROM;

  // --- parse body -----------------------------------------------------------
  let raw;
  try {
    raw = await readBody(req);
  } catch {
    respond(res, 413, { error: 'Message too large. Please keep it under 64 KB.' });
    return true;
  }

  let parsed;
  try {
    parsed = JSON.parse(raw || '{}');
  } catch {
    respond(res, 400, { error: 'Invalid JSON body.' });
    return true;
  }

  // --- validate -------------------------------------------------------------
  const check = validate(parsed);
  if (!check.ok) {
    respond(res, 400, { error: check.error });
    return true;
  }

  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not configured.');
    respond(res, 500, { error: 'Server misconfiguration — email service key is missing.' });
    return true;
  }

  // --- call Resend ----------------------------------------------------------
  const { data } = check;
  const subject = `[AmitraX Inquiry: ${data.inquiryType}] ${data.fullName}`;
  const text = [
    `Name: ${data.fullName}`,
    `Email: ${data.email}`,
    `Organization: ${data.organization}`,
    `Inquiry Type: ${data.inquiryType}`,
    '',
    'Problem / Project Description:',
    data.problemStatement,
  ].join('\n');

  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        text,
        reply_to: data.email,
      }),
    });

    const json = await resendRes.json().catch(() => ({}));

    if (!resendRes.ok) {
      const msg = json?.message || `Resend error (${resendRes.status})`;
      console.error('[contact] Resend rejected:', msg);
      respond(res, 502, { error: msg });
      return true;
    }

    respond(res, 200, { ok: true, id: json.id });
  } catch (err) {
    console.error('[contact] Could not reach Resend:', err);
    respond(res, 502, { error: 'Could not reach the email service. Please try again.' });
  }

  return true;
}

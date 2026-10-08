// api/contact.ts - Secure serverless endpoint for contact form submissions
import type { IncomingMessage, ServerResponse } from 'http';

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function processContactSubmission(payload: ContactPayload) {
  const { name, email, subject, message } = payload;

  if (!name || name.trim().length < 2) {
    return { status: 400, data: { success: false, error: 'Please provide a valid name (at least 2 characters).' } };
  }
  if (!email || !validateEmail(email.trim())) {
    return { status: 400, data: { success: false, error: 'Please provide a valid email address.' } };
  }
  if (!subject || subject.trim().length < 2) {
    return { status: 400, data: { success: false, error: 'Please provide a valid subject.' } };
  }
  if (!message || message.trim().length < 5) {
    return { status: 400, data: { success: false, error: 'Please provide a message with at least 5 characters.' } };
  }

  const cleanName = name.trim();
  const cleanEmail = email.trim();
  const cleanSubject = subject.trim();
  const cleanMessage = message.trim();

  // 1. Check for Resend API Key
  const resendApiKey = process.env.RESEND_API_KEY;
  if (resendApiKey) {
    try {
      const recipientEmail = process.env.CONTACT_EMAIL || 'aravindyallao@gmail.com';
      const fromEmail = process.env.RESEND_FROM || 'Portfolio Contact <onboarding@resend.dev>';

      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [recipientEmail],
          reply_to: cleanEmail,
          subject: `[Portfolio Contact] ${cleanSubject} — from ${cleanName}`,
          text: `Name: ${cleanName}\nEmail: ${cleanEmail}\nSubject: ${cleanSubject}\n\nMessage:\n${cleanMessage}`,
          html: `
            <div style="font-family: sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h2 style="color: #0284c7; margin-top: 0;">New Portfolio Message</h2>
              <p><strong>From:</strong> ${cleanName} &lt;<a href="mailto:${cleanEmail}">${cleanEmail}</a>&gt;</p>
              <p><strong>Subject:</strong> ${cleanSubject}</p>
              <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
              <p style="white-space: pre-wrap; background: #f8fafc; padding: 16px; border-radius: 6px;">${cleanMessage}</p>
              <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
              <p style="font-size: 12px; color: #64748b;">Sent securely via Aravind Naidu Yalla Portfolio serverless endpoint.</p>
            </div>
          `,
        }),
      });

      if (res.ok) {
        return {
          status: 200,
          data: {
            success: true,
            message: 'Thanks for reaching out! Your message has been sent successfully.',
          },
        };
      } else {
        const errorData = await res.json().catch(() => ({}));
        console.error('Resend error:', errorData);
      }
    } catch (err) {
      console.error('Resend delivery exception:', err);
    }
  }

  // 2. Check for Web3Forms Access Key
  const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (web3formsKey) {
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: web3formsKey,
          name: cleanName,
          email: cleanEmail,
          subject: `Portfolio Contact: ${cleanSubject}`,
          message: cleanMessage,
          from_name: 'Aravind Naidu Portfolio',
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (data.success) {
        return {
          status: 200,
          data: {
            success: true,
            message: 'Thanks for reaching out! Your message has been sent successfully.',
          },
        };
      }
      console.error('Web3Forms error:', data);
    } catch (err) {
      console.error('Web3Forms exception:', err);
    }
  }

  // 3. Check for Formspree Key / Form ID
  const formspreeId = process.env.FORMSPREE_ID;
  if (formspreeId) {
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: cleanName,
          email: cleanEmail,
          subject: cleanSubject,
          message: cleanMessage,
        }),
      });
      if (res.ok) {
        return {
          status: 200,
          data: {
            success: true,
            message: 'Thanks for reaching out! Your message has been sent successfully.',
          },
        };
      }
    } catch (err) {
      console.error('Formspree exception:', err);
    }
  }

  // If no email dispatch service is configured in the environment
  return {
    status: 503,
    data: {
      success: false,
      configured: false,
      error: 'Something went wrong while sending your message. Please try again or contact me directly by email.',
      mailtoUrl: `mailto:aravindyallao@gmail.com?subject=${encodeURIComponent('Portfolio Contact - ' + cleanSubject)}&body=${encodeURIComponent('From: ' + cleanName + ' (' + cleanEmail + ')\n\n' + cleanMessage)}`,
    },
  };
}

// Universal handler supporting Vercel Edge/Serverless (Fetch Request) and Node.js
export default async function handler(req: any, res?: any) {
  if (req instanceof Request || (req.method && typeof req.json === 'function')) {
    if (req.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    try {
      const body = await req.json();
      const result = await processContactSubmission(body);
      return new Response(JSON.stringify(result.data), {
        status: result.status,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Something went wrong while sending your message. Please try again or contact me directly by email.',
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
  }

  // Node.js IncomingMessage / ServerResponse handler
  const nodeReq = req as IncomingMessage;
  const nodeRes = res as ServerResponse;

  if (nodeReq.method !== 'POST') {
    nodeRes.statusCode = 405;
    nodeRes.setHeader('Content-Type', 'application/json');
    nodeRes.end(JSON.stringify({ error: 'Method Not Allowed' }));
    return;
  }

  let bodyStr = '';
  nodeReq.on('data', (chunk) => {
    bodyStr += chunk;
  });

  nodeReq.on('end', async () => {
    try {
      const body = JSON.parse(bodyStr || '{}');
      const result = await processContactSubmission(body);
      nodeRes.statusCode = result.status;
      nodeRes.setHeader('Content-Type', 'application/json');
      nodeRes.end(JSON.stringify(result.data));
    } catch {
      nodeRes.statusCode = 500;
      nodeRes.setHeader('Content-Type', 'application/json');
      nodeRes.end(
        JSON.stringify({
          success: false,
          error: 'Something went wrong while sending your message. Please try again or contact me directly by email.',
        })
      );
    }
  });
}

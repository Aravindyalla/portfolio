// api/chat.ts - Secure serverless endpoint for Aravind AI portfolio assistant
import type { IncomingMessage, ServerResponse } from 'http';
import { AI_SYSTEM_PROMPT, getOfflineAnswer } from '../src/data/aiKnowledge.ts';

export async function processChatQuery(message: string) {
  const query = (message || '').trim();
  if (!query) {
    return {
      status: 400,
      data: { error: 'Please provide a message.' },
    };
  }

  // 1. Check for OpenAI API Key
  const openaiKey = process.env.OPENAI_API_KEY;
  if (openaiKey) {
    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openaiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
          temperature: 0.2, // Strict temperature to prevent hallucinations
          max_tokens: 450,
          messages: [
            { role: 'system', content: AI_SYSTEM_PROMPT },
            { role: 'user', content: query },
          ],
        }),
      });

      if (res.ok) {
        const json = await res.json();
        const answerText = json.choices?.[0]?.message?.content?.trim();
        if (answerText) {
          // Detect relevant actions based on query
          const offlineMatch = getOfflineAnswer(query);
          return {
            status: 200,
            data: {
              answer: answerText,
              action: offlineMatch.action,
              provider: 'openai',
            },
          };
        }
      } else {
        console.error('OpenAI error status:', res.status);
      }
    } catch (err) {
      console.error('OpenAI fetch exception:', err);
    }
  }

  // 2. Check for Groq API Key
  const groqKey = process.env.GROQ_API_KEY;
  if (groqKey) {
    try {
      const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${groqKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          temperature: 0.2,
          max_tokens: 450,
          messages: [
            { role: 'system', content: AI_SYSTEM_PROMPT },
            { role: 'user', content: query },
          ],
        }),
      });

      if (res.ok) {
        const json = await res.json();
        const answerText = json.choices?.[0]?.message?.content?.trim();
        if (answerText) {
          const offlineMatch = getOfflineAnswer(query);
          return {
            status: 200,
            data: {
              answer: answerText,
              action: offlineMatch.action,
              provider: 'groq',
            },
          };
        }
      }
    } catch (err) {
      console.error('Groq fetch exception:', err);
    }
  }

  // 3. Robust Authoritative Fallback Engine
  // When no remote LLM key is configured, return the verified response from the knowledge base!
  const offlineMatch = getOfflineAnswer(query);
  return {
    status: 200,
    data: {
      answer: offlineMatch.text,
      action: offlineMatch.action,
      fallback: true,
      provider: 'authoritative-knowledge-base',
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
      const result = await processChatQuery(body.message);
      return new Response(JSON.stringify(result.data), {
        status: result.status,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch {
      const offline = getOfflineAnswer('');
      return new Response(
        JSON.stringify({
          answer: offline.text,
          action: offline.action,
          fallback: true,
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
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
      const result = await processChatQuery(body.message);
      nodeRes.statusCode = result.status;
      nodeRes.setHeader('Content-Type', 'application/json');
      nodeRes.end(JSON.stringify(result.data));
    } catch {
      const offline = getOfflineAnswer('');
      nodeRes.statusCode = 200;
      nodeRes.setHeader('Content-Type', 'application/json');
      nodeRes.end(
        JSON.stringify({
          answer: offline.text,
          action: offline.action,
          fallback: true,
        })
      );
    }
  });
}

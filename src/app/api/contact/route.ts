import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

async function sendTelegramAlert({
  name,
  email,
  subject,
  message,
  ip
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
  ip: string;
}) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.warn('Telegram alert skipped: TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is missing.');
    return;
  }

  const text = 
    `🚀 <b>Новая заявка на vitalizelianko.me!</b>\n\n` +
    `👤 <b>Имя:</b> ${escapeHtml(name)}\n` +
    `📧 <b>Email:</b> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>\n` +
    `📌 <b>Тема:</b> ${escapeHtml(subject || 'Без темы')}\n\n` +
    `💬 <b>Сообщение:</b>\n${escapeHtml(message)}\n\n` +
    `🌐 <b>IP:</b> <code>${escapeHtml(ip)}</code>\n` +
    `⏱ <b>Отправлено:</b> ${new Date().toISOString()}`;

  try {
    const telegramRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'HTML',
        disable_web_page_preview: true
      })
    });

    if (!telegramRes.ok) {
      console.error('Telegram API error:', await telegramRes.text());
    }
  } catch (err) {
    console.error('Failed to dispatch Telegram message:', err);
  }
}

export async function POST(req: NextRequest) {
  try {
    let name = '';
    let email = '';
    let subject = '';
    let message = '';

    const contentType = req.headers.get('content-type') || '';

    if (contentType.includes('application/json')) {
      const body = await req.json();
      name = body.name;
      email = body.email;
      subject = body.subject || '';
      message = body.message;
    } else {
      const formData = await req.formData();
      name = (formData.get('name') as string) || '';
      email = (formData.get('email') as string) || '';
      subject = (formData.get('subject') as string) || '';
      message = (formData.get('message') as string) || '';
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email and message are required' }, { status: 400 });
    }

    // IP address hash for security / diagnostics
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('cf-connecting-ip') || 'unknown';

    // 1. Save to Neon PostgreSQL
    if (sql) {
      try {
        await sql`
          INSERT INTO portfolio_contact_messages (sender_name, sender_email, subject, message, sender_ip_hash)
          VALUES (${name}, ${email}, ${subject}, ${message}, ${ip});
        `;
      } catch (dbErr) {
        console.error('Database insertion error:', dbErr);
      }
    }

    // 2. Dispatch Free Instant Telegram Notification
    await sendTelegramAlert({ name, email, subject, message, ip });

    // Handle form submissions vs JSON fetch
    if (!contentType.includes('application/json')) {
      return NextResponse.redirect(new URL('/?sent=true#contact', req.url), 303);
    }

    return NextResponse.json({ success: true, message: 'Inquiry transmitted and alerted' });
  } catch (error: any) {
    console.error('Failed to submit contact message:', error);
    return NextResponse.json({ error: 'Failed to record message' }, { status: 500 });
  }
}

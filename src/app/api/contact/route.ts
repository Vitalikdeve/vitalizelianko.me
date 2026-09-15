import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';

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

    // IP address hash for rate limiting/spam protection
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('cf-connecting-ip') || 'unknown';

    if (sql) {
      await sql`
        INSERT INTO portfolio_contact_messages (sender_name, sender_email, subject, message, sender_ip_hash)
        VALUES (${name}, ${email}, ${subject}, ${message}, ${ip});
      `;
    }

    // If submitted via standard HTML form, redirect back to homepage with anchor
    if (!contentType.includes('application/json')) {
      return NextResponse.redirect(new URL('/?sent=true#contact', req.url), 303);
    }

    return NextResponse.json({ success: true, message: 'Inquiry received' });
  } catch (error: any) {
    console.error('Failed to submit contact message:', error);
    return NextResponse.json({ error: 'Failed to record message' }, { status: 500 });
  }
}

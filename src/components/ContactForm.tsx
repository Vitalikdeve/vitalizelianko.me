'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Failed to transmit inquiry');
      }

      setStatus('success');
      form.reset();
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Transmission failed. Please try again or email directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 sm:p-10 max-w-xl mx-auto space-y-4 shadow-2xl backdrop-blur-xl">
      {status === 'success' && (
        <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-950/40 p-4 text-xs font-mono text-emerald-300">
          <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
          <div>
            <div className="font-bold text-white">Transmission Successful!</div>
            <div>Vitali has been alerted via Telegram and will review your inquiry shortly.</div>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center gap-3 rounded-2xl border border-rose-500/30 bg-rose-950/40 p-4 text-xs font-mono text-rose-300">
          <AlertCircle className="h-5 w-5 text-rose-400 shrink-0" />
          <div>
            <div className="font-bold text-white">Transmission Issue</div>
            <div>{errorMessage}</div>
          </div>
        </div>
      )}

      <div>
        <label className="block text-xs font-mono text-slate-400 mb-1.5">Full Name</label>
        <input
          type="text"
          name="name"
          required
          disabled={loading}
          placeholder="Alex Mercer"
          className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 font-medium disabled:opacity-50"
        />
      </div>

      <div>
        <label className="block text-xs font-mono text-slate-400 mb-1.5">Email Address</label>
        <input
          type="email"
          name="email"
          required
          disabled={loading}
          placeholder="alex@organization.com"
          className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 font-medium disabled:opacity-50"
        />
      </div>

      <div>
        <label className="block text-xs font-mono text-slate-400 mb-1.5">Inquiry Subject</label>
        <input
          type="text"
          name="subject"
          disabled={loading}
          placeholder="Advisory / Venture / Music Sync"
          className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 font-medium disabled:opacity-50"
        />
      </div>

      <div>
        <label className="block text-xs font-mono text-slate-400 mb-1.5">Message</label>
        <textarea
          name="message"
          required
          rows={4}
          disabled={loading}
          placeholder="Hello Vitali, I would like to discuss..."
          className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 font-medium disabled:opacity-50"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 rounded-2xl bg-sky-500 py-4 text-sm font-semibold text-slate-950 hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/25 font-mono disabled:opacity-50"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Transmitting Alert...</span>
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            <span>Transmit Message & Alert Vitali</span>
          </>
        )}
      </button>
    </form>
  );
}

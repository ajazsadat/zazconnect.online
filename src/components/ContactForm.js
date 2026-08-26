'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SITE } from '@/lib/site';

const INTEREST_OPTIONS = [
  'Internet',
  'TV & Streaming',
  'Wireless',
  'Home Security',
  'Bundle (Internet + TV)',
  'Not Sure Yet',
];

const fieldClass =
  'w-full border border-[var(--line)] bg-[#f7fbfc] px-4 py-3 text-ink placeholder:text-[#8aa0a8] focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal';

const emptyForm = {
  full_name: '',
  email: '',
  phone: '',
  zip_code: '',
  interested_in: '',
  message: '',
  consent: false,
};

export default function ContactForm({
  variant = 'full',
  defaultInterest = '',
  idPrefix = 'contact',
  submitLabel,
}) {
  const isSimple = variant === 'simple';
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    ...emptyForm,
    interested_in: defaultInterest || '',
  });

  function update(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function fieldId(name) {
    return `${idPrefix}-${name}`;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.consent || status === 'sending') return;

    if (!isSimple && (!form.zip_code || !form.interested_in)) return;

    setStatus('sending');
    setError('');

    try {
      const payload = {
        ...form,
        interested_in: form.interested_in || defaultInterest || 'General inquiry',
        zip_code: form.zip_code || '',
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok) {
        setStatus('idle');
        setError(data.error || 'Unable to send your message. Please try again or call us.');
        return;
      }

      setStatus('sent');
      setForm({ ...emptyForm, interested_in: defaultInterest || '' });
    } catch {
      setStatus('idle');
      setError('Unable to send your message. Please try again or call us.');
    }
  }

  if (status === 'sent') {
    return (
      <div className="border border-teal/30 bg-teal/5 p-8 text-center">
        <h2 className="font-display text-2xl font-bold text-ink mb-2">Thanks — we got your request</h2>
        <p className="text-muted text-sm leading-relaxed mb-6">
          A specialist will follow up shortly. Prefer to talk now? Call {SITE.phoneDisplay}.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="inline-flex px-5 py-2.5 font-semibold text-teal border border-teal/40 hover:bg-teal/5 transition"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor={fieldId('full_name')} className="block text-sm font-semibold text-ink mb-1.5">
          {isSimple ? 'Name' : 'Full name'} <span className="text-teal">*</span>
        </label>
        <input
          id={fieldId('full_name')}
          name="full_name"
          type="text"
          required
          placeholder={isSimple ? 'Your name' : 'Jane Smith'}
          value={form.full_name}
          onChange={(e) => update('full_name', e.target.value)}
          className={fieldClass}
        />
      </div>

      {isSimple ? (
        <>
          <div>
            <label htmlFor={fieldId('email')} className="block text-sm font-semibold text-ink mb-1.5">
              Email <span className="text-teal">*</span>
            </label>
            <input
              id={fieldId('email')}
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor={fieldId('phone')} className="block text-sm font-semibold text-ink mb-1.5">
              Phone <span className="text-teal">*</span>
            </label>
            <input
              id={fieldId('phone')}
              name="phone"
              type="tel"
              required
              placeholder="(555) 123-4567"
              value={form.phone}
              onChange={(e) => update('phone', e.target.value)}
              className={fieldClass}
            />
          </div>
        </>
      ) : (
        <>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor={fieldId('email')} className="block text-sm font-semibold text-ink mb-1.5">
                Email <span className="text-teal">*</span>
              </label>
              <input
                id={fieldId('email')}
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor={fieldId('phone')} className="block text-sm font-semibold text-ink mb-1.5">
                Phone <span className="text-teal">*</span>
              </label>
              <input
                id={fieldId('phone')}
                name="phone"
                type="tel"
                required
                placeholder="(555) 555-5555"
                value={form.phone}
                onChange={(e) => update('phone', e.target.value)}
                className={fieldClass}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor={fieldId('zip_code')} className="block text-sm font-semibold text-ink mb-1.5">
                ZIP code <span className="text-teal">*</span>
              </label>
              <input
                id={fieldId('zip_code')}
                name="zip_code"
                type="text"
                required
                inputMode="numeric"
                placeholder="90210"
                value={form.zip_code}
                onChange={(e) => update('zip_code', e.target.value)}
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor={fieldId('interested_in')} className="block text-sm font-semibold text-ink mb-1.5">
                Interested in <span className="text-teal">*</span>
              </label>
              <select
                id={fieldId('interested_in')}
                name="interested_in"
                required
                value={form.interested_in}
                onChange={(e) => update('interested_in', e.target.value)}
                className={fieldClass}
              >
                <option value="">Select an option</option>
                {INTEREST_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </>
      )}

      <div>
        <label htmlFor={fieldId('message')} className="block text-sm font-semibold text-ink mb-1.5">
          Message <span className="text-teal">*</span>
        </label>
        <textarea
          id={fieldId('message')}
          name="message"
          required
          rows={4}
          placeholder={isSimple ? 'How can we help?' : "Optional — tell us more about what you're looking for"}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          className={`${fieldClass} resize-y min-h-[120px]`}
        />
      </div>

      <label className="flex gap-3 items-start text-sm text-muted leading-relaxed cursor-pointer">
        <input
          type="checkbox"
          id={fieldId('consent')}
          name="consent"
          required
          checked={form.consent}
          onChange={(e) => update('consent', e.target.checked)}
          className="mt-1 h-4 w-4 accent-teal shrink-0"
        />
        <span>
          I agree to the{' '}
          <Link href="/terms-conditions" className="text-teal hover:underline">
            Terms & Conditions
          </Link>{' '}
          and{' '}
          <Link href="/privacy-policy" className="text-teal hover:underline">
            Privacy Policy
          </Link>
          , and consent to receive calls and texts from {SITE.brandFull} about my comparison request. Consent is not a
          condition of purchase, and I can opt out at any time.
        </span>
      </label>

      {error ? <p className="text-sm text-red-600">{error}</p> : null}

      <button
        type="submit"
        disabled={status === 'sending'}
        className={`${isSimple ? 'w-full' : 'w-full sm:w-auto'} inline-flex items-center justify-center px-8 py-4 font-bold text-[#0c1c24] bg-mint hover:brightness-110 transition disabled:opacity-60`}
      >
        {status === 'sending' ? 'Sending…' : submitLabel || (isSimple ? 'Submit' : 'Get My Free Quote')}
      </button>
    </form>
  );
}

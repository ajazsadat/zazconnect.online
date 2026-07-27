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

export default function ContactForm() {
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    zip_code: '',
    interested_in: '',
    message: '',
    consent: false,
  });

  function update(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.consent) return;
    setStatus('sent');
    // Lead capture UI — wire to API/CRM when ready
    setForm({
      full_name: '',
      email: '',
      phone: '',
      zip_code: '',
      interested_in: '',
      message: '',
      consent: false,
    });
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
        <label htmlFor="full_name" className="block text-sm font-semibold text-ink mb-1.5">
          Full name <span className="text-teal">*</span>
        </label>
        <input
          id="full_name"
          name="full_name"
          type="text"
          required
          placeholder="Jane Smith"
          value={form.full_name}
          onChange={(e) => update('full_name', e.target.value)}
          className={fieldClass}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-ink mb-1.5">
            Email <span className="text-teal">*</span>
          </label>
          <input
            id="email"
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
          <label htmlFor="phone" className="block text-sm font-semibold text-ink mb-1.5">
            Phone <span className="text-teal">*</span>
          </label>
          <input
            id="phone"
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
          <label htmlFor="zip_code" className="block text-sm font-semibold text-ink mb-1.5">
            ZIP code <span className="text-teal">*</span>
          </label>
          <input
            id="zip_code"
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
          <label htmlFor="interested_in" className="block text-sm font-semibold text-ink mb-1.5">
            Interested in <span className="text-teal">*</span>
          </label>
          <select
            id="interested_in"
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

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-ink mb-1.5">
          Message <span className="text-teal">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Optional — tell us more about what you're looking for"
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          className={`${fieldClass} resize-y min-h-[120px]`}
        />
      </div>

      <label className="flex gap-3 items-start text-sm text-muted leading-relaxed cursor-pointer">
        <input
          type="checkbox"
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
          , and consent to receive calls/texts from {SITE.brandFull} and its partner providers about my request. Consent
          is not a condition of purchase.
        </span>
      </label>

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 font-bold text-[#0c1c24] bg-mint hover:brightness-110 transition"
      >
        Get My Free Quote
      </button>
    </form>
  );
}

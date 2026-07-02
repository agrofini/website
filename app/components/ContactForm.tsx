'use client'

import { useState } from 'react'

const SUBJECTS = [
  'General Enquiry',
  'Supply Partnership',
  'Wholesale / Market Supply',
  'Investment Interest',
  'Founding Partner Enquiry',
  'Founding Partner Briefing',
  'Farm Visit Request',
  'Media & Press',
  'Other',
]

const ENDPOINTS: Record<string, string> = {
  'General Enquiry':          'https://formspree.io/f/xrewoejz',
  'Supply Partnership':       'https://formspree.io/f/xdarpabe',
  'Wholesale / Market Supply':'https://formspree.io/f/mlgyogzl',
  'Investment Interest':      'https://formspree.io/f/meebpenp',
  'Founding Partner Enquiry': 'https://formspree.io/f/mvzjvzly',
  'Founding Partner Briefing':'https://formspree.io/f/xbdvpdwn',
  'Farm Visit Request':       'https://formspree.io/f/mdarpajk',
  'Media & Press':            'https://formspree.io/f/xqevgejp',
  'Other':                    'https://formspree.io/f/xlgyogvb',
}

interface Props {
  defaultSubject?: string
  defaultMessage?: string
}

export default function ContactForm({ defaultSubject, defaultMessage }: Props) {
  const initialSubject = SUBJECTS.includes(defaultSubject ?? '') ? (defaultSubject ?? 'General Enquiry') : 'General Enquiry'

  const [subject, setSubject] = useState(initialSubject)
  const [message, setMessage] = useState(defaultMessage ?? '')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const endpoint = ENDPOINTS[subject] ?? ENDPOINTS['General Enquiry']
      await fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
    } catch {
      // fail silently — user still sees the success state
    }

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-sage rounded-2xl p-10 text-center">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="font-serif text-2xl font-bold text-primary mb-2">Message Received</h3>
        <p className="text-text/70">Thank you for reaching out. The Agrofini team will be in touch shortly.</p>
      </div>
    )
  }

  return (
    <form
      name="contact"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>Don&apos;t fill this out: <input name="bot-field" /></label>
      </p>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text mb-1">Full Name <span className="text-red-500">*</span></label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full px-4 py-3 rounded-xl border border-sage focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white transition-colors"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text mb-1">Email Address <span className="text-red-500">*</span></label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-4 py-3 rounded-xl border border-sage focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white transition-colors"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-text mb-1">Phone Number <span className="text-text/40">(optional)</span></label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full px-4 py-3 rounded-xl border border-sage focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white transition-colors"
          placeholder="+234..."
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-text mb-1">Subject</label>
        <select
          id="subject"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-sage focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white transition-colors"
        >
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text mb-1">Message <span className="text-red-500">*</span></label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-sage focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white transition-colors resize-none"
          placeholder="Tell us about your interest..."
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-primary text-white py-4 rounded-full font-semibold text-lg hover:bg-primaryDark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}

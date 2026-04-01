'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    const form = e.currentTarget
    const data = new FormData(form)

    // Only submit to Netlify in production — the handler doesn't exist in dev/test
    if (process.env.NODE_ENV === 'production') {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(Object.fromEntries(data.entries()) as Record<string, string>).toString(),
      }).catch(() => {})
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
          className="w-full px-4 py-3 rounded-xl border border-sage focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white transition-colors"
        >
          <option value="General Enquiry">General Enquiry</option>
          <option value="Investment Interest">Investment Interest</option>
          <option value="Partnership">Partnership</option>
          <option value="Media">Media</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text mb-1">Message <span className="text-red-500">*</span></label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
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

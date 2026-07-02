'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { CONTACT_SUPPLY } from '../lib/contactLinks'

const buyerTypes = [
  { icon: 'fa-solid fa-utensils', title: 'Hotels & Restaurants', desc: 'Contract supply with scheduled delivery — plan your menus around a source that behaves like a reliable supplier, not a market stall.' },
  { icon: 'fa-solid fa-store', title: 'Wholesale Markets', desc: 'Direct dispatch to Mile 12, Mushin, Daleko, and Oyingbo — bypassing the 700km northern supply chain and arriving fresher at a better price.' },
  { icon: 'fa-solid fa-building', title: 'Corporates & Embassies', desc: 'Premium fresh produce for canteens, oil company camps, and diplomatic missions across Lagos. Consistent quality, reliable schedule.' },
  { icon: 'fa-solid fa-house', title: 'Households', desc: 'Farm-fresh produce delivered to Lagos homes. The same quality we send to hotel kitchens — at your door, the same morning it was harvested.' },
]

const advantages = [
  { icon: 'fa-solid fa-clock', title: 'Same-Day Freshness', body: 'Our produce leaves the farm and reaches Lagos in 4–6 hours. No overnight transit. No cold-chain break. Longer shelf life and better taste than supply chains travelling 700–1,000km from the North.' },
  { icon: 'fa-solid fa-rotate', title: 'Year-Round Availability', body: 'Six crops staggered for continuous harvest means we never have a gap in supply. Okra and cucumber deliver multiple cycles annually. Snails run year-round. Your supply chain does not go quiet.' },
  { icon: 'fa-solid fa-handshake', title: 'Grown to Your Order', body: 'We plan our planting calendar around confirmed buyer requirements. That means you get the volume you asked for, at the quality you expect, on the schedule we agreed.' },
  { icon: 'fa-solid fa-location-dot', title: 'Structural Proximity', body: 'Our Benin City site sits 300km from Mile 12 — compared to 700–1,000km for most Lagos produce. This is not a short-term advantage. It is a permanent structural one.' },
  { icon: 'fa-solid fa-ban', title: 'Zero Middlemen', body: 'No brokers. No overnight traders. No market re-sellers. One relationship — directly between your operation and our farm. That is where the margin lives.' },
]

const faqs = [
  { q: 'What is your minimum order quantity?', a: 'We work with buyers of all scales — from boutique restaurants to wholesale markets. Contact us to discuss your specific volume requirements and we will confirm what we can commit to across each crop.' },
  { q: 'Which areas of Lagos do you deliver to?', a: 'We deliver directly to Mile 12, Mushin, Daleko, and Oyingbo wholesale markets, and to hotels, restaurants, and corporate locations across Lagos. Contact us to confirm your specific area.' },
  { q: 'How far in advance do I need to place an order?', a: 'For regular supply contracts, we recommend 2–4 weeks advance notice to align with our planting cycles. For spot orders on in-season crops, contact us to check current availability.' },
  { q: 'Do you offer supply contracts?', a: 'Yes — and we prefer them. Supply agreements allow us to plan our planting calendar precisely to your needs, which means you get better consistency, better quality, and better pricing than spot buying.' },
  { q: 'Can I visit the farm before committing?', a: 'Yes. We welcome site visits from prospective supply partners. Email info@agrofiniholdings.com to arrange a farm tour.' },
  { q: 'When does supply begin?', a: 'We are currently establishing supply partnerships ahead of initial operations, which we are targeting within 12–24 months. Expressions of interest now directly inform our planting calendar — so the earlier you engage, the better we can plan for your volumes.' },
]

export default function BuyersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 bg-primaryDark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p
            className="text-accent font-semibold uppercase tracking-widest text-sm mb-5"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
          >
            For Supply Partners
          </motion.p>
          <motion.h1
            className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          >
            A Direct Line from<br />Our Farm to Yours.
          </motion.h1>
          <motion.p
            className="text-white/70 text-xl leading-relaxed max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
          >
            No brokers. No overnight transit. No stale supply chains. We supply hotels, restaurants, markets, and corporate buyers directly — with produce harvested that morning.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href={CONTACT_SUPPLY}
              aria-label="Become a supply partner with Agrofini"
              className="inline-block bg-accent text-text px-10 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-colors"
            >
              Start the Conversation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Who We Supply */}
      <section className="py-24 bg-warmWhite">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Who We Serve</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text">Built for Every Buyer in the Chain</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {buyerTypes.map((b, i) => (
              <motion.div
                key={b.title}
                className="bg-sage rounded-2xl p-7"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <i className={`${b.icon} text-primary text-lg`} aria-hidden="true" />
                </div>
                <h3 className="font-serif text-lg font-bold text-text mb-2">{b.title}</h3>
                <p className="text-text/60 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Supply Direct */}
      <section className="py-24 bg-primaryDark text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-4">Why Supply Direct</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">What You Get That the<br />Market Cannot Offer</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((a, i) => (
              <motion.div
                key={a.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-7"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                  <i className={`${a.icon} text-accent text-lg`} aria-hidden="true" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-3">{a.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{a.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Become a Partner */}
      <section className="py-24 bg-sage">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">How It Works</p>
            <h2 className="font-serif text-4xl font-bold text-text">Three Steps to Your Supply Partnership</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', icon: 'fa-solid fa-envelope', title: 'Get in Touch', body: 'Email info@agrofiniholdings.com or use the contact form. Tell us which crops you need, your volumes, and your delivery location.' },
              { step: '02', icon: 'fa-solid fa-calendar-check', title: 'We Align on Requirements', body: 'We review your needs against our planting calendar, confirm crop availability and pricing, and agree a delivery schedule.' },
              { step: '03', icon: 'fa-solid fa-file-contract', title: 'Supply Agreement Signed', body: 'We formalise the partnership with a supply agreement — giving both sides clarity on volumes, quality, pricing, and delivery terms.' },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.12 }}
              >
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4">
                  <i className={`${s.icon} text-white text-2xl`} aria-hidden="true" />
                </div>
                <p className="text-accent font-bold text-xs uppercase tracking-widest mb-2">{s.step}</p>
                <h3 className="font-serif text-lg font-bold text-text mb-2">{s.title}</h3>
                <p className="text-text/60 text-sm leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer FAQ */}
      <section className="py-24 bg-warmWhite">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Buyer Questions</p>
            <h2 className="font-serif text-4xl font-bold text-text">What Buyers Ask Most</h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                className="bg-sage rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left hover:bg-sage/70 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="font-serif font-bold text-text text-base leading-snug">{faq.q}</span>
                  <motion.i
                    className="fa-solid fa-plus text-primary text-xs flex-shrink-0"
                    animate={{ rotate: openFaq === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-7 pb-6">
                        <p className="text-text/60 leading-relaxed text-sm border-t border-primary/10 pt-4">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-accent text-center">
        <motion.div
          className="max-w-3xl mx-auto px-6"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-text mb-5">Ready to Source Direct?</h2>
          <p className="text-text/70 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
            We are taking expressions of interest from supply partners now — ahead of our first harvest season. The earlier you engage, the better we can plan for your volumes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={CONTACT_SUPPLY}
              aria-label="Become a supply partner with Agrofini"
              className="inline-block bg-text text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-primaryDark transition-colors"
            >
              Get in Touch
            </Link>
            <a
              href="mailto:info@agrofiniholdings.com"
              aria-label="Email Agrofini directly"
              className="inline-block border-2 border-text text-text px-10 py-4 rounded-full font-semibold text-lg hover:bg-text hover:text-white transition-colors"
            >
              Email Us Directly
            </a>
          </div>
        </motion.div>
      </section>
    </>
  )
}

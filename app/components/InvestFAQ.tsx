'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'How do I express investment interest?',
    a: 'Email us directly at info@agrofiniholdings.com or use the contact form on this site. We will share our full Farm Operations Plan and discuss the investment structure with you directly — no intermediaries, no gatekeeping.',
  },
  {
    q: 'Is Agrofini a properly registered company?',
    a: 'Yes. Agrofini West Africa Limited is registered with the Corporate Affairs Commission (CAC) of Nigeria under RC No. 8181060. Our registration is a matter of public record and fully verifiable on the CAC portal.',
  },
  {
    q: 'Is Agrofini currently registered with the SEC?',
    a: 'Not yet. Agrofini is a pre-operational company and is not currently registered with the Securities and Exchange Commission of Nigeria. Any future capital raise will be conducted in full compliance with applicable Nigerian law and, where required, through licensed and regulated intermediaries.',
  },
  {
    q: 'When will farming operations begin?',
    a: 'We are targeting initial operations within 12–24 months of securing first-round investment. Operations begin at our 5-acre secured position at Primepoint Farm Estate, Ogun State, progressing to full commercial-scale horticulture at our near-term Benin City site.',
  },
  {
    q: 'Can Nigerians in the diaspora participate?',
    a: 'Yes. We actively welcome diaspora investors and partners. Please contact us directly to discuss the appropriate legal and commercial structure for international participation.',
  },
  {
    q: 'How will my investment be structured legally?',
    a: 'Investment participation will be documented through legally binding commercial agreements. We are also exploring, with licensed advisors, the possibility of formally issued investment instruments under appropriate regulatory frameworks — ensuring full protection for all parties.',
  },
  {
    q: 'Can I see the farm operations plan before deciding?',
    a: 'Yes. Our detailed Farm Operations Plan — built on 2025 live Nigerian market data including BusinessDay price benchmarks, NBS food inflation figures, and verified yield data — is available on request to prospective investors. Reach us at info@agrofiniholdings.com.',
  },
]

export default function InvestFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-sage">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Investor Questions</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text">Common Questions</h2>
          <p className="text-text/60 mt-4 max-w-xl mx-auto leading-relaxed">
            Straight answers to the questions prospective investors ask most.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              className="bg-white rounded-2xl overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left hover:bg-sage/30 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="font-serif font-bold text-text text-base leading-snug">{faq.q}</span>
                <span className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <motion.i
                    className="fa-solid fa-plus text-primary text-xs"
                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    aria-hidden="true"
                  />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    <div className="px-7 pb-6">
                      <p className="text-text/60 leading-relaxed text-sm border-t border-sage pt-4">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

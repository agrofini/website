'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    icon: 'fa-solid fa-comments',
    title: 'Tell Us What You Need',
    body: 'Share your volume requirements, preferred crops, and delivery schedule. We plan every planting cycle around confirmed demand — not guesswork — so your supply is locked in before a seed goes in the ground.',
  },
  {
    number: '02',
    icon: 'fa-solid fa-seedling',
    title: 'We Grow to Your Order',
    body: 'Our five-crop farm is sequenced for year-round harvest. We plant specifically to fill your confirmed order — ensuring consistent quality, the right volumes, and no seasonal supply gaps.',
  },
  {
    number: '03',
    icon: 'fa-solid fa-truck-fast',
    title: 'We Deliver Direct',
    body: 'From our farm to your door in 4–6 hours. No cold-chain break. No broker. No middleman mark-up. Just fresh produce on a schedule you can build your kitchen or market operations around.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-warmWhite">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">How It Works</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text">Simple. Reliable. Direct.</h2>
          <p className="text-text/60 mt-4 max-w-xl mx-auto leading-relaxed">
            Three steps from your order to your loading dock — with nothing in between but our farm and our truck.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-12 left-1/3 right-1/3 h-0.5 bg-sage -translate-y-1/2 z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative z-10 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <i className={`${step.icon} text-white text-3xl`} aria-hidden="true" />
              </div>
              <p className="text-accent font-bold text-xs uppercase tracking-widest mb-2">{step.number}</p>
              <h3 className="font-serif text-xl font-bold text-text mb-3">{step.title}</h3>
              <p className="text-text/60 text-sm leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="/buyers"
            aria-label="Become a supply partner with Agrofini"
            className="inline-block bg-primary text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-primaryDark transition-colors"
          >
            Become a Supply Partner
          </a>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'

export default function OurVision() {
  return (
    <section className="py-32 bg-primaryDark text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.p
          className="text-white/50 font-semibold uppercase tracking-widest text-sm mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Vision
        </motion.p>
        <motion.blockquote
          className="font-serif text-2xl md:text-4xl font-bold leading-relaxed mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          &ldquo;To build the food supply infrastructure West Africa&apos;s cities have been demanding for a generation — vertically integrated from soil to consumer, demand-anchored at every step, and operating at the scale that rewires how a continent feeds itself.&rdquo;
        </motion.blockquote>

        <motion.div
          className="border-t border-white/10 pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {[
            {
              icon: 'fa-solid fa-rotate',
              label: 'Full Value Chain',
              value: 'Farm → Pack → Cold Chain → Direct Delivery. We own every link between soil and consumer — eliminating middlemen and capturing the margin they leave behind.',
            },
            {
              icon: 'fa-solid fa-industry',
              label: 'Target Corporate Off-Takers',
              value: 'Nestlé · Nigerian Breweries · Guinness · Dangote — the food and beverage giants we are building toward supplying at contract grade.',
            },
            {
              icon: 'fa-solid fa-globe-africa',
              label: 'Continental Ambition',
              value: "Nigeria first. West Africa next. A demand-matched agricultural network built to supply the continent's fastest-growing cities.",
            },
          ].map((item) => (
            <div key={item.label} className="flex gap-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <i className={`${item.icon} text-accent text-sm`} aria-hidden="true" />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{item.label}</p>
                <p className="text-white/85 text-sm leading-relaxed font-medium">{item.value}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

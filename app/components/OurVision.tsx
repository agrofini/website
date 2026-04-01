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
          &ldquo;To become the preferred agri-supply partner for Nigeria&apos;s largest food and beverage corporations — delivering consistent, contract-grade produce from commercial farmland that investors, buyers, and communities can rely on.&rdquo;
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
              icon: 'fa-solid fa-industry',
              label: 'Target Corporate Off-Takers',
              value: 'Nestlé · Nigerian Breweries · Guinness · Dangote',
            },
            {
              icon: 'fa-solid fa-location-dot',
              label: 'Strategic Location',
              value: 'Ogun State — gateway to Lagos, Africa\'s largest commercial city',
            },
            {
              icon: 'fa-solid fa-arrow-trend-up',
              label: 'Growth Model',
              value: '2 hectares today → 50 acres near-term → 600 acres long-term vision',
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

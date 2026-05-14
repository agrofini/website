'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '5 Acres', label: 'Secured Land — Primepoint Farm Estate, Ogun State' },
  { value: '25 Acres', label: 'Near-Term Expansion Target — Benin City, Edo State' },
  { value: '600 Acres', label: 'Long-Term Integrated Farmland Vision' },
  { value: '5 Crops', label: 'Habanero Pepper · Snails · Cucumber · Tomato · Okra' },
]

export default function LandStats() {
  return (
    <section className="py-24 bg-warmWhite">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Scale & Footprint</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text">The Numbers That Matter</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center p-8 bg-sage rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="font-serif text-3xl md:text-4xl font-bold text-primary mb-3">{stat.value}</p>
              <p className="text-text/60 text-sm leading-relaxed">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const supplyStats = [
  { value: '4–6 Hrs', label: 'Farm to Lagos on every delivery — same day, every time' },
  { value: '6 Crops', label: 'Year-round availability — no seasonal supply gaps' },
  { value: '300km', label: 'Proximity advantage — fresher than anything from the North' },
]

export default function PartnerCTA() {
  return (
    <section className="py-24 bg-primaryDark text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-5">Supply Partnership</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-6">
              Fresh Produce.<br />Reliable Supply.<br />Zero Middlemen.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-4">
              We supply hotels, restaurants, wholesale markets, and corporate buyers directly from the farm — with produce that left our fields the same morning it arrives at your door.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              No brokers. No overnight transit. No stale supply chains. Just a direct relationship between your kitchen and our farm.
            </p>
            <Link
              href="/buyers"
              aria-label="Become a supply partner with Agrofini"
              className="inline-block bg-accent text-text px-10 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-colors"
            >
              Become a Supply Partner
            </Link>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {supplyStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex items-center gap-6 bg-white/5 border border-white/10 rounded-2xl px-8 py-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              >
                <p className="font-serif text-4xl font-bold text-accent flex-shrink-0">{stat.value}</p>
                <p className="text-white/70 text-sm leading-snug">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

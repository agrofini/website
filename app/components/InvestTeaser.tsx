'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const teaserStats = [
  { value: '$3B+', label: 'Nigeria\'s annual food import bill' },
  { value: '220M', label: 'Consumers to feed — and growing' },
  { value: '1st Round', label: 'We\'re raising our foundation capital now' },
]

export default function InvestTeaser() {
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
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-5">Investment Opportunity</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-6">
              Nigeria&apos;s Food Import Crisis<br />Is the Investor Opportunity<br />of a Generation.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-4">
              Every year, Nigeria spends billions importing food that its own soil can produce. Agrofini is positioned at the centre of that gap — with secured land, a tested location, and a clear roadmap to commercial scale.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              We are opening our first round of investment to partners who want to be part of building Nigeria&apos;s next great agribusiness — not just profit from it.
            </p>
            <Link
              href="/invest"
              aria-label="Explore investment opportunities with Agrofini"
              className="inline-block bg-accent text-text px-10 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-colors"
            >
              Explore the Opportunity
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
            {teaserStats.map((stat, i) => (
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

            <div className="mt-2 px-2">
              <p className="text-white/30 text-xs leading-relaxed">
                Figures sourced from publicly available trade and FAO data. Past market conditions do not guarantee future returns. This section does not constitute a regulated investment solicitation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

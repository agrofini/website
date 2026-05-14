'use client'

import { motion } from 'framer-motion'

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="py-24 bg-warmWhite">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image placeholder */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-primary/20 via-sage to-primary/10 flex items-center justify-center">
            <div className="text-center p-12">
              <i className="fa-solid fa-leaf text-primary/40 text-7xl mb-4 block" aria-hidden="true" />
              <p className="text-primary/60 font-medium">5 Acres Secured — Launchpad</p>
              <p className="text-primary/40 text-sm mt-1">Primepoint Farm Estate, Ogun State</p>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Who We Are</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text mb-6 leading-tight">
            The Agribusiness<br />Nigeria Has Been<br />Waiting For.
          </h2>
          <p className="text-text/70 text-lg leading-relaxed">
            Nigeria has the land, the climate, and the demand. What it has lacked is structured, commercially disciplined farming built around real market data. Agrofini West Africa Limited was founded to close that gap — starting with secured land at Primepoint Farm Estate in Ogun State, and expanding to an integrated horticulture hub near Benin City, Edo State, to supply Lagos&apos;s highest-volume wholesale markets directly.
          </p>
          <p className="text-text/70 text-lg leading-relaxed mt-4">
            Incorporated under Nigerian law (RC No. 8181060), we are establishing five complementary enterprises — habanero pepper, snail farming, cucumber, tomato, and okra — engineered to generate income across every month of the year. Produce from the Benin City site reaches Mile 12 in 4–6 hours, fresher and cheaper than supply chains travelling 700–1,000km from the North.
          </p>
          <div className="mt-8 pt-8 border-t border-sage">
            <p className="text-primary font-serif text-lg font-semibold italic">
              &ldquo;We are not building one farm. We are building the supply chain Nigeria&apos;s food security depends on — starting in Ogun, scaling through Edo.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

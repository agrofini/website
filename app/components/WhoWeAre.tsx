'use client'

import { motion } from 'framer-motion'

const supplyChannels = [
  { icon: 'fa-solid fa-house', label: 'Households' },
  { icon: 'fa-solid fa-utensils', label: 'Hotels & Restaurants' },
  { icon: 'fa-solid fa-building', label: 'Corporates' },
  { icon: 'fa-solid fa-industry', label: 'Processors' },
]

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="py-24 bg-warmWhite">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left visual */}
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
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />

          {/* Supply channel icons */}
          <div className="mt-8 grid grid-cols-4 gap-3">
            {supplyChannels.map((channel) => (
              <div key={channel.label} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-sage rounded-xl flex items-center justify-center">
                  <i className={`${channel.icon} text-primary text-base`} aria-hidden="true" />
                </div>
                <p className="text-text/50 text-xs font-medium text-center leading-tight">{channel.label}</p>
              </div>
            ))}
          </div>
          <p className="text-text/30 text-xs text-center mt-3">Supply channels — from our farm direct to consumer</p>
        </motion.div>

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Who We Are</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text mb-6 leading-tight">
            We Build Demand First.<br />Then We Grow to<br />Meet It Exactly.
          </h2>
          <p className="text-text/70 text-lg leading-relaxed mb-4">
            Most farms grow produce and hope for a buyer. Agrofini works in reverse: we establish supply relationships — with households, hotels, restaurants, and corporate off-takers — before a single seed is planted. Every harvest has a destination. Every delivery has a price. Capital is never sitting idle waiting for a market to appear.
          </p>
          <p className="text-text/70 text-lg leading-relaxed mb-4">
            Incorporated under Nigerian law (RC No. 8181060), we are establishing five complementary enterprises at our Benin City expansion site — habanero pepper, snail farming, cucumber, tomato, and okra — engineered to deliver fresh produce to Lagos in 4–6 hours, cutting out every middleman between the farm gate and the consumer.
          </p>
          <p className="text-text/70 text-base leading-relaxed">
            We are starting in Ogun State and scaling through Edo State. But the vision is not one farm, or two. It is the integrated food supply infrastructure that West Africa&apos;s growing cities have been demanding for a generation.
          </p>
          <div className="mt-8 pt-8 border-t border-sage">
            <p className="text-primary font-serif text-lg font-semibold italic">
              &ldquo;We are not building one farm. We are building the supply chain Nigeria&apos;s food security depends on — demand-anchored, vertically integrated, and built to scale.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

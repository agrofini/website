'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const milestones = [
  { phase: 'Now', title: 'Foundation & Planning', body: 'Land secured at Primepoint Farm Estate, Ogun State. Supply partnerships being established. Farm Operations Plan finalised.' },
  { phase: 'Months 1–6', title: 'Build & Plant', body: 'Borehole and drip irrigation installed. First crops planted. Farm team hired and operational. Ogun site producing first supply volumes.' },
  { phase: 'Months 6–12', title: 'First Harvest', body: 'Okra Day 35, cucumber Day 40. Pepper peak April–July. Mile 12 dispatch running. Direct buyer supply contracts live.' },
  { phase: 'Months 12–24', title: 'Benin City Expansion', body: 'Benin City horticulture site operational. Cold chain infrastructure. Value-added processing. Hotel and restaurant contract supply.' },
]

const values = [
  { icon: 'fa-solid fa-handshake', title: 'Demand First', body: 'We establish who is buying before we plant a single seed. Every harvest has a confirmed destination.' },
  { icon: 'fa-solid fa-rotate', title: 'Vertical Integration', body: 'We own every step from soil to delivery — no middlemen, no broken links in the chain.' },
  { icon: 'fa-solid fa-chart-line', title: 'Data-Led Decisions', body: 'Planting calendars, price targets, and delivery schedules are all driven by live Nigerian market intelligence.' },
  { icon: 'fa-solid fa-globe-africa', title: 'Continental Vision', body: 'Nigeria is the beginning. The model is designed to supply the food infrastructure West Africa will need for the next generation.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 bg-primaryDark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p
            className="text-accent font-semibold uppercase tracking-widest text-sm mb-5"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
          >
            Our Story
          </motion.p>
          <motion.h1
            className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          >
            Built to Fix a Broken<br />Food Supply Chain.
          </motion.h1>
          <motion.p
            className="text-white/70 text-xl leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
          >
            Agrofini West Africa Limited was founded on a simple observation: Nigeria has everything it needs to feed itself — except the supply chain infrastructure to connect farm to consumer reliably.
          </motion.p>
        </div>
      </section>

      {/* The Foundation */}
      <section className="py-24 bg-warmWhite">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">The Foundation</p>
            <h2 className="font-serif text-4xl font-bold text-text mb-6 leading-tight">Two Sites. One Connected Strategy.</h2>
            <p className="text-text/70 leading-relaxed mb-4 text-lg">
              We began with secured land at Primepoint Farm Estate in Ogun State — a launchpad chosen for its immediate proximity to Lagos, Africa&apos;s largest commercial city. From day one of operations, Agrofini is minutes from its primary consumer market.
            </p>
            <p className="text-text/70 leading-relaxed mb-4">
              The next step is a commercial horticulture site near Benin City, Edo State. Positioned 300km from Mile 12 — West Africa&apos;s largest open food market — the Benin City site is where our full crop model operates at commercial scale: habanero pepper, bell pepper, snail farming, cucumber, tomato, and okra.
            </p>
            <p className="text-text/70 leading-relaxed">
              Beyond these two sites lies a longer vision: the infrastructure layer that connects Nigerian farmland to the consumers and businesses that need it — reliably, freshly, and without the six middlemen currently standing in between.
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
          >
            {[
              { label: 'Site 1 — The Launchpad', location: 'Primepoint Farm Estate, Ogun State', size: 'Ogun State Site', desc: 'Adjacent to Lagos — immediate proximity to our primary market from day one.' },
              { label: 'Site 2 — The Expansion', location: 'Benin City, Edo State', size: 'Benin City Hub', desc: 'Commercial-scale horticulture hub. 300km from Mile 12. Six integrated crops.' },
              { label: 'The Long-Term Vision', location: 'Southwest Nigeria & Beyond', size: 'Network Vision', desc: 'A network of demand-matched farms and supply infrastructure serving West Africa.' },
            ].map((site, i) => (
              <motion.div
                key={site.label}
                className="bg-sage rounded-2xl p-6"
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-1">{site.label}</p>
                <div className="flex items-baseline gap-3 mb-2">
                  <p className="font-serif text-xl font-bold text-text">{site.size}</p>
                  <p className="text-text/50 text-sm">{site.location}</p>
                </div>
                <p className="text-text/60 text-sm leading-relaxed">{site.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-primaryDark text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-4">The Demand-First Model</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">We Know Who Is Buying<br />Before We Plant.</h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
              Most commercial farms grow produce and then search for a buyer. Agrofini works in reverse. We establish supply relationships — with hotels, restaurants, wholesale markets, and corporate buyers — and then build our planting calendar to match their confirmed demand exactly. Every seed represents a known order. Every harvest has a destination.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: 'fa-solid fa-comments', step: '01', title: 'Demand established first', body: 'Buyer volumes, crop preferences, and delivery schedules are confirmed before planting begins.' },
              { icon: 'fa-solid fa-seedling', step: '02', title: 'Farm planned to match', body: 'Our planting calendar is built around confirmed orders — not optimistic yield projections.' },
              { icon: 'fa-solid fa-truck-fast', step: '03', title: 'Delivered same day', body: '4–6 hours from harvest to your door. No overnight transit. No middlemen. No stale supply.' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                className="bg-white/5 border border-white/10 rounded-2xl p-8"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                  <i className={`${item.icon} text-accent text-lg`} aria-hidden="true" />
                </div>
                <p className="text-accent font-bold text-xs uppercase tracking-widest mb-2">{item.step}</p>
                <h3 className="font-serif text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-sage">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">What Drives Us</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text">Our Operating Principles</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="bg-white rounded-2xl p-7 shadow-sm"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <i className={`${v.icon} text-primary text-lg`} aria-hidden="true" />
                </div>
                <h3 className="font-serif text-lg font-bold text-text mb-2">{v.title}</h3>
                <p className="text-text/60 text-sm leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24 bg-warmWhite">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Our Roadmap</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text">How We Are Building</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {milestones.map((m, i) => (
              <motion.div
                key={m.phase}
                className="flex gap-5 p-6 bg-sage rounded-2xl"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-xs text-center leading-tight p-1">
                  {m.phase}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-text mb-2">{m.title}</h3>
                  <p className="text-text/60 text-sm leading-relaxed">{m.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <motion.div
          className="max-w-3xl mx-auto px-6"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-5">Partner With Us</h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            We are now establishing supply partnerships with hotels, restaurants, wholesale markets, and corporate buyers ahead of first operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/buyers" aria-label="Become a supply partner" className="inline-block bg-white text-primary px-10 py-4 rounded-full font-semibold text-lg hover:bg-warmWhite transition-colors">
              Become a Supply Partner
            </Link>
            <Link href="/produce" aria-label="View our produce" className="inline-block border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary transition-colors">
              View Our Produce
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  )
}

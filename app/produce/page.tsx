'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const crops = [
  {
    icon: 'fa-solid fa-pepper-hot',
    name: 'Habanero Pepper',
    acres: '12 Acres',
    color: 'bg-red-50 border-red-200',
    iconColor: 'text-red-500',
    cycles: '2 cycles/year',
    firstRevenue: 'Month 4–5',
    peakSeason: 'April – July',
    supplyTo: 'Wholesale markets, food processors, restaurants, households',
    detail: 'Our primary cash crop and largest income engine. Staggered across three planting blocks to capture the April–July Lagos peak-price window, when most Lagos pepper arrives after a 700–1,000km journey from the North. Ours travels 300km and arrives the same day.',
  },
  {
    icon: 'fa-solid fa-circle',
    name: 'Snail Farm',
    acres: '1 Acre',
    color: 'bg-amber-50 border-amber-200',
    iconColor: 'text-amber-600',
    cycles: 'Continuous',
    firstRevenue: 'Month 8–10',
    peakSeason: 'Year-round',
    supplyTo: 'Lagos hotels, restaurants, export channels',
    detail: 'Giant West African Snail (Archachatina marginata) — the highest net-profit-per-acre enterprise on the farm. Nigeria\'s annual snail demand of 7.5 million kg is chronically undersupplied. Once established, the snail operation provides steady, year-round supply with significant export upside from Year 2.',
  },
  {
    icon: 'fa-solid fa-leaf',
    name: 'Cucumber',
    acres: '4 Acres',
    color: 'bg-green-50 border-green-200',
    iconColor: 'text-green-600',
    cycles: '3 cycles/year',
    firstRevenue: 'Day 40',
    peakSeason: 'Jan–Feb · Jul–Aug · Nov–Dec',
    supplyTo: 'Wholesale markets, hotels, restaurants, households',
    detail: 'Three cycles per year, with first harvest on Day 40 — the fastest cash-flow crop on the farm. Mile 12 market trades enormous volumes of cucumber daily. Our proximity to Lagos means consistently fresher product and better market prices than supply arriving after long northern transit.',
  },
  {
    icon: 'fa-solid fa-seedling',
    name: 'Tomato',
    acres: '2 Acres',
    color: 'bg-orange-50 border-orange-200',
    iconColor: 'text-orange-500',
    cycles: '2 cycles/year',
    firstRevenue: 'Month 3',
    peakSeason: 'Dec–Mar · Oct–Nov',
    supplyTo: 'Wholesale markets, restaurants, food processors',
    detail: 'Nigeria imports over $360M in tomato paste annually despite being one of Africa\'s largest fresh tomato producers. Our dry-season cycles (December–March) capture peak prices when northern supply is most constrained. Premium positioning for direct-to-restaurant and processor supply.',
  },
  {
    icon: 'fa-solid fa-spa',
    name: 'Okra',
    acres: '1 Acre',
    color: 'bg-lime-50 border-lime-200',
    iconColor: 'text-lime-600',
    cycles: '4 cycles/year',
    firstRevenue: 'Day 35',
    peakSeason: 'Year-round',
    supplyTo: 'Wholesale markets, restaurants, households',
    detail: 'The first revenue on the farm — okra reaches first harvest in just 35 days, covering early labour costs before other crops are established. Four cycles per year deliver consistent monthly income and year-round availability for supply partners who rely on okra as a staple ingredient.',
  },
]

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const calendar = [
  { name: 'Habanero', color: 'bg-red-400', active: [3, 4, 5, 6, 8, 9, 10] },
  { name: 'Snail', color: 'bg-amber-400', active: [0,1,2,3,4,5,6,7,8,9,10,11] },
  { name: 'Cucumber', color: 'bg-green-400', active: [0,1,6,7,10,11] },
  { name: 'Tomato', color: 'bg-orange-400', active: [0,1,2,9,10,11] },
  { name: 'Okra', color: 'bg-lime-400', active: [0,1,2,3,4,5,6,7,8,9,10,11] },
]

export default function ProducePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primaryDark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p
            className="text-accent font-semibold uppercase tracking-widest text-sm mb-5"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
          >
            What We Grow
          </motion.p>
          <motion.h1
            className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          >
            Five Crops. Year-Round Supply.
          </motion.h1>
          <motion.p
            className="text-white/70 text-xl leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
          >
            Our five-crop system is engineered so that something is always in harvest — giving supply partners consistent availability across every month of the year.
          </motion.p>
        </div>
      </section>

      {/* Crop cards */}
      <section className="py-24 bg-warmWhite">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          {crops.map((crop, i) => (
            <motion.div
              key={crop.name}
              className={`grid grid-cols-1 lg:grid-cols-3 gap-8 border rounded-2xl p-8 ${crop.color}`}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              {/* Left */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <i className={`${crop.icon} ${crop.iconColor} text-2xl`} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-primary font-bold text-xs uppercase tracking-widest">{crop.acres}</p>
                    <h2 className="font-serif text-2xl font-bold text-text">{crop.name}</h2>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Cycles', value: crop.cycles },
                    { label: 'First revenue', value: crop.firstRevenue },
                    { label: 'Peak season', value: crop.peakSeason },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/60 rounded-xl p-3">
                      <p className="text-text/40 text-xs uppercase tracking-wider mb-1">{stat.label}</p>
                      <p className="text-text font-semibold text-sm">{stat.value}</p>
                    </div>
                  ))}
                  <div className="bg-white/60 rounded-xl p-3 col-span-2">
                    <p className="text-text/40 text-xs uppercase tracking-wider mb-1">Supply channels</p>
                    <p className="text-text font-semibold text-xs leading-snug">{crop.supplyTo}</p>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="lg:col-span-2">
                <p className="text-text/70 leading-relaxed">{crop.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Seasonality Calendar */}
      <section className="py-24 bg-sage">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Availability Calendar</p>
            <h2 className="font-serif text-4xl font-bold text-text">When We Harvest</h2>
            <p className="text-text/60 mt-3 max-w-xl mx-auto">Plan your supply agreements around our harvest windows. Five crops mean something is always available.</p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-6 shadow-sm overflow-x-auto"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <table className="w-full min-w-[600px]">
              <thead>
                <tr>
                  <th className="text-left text-text/50 text-xs font-semibold uppercase tracking-wider pb-4 pr-4 w-28">Crop</th>
                  {months.map((m) => (
                    <th key={m} className="text-center text-text/50 text-xs font-semibold uppercase tracking-wider pb-4 px-1">{m}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="space-y-2">
                {calendar.map((row, i) => (
                  <tr key={row.name}>
                    <td className="text-text font-semibold text-sm pr-4 py-2">{row.name}</td>
                    {months.map((_, mi) => (
                      <td key={mi} className="px-1 py-2">
                        <div className={`h-6 rounded-md ${row.active.includes(mi) ? row.color : 'bg-gray-100'} mx-auto`} style={{ width: '100%' }} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-text/30 text-xs mt-4">Projected harvest windows based on Benin City expansion site planting calendar. Subject to operational timelines.</p>
          </motion.div>
        </div>
      </section>

      {/* How to Order */}
      <section className="py-24 bg-warmWhite">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">How to Order</p>
            <h2 className="font-serif text-4xl font-bold text-text mb-12">Start Your Supply Relationship</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { step: '01', icon: 'fa-solid fa-envelope', title: 'Reach Out', body: 'Email us at info@agrofiniholdings.com or use the contact form. Tell us which crops you need, your approximate volumes, and your delivery location.' },
              { step: '02', icon: 'fa-solid fa-calendar-check', title: 'We Plan Together', body: 'We align your requirements with our planting calendar and confirm availability, pricing, and delivery schedule. No surprises.' },
              { step: '03', icon: 'fa-solid fa-truck-fast', title: 'Fresh Delivery', body: 'Your produce is harvested and dispatched directly to you — same-day delivery to Lagos, fresh from the farm.' },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.12 }}
              >
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4">
                  <i className={`${s.icon} text-white text-2xl`} aria-hidden="true" />
                </div>
                <p className="text-accent font-bold text-xs uppercase tracking-widest mb-2">{s.step}</p>
                <h3 className="font-serif text-lg font-bold text-text mb-2">{s.title}</h3>
                <p className="text-text/60 text-sm leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>
          <Link
            href="/contact"
            aria-label="Contact Agrofini to place a produce order"
            className="inline-block bg-primary text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-primaryDark transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}

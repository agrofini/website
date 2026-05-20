'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const crops = [
  {
    icon: 'fa-solid fa-pepper-hot',
    name: 'Habanero Pepper',
    color: 'bg-red-50 border-red-200',
    iconColor: 'text-red-500',
    peakSeason: 'April – July',
    supplyTo: 'Wholesale markets · Food processors · Restaurants · Households',
    desc: 'Premium hot pepper grown for the Lagos wholesale and hospitality market. Our Southwest Nigeria location means produce reaches Mile 12 and restaurant kitchens the same day it is harvested — fresher than supply arriving from longer distances.',
  },
  {
    icon: 'fa-solid fa-circle',
    name: 'Snail Farm',
    color: 'bg-amber-50 border-amber-200',
    iconColor: 'text-amber-600',
    peakSeason: 'Year-round',
    supplyTo: 'Hotels · Restaurants · Export channels',
    desc: 'Giant West African Snail (Archachatina marginata) — a premium protein source in high demand across Lagos\'s hospitality sector and in export markets. Year-round availability makes it a reliable anchor for hotel and restaurant supply agreements.',
  },
  {
    icon: 'fa-solid fa-pepper-hot',
    name: 'Bell Pepper',
    color: 'bg-yellow-50 border-yellow-200',
    iconColor: 'text-yellow-500',
    peakSeason: 'March – August',
    supplyTo: 'Wholesale markets · Hotels · Restaurants · Food processors',
    desc: 'Sweet bell peppers in red, green, and yellow varieties — consistently in demand across Lagos hospitality kitchens and retail markets. Grown alongside our habanero crop, they broaden our pepper supply offering with wide appeal across buyer segments.',
  },
  {
    icon: 'fa-solid fa-leaf',
    name: 'Cucumber',
    color: 'bg-green-50 border-green-200',
    iconColor: 'text-green-600',
    peakSeason: 'Multiple seasons',
    supplyTo: 'Wholesale markets · Hotels · Restaurants · Households',
    desc: 'Fresh cucumbers available across multiple harvest seasons per year. One of the highest-volume produce items in Lagos wholesale markets. Direct dispatch means it arrives crisp, with shelf life intact.',
  },
  {
    icon: 'fa-solid fa-seedling',
    name: 'Tomato',
    color: 'bg-orange-50 border-orange-200',
    iconColor: 'text-orange-500',
    peakSeason: 'Dry season (Oct – Mar)',
    supplyTo: 'Wholesale markets · Restaurants · Food processors',
    desc: 'Fresh tomatoes with peak availability in the dry season, when demand from Lagos restaurants and processors is highest. Grown for direct supply to professional kitchens and market traders who require consistent quality and reliable delivery.',
  },
  {
    icon: 'fa-solid fa-spa',
    name: 'Okra',
    color: 'bg-lime-50 border-lime-200',
    iconColor: 'text-lime-600',
    peakSeason: 'Year-round',
    supplyTo: 'Wholesale markets · Restaurants · Households',
    desc: 'A West African staple in continuous demand across Lagos households, restaurant kitchens, and market traders. Year-round availability makes okra a dependable inclusion in any supply agreement with Agrofini.',
  },
]

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const calendar = [
  { name: 'Habanero', color: 'bg-red-400', active: [3, 4, 5, 6, 8, 9, 10] },
  { name: 'Bell Pepper', color: 'bg-yellow-400', active: [2, 3, 4, 5, 6, 7] },
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
            Six Crops. Year-Round Supply.
          </motion.h1>
          <motion.p
            className="text-white/70 text-xl leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
          >
            Six complementary crops staggered across seasons — so supply partners always have something in harvest, regardless of the time of year.
          </motion.p>
        </div>
      </section>

      {/* Crop cards */}
      <section className="py-24 bg-warmWhite">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          {crops.map((crop, i) => (
            <motion.div
              key={crop.name}
              className={`grid grid-cols-1 md:grid-cols-3 gap-6 border rounded-2xl p-7 ${crop.color}`}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              {/* Left: identity + meta */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                    <i className={`${crop.icon} ${crop.iconColor} text-xl`} aria-hidden="true" />
                  </div>
                  <h2 className="font-serif text-xl font-bold text-text">{crop.name}</h2>
                </div>
                <div className="space-y-2">
                  <div className="bg-white/70 rounded-xl px-4 py-3">
                    <p className="text-text/40 text-xs uppercase tracking-wider mb-1">Peak availability</p>
                    <p className="text-text font-semibold text-sm">{crop.peakSeason}</p>
                  </div>
                  <div className="bg-white/70 rounded-xl px-4 py-3">
                    <p className="text-text/40 text-xs uppercase tracking-wider mb-1">Supplied to</p>
                    <p className="text-text font-medium text-xs leading-relaxed">{crop.supplyTo}</p>
                  </div>
                </div>
              </div>

              {/* Right: description */}
              <div className="md:col-span-2 flex items-center">
                <p className="text-text/65 leading-relaxed">{crop.desc}</p>
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
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Availability</p>
            <h2 className="font-serif text-4xl font-bold text-text">When We Harvest</h2>
            <p className="text-text/60 mt-3 max-w-xl mx-auto">Plan your supply agreements around our harvest windows.</p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-6 shadow-sm overflow-x-auto"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <table className="w-full min-w-[580px]">
              <thead>
                <tr>
                  <th className="text-left text-text/50 text-xs font-semibold uppercase tracking-wider pb-4 pr-4 w-28">Crop</th>
                  {months.map((m) => (
                    <th key={m} className="text-center text-text/50 text-xs font-semibold uppercase tracking-wider pb-4 px-1">{m}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {calendar.map((row) => (
                  <tr key={row.name}>
                    <td className="text-text font-semibold text-sm pr-4 py-2">{row.name}</td>
                    {months.map((_, mi) => (
                      <td key={mi} className="px-1 py-2">
                        <div className={`h-5 rounded ${row.active.includes(mi) ? row.color : 'bg-gray-100'}`} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-text/30 text-xs mt-4">Projected availability based on planned operations. Subject to operational timelines.</p>
          </motion.div>
        </div>
      </section>

      {/* How to Order */}
      <section className="py-24 bg-warmWhite">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">How to Order</p>
            <h2 className="font-serif text-4xl font-bold text-text">Start Your Supply Relationship</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { step: '01', icon: 'fa-solid fa-envelope', title: 'Reach Out', body: 'Email us or use the contact form. Tell us which crops you need, your approximate volumes, and your delivery location.' },
              { step: '02', icon: 'fa-solid fa-calendar-check', title: 'We Align Together', body: 'We confirm availability, pricing, and a delivery schedule that works for both sides. No surprises.' },
              { step: '03', icon: 'fa-solid fa-truck-fast', title: 'Fresh Delivery', body: 'Produce is harvested and dispatched directly to you — same-day delivery to Lagos from the farm.' },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.12 }}
              >
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-4">
                  <i className={`${s.icon} text-white text-xl`} aria-hidden="true" />
                </div>
                <p className="text-accent font-bold text-xs uppercase tracking-widest mb-2">{s.step}</p>
                <h3 className="font-serif text-lg font-bold text-text mb-2">{s.title}</h3>
                <p className="text-text/60 text-sm leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>
          <Link
            href="/contact"
            aria-label="Contact Agrofini to start a supply relationship"
            className="inline-block bg-primary text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-primaryDark transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}

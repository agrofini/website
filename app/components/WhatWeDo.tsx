'use client'

import { motion } from 'framer-motion'

const crops = [
  {
    icon: 'fa-solid fa-pepper-hot',
    title: 'Habanero Pepper',
    acres: '12 Acres',
    desc: 'Our primary income engine. Staggered across three blocks to hit the April–July Lagos peak price window when bags command premium prices. Most Lagos pepper travels 700–1,000km from the North — ours arrives fresher from just 300km.',
  },
  {
    icon: 'fa-solid fa-circle',
    title: 'Snail Farm',
    acres: '1 Acre',
    desc: 'Giant West African Snail (Archachatina marginata) — the highest net-profit-per-acre enterprise on the farm. Nigeria\'s annual snail demand of 7.5 million kg is chronically undersupplied. Ours supplies Lagos hotels, restaurants, and export channels.',
  },
  {
    icon: 'fa-solid fa-leaf',
    title: 'Cucumber',
    acres: '4 Acres',
    desc: 'Three cycles per year, first harvest on Day 40. Known in Nigeria as the "Farmer\'s ATM" — Mile 12 market alone trades over ₦100M in cucumber daily. Our fastest and most consistent cash-flow crop.',
  },
  {
    icon: 'fa-solid fa-seedling',
    title: 'Tomato',
    acres: '2 Acres',
    desc: 'Nigeria imports over $360M in tomato paste annually despite being one of Africa\'s largest producers. Our dry-season cycles (December–March) capture peak prices when northern supply is most constrained.',
  },
  {
    icon: 'fa-solid fa-spa',
    title: 'Okra',
    acres: '1 Acre',
    desc: 'Four cycles per year with first harvest in just 35 days — Okra covers monthly labour costs during the establishment period before pepper revenue arrives. A monthly income stabiliser that also feeds the snail farm as a byproduct.',
  },
]

export default function WhatWeDo() {
  return (
    <section className="py-24 bg-sage">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Our Operations</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text mb-4">Five Crops. One Integrated Farm.</h2>
          <p className="text-text/60 max-w-2xl mx-auto">
            Our near-term operational plan at the Benin City expansion site — five enterprises staggered to generate income every month of the year.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {crops.map((crop, i) => (
            <motion.div
              key={crop.title}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-14 h-14 bg-sage rounded-xl flex items-center justify-center mb-5">
                <i className={`${crop.icon} text-primary text-2xl`} aria-hidden="true" />
              </div>
              <p className="text-accent font-bold text-xs uppercase tracking-wider mb-1">{crop.acres}</p>
              <h3 className="font-serif text-lg font-bold text-text mb-3">{crop.title}</h3>
              <p className="text-text/60 text-sm leading-relaxed">{crop.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

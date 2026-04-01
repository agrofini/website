'use client'

import { motion } from 'framer-motion'

const services = [
  {
    icon: 'fa-solid fa-seedling',
    title: 'Greenhouse Farming',
    desc: 'Nigeria spends billions importing vegetables its own climate can produce. Our climate-controlled greenhouses deliver high-value crops year-round — breaking the import cycle one harvest at a time.',
  },
  {
    icon: 'fa-solid fa-fish',
    title: 'Aquaculture',
    desc: 'Africa\'s largest fish consumer imports hundreds of thousands of tonnes annually. Our integrated fish farming operations are designed to capture domestic demand with locally farmed, affordable protein.',
  },
  {
    icon: 'fa-solid fa-egg',
    title: 'Poultry Production',
    desc: 'Poultry is Nigeria\'s most consumed protein, with demand consistently outpacing supply. Our commercial systems are built for scale — delivering eggs and live birds to a market that never stops growing.',
  },
  {
    icon: 'fa-solid fa-microchip',
    title: 'Agro-Integrated Technologies',
    desc: 'Data is the new soil. IoT sensors, precision irrigation, and farm management software drive our yields, reduce waste, and give investors full visibility into operations and performance.',
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
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text mb-4">Four Pillars of Production</h2>
          <p className="text-text/60 max-w-2xl mx-auto">
            Every pillar targets a proven, high-demand gap in Nigeria&apos;s food supply chain.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-14 h-14 bg-sage rounded-xl flex items-center justify-center mb-5">
                <i className={`${service.icon} text-primary text-2xl`} aria-hidden="true" />
              </div>
              <h3 className="font-serif text-xl font-bold text-text mb-3">{service.title}</h3>
              <p className="text-text/60 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

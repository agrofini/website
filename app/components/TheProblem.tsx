'use client'

import { motion } from 'framer-motion'

const crisisStats = [
  {
    stat: '$6B+',
    label: 'In food imports every year',
    detail: 'Nigeria spends billions importing food its own soil is capable of producing — from tomato paste to processed cereals. A structural failure, not a natural one.',
  },
  {
    stat: '40%',
    label: 'Of harvest lost before sale',
    detail: 'Without cold chain infrastructure and disciplined logistics, nearly half of what Nigerian farmers grow is wasted — never reaching the people who need it.',
  },
  {
    stat: 'Up to 6',
    label: 'Middlemen between farm and plate',
    detail: 'The Nigerian food supply chain runs through layers of brokers and intermediaries — each adding cost, delay, and spoilage to food that could have arrived direct.',
  },
]

export default function TheProblem() {
  return (
    <section className="py-24 bg-primaryDark text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-4">The Problem We Exist to Solve</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">
            Nigeria Grows Enough to Feed Itself.<br />Its Food System Does Not.
          </h2>
          <p className="text-white/60 mt-5 max-w-2xl mx-auto text-lg leading-relaxed">
            The gap is not a shortage of land, climate, or demand. It is a shortage of infrastructure, capital, and commercial discipline between the farm and the consumer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {crisisStats.map((item, i) => (
            <motion.div
              key={item.label}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <p className="font-serif text-5xl md:text-6xl font-bold text-accent mb-3">{item.stat}</p>
              <p className="text-white font-semibold text-base mb-3">{item.label}</p>
              <p className="text-white/50 text-sm leading-relaxed">{item.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <p className="text-white/80 text-lg leading-relaxed font-serif italic">
            &ldquo;This is not a farming problem. It is an infrastructure, logistics, and capital problem. That is exactly the problem Agrofini was built to solve.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  )
}

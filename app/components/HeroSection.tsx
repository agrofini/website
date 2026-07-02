'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CONTACT_SUPPLY } from '../lib/contactLinks'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fallback background shown before video loads */}
      <div className="absolute inset-0 bg-gradient-to-br from-primaryDark via-primary to-[#2d6a4f]" />

      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/farms_drone.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <motion.p
          className="text-accent font-semibold uppercase tracking-widest text-sm mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Agrofini West Africa Limited
        </motion.p>

        <motion.h1
          className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Grown to Order.<br />Delivered Direct.
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-white/85 mb-4 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Commercial farms in Southwest Nigeria supplying Lagos&apos;s hotels, restaurants, wholesale markets, and households — fresh produce direct from the farm, zero middlemen.
        </motion.p>

        <motion.p
          className="text-base text-white/60 mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          Habanero · Snails · Cucumber · Tomato · Okra
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          <Link
            href="/produce"
            aria-label="View what Agrofini grows"
            className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-warmWhite transition-colors text-lg"
          >
            Our Produce
          </Link>
          <Link
            href={CONTACT_SUPPLY}
            aria-label="Become a supply partner with Agrofini"
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors text-lg"
          >
            Become a Partner
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/60">
          <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  )
}

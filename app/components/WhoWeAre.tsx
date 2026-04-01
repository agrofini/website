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
              <p className="text-primary/60 font-medium">Prymepoint Farm Estate</p>
              <p className="text-primary/40 text-sm mt-1">Agboro Village, Obafemi-Owode LGA, Ogun State</p>
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
            Nigeria has the land, the climate, and the demand. What it has lacked is structured, commercially disciplined, technology-driven farming at scale. Agrofini West Africa Limited was founded to close that gap — building an integrated agribusiness that is modern, accountable, and built to last generations.
          </p>
          <p className="text-text/70 text-lg leading-relaxed mt-4">
            Incorporated under Nigerian law (RC No. 8181060) and anchored in Ogun State&apos;s agricultural heartland, we have already secured our operational launchpad — 2 hectares within Prymepoint Farm Estate — as the first deliberate step toward 600 acres of commercial farmland.
          </p>
          <div className="mt-8 pt-8 border-t border-sage">
            <p className="text-primary font-serif text-lg font-semibold italic">
              &ldquo;We are not just building a farm. We are building the infrastructure for Nigeria&apos;s food sovereignty.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

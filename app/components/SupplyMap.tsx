'use client'

import { motion } from 'framer-motion'

export default function SupplyMap() {
  return (
    <section className="py-24 bg-warmWhite overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Geographic Edge</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text">
            300km vs 1,000km.<br />The Distance That Defines the Margin.
          </h2>
          <p className="text-text/60 mt-5 max-w-2xl mx-auto text-lg leading-relaxed">
            Most Lagos produce travels the length of the country from the North. Ours travels a fraction of that — arriving fresher, cheaper, and with fewer hands touching it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* SVG Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <svg viewBox="0 0 420 360" className="w-full max-w-md" aria-label="Map showing Agrofini supply route vs northern Nigeria route to Lagos">
              {/* Ocean background */}
              <rect width="420" height="360" fill="#EBF4FA" rx="16" />

              {/* Nigeria simplified outline */}
              <polygon
                points="78,292 82,310 118,328 155,340 190,328 222,314 248,295 272,276 298,250 332,218 368,175 396,140 386,98 350,66 293,50 236,49 173,53 110,69 68,104 54,156 57,212 64,258 78,292"
                fill="#DCF0E4"
                stroke="#6FAE8A"
                strokeWidth="1.5"
                opacity="0.8"
              />

              {/* Route: Kano → Lagos (northern, dashed) */}
              <motion.path
                d="M 290,92 Q 210,195 82,290"
                stroke="#9CA3AF"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="7,5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, delay: 0.2, ease: 'easeOut' }}
              />

              {/* Route: Benin City → Lagos (Agrofini, solid green) */}
              <motion.path
                d="M 193,268 L 82,290"
                stroke="#00674B"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.6, ease: 'easeOut' }}
              />

              {/* Route: Ogun → Lagos (launchpad, short) */}
              <motion.path
                d="M 112,263 L 82,288"
                stroke="#F4A726"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                strokeDasharray="4,3"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1, ease: 'easeOut' }}
              />

              {/* City: Lagos / Mile 12 */}
              <motion.circle cx="82" cy="290" r="12" fill="#F4A726" opacity="0.25"
                initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8 }} />
              <motion.circle cx="82" cy="290" r="7" fill="#F4A726"
                initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.85 }} />
              <motion.circle cx="82" cy="290" r="3" fill="#1C1C1C"
                initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.9 }} />
              <text x="94" y="284" fontSize="11" fill="#1C1C1C" fontWeight="700">Mile 12</text>
              <text x="94" y="297" fontSize="10" fill="#6B7280">Lagos</text>

              {/* City: Ogun State / Primepoint */}
              <motion.circle cx="113" cy="263" r="6" fill="#F4A726" opacity="0.7"
                initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.95 }} />
              <text x="122" y="256" fontSize="10" fill="#F4A726" fontWeight="600">Ogun State</text>
              <text x="122" y="268" fontSize="9" fill="#F4A726" opacity="0.7">Launchpad</text>

              {/* City: Benin City */}
              <motion.circle cx="193" cy="268" r="9" fill="#00674B" opacity="0.2"
                initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.05 }} />
              <motion.circle cx="193" cy="268" r="6" fill="#00674B"
                initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.1 }} />
              <motion.circle cx="193" cy="268" r="2.5" fill="white"
                initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 1.15 }} />
              <text x="204" y="262" fontSize="11" fill="#00674B" fontWeight="700">Benin City</text>
              <text x="204" y="275" fontSize="9" fill="#00674B" opacity="0.7">Edo State</text>

              {/* City: Kano */}
              <motion.circle cx="290" cy="92" r="7" fill="#D1D5DB"
                initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }} />
              <motion.circle cx="290" cy="92" r="3" fill="#9CA3AF"
                initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.35 }} />
              <text x="290" y="76" textAnchor="middle" fontSize="11" fill="#9CA3AF" fontWeight="600">Kano</text>
              <text x="290" y="110" textAnchor="middle" fontSize="9" fill="#9CA3AF">Northern Nigeria</text>

              {/* Distance label: Agrofini route */}
              <rect x="120" y="270" width="62" height="20" rx="10" fill="#00674B" />
              <text x="151" y="284" textAnchor="middle" fontSize="10" fill="white" fontWeight="700">300 km</text>

              {/* Distance label: Northern route */}
              <rect x="218" y="167" width="80" height="20" rx="10" fill="#F3F4F6" />
              <text x="258" y="181" textAnchor="middle" fontSize="10" fill="#9CA3AF" fontWeight="600">~1,000 km</text>
            </svg>
          </motion.div>

          {/* Route comparison cards */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {/* Agrofini route */}
            <div className="bg-primary/5 border-l-4 border-primary rounded-r-2xl p-7">
              <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">Agrofini Route</p>
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-serif text-5xl font-bold text-primary">300km</span>
                <span className="text-text/60 text-sm leading-snug">Benin City → Mile 12<br />4–6 hours farm to market</span>
              </div>
              <p className="text-text/60 text-sm leading-relaxed">Fresher produce. Direct delivery. No cold-chain break. No broker in between. The produce that reaches Mile 12 this way commands a better price and arrives with longer shelf life.</p>
            </div>

            {/* Northern route */}
            <div className="bg-gray-50 border-l-4 border-gray-200 rounded-r-2xl p-7">
              <p className="text-gray-400 font-semibold text-xs uppercase tracking-widest mb-3">Northern Nigeria Route</p>
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-serif text-5xl font-bold text-gray-300">700–1,000km</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">More transit time. More handlers. More spoilage. Higher delivered cost to the same market. This is where the majority of Lagos produce currently originates — and why the margin exists for a better-positioned operator.</p>
            </div>

            {/* Conclusion */}
            <div className="bg-accent/10 rounded-2xl p-5">
              <p className="text-text/70 text-sm leading-relaxed"><span className="font-bold text-text">The structural result:</span> Agrofini produce reaches Lagos consumers up to three times fresher than its northern competition, at a structurally lower delivered cost — not as a one-time advantage, but on every single delivery, indefinitely.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import Disclaimer from '../components/Disclaimer'

const reasons = [
  {
    icon: 'fa-solid fa-location-dot',
    title: 'Structural Supply Advantage',
    desc: 'Most Lagos pepper travels 700–1,000km from Northern Nigeria. Ours travels 300km from Benin City — arriving fresher, faster, and cheaper. That is a structural edge that no amount of effort from northern competitors can close.',
  },
  {
    icon: 'fa-solid fa-building-columns',
    title: 'Formally Registered',
    desc: 'RC No. 8181060 — Agrofini West Africa Limited is a properly incorporated Nigerian company, verifiable with the Corporate Affairs Commission (CAC). Not a concept. A company.',
  },
  {
    icon: 'fa-solid fa-calendar-check',
    title: 'Income Every Month',
    desc: 'Five staggered crops — okra, cucumber, pepper, tomato, and snails — are scheduled so harvest revenue arrives every single month. No single-crop risk. No long gaps between cash flows.',
  },
  {
    icon: 'fa-solid fa-rotate',
    title: 'Integrated Operations',
    desc: 'Snail farm waste fertilises crop zones. Pepper and cucumber off-cuts feed the snails. Shared drip irrigation reduces per-acre cost by ~15% versus standalone operations. Every enterprise makes the others cheaper.',
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'Data-Backed Projections',
    desc: 'Every figure in our farm plan is grounded in 2025 live market data — BusinessDay Lagos pepper prices, NBS food inflation, CBN macroeconomic forecasts, and verified yield data from Veggie Concept and Veggie Grow Nigeria.',
  },
  {
    icon: 'fa-solid fa-clock',
    title: 'Fast First Cash Flow',
    desc: 'Okra and cucumber generate first revenue on Day 35 and Day 40 respectively — well before the 4–5 month window to first pepper harvest. Capital does not sit idle. The farm is earning from the first month.',
  },
]

const timeline = [
  {
    phase: 'Phase 1',
    period: 'Months 1–6',
    title: 'Farm Setup & Infrastructure',
    bullets: [
      'Borehole drilled; 20-acre drip irrigation system installed',
      'Snail pen constructed; 2,000 Archachatina marginata breeders stocked',
      'Pepper nurseries established; okra and cucumber planted (Day 1 cash crops)',
      'Farm team hired: Manager, Field Officers, Snail Technician, Driver, Security',
    ],
  },
  {
    phase: 'Phase 2',
    period: 'Months 6–12',
    title: 'First Harvest & Revenue',
    bullets: [
      'Okra first harvest Day 35; cucumber first harvest Day 40 — earliest cash flows',
      'Habanero pepper harvest begins Month 3–4; peak Lagos prices April–July',
      'Mile 12 wholesale agent relationship operational; direct Lagos dispatch running',
      'First investor reporting period — full yield, revenue, and cost transparency',
    ],
  },
  {
    phase: 'Phase 3',
    period: 'Months 12–24',
    title: 'Scale, Export & Partnerships',
    bullets: [
      'Snail operation reaches full maturity; Lagos hotel and restaurant supply contracts',
      'NAFDAC registration for processed snail products; NEPC export licence initiated',
      'Second-year operations benefit from amortised infrastructure — lower per-acre cost',
      'Land expansion evaluation; SEC compliance pathway and structured investment framework',
    ],
  },
]

const trust = [
  {
    icon: 'fa-solid fa-building-columns',
    title: 'CAC Registered — RC No. 8181060',
    body: 'Agrofini West Africa Limited is formally incorporated with the Corporate Affairs Commission of Nigeria. Our registration is on public record and verifiable by any investor or partner.',
  },
  {
    icon: 'fa-solid fa-scale-balanced',
    title: 'SEC Compliance Pathway',
    body: 'As we grow, Agrofini intends to register with the Securities and Exchange Commission (SEC) of Nigeria, operating within all regulatory frameworks governing investment solicitation in Nigeria.',
  },
  {
    icon: 'fa-solid fa-handshake',
    title: 'Regulated Investment Partners',
    body: 'We are actively exploring partnerships with licensed fund managers and investment advisory firms to structure any capital raises in full compliance with Nigerian financial regulations.',
  },
  {
    icon: 'fa-solid fa-file-contract',
    title: 'Legally Binding Agreements',
    body: 'Investment participation will be documented through legally binding commercial agreements — including the possibility of formally issued investment notes under appropriate regulatory frameworks.',
  },
]

export default function InvestPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 bg-primaryDark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p
            className="text-accent font-semibold uppercase tracking-widest text-sm mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Investment Opportunity
          </motion.p>
          <motion.h1
            className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            The Ground Floor of Nigeria&apos;s<br />Next Great Agribusiness.
          </motion.h1>
          <motion.p
            className="text-white/70 text-xl leading-relaxed max-w-2xl mx-auto mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Nigeria has 220 million people, a $3 billion annual food import bill, and a shortage of disciplined, commercially structured farming operations. Agrofini was built to close that gap — and we are raising our first round to do it.
          </motion.p>
          <motion.p
            className="text-white/40 text-sm max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            RC No. 8181060 · 20-Acre Commercial Farm · Benin City, Edo State, Nigeria
          </motion.p>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="py-24 bg-warmWhite">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">The Opportunity</p>
            <h2 className="font-serif text-3xl font-bold text-text mb-5 leading-snug">
              20 Acres. Five Crops. One Direct Line to Lagos.
            </h2>
            <p className="text-text/70 leading-relaxed mb-4">
              Agrofini operates a 20-acre commercial farm in Benin City, Edo State — growing habanero pepper, snails, cucumber, tomato, and okra for direct supply to Lagos wholesale markets. Benin City sits 300km from Mile 12, West Africa&apos;s largest open food market. That proximity is our competitive edge.
            </p>
            <p className="text-text/70 leading-relaxed">
              Most Lagos pepper travels 700–1,000km from the North. Ours arrives 4–6 hours after harvest — fresher, cheaper, and with zero middlemen between farm and buyer. The supply advantage is structural and permanent.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">The Projections</p>
            <h2 className="font-serif text-3xl font-bold text-text mb-5 leading-snug">
              ₦212M Year 1. ₦742M Over Three Years.
            </h2>
            <p className="text-text/70 leading-relaxed mb-4">
              Our farm operations plan — built on 2025 live Nigerian market data from BusinessDay, NBS, and CBN sources — projects ₦212M annual net profit from a ₦38.9M Year 1 investment, with revenue growing at 15.5% year-on-year as infrastructure costs are amortised.
            </p>
            <p className="text-text/50 text-sm leading-relaxed">
              These are forward-looking projections, not guarantees. Actual results depend on market conditions, operational execution, and management quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Invest */}
      <section className="py-24 bg-sage">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Why Agrofini</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text">Six Reasons to Invest</h2>
            <p className="text-text/60 mt-4 max-w-2xl mx-auto">
              Not every agribusiness is built the same. Here is what separates Agrofini — structurally, operationally, and commercially.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                  <i className={`${reason.icon} text-primary text-lg`} aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl font-bold text-text mb-3">{reason.title}</h3>
                <p className="text-text/60 leading-relaxed text-sm">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Compliance */}
      <section className="py-24 bg-warmWhite">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Transparency & Trust</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text">Built to Be Trusted</h2>
            <p className="text-text/60 mt-4 max-w-2xl mx-auto leading-relaxed">
              Trust is not claimed — it is demonstrated. Here is how Agrofini earns it at every stage of growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trust.map((item, i) => (
              <motion.div
                key={item.title}
                className="flex gap-5 p-6 bg-sage rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className={`${item.icon} text-primary text-lg`} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-text mb-2">{item.title}</h3>
                  <p className="text-text/60 text-sm leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-primaryDark text-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-4">Roadmap</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">How We Build</h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto">
              A 24-month roadmap from secured launchpad to commercial-scale agribusiness.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.phase}
                className="bg-white/5 border border-white/10 rounded-2xl p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-5 text-text font-bold font-serif text-lg">
                  {i + 1}
                </div>
                <p className="text-accent font-semibold text-sm mb-1">{item.phase}</p>
                <p className="text-white/40 text-xs mb-3">{item.period}</p>
                <h3 className="font-serif text-xl font-bold text-white mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-white/60 leading-relaxed">
                      <i className="fa-solid fa-circle-check text-accent/70 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-accent text-center">
        <motion.div
          className="max-w-3xl mx-auto px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-text/60 font-semibold uppercase tracking-widest text-sm mb-5">First Round — Now Open</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-text mb-5 leading-tight">
            The Ground Floor Doesn&apos;t<br />Stay Empty Long.
          </h2>
          <p className="text-text/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            We are looking for partners who understand the size of this opportunity — and who want to be part of building it from day one. If that is you, let&apos;s talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@agrofiniholdings.com"
              aria-label="Express investment interest via email"
              className="inline-block bg-text text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-primaryDark transition-colors"
            >
              Express Investment Interest
            </a>
            <a
              href="/contact"
              aria-label="Contact Agrofini team"
              className="inline-block border-2 border-text text-text px-10 py-4 rounded-full font-semibold text-lg hover:bg-text hover:text-white transition-colors"
            >
              Contact the Team
            </a>
          </div>
        </motion.div>
      </section>

      {/* Disclaimer box */}
      <section className="py-12 bg-warmWhite">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-sage border-l-4 border-primary rounded-r-xl p-6 space-y-3">
            <p className="text-text/70 text-sm leading-relaxed">
              <strong className="text-text">Important Notice:</strong> This page presents a forward-looking business vision. Agrofini West Africa Limited (RC No. 8181060) is currently in its pre-operational phase. All projections, timelines, and market figures are indicative and subject to change based on operational, regulatory, and market conditions.
            </p>
            <p className="text-text/70 text-sm leading-relaxed">
              This does not constitute a public offer, a regulated financial product, or a solicitation to invest under any securities law. Agrofini West Africa Limited is not currently registered with the Securities and Exchange Commission (SEC) of Nigeria. Any future capital raise will be conducted in full compliance with applicable Nigerian law, including through licensed and regulated intermediaries where required by law.
            </p>
            <p className="text-text/70 text-sm leading-relaxed">
              Market data and statistics referenced on this page are drawn from publicly available trade data, FAO reports, and third-party research. They are provided for context only and do not constitute a guarantee of business performance or investment returns. All investments carry risk, including the risk of loss of capital.
            </p>
            <p className="text-text/70 text-sm leading-relaxed">
              Prospective investors are strongly advised to conduct their own independent due diligence and seek professional financial, legal, and tax advice before making any investment decision.
            </p>
          </div>
        </div>
      </section>

      <Disclaimer />
    </>
  )
}

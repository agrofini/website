'use client'

import { useScroll, motion } from 'framer-motion'
import Link from 'next/link'

const influenceStages = [
  {
    stage: 'Partnership Development',
    sub: 'Where we are today',
    influence: 100,
    active: true,
    partnerNote: 'Specifications unset. Infrastructure uncommitted. Research agenda unwritten. Every major decision is still yours to influence.',
  },
  {
    stage: 'Master Planning',
    sub: 'Next milestone',
    influence: 65,
    active: false,
    partnerNote: 'Greenhouse layouts, system integration, and infrastructure decisions are being committed. Founding partners shape these. Others inherit them.',
  },
  {
    stage: 'Construction',
    sub: 'Phase One build',
    influence: 35,
    active: false,
    partnerNote: 'Physical infrastructure is locked in. Partners can participate commercially but the founding specifications were set without them.',
  },
  {
    stage: 'Operations',
    sub: 'Commercial production begins',
    influence: 15,
    active: false,
    partnerNote: 'Training curricula written. Supply chains established. Competitive positions already occupied. New partners enter as vendors.',
  },
  {
    stage: 'Regional Expansion',
    sub: 'Scale across West Africa',
    influence: 5,
    active: false,
    partnerNote: 'The standard has been set. The market has an incumbent. The window to define the category belongs to someone else.',
  },
]

const partnerGains = [
  {
    icon: 'fa-solid fa-lock',
    title: 'Category Exclusivity. Permanently.',
    commercial: 'One organization per category, for the life of the Centre.',
    desc: 'If your closest competitor claims your slot before you, they set the specifications, embed their brand in training, and generate the performance data. There is no second position in a category. There is only the founding partner and everyone else.',
  },
  {
    icon: 'fa-solid fa-compass-drafting',
    title: 'Specification Influence Before Construction.',
    commercial: 'Your engineers and product teams co-design the systems.',
    desc: 'Founding partners work with Agrofini during master planning — influencing greenhouse layouts, system integration, infrastructure decisions, and performance benchmarks. Your products become the baseline installation. Every future evaluation happens against your standard.',
  },
  {
    icon: 'fa-solid fa-display',
    title: 'A Market Development Platform, Not a Sponsorship.',
    commercial: 'Your brand is visible to every grower, buyer, and institution that visits.',
    desc: 'The Centre will host commercial growers, government agencies, university researchers, agricultural investors, and international delegations. From the first day of operations, they see your systems producing results under real West African commercial conditions. This is active market development, compounding over years.',
  },
  {
    icon: 'fa-solid fa-flask',
    title: 'Validated West African Performance Data.',
    commercial: 'Real commercial trials. Publishable results. Repeatable methodology.',
    desc: 'Less than 2% of Nigerian vegetables are grown under protection. Credible performance data for international agricultural products under West African conditions essentially does not exist. Founding partners generate it — from live commercial operations, not controlled pilots — giving them a market-entry asset competitors cannot easily replicate.',
  },
]

const nigeriaFacts = [
  {
    stat: '220M+',
    label: "Africa's largest population",
    implication: 'Growing at 3% annually, Nigeria adds 6M+ consumers per year. The domestic demand curve for premium fresh produce is structural and accelerating — not cyclical.',
  },
  {
    stat: '<2%',
    label: 'Vegetables grown under protection',
    implication: 'The gap between current protected agriculture coverage and commercial potential is essentially the entire market. There is no incumbent standard to displace. You are building the category, not entering one.',
  },
  {
    stat: '$6B+',
    label: 'Annual food import bill',
    implication: 'Nigeria imports food its own soil is capable of producing. That figure represents the commercial scale of domestic production opportunity — and direct alignment with government and development-finance priorities.',
  },
  {
    stat: '0',
    label: 'Competing Centres of Excellence',
    implication: 'There is no established protected agriculture Centre of Excellence in West Africa. The first organization in each technology category faces no incumbent. The standard is theirs to define.',
  },
]

const partnerJourney = [
  {
    step: '01',
    icon: 'fa-solid fa-calendar-check',
    title: 'Request a Founding Partner Briefing',
    desc: "A 30-minute conversation with Agrofini's leadership team. We walk through the Centre's master plan, the available founding partner categories, and what the programme involves in practice. No commitment required. We answer every question directly.",
    cta: 'Schedule Your Briefing',
    href: 'mailto:info@agrofiniholdings.com?subject=Founding%20Partner%20Briefing%20Request%20%E2%80%94%20Centre%20of%20Excellence',
  },
  {
    step: '02',
    icon: 'fa-solid fa-compass-drafting',
    title: 'Define Your Category Position',
    desc: 'If there is mutual strategic fit, we move to a structured alignment conversation: which category, what you would demonstrate, what commercial objectives the partnership serves, what data you would generate, and how the relationship is structured.',
    cta: null,
    href: null,
  },
  {
    step: '03',
    icon: 'fa-solid fa-handshake',
    title: 'Shape the Centre Together',
    desc: 'Founding partners join the master planning process before construction begins. You influence specifications relevant to your category, your brand is embedded in the Centre from its first day of operation, and you begin generating West African market presence years ahead of competitors.',
    cta: null,
    href: null,
  },
]

const timeline = [
  { status: 'complete', title: 'Vision & Strategy', desc: 'The Centre of Excellence concept, founding partner programme, and international engagement strategy are fully defined.' },
  { status: 'complete', title: 'Brand & Market Presence', desc: "Agrofini's brand is live. The Centre is being presented to strategic partners across Europe, Asia, and North America." },
  { status: 'complete', title: 'Land Identified', desc: 'Approximately 50+ acres identified across Ogun State and Benin City, Edo State, Nigeria (growing and expanding) — forming the foundation for future commercial greenhouse development and the Centre of Excellence. Acquisition is in progress.' },
  { status: 'active', title: 'International Partnership Development', desc: 'Founding partner discussions are underway across 11 technology categories. This is the highest-influence window for prospective partners.' },
  { status: 'upcoming', title: 'Master Planning', desc: 'Physical layout, greenhouse specifications, infrastructure, and system integration — developed in collaboration with founding partners.' },
  { status: 'upcoming', title: 'Phase One Greenhouse Development', desc: 'Construction begins. Founding-level specifications are now committed.' },
  { status: 'upcoming', title: 'Training Academy & Research Centre', desc: 'Curricula, research agenda, and demonstration programmes — all shaped by the founding partners already in place.' },
  { status: 'upcoming', title: 'Operations & Regional Expansion', desc: 'Commercial production live. Founding partner brands visible to every visitor from day one. The standard has been set.' },
]

const openSlots = [
  { icon: 'fa-solid fa-warehouse', title: 'Greenhouse Structures' },
  { icon: 'fa-solid fa-gears', title: 'Greenhouse Engineering' },
  { icon: 'fa-solid fa-dna', title: 'Seed Genetics' },
  { icon: 'fa-solid fa-droplet', title: 'Irrigation & Fertigation' },
  { icon: 'fa-solid fa-temperature-half', title: 'Climate Control' },
  { icon: 'fa-solid fa-robot', title: 'Automation & AI' },
  { icon: 'fa-solid fa-flask', title: 'Crop Nutrition' },
  { icon: 'fa-solid fa-shield-halved', title: 'Biological Crop Protection' },
  { icon: 'fa-solid fa-microscope', title: 'Research' },
  { icon: 'fa-solid fa-graduation-cap', title: 'University & Academic' },
  { icon: 'fa-solid fa-coins', title: 'Agricultural Finance' },
]

export default function OurJourneyPage() {
  const { scrollYProgress } = useScroll()

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-[73px] left-0 h-1 bg-accent z-40 origin-left w-full"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero */}
      <section className="pt-32 pb-28 bg-primaryDark text-white relative overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          >
            <Link
              href="/centre-of-excellence"
              className="inline-flex items-center gap-2 text-accent/80 hover:text-accent text-sm font-medium mb-8 transition-colors"
            >
              <i className="fa-solid fa-arrow-left text-xs" aria-hidden="true" />
              Centre of Excellence
            </Link>
          </motion.div>

          <motion.p
            className="text-accent font-semibold uppercase tracking-widest text-sm mb-5"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }}
          >
            Founding Partner Programme · Our Journey
          </motion.p>
          <motion.h1
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
          >
            The Window to Define the Standard Is Open.
          </motion.h1>
          <motion.p
            className="text-white/70 text-xl leading-relaxed max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
          >
            Nigeria is building its protected agriculture sector from scratch. Organizations that establish themselves as Founding Partners now — before specifications are locked, curricula are written, and infrastructure is committed — will define what this industry looks like for a generation.
          </motion.p>

          {/* Urgency indicators */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center mb-10"
            initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }}
          >
            {[
              { label: '11 founding positions', sub: 'One per category', icon: 'fa-solid fa-layer-group' },
              { label: 'Pre-construction stage', sub: 'Maximum partner influence', icon: 'fa-solid fa-compass-drafting' },
              { label: '0 competing centres', sub: 'In West Africa', icon: 'fa-solid fa-earth-africa' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 bg-white/8 border border-white/15 rounded-xl px-5 py-3">
                <i className={`${item.icon} text-accent text-sm`} aria-hidden="true" />
                <div className="text-left">
                  <p className="text-white font-semibold text-sm">{item.label}</p>
                  <p className="text-white/45 text-xs">{item.sub}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}
          >
            <a
              href="mailto:info@agrofiniholdings.com?subject=Founding%20Partner%20Briefing%20Request%20%E2%80%94%20Centre%20of%20Excellence"
              aria-label="Schedule a Founding Partner briefing"
              className="inline-block bg-accent text-text px-10 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-colors"
            >
              Schedule a Founding Partner Briefing
            </a>
            <Link
              href="/centre-of-excellence"
              aria-label="View all founding partner categories"
              className="inline-block border-2 border-white/30 text-white/80 px-10 py-4 rounded-full font-semibold text-lg hover:border-white hover:text-white transition-colors"
            >
              View All Categories
            </Link>
          </motion.div>
        </div>
      </section>

      {/* The Influence Window — the core commercial insight */}
      <section className="py-24 bg-warmWhite">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">The Commercial Case for Acting Now</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text mb-4">
              Partner Influence Is Highest Before Construction Begins.
            </h2>
            <p className="text-text/60 text-lg max-w-3xl mx-auto">
              Every phase that passes reduces how much a new partner can shape. Founding partners engage now — while every specification, layout, curriculum, and standard is still undecided. Organizations that arrive after construction inherit what was decided without them.
            </p>
          </motion.div>

          <div className="space-y-3">
            {influenceStages.map((s, i) => (
              <motion.div
                key={s.stage}
                className={`rounded-2xl p-6 border-2 ${s.active ? 'border-accent bg-accent/5' : 'border-sage bg-white'}`}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-shrink-0 w-full md:w-52">
                    <div className="flex items-center gap-3">
                      {s.active ? (
                        <div className="relative flex-shrink-0">
                          <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                          <div className="absolute inset-0 w-3 h-3 bg-accent/40 rounded-full animate-ping" />
                        </div>
                      ) : (
                        <div className="w-3 h-3 bg-text/15 rounded-full flex-shrink-0" />
                      )}
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className={`font-serif font-bold text-sm ${s.active ? 'text-text' : 'text-text/50'}`}>{s.stage}</p>
                          {s.active && (
                            <span className="bg-accent/25 text-text text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1.5 uppercase tracking-wider">
                              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse inline-block" />
                              Now
                            </span>
                          )}
                        </div>
                        <p className={`text-xs ${s.active ? 'text-accent font-semibold' : 'text-text/35'}`}>{s.sub}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 flex items-center gap-4">
                    <div className="flex-1 bg-sage rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${s.active ? 'bg-accent' : 'bg-text/20'}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.influence}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.1 + 0.3, ease: 'easeOut' }}
                      />
                    </div>
                    <div className={`w-12 text-right font-bold text-sm flex-shrink-0 ${s.active ? 'text-accent' : 'text-text/30'}`}>
                      {s.influence}%
                    </div>
                  </div>

                  <div className="flex-shrink-0 md:w-72">
                    <p className={`text-xs leading-relaxed ${s.active ? 'text-text/70' : 'text-text/35'}`}>{s.partnerNote}</p>
                    {s.active && (
                      <p className="mt-2 text-primary font-semibold text-xs uppercase tracking-wider">
                        ★ Founding partner discussions are open at this stage
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-10 bg-primaryDark text-white rounded-2xl p-8 text-center"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="font-serif text-xl font-bold mb-2">We are at Stage 1. Eleven slots remain open.</p>
            <p className="text-white/65 text-base">This is the only moment when founding-level influence is available across all categories simultaneously.</p>
          </motion.div>
        </div>
      </section>

      {/* What this approach delivers for partners — not Agrofini's philosophy */}
      <section className="py-24 bg-primaryDark text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-4">Why the Approach Matters For You</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              We Build Relationships Before We Build Greenhouses.
            </h2>
            <p className="text-white/65 text-lg max-w-3xl mx-auto">
              Most agricultural development projects buy equipment first and seek expertise later. The result: technologies installed without partner input, training programmes written without partner involvement, specifications set by whoever was available. Agrofini does the opposite — and the commercial implications for founding partners are specific.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: 'fa-solid fa-trophy',
                title: 'Your technology becomes the reference standard.',
                desc: 'Because founding partners are involved before construction, their products become the baseline installation — the system every future grower, student, and researcher sees performing under real West African conditions. Competitors enter a market where your brand is already the benchmark.',
              },
              {
                icon: 'fa-solid fa-chart-line',
                title: 'You generate market data competitors cannot replicate.',
                desc: 'Three or more years of live commercial production yields validated performance data for your products under Nigerian conditions. That data is publishable, demonstrable, and commercially credible in a way that no controlled trial or market research report can match.',
              },
              {
                icon: 'fa-solid fa-graduation-cap',
                title: 'Your brand is embedded in professional training from day one.',
                desc: 'Training curricula are written before the Academy opens. Founding partners shape those curricula — ensuring a generation of West African commercial growers learns the industry through the lens of your technology. That is market development measured in decades, not campaigns.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-white/6 border border-white/12 rounded-2xl p-8"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <div className="w-14 h-14 bg-accent/15 rounded-2xl flex items-center justify-center mb-6">
                  <i className={`${item.icon} text-accent text-xl`} aria-hidden="true" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-3 leading-tight">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What early partners specifically gain — 4 high-value, specific benefits */}
      <section className="py-24 bg-warmWhite">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Founding Partner Advantages</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text mb-4">
              What Founding Partners Receive That Later Partners Cannot.
            </h2>
            <p className="text-text/60 text-lg max-w-2xl mx-auto">
              These are not perks. They are structural advantages that exist only during the pre-construction window and cannot be replicated by organizations that engage after the fact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnerGains.map((g, i) => (
              <motion.div
                key={g.title}
                className="bg-white border border-sage rounded-2xl p-8 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className={`${g.icon} text-primary text-xl`} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-text mb-1 leading-snug">{g.title}</h3>
                    <p className="text-primary font-semibold text-sm mb-3">{g.commercial}</p>
                    <p className="text-text/65 text-sm leading-relaxed">{g.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Nigeria — 4 hard data points with commercial implication */}
      <section className="py-24 bg-primaryDark text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-4">The Market Thesis</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Why Nigeria. Why Now. Why This Cannot Wait.</h2>
            <p className="text-white/65 text-lg max-w-2xl mx-auto">
              The commercial case is not a forecast. It is the convergence of four structural conditions already in place.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nigeriaFacts.map((f, i) => (
              <motion.div
                key={f.label}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-colors"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="font-serif text-6xl font-bold text-accent mb-2">{f.stat}</p>
                <p className="text-white/50 font-semibold text-xs mb-4 uppercase tracking-widest">{f.label}</p>
                <p className="text-white/65 text-sm leading-relaxed">{f.implication}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparent timeline — condensed, honest */}
      <section className="py-24 bg-sage">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Transparent Roadmap</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text mb-4">Where We Are. Where We Are Going.</h2>
            <p className="text-text/60 text-lg max-w-2xl mx-auto">
              We are pre-construction. We are honest about that. The founding partner window exists precisely because we have not yet committed the decisions that founding partners are being invited to influence.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/15" />
            <div className="space-y-0">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="relative flex gap-7 pb-8"
                  initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <div className="flex-shrink-0 relative z-10">
                    {item.status === 'complete' && (
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-md">
                        <i className="fa-solid fa-check text-white text-sm" aria-hidden="true" />
                      </div>
                    )}
                    {item.status === 'active' && (
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-md relative">
                        <div className="w-3 h-3 bg-text rounded-full" />
                        <div className="absolute inset-0 rounded-full bg-accent/40 animate-ping" />
                      </div>
                    )}
                    {item.status === 'upcoming' && (
                      <div className="w-12 h-12 bg-white border-2 border-dashed border-text/15 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-text/20 rounded-full" />
                      </div>
                    )}
                  </div>

                  <div className={`flex-1 pt-2 ${item.status === 'upcoming' ? 'opacity-50' : ''}`}>
                    <div className="flex items-center gap-3 flex-wrap mb-1">
                      <h3 className="font-serif text-lg font-bold text-text">{item.title}</h3>
                      {item.status === 'complete' && <span className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider">Done</span>}
                      {item.status === 'active' && (
                        <span className="bg-accent/25 text-text text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1.5 uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse inline-block" />
                          Now
                        </span>
                      )}
                    </div>
                    <p className="text-text/60 text-sm leading-relaxed">{item.desc}</p>
                    {item.status === 'active' && (
                      <p className="mt-2 text-primary font-semibold text-xs uppercase tracking-wider">
                        ★ Founding partner discussions are open at this stage
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Partner Journey — 3 steps, low-friction */}
      <section className="py-24 bg-warmWhite">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">How to Engage</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text mb-4">Three Steps. No Commitment Required to Begin.</h2>
            <p className="text-text/60 text-lg max-w-2xl mx-auto">
              We understand that founding partnerships require internal alignment. The first step costs 30 minutes and nothing else.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnerJourney.map((step, i) => (
              <motion.div
                key={step.step}
                className="relative bg-white border border-sage rounded-2xl p-8 text-center"
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                {i < partnerJourney.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-3 z-10">
                    <i className="fa-solid fa-chevron-right text-primary/30 text-xs" aria-hidden="true" />
                  </div>
                )}
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <i className={`${step.icon} text-white text-xl`} aria-hidden="true" />
                </div>
                <p className="text-accent font-bold text-xs uppercase tracking-widest mb-3">{step.step}</p>
                <h3 className="font-serif text-lg font-bold text-text mb-4 leading-snug">{step.title}</h3>
                <p className="text-text/60 text-sm leading-relaxed mb-5">{step.desc}</p>
                {step.cta && step.href && (
                  <a
                    href={step.href}
                    aria-label={step.cta}
                    className="inline-block bg-accent text-text px-6 py-3 rounded-full font-semibold text-sm hover:bg-accent/90 transition-colors"
                  >
                    {step.cta}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open slots — compact, urgency-focused */}
      <section className="py-20 bg-sage">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Open Positions</p>
            <h2 className="font-serif text-4xl font-bold text-text mb-4">11 Categories. One Position Each.</h2>
            <p className="text-text/60 text-base max-w-xl mx-auto">
              Each category is exclusive and permanently assigned to the first organization to confirm. The first to claim defines the standard.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
            {openSlots.map((slot, i) => (
              <motion.div
                key={slot.title}
                className="bg-white rounded-xl p-5 flex items-center justify-between hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.04 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className={`${slot.icon} text-primary text-sm`} aria-hidden="true" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-green-600 text-xs font-bold uppercase tracking-wider">Open</span>
                    </div>
                    <p className="font-serif font-bold text-text text-sm">{slot.title}</p>
                  </div>
                </div>
                <a
                  href={`mailto:info@agrofiniholdings.com?subject=Founding%20Partner%20Enquiry%20%E2%80%94%20${encodeURIComponent(slot.title)}`}
                  aria-label={`Enquire about the ${slot.title} founding partner position`}
                  className="text-xs font-bold text-primary border border-primary/30 rounded-xl px-3 py-2 hover:bg-primary hover:text-white transition-colors flex-shrink-0 ml-2"
                >
                  Claim
                </a>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center text-text/50 text-sm"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            Full detail on what each partner receives →{' '}
            <Link href="/centre-of-excellence" className="text-primary font-semibold hover:underline">
              Founding Partner Programme
            </Link>
          </motion.p>
        </div>
      </section>

      {/* Closing CTA — single, specific action */}
      <section className="py-28 bg-primaryDark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-6">The Next Step</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              The Briefing Costs 30 Minutes.
            </h2>
            <p className="text-white/70 text-xl leading-relaxed max-w-2xl mx-auto mb-4">
              A conversation with Agrofini&apos;s leadership team. We walk through the Centre&apos;s master plan, the available categories, and what founding partnership involves in practice. No commitment required.
            </p>
            <p className="text-white/40 text-base mb-12">
              If your category is still available, we will confirm it in writing.
            </p>
            <a
              href="mailto:info@agrofiniholdings.com?subject=Founding%20Partner%20Briefing%20Request%20%E2%80%94%20Centre%20of%20Excellence"
              aria-label="Schedule a Founding Partner Briefing with Agrofini"
              className="inline-block bg-accent text-text px-14 py-5 rounded-full font-bold text-xl hover:bg-accent/90 transition-colors"
            >
              Schedule Your Briefing
            </a>
            <p className="mt-6 text-white/30 text-sm">
              info@agrofiniholdings.com · 11 positions open · One per category · Category exclusive
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}

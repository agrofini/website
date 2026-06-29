'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const programmes = [
  {
    icon: 'fa-solid fa-house-flag',
    title: 'Commercial Demonstration Greenhouses',
    desc: 'State-of-the-art greenhouse production operating under international best practices — simultaneously generating commercial revenue and serving as live demonstration sites for growers, investors, and technology partners visiting from across West Africa.',
  },
  {
    icon: 'fa-solid fa-microchip',
    title: 'Greenhouse Innovation Centre',
    desc: 'A dedicated facility for testing and demonstrating the latest in greenhouse automation, climate control, sensor technology, AI-powered management systems, robotics, and sustainable production technologies.',
  },
  {
    icon: 'fa-solid fa-graduation-cap',
    title: 'Training Academy',
    desc: 'Professional education programmes for commercial farmers, universities, government agencies, agribusinesses, and agricultural entrepreneurs — building the human capital that West African protected agriculture urgently needs.',
  },
  {
    icon: 'fa-solid fa-microscope',
    title: 'Research & Variety Trials',
    desc: 'Collaborating with leading seed companies and research institutions to evaluate hybrid varieties and technologies under real West African growing conditions — generating credible African data for the global agricultural industry.',
  },
  {
    icon: 'fa-solid fa-display',
    title: 'Technology Demonstration Platform',
    desc: 'Permanent demonstration facilities for international companies to showcase innovations in greenhouse engineering, irrigation, climate systems, grow lighting, automation, biological crop protection, and agricultural software.',
  },
  {
    icon: 'fa-solid fa-wheat-awn',
    title: 'Commercial Production',
    desc: 'Premium vegetable and specialty crop production operating at commercial scale — validating technologies under genuine market conditions and supplying fresh produce directly to Lagos hotels, restaurants, markets, and corporate buyers.',
  },
]

const marketStats = [
  { value: '220M+', label: 'Population — Africa\'s largest domestic market, growing at 3% per year' },
  { value: '<2%', label: 'Of Nigerian vegetables grown under protection today — the gap is the opportunity' },
  { value: '40–50%', label: 'Post-harvest loss rate in conventional supply chains — protected agriculture solves this' },
  { value: '$6B+', label: 'Nigeria\'s annual food import bill — demand that domestic protected agriculture can capture' },
]

const founderExclusives = [
  {
    icon: 'fa-solid fa-lock',
    title: 'Category Exclusivity',
    desc: 'One Founding Partner per category. No competitor occupies your slot. Your technology is the reference standard at the Centre for the duration of the founding partnership term.',
  },
  {
    icon: 'fa-solid fa-flag',
    title: 'Permanent Founding Recognition',
    desc: 'Your organization is permanently named as a Founding Partner across all Centre materials, events, media, publications, and physical signage — distinguishing you from all partners who join later.',
  },
  {
    icon: 'fa-solid fa-seedling',
    title: 'Dedicated Demonstration Area',
    desc: 'A physically branded, permanent demonstration section within the Centre\'s commercial greenhouses — where your products are showcased to every visiting grower, investor, and delegation.',
  },
  {
    icon: 'fa-solid fa-flask',
    title: 'Priority Research Access',
    desc: 'First access to all performance data, trial results, and variety reports generated at the Centre. Your products are in the data before any competitor enters the market.',
  },
  {
    icon: 'fa-solid fa-graduation-cap',
    title: 'Training Curriculum Integration',
    desc: 'Your products and protocols are embedded in every training programme at the Academy — reaching commercial farmers, agribusinesses, and government buyers across West Africa.',
  },
  {
    icon: 'fa-solid fa-handshake',
    title: 'Shape the Research Agenda',
    desc: 'Founding Partners participate in setting the Centre\'s research priorities, trial protocols, and demonstration schedules — ensuring the platform serves your market development objectives.',
  },
]

const foundingPartners = [
  {
    emoji: '🏗',
    title: 'Greenhouse Technology Partner',
    desc: 'Become the engineering standard at West Africa\'s premier Centre of Excellence — your structures, cladding, and systems as the reference installation for every greenhouse project in the region.',
    receives: ['Named greenhouse section', 'Category exclusivity', 'Inclusion in all project referrals', 'Co-branded field day content'],
  },
  {
    emoji: '🌱',
    title: 'Seed Genetics Partner',
    desc: 'Your hybrid varieties in production, in trials, and in training — the genetics that West African commercial growers learn to trust before they\'ve spoken to any competitor.',
    receives: ['Dedicated variety trial plots', 'First-to-market data advantage', 'Grower introduction programme', 'Category exclusivity'],
  },
  {
    emoji: '💧',
    title: 'Irrigation & Fertigation Partner',
    desc: 'Your systems installed across the Centre\'s commercial greenhouses — demonstrated to thousands of growers, investors, and delegations as the infrastructure of choice.',
    receives: ['Full installation showcase', 'Fertigation protocol co-development', 'Training curriculum integration', 'Category exclusivity'],
  },
  {
    emoji: '🌡',
    title: 'Climate Control Partner',
    desc: 'Your climate management systems running the production environment — generating real performance data in tropical West African conditions no competitor can replicate.',
    receives: ['Live performance data rights', 'Climate protocol authorship', 'Branded monitoring dashboard', 'Category exclusivity'],
  },
  {
    emoji: '🤖',
    title: 'Smart Farming & Automation Partner',
    desc: 'Your platform as the intelligence layer of the Centre — managing production data, sensor networks, and automation in an emerging market primed for precision agriculture.',
    receives: ['Platform-of-record status', 'Grower onboarding integration', 'Co-branded case study rights', 'Category exclusivity'],
  },
  {
    emoji: '🌿',
    title: 'Crop Nutrition Partner',
    desc: 'Your nutrition programmes run across every commercial crop cycle — building a dataset that validates your products in West African conditions and a training programme that carries your brand.',
    receives: ['Nutrition protocol authorship', 'Trial result co-ownership', 'Academy curriculum integration', 'Category exclusivity'],
  },
  {
    emoji: '🛡',
    title: 'Biological Crop Protection Partner',
    desc: 'Your IPM solutions as the standard bioprotection approach across the entire Centre — adopted in training, production, and the formal protocols distributed to West African growers.',
    receives: ['IPM protocol authorship', 'Training co-development', 'Supplier recommendation status', 'Category exclusivity'],
  },
  {
    emoji: '🔬',
    title: 'Research & Innovation Partner',
    desc: 'First access to all performance data, trial outcomes, and market insights generated at the Centre — with co-authorship rights on research publications reaching the global agri community.',
    receives: ['Co-authorship on publications', 'Priority data access', 'Research agenda participation', 'Category exclusivity'],
  },
  {
    emoji: '🎓',
    title: 'Education & University Partner',
    desc: 'Your institution named as the academic partner of West Africa\'s premier Centre of Excellence — with joint research programmes, student placement, and co-branded certification.',
    receives: ['Joint certification programme', 'Student placement priority', 'Co-branded research output', 'Category exclusivity'],
  },
  {
    emoji: '🌍',
    title: 'Development & Impact Partner',
    desc: 'Your impact mandate delivered through commercial infrastructure — measurable outcomes in food security, youth employment, climate resilience, and technology transfer at regional scale.',
    receives: ['Impact measurement co-design', 'Joint reporting rights', 'Named programme presence', 'Category exclusivity'],
  },
  {
    emoji: '📈',
    title: 'Investment Partner',
    desc: 'Deal flow and co-investment access at the intersection of technology, protected agriculture, and food security — in one of Africa\'s most compelling growth markets.',
    receives: ['First-look investment access', 'LP network introductions', 'Portfolio company referrals', 'Category exclusivity'],
  },
]

const partnerCategories = [
  { icon: 'fa-solid fa-warehouse', title: 'Greenhouse Manufacturers' },
  { icon: 'fa-solid fa-dna', title: 'Seed Companies' },
  { icon: 'fa-solid fa-droplet', title: 'Irrigation Companies' },
  { icon: 'fa-solid fa-temperature-half', title: 'Climate Control Companies' },
  { icon: 'fa-solid fa-robot', title: 'Automation & AI Companies' },
  { icon: 'fa-solid fa-flask', title: 'Crop Nutrition Companies' },
  { icon: 'fa-solid fa-shield-halved', title: 'Biological Crop Protection' },
  { icon: 'fa-solid fa-gears', title: 'Agricultural Equipment' },
  { icon: 'fa-solid fa-book-open', title: 'Universities' },
  { icon: 'fa-solid fa-atom', title: 'Research Institutes' },
  { icon: 'fa-solid fa-landmark', title: 'Government Agencies' },
  { icon: 'fa-solid fa-earth-africa', title: 'Development Organizations' },
  { icon: 'fa-solid fa-chart-line', title: 'Investors' },
  { icon: 'fa-solid fa-lightbulb', title: 'AgriTech Startups' },
]

const problems = [
  { text: 'Poor greenhouse design not adapted for tropical conditions' },
  { text: 'Lack of local technical expertise in protected agriculture management' },
  { text: 'No demonstration farms where growers can observe international best practices' },
  { text: 'Limited access to elite seed genetics proven under West African conditions' },
  { text: 'Weak technology transfer from global suppliers to African commercial growers' },
  { text: 'Insufficient training in commercial greenhouse production at every level' },
  { text: 'Poor integration of irrigation, nutrition, and climate management systems' },
  { text: 'Absence of credible local data on hybrid performance and production economics' },
]

const visionPillars = [
  { icon: 'fa-solid fa-building-columns', title: 'Premier Agricultural Hub', desc: 'The reference institution for protected agriculture innovation across the African continent.' },
  { icon: 'fa-solid fa-flask', title: 'Regional Innovation Centre', desc: 'A permanent platform for testing, validating, and scaling the next generation of greenhouse technologies.' },
  { icon: 'fa-solid fa-graduation-cap', title: 'Training Destination', desc: 'Where West Africa\'s next generation of commercial greenhouse farmers and agribusiness leaders are trained.' },
  { icon: 'fa-solid fa-microscope', title: 'Research Platform', desc: 'Generating credible African performance data that no other institution on the continent can produce.' },
  { icon: 'fa-solid fa-tractor', title: 'Commercial Leader', desc: 'Proving at scale what is commercially possible in African protected agriculture — not in theory, in practice.' },
  { icon: 'fa-solid fa-display', title: 'Technology Campus', desc: 'The most credible demonstration environment for multinational agricultural companies entering the African market.' },
  { icon: 'fa-solid fa-handshake', title: 'Trusted Multinational Partner', desc: 'The natural first call for any international agricultural company serious about Nigeria and West Africa.' },
  { icon: 'fa-solid fa-earth-africa', title: 'Food Security Catalyst', desc: 'A measurable contributor to the food security and economic transformation of West Africa\'s growing cities.' },
]

const ecosystemLeft = [
  { icon: 'fa-solid fa-warehouse', label: 'Greenhouse Tech' },
  { icon: 'fa-solid fa-dna', label: 'Seed Genetics' },
  { icon: 'fa-solid fa-droplet', label: 'Irrigation' },
  { icon: 'fa-solid fa-robot', label: 'Automation & AI' },
  { icon: 'fa-solid fa-flask', label: 'Crop Nutrition' },
  { icon: 'fa-solid fa-shield-halved', label: 'Bioprotection' },
  { icon: 'fa-solid fa-temperature-half', label: 'Climate Control' },
]

const ecosystemRight = [
  { icon: 'fa-solid fa-wheat-awn', label: 'Commercial Production' },
  { icon: 'fa-solid fa-chalkboard-user', label: 'Farmer Training' },
  { icon: 'fa-solid fa-microscope', label: 'Applied Research' },
  { icon: 'fa-solid fa-truck-fast', label: 'Fresh Supply Chains' },
  { icon: 'fa-solid fa-users', label: 'Grower Adoption' },
  { icon: 'fa-solid fa-earth-africa', label: 'Food Security' },
  { icon: 'fa-solid fa-chart-line', label: 'Regional Growth' },
]

export default function CentreOfExcellencePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-28 bg-primaryDark text-white relative overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.p
            className="text-accent font-semibold uppercase tracking-widest text-sm mb-5"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
          >
            Agrofini West Africa — Founding Partner Programme
          </motion.p>
          <motion.h1
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          >
            West Africa&apos;s Premier Centre of Excellence for Protected Agriculture
          </motion.h1>
          <motion.p
            className="text-white/75 text-xl leading-relaxed max-w-3xl mx-auto mb-5"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
          >
            Nigeria&apos;s protected agriculture sector is one of the fastest-growing in Africa — yet less than 2% of vegetables are grown under cover today. Agrofini is building the platform where global technology leaders demonstrate their products, validate their solutions, and establish their brand before the market takes off.
          </motion.p>
          <motion.p
            className="text-accent font-semibold text-base mb-10"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
          >
            11 Founding Partner slots are open. One per category. First to claim defines the standard.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="mailto:info@agrofiniholdings.com?subject=Founding%20Partner%20Enquiry%20%E2%80%94%20Centre%20of%20Excellence"
              aria-label="Claim a Founding Partner slot"
              className="inline-block bg-accent text-text px-10 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-colors"
            >
              Claim Your Founding Partner Slot
            </a>
            <a
              href="mailto:info@agrofiniholdings.com?subject=Partnership%20Briefing%20Request%20%E2%80%94%20Centre%20of%20Excellence"
              aria-label="Schedule a Founding Partner briefing"
              className="inline-block border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primaryDark transition-colors"
            >
              Schedule a Briefing
            </a>
          </motion.div>
        </div>
      </section>

      {/* Market Opportunity Stats */}
      <section className="py-14 bg-accent">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-text/50 text-xs font-semibold uppercase tracking-widest text-center mb-8">The Market Opportunity</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {marketStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <p className="font-serif text-3xl md:text-4xl font-bold text-text mb-2">{stat.value}</p>
                <p className="text-text/60 text-xs leading-relaxed">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Case for West Africa — Now */}
      <section className="py-24 bg-warmWhite">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            >
              <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Why West Africa. Why Now.</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-text mb-6 leading-tight">
                The Window for First-Mover Positioning Is Open Today.
              </h2>
              <p className="text-text/70 text-lg leading-relaxed mb-4">
                Nigeria is urbanising faster than any country in Africa. Its middle class is expanding. Its demand for premium, consistent produce is growing. And its protected agriculture sector is in the earliest stages of a transformation that will define how this nation feeds itself for the next generation.
              </p>
              <p className="text-text/70 text-lg leading-relaxed mb-4">
                The organizations that establish themselves now — through demonstration, training integration, and research collaboration — will shape the standards, the relationships, and the purchasing decisions of an industry that does not yet exist at scale.
              </p>
              <p className="text-text/70 text-base leading-relaxed">
                The organizations that arrive in five years will find those standards already set, those relationships already built, and those markets already claimed.
              </p>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            >
              {[
                { icon: 'fa-solid fa-city', label: 'Lagos: 25M+ consumers', sub: 'The largest city in Africa — and the primary market for every crop produced at the Centre.' },
                { icon: 'fa-solid fa-arrow-trend-up', label: 'Rapid urbanisation', sub: 'Urban populations in West Africa are projected to double by 2050 — driving permanent, structural demand for protected produce.' },
                { icon: 'fa-solid fa-globe', label: 'Zero established competitors', sub: 'No Centre of Excellence for protected agriculture exists anywhere in West Africa. Agrofini is building the first.' },
                { icon: 'fa-solid fa-clock', label: 'The infrastructure window', sub: 'Physical demonstration infrastructure built now creates a durable advantage that cannot be replicated by a company that arrives later with marketing spend.' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="flex gap-4 bg-sage rounded-2xl p-6"
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className={`${item.icon} text-primary text-base`} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-serif font-bold text-text mb-1">{item.label}</p>
                    <p className="text-text/60 text-sm leading-relaxed">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-24 bg-primaryDark text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-4">The Gap That Creates the Opportunity</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-5">
              A $6B+ Import Bill. A Sub-2% Coverage Rate.<br />A Market Waiting to Be Built.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-3xl mx-auto">
              The reason Nigeria imports food at scale is not a lack of land, climate, or labour. It is a systemic absence of the infrastructure, technology, knowledge, and ecosystem that converts agricultural potential into commercial production. These are exactly the gaps a Centre of Excellence closes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-14">
            {problems.map((p, i) => (
              <motion.div
                key={p.text}
                className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl px-6 py-4"
                initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <i className="fa-solid fa-triangle-exclamation text-red-400 text-base mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p className="text-white/70 text-sm leading-relaxed">{p.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-accent/10 border border-accent/30 rounded-2xl p-10 text-center"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-4">The Role of a Founding Partner</p>
            <p className="font-serif text-2xl md:text-3xl font-bold text-white leading-relaxed">
              Every gap in this list is a commercial opportunity for the organization that fills it first — through demonstration, training, research collaboration, and a permanent physical presence at the Centre.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <p className="text-white/60 font-semibold uppercase tracking-widest text-sm mb-6">Our Mission</p>
            <p className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-6">
              To connect global agricultural innovation with Africa&apos;s enormous agricultural potential — through collaboration, demonstration, and a relentless commitment to building what works at commercial scale.
            </p>
            <div className="w-16 h-1 bg-accent mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* What We Are Building */}
      <section className="py-24 bg-warmWhite">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Six Core Programmes</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text mb-4">What We Are Building</h2>
            <p className="text-text/60 text-lg max-w-2xl mx-auto">
              Each programme creates a distinct avenue for partner engagement — and together they form an ecosystem no single partner could build alone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programmes.map((prog, i) => (
              <motion.div
                key={prog.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-sage"
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <i className={`${prog.icon} text-primary text-2xl`} aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl font-bold text-text mb-3">{prog.title}</h3>
                <p className="text-text/60 text-sm leading-relaxed">{prog.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founding Partner Exclusives */}
      <section className="py-24 bg-primaryDark text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-4">For Founding Partners Only</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-5">
              What Founding Partners Receive That No Later Partner Will
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Founding Partnership is not a sponsorship. It is a structural position in the Centre — with exclusive benefits that are available only to the organizations that commit during this founding phase.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {founderExclusives.map((ex, i) => (
              <motion.div
                key={ex.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-colors"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-5">
                  <i className={`${ex.icon} text-accent text-lg`} aria-hidden="true" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-3">{ex.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{ex.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founding Partner Slots */}
      <section className="py-24 bg-sage">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Exclusive Founding Slots</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text mb-5">11 Slots. One Per Category.</h2>
            <p className="text-text/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Each slot is held by one organization, permanently. The Founding Partner in each category defines the reference standard for that discipline at the Centre — and no competitor occupies the same position.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <div className="bg-primaryDark text-white px-8 py-4 rounded-2xl flex items-center gap-4 shadow-lg">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
              <p className="font-semibold">
                <span className="text-accent font-bold text-2xl mr-2">11</span>
                Founding Partnership positions now open — expressions of interest accepted now
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {foundingPartners.map((partner, i) => (
              <motion.div
                key={partner.title}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <div className="bg-accent text-text text-xs font-bold uppercase tracking-widest px-4 py-2 text-center">
                  Founding Opportunity — Category Exclusive
                </div>

                <div className="p-7">
                  <div className="bg-sage border-2 border-dashed border-primary/20 rounded-xl h-20 flex items-center justify-center mb-5">
                    <div className="text-center">
                      <i className="fa-regular fa-image text-primary/25 text-2xl mb-1 block" aria-hidden="true" />
                      <p className="text-primary/35 text-xs font-medium">Your Logo Here</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-green-600 text-xs font-semibold uppercase tracking-wider">Available</span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl" role="img" aria-hidden="true">{partner.emoji}</span>
                    <h3 className="font-serif text-lg font-bold text-text leading-tight">{partner.title}</h3>
                  </div>

                  <p className="text-text/60 text-sm leading-relaxed mb-5">{partner.desc}</p>

                  <div className="bg-sage rounded-xl px-4 py-3 mb-5">
                    <p className="text-primary font-semibold text-xs uppercase tracking-wider mb-2">What you receive</p>
                    <ul className="space-y-1">
                      {partner.receives.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-text/65 text-xs">
                          <i className="fa-solid fa-check text-primary text-xs flex-shrink-0" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={`mailto:info@agrofiniholdings.com?subject=Founding%20Partner%20Enquiry%20%E2%80%94%20${encodeURIComponent(partner.title)}`}
                    aria-label={`Claim the ${partner.title} founding partnership slot`}
                    className="block w-full bg-primaryDark text-white text-center px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary transition-colors"
                  >
                    Claim This Slot
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-14 bg-primaryDark text-white rounded-3xl p-12 text-center"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-5">Act Before Your Competitor Does</p>
            <h3 className="font-serif text-3xl md:text-4xl font-bold mb-5">
              The Founding Partner in your category will be the reference standard in West Africa.<br />That can be your organization — or theirs.
            </h3>
            <p className="text-white/65 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Agrofini is accepting expressions of interest now. We will schedule a private briefing, walk you through your specific category position, and outline the full partnership structure before you make any commitment.
            </p>
            <a
              href="mailto:info@agrofiniholdings.com?subject=Founding%20Partner%20Briefing%20Request%20%E2%80%94%20Centre%20of%20Excellence"
              aria-label="Schedule a private Founding Partner briefing"
              className="inline-block bg-accent text-text px-12 py-5 rounded-full font-semibold text-lg hover:bg-accent/90 transition-colors"
            >
              Schedule Your Private Briefing
            </a>
          </motion.div>
        </div>
      </section>

      {/* The Agrofini Ecosystem */}
      <section className="py-24 bg-warmWhite">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">The Platform</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text">Agrofini Is the Node That Connects Them All</h2>
            <p className="text-text/60 mt-4 max-w-2xl mx-auto">No single partner can build this ecosystem alone. That is precisely why the Centre is valuable — and why early positioning compounds over time.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <p className="text-primary font-semibold uppercase tracking-widest text-xs mb-5 text-center">Partner Inputs</p>
              <div className="space-y-3">
                {ecosystemLeft.map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="flex items-center gap-3 bg-sage rounded-xl px-5 py-3"
                    initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className={`${item.icon} text-primary text-sm`} aria-hidden="true" />
                    </div>
                    <p className="text-text font-medium text-sm">{item.label}</p>
                    <i className="fa-solid fa-arrow-right text-primary/30 text-xs ml-auto" aria-hidden="true" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="bg-primaryDark text-white rounded-3xl p-10 text-center shadow-2xl w-full">
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <i className="fa-solid fa-building-columns text-accent text-2xl" aria-hidden="true" />
                </div>
                <p className="text-accent font-semibold uppercase tracking-widest text-xs mb-3">The Platform</p>
                <p className="font-serif text-2xl font-bold mb-3">Agrofini Centre of Excellence</p>
                <p className="text-white/60 text-sm leading-relaxed">Innovation · Research · Training · Commercial Production · Demonstration</p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-white/40 text-xs">Ogun State &amp; Benin City, Edo State, Nigeria</p>
                  <p className="text-white/40 text-xs">300km from West Africa&apos;s largest food market</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <p className="text-primary font-semibold uppercase tracking-widest text-xs mb-5 text-center">Outcomes Generated</p>
              <div className="space-y-3">
                {ecosystemRight.map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="flex items-center gap-3 bg-primary/5 border border-primary/15 rounded-xl px-5 py-3"
                    initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
                  >
                    <i className="fa-solid fa-arrow-right text-primary/30 text-xs flex-shrink-0" aria-hidden="true" />
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className={`${item.icon} text-primary text-sm`} aria-hidden="true" />
                    </div>
                    <p className="text-text font-medium text-sm">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who Can Partner */}
      <section className="py-20 bg-sage">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Beyond Founding Partners</p>
            <h2 className="font-serif text-4xl font-bold text-text mb-3">A Platform Open to Every Category</h2>
            <p className="text-text/60 max-w-xl mx-auto">Organizations that miss the Founding Partner window can still build a presence at the Centre through standard partnership programmes launched after founding phase closes.</p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {partnerCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.04 }}
              >
                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <i className={`${cat.icon} text-primary text-sm`} aria-hidden="true" />
                </div>
                <p className="text-text font-semibold text-xs leading-tight">{cat.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-Term Vision */}
      <section className="py-24 bg-primaryDark text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-4">Where This Goes</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Your Brand. Embedded in What West Africa Builds Next.</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              The Centre of Excellence is not a facility. It is the infrastructure layer of a protected agriculture industry that does not yet fully exist. Founding Partners are not sponsors of an event — they are architects of a market.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {visionPillars.map((v, i) => (
              <motion.div
                key={v.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-colors"
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <div className="w-12 h-12 bg-accent/15 rounded-xl flex items-center justify-center mb-5">
                  <i className={`${v.icon} text-accent text-lg`} aria-hidden="true" />
                </div>
                <h3 className="font-serif text-base font-bold text-white mb-3">{v.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 bg-accent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-text/50 font-semibold uppercase tracking-widest text-sm mb-5">One Conversation. No Commitment.</p>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-text mb-6 leading-tight">
              Schedule Your Founding Partner Briefing
            </h2>
            <p className="text-text/70 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              We will walk you through your specific category slot, the full structure of the Founding Partnership, what you receive, what we build together, and what the timeline looks like — before you make any commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@agrofiniholdings.com?subject=Founding%20Partner%20Briefing%20Request%20%E2%80%94%20Centre%20of%20Excellence"
                aria-label="Schedule your Founding Partner briefing"
                className="inline-block bg-primaryDark text-white px-12 py-5 rounded-full font-semibold text-xl hover:bg-primary transition-colors"
              >
                Schedule Your Briefing
              </a>
              <Link
                href="/contact"
                aria-label="Contact Agrofini"
                className="inline-block border-2 border-text text-text px-12 py-5 rounded-full font-semibold text-xl hover:bg-text hover:text-white transition-colors"
              >
                Contact Agrofini
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

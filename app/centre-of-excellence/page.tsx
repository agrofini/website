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
    desc: 'Professional education programmes for commercial farmers, universities, government agencies, agribusinesses, youth entrepreneurs, and agricultural investors — building the human capital that West African protected agriculture urgently needs.',
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

const partnerCategories = [
  { icon: 'fa-solid fa-warehouse', title: 'Greenhouse Manufacturers', desc: 'Showcase structures, cladding, and engineering solutions in a commercial West African environment.' },
  { icon: 'fa-solid fa-dna', title: 'Seed Companies', desc: 'Trial elite hybrid varieties under real growing conditions and connect with commercial growers across the region.' },
  { icon: 'fa-solid fa-droplet', title: 'Irrigation Companies', desc: 'Demonstrate drip systems, fertigation, and precision water management solutions at commercial scale.' },
  { icon: 'fa-solid fa-temperature-half', title: 'Climate Control Companies', desc: 'Display greenhouse climate management, HVAC, and environmental monitoring technologies.' },
  { icon: 'fa-solid fa-robot', title: 'Automation & AI Companies', desc: 'Showcase agricultural robotics, smart farming platforms, and AI-powered production management systems.' },
  { icon: 'fa-solid fa-flask', title: 'Crop Nutrition Companies', desc: 'Present innovative fertilizer programmes, biostimulants, and precision crop nutrition solutions.' },
  { icon: 'fa-solid fa-shield-halved', title: 'Biological Crop Protection', desc: 'Demonstrate integrated pest management and sustainable bioprotection technologies for protected agriculture.' },
  { icon: 'fa-solid fa-gears', title: 'Agricultural Equipment', desc: 'Display harvesting, post-harvest, and materials handling equipment for modern greenhouse operations.' },
  { icon: 'fa-solid fa-book-open', title: 'Universities', desc: 'Collaborate on research programmes, student training, scientific publication, and agricultural innovation.' },
  { icon: 'fa-solid fa-atom', title: 'Research Institutes', desc: 'Partner on applied research, technology validation, and data-driven agricultural insights.' },
  { icon: 'fa-solid fa-landmark', title: 'Government Agencies', desc: 'Build food security policy through practical demonstration of viable protected agriculture models.' },
  { icon: 'fa-solid fa-earth-africa', title: 'Development Organizations', desc: 'Support food security, climate resilience, youth employment, and agricultural modernization at regional scale.' },
  { icon: 'fa-solid fa-chart-line', title: 'Investors', desc: 'Access curated, high-growth investment opportunities in one of Africa\'s fastest-expanding agricultural sectors.' },
  { icon: 'fa-solid fa-lightbulb', title: 'AgriTech Startups', desc: 'A real commercial platform to validate your technology with genuine growers and institutional partners.' },
]

const benefits = [
  { icon: 'fa-solid fa-globe', title: 'Access to Nigeria & West Africa', desc: 'Nigeria is Africa\'s largest economy with a $30B+ agricultural sector and rapid urbanization driving premium food demand. The Centre provides a credible gateway.' },
  { icon: 'fa-solid fa-display', title: 'Live Demonstration Facilities', desc: 'Showcase your products in a commercial production environment — not a trade show booth, but a working farm producing real crops under real conditions.' },
  { icon: 'fa-solid fa-certificate', title: 'Commercial Validation', desc: 'Generate verifiable performance data under West African growing conditions — the most credible marketing asset you can have when entering this market.' },
  { icon: 'fa-solid fa-users', title: 'Farmer & Buyer Engagement', desc: 'Connect directly with commercial growers, agricultural entrepreneurs, government procurement buyers, and industry decision-makers through our field days and events.' },
  { icon: 'fa-solid fa-chalkboard-user', title: 'Training Programme Integration', desc: 'Your products integrated into professional training curricula reaching commercial farmers, universities, and agribusinesses across Nigeria and West Africa.' },
  { icon: 'fa-solid fa-eye', title: 'Regional Brand Visibility', desc: 'Build a sustained brand presence through field days, technical events, publications, media coverage, and ongoing commercial operations.' },
  { icon: 'fa-solid fa-store', title: 'Distribution & Market Development', desc: 'Establish distribution networks and long-term commercial relationships in a market with enormous untapped demand for quality agricultural inputs.' },
  { icon: 'fa-solid fa-flask', title: 'Research Collaboration', desc: 'Co-develop varieties, technologies, and production protocols specifically adapted and validated for West African climate, soils, and market requirements.' },
]

const problems = [
  { icon: 'fa-solid fa-triangle-exclamation', text: 'Poor greenhouse design not adapted for tropical conditions' },
  { icon: 'fa-solid fa-triangle-exclamation', text: 'Lack of local technical expertise in protected agriculture management' },
  { icon: 'fa-solid fa-triangle-exclamation', text: 'No demonstration farms where growers can observe best practices' },
  { icon: 'fa-solid fa-triangle-exclamation', text: 'Limited access to elite seed genetics proven in the region' },
  { icon: 'fa-solid fa-triangle-exclamation', text: 'Weak technology transfer from global suppliers to African growers' },
  { icon: 'fa-solid fa-triangle-exclamation', text: 'Insufficient farmer training in commercial greenhouse production' },
  { icon: 'fa-solid fa-triangle-exclamation', text: 'Poor integration of irrigation, nutrition, and climate management' },
  { icon: 'fa-solid fa-triangle-exclamation', text: 'Lack of credible African data on hybrid performance and production systems' },
]

const foundingPartners = [
  { emoji: '🏗', title: 'Greenhouse Technology Partner', desc: 'Become the preferred greenhouse engineering and infrastructure partner — showcasing your structures, cladding, and systems in live commercial production at West Africa\'s premier Centre of Excellence.' },
  { emoji: '🌱', title: 'Seed Genetics Partner', desc: 'Showcase world-class hybrid vegetable genetics through commercial production and structured variety trial programmes, connecting your brand directly with West African commercial growers.' },
  { emoji: '💧', title: 'Irrigation & Fertigation Partner', desc: 'Demonstrate advanced drip irrigation, fertigation, and precision water management solutions validated under real West African commercial greenhouse conditions.' },
  { emoji: '🌡', title: 'Climate Control Partner', desc: 'Showcase greenhouse climate management, environmental monitoring, HVAC, and automation technologies in a live commercial setting — the most credible demonstration environment possible.' },
  { emoji: '🤖', title: 'Smart Farming & Automation Partner', desc: 'Demonstrate agricultural robotics, AI-powered management platforms, smart sensor networks, and precision agriculture technologies to an emerging market ready for innovation.' },
  { emoji: '🌿', title: 'Crop Nutrition Partner', desc: 'Present innovative fertilizer programmes, biostimulants, and precision crop nutrition solutions validated under West African growing conditions and integrated into our training curricula.' },
  { emoji: '🛡', title: 'Biological Crop Protection Partner', desc: 'Showcase integrated pest management, beneficial organisms, and sustainable bioprotection technologies as the preferred IPM approach across our entire commercial operation.' },
  { emoji: '🔬', title: 'Research & Innovation Partner', desc: 'Collaborate on applied research, technology validation, and data generation specifically designed for West African climate, market, and production conditions.' },
  { emoji: '🎓', title: 'Education & University Partner', desc: 'Partner on student training programmes, academic research, joint scientific publications, and co-development of innovation initiatives at the nexus of academia and commercial agriculture.' },
  { emoji: '🌍', title: 'Development & Impact Partner', desc: 'Support food security, youth employment, climate resilience, and agricultural modernization at regional scale — achieving measurable development outcomes through commercial agricultural infrastructure.' },
  { emoji: '📈', title: 'Investment Partner', desc: 'Access curated, high-growth investment opportunities at the intersection of technology, agriculture, and food security in one of Africa\'s fastest-expanding markets.' },
]

const visionPillars = [
  { icon: 'fa-solid fa-building-columns', title: 'Premier Agricultural Hub', desc: 'The reference destination for protected agriculture innovation across the African continent.' },
  { icon: 'fa-solid fa-flask', title: 'Regional Innovation Centre', desc: 'A permanent platform for testing, validating, and commercialising the next generation of greenhouse technologies.' },
  { icon: 'fa-solid fa-graduation-cap', title: 'Training Destination', desc: 'Where West Africa\'s next generation of commercial greenhouse farmers learns to grow profitably.' },
  { icon: 'fa-solid fa-microscope', title: 'Research Platform', desc: 'Generating credible African data on hybrid performance, climate management, and commercial production systems.' },
  { icon: 'fa-solid fa-tractor', title: 'Commercial Production Leader', desc: 'Proving the commercial viability of modern protected agriculture in Africa at scale — not in theory, but in practice.' },
  { icon: 'fa-solid fa-display', title: 'Technology Demonstration Campus', desc: 'The trusted demonstration environment for multinational agricultural companies entering the African market.' },
  { icon: 'fa-solid fa-handshake', title: 'Trusted Multinational Partner', desc: 'The natural first call for any international agricultural company serious about long-term presence in Nigeria and West Africa.' },
  { icon: 'fa-solid fa-earth-africa', title: 'Food Security Catalyst', desc: 'Contributing measurably to the food security and economic transformation of West Africa\'s rapidly growing cities.' },
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
            Agrofini West Africa
          </motion.p>
          <motion.h1
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          >
            Building West Africa&apos;s Premier Centre of Excellence for Protected Agriculture
          </motion.h1>
          <motion.p
            className="text-white/70 text-xl leading-relaxed max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
          >
            An international platform where world-leading greenhouse technologies, seed genetics, research, education, and commercial production come together to transform protected agriculture across West Africa.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="mailto:info@agrofiniholdings.com?subject=Founding%20Partner%20Enquiry%20%E2%80%94%20Centre%20of%20Excellence"
              aria-label="Become a Founding Partner"
              className="inline-block bg-accent text-text px-10 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-colors"
            >
              Become a Founding Partner
            </a>
            <a
              href="mailto:info@agrofiniholdings.com?subject=Partnership%20Meeting%20Request%20%E2%80%94%20Centre%20of%20Excellence"
              aria-label="Schedule a partnership meeting"
              className="inline-block border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primaryDark transition-colors"
            >
              Schedule a Meeting
            </a>
          </motion.div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-accent">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '11', label: 'Founding Partnership Slots' },
              { value: 'West Africa', label: "Nigeria's $30B+ Agri Market" },
              { value: '6', label: 'Core Programmes' },
              { value: '14+', label: 'Partner Categories' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <p className="font-serif text-3xl md:text-4xl font-bold text-text mb-1">{stat.value}</p>
                <p className="text-text/60 text-xs font-medium uppercase tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 bg-warmWhite">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Our Vision</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text mb-6 leading-tight">
              Accelerating African Agriculture<br />Through International Collaboration
            </h2>
            <p className="text-text/70 text-lg leading-relaxed max-w-3xl mx-auto">
              The Agrofini Centre of Excellence exists to close the gap between world-class agricultural technology and Africa&apos;s enormous agricultural potential. We are building the platform that connects technology innovators, commercial producers, researchers, educators, and investors across continents into a single, functioning ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { region: 'Europe', desc: 'Greenhouse manufacturers, climate control companies, seed breeders, biological protection specialists', icon: 'fa-solid fa-flag' },
              { region: 'Asia', desc: 'Agricultural technology providers, automation companies, irrigation specialists, precision farming innovators', icon: 'fa-solid fa-sun' },
              { region: 'North America', desc: 'AgriTech startups, AI agriculture platforms, crop nutrition specialists, research institutions', icon: 'fa-solid fa-leaf' },
              { region: 'Africa', desc: 'Commercial growers, governments, development partners, entrepreneurs, investors, and the consumers that feed West Africa', icon: 'fa-solid fa-earth-africa' },
            ].map((item, i) => (
              <motion.div
                key={item.region}
                className="bg-sage rounded-2xl p-7 text-center"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className={`${item.icon} text-primary text-2xl`} aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl font-bold text-text mb-3">{item.region}</h3>
                <p className="text-text/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-24 bg-primaryDark text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-4">The Problem We Are Solving</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Greenhouse Farming in West Africa<br />Is Growing Fast — But Failing Too Often.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-3xl mx-auto">
              Nigeria and West Africa have enormous greenhouse potential. But most projects underperform or fail entirely — not because of a lack of land or ambition, but because of systemic gaps in technology, knowledge, and ecosystem infrastructure. Agrofini exists to close those gaps permanently.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {problems.map((p, i) => (
              <motion.div
                key={p.text}
                className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl px-6 py-4"
                initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <i className={`${p.icon} text-red-400 text-base mt-0.5 flex-shrink-0`} aria-hidden="true" />
                <p className="text-white/70 text-sm leading-relaxed">{p.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-accent/10 border border-accent/30 rounded-2xl p-10 text-center"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-4">Our Answer</p>
            <p className="font-serif text-2xl md:text-3xl font-bold text-white leading-relaxed">
              A Centre of Excellence that bridges the gap — through demonstration, research, education, and international strategic partnerships built for the long term.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <p className="text-white/60 font-semibold uppercase tracking-widest text-sm mb-6">Our Mission</p>
            <p className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-8">
              To become the bridge connecting global agricultural innovation with Africa&apos;s enormous agricultural potential — through collaboration, demonstration, and a relentless commitment to building what works.
            </p>
            <div className="w-16 h-1 bg-accent mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* What We Are Building */}
      <section className="py-24 bg-warmWhite">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Core Programmes</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text">What We Are Building</h2>
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

      {/* Partnership Opportunities */}
      <section className="py-24 bg-sage">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Partnership Opportunities</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text mb-4">Who We Welcome as Partners</h2>
            <p className="text-text/60 max-w-2xl mx-auto text-lg">
              The Centre of Excellence is designed to be a multi-partner ecosystem. Every organization bringing expertise, technology, or capital has a role to play.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {partnerCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                className="bg-white rounded-2xl p-6 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <i className={`${cat.icon} text-primary text-base`} aria-hidden="true" />
                </div>
                <h3 className="font-serif font-bold text-text mb-2 text-base">{cat.title}</h3>
                <p className="text-text/55 text-xs leading-relaxed">{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Agrofini */}
      <section className="py-24 bg-primaryDark text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-4">Why Partner With Agrofini</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">What You Get That No Trade Show Can Offer</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-colors"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-5">
                  <i className={`${b.icon} text-accent text-lg`} aria-hidden="true" />
                </div>
                <h3 className="font-serif text-base font-bold text-white mb-3">{b.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Agrofini Ecosystem */}
      <section className="py-24 bg-warmWhite">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">The Ecosystem</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text">Agrofini Is the Platform That Connects Them All</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {/* Left: Inputs */}
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <p className="text-primary font-semibold uppercase tracking-widest text-xs mb-5 text-center">Technology & Knowledge Partners</p>
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

            {/* Centre: Hub */}
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
                  <p className="text-white/40 text-xs">Benin City, Edo State, Nigeria</p>
                  <p className="text-white/40 text-xs">300km from West Africa&apos;s largest food market</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Outputs */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <p className="text-primary font-semibold uppercase tracking-widest text-xs mb-5 text-center">Outcomes & Impact</p>
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

      {/* Founding Partnership Programme */}
      <section className="py-24 bg-sage">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Exclusive Programme</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text mb-6">Become a Founding Partner</h2>
            <p className="text-text/70 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              Agrofini is inviting a select group of international organizations to become Founding Partners of the Centre of Excellence. Founding Partners will play a defining role in shaping the future of protected agriculture across West Africa — while claiming an early strategic presence in one of Africa&apos;s highest-growth agricultural markets.
            </p>
          </motion.div>

          {/* Counter badge */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <div className="bg-primaryDark text-white px-8 py-4 rounded-2xl flex items-center gap-4">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
              <p className="font-semibold text-lg">
                <span className="text-accent font-bold text-2xl mr-2">11</span>
                Founding Partnership Opportunities Available — Now Accepting Expressions of Interest
              </p>
            </div>
          </motion.div>

          {/* Cards helper: renders a single founding partner card */}
          {(() => {
            const PartnerCard = ({ partner, i }: { partner: typeof foundingPartners[0], i: number }) => (
              <motion.div
                key={partner.title}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow relative flex flex-col"
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                {/* Founding Opportunity ribbon */}
                <div className="bg-accent text-text text-xs font-bold uppercase tracking-widest px-4 py-2 text-center">
                  Founding Opportunity
                </div>

                <div className="p-7 flex flex-col flex-1">
                  {/* Logo placeholder */}
                  <div className="bg-sage border-2 border-dashed border-primary/20 rounded-xl h-20 flex items-center justify-center mb-6">
                    <div className="text-center">
                      <i className="fa-regular fa-image text-primary/25 text-2xl mb-1 block" aria-hidden="true" />
                      <p className="text-primary/30 text-xs font-medium">Your Logo Here</p>
                    </div>
                  </div>

                  {/* Status badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-green-600 text-xs font-semibold uppercase tracking-wider">Available</span>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl" role="img" aria-hidden="true">{partner.emoji}</span>
                    <h3 className="font-serif text-lg font-bold text-text leading-tight">{partner.title}</h3>
                  </div>

                  <p className="text-text/60 text-sm leading-relaxed mb-6 flex-1">{partner.desc}</p>

                  <a
                    href={`mailto:info@agrofiniholdings.com?subject=Founding%20Partner%20Enquiry%20%E2%80%94%20${encodeURIComponent(partner.title)}`}
                    aria-label={`Claim the ${partner.title} founding partnership`}
                    className="block w-full bg-primaryDark text-white text-center px-6 py-3 rounded-xl font-semibold text-sm hover:bg-primary transition-colors"
                  >
                    Claim This Partnership
                  </a>
                </div>
              </motion.div>
            )

            const mainCards = foundingPartners.slice(0, 9)
            const tailCards = foundingPartners.slice(9)

            return (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mainCards.map((partner, i) => (
                    <PartnerCard key={partner.title} partner={partner} i={i} />
                  ))}
                </div>
                {tailCards.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {/* Empty cell to centre the remaining two cards in a 3-col grid */}
                    <div className="hidden lg:block" aria-hidden="true" />
                    {tailCards.map((partner, i) => (
                      <PartnerCard key={partner.title} partner={partner} i={9 + i} />
                    ))}
                  </div>
                )}
              </>
            )
          })()}

          {/* Banner */}
          <motion.div
            className="mt-14 bg-primaryDark text-white rounded-3xl p-12 text-center"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-5">Act Now</p>
            <h3 className="font-serif text-3xl md:text-4xl font-bold mb-5">Help Build the Future of Protected Agriculture in West Africa</h3>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Agrofini is actively seeking visionary organizations that share our commitment to innovation, sustainability, and agricultural transformation. The strongest ecosystems are built through collaboration — and we invite industry leaders to claim their place as Founding Partners.
            </p>
            <a
              href="mailto:info@agrofiniholdings.com?subject=Founding%20Partner%20Position%20Enquiry%20%E2%80%94%20Centre%20of%20Excellence"
              aria-label="Claim your Founding Partner position"
              className="inline-block bg-accent text-text px-12 py-5 rounded-full font-semibold text-lg hover:bg-accent/90 transition-colors"
            >
              Claim Your Founding Partner Position
            </a>
          </motion.div>
        </div>
      </section>

      {/* Long-Term Vision */}
      <section className="py-24 bg-primaryDark text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-4">Where We Are Going</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">The Long-Term Vision</h2>
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
      <section className="py-24 bg-warmWhite">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-5">Let&apos;s Build Together</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text mb-6 leading-tight">
              Let&apos;s Build the Future of Protected Agriculture Together
            </h2>
            <p className="text-text/70 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
              Whether you are developing greenhouse technologies, hybrid vegetable genetics, irrigation systems, climate control platforms, AI-powered agricultural solutions, biological crop protection products, crop nutrition programmes, or innovative farming technologies — Agrofini welcomes the opportunity to build a long-term strategic partnership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <a
                href="mailto:info@agrofiniholdings.com?subject=Founding%20Partner%20Enquiry"
                aria-label="Become a Founding Partner"
                className="inline-block bg-primary text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-primaryDark transition-colors"
              >
                Become a Founding Partner
              </a>
              <a
                href="mailto:info@agrofiniholdings.com?subject=Partnership%20Meeting%20Request"
                aria-label="Request a partnership meeting"
                className="inline-block bg-sage text-text border-2 border-primary/20 px-10 py-4 rounded-full font-semibold text-lg hover:border-primary transition-colors"
              >
                Request a Partnership Meeting
              </a>
              <Link
                href="/contact"
                aria-label="Contact Agrofini"
                className="inline-block border-2 border-text text-text px-10 py-4 rounded-full font-semibold text-lg hover:bg-text hover:text-white transition-colors"
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

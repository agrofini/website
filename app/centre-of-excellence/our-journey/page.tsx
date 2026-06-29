'use client'

import { useScroll, motion } from 'framer-motion'
import Link from 'next/link'

const timeline = [
  {
    status: 'complete',
    title: 'Vision Established',
    desc: 'Agrofini\'s long-term strategy, mission, and Centre of Excellence concept have been fully defined. The founding partnership programme has been designed and the international engagement strategy is in place.',
  },
  {
    status: 'complete',
    title: 'Company Brand & Digital Presence',
    desc: 'Agrofini\'s website and brand are live. International engagement is underway. The Centre of Excellence and its founding partner programme are now being presented to strategic partners across Europe, Asia, and North America.',
  },
  {
    status: 'complete',
    title: 'Land Identified',
    desc: 'Approximately 15 acres identified across Ogun State and Benin City, Edo State, Nigeria — forming the foundation for future commercial greenhouse development and the Centre of Excellence. Acquisition is in progress.',
  },
  {
    status: 'active',
    title: 'International Partnership Development',
    desc: 'Agrofini is actively engaging greenhouse manufacturers, seed companies, irrigation providers, climate technology companies, universities, and research institutions to establish strategic founding partnerships before infrastructure investment begins.',
  },
  {
    status: 'upcoming',
    title: 'Master Planning',
    desc: 'Developing the complete master plan for the Centre of Excellence in collaboration with founding partners — greenhouse layouts, infrastructure, utilities, training facilities, research areas, and demonstration zones.',
  },
  {
    status: 'upcoming',
    title: 'Phase One Greenhouse Development',
    desc: 'Construction of the first commercial greenhouse and demonstration facility, built to international best-practice standards in direct partnership with our Founding Greenhouse Technology Partner.',
  },
  {
    status: 'upcoming',
    title: 'Training Academy Launch',
    desc: 'Development and delivery of professional training programmes for commercial growers, universities, government agencies, agribusinesses, and agricultural entrepreneurs across West Africa.',
  },
  {
    status: 'upcoming',
    title: 'Research & Innovation Centre',
    desc: 'Launching collaborative applied research programmes with international seed companies, research institutions, and universities — generating credible West African performance data for the global agricultural industry.',
  },
  {
    status: 'upcoming',
    title: 'Regional Expansion',
    desc: 'Scaling the Centre into West Africa\'s leading protected agriculture platform — a destination for technology demonstration, commercial production, innovation, education, and investment across the region.',
  },
]

const earlyBenefits = [
  { icon: 'fa-solid fa-compass-drafting', title: 'Help Shape the Centre\'s Design', desc: 'Influence physical layout, greenhouse specifications, and infrastructure decisions before a single foundation is laid.' },
  { icon: 'fa-solid fa-seedling', title: 'Introduce Your Technologies First', desc: 'Your products become the baseline installation — the reference standard against which all future decisions are benchmarked.' },
  { icon: 'fa-solid fa-flask', title: 'Conduct Early Product Trials', desc: 'First access to dedicated trial plots for variety testing and product validation under real West African commercial conditions.' },
  { icon: 'fa-solid fa-chart-line', title: 'Build Long-Term Market Presence', desc: 'Years of commercial operation and brand recognition before competitors begin to engage the Nigerian market seriously.' },
  { icon: 'fa-solid fa-display', title: 'Develop Demonstration Programmes', desc: 'Your products showcased to every grower, investor, and delegation that visits the Centre — from the first day of operations.' },
  { icon: 'fa-solid fa-graduation-cap', title: 'Shape Training Curricula', desc: 'Your technology embedded in professional training from day one — building a generation of West African growers who know and trust your brand.' },
  { icon: 'fa-solid fa-award', title: 'Founding Contributor Recognition', desc: 'Permanently recognised across all Centre materials, publications, events, and signage as one of the organizations that built this.' },
  { icon: 'fa-solid fa-handshake', title: 'Long-Term Strategic Partnership', desc: 'A multi-year commercial relationship built on mutual value creation — not a transactional supplier arrangement.' },
]

const neededPartners = [
  { icon: 'fa-solid fa-warehouse', title: 'Greenhouse Structures' },
  { icon: 'fa-solid fa-gears', title: 'Greenhouse Engineering' },
  { icon: 'fa-solid fa-dna', title: 'Seed Genetics' },
  { icon: 'fa-solid fa-droplet', title: 'Irrigation & Fertigation' },
  { icon: 'fa-solid fa-temperature-half', title: 'Climate Control' },
  { icon: 'fa-solid fa-robot', title: 'Automation & AI' },
  { icon: 'fa-solid fa-flask', title: 'Crop Nutrition' },
  { icon: 'fa-solid fa-shield-halved', title: 'Biological Crop Protection' },
  { icon: 'fa-solid fa-microscope', title: 'Research' },
  { icon: 'fa-solid fa-graduation-cap', title: 'Universities' },
  { icon: 'fa-solid fa-tractor', title: 'Agricultural Equipment' },
  { icon: 'fa-solid fa-box-open', title: 'Packaging Technologies' },
  { icon: 'fa-solid fa-sun', title: 'Renewable Energy' },
  { icon: 'fa-solid fa-temperature-low', title: 'Cold Chain' },
  { icon: 'fa-solid fa-coins', title: 'Agricultural Finance' },
]

const whyNigeria = [
  { icon: 'fa-solid fa-users', title: 'Africa\'s Largest Population', desc: '220M+ people and growing at 3% per year. The domestic market for fresh premium produce is already enormous — and accelerating.' },
  { icon: 'fa-solid fa-city', title: 'Rapid Urbanisation', desc: 'Lagos is the largest city in Africa with 25M+ consumers. Nigeria\'s urban population is projected to more than double by 2050, permanently restructuring food demand.' },
  { icon: 'fa-solid fa-plane-arrival', title: 'Import Substitution Opportunity', desc: 'Nigeria spends $6B+ annually importing food its own soil is capable of producing. Protected agriculture is the most direct tool for reducing that dependency.' },
  { icon: 'fa-solid fa-seedling', title: 'Underdeveloped Protected Sector', desc: 'Less than 2% of Nigerian vegetables are grown under protection. That gap — between current reality and commercial potential — is the investment thesis.' },
  { icon: 'fa-solid fa-tractor', title: 'Commercial Farming Growth', desc: 'A new generation of Nigerian agribusinesses is investing in commercial farming infrastructure. They need the technology, training, and partnerships that the Centre provides.' },
  { icon: 'fa-solid fa-globe', title: 'Regional Export Potential', desc: 'Nigeria is the economic hub of a 400M-person West African regional market. Commercial greenhouse production here can serve the entire region.' },
  { icon: 'fa-solid fa-people-group', title: 'Youth Employment Imperative', desc: '60%+ of Nigeria\'s population is under 25. Protected agriculture — if delivered with proper training infrastructure — is one of the highest-yield pathways to productive youth employment.' },
  { icon: 'fa-solid fa-cloud-sun', title: 'Climate Resilience', desc: 'As open-field agriculture becomes increasingly exposed to climate variability, protected cultivation is the most reliable path to consistent year-round food production.' },
]

const commitmentPoints = [
  { icon: 'fa-solid fa-layer-group', title: 'Phased Growth', desc: 'Every expansion decision will be grounded in demonstrated commercial viability. We build what works, then scale what is proven.' },
  { icon: 'fa-solid fa-certificate', title: 'Technical Excellence', desc: 'Every infrastructure investment will be guided by international best practice, shaped by the expertise of our founding partners before capital is committed.' },
  { icon: 'fa-solid fa-scale-balanced', title: 'Mutual Value Creation', desc: 'Every partnership will be structured so that Agrofini\'s success and the partner\'s success are the same outcome — not competing priorities.' },
  { icon: 'fa-solid fa-building-columns', title: 'Education at the Core', desc: 'Every greenhouse we build will contribute to training, demonstration, and innovation — not only commercial production. The Centre exists to elevate the entire sector.' },
]

const foundingSlots = [
  { emoji: '🏗', title: 'Greenhouse Technology Partner' },
  { emoji: '🌱', title: 'Seed Genetics Partner' },
  { emoji: '🌡', title: 'Climate Technology Partner' },
  { emoji: '💧', title: 'Irrigation & Fertigation Partner' },
  { emoji: '🌿', title: 'Crop Nutrition Partner' },
  { emoji: '🛡', title: 'Biological Crop Protection Partner' },
  { emoji: '🤖', title: 'Automation & Smart Farming Partner' },
  { emoji: '🔬', title: 'Research Partner' },
  { emoji: '🎓', title: 'University Partner' },
  { emoji: '🌍', title: 'Development Partner' },
  { emoji: '📈', title: 'Investment Partner' },
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
            Our Journey
          </motion.p>
          <motion.h1
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
          >
            Every Great Agricultural Innovation Begins With a Vision
          </motion.h1>
          <motion.p
            className="text-white/70 text-xl leading-relaxed max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
          >
            Agrofini is laying the foundations for what we believe will become West Africa&apos;s leading Centre of Excellence for Protected Agriculture. Rather than building alone, we are intentionally seeking international partners to help shape this journey from the very beginning.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
          >
            <Link
              href="/centre-of-excellence"
              aria-label="View Partnership Opportunities"
              className="inline-block bg-accent text-text px-10 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-colors"
            >
              View Partnership Opportunities
            </Link>
            <a
              href="mailto:info@agrofiniholdings.com?subject=Founding%20Partner%20Enquiry%20%E2%80%94%20Our%20Journey"
              aria-label="Become a Founding Partner"
              className="inline-block border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primaryDark transition-colors"
            >
              Become a Founding Partner
            </a>
          </motion.div>
        </div>
      </section>

      {/* Where We Are Today — Timeline */}
      <section className="py-24 bg-warmWhite">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Transparent Roadmap</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text mb-4">Where We Are Today</h2>
            <p className="text-text/60 text-lg max-w-2xl mx-auto">
              We believe in complete transparency about our stage of development. This is where Agrofini stands today — and where we are heading.
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-sage" />

            <div className="space-y-0">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="relative flex gap-6 md:gap-10 pb-10"
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
                >
                  {/* Status dot */}
                  <div className="flex-shrink-0 relative z-10">
                    {item.status === 'complete' && (
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                        <i className="fa-solid fa-check text-white text-lg" aria-hidden="true" />
                      </div>
                    )}
                    {item.status === 'active' && (
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-accent rounded-full flex items-center justify-center shadow-lg relative">
                        <i className="fa-solid fa-rotate text-text text-lg" aria-hidden="true" />
                        <div className="absolute inset-0 rounded-full bg-accent/40 animate-ping" />
                      </div>
                    )}
                    {item.status === 'upcoming' && (
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-white border-2 border-dashed border-text/20 rounded-full flex items-center justify-center">
                        <i className="fa-solid fa-clock text-text/30 text-lg" aria-hidden="true" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className={`flex-1 pb-2 ${item.status === 'upcoming' ? 'opacity-60' : ''}`}>
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="font-serif text-xl font-bold text-text">{item.title}</h3>
                      {item.status === 'complete' && (
                        <span className="bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">Complete</span>
                      )}
                      {item.status === 'active' && (
                        <span className="bg-accent/20 text-text text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse inline-block" />
                          In Progress
                        </span>
                      )}
                      {item.status === 'upcoming' && (
                        <span className="bg-text/5 text-text/40 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">Upcoming</span>
                      )}
                    </div>
                    <p className="text-text/65 leading-relaxed">{item.desc}</p>
                    {item.status === 'active' && (
                      <div className="mt-4 inline-flex items-center gap-2 text-primary font-semibold text-sm">
                        <i className="fa-solid fa-star text-accent text-xs" aria-hidden="true" />
                        Founding partners are shaping this phase right now
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why We Are Building Differently */}
      <section className="py-24 bg-primaryDark text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            >
              <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-4">A Different Approach</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
                We Are Building Relationships Before We Build Greenhouses.
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-5">
                Most agricultural projects purchase equipment first and seek technical expertise later. The result is infrastructure that does not reflect best practice, technologies that are not properly integrated, and partnerships that are supplier relationships rather than strategic ones.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-5">
                Agrofini is taking the opposite approach. Before making any major infrastructure investment, we are first building relationships with the world&apos;s leading agricultural technology companies, seed breeders, greenhouse manufacturers, universities, and researchers.
              </p>
              <p className="text-white/70 text-base leading-relaxed">
                This ensures that every future decision — from greenhouse specifications to crop selection to training programme design — benefits from international best practice, validated by people who have built commercial operations at scale across the world.
              </p>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            >
              {[
                { label: 'The conventional approach', items: ['Buy equipment', 'Build infrastructure', 'Search for expertise', 'Hope for the best'], bad: true },
                { label: 'The Agrofini approach', items: ['Build international partnerships', 'Co-design with experts', 'Validate before committing capital', 'Build what is proven to work'], bad: false },
              ].map((approach) => (
                <div
                  key={approach.label}
                  className={`rounded-2xl p-7 border ${approach.bad ? 'bg-white/5 border-white/10 opacity-70' : 'bg-accent/10 border-accent/30'}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${approach.bad ? 'bg-red-500/20' : 'bg-accent/20'}`}>
                      <i className={`${approach.bad ? 'fa-solid fa-xmark text-red-400' : 'fa-solid fa-check text-accent'} text-sm`} aria-hidden="true" />
                    </div>
                    <p className={`font-semibold text-sm uppercase tracking-wider ${approach.bad ? 'text-white/50' : 'text-accent'}`}>{approach.label}</p>
                  </div>
                  <div className="space-y-2">
                    {approach.items.map((item, j) => (
                      <div key={item} className="flex items-center gap-3">
                        <span className={`text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${approach.bad ? 'bg-white/10 text-white/40' : 'bg-accent/20 text-accent'}`}>
                          {j + 1}
                        </span>
                        <p className={`text-sm ${approach.bad ? 'text-white/45' : 'text-white/80'}`}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Early */}
      <section className="py-24 bg-warmWhite">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">The Case for Early Engagement</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text mb-4">Why Founding Partners Win</h2>
            <p className="text-text/60 text-lg max-w-2xl mx-auto">
              Organizations that engage now — before construction begins — have opportunities that simply cannot be offered to partners who arrive later.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {earlyBenefits.map((b, i) => (
              <motion.div
                key={b.title}
                className="bg-white rounded-2xl p-7 border border-sage hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                  <i className={`${b.icon} text-primary text-lg`} aria-hidden="true" />
                </div>
                <h3 className="font-serif text-base font-bold text-text mb-3">{b.title}</h3>
                <p className="text-text/60 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Building Together */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            >
              <p className="text-white/60 font-semibold uppercase tracking-widest text-sm mb-4">Our Philosophy</p>
              <h2 className="font-serif text-4xl font-bold mb-6 leading-tight">We Are Not Looking for Suppliers. We Are Looking for Architects.</h2>
              <p className="text-white/75 text-lg leading-relaxed mb-4">
                Agrofini does not view international companies as vendors. We seek long-term strategic partners who contribute their expertise, technology, research, and innovation — and in return gain access to one of Africa&apos;s largest and most underdeveloped agricultural markets.
              </p>
              <p className="text-white/75 text-base leading-relaxed">
                The Centre of Excellence will only become what we envision if it is built with the world&apos;s best. That is why the founding partner programme exists — not to fill supplier slots, but to assemble a team of global leaders who will co-create something genuinely significant.
              </p>
            </motion.div>
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            >
              {[
                { icon: 'fa-solid fa-handshake', label: 'Strategic Partners', sub: 'Not suppliers' },
                { icon: 'fa-solid fa-flask', label: 'Co-Creators', sub: 'Not contractors' },
                { icon: 'fa-solid fa-chart-line', label: 'Market Builders', sub: 'Not bystanders' },
                { icon: 'fa-solid fa-earth-africa', label: 'Long-Term Investors', sub: 'Not one-off vendors' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center"
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <i className={`${item.icon} text-accent text-2xl mb-3 block`} aria-hidden="true" />
                  <p className="font-serif font-bold text-white text-base">{item.label}</p>
                  <p className="text-white/50 text-xs mt-1">{item.sub}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Need Today */}
      <section className="py-24 bg-sage">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Open Positions</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text mb-4">What We Are Seeking Right Now</h2>
            <p className="text-text/60 text-lg max-w-2xl mx-auto">
              Each of the following categories has one available Founding Partner position. The first organization to engage in each category defines the standard.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {neededPartners.map((cat, i) => (
              <motion.div
                key={cat.title}
                className="bg-white rounded-2xl p-6 flex items-center justify-between hover:shadow-md transition-shadow group"
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className={`${cat.icon} text-primary text-base`} aria-hidden="true" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-green-600 text-xs font-semibold uppercase tracking-wider">Open</span>
                    </div>
                    <p className="font-serif font-bold text-text text-sm">{cat.title}</p>
                  </div>
                </div>
                <a
                  href={`mailto:info@agrofiniholdings.com?subject=Founding%20Partner%20Enquiry%20%E2%80%94%20${encodeURIComponent(cat.title)}`}
                  aria-label={`Become the Founding Partner for ${cat.title}`}
                  className="text-xs font-semibold text-primary border border-primary/30 rounded-lg px-3 py-2 hover:bg-primary hover:text-white transition-colors flex-shrink-0 ml-3"
                >
                  Claim
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Nigeria */}
      <section className="py-24 bg-primaryDark text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-4">The Market Thesis</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Why Nigeria. Why Protected Agriculture. Why Now.</h2>
            <p className="text-white/65 text-lg max-w-2xl mx-auto">
              The commercial case for protected agriculture in Nigeria is not a forecast. It is the convergence of demographic, economic, and structural forces already in motion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyNigeria.map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-colors"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <div className="w-12 h-12 bg-accent/15 rounded-xl flex items-center justify-center mb-5">
                  <i className={`${item.icon} text-accent text-lg`} aria-hidden="true" />
                </div>
                <h3 className="font-serif text-base font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-24 bg-warmWhite">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Our Promise</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text mb-4">Built Responsibly. Built to Last.</h2>
            <p className="text-text/60 text-lg max-w-2xl mx-auto">
              Agrofini is committed to building in a way that our partners, our communities, and our country can be proud of — at every stage of the journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commitmentPoints.map((c, i) => (
              <motion.div
                key={c.title}
                className="flex gap-5 bg-sage rounded-2xl p-8"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className={`${c.icon} text-primary text-xl`} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-text mb-2">{c.title}</h3>
                  <p className="text-text/65 leading-relaxed">{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join From the Beginning */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-text/50 font-semibold uppercase tracking-widest text-sm mb-4">A Rare Opportunity</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text mb-6 leading-tight">Build the Future With Us</h2>
            <p className="text-text/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Agrofini is at a unique stage where international partners have the opportunity to influence this project before construction begins. This early collaboration allows partners to help define the technologies installed, the layouts designed, the training programmes written, and the research priorities set — before anyone else enters the market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founding Partner Slots */}
      <section className="py-24 bg-sage">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Limited Positions</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text mb-5">Secure Your Place as a Founding Partner</h2>
            <p className="text-text/65 text-lg leading-relaxed max-w-3xl mx-auto">
              Rather than approaching companies after construction, Agrofini is inviting a select number of organizations to help shape the Centre of Excellence from its earliest stages. Each position is exclusive — one organization per category, permanently.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <div className="bg-primaryDark text-white px-8 py-4 rounded-2xl flex items-center gap-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
              <p className="font-semibold">
                <span className="text-accent font-bold text-2xl mr-2">11</span>
                positions open · Expressions of interest now accepted
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {foundingSlots.map((slot, i) => (
              <motion.div
                key={slot.title}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                {/* Gold badge */}
                <div className="bg-gradient-to-r from-accent via-yellow-400 to-accent text-text text-xs font-bold uppercase tracking-widest px-4 py-2.5 text-center">
                  ★ Founding Partner Opportunity ★
                </div>

                <div className="p-7">
                  {/* Placeholder logo */}
                  <div className="bg-primaryDark/5 border-2 border-dashed border-primaryDark/15 rounded-xl h-24 flex flex-col items-center justify-center mb-6 gap-1">
                    <i className="fa-regular fa-image text-text/15 text-3xl" aria-hidden="true" />
                    <p className="text-text/20 text-xs font-bold uppercase tracking-widest">Your Company Here</p>
                  </div>

                  {/* Status */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-green-600 text-xs font-bold uppercase tracking-wider">Available</span>
                    <span className="text-text/30 text-xs">· Category Exclusive</span>
                  </div>

                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-3xl" role="img" aria-hidden="true">{slot.emoji}</span>
                    <h3 className="font-serif text-lg font-bold text-text leading-tight">{slot.title}</h3>
                  </div>

                  <a
                    href={`mailto:info@agrofiniholdings.com?subject=Founding%20Partner%20Enquiry%20%E2%80%94%20${encodeURIComponent(slot.title)}`}
                    aria-label={`Claim the ${slot.title} founding partnership`}
                    className="block w-full bg-primaryDark text-white text-center px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-primary transition-colors"
                  >
                    Claim This Partnership
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-28 bg-primaryDark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-6">The Invitation</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-6">
              Great Agricultural Ecosystems Are Built Through Collaboration
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
              Agrofini is not simply inviting suppliers to quote for projects. We are creating a long-term ecosystem where technology providers, researchers, educators, commercial growers, and investors work together to modernize protected agriculture across West Africa — and in doing so, build something that none of them could build alone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@agrofiniholdings.com?subject=Founding%20Partner%20Enquiry%20%E2%80%94%20Our%20Journey"
                aria-label="Become a Founding Partner"
                className="inline-block bg-accent text-text px-10 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-colors"
              >
                Become a Founding Partner
              </a>
              <a
                href="mailto:info@agrofiniholdings.com?subject=Discovery%20Meeting%20Request%20%E2%80%94%20Centre%20of%20Excellence"
                aria-label="Schedule a discovery meeting"
                className="inline-block border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primaryDark transition-colors"
              >
                Schedule a Discovery Meeting
              </a>
              <Link
                href="/contact"
                aria-label="Contact Agrofini"
                className="inline-block border-2 border-white/30 text-white/70 px-10 py-4 rounded-full font-semibold text-lg hover:border-white hover:text-white transition-colors"
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

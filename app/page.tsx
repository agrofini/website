import HeroSection from './components/HeroSection'
import TheProblem from './components/TheProblem'
import WhoWeAre from './components/WhoWeAre'
import WhatWeDo from './components/WhatWeDo'
import HowItWorks from './components/HowItWorks'
import OurVision from './components/OurVision'
import LandStats from './components/LandStats'
import PartnerCTA from './components/PartnerCTA'

export default function Home() {
  return (
    <>
      <HeroSection />
      <TheProblem />
      <WhoWeAre />
      <WhatWeDo />
      <HowItWorks />
      <OurVision />
      <LandStats />
      <PartnerCTA />
    </>
  )
}

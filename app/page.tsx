import HeroSection from './components/HeroSection'
import TheProblem from './components/TheProblem'
import WhoWeAre from './components/WhoWeAre'
import WhatWeDo from './components/WhatWeDo'
import OurVision from './components/OurVision'
import LandStats from './components/LandStats'
import InvestTeaser from './components/InvestTeaser'
import Disclaimer from './components/Disclaimer'

export default function Home() {
  return (
    <>
      <HeroSection />
      <TheProblem />
      <WhoWeAre />
      <WhatWeDo />
      <OurVision />
      <LandStats />
      <InvestTeaser />
      <Disclaimer />
    </>
  )
}

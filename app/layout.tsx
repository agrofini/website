import type { Metadata } from 'next'
import { Playfair_Display, Nunito } from 'next/font/google'
import { MotionConfig } from 'framer-motion'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Agrofini West Africa Limited — Rooted in Purpose. Growing for Africa.',
  description: "An integrated agribusiness building Nigeria's food future — commercial greenhouse farming, fish farming, poultry production, and agro-integrated technologies in Ogun State.",
  keywords: 'agribusiness, Nigeria, farming, investment, Ogun State, greenhouse, aquaculture, Agrofini',
  openGraph: {
    title: 'Agrofini West Africa Limited',
    description: "An integrated agribusiness building Nigeria's food future from the ground up.",
    siteName: 'Agrofini West Africa Limited',
    locale: 'en_NG',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${nunito.variable}`}>
      <body className="font-sans">
        <MotionConfig reducedMotion="user">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  )
}

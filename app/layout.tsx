import type { Metadata } from 'next'
import { Playfair_Display, Nunito } from 'next/font/google'
import { MotionConfig } from 'framer-motion'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Replace with the Agrofini WhatsApp number (international format, no + or spaces)
const WHATSAPP_NUMBER = '2348000000000'
const WHATSAPP_MESSAGE = 'Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20investing%20with%20Agrofini.'

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
  metadataBase: new URL('https://agrofiniholdings.com'),
  title: {
    default: 'Agrofini West Africa Limited — Rooted in Purpose. Growing for Africa.',
    template: '%s | Agrofini West Africa',
  },
  description:
    'Agrofini West Africa Limited (RC No. 8181060) is building demand-anchored commercial farms in Nigeria — horticulture, snail farming, and integrated agribusiness supplying Lagos directly from Ogun State and Benin City.',
  keywords: [
    'agribusiness Nigeria',
    'farm investment Nigeria',
    'horticulture Nigeria',
    'snail farming Nigeria',
    'Lagos food supply',
    'Agrofini',
    'Ogun State farming',
    'Benin City farm',
    'Nigerian agribusiness investment',
  ],
  openGraph: {
    title: 'Agrofini West Africa Limited — Rooted in Purpose. Growing for Africa.',
    description:
      'Demand-anchored commercial farms supplying Lagos directly. Horticulture, snail farming, and integrated agribusiness. Investor conversations open.',
    url: 'https://agrofiniholdings.com',
    siteName: 'Agrofini West Africa Limited',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Agrofini West Africa Limited — commercial agribusiness',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agrofini West Africa Limited',
    description:
      'Demand-anchored commercial farms supplying Lagos directly. Investor conversations open.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
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

        {/* WhatsApp floating button */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
          aria-label="Chat with Agrofini on WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center hover:scale-110 transition-all duration-200"
          style={{ backgroundColor: '#25D366' }}
        >
          <i className="fa-brands fa-whatsapp text-white text-2xl" aria-hidden="true" />
        </a>
      </body>
    </html>
  )
}

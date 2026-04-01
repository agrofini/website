'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = (href: string) =>
    `font-medium transition-colors ${
      pathname === href ? 'text-primary font-semibold' : 'text-text hover:text-primary'
    }`

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl font-bold text-primary">
          Agrofini
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className={linkClass('/')}>Home</Link>
          <Link href="/invest" className={linkClass('/invest')}>Invest</Link>
          <Link href="/contact" className={linkClass('/contact')}>Contact</Link>
          <Link
            href="/invest"
            aria-label="Invest now with Agrofini"
            className="bg-primary text-white px-5 py-2 rounded-full font-semibold hover:bg-primaryDark transition-colors"
          >
            Invest Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className={`block w-6 h-0.5 bg-text transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-text transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-text transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-sage px-6 py-4 flex flex-col gap-4">
          <Link href="/" onClick={() => setMenuOpen(false)} className={linkClass('/')}>Home</Link>
          <Link href="/invest" onClick={() => setMenuOpen(false)} className={linkClass('/invest')}>Invest</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className={linkClass('/contact')}>Contact</Link>
          <Link
            href="/invest"
            onClick={() => setMenuOpen(false)}
            aria-label="Invest now with Agrofini"
            className="bg-primary text-white px-5 py-2 rounded-full font-semibold text-center hover:bg-primaryDark transition-colors"
          >
            Invest Now
          </Link>
        </div>
      )}
    </nav>
  )
}

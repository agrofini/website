'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home', shortLabel: undefined },
  { href: '/about', label: 'About', shortLabel: undefined },
  { href: '/centre-of-excellence', label: 'Centre of Excellence', shortLabel: 'Excellence' },
  { href: '/produce', label: 'Our Produce', shortLabel: undefined },
  { href: '/buyers', label: 'For Buyers', shortLabel: undefined },
  { href: '/journal', label: 'Journal', shortLabel: undefined },
  { href: '/contact', label: 'Contact', shortLabel: undefined },
]

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
    `font-medium transition-colors text-sm ${
      pathname === href ? 'text-primary font-semibold' : 'text-text/80 hover:text-primary'
    }`

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl font-bold text-primary flex-shrink-0">
          Agrofini
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass(link.href)}>
              <span className="hidden xl:inline">{link.label}</span>
              <span className="xl:hidden">{link.shortLabel ?? link.label}</span>
            </Link>
          ))}
          <Link
            href="/buyers"
            aria-label="Become a supply partner with Agrofini"
            className="bg-primary text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-primaryDark transition-colors"
          >
            Become a Partner
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-0.5 bg-text transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-text transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-text transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-sage px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={linkClass(link.href)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/buyers"
            onClick={() => setMenuOpen(false)}
            aria-label="Become a supply partner with Agrofini"
            className="bg-primary text-white px-5 py-2 rounded-full font-semibold text-sm text-center hover:bg-primaryDark transition-colors"
          >
            Become a Partner
          </Link>
        </div>
      )}
    </nav>
  )
}

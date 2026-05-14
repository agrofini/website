import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primaryDark text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl font-bold mb-3">Agrofini</p>
            <p className="text-white/60 text-sm leading-relaxed">
              Agrofini West Africa Limited<br />
              RC No. 8181060, Nigeria
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-semibold mb-4 text-white/80 uppercase tracking-wider text-xs">Navigation</p>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
              <Link href="/invest" className="text-white/60 hover:text-white transition-colors">Invest</Link>
              <Link href="/contact" className="text-white/60 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold mb-4 text-white/80 uppercase tracking-wider text-xs">Get in Touch</p>
            <a href="mailto:info@agrofiniholdings.com" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 mb-4">
              <i className="fa-solid fa-envelope text-sm" aria-hidden="true" />
              info@agrofiniholdings.com
            </a>
            <p className="text-white/40 text-xs leading-relaxed">
              Ogun State, Nigeria<br />
              agrofiniholdings.com
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/40">
          <p>© 2026 Agrofini West Africa Limited. All rights reserved.</p>
          <p>This website does not constitute a financial guarantee or public solicitation. RC No. 8181060.</p>
        </div>
        <p className="text-white/20 text-xs mt-4">
          Icons by{' '}
          <a href="https://fontawesome.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/40 transition-colors">
            Font Awesome
          </a>{' '}
          (CC BY 4.0).
        </p>
      </div>
    </footer>
  )
}

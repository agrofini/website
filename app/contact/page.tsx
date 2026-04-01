import ContactForm from '../components/ContactForm'

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 bg-warmWhite min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 pt-8">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Get In Touch</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-text">Contact Us</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: contact info */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-text mb-8">We&apos;d love to hear from you.</h2>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-sage rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-envelope text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-text mb-1">Email</p>
                  <a href="mailto:info@agrofiniholdings.com" className="text-primary hover:underline">
                    info@agrofiniholdings.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-sage rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-location-dot text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-text mb-1">Farm Location</p>
                  <p className="text-text/70 text-sm leading-relaxed">
                    Block B, Plot 6<br />
                    Prymepoint Farm Estate, Obafe Road<br />
                    Agboro Village, Obafemi-Owode LGA<br />
                    Ogun State, Nigeria
                  </p>
                </div>
              </div>
            </div>

            {/* OpenStreetMap embed — centred on survey UTM coords (7.082°N, 3.614°E) */}
            <div className="rounded-2xl overflow-hidden border border-sage shadow-sm">
              <iframe
                title="Agrofini farm location — Prymepoint Farm Estate, Obafemi-Owode, Ogun State"
                src="https://www.openstreetmap.org/export/embed.html?bbox=3.574%2C7.062%2C3.654%2C7.102&layer=mapnik&marker=7.082%2C3.614"
                width="100%"
                height="360"
                style={{ border: 0, display: 'block' }}
                loading="lazy"
              />
              <div className="bg-sage px-4 py-2 flex items-center justify-between">
                <p className="text-xs text-text/50">Obafemi-Owode LGA, Ogun State, Nigeria</p>
                <a
                  href="https://www.openstreetmap.org/?mlat=7.082&mlon=3.614#map=14/7.082/3.614"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline"
                >
                  View larger map
                </a>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

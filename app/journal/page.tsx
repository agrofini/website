'use client'

import { motion } from 'framer-motion'

const articles = [
  {
    date: 'May 1, 2026',
    category: 'Farm Operations',
    title: 'Okra First: Why Our 35-Day Crop Is Our Most Strategic',
    body: [
      'When most commercial farms calculate their first revenue date, they point to their main crop. We point to okra.',
      'At our Benin City site, okra is the first seed in the ground on Day 1 of operations. By Day 35, we have our first harvest — covering a full month\'s labour costs before a single habanero pepper has flowered.',
      'This is not accidental. It is the sequencing logic at the heart of how we operate.',
      'The challenge with high-value cash crops like habanero pepper is their timeline. Pepper takes 4–5 months from planting to first commercial harvest. During that window, a farm carries the full weight of its operating costs — irrigation, labour, inputs, logistics — without a single naira of revenue.',
      'Our answer is staggered crop sequencing. Okra at Day 35. Cucumber at Day 40. These fast-cycle crops do not just fill the income gap — they cover their own operating costs and contribute to the overall farm\'s cash position while the main crops are still growing.',
      'For our supply partners, this translates directly. It means there is never a period when Agrofini has nothing to offer. Year-round supply is not a marketing claim — it is an outcome of how we design our planting calendar from the ground up.',
    ],
  },
  {
    date: 'April 18, 2026',
    category: 'Market Intelligence',
    title: 'The 300km Advantage: Why Location Is the Most Durable Edge in Farming',
    body: [
      'Ask any Mile 12 trader where the pepper came from. Most of the time, the answer is somewhere in Kaduna, Kano, or Plateau State — a journey of 700 to 1,000 kilometres across one of West Africa\'s most demanding road networks.',
      'That produce has been in transit for two to three days before it arrives at West Africa\'s largest open food market. It has passed through multiple handlers. It has not seen a cold chain. By the time it reaches a Lagos restaurant kitchen, its shelf life is already significantly depleted.',
      'This is not a critique of northern Nigerian farmers, who are exceptional growers. It is an observation about distance — and what distance costs in freshness, consistency, and delivered price.',
      'Agrofini\'s Benin City site sits 300 kilometres from Mile 12. In a properly loaded truck, that is a four-to-six-hour journey. Produce leaves the farm in the morning and arrives at your kitchen or market stall the same day — without a cold-chain break, without multiple handlers, and without the price inflation that comes from a three-day supply chain.',
      'For hotels, restaurants, and wholesale buyers who care about quality and consistency, the arithmetic is straightforward. 300 kilometres is not a marginal advantage. It is a structural one — and one that no amount of effort from a more distant competitor can eliminate.',
    ],
  },
  {
    date: 'April 5, 2026',
    category: 'Our Approach',
    title: 'Demand Before Seeds: The Logic of Growing to Order',
    body: [
      'The most common reason commercial farms fail to deliver consistent supply is not the quality of their growing. It is the sequence of their planning.',
      'The traditional model works like this: plant a crop, tend it for weeks or months, harvest it, and then search for a buyer willing to pay a reasonable price before the produce spoils. This model puts the farmer permanently at the mercy of market conditions on the day of harvest — and it puts supply chain buyers permanently at the mercy of inconsistent availability.',
      'Agrofini was designed around a different sequence.',
      'Before we plant, we ask who is buying. We establish supply relationships — with hotels, restaurants, wholesale markets, and corporate buyers — and we understand what they need: which crops, in what volumes, on what schedule. Then we build our planting calendar to match that demand exactly.',
      'The result is a farm that operates more like a fulfillment operation than a traditional agricultural enterprise. You know what is coming, when it is coming, and at what quality grade. For our supply partners, this means you can plan your menus, your procurement, and your kitchen operations around a supply source that behaves predictably.',
      'For us, it means capital is never deployed on produce that does not have a destination. Every seed represents a confirmed order. That is how we intend to run every season of operations.',
    ],
  },
]

export default function JournalPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primaryDark text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.p
            className="text-accent font-semibold uppercase tracking-widest text-sm mb-5"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
          >
            Farm Journal
          </motion.p>
          <motion.h1
            className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          >
            Notes from the Farm.
          </motion.h1>
          <motion.p
            className="text-white/70 text-xl leading-relaxed"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
          >
            Market intelligence, farming philosophy, and field notes from Agrofini&apos;s operations team.
          </motion.p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-24 bg-warmWhite">
        <div className="max-w-3xl mx-auto px-6 space-y-20">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              <div className="flex items-center gap-4 mb-5">
                <span className="bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
                  {article.category}
                </span>
                <span className="text-text/40 text-sm">{article.date}</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text mb-6 leading-tight">
                {article.title}
              </h2>
              <div className="space-y-4">
                {article.body.map((para, pi) => (
                  <p key={pi} className={`leading-relaxed ${pi === 0 ? 'text-text/80 text-lg font-medium' : 'text-text/65'}`}>
                    {para}
                  </p>
                ))}
              </div>
              {i < articles.length - 1 && (
                <div className="mt-16 border-t border-sage" />
              )}
            </motion.article>
          ))}
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-24 bg-sage">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Stay Updated</p>
            <h2 className="font-serif text-3xl font-bold text-text mb-4">Get Farm Notes by Email</h2>
            <p className="text-text/60 mb-8 leading-relaxed">Market insights, crop updates, and supply availability — direct to your inbox. No noise, no spam.</p>
            <form
              name="journal-subscribe"
              method="POST"
              data-netlify="true"
              className="flex flex-col sm:flex-row gap-3"
            >
              <input type="hidden" name="form-name" value="journal-subscribe" />
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="flex-1 px-5 py-3 rounded-full border border-primary/20 bg-white text-text placeholder:text-text/40 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button
                type="submit"
                className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primaryDark transition-colors flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  )
}

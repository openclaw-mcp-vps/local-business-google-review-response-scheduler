export default function Home() {
  const faqs = [
    {
      q: 'How does spam detection avoidance work?',
      a: 'We randomize response delays between 2–48 hours and vary response length and phrasing so Google never flags your account for bot-like activity.'
    },
    {
      q: 'Can I manage multiple business locations?',
      a: 'Yes. Connect unlimited Google My Business locations under one dashboard and set per-location response templates and schedules.'
    },
    {
      q: 'Do I need technical skills to set this up?',
      a: 'No. Connect your Google account in one click, pick a tone, and the AI handles the rest. Most users are live in under 5 minutes.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Local Business Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Schedule &amp; Automate<br />
          <span className="text-[#58a6ff]">Google Review Responses</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          AI-generated professional replies, randomized send times to avoid spam flags, and a unified dashboard for every location — all for $12/mo.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Free Trial
        </a>
        <p className="mt-4 text-xs text-[#484f58]">No credit card required · Cancel anytime</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '🤖', title: 'AI-Powered Replies', desc: 'GPT-4 crafts on-brand responses for every star rating and sentiment.' },
            { icon: '⏱️', title: 'Smart Scheduling', desc: 'Randomized 2–48 hr delays mimic human behaviour and protect your account.' },
            { icon: '📊', title: 'Analytics Dashboard', desc: 'Track response rates, average rating trends, and sentiment over time.' }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$12<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need to automate review management</p>
          <ul className="text-sm text-left space-y-3 mb-8">
            {[
              'Unlimited business locations',
              'AI response generation (GPT-4)',
              'Smart randomized scheduling',
              'Sentiment & rating analytics',
              'Custom response templates',
              'Email digest reports'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started — $12/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-sm text-[#8b949e]">{faq.a}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-[#484f58] mt-12">
          &copy; {new Date().getFullYear()} ReviewScheduler. All rights reserved.
        </p>
      </section>
    </main>
  )
}

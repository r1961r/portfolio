'use client'
import { useState } from 'react'

const contactInfo = [
  { label: 'Email', value: 'rawan0.0allawi@gmail.com', href: 'mailto:rawan0.0allawi@gmail.com' },
  { label: 'Phone', value: '+212 713 197 771', href: 'tel:+212713197771' },
  { label: 'LinkedIn', value: 'RaouaneAllawi', href: 'https://linkedin.com/in/RaouaneAllawi' },
  { label: 'Location', value: 'Salé, Morocco', href: null },
]

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    const form = e.target
    const data = new FormData(form)

    try {
      const res = await fetch('https://formspree.io/f/mqeybrqn', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">

      <div className="mb-14 sm:mb-20">
        <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase mb-4">Contact</p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-tight">
          Let's work<br />
          <span className="italic">together.</span>
        </h1>
        <p className="mt-5 text-ink/60 max-w-xl text-sm sm:text-base">
          Open to internships, freelance projects, and collaboration.
          I respond quickly — usually within a few hours.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

        {/* Contact details */}
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-ink/40 uppercase mb-8">Reach Me At</p>
          <div className="space-y-5">
            {contactInfo.map(({ label, value, href }) => (
              <div key={label} style={{ borderBottom: '1px solid #1A1A2E1A' }} className="pb-4">
                <p className="text-xs font-mono text-ink/40 uppercase tracking-wider mb-1">{label}</p>
                {href ? (
                  <a href={href} target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="text-base sm:text-lg text-ink hover:text-accent transition-colors break-all">
                    {value}
                  </a>
                ) : (
                  <p className="text-base sm:text-lg text-ink">{value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10">
            <p className="font-mono text-xs tracking-[0.2em] text-ink/40 uppercase mb-4">Availability</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
              <span className="text-xs sm:text-sm text-ink/70">Available for internship & freelance</span>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-ink/40 uppercase mb-8">Send a Message</p>

          {status === 'success' ? (
            <div className="p-6 border border-green-200 bg-green-50">
              <p className="font-medium text-green-800 mb-1">Message sent!</p>
              <p className="text-sm text-green-700">Thanks for reaching out — I'll get back to you soon.</p>
              <button onClick={() => setStatus('idle')}
                className="mt-4 text-sm text-green-700 underline hover:no-underline">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

              <div>
                <label className="block text-xs font-mono text-ink/50 uppercase tracking-wider mb-2">Your Name</label>
                <input type="text" name="name" required placeholder="John Smith"
                  className="w-full px-4 py-3 border border-ink/20 bg-transparent text-ink text-sm
                    focus:outline-none focus:border-accent transition-colors placeholder:text-ink/30" />
              </div>

              <div>
                <label className="block text-xs font-mono text-ink/50 uppercase tracking-wider mb-2">Email</label>
                <input type="email" name="email" required placeholder="you@company.com"
                  className="w-full px-4 py-3 border border-ink/20 bg-transparent text-ink text-sm
                    focus:outline-none focus:border-accent transition-colors placeholder:text-ink/30" />
              </div>

              <div>
                <label className="block text-xs font-mono text-ink/50 uppercase tracking-wider mb-2">Subject</label>
                <input type="text" name="subject" required placeholder="Project / Internship / Collaboration"
                  className="w-full px-4 py-3 border border-ink/20 bg-transparent text-ink text-sm
                    focus:outline-none focus:border-accent transition-colors placeholder:text-ink/30" />
              </div>

              <div>
                <label className="block text-xs font-mono text-ink/50 uppercase tracking-wider mb-2">Message</label>
                <textarea name="message" required rows={5} placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 border border-ink/20 bg-transparent text-ink text-sm
                    focus:outline-none focus:border-accent transition-colors placeholder:text-ink/30 resize-none" />
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-600">Something went wrong. Please try again or email me directly.</p>
              )}

              <button type="submit" disabled={status === 'sending'}
                className="w-full py-3.5 bg-ink text-cream text-sm font-medium
                  hover:bg-accent transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
                {status === 'sending' ? 'Sending...' : 'Send Message →'}
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  )
}
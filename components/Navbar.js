'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav style={{ borderBottom: '1px solid #1A1A2E1A' }}
      className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between">

        <Link href="/" className="font-display text-xl text-ink" onClick={() => setOpen(false)}>
          RA<span className="text-accent">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link key={href} href={href}
              className={`nav-link text-sm font-medium tracking-wide transition-colors
                ${pathname === href ? 'text-accent active' : 'text-ink/70 hover:text-ink'}`}>
              {label}
            </Link>
          ))}
        </div>

        <Link href="/contact"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium
            border border-ink text-ink hover:bg-ink hover:text-cream transition-all duration-200">
          Hire me
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span style={{
            display: 'block', width: '22px', height: '1.5px', background: '#1A1A2E',
            transition: 'transform 0.2s',
            transform: open ? 'translateY(5px) rotate(45deg)' : 'none'
          }} />
          <span style={{
            display: 'block', width: '22px', height: '1.5px', background: '#1A1A2E',
            transition: 'opacity 0.2s',
            opacity: open ? 0 : 1
          }} />
          <span style={{
            display: 'block', width: '22px', height: '1.5px', background: '#1A1A2E',
            transition: 'transform 0.2s',
            transform: open ? 'translateY(-5px) rotate(-45deg)' : 'none'
          }} />
        </button>
      </div>

      {open && (
        <div style={{ borderTop: '1px solid #1A1A2E1A' }}
          className="md:hidden bg-cream/95 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {links.map(({ href, label }) => (
              <Link key={href} href={href}
                onClick={() => setOpen(false)}
                className={`px-3 py-3 text-sm font-medium rounded transition-colors
                  ${pathname === href ? 'text-accent' : 'text-ink/70 hover:text-ink hover:bg-ink/5'}`}>
                {label}
              </Link>
            ))}
            <Link href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-3 py-3 text-sm font-medium border border-ink text-center
                hover:bg-ink hover:text-cream transition-all duration-200">
              Hire me
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
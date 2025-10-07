'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const NAV = [
  { href: '/', label: 'Anasayfa' },
  { href: '/projects', label: 'Projeler' },
  { href: '/blog', label: 'Blog' },
  { href: '/#contact', label: 'İletişim' },
]

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
   <header
      className={[
        'fixed top-0 left-0 w-full z-50 transition-colors duration-300',
        scrolled || pathname !== '/' ? 'bg-white border-b shadow-sm' : 'bg-transparent'
      ].join(' ')}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src={scrolled ? '/logo.png' : '/logo.png'}
              alt="Elif Gider"
              width={240}
              height={60}
              priority
              className="w-auto max-h-12"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 text-[15px] transition
                    ${active
                      ? (scrolled || pathname !== '/')
                        ? 'font-semibold text-black'
                        : 'font-semibold text-white'
                      : (scrolled || pathname !== '/')
                        ? 'text-zinc-700 hover:text-black'
                        : 'text-zinc-200 hover:text-white'}
                  `}
                >
                {item.label}
              </Link>
              )
            })}
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            className={`md:hidden inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm transition
              ${scrolled ? 'text-black border-zinc-300' : 'text-white border-white/50'}
            `}
            aria-label="Menü"
            onClick={() => setOpen(o => !o)}
          >
            ☰
          </button>
        </div>

        {/* MOBILE NAV */}
        {open && (
          <div className="md:hidden pb-3">
            <nav className="flex flex-col rounded-lg border bg-white p-2 shadow-sm">
              {NAV.map((item) => {
                const active = pathname === item.href
                return (
                 <Link
                    key={item.href}
                    href={item.href}
                    className={`relative rounded-full px-4 py-2 text-[15px] transition
                      ${active
                        ? (scrolled || pathname !== '/')
                          ? 'font-semibold text-black'
                          : 'font-semibold text-white'
                        : (scrolled || pathname !== '/')
                          ? 'text-zinc-700 hover:text-black'
                          : 'text-zinc-200 hover:text-white'}
                    `}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>
          </div>
        )}
      </div>

      {/* Header transparanken okunabilirlik için üstte çok hafif gradient */}
      {!scrolled && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent" />
      )}
    </header>
  )
}
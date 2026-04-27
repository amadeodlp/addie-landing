import { useState, useEffect } from 'react'
import { LogoWordmark } from '@/components/atoms/Logo'
import { Button } from '@/components/atoms/Button'
import { LINKS } from '@/constants'

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'border-b border-ash bg-void/95 backdrop-blur-sm' : 'bg-transparent',
      ].join(' ')}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <LogoWordmark size="sm" showTagline={false} />

        <nav className="hidden sm:flex items-center gap-6">
          <a href="#features" className="font-mono text-[11px] tracking-widest uppercase text-smoke hover:text-paper transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="font-mono text-[11px] tracking-widest uppercase text-smoke hover:text-paper transition-colors">
            How it works
          </a>
          <a href="#support" className="font-mono text-[11px] tracking-widest uppercase text-smoke hover:text-paper transition-colors">
            Open source
          </a>
          <a href={LINKS.GITHUB} className="font-mono text-[11px] tracking-widest uppercase text-smoke hover:text-paper transition-colors">
            GitHub
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button href={LINKS.DOWNLOAD_PAGE} variant="signal" size="sm">
            Download
          </Button>
        </div>
      </div>
    </header>
  )
}

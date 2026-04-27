import { useInView } from '@/components/atoms/useInView'
import { MonoLabel } from '@/components/atoms/Typography'
import { Button } from '@/components/atoms/Button'
import { LINKS } from '@/constants'

export const PricingSection = () => {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section id="support" className="border-t border-ash">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
        <div
          ref={ref}
          className={[
            'grid lg:grid-cols-2 gap-16 items-center transition-all duration-700',
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
          ].join(' ')}
        >
          {/* Left: copy */}
          <div>
            <MonoLabel color="smoke" className="mb-4 block">Open source</MonoLabel>
            <h2 className="font-sans font-extrabold text-display-lg text-paper leading-tight mb-6">
              Free to use.<br />
              <span className="text-smoke">Open source.</span>
            </h2>
            <p className="font-sans text-base text-smoke leading-relaxed mb-4">
              Addie is free to download and use. The full source code is on GitHub — read it, fork it, contribute to it.
            </p>
            <p className="font-sans text-base text-smoke leading-relaxed">
              If Addie makes your sessions better, consider supporting development through GitHub Sponsors. It keeps the project alive and growing. Every contribution is genuinely appreciated.
            </p>
          </div>

          {/* Right: cards */}
          <div className="flex flex-col gap-4">
            {/* Free card */}
            <div className="border border-ash bg-dim p-6 flex items-center justify-between gap-4">
              <div>
                <p className="font-sans font-bold text-paper mb-1">Download & use</p>
                <p className="font-sans text-sm text-smoke">No account. No trial. Just install and go.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 flex-shrink-0">
                <Button href={LINKS.DOWNLOAD_MAC} variant="ghost" size="sm">Mac</Button>
                <Button href={LINKS.DOWNLOAD_WIN} variant="ghost" size="sm">Windows</Button>
              </div>
            </div>

            {/* Sponsor card */}
            <div className="border border-signal/40 bg-dim p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-signal" />
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-sans font-bold text-paper mb-1">Support development</p>
                  <p className="font-sans text-sm text-smoke">Help keep Addie alive and maintained.</p>
                </div>
                <Button href={LINKS.SPONSORS} variant="signal" size="sm" className="flex-shrink-0">
                  Sponsor ↗
                </Button>
              </div>
            </div>

            {/* Source card */}
            <div className="border border-ash bg-dim p-6 flex items-center justify-between gap-4">
              <div>
                <p className="font-sans font-bold text-paper mb-1">View source</p>
                <p className="font-sans text-sm text-smoke">MIT licensed. PRs welcome.</p>
              </div>
              <Button href={LINKS.GITHUB} variant="ghost" size="sm" className="flex-shrink-0">
                GitHub ↗
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

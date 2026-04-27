import { useInView } from '@/components/atoms/useInView'
import { Button } from '@/components/atoms/Button'
import { MonoLabel, AccentDot } from '@/components/atoms/Typography'
import { LogoMark } from '@/components/atoms/Logo'
import { LINKS } from '@/constants'

export const FinalCTASection = () => {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section className="border-t border-ash relative overflow-hidden">
      <div
        aria-hidden
        className="absolute right-0 bottom-0 font-sans font-extrabold text-[50vw] leading-none text-paper opacity-[0.02] pointer-events-none select-none translate-y-1/4"
      >
        A
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-28 sm:py-40 relative">
        <div
          ref={ref}
          className={[
            'max-w-3xl transition-all duration-1000',
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ].join(' ')}
        >
          <div className="flex items-center gap-3 mb-10">
            <LogoMark size={36} />
            <AccentDot size="md" pulse />
          </div>

          <p className="font-sans font-extrabold text-display-xl text-paper leading-[0.92] mb-4">
            Keep composing
          </p>
          <p className="font-serif-italic text-display-xl text-smoke leading-[0.92] mb-12">
            human.
          </p>

          <p className="font-sans text-lg text-smoke leading-relaxed mb-10 max-w-lg">
            Free to download. Free to use. Just install it and open your session.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button href={LINKS.DOWNLOAD_PAGE} variant="signal" size="xl">
              Download Addie
            </Button>
            <Button href={LINKS.GITHUB} variant="ghost" size="xl">
              View source ↗
            </Button>
          </div>

          <MonoLabel color="ghost">
            Free · Open source · No account · Bring your own API key · Ableton Live 11+
          </MonoLabel>
        </div>
      </div>
    </section>
  )
}

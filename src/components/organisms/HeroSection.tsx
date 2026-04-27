import { LogoMark } from '@/components/atoms/Logo'
import { Button } from '@/components/atoms/Button'
import { MonoLabel, AccentDot } from '@/components/atoms/Typography'
import { ChatDemo } from '@/components/molecules/ChatDemo'
import { LINKS } from '@/constants'

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg pt-16">
      {/* Decorative giant A */}
      <div
        aria-hidden
        className="absolute right-0 top-1/2 -translate-y-1/2 font-sans font-extrabold text-[40vw] leading-none text-paper opacity-[0.018] pointer-events-none select-none"
      >
        A
      </div>

      {/* Signal dot top right */}
      <div className="absolute top-24 right-8 sm:right-16">
        <AccentDot size="lg" pulse />
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: copy */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <div className="flex items-center gap-3 animate-fade-up">
              <LogoMark size={32} />
              <MonoLabel color="signal">Free & open source</MonoLabel>
            </div>

            {/* Headline */}
            <div className="animate-fade-up animate-delay-100">
              <h1 className="text-display-2xl font-extrabold text-paper leading-[0.9] tracking-tight mb-4">
                You make it sound.
              </h1>
              <h2 className="text-display-xl font-extrabold leading-[0.9] tracking-tight text-smoke">
                Addie makes it sound better.
              </h2>
            </div>

            {/* Sub */}
            <p className="font-sans text-lg sm:text-xl text-smoke leading-relaxed max-w-lg animate-fade-up animate-delay-200">
              AI co-producer for Ableton Live. Reads your session, diagnoses your mix, controls your DAW — in plain language.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-up animate-delay-300">
              <Button href={LINKS.DOWNLOAD_MAC} variant="signal" size="lg">
                Download for Mac
              </Button>
              <Button href={LINKS.DOWNLOAD_WIN} variant="ghost" size="lg">
                Download for Windows
              </Button>
            </div>

            {/* Trust line */}
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-ghost animate-fade-up animate-delay-400">
              Free · Open source · No account · Ableton Live 11+
            </p>
          </div>

          {/* Right: chat demo */}
          <div className="animate-fade-up animate-delay-200">
            <ChatDemo />
          </div>
        </div>

        {/* Scroll hint */}
        <div className="mt-20 flex items-center gap-4">
          <div className="w-16 h-px bg-ash" />
          <MonoLabel color="smoke">Scroll to learn more</MonoLabel>
        </div>
      </div>
    </section>
  )
}

import { useInView } from '@/components/atoms/useInView'
import { MonoLabel } from '@/components/atoms/Typography'
import { PricingCard } from '@/components/molecules/PricingCard'

const FAQS = [
  {
    q: 'Which Ableton versions are supported?',
    a: 'Ableton Live 11 and 12. Both Standard and Suite editions.',
  },
  {
    q: 'Which LLMs can I use?',
    a: 'Any OpenAI-compatible provider: OpenAI, Anthropic, DeepSeek, OpenRouter, Mistral, Ollama, LM Studio. You bring your own API key — Addie never touches it.',
  },
  {
    q: 'What happens after 10 free uses?',
    a: 'Addie stops responding until you purchase. Your session, projects, and conversations are all preserved.',
  },
  {
    q: 'Does it work on Mac and Windows?',
    a: 'Yes. Both platforms. Electron-based, so the UI is identical.',
  },
  {
    q: 'Do I need an API key?',
    a: 'Yes — Addie needs an LLM to think. You paste your own key from OpenAI, Anthropic, DeepSeek, or any compatible provider. Or run a local model with Ollama for zero cost.',
  },
  {
    q: 'Does my session data leave my machine?',
    a: 'Your session context is sent to whichever LLM provider you configure — that\'s the whole point of how it works. Addie itself is local and has no server. If you use a local model like Ollama or LM Studio, nothing leaves your machine at all.',
  },
  {
    q: 'What does "v1.x updates included" mean?',
    a: 'All bug fixes and feature updates within version 1 are free. Major version upgrades (v2.0+) would be a separate purchase.',
  },
]

export const PricingSection = () => {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section id="pricing" className="border-t border-ash">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
        {/* Header */}
        <div
          ref={ref}
          className={[
            'mb-14 transition-all duration-700',
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
          ].join(' ')}
        >
          <MonoLabel color="smoke" className="mb-4 block">Pricing</MonoLabel>
          <h2 className="font-sans font-extrabold text-display-lg text-paper max-w-xl leading-tight">
            One price. No monthly. No upsells.
          </h2>
          <p className="font-sans text-lg text-smoke mt-4 max-w-lg">
            Pay once and use it until you don&apos;t want to anymore. That&apos;s it.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
          {/* FAQ left */}
          <div>
            <MonoLabel color="smoke" className="mb-6 block">Common questions</MonoLabel>
            <div className="flex flex-col divide-y divide-ash">
              {FAQS.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
              ))}
            </div>
          </div>

          {/* Pricing card right */}
          <div className="lg:sticky lg:top-24">
            <PricingCard variant="full" />
          </div>
        </div>
      </div>
    </section>
  )
}

const FAQItem = ({ q, a, index }: { q: string; a: string; index: number }) => {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={[
        'py-5 transition-all duration-500',
        inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4',
      ].join(' ')}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <p className="font-sans text-base font-bold text-paper mb-2">{q}</p>
      <p className="font-sans text-sm text-smoke leading-relaxed">{a}</p>
    </div>
  )
}

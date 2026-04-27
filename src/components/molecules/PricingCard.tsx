import type { FC } from 'react'
import { Button } from '@/components/atoms/Button'
import { MonoLabel, AccentDot } from '@/components/atoms/Typography'
import { LINKS, PRICING } from '@/constants'

interface PricingCardProps {
  variant?: 'full' | 'compact'
}

const INCLUDED = [
  'Natural language control of all Ableton devices',
  'Full parameter access including VSTs & AUs',
  'MIDI generation — drum patterns & melodies',
  'Mix diagnosis & session analysis',
  'RAG-powered audio engineering knowledge base',
  'Works with any LLM — bring your own API key',
  'Local app — no Addie server, no account required',
  'All future v1.x updates included',
]

export const PricingCard: FC<PricingCardProps> = ({ variant = 'full' }) => {
  return (
    <div className="border border-signal/40 bg-dim relative overflow-hidden">
      {/* Signal top bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-signal" />

      <div className={variant === 'full' ? 'p-8 sm:p-10' : 'p-6'}>
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <MonoLabel color="signal" className="mb-2 block">
              Addie v{PRICING.version}
            </MonoLabel>
            <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-paper leading-tight">
              One-time purchase
            </h3>
            <p className="font-sans text-sm text-smoke mt-1">No subscription. Yours forever.</p>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="font-sans font-extrabold text-4xl sm:text-5xl text-paper leading-none">
              ${PRICING.amount}
            </div>
            <div className="font-mono text-[10px] tracking-widest uppercase text-smoke mt-1">
              USD · one time
            </div>
          </div>
        </div>

        {/* Free trial callout */}
        <div className="border border-ash bg-void/50 px-4 py-3 mb-6 flex items-center gap-3">
          <AccentDot size="sm" />
          <p className="font-sans text-sm text-paper">
            Try free — <span className="font-bold">{PRICING.trial_uses} uses</span>, no credit card required.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <Button
            href={LINKS.FREE_TRIAL}
            variant="signal"
            size="lg"
            fullWidth
            className="sm:flex-1 text-center justify-center"
          >
            Start free trial
          </Button>
          <Button
            href={LINKS.BUY}
            variant="primary"
            size="lg"
            fullWidth
            className="sm:flex-1 text-center justify-center"
          >
            Buy — ${PRICING.amount}
          </Button>
        </div>

        {/* What's included */}
        {variant === 'full' && (
          <div>
            <MonoLabel color="smoke" className="mb-4 block">What&apos;s included</MonoLabel>
            <ul className="flex flex-col gap-2.5">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-signal font-mono text-sm mt-0.5 flex-shrink-0">—</span>
                  <span className="font-sans text-sm text-smoke leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

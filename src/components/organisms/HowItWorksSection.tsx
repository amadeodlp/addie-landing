import { useInView } from '@/components/atoms/useInView'
import { MonoLabel } from '@/components/atoms/Typography'
import { StepCard } from '@/components/molecules/StepCard'
import { HOW_IT_WORKS } from '@/constants'

export const HowItWorksSection = () => {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section id="how-it-works" className="border-t border-ash">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: header + steps */}
          <div>
            <div
              ref={ref}
              className={[
                'mb-12 transition-all duration-700',
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
              ].join(' ')}
            >
              <MonoLabel color="smoke" className="mb-4 block">How it works</MonoLabel>
              <h2 className="font-sans font-extrabold text-display-lg text-paper leading-tight">
                Two minutes to install.<br />
                <span className="text-smoke">Then just talk.</span>
              </h2>
            </div>

            <div className="flex flex-col">
              {HOW_IT_WORKS.map((step, i) => (
                <StepCard
                  key={step.step}
                  {...step}
                  index={i}
                  isLast={i === HOW_IT_WORKS.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Right: system diagram */}
          <div className="lg:sticky lg:top-24">
            <SystemDiagram />
          </div>
        </div>
      </div>
    </section>
  )
}

const SystemDiagram = () => {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.2 })

  return (
    <div
      ref={ref}
      className={[
        'border border-ash p-6 sm:p-8 transition-all duration-700',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
      ].join(' ')}
    >
      <MonoLabel color="smoke" className="mb-6 block">Architecture</MonoLabel>

      <div className="flex flex-col gap-1">
        {/* Layer: UI */}
        <DiagramLayer
          label="Chat UI"
          detail="Electron · WebSocket"
          color="signal"
        />
        <DiagramArrow label="user message" />

        {/* Layer: Node */}
        <DiagramLayer
          label="Node.js backend"
          detail="Reasoning · Actions · LLM"
          color="paper"
        />
        <DiagramArrow label="bridge commands" />

        {/* Layer: Python */}
        <DiagramLayer
          label="Python control surface"
          detail="Ableton MIDI Remote Script"
          color="paper"
        />
        <DiagramArrow label="Live Object Model" />

        {/* Layer: Ableton */}
        <DiagramLayer
          label="Ableton Live"
          detail="Your session · Your devices"
          color="smoke"
          isBottom
        />
      </div>

      <div className="mt-6 pt-4 border-t border-ash flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-signal" />
          <span className="font-mono text-[10px] tracking-wider uppercase text-ghost">
            Addie runs locally — no server, no account
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-ash" />
          <span className="font-mono text-[10px] tracking-wider uppercase text-ghost">
            LLM calls go to your provider with your API key
          </span>
        </div>
      </div>
    </div>
  )
}

interface DiagramLayerProps {
  label: string
  detail: string
  color: 'signal' | 'paper' | 'smoke'
  isBottom?: boolean
}

const DiagramLayer = ({ label, detail, color, isBottom: _isBottom = false }: DiagramLayerProps) => {
  const borderColor = {
    signal: 'border-signal/50 bg-signal/5',
    paper: 'border-ash bg-dim',
    smoke: 'border-ash/50 bg-void',
  }[color]

  const textColor = {
    signal: 'text-signal',
    paper: 'text-paper',
    smoke: 'text-smoke',
  }[color]

  return (
    <div className={`border px-4 py-3 flex items-center justify-between ${borderColor}`}>
      <span className={`font-sans text-sm font-bold ${textColor}`}>{label}</span>
      <span className="font-mono text-[9px] tracking-wider uppercase text-ghost">{detail}</span>
    </div>
  )
}

const DiagramArrow = ({ label }: { label: string }) => (
  <div className="flex items-center gap-2 py-0.5 pl-4">
    <div className="flex flex-col items-center">
      <div className="w-px h-2 bg-ash" />
      <div className="w-0 h-0 border-l-2 border-r-2 border-t-4 border-l-transparent border-r-transparent border-t-ash" />
    </div>
    <span className="font-mono text-[9px] tracking-wider uppercase text-ghost">{label}</span>
  </div>
)

import { useEffect, useRef } from 'react'
import { useInView } from '@/components/atoms/useInView'

interface QAItem {
  q: string
  a: string | string[]
  accent?: boolean
}

const QA_ITEMS: QAItem[] = [
  {
    q: 'What is Addie?',
    a: 'Addie is a free, open source desktop app for Mac and Windows that connects to Ableton Live. You talk to it in plain language — it reads your session, diagnoses problems, and makes changes directly in your DAW. No clicking through menus. No hunting for parameters.',
  },
  {
    q: 'What can Addie do?',
    a: [
      'Read your full session — every track, device, and parameter',
      'Diagnose mix problems: frequency masking, gain staging, routing issues',
      'Control any native Ableton device — EQ, compressors, reverbs, delays, limiters, Wavetable, Drift',
      'Build signal chains from scratch: parallel compression, sidechain, vocal bus, master chain',
      'Set up routing: buses, return tracks, sends',
      'Write MIDI clips — drum patterns, melodies, straight into your session',
      'Automate parameters over time',
      'Explain what your devices are doing in plain language',
    ],
  },
  {
    q: "What can't Addie do?",
    a: [
      'Control third-party plugins (VSTs, AUs) out of the box — they need to be set up in Ableton\'s Configure mode first so their parameters are exposed',
      'Play or stop your session, fire clips, or arm tracks — those stay manual',
      'Make creative decisions for you — it works with what you give it',
    ],
    accent: true,
  },
  {
    q: 'Who is Addie for?',
    a: 'Musicians who self-produce and want to focus on making music, not on engineering. You know what you want it to sound like. Addie handles the technical path to get there.',
  },
  {
    q: 'Is it really free?',
    a: 'Yes — free to download, free to use, open source. No trial, no paywall, no account. If it makes your sessions better, support development through GitHub Sponsors — it makes a real difference.',
  },
  {
    q: 'What do I need to use it?',
    a: [
      'Ableton Live 11 or 12 (Standard or Suite)',
      'An API key from OpenAI, Anthropic, DeepSeek, Gemini, or any compatible provider — Claude Haiku, GPT-4o mini, and DeepSeek are a solid starting point',
      'More complex sessions benefit from a more capable model — Addie works with whatever you choose',
    ],
  },
  {
    q: 'Does my session data leave my machine?',
    a: 'Your session context is sent to whichever LLM provider you configure — that\'s how it works. Addie itself is local and has no server.',
  },
]

export const QASection = () => {
  return (
    <section id="what-is-addie" className="border-t border-ash">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
        <div className="flex flex-col">
          <div className="max-w-3xl flex flex-col">
            <QABlock item={QA_ITEMS[0]} index={0} />
          </div>

          <div className="mt-12 w-full">
            <DemoVideo />
          </div>

          <div className="max-w-3xl flex flex-col">
            {QA_ITEMS.slice(1).map((item, i) => (
              <QABlock key={i + 1} item={item} index={i + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const DemoVideo = () => {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return

    const onLoadedMetadata = () => {
      try {
        if (Number.isFinite(video.duration) && video.duration > 5) {
          video.currentTime = 5
        }
        // If autoplay is blocked, this will harmlessly reject.
        void video.play().catch(() => {})
      } catch {
        // no-op
      }
    }

    video.addEventListener('loadedmetadata', onLoadedMetadata)
    return () => video.removeEventListener('loadedmetadata', onLoadedMetadata)
  }, [])

  return (
    <div className="border border-ash bg-void overflow-hidden w-full">
      <video
        ref={ref}
        className="w-full h-auto"
        autoPlay
        controls
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="/addie-demo.mp4#t=5" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

const QABlock = ({ item, index }: { item: QAItem; index: number }) => {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.15 })

  return (
    <div
      ref={ref}
      className={[
        'py-12 border-b border-ash transition-all duration-700',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
        index === 0 ? 'pt-0' : '',
      ].join(' ')}
      style={{ transitionDelay: `${Math.min(index * 40, 120)}ms` }}
    >
      <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-signal mb-4">
        {String(index + 1).padStart(2, '0')}
      </p>
      <h3 className="font-sans font-extrabold text-display-sm text-paper mb-6 leading-tight">
        {item.q}
      </h3>

      {Array.isArray(item.a) ? (
        <ul className="flex flex-col gap-2">
          {item.a.map((line, j) => (
            <li key={j} className="flex items-start gap-3">
              <span className={`mt-[6px] w-1 h-1 rounded-full flex-shrink-0 ${item.accent ? 'bg-smoke' : 'bg-signal'}`} />
              <span className="font-sans text-base text-smoke leading-relaxed">{line}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="font-sans text-base text-smoke leading-relaxed">{item.a}</p>
      )}
    </div>
  )
}

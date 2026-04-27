import { useState, useEffect, useRef } from 'react'
import { AccentDot } from '@/components/atoms/Typography'

interface Message {
  role: 'user' | 'addie'
  text: string
  action?: string
}

const DEMO_MESSAGES: Message[] = [
  { role: 'user', text: 'The kick and bass are fighting each other in the low end.' },
  {
    role: 'addie',
    text: "I can see the issue. Your Kick track has a boost at 80 Hz, and the Bass has a boost at 100 Hz — they're overlapping. I'll high-pass the Bass above 90 Hz and carve 3 dB at 80 Hz on the Kick's EQ.",
    action: 'param_set | Bass | 0 | HP Freq | 90 Hz\nparam_set | Kick | 0 | 80 Hz | -3.0 dB',
  },
  { role: 'user', text: 'Add a limiter to the master and set ceiling to -0.3 dBTP.' },
  {
    role: 'addie',
    text: "Adding Limiter to Master. Setting ceiling to -0.3 dBTP.",
    action: 'browser_insert | Master | Limiter\nparam_set | Master | 0 | Ceiling | -0.3',
  },
  { role: 'user', text: 'Write a 4-bar trap drum pattern at 140 BPM with ghost notes.' },
  {
    role: 'addie',
    text: "Creating a 4-bar MIDI clip on your Drum Rack track with a punchy trap pattern — kick on 1 and 3, snare on 2 and 4, 16th-note hi-hats with ghost note velocity variation.",
    action: 'set_clip_notes | Drums | 0 | [...MIDI data]',
  },
]

export const ChatDemo = () => {
  const [visibleCount, setVisibleCount] = useState(0)
  const [showAction, setShowAction] = useState<number | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (visibleCount >= DEMO_MESSAGES.length) return
    const msg = DEMO_MESSAGES[visibleCount]
    const delay = visibleCount === 0 ? 800 : msg.role === 'addie' ? 900 : 1800

    const t = setTimeout(() => {
      setVisibleCount((c) => c + 1)
      if (msg.role === 'addie' && msg.action) {
        setTimeout(() => setShowAction(visibleCount), 400)
      }
    }, delay)

    return () => clearTimeout(t)
  }, [visibleCount])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [visibleCount, showAction])

  return (
    <div className="border border-ash bg-void overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-ash">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-ash" />
          <span className="w-2.5 h-2.5 rounded-full bg-ash" />
          <span className="w-2.5 h-2.5 rounded-full bg-ash" />
        </div>
        <span className="font-mono text-[10px] tracking-widest uppercase text-ghost mx-auto">
          addie
        </span>
        <AccentDot size="sm" pulse />
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="h-72 sm:h-80 overflow-y-auto p-4 flex flex-col gap-3 scroll-smooth"
      >
        {DEMO_MESSAGES.slice(0, visibleCount).map((msg, i) => (
          <div key={i} className="flex flex-col gap-1.5 animate-fade-up">
            {/* Role label */}
            <span className="font-mono text-[9px] tracking-widest uppercase text-ghost">
              {msg.role === 'user' ? 'you' : 'addie'}
            </span>

            {/* Bubble */}
            <div
              className={[
                'text-sm leading-relaxed px-4 py-3 max-w-[85%]',
                msg.role === 'user'
                  ? 'bg-dim text-paper self-end border border-ash'
                  : 'bg-transparent text-paper self-start border border-ash',
              ].join(' ')}
            >
              {msg.text}
            </div>

            {/* Action block */}
            {msg.action && showAction === i && (
              <div className="self-start mt-1 border border-signal/30 bg-signal/5 px-3 py-2 max-w-full">
                <p className="font-mono text-[9px] tracking-wider uppercase text-signal mb-1">
                  actions queued — confirm?
                </p>
                <pre className="font-mono text-[10px] text-ghost whitespace-pre-wrap leading-relaxed">
                  {msg.action}
                </pre>
              </div>
            )}
          </div>
        ))}

        {/* Typing indicator */}
        {visibleCount < DEMO_MESSAGES.length &&
          DEMO_MESSAGES[visibleCount]?.role === 'addie' && (
            <div className="flex gap-1 px-4 py-3 border border-ash self-start">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-1 h-1 rounded-full bg-smoke animate-pulse"
                  style={{ animationDelay: `${i * 150}ms` }}
                />
              ))}
            </div>
          )}
      </div>
    </div>
  )
}

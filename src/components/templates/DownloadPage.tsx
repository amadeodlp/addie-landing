import { useEffect, useState } from 'react'
import { LogoMark, LogoWordmark } from '@/components/atoms/Logo'
import { MonoLabel, AccentDot } from '@/components/atoms/Typography'
import { LINKS } from '@/constants'

type Platform = 'mac' | 'windows' | 'unknown'

function detectPlatform(): Platform {
  const ua = navigator.userAgent
  if (/Mac/i.test(ua) && !/iPhone|iPad/.test(ua)) return 'mac'
  if (/Win/i.test(ua)) return 'windows'
  return 'unknown'
}

export const DownloadPage = () => {
  const [platform, setPlatform] = useState<Platform>('unknown')
  const [downloading, setDownloading] = useState(false)

  useEffect(() => {
    setPlatform(detectPlatform())
  }, [])

  const primaryHref   = platform === 'windows' ? LINKS.DOWNLOAD_WIN : LINKS.DOWNLOAD_MAC
  const secondaryHref = platform === 'windows' ? LINKS.DOWNLOAD_MAC : LINKS.DOWNLOAD_WIN
  const primaryLabel  = platform === 'windows' ? 'Download for Windows' : 'Download for Mac'
  const secondaryLabel= platform === 'windows' ? 'Also available for Mac' : 'Also available for Windows'
  const primaryDetail = platform === 'windows' ? '.exe installer · Windows 10+' : '.dmg · macOS 11+'

  function handleDownload() {
    setDownloading(true)
    // Let the browser follow the link naturally — just show feedback
    setTimeout(() => setDownloading(false), 4000)
  }

  return (
    <div className="min-h-screen bg-void text-paper flex flex-col">

      {/* Minimal nav */}
      <header className="border-b border-ash">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
          <a href="/">
            <LogoWordmark size="sm" showTagline={false} />
          </a>
          <a
            href={LINKS.GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] tracking-widest uppercase text-smoke hover:text-paper transition-colors"
          >
            GitHub ↗
          </a>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col items-center justify-center px-5 sm:px-8 py-20">
        <div className="max-w-lg w-full flex flex-col items-center text-center gap-10">

          {/* Logo + heading */}
          <div className="flex flex-col items-center gap-5">
            <div className="relative">
              <LogoMark size={56} />
              <AccentDot size="sm" pulse className="absolute -top-1 -right-1" />
            </div>
            <div>
              <h1 className="font-sans font-extrabold text-3xl sm:text-4xl text-paper leading-tight mb-2">
                Download Addie
              </h1>
              <p className="font-sans text-base text-smoke">
                Free · Open source · No account required
              </p>
            </div>
          </div>

          {/* Primary download */}
          <div className="w-full flex flex-col gap-3">
            <a
              href={primaryHref}
              onClick={handleDownload}
              className={[
                'w-full flex flex-col items-center gap-1.5 px-8 py-5',
                'bg-signal text-void border border-signal font-extrabold',
                'hover:bg-[#d4ff1a] transition-all duration-200 signal-glow',
                downloading ? 'opacity-70 pointer-events-none' : '',
              ].join(' ')}
            >
              <span className="text-lg leading-none">
                {downloading ? 'Starting download…' : primaryLabel}
              </span>
              <span className="font-mono text-[10px] tracking-wider font-normal opacity-70">
                {primaryDetail}
              </span>
            </a>

            <a
              href={secondaryHref}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-ash text-smoke hover:text-paper hover:border-smoke transition-colors font-sans text-sm"
            >
              {secondaryLabel}
            </a>
          </div>

          {/* Install steps */}
          <div className="w-full border border-ash bg-dim">
            <div className="px-5 py-4 border-b border-ash">
              <MonoLabel color="smoke">After downloading</MonoLabel>
            </div>
            {platform === 'windows' ? (
              <WindowsSteps />
            ) : (
              <MacSteps />
            )}
          </div>

          {/* Requirements */}
          <div className="w-full text-left">
            <MonoLabel color="smoke" className="mb-4 block">Requirements</MonoLabel>
            <ul className="flex flex-col gap-2.5">
              {[
                'Ableton Live 11 or 12 — Standard or Suite',
                'An API key from OpenAI, Anthropic, DeepSeek, Gemini, or any compatible provider',
                'Claude Haiku, GPT-4o mini, and DeepSeek are a good starting point — go bigger for more complex sessions',
              ].map((req, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-[6px] w-1 h-1 rounded-full bg-signal flex-shrink-0" />
                  <span className="font-sans text-sm text-smoke leading-relaxed">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer links */}
          <div className="flex items-center gap-6 pt-2">
            <a href="/" className="font-mono text-[10px] tracking-widest uppercase text-smoke hover:text-paper transition-colors">
              ← Back
            </a>
            <a href={LINKS.GITHUB} target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] tracking-widest uppercase text-smoke hover:text-paper transition-colors">
              View source
            </a>
            <a href={LINKS.SPONSORS} target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] tracking-widest uppercase text-smoke hover:text-signal transition-colors">
              Sponsor
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

const MacSteps = () => (
  <ol className="flex flex-col divide-y divide-ash">
    {[
      { n: '01', text: 'Open the downloaded .dmg file' },
      { n: '02', text: 'Drag Addie to your Applications folder' },
      { n: '03', text: 'Open Addie — the onboarding wizard will install the control surface and walk you through setup' },
      { n: '04', text: 'In Ableton: Preferences → Link, Tempo & MIDI → set a Control Surface slot to Addie' },
    ].map(({ n, text }) => (
      <li key={n} className="flex items-start gap-4 px-5 py-4">
        <span className="font-mono text-[10px] tracking-wider text-signal flex-shrink-0 mt-0.5">{n}</span>
        <span className="font-sans text-sm text-smoke leading-relaxed">{text}</span>
      </li>
    ))}
  </ol>
)

const WindowsSteps = () => (
  <ol className="flex flex-col divide-y divide-ash">
    {[
      { n: '01', text: 'Run the downloaded Addie Setup.exe' },
      { n: '02', text: 'Follow the installer — choose your install location and click Install' },
      { n: '03', text: 'Open Addie — the onboarding wizard will install the control surface and walk you through setup' },
      { n: '04', text: 'In Ableton: Preferences → Link, Tempo & MIDI → set a Control Surface slot to Addie' },
    ].map(({ n, text }) => (
      <li key={n} className="flex items-start gap-4 px-5 py-4">
        <span className="font-mono text-[10px] tracking-wider text-signal flex-shrink-0 mt-0.5">{n}</span>
        <span className="font-sans text-sm text-smoke leading-relaxed">{text}</span>
      </li>
    ))}
  </ol>
)

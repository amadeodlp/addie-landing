import { LogoWordmark } from '@/components/atoms/Logo'
import { MonoLabel } from '@/components/atoms/Typography'
import { LINKS, PRICING } from '@/constants'

export const Footer = () => {
  return (
    <footer className="border-t border-ash">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <LogoWordmark size="sm" showTagline />

          <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
            <a href={LINKS.FREE_TRIAL} className="font-mono text-[10px] tracking-widest uppercase text-smoke hover:text-signal transition-colors">
              Free trial
            </a>
            <a href={LINKS.BUY} className="font-mono text-[10px] tracking-widest uppercase text-smoke hover:text-paper transition-colors">
              Buy ${PRICING.amount}
            </a>
            <a href="#features" className="font-mono text-[10px] tracking-widest uppercase text-smoke hover:text-paper transition-colors">
              Features
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-ash flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <MonoLabel color="ghost">
            © {new Date().getFullYear()} Addie v{PRICING.version} — AI mix assistant for Ableton Live
          </MonoLabel>
          <MonoLabel color="ghost">
            No Addie server · Your API key · Your data
          </MonoLabel>
        </div>
      </div>
    </footer>
  )
}

import type { FC, ReactNode } from 'react'

// MonoLabel — small uppercase mono text tag
interface MonoLabelProps {
  children: ReactNode
  color?: 'signal' | 'smoke' | 'ghost'
  className?: string
}

export const MonoLabel: FC<MonoLabelProps> = ({ children, color = 'signal', className = '' }) => {
  const colorClass = {
    signal: 'text-signal',
    smoke: 'text-smoke',
    ghost: 'text-ghost',
  }[color]

  return (
    <span
      className={`font-mono text-[10px] sm:text-[11px] tracking-[0.2em] uppercase ${colorClass} ${className}`}
    >
      {children}
    </span>
  )
}

// Tag — pill-style badge
interface TagProps {
  children: ReactNode
  className?: string
}

export const Tag: FC<TagProps> = ({ children, className = '' }) => (
  <span
    className={`inline-block font-mono text-[9px] tracking-[0.15em] uppercase border border-ash text-smoke px-2 py-0.5 ${className}`}
  >
    {children}
  </span>
)

// AccentDot — the signal green dot used decoratively
interface AccentDotProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  pulse?: boolean
}

export const AccentDot: FC<AccentDotProps> = ({ size = 'md', className = '', pulse = false }) => {
  const sizeClass = { sm: 'w-1.5 h-1.5', md: 'w-2.5 h-2.5', lg: 'w-4 h-4' }[size]
  return (
    <span
      className={`inline-block rounded-full bg-signal flex-shrink-0 ${sizeClass} ${pulse ? 'animate-pulse-signal' : ''} ${className}`}
    />
  )
}

// SectionDivider — thin horizontal rule
export const SectionDivider: FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`w-full h-px bg-ash ${className}`} />
)

// StepNumber — large outlined number
interface StepNumberProps {
  n: string
  className?: string
}

export const StepNumber: FC<StepNumberProps> = ({ n, className = '' }) => (
  <span
    className={`font-mono text-[11px] tracking-[0.15em] text-ghost border border-ash px-2 py-0.5 ${className}`}
  >
    {n}
  </span>
)

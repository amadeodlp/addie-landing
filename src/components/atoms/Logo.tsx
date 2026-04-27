import type { FC } from 'react'

interface LogoMarkProps {
  size?: number
  variant?: 'dark' | 'light'
  className?: string
}

export const LogoMark: FC<LogoMarkProps> = ({ size = 40, variant = 'dark', className = '' }) => {
  const isDark = variant === 'dark'
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="48" cy="48" r="47"
        fill={isDark ? '#0a0a0a' : '#f5f0e8'}
        stroke={isDark ? '#2a2a25' : '#d0cab8'}
        strokeWidth="1"
      />
      <path
        d="M48 22 L62 68 L55 68 L50.5 55 H45.5 L41 68 L34 68 Z M48 34 L51.8 48 H44.2 Z"
        fill={isDark ? '#f5f0e8' : '#0a0a0a'}
      />
      <circle cx="48" cy="48" r="3" fill="#c8ff00" />
    </svg>
  )
}

interface LogoWordmarkProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'dark' | 'light'
  showTagline?: boolean
  className?: string
}

export const LogoWordmark: FC<LogoWordmarkProps> = ({
  size = 'md',
  variant = 'dark',
  showTagline = false,
  className = '',
}) => {
  const markSize = { sm: 24, md: 32, lg: 44 }[size]
  const textSize = { sm: 'text-xl', md: 'text-2xl', lg: 'text-4xl' }[size]
  const textColor = variant === 'dark' ? 'text-paper' : 'text-void'

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoMark size={markSize} variant={variant} />
      <div className="flex flex-col">
        <span className={`font-sans font-extrabold tracking-tight leading-none ${textSize} ${textColor}`}>
          addie
        </span>
        {showTagline && (
          <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-signal mt-0.5">
            AI mix assistant
          </span>
        )}
      </div>
    </div>
  )
}

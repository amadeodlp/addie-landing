import type { FC, ReactNode, AnchorHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'signal'
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  href?: string
  fullWidth?: boolean
  icon?: ReactNode
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-paper text-void hover:bg-cream border border-paper font-bold',
  secondary:
    'bg-transparent text-paper border border-ash hover:border-smoke hover:bg-dim font-medium',
  ghost:
    'bg-transparent text-smoke border border-transparent hover:text-paper hover:border-ash font-medium',
  signal:
    'bg-signal text-void hover:bg-[#d4ff1a] border border-signal font-extrabold signal-glow',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl',
}

export const Button: FC<ButtonProps> = ({
  variant = 'secondary',
  size = 'md',
  children,
  href = '#',
  fullWidth = false,
  icon,
  className = '',
  ...rest
}) => {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={[
        'inline-flex items-center justify-center gap-2',
        'rounded-none transition-all duration-200',
        'tracking-tight leading-none',
        'cursor-pointer no-underline',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth ? 'w-full' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {children}
      {icon && <span className="flex-shrink-0">{icon}</span>}
    </a>
  )
}

import type { FC } from 'react'
import { useInView } from '@/components/atoms/useInView'

interface StepCardProps {
  step: string
  title: string
  description: string
  index?: number
  isLast?: boolean
}

export const StepCard: FC<StepCardProps> = ({
  step,
  title,
  description,
  index = 0,
  isLast = false,
}) => {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.15 })

  return (
    <div
      ref={ref}
      className={[
        'flex gap-6 sm:gap-8 transition-all duration-700',
        inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6',
      ].join(' ')}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Left: step number + connector line */}
      <div className="flex flex-col items-center gap-0 flex-shrink-0">
        <div className="w-10 h-10 border border-ash flex items-center justify-center flex-shrink-0">
          <span className="font-mono text-[11px] tracking-wider text-ghost">{step}</span>
        </div>
        {!isLast && <div className="w-px flex-1 bg-ash mt-2 min-h-[40px]" />}
      </div>

      {/* Right: content */}
      <div className="pb-10">
        <h3 className="font-sans font-bold text-lg sm:text-xl text-paper mb-2 leading-tight">
          {title}
        </h3>
        <p className="font-sans text-sm sm:text-base text-smoke leading-relaxed max-w-lg">
          {description}
        </p>
      </div>
    </div>
  )
}

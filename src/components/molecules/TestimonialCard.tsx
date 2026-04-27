import type { FC } from 'react'
import { useInView } from '@/components/atoms/useInView'

interface TestimonialCardProps {
  quote: string
  author: string
  detail: string
  index?: number
}

export const TestimonialCard: FC<TestimonialCardProps> = ({
  quote,
  author,
  detail,
  index = 0,
}) => {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={[
        'flex flex-col gap-6 p-6 sm:p-8 border border-ash transition-all duration-700',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
      ].join(' ')}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Opening mark */}
      <span className="font-serif-italic text-5xl text-ash leading-none select-none">&ldquo;</span>

      <p className="font-serif-italic text-lg sm:text-xl text-paper leading-snug flex-1">
        {quote}
      </p>

      <div className="flex items-center gap-3 pt-2 border-t border-ash">
        <div className="w-1.5 h-1.5 rounded-full bg-signal flex-shrink-0" />
        <div>
          <p className="font-sans text-sm font-medium text-paper">{author}</p>
          <p className="font-mono text-[10px] tracking-wider uppercase text-smoke">{detail}</p>
        </div>
      </div>
    </div>
  )
}

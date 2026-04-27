import type { FC } from 'react'
import { Tag } from '@/components/atoms/Typography'
import { useInView } from '@/components/atoms/useInView'

interface FeatureCardProps {
  title: string
  description: string
  tag: string
  index?: number
}

export const FeatureCard: FC<FeatureCardProps> = ({ title, description, tag, index = 0 }) => {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={[
        'border border-ash p-6 sm:p-8 flex flex-col gap-4 transition-all duration-700',
        'hover:border-smoke group',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
      ].join(' ')}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <Tag>{tag}</Tag>
      <h3 className="font-sans font-bold text-lg sm:text-xl text-paper leading-tight">
        {title}
      </h3>
      <p className="font-sans text-sm sm:text-base text-smoke leading-relaxed">
        {description}
      </p>
      <div className="mt-auto pt-4 w-8 h-px bg-ash group-hover:bg-signal group-hover:w-16 transition-all duration-300" />
    </div>
  )
}

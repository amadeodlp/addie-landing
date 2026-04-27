import { useInView } from '@/components/atoms/useInView'
import { MonoLabel } from '@/components/atoms/Typography'
import { TestimonialCard } from '@/components/molecules/TestimonialCard'
import { TESTIMONIALS } from '@/constants'

export const TestimonialsSection = () => {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section className="border-t border-ash">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
        <div
          ref={ref}
          className={[
            'mb-14 transition-all duration-700',
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
          ].join(' ')}
        >
          <MonoLabel color="smoke" className="mb-4 block">Beta feedback</MonoLabel>
          <h2 className="font-sans font-extrabold text-display-lg text-paper max-w-lg leading-tight">
            From people who actually know what they&apos;re doing.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ash">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-void">
              <TestimonialCard {...t} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

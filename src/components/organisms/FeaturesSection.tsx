import { useInView } from '@/components/atoms/useInView'
import { MonoLabel } from '@/components/atoms/Typography'
import { FeatureCard } from '@/components/molecules/FeatureCard'
import { FEATURES } from '@/constants'

export const FeaturesSection = () => {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section id="features" className="border-t border-ash">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
        {/* Header */}
        <div
          ref={ref}
          className={[
            'mb-14 transition-all duration-700',
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
          ].join(' ')}
        >
          <MonoLabel color="smoke" className="mb-4 block">What it does</MonoLabel>
          <h2 className="font-sans font-extrabold text-display-lg text-paper max-w-xl leading-tight">
            Every part of your session, under your words.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ash">
          {FEATURES.map((feature, i) => (
            <div key={feature.id} className="bg-void">
              <FeatureCard {...feature} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

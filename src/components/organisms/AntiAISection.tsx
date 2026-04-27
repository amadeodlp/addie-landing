import { useInView } from '@/components/atoms/useInView'
import { SectionDivider } from '@/components/atoms/Typography'

export const AntiAISection = () => {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section className="border-t border-ash">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32">
        <div
          ref={ref}
          className={[
            'transition-all duration-1000',
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ].join(' ')}
        >
          <div className="max-w-4xl mb-10">
            <p className="font-serif-italic text-display-xl text-paper leading-[0.95]">
              &ldquo;I hate AI music.
            </p>
            <p className="font-serif-italic text-display-xl text-smoke leading-[0.95]">
              Don&apos;t you?&rdquo;
            </p>
          </div>

          <SectionDivider className="mb-10 max-w-2xl" />

          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl">
            <div>
              <p className="font-sans text-lg text-paper leading-relaxed mb-4">
                Addie is not here to make music for you.
              </p>
              <p className="font-sans text-base text-smoke leading-relaxed">
                It can't write a melody that means something. It doesn't know your influences,
                your grief, your reference tracks. It doesn't know what makes a good record.
              </p>
            </div>
            <div>
              <p className="font-sans text-lg text-paper leading-relaxed mb-4">
                That's your job. Always will be.
              </p>
              <p className="font-sans text-base text-smoke leading-relaxed">
                Addie handles the friction — the clicking, the hunting for parameters, the
                decisions that pull you out of the creative zone. So you can stay in it.
              </p>
            </div>
          </div>

          <div className="mt-12 pl-6 border-l-2 border-signal max-w-2xl">
            <p className="font-sans text-lg font-medium text-paper leading-snug">
              The only way AI belongs in music — is if it stays out of the way and amplifies what you already know how to do.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

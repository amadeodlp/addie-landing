import { Navbar } from '@/components/organisms/Navbar'
import { HeroSection } from '@/components/organisms/HeroSection'
import { QASection } from '@/components/organisms/QASection'
import { AntiAISection } from '@/components/organisms/AntiAISection'
import { HowItWorksSection } from '@/components/organisms/HowItWorksSection'
import { TestimonialsSection } from '@/components/organisms/TestimonialsSection'
import { PricingSection } from '@/components/organisms/PricingSection'
import { FinalCTASection } from '@/components/organisms/FinalCTASection'
import { Footer } from '@/components/organisms/Footer'

/**
 * Conversion narrative order:
 * 1. Hero        — Hook: who it is, what it does in one line
 * 2. QA          — Raw data fast: what/can/can't/who/need/free
 * 3. AntiAI      — Philosophy: we're not that kind of AI
 * 4. HowItWorks  — It's simple, 2 mins to install
 * 5. Testimonials — Social proof
 * 6. Pricing     — Decide: $49 one-time, try 10 uses free
 * 7. FinalCTA    — Last push
 */
export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-void text-paper">
      <Navbar />
      <main>
        <HeroSection />
        <QASection />
        <AntiAISection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  )
}

import { Navigation } from '@/components/navigation/navigation';
import { HeroSection } from '@/components/sections/hero-section';
import { SocialProofStrip } from '@/components/sections/social-proof-strip';
import { ProductShowcase } from '@/components/sections/product-showcase';
import { ProblemSolution } from '@/components/sections/problem-solution';
import { ServicesOverview } from '@/components/sections/services-overview';
import { AboutSection } from '@/components/sections/about';
import { ContactSection } from '@/components/sections/contact';
import { CaseStudies } from '@/components/sections/case-studies';
import { PricingEngagement } from '@/components/sections/pricing-engagement';
import { FAQSection } from '@/components/sections/faq-section';
import { FinalCTA } from '@/components/sections/final-cta';
import { Footer } from '@/components/sections/footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SocialProofStrip />
      <ProductShowcase />
      <ProblemSolution />
      <ServicesOverview />
      <AboutSection />
      <ContactSection />
      <CaseStudies />
      <PricingEngagement />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}

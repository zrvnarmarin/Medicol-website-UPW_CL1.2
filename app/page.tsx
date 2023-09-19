import HeroSection from '@/components/home/HeroSection'
import OurServicesSection from '@/components/home/OurServicesSection'
import WhyUsSection from '@/components/home/WhyUsSection'
import DoctorsSection from '@/components/home/DoctorsSection'
import StatsSection from '@/components/home/FeedbackSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-4 sm:px-16 md:px-24 lg:px-16 xl:px-12 2xl:px-32 3xl:px-64 bg-[#F7FCFD]">
      <HeroSection />
      <OurServicesSection />
      <WhyUsSection />
      <DoctorsSection />
      <StatsSection />
      <TestimonialsSection />
    </main>
  )
}


import { HeroSection } from '@/components/our-services/HeroSection';
import ServicesSection from '@/components/our-services/ServicesSection';
import WhyUsSection from '@/components/home/WhyUsSection';
import StatsSection from '@/components/home/FeedbackSection';

export default function Home() {
    return (
        <main className="w-full bg-[#F7FCFD]">
            <HeroSection />
            <ServicesSection />
            <div className='px-4 sm:px-16 md:px-24 lg:px-16 xl:px-12 2xl:px-32 3xl:px-64 bg-[#F7FCFD]'>
                <WhyUsSection />
            </div>
            <StatsSection />
        </main>
    )
}



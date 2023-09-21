import Image from 'next/image';
import HeroBanner from '@/public/images/our-services-route/our-services-hero-banner.png'
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

export function HeroSection() {
    return (
        <section className='relative'>
            <Image src={HeroBanner} alt="our_service_banner" />
            <div className='absolute inset-0 flex items-center justify-center'>
                <h1 className='text-white overflow-hidden py-14 px-6'>
                    <span className='text-2xl max-w-[80%] sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl rounded-3xl px-12 py-24 bg-[#183E47]/70'>Our Services</span>
                </h1>
            </div>
        </section>
    )
}

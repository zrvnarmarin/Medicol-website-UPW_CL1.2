import HeroBanner from '@/public/images/about-us-route/about-us-hero-banner.png'
import Image from 'next/image'

export default function HeroSection() {
    return (
        <section className='relative'>
            <Image src={HeroBanner} alt="our_service_banner" />
            <div className='absolute inset-0 flex items-center justify-center'>
                <h1 className='text-white overflow-hidden py-14 px-6'>
                    <span className='text-2xl max-w-[80%] sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl rounded-3xl px-12 py-24 bg-[#183E47]/70'>
                        About Us
                    </span>
                </h1>
            </div>
        </section>
    )
}
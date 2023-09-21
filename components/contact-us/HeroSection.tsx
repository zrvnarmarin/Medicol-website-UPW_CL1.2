import HeroBanner from '@/public/images/contact-us-route/contact-us-hero-banner.png'
import Image from 'next/image'

export default function HeroSection() {
    return (
        <section className='relative'>
            <Image src={HeroBanner} alt="our_service_banner" />
        </section>
    )
}
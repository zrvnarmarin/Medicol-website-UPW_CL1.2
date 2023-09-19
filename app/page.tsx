import Image from 'next/image'
import HeroSection from '@/components/home/HeroSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-8 sm:px-16 md:px-24 lg:px-16 xl:px-12 2xl:px-32 3xl:px-64">
      <HeroSection />
    </main>
  )
}


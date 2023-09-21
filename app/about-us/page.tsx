import CompanyDescriptionSection from "@/components/about-us/CompanyDescriptionSection"
import HeroSection from "@/components/about-us/HeroSection"
import OurAchievementsSection from "@/components/about-us/OurAchievementsSection"
import DoctorsSection from "@/components/home/DoctorsSection"
import StatsSection from "@/components/home/FeedbackSection"
import TestimonialsSection from "@/components/home/TestimonialsSection"

export default function AboutUs() {
    return (
        <section className="w-full bg-[#F7FCFD]">
            <HeroSection />
            <CompanyDescriptionSection />
            <OurAchievementsSection />
            <div className="flex flex-col px-4 sm:px-16 md:px-24 lg:px-32 xl:px-48 2xl:px-64 3xl:px-96 bg-[#f4f5f4] mt-12 mb-20">
                <DoctorsSection />
            </div>
            <StatsSection />
        </section>
    )
}
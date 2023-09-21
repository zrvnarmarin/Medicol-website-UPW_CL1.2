import DoctorsSection from "@/components/doctors/DoctorsSection"
import HeroSection from "@/components/doctors/HeroSection"
import Image from "next/image"


export default function Doctors() {
    return (
        <section className="w-full bg-[#F7FCFD]">
            <HeroSection />
            <DoctorsSection />
        </section>
    )
}


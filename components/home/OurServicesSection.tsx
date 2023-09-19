import { LeftArrowIconNonPaginated, LeftArrowIconPaginated } from "@/public/icons"
import Image from "next/image"
import ImmediateCare from '@/public/images/our-services-section/immediate-care.png'
import DentalCare from '@/public/images/our-services-section/dental-care.png'
import DiagnosticCenter from '@/public/images/our-services-section/diagnostic-center.png'

export default function OurServicesSection() {
    return (
        <section className="mt-24 flex flex-col gap-8">
            <div className="flex flex-row justify-between">
                <h1 className="text-black font-bold text-2xl">Our Services</h1>
                <div className="flex flex-row items-center gap-3">
                    <button>
                        <LeftArrowIconNonPaginated />
                    </button>
                    <button>
                        <LeftArrowIconPaginated />
                    </button>
                </div>
            </div>
            {/* <div>
                {services.map(service => 
                    <div key={service.id}>
                        {service.imageElement}
                        <p>{service.text}</p>
                    </div>    
                )}
            </div> */}
            <Image src={ImmediateCare} width={0} height={0} alt="type_of_service" />
            <p className="text-black font-medium text-xl">Immediate Care</p>
        </section>
    )
}

const services = [
    { id: 1, text: 'Immediate Care', imageElement: <Image src={ImmediateCare} width={0} height={0} alt="type_of_service" /> },
    { id: 2, text: 'DentalCare', imageElement: <Image src={DentalCare} width={0} height={0} alt="type_of_service" /> },
    { id: 3, text: 'Diagnostic Center', imageElement: <Image src={DiagnosticCenter} width={0} height={0} alt="type_of_service" /> }
]
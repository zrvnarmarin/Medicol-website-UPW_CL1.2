import Image from "next/image";
import PatientHorizontalMobile from '@/public/images/hero-section/patient-on-sofa-horizontal-mobile-size.png'
import PatientHorizontalTablet from '@/public/images/hero-section/patient-on-sofa-horizontal-tablet-size.png'
import PatientVertical from '@/public/images/hero-section/patient-on-sofa-vertical.png'
import { CalendarIcon, LocationIcon, MessageIcon, PeopleIcon, MakeAppointmentRightIcon } from "@/public/icons";



export default function HeroSection() {
    return (
        <section className="mt-8 flex flex-col gap-8">
            <div className="flex">
                <Image src={PatientHorizontalMobile} className="w-full" alt="patient" width={0} height={0} />
            </div>
            <div className="flex flex-col gap-8">
                <h1 className="text-[#062026] text-4xl font-black">Feel Comfort Be Healthy</h1>
                <h2 className="text-[#4F6367] text-sm font-medium">Our professional team will take care of you, we value your time and health.</h2>
                <div className="grid grid-cols-1 gap-4 bg-[#F4F5F4] p-6 rounded-3xl">
                    {possibilities.map(possibility => 
                        <div key={possibility.id} className="flex flex-row items-center gap-4">
                            <div>
                                {possibility.icon}
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-[#364B50]">{possibility.text}</p>
                                <p className="text-xs font-medium text-[#4E6165]">{possibility.subtext}</p>
                            </div>
                        </div>    
                    )}
                </div>
                <div className="flex flex-col gap-8">
                    <button className="w-fit flex items-center gap-4 drop-shadow-2xl bg-[#24BEE0] text-white text-md font-medium px-6 py-4 rounded-full">
                        <span>Make Appointment</span>
                        <MakeAppointmentRightIcon />
                    </button>
                    <div className="flex flex-col gap-2 text-[#CF7D4E]">
                        <p className="flex items-center gap-4">
                            <span>Mon-Fri</span>
                            <span>10AM-9PM</span>
                        </p>
                        <p className="flex items-center gap-4">
                            <span>Sat</span>
                            <span>10AM-2PM</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

const possibilities = [
    { id: 1, text: 'Make an Appointment', subtext: 'Select best time for you.', icon: <CalendarIcon /> }, 
    { id: 2, text: 'Visit the clinic', subtext: 'Take care of your issues', icon: <LocationIcon /> }, 
    { id: 3, text: 'Find the Best Doctor', subtext: 'Find the best doctor in a minute', icon: <PeopleIcon /> }, 
    { id: 4, text: 'Ask Questions', subtext: 'Ask questions any time', icon: <MessageIcon /> }
]
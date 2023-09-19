import { MedicalIcon, LabAchievementsIcon, TrainingRoutineIcon, DNAIcon, MedicalSupportIcon, CleanIcon } from "@/public/icons"

export default function WhyUsSection() {
    return (
        <section className="mt-24 flex flex-col gap-8 bg-[#F4F5F4]">
            <h1 className="text-black font-bold text-2xl">Why Us</h1>
            <div className="grid grid-cols-1 gap-8">
                {otherServices.map(service => 
                    <div key={service.id} className="flex flex-col gap-4 bg-white p-6 rounded-3xl">
                        <div className="w-fit rounded-full p-8 bg-[#EAF9FC]">{service.icon}</div>
                        <h2 className="text-black font-bold text-xl">{service.text}</h2>
                        <p className="font-medium text-md text-[#516468]">{service.subtext}</p>
                    </div>    
                )}
            </div>
        </section>
    )
}

const otherServices = [
    { id: 1, text: 'Insurance', subtext: 'You can get our insurance to not care of any financial difficulties in future', icon: <MedicalIcon /> },
    { id: 2, text: 'DNA Diagnostics', subtext: 'We are proud to announce that we provide high quality diagnostics for DNA', icon: <DNAIcon /> },
    { id: 3, text: 'Medical Support', subtext: 'We have a huge amount of high quality medicine from Germany', icon: <MedicalSupportIcon /> },
    { id: 4, text: 'Lab Achievements', subtext: 'iMedical has 12 laboratory achievements that have world level impact in medicine.', icon: <LabAchievementsIcon /> },
    { id: 5, text: '24/7 Clean', subtext: 'We care about having a clean and safe rooms for our patients', icon: <CleanIcon /> },
    { id: 6, text: 'Training Routine', subtext: 'Our doctors will help you get personal training routine to get the best results', icon: <TrainingRoutineIcon /> },
]
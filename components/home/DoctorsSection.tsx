import DoctorOne from '@/public/images/doctors-section/Doctor01.png'
import DoctorTwo from '@/public/images/doctors-section/Doctor02.png'
import DoctorThree from '@/public/images/doctors-section/Doctor03.png'
import DoctorFour from '@/public/images/doctors-section/Doctor04.png'
import { MakeAppointmentRightIcon } from '@/public/icons'
import Image from 'next/image'

export default function DoctorsSection() {
    return (
        <section className="mt-24 flex flex-col gap-8">
            <h1 className="text-black font-bold text-2xl">Our Qualified Doctors</h1>
            <button className="w-fit flex items-center gap-4 drop-shadow-2xl border-[#CF7D4E] border-2 text-white text-md font-medium px-6 py-4 rounded-full">
                <span className='text-[#CF7D4E]'>See All Doctors</span>
                <MakeAppointmentRightIcon />
            </button>
            <div className="grid grid-cols-1 gap-8">
                {doctors.map(doctor => 
                    <div key={doctor.id} className="flex flex-col gap-4 bg-white p-6 rounded-3xl">
                        <Image src={doctor.imageSrc} height={0} width={0} alt='doctor_image' />
                        <div>
                            <h2 className="text-black font-bold text-xl">{doctor.fullName}</h2>
                            <p className="font-medium text-md text-[#516468]">{doctor.specialisation}</p>
                        </div>
                        <div>
                            <p className='text-[#24BEE0] font-semibold'>+{doctor.numberOfSatisfiedPatients} Happy Patients</p>
                            <p className="font-medium text-md text-[#516468]">{doctor.workAddress}</p>
                        </div>
                    </div>    
                )}
            </div>
        </section>
    )
}

export const doctors = [
    {
      id: 1,
      fullName: 'Michael Kane',
      description: 'Meg is a leading dentist in our central hospital. She has made the name in California Silicon Valley when presenting the new technology, today called “anti-cancer”.',
      specialisation: 'Leading Dentist',
      workAddress: 'iMedical Central Clinic, LA',
      numberOfSatisfiedPatients: 100,
      numberOfCertificates: 12,
      imageSrc: DoctorOne
    },
    {
      id: 2,
      fullName: 'Eleanor Mitchell',
      description: 'Dr. Mitchell is a renowned pediatrician based in London. She is dedicated to providing the best care for children and has received numerous awards for her contributions to child healthcare.',
      specialisation: 'Pediatrician',
      workAddress: 'London Children`s Hospital, London',
      numberOfSatisfiedPatients: 250,
      numberOfCertificates: 15,
      imageSrc: DoctorTwo
    },
    {
      id: 3,
      fullName: 'Oliver Harris',
      description: 'Dr. Harris is a skilled orthopedic surgeon practicing in Manchester. He is known for his expertise in joint replacements and has successfully helped countless patients regain their mobility.',
      specialisation: 'Orthopedic Surgeon',
      workAddress: 'Manchester General Hospital, Manchester',
      numberOfSatisfiedPatients: 180,
      numberOfCertificates: 10,
      imageSrc: DoctorThree
    },
    {
      id: 4,
      fullName: 'Sophia Turner',
      description: 'Dr. Turner is a leading cardiologist hailing from Edinburgh. She is a pioneer in the field of cardiology and has been instrumental in developing innovative heart treatments.',
      specialisation: 'Cardiologist',
      workAddress: 'Edinburgh Heart Clinic, Edinburgh',
      numberOfSatisfiedPatients: 300,
      numberOfCertificates: 20,
      imageSrc: DoctorFour
    }
  ];
  
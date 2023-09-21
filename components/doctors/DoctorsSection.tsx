import DoctorOne from '@/public/images/doctors-route/DoctorOne.png'
import DoctorTwo from '@/public/images/doctors-route/DoctorTwo.png'
import DoctorThree from '@/public/images/doctors-route/DoctorThree.png'
import DoctorFour from '@/public/images/doctors-route/DoctorFour.png'
import Image from 'next/image'

export default function DoctorsSection() {
  return (
    <section className='flex flex-col gap-12 px-4 sm:px-16 md:px-24 lg:px-32 xl:px-48 2xl:px-64 3xl:px-96 bg-[#F7FCFD] mt-12'>
      {doctors.map(doctor =>
        <div key={doctor.id} className='flex flex-col lg:flex-row gap-8'>
          <div className='flex'>
            <Image src={doctor.imageSrc} alt="doctor_image" width={0} height={0} className='w-full object-cover rounded-3xl' />
          </div>
          <div className='flex flex-col items-center justify-center bg-[#f5f4f1] gap-4 rounded-3xl p-4'>
            <p className='flex flex-col items-center'>
              <span className='text-[#cf7d4e] text-lg font-bold'>{doctor.numberOfCertificates} </span>
              <span className='text-[#637476] text-md font-medium'>Certificates</span>
            </p>
            <p className='flex flex-col items-center text-center'>
              <span className='text-[#cf7d4e] text-lg font-bold'>{doctor.numberOfSatisfiedPatients}+</span>
              <span className='text-[#637476] text-md font-medium'>Happy Clients</span>
            </p>
          </div>
          <div>
            <h2 className="text-black font-bold text-xl">{doctor.fullName}</h2>
            <p className="font-medium text-md text-[#cf7d4e]">{doctor.specialisation}</p>
            <p className='text-[#4f6367] text-lg'>{doctor.description}</p>
            <div className='flex flex-col gap-4'>
              <p className='text-[#7f8e92] font-semibold text-lg'>Availability</p>
              <p className='flex flex-row items-center gap-6 text-[#24bee0] text-lg font-medium'>
                <span>Mon-Fri</span>
                <span>{doctor.availableTimes.mondayToFriday}</span>
              </p>
              <p className='flex flex-row items-center gap-6 text-[#24bee0] text-lg font-medium'>
                <span>Sat</span>
                <span>{doctor.availableTimes.weekends}</span>
              </p>
            </div>
          </div>
        </div>  
      )}
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
      imageSrc: DoctorOne,
      availableTimes: {
        mondayToFriday: '11:00-20:00',
        weekends: '12:00-14:00'
      },
    },
    {
      id: 2,
      fullName: 'Eleanor Mitchell',
      description: 'Dr. Mitchell is a renowned pediatrician based in London. She is dedicated to providing the best care for children and has received numerous awards for her contributions to child healthcare.',
      specialisation: 'Pediatrician',
      workAddress: 'London Children`s Hospital, London',
      numberOfSatisfiedPatients: 250,
      numberOfCertificates: 15,
      imageSrc: DoctorTwo,
      availableTimes: {
        mondayToFriday: '11:00-20:00',
        weekends: '12:00-14:00'
      },
    },
    {
      id: 3,
      fullName: 'Oliver Harris',
      description: 'Dr. Harris is a skilled orthopedic surgeon practicing in Manchester. He is known for his expertise in joint replacements and has successfully helped countless patients regain their mobility.',
      specialisation: 'Orthopedic Surgeon',
      workAddress: 'Manchester General Hospital, Manchester',
      numberOfSatisfiedPatients: 180,
      numberOfCertificates: 10,
      imageSrc: DoctorThree,
      availableTimes: {
        mondayToFriday: '11:00-20:00',
        weekends: '12:00-14:00'
      },
    },
    {
      id: 4,
      fullName: 'Sophia Turner',
      description: 'Dr. Turner is a leading cardiologist hailing from Edinburgh. She is a pioneer in the field of cardiology and has been instrumental in developing innovative heart treatments.',
      specialisation: 'Cardiologist',
      workAddress: 'Edinburgh Heart Clinic, Edinburgh',
      numberOfSatisfiedPatients: 300,
      numberOfCertificates: 20,
      imageSrc: DoctorFour,
      availableTimes: {
        mondayToFriday: '11:00-20:00',
        weekends: '12:00-14:00'
      },
    }
  ];
  
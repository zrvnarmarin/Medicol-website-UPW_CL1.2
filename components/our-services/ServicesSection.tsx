import DentalCare from '@/public/images/our-services-route/dental-care-service.png'
import DiagnosticCenter from '@/public/images/our-services-route/diagnostic-center-service.png'
import ImmediateCare  from '@/public/images/our-services-section/immediate-care.png';
import SurgeyCenter from '@/public/images/our-services-route/surgey-center-service.png'
import Image from 'next/image';
import { CalendarIconBlue, LocationIconBlue } from '@/public/icons';

export default function ServicesSection() {
    return (
        <section className="flex flex-col px-4 sm:px-16 md:px-24 lg:px-16 xl:px-12 2xl:px-32 3xl:px-64 bg-[#F7FCFD] mt-20">
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
                {services.map(service =>
                    <div key={service.id} className='flex flex-col gap-3 pb-8'>
                        <div className='flex w-full'>
                            <Image src={service.imageSrc} height={0} width={0} alt="service_image" className='w-full object-cover' />
                        </div>
                        <h2 className="text-black font-semibold text-xl">{service.name}</h2>
                        <p className="font-normal text-lg text-[#516468]">{service.description}</p>
                        <div className='flex flex-col rounded-3xl'>
                            <div className='flex flex-row items-center gap-3 bg-[#24BEE0] text-white px-8 py-4 rounded-t-3xl'>
                                <CalendarIconBlue />
                                <h3>Available times</h3>
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 px-8 pt-6 pb-8 gap-6 justify-around bg-[#EBF9FC] rounded-b-3xl'>
                                {service.locations.map((location, idx) =>
                                    <div key={idx} className='flex flex-row gap-3'>
                                        <LocationIconBlue />
                                        <div className='flex flex-col gap-4 '>
                                            <p className='text-[#344c51] text-md font-bold '>{location}</p>
                                            <p className='flex items-center justify-between'>
                                                <span className='text-[#62777c] text-sm font-semibold'>Mon-Fri</span>
                                                <span className='text-[#344c51] text-md font-semibold'>{service.availableTimes.mondayToFriday}</span>
                                            </p>
                                            <p className='flex items-center justify-between'>
                                                <span className='text-[#62777c] text-sm font-semibold'>Weekends</span>
                                                <span className='text-[#344c51] text-md font-semibold'>{service.availableTimes.weekends}</span>
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>    
                )}
            </div>
        </section>
    )
}

const services = [
    {
      id: 1,
      name: 'Dental Care',
      imageSrc: DentalCare,
      timesAvailable: 8,
      description: 'Sed vel mollis mi. Pellentesque molestie ornare venenatis. Maecenas sagittis egestas erat non volutpat. Aliquam vel lectus nec quam gravida pharetra. Duis nec enim eu odio placerat mollis quis et arcu...',
      availableTimes: {
        mondayToFriday: '11:00-20:00',
        weekends: '12:00-14:00'
      },
      locations: [
        '123 Broadway, New York',
        '456 5th Avenue, New York'
      ]
    },
    {
      id: 2,
      name: 'Surgery Center',
      imageSrc: SurgeyCenter,
      timesAvailable: 10,
      description: 'Sed vel mollis mi. Pellentesque molestie ornare venenatis. Maecenas sagittis egestas erat non volutpat. Aliquam vel lectus nec quam gravida pharetra. Duis nec enim eu odio placerat mollis quis et arcu...',
      availableTimes: {
        mondayToFriday: '11:00-20:00',
        weekends: '12:00-14:00'
      },
      locations: [
        '789 Madison Avenue, New York',
        '101 Park Avenue, New York'
      ]
    },
    {
      id: 3,
      name: 'Diagnostic Center',
      imageSrc: DiagnosticCenter,
      timesAvailable: 6,
      description: 'Sed vel mollis mi. Pellentesque molestie ornare venenatis. Maecenas sagittis egestas erat non volutpat. Aliquam vel lectus nec quam gravida pharetra. Duis nec enim eu odio placerat mollis quis et arcu...',
      availableTimes: {
        mondayToFriday: '11:00-20:00',
        weekends: '12:00-14:00'
      },
      locations: [
        '222 Wall Street, New York',
        '333 Spring Street, New York'
      ]
    },
    // Add more objects with similar structures
    {
      id: 4,
      name: 'Emergency Clinic',
      imageSrc: ImmediateCare,
      timesAvailable: 12,
      description: 'Sed vel mollis mi. Pellentesque molestie ornare venenatis. Maecenas sagittis egestas erat non volutpat. Aliquam vel lectus nec quam gravida pharetra. Duis nec enim eu odio placerat mollis quis et arcu...',
      availableTimes: {
        mondayToFriday: '10:00-22:00',
        weekends: '11:00-15:00'
      },
      locations: [
        '555 Canal Street, New York',
        '777 Houston Street, New York'
      ]
    }
  ];
  
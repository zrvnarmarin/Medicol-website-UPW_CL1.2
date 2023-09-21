import CertificateOne from '@/public/images/about-us-route/CertificateOne.png'
import CertificateTwo from '@/public/images/about-us-route/CertificateTwo.png'
import CertificateThree from '@/public/images/about-us-route/CertificateThree.png'
import Image from 'next/image'


export default function OurAchievementsSection() {
    return (
        <section className="flex flex-col px-4 sm:px-16 md:px-24 lg:px-32 xl:px-48 2xl:px-64 3xl:px-96 bg-white my-20">
            <h1 className="text-[#062026] font-bold text-3xl py-12">Our Achievements</h1>
            <div className='flex flex-col gap-12'>
                {achievements.map(achievement =>
                    <div key={achievement.id} className='flex flex-col md:flex-row gap-8'>
                        <div className='flex'>
                            <Image src={achievement.imageSrc} alt="certificate_image" width={0} height={0} className='w-full object-cover' />
                        </div>
                        <p className='text-[#516468] font-medium text-lg'>{achievement.text}</p>
                    </div>    
                )}
            </div>
        </section>
    )
}
const achievements = [
    { 
        id: 1, 
        imageSrc: CertificateOne,
        text: 'Nullam sodales bibendum nulla ut vulputate. Vivamus auctor tincidunt urna, ac molestie lectus imperdiet id. Maecenas nisl massa, mollis sed sem a, finibus dapibus dui. Phasellus rhoncus, quam id molestie efficitur, elit ipsum blandit diam, ac lobortis lectus nibh quis ligula. Ut nunc erat, lobortis vel ultrices aliquet, efficitur id mauris.'
    },
    { 
        id: 2, 
        imageSrc: CertificateTwo,
        text: 'Nullam sodales bibendum nulla ut vulputate. Vivamus auctor tincidunt urna, ac molestie lectus imperdiet id. Maecenas nisl massa, mollis sed sem a, finibus dapibus dui. Phasellus rhoncus, quam id molestie efficitur, elit ipsum blandit diam, ac lobortis lectus nibh quis ligula. Ut nunc erat, lobortis vel ultrices aliquet, efficitur id mauris.'
    },
    { 
        id: 3, 
        imageSrc: CertificateThree,
        text: 'Nullam sodales bibendum nulla ut vulputate. Vivamus auctor tincidunt urna, ac molestie lectus imperdiet id. Maecenas nisl massa, mollis sed sem a, finibus dapibus dui. Phasellus rhoncus, quam id molestie efficitur, elit ipsum blandit diam, ac lobortis lectus nibh quis ligula. Ut nunc erat, lobortis vel ultrices aliquet, efficitur id mauris.'
    },
]
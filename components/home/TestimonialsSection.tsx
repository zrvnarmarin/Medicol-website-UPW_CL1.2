import { LeftArrowIconPaginated, LeftArrowIconNonPaginated } from "@/public/icons"
import TestimonialPersonOne from '@/public/images/testimonials-section/testimonial-person-1.png'
import TestimonialPersonTwo from '@/public/images/testimonials-section/testimonial-person-2.png'
import Image from "next/image"
import { StarIcon } from "@/public/icons"

export default function TestimonialsSection() {
    return (
        <section className="mt-24 grid grid-cols-1 gap-8 bg-white">
            <div className="flex flex-col justify-between gap-8">
                <div className="flex items-center justify-between">
                    <h1 className="text-black font-bold text-2xl">Testimonials</h1>
                    <div className="flex flex-row items-center gap-3">
                        <button>
                            <LeftArrowIconNonPaginated />
                        </button>
                        <button>
                            <LeftArrowIconPaginated />
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-8">
                {testimonials.map(testimonial => 
                    <div key={testimonial.id} className="bg-[#FCF8F6] flex flex-row gap-4 p-6 rounded-3xl">
                        <div className="w-1/3">
                            <Image className="min-w-32 max-w-32" src={testimonial.imageSrc} height={90} width={90} alt='testimonial_image' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-black font-bold text-xl">{testimonial.fullName}</h2>
                            <div className="flex flex-row items-center gap-2">
                                {[1,2,3,4,5].map(number =>
                                    <StarIcon key={number} />
                                )}
                            </div>
                            <p className="font-medium text-md text-[#516468]">{testimonial.experience}</p>
                        </div>
                    </div>    
                )}
            </div>
            </div>

        </section>
    )
}

const testimonials = [
    { id: 1, imageSrc: TestimonialPersonOne, fullName: 'Kate Bischaw', experience: 'These guys are incredible to work with. Like seriously! They did everything so good'},
    { id: 2, imageSrc: TestimonialPersonTwo, fullName: 'Michale Lane', experience: 'Working with these professionals has been an absolute delight. I`m genuinely impressed by how flawlessly they executed every task.'},
    { id: 3, imageSrc: TestimonialPersonOne, fullName: 'Bruce Dickson', experience: 'It`s been such a pleasure collaborating with this team. Their level of expertise and attention to detail is truly remarkable.'},
    { id: 4, imageSrc: TestimonialPersonTwo, fullName: 'Matthew Wright', experience: 'I can`t say enough good things about my experience with these individuals. Their work ethic and skill set are beyond impressive.'},
]
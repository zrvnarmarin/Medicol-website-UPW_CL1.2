import { Logo } from "@/components/navbar/Navbar"
import { TwitterIcon, FacebookIcon, LinkedinIcon } from "@/public/icons"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="px-4 sm:px-16 md:px-24 lg:px-16 xl:px-12 2xl:px-32 3xl:px-64 bg-[#F7FCFD]">
            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-16 px-8 py-12">
                <div className="flex flex-col gap-4">
                    <Logo />
                    <p className="pt-2 text-[#67787C] font-medium">1429 Something Bridge, LA 4281</p>
                    <p className="text-[#062026] font-medium pb-2">Call: (321) 428 321 3902</p>
                    <div className="flex flex-row items-center gap-4">
                        {socialIcons.map(icon =>
                            <Link key={icon.id} href={icon.href} className="bg-[#E0E6E8] rounded-full p-4">
                                {icon.icon}
                            </Link>
                        )}
                    </div>
                </div>
                {footerLinks.map((footerLink, idx) =>
                    <div key={idx} className="flex flex-col gap-8">
                        <h2 className="text-[#062026] font-bold text-2xl">{footerLink.heading}</h2>
                        <div className="flex flex-col gap-5">
                            {footerLink.links.map(link =>
                                <Link key={link.id} href={link.href} className="text-[#67787C] font-semibold text-lg">
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    </div>
                )}
                <div className="">
                    <p className="text-[#062026] font-bold text-2xl pb-8">Subsribe</p>
                    <p className="text-[#67787C] font-medium text-lg pb-4">Subscribe to get the latest news from us</p>
                    <div className="">
                        <div className="flex flex-col sm:flex-row items-center justify-between">
                            <input type="text" className="bg-[#E1F7FC] max-h-full" />
                            <button className="bg-[#24BEE0] text-white rounded-full px-5 py-3">Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}

const socialIcons = [
    { id:1, icon: <TwitterIcon />, href: 'https://www.twitter.com' },
    { id:2, icon: <FacebookIcon />, href: 'https://www.facebook.com' },
    { id:3, icon: <LinkedinIcon />, href: 'https://www.instagram.com' },
]

const footerLinks = [
    {
        links:
            [   
                { id: 1, name: 'Feature', href: '/'},
                { id: 2, name: 'About Us', href: '/'},
                { id: 3, name: 'FAQs', href: '/'},
                { id: 4, name: 'Contact', href: '/'}
            ],
        heading: 'Explore'
    },
    {
        links:
        [
            { id: 1, name: 'Privacy Policy', href: '/'},
            { id: 2, name: 'Terms Of Services', href: '/'},
            { id: 3, name: 'Documentations', href: '/'},
            { id: 4, name: 'Help Center', href: '/'},
        ],
        heading: 'Legal'
    }
]
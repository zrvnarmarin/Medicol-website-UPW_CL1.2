import { Logo } from "@/components/navbar/Navbar"
import { TwitterIcon, FacebookIcon, LinkedinIcon } from "@/public/icons"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="px-4 sm:px-16 md:px-24 lg:px-16 xl:px-12 2xl:px-32 3xl:px-64 bg-[#F7FCFD]">
            <section className="grid grid-cols-1 bg-red-500 px-8">
                <div>
                    <Logo />
                    <p>1429 Something Bridge, LA 4281</p>
                    <p>Call: (321) 428 321 3902</p>
                    <div className="flex flex-row items-center gap-4">
                        {socialIcons.map(icon =>
                            <div key={icon.id} className="bg-[#E0E6E8] rounded-full p-4">
                                {icon.icon}
                            </div>
                        )}
                    </div>
                </div>
                
                    {footerLinks.map((footerLink, idx) =>
                        <div key={idx} className="flex flex-col gap-8">
                            <p>{footerLink.heading}</p>
                            <div className="flex flex-col gap-4">
                                {footerLink.links.map(link =>
                                    <Link key={link.id} href={link.href}>
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        </div>
                    )}
                <div>
                    <p>Subsribe</p>
                    <p>Subscribe to get the latest news from us</p>
                    <div>
                        <input type="text" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </section>
        </footer>
    )
}

const socialIcons = [
    { id:1, icon: <TwitterIcon /> },
    { id:2, icon: <FacebookIcon /> },
    { id:3, icon: <LinkedinIcon /> },
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
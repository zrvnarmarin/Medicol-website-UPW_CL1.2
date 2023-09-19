import { LogoIcon, OpenMobileNavbar } from "@/public/icons"
import Link from "next/link"

export default function Navbar() {
    return (
        <header className="py-6">
            <nav className="px-4 sm:px-16 md:px-24 lg:px-16 xl:px-12 2xl:px-32 3xl:px-64">
                <ul className="flex items-center justify-between">
                    <div className="flex items-center gap-12">
                        <li className="block">
                            <Logo />
                        </li>
                        <div className="hidden xl:flex items-center gap-12">
                            {navLinks.map(navlink =>
                                <li key={navlink.id} className="text-[#67787C] font-medium">
                                    <Link href={navlink.href}>
                                        {navlink.text}
                                    </Link>
                                </li>
                            )}
                        </div>
                    </div>
                    <li className="hidden xl:block bg-[#24BEE0] text-white text-md font-normal px-8 py-3 rounded-full">
                        <Link href='#make-apointment'>
                            Make Appointment
                        </Link>
                    </li>
                    <li className="block xl:hidden">
                        <button>
                            <OpenMobileNavbar />
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

const Logo = () => {
    return (
        <div className="flex items-center gap-3">
            <LogoIcon />
            <p className="text-black font-semibold text-xl">Medicine<span className="text-[#0E97B5]">.</span></p>
        </div>
    )
}

const navLinks = [
    { id: 1, text: 'Home', href: '/', isActive: false },
    { id: 2, text: 'Our Services', href: '/our-services', isActive: false },
    { id: 3, text: 'Doctors', href: '/doctors', isActive: false },
    { id: 4, text: 'About Us', href: '/about-us', isActive: false },
    { id: 5, text: 'Contact Us', href: '/contact-us', isActive: false },
]
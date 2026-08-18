import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
];

const services = [
    { label: "Industrial Solar", href: "/services/industrial" },
    { label: "Residential Solar", href: "/services/residential" },
    { label: "Net Metering", href: "/services/net-metering" },
    { label: "Energy Consultancy", href: "/services/consultancy" },
];

const socials = [
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
];

export default function Footer() {
    return (
        <footer className="bg-dark-footer border-t border-white/10">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
                            <Image
                                src="/final-logo-greenlight.png"
                                alt="GreenLight Energy"
                                width={40}
                                height={40}
                                className="object-contain"
                            />
                            <span className="flex flex-col leading-none">
                                <span className="font-heading font-bold text-sm tracking-wider">
                                    <span className="text-secondary">GREEN</span><span className="text-gold">LIGHT</span>
                                </span>
                                <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase">Energy</span>
                            </span>
                        </Link>
                        <p className="text-white/45 text-sm leading-relaxed max-w-xs">
                            Powering a Sustainable Tomorrow. Clean solar energy solutions for homes, businesses, and industries across Pakistan.
                        </p>
                        <div className="flex gap-3 mt-5">
                            {socials.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/55 hover:bg-gold hover:text-dark transition-all"
                                >
                                    <Icon size={14} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-heading font-bold text-xs tracking-widest uppercase mb-5">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-white/50 hover:text-gold text-sm transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-heading font-bold text-xs tracking-widest uppercase mb-5">
                            Services
                        </h4>
                        <ul className="space-y-3">
                            {services.map((s) => (
                                <li key={s.label}>
                                    <Link
                                        href={s.href}
                                        className="text-white/50 hover:text-gold text-sm transition-colors"
                                    >
                                        {s.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-heading font-bold text-xs tracking-widest uppercase mb-5">
                            Contact Us
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-white/50 text-sm">
                                <MapPin size={14} className="text-gold mt-0.5 shrink-0" />
                                KPK, Peshawar, Pakistan
                            </li>
                            <li>
                                <a
                                    href="tel:+923001234567"
                                    className="flex items-center gap-3 text-white/50 hover:text-gold text-sm transition-colors"
                                >
                                    <Phone size={14} className="text-gold shrink-0" />
                                    +92 326 8468166
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:info@greenlightenergy.pk"
                                    className="flex items-center gap-3 text-white/50 hover:text-gold text-sm transition-colors"
                                >
                                    <Mail size={14} className="text-gold shrink-0" />
                                    info@greenlightenergy.com
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10 px-4 py-4">
                <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-1.5 text-white/30 text-xs">
                    <p>© {new Date().getFullYear()} GreenLight Energy. All rights reserved.</p>
                    <p>Clean Energy. Better Future. Stronger Pakistan.</p>
                </div>
            </div>
        </footer>
    );
}

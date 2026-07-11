import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa6";

const socialLinks = [
    { Icon: FaFacebook, href: "#", label: "Facebook" },
    { Icon: FaInstagram, href: "#", label: "Instagram" },
    { Icon: FaXTwitter, href: "#", label: "Twitter" },
    { Icon: FaYoutube, href: "#", label: "YouTube" },
    { Icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
];

export default function TopBar() {
    return (
        <div className="hidden sm:block bg-primary text-white text-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row items-center justify-between gap-2">
                {/* Contact info */}
                <div className="flex flex-wrap items-center gap-4">
                    <a
                        href="tel:03268468166"
                        className="flex items-center gap-1.5 hover:text-gold transition-colors"
                    >
                        <Phone size={13} />
                        <span className="font-(family-name:--font-poppins)">0326-8468166</span>
                    </a>

                    <span className="hidden sm:block text-white/30">|</span>

                    <a
                        href="mailto:infogreenlightenergy@gmail.com"
                        className="flex items-center gap-1.5 hover:text-gold transition-colors"
                    >
                        <Mail size={13} />
                        <span className="font-(family-name:--font-poppins)">infogreenlightenergy@gmail.com</span>
                    </a>

                    <span className="hidden sm:block text-white/30">|</span>

                    <span className="flex items-center gap-1.5 text-white/80">
                        <MapPin size={13} />
                        <span className="font-(family-name:--font-poppins)">Nasir Bagh Road, Peshawar</span>
                    </span>
                </div>

                {/* Social icons */}
                <div className="flex items-center gap-3">
                    {socialLinks.map(({ Icon, href, label }) => (
                        <a
                            key={label}
                            href={href}
                            aria-label={label}
                            className="hover:text-gold transition-colors"
                        >
                            <Icon size={14} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

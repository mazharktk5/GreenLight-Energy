"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
    { label: "Services", href: "/services", dropdown: true },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
];

export default function MainNav() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className="fixed top-4 sm:top-6 inset-x-0 z-50 px-4">
            <nav
                className={`mx-auto max-w-6xl rounded-full px-5 py-3 flex items-center justify-between transition-all duration-300 ${scrolled
                        ? "bg-[#111111]/98 shadow-2xl backdrop-blur-md"
                        : "bg-[#1C1C1C]/95 backdrop-blur-sm"
                    }`}
            >
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5 shrink-0">
                    <Image
                        src="/final-logo-greenlight.png"
                        alt="GreenLight Energy"
                        width={38}
                        height={38}
                        className="object-contain"
                    />
                    <span className="hidden sm:flex flex-col leading-none">
                        <span className="text-white font-bold text-sm tracking-wider font-heading">
                            GREEN<span className="text-gold">LIGHT</span>
                        </span>
                        <span className="text-white/50 text-[10px] tracking-[0.2em] uppercase">
                            Energy
                        </span>
                    </span>
                </Link>

                {/* Desktop links */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <Link
                                href={link.href}
                                className="text-white/75 hover:text-white text-sm font-medium flex items-center gap-1 transition-colors duration-200"
                            >
                                {link.label}
                                {link.dropdown && <ChevronDown size={13} className="opacity-60" />}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <Link
                    href="/contact"
                    className="hidden md:inline-flex items-center px-5 py-2 rounded-full border border-white/40 text-white text-sm font-medium hover:bg-white hover:text-primary transition-all duration-200"
                >
                    Get a Quote
                </Link>

                {/* Mobile toggle */}
                <button
                    className="md:hidden text-white p-1"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            {/* Mobile dropdown */}
            {mobileOpen && (
                <div className="md:hidden mt-2 mx-auto max-w-6xl bg-[#1C1C1C] rounded-2xl px-6 py-5 shadow-2xl">
                    <ul className="flex flex-col gap-5">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    className="text-white/80 hover:text-white text-sm font-medium block"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                href="/contact"
                                className="inline-flex items-center px-5 py-2.5 rounded-full border border-white/40 text-white text-sm font-medium hover:bg-white hover:text-primary transition-all"
                                onClick={() => setMobileOpen(false)}
                            >
                                Get a Quote
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";

const productsData = [
    {
        label: "Residential – GreenHome",
        href: "/products/residential",
        sub: [
            { label: "GreenHome 10-20kW", href: "/products/residential/greenHome" },
            { label: "GreenDrive – Vehicle to Home & Grid", href: "/products/residential/greenDrive" },
        ],
    },
    {
        label: "SME & Commercial – GreenBiz",
        href: "/products/commercial",
        sub: [
            { label: "SME – 30-50kW Solution", href: "/products/commercial/sme" },
            { label: "Large – 50kW to 1MW Hybrid Smart Solutions", href: "/products/commercial/large" },
        ],
    },
    {
        label: "Industrial – GreenIndus",
        href: "/products/industrial",
        sub: [
            { label: "Industrial Grid Tied Solar Systems", href: "/products/industrial/grid-tied" },
        ],
    },
];

type NavItem = {
    label: string;
    href: string;
    dropdown?: { label: string; href: string }[];
    megaMenu?: boolean;
};

const navLinks: NavItem[] = [
    { label: "About", href: "/about" },
    { label: "Products", href: "#", megaMenu: true },
    { label: "Services", href: "/services" },
];

export default function MainNav() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [activeProductCategory, setActiveProductCategory] = useState<string | null>(null);
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const openDropdown = (label: string) => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        setActiveDropdown(label);
    };

    const scheduleClose = () => {
        closeTimer.current = setTimeout(() => {
            setActiveDropdown(null);
            setActiveProductCategory(null);
        }, 120);
    };

    const activeSubs = productsData.find((p) => p.label === activeProductCategory)?.sub ?? [];
    const [mobileProductOpen, setMobileProductOpen] = useState<string | null>(null);

    return (
        <header className="fixed top-4 sm:top-6 inset-x-0 z-50 px-4">
            <nav
                className={`mx-auto max-w-6xl rounded-full px-5 py-2.5 flex items-center justify-between transition-all duration-300 ${scrolled
                    ? "bg-white shadow-xl backdrop-blur-md"
                    : "bg-white/92 backdrop-blur-sm shadow-md"
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
                        <span className="font-bold text-sm tracking-wider font-heading">
                            <span className="text-primary">GREEN</span>
                            <span className="text-gold">LIGHT</span>
                        </span>
                        <span className="text-primary/50 text-[10px] tracking-[0.2em] uppercase">
                            Energy
                        </span>
                    </span>
                </Link>

                {/* Desktop links */}
                <ul className="hidden md:flex items-center gap-7">
                    {navLinks.map((link) => {
                        if (link.megaMenu) {
                            return (
                                <li
                                    key={link.label}
                                    className="relative"
                                    onMouseEnter={() => openDropdown(link.label)}
                                    onMouseLeave={scheduleClose}
                                >
                                    <button className="text-dark/65 hover:text-primary text-sm font-medium flex items-center gap-1 transition-colors duration-200">
                                        {link.label}
                                        <ChevronDown
                                            size={13}
                                            className={`opacity-50 transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    {activeDropdown === link.label && (
                                        <div
                                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white rounded-2xl shadow-xl border border-gray/10 flex"
                                            onMouseEnter={() => openDropdown(link.label)}
                                            onMouseLeave={scheduleClose}
                                        >
                                            <div className="h-0.5 bg-gold w-full absolute top-0 left-0 rounded-t-2xl" />
                                            {/* Left column — always visible */}
                                            <ul className={`w-56 py-3 shrink-0 ${activeProductCategory ? "border-r border-gray/10" : ""}`}>
                                                {productsData.map((cat) => (
                                                    <li
                                                        key={cat.label}
                                                        onMouseEnter={() => setActiveProductCategory(cat.label)}
                                                    >
                                                        <div
                                                            className={`flex items-center justify-between px-4 py-2.5 text-sm cursor-default select-none transition-colors ${activeProductCategory === cat.label
                                                                ? "text-primary bg-[#EFF6F1] font-medium"
                                                                : "text-dark/70 hover:text-primary hover:bg-[#EFF6F1]"
                                                                }`}
                                                        >
                                                            {cat.label}
                                                            <ChevronRight size={13} className="opacity-40 shrink-0" />
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                            {/* Right column — only mounts when a category is hovered */}
                                            {activeProductCategory && (
                                                <ul className="w-56 py-3 px-2">
                                                    {activeSubs.map((sub) => (
                                                        <li key={sub.label}>
                                                            <Link
                                                                href={sub.href}
                                                                className="flex items-center gap-2.5 px-3 py-2.5 text-sm text-dark/70 hover:text-primary hover:bg-[#EFF6F1] rounded-lg transition-colors group"
                                                                onClick={() => setActiveDropdown(null)}
                                                            >
                                                                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                                {sub.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    )}
                                </li>
                            );
                        }

                        if (link.dropdown) {
                            return (
                                <li
                                    key={link.label}
                                    className="relative"
                                    onMouseEnter={() => openDropdown(link.label)}
                                    onMouseLeave={scheduleClose}
                                >
                                    <button className="text-dark/65 hover:text-primary text-sm font-medium flex items-center gap-1 transition-colors duration-200">
                                        {link.label}
                                        <ChevronDown
                                            size={13}
                                            className={`opacity-50 transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    {activeDropdown === link.label && (
                                        <div
                                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-white rounded-2xl shadow-xl border border-gray/10 overflow-hidden"
                                            onMouseEnter={() => openDropdown(link.label)}
                                            onMouseLeave={scheduleClose}
                                        >
                                            <div className="h-0.5 bg-gold w-full" />
                                            <ul className="py-2">
                                                {link.dropdown.map((item) => (
                                                    <li key={item.label}>
                                                        <Link
                                                            href={item.href}
                                                            className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-dark/70 hover:text-primary hover:bg-[#EFF6F1] transition-colors group"
                                                            onClick={() => setActiveDropdown(null)}
                                                        >
                                                            <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                            {item.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            );
                        }

                        return (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    className="text-dark/65 hover:text-primary text-sm font-medium transition-colors duration-200"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* CTA */}
                <Link
                    href="/contact"
                    className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-primary text-white text-sm font-medium hover:bg-secondary transition-all duration-200"
                >
                    Contact Us
                </Link>

                {/* Mobile toggle */}
                <button
                    className="md:hidden text-primary p-1"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="md:hidden mt-2 mx-auto max-w-6xl bg-white rounded-2xl px-6 py-5 shadow-xl border border-gray/10">
                    <ul className="flex flex-col gap-1">
                        {/* Company sub-list */}
                        <li>
                            <Link
                                href="/about"
                                className="text-dark/70 hover:text-primary text-sm font-medium block px-2 py-2.5 transition-colors"
                                onClick={() => setMobileOpen(false)}
                            >
                                About
                            </Link>
                        </li>
                        {/* Products accordion */}
                        <li>
                            <p className="text-dark/70 text-sm font-medium px-2 py-2.5">Products</p>
                            <ul className="flex flex-col gap-1">
                                {productsData.map((cat) => (
                                    <li key={cat.label}>
                                        <button
                                            onClick={() => setMobileProductOpen(mobileProductOpen === cat.label ? null : cat.label)}
                                            className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-dark/65 hover:text-primary hover:bg-[#EFF6F1] text-sm transition-colors"
                                        >
                                            <span>{cat.label}</span>
                                            <ChevronDown
                                                size={14}
                                                className={`opacity-40 transition-transform duration-200 ${mobileProductOpen === cat.label ? "rotate-180" : ""}`}
                                            />
                                        </button>
                                        {mobileProductOpen === cat.label && (
                                            <ul className="pl-3 border-l-2 border-gold/40 ml-3 mt-1 mb-1 flex flex-col gap-0.5">
                                                {cat.sub.map((sub) => (
                                                    <li key={sub.label}>
                                                        <Link
                                                            href={sub.href}
                                                            className="flex items-center gap-2 text-dark/60 hover:text-primary text-sm py-2 px-2 transition-colors"
                                                            onClick={() => { setMobileOpen(false); setMobileProductOpen(null); }}
                                                        >
                                                            <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                                                            {sub.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li>
                            <Link
                                href="/services"
                                className="text-dark/70 hover:text-primary text-sm font-medium block px-2 py-2.5 transition-colors"
                                onClick={() => setMobileOpen(false)}
                            >
                                Services
                            </Link>
                        </li>
                        <li className="pt-2">
                            <Link
                                href="/contact"
                                className="inline-flex items-center px-5 py-2.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-secondary transition-all"
                                onClick={() => setMobileOpen(false)}
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}

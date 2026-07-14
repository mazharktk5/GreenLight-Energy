"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

// ─── Nav data ───────────────────────────────────────────────────────────────
const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
        label: "Services",
        href: "/services",
        children: [
            { label: "Residential Solar", href: "/services/residential" },
            { label: "Commercial Solar", href: "/services/commercial" },
            { label: "Industrial Solar", href: "/services/industrial" },
            { label: "Net Metering", href: "/services/net-metering" },
            { label: "Battery Storage", href: "/services/battery" },
            { label: "Consultancy", href: "/services/consultancy" },
        ],
    },
    {
        label: "Products",
        href: "/products",
        children: [
            { label: "Solar Panels", href: "/products/panels" },
            { label: "Inverters", href: "/products/inverters" },
            { label: "Batteries", href: "/products/batteries" },
            { label: "Accessories", href: "/products/accessories" },
        ],
    },
    { label: "Brands", href: "/brands" },
    // { label: "Solar Calculator", href: "/calculator" },
    // { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
];

// ─── Dropdown panel ──────────────────────────────────────────────────────────
function DropdownMenu({
    items,
    open,
}: {
    items: { label: string; href: string }[];
    open: boolean;
}) {
    return (
        <div
            className={`absolute top-full left-0 mt-0 w-56 bg-white shadow-xl border-t-2 border-primary z-50
        transition-all duration-200 origin-top
        ${open ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"}`}
        >
            {items.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className="block px-5 py-2.5 text-sm text-dark hover:bg-primary hover:text-white
            font-(family-name:--font-poppins) transition-colors"
                >
                    {item.label}
                </Link>
            ))}
        </div>
    );
}

// ─── Desktop nav item ────────────────────────────────────────────────────────
function NavItem({ link }: { link: (typeof navLinks)[number] }) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    if (!link.children) {
        return (
            <Link
                href={link.href}
                className="text-sm font-medium text-dark hover:text-primary transition-colors
          font-(family-name:--font-poppins) whitespace-nowrap py-1"
            >
                {link.label}
            </Link>
        );
    }

    return (
        <div
            ref={ref}
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <button
                onClick={() => setOpen((v) => !v)}
                className="flex items-center gap-1 text-sm font-medium text-dark hover:text-primary
          transition-colors font-(family-name:--font-poppins) whitespace-nowrap py-1"
            >
                {link.label}
                <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                />
            </button>
            <DropdownMenu items={link.children} open={open} />
        </div>
    );
}

// ─── Main Nav ────────────────────────────────────────────────────────────────
export default function MainNav() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

    return (
        <header className="bg-white shadow-sm sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 shrink-0">
                        {/* Emblem placeholder — swap with <Image> once SVG logo is available */}
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center ring-2 ring-gold/40">
                            <span className="text-gold font-black text-sm font-(family-name:--font-montserrat) tracking-tight">
                                GL
                            </span>
                        </div>
                        {/* Wordmark */}
                        <div className="leading-none">
                            <p className="font-black text-lg tracking-tight font-(family-name:--font-montserrat) leading-none">
                                <span className="text-primary">GREEN</span><span className="text-gold">LIGHT</span>
                            </p>
                            <div className="flex items-center gap-1 mt-0.5">
                                <span className="h-px w-3 bg-primary inline-block" />
                                <span className="text-[9px] font-semibold tracking-[0.2em] uppercase text-primary font-(family-name:--font-montserrat)">
                                    ENERGY
                                </span>
                                <span className="h-px w-3 bg-primary inline-block" />
                            </div>
                        </div>
                    </Link>

                    {/* Desktop links */}
                    <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                        {navLinks.map((link) => (
                            <NavItem key={link.href} link={link} />
                        ))}
                    </nav>

                    {/* CTA + Hamburger */}
                    <div className="flex items-center gap-3">
                        <Link
                            href="/quote"
                            className="hidden sm:inline-flex items-center px-5 py-2 rounded text-sm font-semibold
                bg-gold text-dark hover:bg-[#d9a200] transition-colors
                font-(family-name:--font-poppins) whitespace-nowrap"
                        >
                            Get Quote
                        </Link>

                        <button
                            className="lg:hidden p-2 rounded text-dark hover:bg-gray-100 transition-colors"
                            onClick={() => setMobileOpen((v) => !v)}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Mobile menu ── */}
            <div
                className={`lg:hidden border-t border-gray-100 bg-white transition-all duration-300 overflow-hidden
          ${mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
            >
                <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
                    {navLinks.map((link) => (
                        <div key={link.href}>
                            {link.children ? (
                                <>
                                    <button
                                        className="w-full flex items-center justify-between px-3 py-2.5 rounded text-sm
                      font-medium text-dark hover:bg-primary/5 hover:text-primary
                      font-(family-name:--font-poppins) transition-colors"
                                        onClick={() =>
                                            setMobileExpanded((v) =>
                                                v === link.label ? null : link.label
                                            )
                                        }
                                    >
                                        {link.label}
                                        <ChevronDown
                                            size={16}
                                            className={`transition-transform duration-200 ${mobileExpanded === link.label ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>
                                    {mobileExpanded === link.label && (
                                        <div className="ml-4 mt-1 flex flex-col gap-0.5 border-l-2 border-primary/20 pl-3">
                                            {link.children.map((child) => (
                                                <Link
                                                    key={child.href}
                                                    href={child.href}
                                                    onClick={() => setMobileOpen(false)}
                                                    className="block px-2 py-2 text-sm text-gray hover:text-primary
                            font-(family-name:--font-poppins) transition-colors"
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block px-3 py-2.5 rounded text-sm font-medium text-dark
                    hover:bg-primary/5 hover:text-primary
                    font-(family-name:--font-poppins) transition-colors"
                                >
                                    {link.label}
                                </Link>
                            )}
                        </div>
                    ))}

                    <Link
                        href="/quote"
                        onClick={() => setMobileOpen(false)}
                        className="mt-3 inline-flex justify-center items-center px-5 py-2.5 rounded text-sm
              font-semibold bg-gold text-dark hover:bg-[#d9a200]
              font-(family-name:--font-poppins) transition-colors"
                    >
                        Get Quote
                    </Link>
                </nav>
            </div>
        </header>
    );
}

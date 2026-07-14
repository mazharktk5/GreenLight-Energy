"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
    "Reduce electricity bills significantly with solar",
    "Government-approved net metering solutions",
    "Professional installation & lifetime support",
];

const stats = [
    { value: "5kW – 1MW+", label: "System Sizes" },
    { value: "Tier-1 Only", label: "Solar Brands" },
    { value: "Peshawar, KPK", label: "Head Office" },
];

export default function HeroSectionV2() {
    return (
        <section className="relative flex flex-col overflow-hidden w-full h-[calc(100svh-var(--header-h))]">

            {/* ── Background: video with image fallback ── */}
            {/*
                Drop your video file at /public/hero-video.mp4
                The poster="/hero.jpg" shows instantly while video loads.
                If no video is provided it just shows the image — no broken UI.
            */}
            <video
                autoPlay
                muted
                loop
                playsInline
                poster="/hero.jpg"
                className="absolute inset-0 w-full h-full object-cover object-center"
            >
                <source src="/hero-video.mp4" type="video/mp4" />
            </video>

            {/* ── Overlays ── */}
            {/* Left-heavy dark gradient for text legibility */}
            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/55 to-black/20" />
            {/* Subtle bottom vignette */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
            {/* Very slight top vignette */}
            <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-transparent" />

            {/* ── Main content ── */}
            <div className="relative z-10 flex-1 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 lg:py-8 w-full">
                    <div className="max-w-2xl">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-1.5  
                            border border-white/20 text-white px-3 py-1 rounded-full 
                            text-[10px] sm:text-xs font-medium font-(family-name:--font-poppins) mb-3 tracking-wide">
                            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gold" />
                            Powering a Sustainable Tomorrow
                        </div>

                        {/* Heading — 2 clean lines */}
                        <h1 className="font-(family-name:--font-montserrat) font-extrabold
                            text-3xl sm:text-4xl lg:text-5xl xl:text-6xl
                            leading-[1.05] text-white mb-3 lg:mb-4">
                            Powering Pakistan<br />
                            With{" "}<span className="text-gold">Clean Energy</span>
                        </h1>

                        {/* Description — shorter on mobile */}
                        <p className="font-(family-name:--font-poppins) text-white/75 text-sm lg:text-base
                            leading-relaxed mb-3 lg:mb-5 max-w-lg">
                            GreenLight Energy delivers residential, commercial &amp; industrial solar
                            solutions — reducing electricity costs across Pakistan.
                        </p>

                        {/* Benefits checklist */}
                        <ul className="flex flex-col gap-1.5 lg:gap-2 mb-4 lg:mb-6">
                            {benefits.map((b) => (
                                <li key={b} className="flex items-center gap-2
                                    font-(family-name:--font-poppins) text-white/90 text-xs sm:text-sm">
                                    <CheckCircle size={13} className="text-gold shrink-0" />
                                    {b}
                                </li>
                            ))}
                        </ul>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-2.5 lg:gap-4">
                            <Link
                                href="/quote"
                                className="inline-flex items-center gap-1.5 bg-gold text-dark
                                    px-5 py-2.5 lg:px-7 lg:py-3.5 rounded-full
                                    text-xs sm:text-sm font-semibold
                                    font-(family-name:--font-poppins) hover:bg-amber-400
                                    transition-colors group shadow-lg shadow-gold/30"
                            >
                                Get Free Consultation
                                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                            <Link
                                href="tel:03268468166"
                                className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm
                                    text-white border border-white/30 px-5 py-2.5 lg:px-7 lg:py-3.5 rounded-full
                                    text-xs sm:text-sm font-semibold font-(family-name:--font-poppins)
                                    hover:bg-white/20 transition-colors"
                            >
                                Call: 0326-8468166
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            {/* ── Bottom stats bar ── */}
            <div className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-3 divide-x divide-white/10">
                        {stats.map(({ value, label }) => (
                            <div key={label} className="py-2.5 lg:py-4 px-2 sm:px-8 text-center">
                                <p className="font-(family-name:--font-montserrat) font-bold
                                    text-gold text-sm sm:text-base lg:text-xl leading-none mb-0.5">
                                    {value}
                                </p>
                                <p className="font-(family-name:--font-poppins) text-white/60
                                    text-[8px] sm:text-[10px] lg:text-xs tracking-wide uppercase">
                                    {label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Project type label (bottom-right) ── */}
            {/* <div className="absolute bottom-16 right-6 z-10 hidden sm:block lg:right-16">
                <div className="text-right">
                    <p className="font-(family-name:--font-montserrat) font-extrabold
                        text-white/15 text-4xl lg:text-6xl leading-none uppercase tracking-tight
                        select-none pointer-events-none">
                        Residential
                    </p>
                    <p className="font-(family-name:--font-montserrat) font-extrabold
                        text-white/15 text-4xl lg:text-6xl leading-none uppercase tracking-tight
                        select-none pointer-events-none">
                        &amp; Commercial
                    </p>
                </div>
            </div> */}

        </section>
    );
}

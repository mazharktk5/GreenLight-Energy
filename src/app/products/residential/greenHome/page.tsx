import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, PhoneCall } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "GreenHome 3–20kW | GreenLight Energy",
    description:
        "GreenHome — Pakistan's advanced residential hybrid solar system. Reliable power, smart energy management, and significant savings for every home.",
};

const capabilities = [
    "Hybrid inverter with scalable battery tower",
    "Uninterrupted power & intelligent cost optimization",
    "Elegant wall-mounted & floor-standing design",
    "Smart load management for essential circuits",
];

const features = [
    "High-efficiency Lithium Iron Phosphate (LFP) Battery Storage",
    "10-Year Manufacturer Warranty",
    "High-voltage architecture for peak performance",
    "Handles essential & extended loads during grid outages",
    "Reduces energy bills through solar self-consumption",
    "Real-time remote monitoring via GreenLight app",
];

const whyChoose = [
    "Reliable power even during prolonged outages",
    "Significant reduction in monthly electricity bills",
    "Clean, emission-free energy for your home",
    "Easy remote monitoring & one-touch control",
    "Long-life, low-maintenance LFP battery cells",
    "AEDB-certified expert installation & after-sales support",
];

export default function GreenHomePage() {
    return (
        <main>
            {/* ── Hero ─────────────────────────────────────────── */}
            <section className="relative bg-cream min-h-screen flex items-center overflow-hidden">
                {/* Right-side decorative arc */}
                <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-primary/7 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
                {/* Bottom-left accent blob */}
                <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
                {/* Gold left-edge accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-transparent via-gold/60 to-transparent pointer-events-none" />
                {/* Dot cluster */}
                <div className="absolute top-40 right-[44%] w-2 h-2 rounded-full bg-gold/50 pointer-events-none" />
                <div className="absolute top-52 right-[46%] w-1.5 h-1.5 rounded-full bg-primary/30 pointer-events-none" />

                <div className="relative mx-auto max-w-6xl px-4 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pt-44 pb-16 lg:pt-40 lg:pb-20">
                    {/* ── Left: Text ── */}
                    <div>
                        <span className="inline-block bg-gold text-dark text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 shadow-sm">
                            Residential Solar
                        </span>

                        <h1 className="font-heading font-extrabold leading-none mb-5">
                            <span className="block text-5xl sm:text-6xl lg:text-7xl text-primary">Green</span>
                            <span className="block text-5xl sm:text-6xl lg:text-7xl text-gold -mt-1">Home</span>
                            <span className="block text-xl sm:text-2xl font-semibold text-primary/60 tracking-widest mt-3">
                                3 – 20 kW SYSTEM
                            </span>
                        </h1>

                        <div className="w-14 h-0.5 bg-gold rounded-full mb-6" />

                        <p className="text-gray text-sm sm:text-base leading-relaxed max-w-md mb-8">
                            A complete smart solar & storage ecosystem for your home — combining
                            hybrid inverters, LFP batteries, and AI energy management for
                            uninterrupted, clean, and cost-efficient power.
                        </p>

                        <div className="flex flex-wrap gap-3 mb-10">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold text-sm rounded-full hover:bg-secondary transition-all shadow-md"
                            >
                                Get a Free Quote <ArrowRight size={14} />
                            </Link>
                            <a
                                href="tel:+923001234567"
                                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold text-sm rounded-full hover:bg-primary/10 transition-all"
                            >
                                <PhoneCall size={14} /> Talk to an Expert
                            </a>
                        </div>

                        {/* Stat row */}
                        <div className="grid grid-cols-3 gap-4 pt-7 border-t border-primary/15 max-w-sm">
                            {[
                                { v: "20 kW", l: "Max Capacity" },
                                { v: "10 Yr", l: "Warranty" },
                                { v: "98%", l: "Uptime" },
                            ].map(({ v, l }) => (
                                <div key={l}>
                                    <div className="text-primary font-heading font-extrabold text-2xl leading-none">{v}</div>
                                    <div className="text-gray text-[11px] mt-1 tracking-wide uppercase">{l}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Right: Product Image ── */}
                    <div className="relative flex items-center justify-center py-8">
                        {/* circular platform behind image */}
                        <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-primary/10 pointer-events-none" />
                        {/* inner ring */}
                        <div className="absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full border-2 border-primary/15 pointer-events-none" />

                        {/* cream wrapper masks the PNG's background box */}
                        <div className="relative z-10 bg-cream rounded-2xl p-2">
                            <Image
                                src="/10-20kw.png"
                                alt="GreenHome Residential Hybrid Solar System"
                                width={460}
                                height={520}
                                className="object-contain w-56 sm:w-72 lg:w-[320px] h-auto drop-shadow-xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* ── Product Details ──────────────────────────────── */}
            <section className="bg-white py-16 sm:py-24 px-4">
                <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text */}
                    <div>
                        <span className="inline-block bg-gold text-dark text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 shadow-sm">
                            GreenHome
                        </span>
                        <h2 className="font-heading font-extrabold text-primary text-2xl sm:text-3xl lg:text-4xl leading-tight mb-4">
                            GreenHome Advanced<br />
                            Residential Hybrid System
                        </h2>
                        <div className="w-12 h-0.5 bg-gold rounded-full mb-5" />
                        <p className="text-gray text-sm sm:text-base leading-relaxed mb-7">
                            GreenHome gives homeowners a complete smart solar & storage ecosystem —
                            including solar panels, hybrid inverters, lithium iron phosphate batteries, and
                            AI-assisted energy management. It ensures reliable, clean, and efficient power
                            for every household need, even during extended grid outages.
                        </p>

                        {/* Spec list */}
                        <ul className="space-y-3">
                            {[
                                { k: "Product Name", v: "GreenHome Advanced Residential Hybrid System" },
                                { k: "System Capacities", v: "3kW | 5kW | 10kW | 20kW" },
                                {
                                    k: "Description",
                                    v: "A premium residential energy platform combining performance, intelligence, and elegant design.",
                                },
                            ].map(({ k, v }) => (
                                <li key={k} className="flex gap-2 text-sm sm:text-base">
                                    <span className="font-semibold text-dark shrink-0">{k}:</span>
                                    <span className="text-gray">{v}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-3 mt-8">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-secondary transition-all"
                            >
                                Request a Quote <ArrowRight size={14} />
                            </Link>
                            <a
                                href="tel:+923001234567"
                                className="inline-flex items-center gap-2 px-6 py-2.5 border border-primary text-primary text-sm font-semibold rounded-full hover:bg-primary/10 transition-all"
                            >
                                <PhoneCall size={14} /> Talk to an Expert
                            </a>
                        </div>
                    </div>

                    {/* Image card */}
                    <div className="bg-[#EFF6F1] rounded-3xl p-8 sm:p-10 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-primary/8 pointer-events-none" />
                        <Image
                            src="/10-20kw.png"
                            alt="GreenHome System"
                            width={380}
                            height={420}
                            className="object-contain w-56 sm:w-72 h-auto relative z-10 drop-shadow-xl"
                        />
                    </div>
                </div>
            </section>

            {/* ── Feature Cards ────────────────────────────────── */}
            <section className="bg-cream py-16 sm:py-24 px-4">
                <div className="mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <span className="inline-block bg-gold text-dark text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
                            System Overview
                        </span>
                        <h2 className="font-heading font-bold text-primary text-2xl sm:text-3xl">
                            Everything You Need to Know
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
                        {[
                            { title: "Key Capabilities", items: capabilities },
                            { title: "Key Features", items: features },
                            { title: "Why Choose GreenHome?", items: whyChoose },
                        ].map(({ title, items }) => (
                            <div
                                key={title}
                                className="bg-white rounded-2xl p-6 sm:p-7 border border-primary/8 hover:shadow-lg transition-shadow"
                            >
                                <h3 className="font-heading font-bold text-primary text-base sm:text-lg mb-4 pb-3 border-b border-primary/10">
                                    {title}
                                </h3>
                                <ul className="space-y-3">
                                    {items.map((item) => (
                                        <li key={item} className="flex gap-2.5 text-sm text-gray leading-snug">
                                            <CheckCircle2
                                                size={15}
                                                className="text-secondary shrink-0 mt-0.5"
                                            />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ──────────────────────────────────────────── */}
            <section className="bg-cream py-14 sm:py-20 px-4">
                <div className="mx-auto max-w-6xl">
                    <div className="relative bg-[#EFF6F1] border border-primary/15 rounded-3xl px-8 sm:px-12 py-12 sm:py-16 text-center overflow-hidden">
                        {/* decorative accent */}
                        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-primary/8 pointer-events-none" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-gold/10 pointer-events-none" />

                        <span className="inline-block bg-gold text-dark text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
                            Ready to Switch?
                        </span>
                        <h2 className="font-heading font-extrabold text-primary text-2xl sm:text-3xl lg:text-4xl mb-4">
                            Ready to Power Your Home with GreenHome?
                        </h2>
                        <p className="text-gray text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
                            Our certified engineers will assess your home, design the right system, and
                            have it live in as little as 7 days. Zero hidden costs.
                        </p>
                        <div className="relative z-10 flex flex-wrap justify-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-white font-bold text-sm rounded-full hover:bg-secondary transition-all shadow-md"
                            >
                                Get a Free Site Assessment <ArrowRight size={15} />
                            </Link>
                            <Link
                                href="/products/residential"
                                className="inline-flex items-center gap-2 px-7 py-3 border-2 border-primary text-primary text-sm font-semibold rounded-full hover:bg-primary/10 transition-all"
                            >
                                Explore All Residential Products
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

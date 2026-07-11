import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Home,
    Building2,
    Factory,
    Zap,
    Battery,
    Sun,
    ArrowRight,
    Leaf,
} from "lucide-react";

const features = [
    { icon: Home, label: "Residential Solar" },
    { icon: Building2, label: "Commercial Solar" },
    { icon: Factory, label: "Industrial Solar" },
    { icon: Zap, label: "Net Metering" },
];

const trust = [
    "Premium Solar Products",
    "Professional Installation",
    "Dedicated Support",
];

export default function HeroSection() {
    return (
        <section className="relative flex-1 flex items-center bg-cream overflow-hidden">
            {/* ── Background decorations ── */}
            <div className="pointer-events-none absolute inset-0">
                {/* Soft radial blobs */}
                <div className="absolute -top-32 -left-32 w-125 h-125 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute -bottom-32 -right-32 w-125 h-125 rounded-full bg-gold/5 blur-3xl" />
                {/* Thin dot grid — top right corner */}
                <div className="absolute top-8 right-4 lg:right-8 grid grid-cols-8 gap-2 opacity-10">
                    {Array.from({ length: 64 }).map((_, i) => (
                        <div key={i} className="w-1 h-1 rounded-full bg-primary" />
                    ))}
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 w-full">
                <div className="grid lg:grid-cols-[1fr_45%] gap-8 lg:gap-12 items-center">

                    {/* ══ LEFT COLUMN ══ */}
                    <div className="flex flex-col gap-6">

                        {/* Badge */}
                        <div className="inline-flex w-fit items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold font-(family-name:--font-poppins)">
                            <Leaf size={14} />
                            Pakistan&apos;s Trusted Solar Energy Partner
                        </div>

                        {/* Heading */}
                        <h1 className="font-(family-name:--font-montserrat) font-extrabold text-4xl sm:text-5xl lg:text-[52px] xl:text-6xl leading-[1.08] text-dark">
                            Powering Pakistan<br />
                            With <span className="text-gold">Clean &amp;</span><br />
                            <span className="text-gold">Sustainable</span> Energy
                        </h1>

                        {/* Description */}
                        <p className="font-(family-name:--font-poppins) text-gray text-base leading-relaxed max-w-lg">
                            GreenLight Energy delivers reliable residential, commercial, and industrial solar
                            solutions that reduce electricity costs while building a cleaner and brighter
                            future for Pakistan.
                        </p>

                        {/* Service pills — compact single row */}
                        <div className="flex flex-wrap gap-2">
                            {features.map(({ icon: Icon, label }) => (
                                <div
                                    key={label}
                                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full
                                        border border-gray-200 bg-white text-sm text-dark
                                        font-(family-name:--font-poppins) hover:border-primary
                                        hover:text-primary transition-colors cursor-default"
                                >
                                    <Icon size={13} className="text-primary shrink-0" />
                                    {label}
                                </div>
                            ))}
                        </div>

                        {/* CTA buttons */}
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="/quote"
                                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5
                  rounded-full text-sm font-semibold font-(family-name:--font-poppins)
                  hover:bg-secondary transition-colors group"
                            >
                                Get Free Consultation
                                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                            <Link
                                href="/services"
                                className="inline-flex items-center gap-2 bg-white text-primary border-2 border-primary
                  px-6 py-2.5 rounded-full text-sm font-semibold font-(family-name:--font-poppins)
                  hover:border-gold hover:text-gold transition-colors"
                            >
                                Explore Services
                            </Link>
                        </div>

                        {/* Trust indicators — dot-separated inline */}
                        <div className="flex flex-wrap items-center gap-2 pt-1">
                            {trust.map((item, i) => (
                                <Fragment key={item}>
                                    <span className="flex items-center gap-1.5 text-xs text-gray font-(family-name:--font-poppins)">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                                        {item}
                                    </span>
                                    {i < trust.length - 1 && (
                                        <span className="text-gray-300 text-xs select-none">&bull;</span>
                                    )}
                                </Fragment>
                            ))}
                        </div>
                    </div>

                    {/* ══ RIGHT COLUMN — Solar Visual ══ */}
                    <div className="relative hidden lg:block">

                        {/* Dot grid decorations */}
                        <div className="absolute -bottom-5 -right-5 grid grid-cols-5 gap-1.5 opacity-25 z-10">
                            {Array.from({ length: 25 }).map((_, i) => (
                                <div key={i} className="w-2 h-2 rounded-full bg-primary" />
                            ))}
                        </div>
                        <div className="absolute -top-5 -left-5 grid grid-cols-4 gap-1.5 opacity-20 z-10">
                            {Array.from({ length: 16 }).map((_, i) => (
                                <div key={i} className="w-2 h-2 rounded-full bg-gold" />
                            ))}
                        </div>

                        {/* Main image card */}
                        <div className="relative rounded-3xl overflow-hidden h-[calc(100vh-10rem)] max-h-150 min-h-96 shadow-2xl">

                            {/* Real hero photo */}
                            <Image
                                src="/hero.jpg"
                                alt="Solar panels installation by GreenLight Energy"
                                fill
                                className="object-cover object-center"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />

                            {/* Dark gradient overlay — bottom for legibility */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

                            {/* Green tint overlay — very subtle top */}
                            <div className="absolute inset-0 bg-linear-to-b from-primary/20 via-transparent to-transparent" />

                            {/* ── Floating card: Residential Solar (top-left) ── */}
                            <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-3
                shadow-lg flex items-center gap-3 border border-white/60">
                                <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                                    <Sun size={17} className="text-gold" />
                                </div>
                                <div className="leading-tight">
                                    <p className="font-(family-name:--font-poppins) text-xs font-semibold text-dark">Residential Solar</p>
                                    <p className="font-(family-name:--font-poppins) text-[10px] text-gray mt-0.5">Clean home energy</p>
                                </div>
                            </div>

                            {/* ── Floating card: Net Metering (bottom-left) ── */}
                            <div className="absolute bottom-22 left-5 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-3
                shadow-lg flex items-center gap-3 border border-white/60">
                                <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                    <Zap size={17} className="text-primary" />
                                </div>
                                <div className="leading-tight">
                                    <p className="font-(family-name:--font-poppins) text-xs font-semibold text-dark">Net Metering</p>
                                    <p className="font-(family-name:--font-poppins) text-[10px] text-gray mt-0.5">Sell back to grid</p>
                                </div>
                            </div>

                            {/* ── Floating card: Battery Storage (bottom-right) ── */}
                            <div className="absolute bottom-22 right-5 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-3
                shadow-lg flex items-center gap-3 border border-white/60">
                                <div className="w-9 h-9 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                                    <Battery size={17} className="text-secondary" />
                                </div>
                                <div className="leading-tight">
                                    <p className="font-(family-name:--font-poppins) text-xs font-semibold text-dark">Battery Storage</p>
                                    <p className="font-(family-name:--font-poppins) text-[10px] text-gray mt-0.5">24/7 power backup</p>
                                </div>
                            </div>

                            {/* ── GL Logo badge (top-right) ── */}
                            <div className="absolute top-5 right-5 w-13 h-13 rounded-full bg-white/90 backdrop-blur-md
                shadow-lg flex items-center justify-center border border-white/60 p-2.5">
                                <div className="text-center leading-none">
                                    <span className="block text-[7px] font-black tracking-tight font-(family-name:--font-montserrat) text-primary">GREEN</span>
                                    <span className="block text-[7px] font-black tracking-tight font-(family-name:--font-montserrat) text-gold">LIGHT</span>
                                </div>
                            </div>

                            {/* Brand tagline strip at bottom */}
                            <div className="absolute bottom-0 left-0 right-0 bg-primary/80 backdrop-blur-sm py-2 px-4">
                                <p className="font-(family-name:--font-poppins) text-white text-[11px] font-medium tracking-wider text-center">
                                    Clean Energy. Better Future. Stronger Pakistan.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

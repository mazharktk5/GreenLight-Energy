import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, ShieldCheck } from "lucide-react";

export default function AboutSection() {
    return (
        <section className="bg-cream py-10 lg:py-20 overflow-hidden w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-[48%_1fr] gap-12 lg:gap-16 items-center">

                    {/* ══ LEFT — Image block ══ */}
                    <div className="relative">
                        {/* Decorative vertical bar — desktop only */}
                        <div className="hidden sm:block absolute -left-4 top-8 bottom-8 w-1 rounded-full bg-linear-to-b from-primary via-secondary to-primary/30" />

                        {/* Dot grid top-left — desktop only */}
                        <div className="hidden sm:grid absolute -top-6 -left-6 grid-cols-5 gap-1.5 opacity-30 -z-10">
                            {Array.from({ length: 20 }).map((_, i) => (
                                <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary" />
                            ))}
                        </div>

                        {/* Main image + floating card (all inside one overflow-hidden container) */}
                        <div className="relative rounded-2xl overflow-hidden shadow-xl h-72 sm:h-96 lg:h-135 sm:ml-4">
                            <Image
                                src="/aboutImage.jfif"
                                alt="GreenLight Energy team at work"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 1024px) 100vw, 48vw"
                            />
                            {/* Subtle green tint overlay */}
                            <div className="absolute inset-0 bg-linear-to-tr from-primary/20 via-transparent to-transparent" />

                            {/* Floating info card — inside image so it can’t overflow */}
                            <div className="absolute bottom-4 right-3 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg
                                px-3 py-2.5 flex items-center gap-2.5 border-l-4 border-primary">
                                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <ShieldCheck size={14} className="text-primary" />
                                </div>
                                <div className="leading-tight">
                                    <p className="font-(family-name:--font-montserrat) font-bold text-dark text-xs">
                                        Tier-1 Products
                                    </p>
                                    <p className="font-(family-name:--font-poppins) text-gray text-[10px] mt-0.5">
                                        Only premium brands
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative dot grid bottom-right — desktop only */}
                        <div className="hidden sm:grid absolute -bottom-5 -right-3 grid-cols-4 gap-1.5 opacity-20 -z-10">
                            {Array.from({ length: 16 }).map((_, i) => (
                                <div key={i} className="w-1.5 h-1.5 rounded-full bg-gold" />
                            ))}
                        </div>
                    </div>

                    {/* ══ RIGHT — Content ══ */}
                    <div className="flex flex-col gap-4 lg:gap-6">

                        {/* Section label */}
                        <div className="flex items-center gap-2">
                            <span className="bg-primary text-white text-[10px] sm:text-xs font-bold
                                font-(family-name:--font-montserrat) px-3 py-1 rounded tracking-widest uppercase">
                                About
                            </span>
                            <span className="text-gray text-xs sm:text-sm font-(family-name:--font-poppins) tracking-wide">
                                GreenLight Energy
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="font-(family-name:--font-montserrat) font-extrabold
                            text-2xl sm:text-3xl lg:text-[38px] leading-[1.15] text-dark">
                            Your Trusted Solar Energy Partner for a{" "}
                            <span className="text-primary">Greener</span>{" "}and{" "}
                            <span className="text-gold">Brighter</span> Pakistan
                        </h2>

                        {/* Body */}
                        <div className="flex flex-col gap-3">
                            <p className="font-(family-name:--font-poppins) text-gray text-sm lg:text-base leading-relaxed">
                                GreenLight Energy (PVT.) Ltd. is a Peshawar-based solar energy company
                                dedicated to delivering reliable, affordable, and sustainable solar solutions
                                across Pakistan. From residential rooftops to large-scale commercial and
                                industrial installations, we provide end-to-end solar services tailored to
                                every client&apos;s needs.
                            </p>
                            <p className="hidden lg:block font-(family-name:--font-poppins) text-gray text-sm lg:text-base leading-relaxed">
                                We work exclusively with Tier-1 solar brands and certified components,
                                ensuring maximum performance, safety, and longevity for every system we
                                install. Our team of engineers and technicians handles everything — from
                                site survey and system design to installation, net metering, and after-sales
                                support.
                            </p>
                        </div>

                        {/* Location detail */}
                        <div className="flex items-start gap-2 text-sm font-(family-name:--font-poppins) text-gray">
                            <MapPin size={15} className="text-primary shrink-0 mt-0.5" />
                            <span>
                                Office# 04, First Floor, Alsyed Tower, Nasir Bagh Road, Peshawar, Pakistan
                            </span>
                        </div>

                        {/* Divider — hidden on mobile to avoid overflow from whitespace-nowrap */}
                        <div className="hidden sm:flex items-center gap-3">
                            <div className="h-px flex-1 bg-gray-200" />
                            <span className="text-xs text-primary/70 font-(family-name:--font-poppins) tracking-widest uppercase whitespace-nowrap">
                                Clean Energy. Better Future. Stronger Pakistan.
                            </span>
                            <div className="h-px flex-1 bg-gray-200" />
                        </div>

                        {/* CTA */}
                        <div>
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 bg-primary text-white
                                    px-7 py-3 rounded-full text-sm font-semibold
                                    font-(family-name:--font-poppins) hover:bg-secondary
                                    transition-colors group"
                            >
                                About Us
                                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

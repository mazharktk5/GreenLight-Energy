import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, PhoneCall } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Industrial Grid Tied Solar Systems | GreenLight Energy",
    description:
        "GreenIndus Grid Tied — large-scale industrial solar systems connected directly to the national grid. Maximum generation, zero curtailment, and proven IPP-ready performance.",
};

const capabilities = [
    "MW-scale grid-tied solar plant design & engineering",
    "NEPRA / AEDB compliant net metering & IPP setup",
    "High-density panel layout with string & central inverters",
    "Automated grid synchronization & anti-islanding protection",
];

const features = [
    "Tier-1 bifacial solar panels with 25-year performance warranty",
    "Central & string inverter configurations up to multi-MW",
    "Real-time plant monitoring via GreenLight SCADA",
    "NEPRA net metering registration & utility coordination",
    "Lightning & surge protection for grid-connected systems",
    "Full civil, structural, and electrical EPC delivery",
];

const whyChoose = [
    "Fastest ROI in the GreenIndus product range",
    "Zero battery cost — sell 100% of surplus to the grid",
    "Ideal for factories, warehouses & industrial parks",
    "Modular — start small and expand plant capacity",
    "Reduces grid dependency during daylight production hours",
    "Full AEDB & NEPRA compliance handled end-to-end",
];

export default function IndustrialGridTiedPage() {
    return (
        <main>
            {/* ── Hero ─────────────────────────────────────────── */}
            <section className="relative bg-cream min-h-screen flex items-center overflow-hidden">
                <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-primary/7 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-transparent via-gold/60 to-transparent pointer-events-none" />
                <div className="absolute top-40 right-[44%] w-2 h-2 rounded-full bg-gold/50 pointer-events-none" />
                <div className="absolute top-52 right-[46%] w-1.5 h-1.5 rounded-full bg-primary/30 pointer-events-none" />

                <div className="relative mx-auto max-w-6xl px-4 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pt-44 pb-16 lg:pt-40 lg:pb-20">
                    <div>
                        <span className="inline-block bg-gold text-dark text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 shadow-sm">
                            Industrial
                        </span>

                        <h1 className="font-heading font-extrabold leading-none mb-5">
                            <span className="block text-5xl sm:text-6xl lg:text-7xl text-primary">Green</span>
                            <span className="block text-5xl sm:text-6xl lg:text-7xl text-gold -mt-1">Indus</span>
                            <span className="block text-xl sm:text-2xl font-semibold text-primary/60 tracking-widest mt-3">
                                INDUSTRIAL GRID TIED SOLAR
                            </span>
                        </h1>

                        <div className="w-14 h-0.5 bg-gold rounded-full mb-6" />

                        <p className="text-gray text-sm sm:text-base leading-relaxed max-w-md mb-8">
                            MW-scale solar plants connected directly to the national grid —
                            engineered for industrial facilities that want maximum generation,
                            full NEPRA compliance, and the fastest return on investment in
                            Pakistan&apos;s solar market.
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

                        <div className="grid grid-cols-3 gap-4 pt-7 border-t border-primary/15 max-w-sm">
                            {[
                                { v: "MW+", l: "Plant Scale" },
                                { v: "2 Yr", l: "Payback" },
                                { v: "99%", l: "Uptime" },
                            ].map(({ v, l }) => (
                                <div key={l}>
                                    <div className="text-primary font-heading font-extrabold text-2xl leading-none">{v}</div>
                                    <div className="text-gray text-[11px] mt-1 tracking-wide uppercase">{l}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative flex items-center justify-center py-8">
                        <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-primary/10 pointer-events-none" />
                        <div className="absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full border-2 border-primary/15 pointer-events-none" />
                        <div className="relative z-10 bg-cream rounded-2xl p-2">
                            <Image
                                src="/industrial-Grid-Tied-Solar.png"
                                alt="Industrial Grid Tied Solar System"
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
                    <div>
                        <span className="inline-block bg-gold text-dark text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 shadow-sm">
                            GreenIndus
                        </span>
                        <h2 className="font-heading font-extrabold text-primary text-2xl sm:text-3xl lg:text-4xl leading-tight mb-4">
                            Industrial Grid Tied<br />
                            Solar System
                        </h2>
                        <div className="w-12 h-0.5 bg-gold rounded-full mb-5" />
                        <p className="text-gray text-sm sm:text-base leading-relaxed mb-7">
                            GreenIndus Grid Tied plants are designed from the ground up for
                            industrial power demands. By connecting directly to the national grid,
                            your facility generates at maximum capacity during daylight hours,
                            offsets consumption costs, and exports surplus energy — turning your
                            rooftop or land into a revenue-generating asset.
                        </p>

                        <ul className="space-y-3">
                            {[
                                { k: "Product Name", v: "Industrial Grid Tied Solar System" },
                                { k: "System Capacities", v: "100kW | 250kW | 500kW | 1MW | Multi-MW" },
                                {
                                    k: "Description",
                                    v: "A NEPRA-compliant, EPC-delivered grid-tied solar plant for factories, warehouses, and industrial parks.",
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

                    <div className="bg-[#EFF6F1] rounded-3xl p-8 sm:p-10 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-primary/8 pointer-events-none" />
                        <Image
                            src="/industrial-Grid-Tied-Solar.png"
                            alt="Industrial Grid Tied Solar System"
                            width={380}
                            height={420}
                            className="object-contain w-56 sm:w-72 h-auto relative z-10 drop-shadow-xl mix-blend-multiply"
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
                            { title: "Why Choose GreenIndus Grid Tied?", items: whyChoose },
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
                        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-primary/8 pointer-events-none" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-gold/10 pointer-events-none" />

                        <span className="inline-block bg-gold text-dark text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
                            Ready to Connect?
                        </span>
                        <h2 className="font-heading font-extrabold text-primary text-2xl sm:text-3xl lg:text-4xl mb-4">
                            Ready to Connect Your Plant to the Grid?
                        </h2>
                        <p className="text-gray text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
                            Our industrial energy engineers will handle every step — from NEPRA
                            approval and site design to full EPC delivery and commissioning.
                        </p>
                        <div className="relative z-10 flex flex-wrap justify-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-white font-bold text-sm rounded-full hover:bg-secondary transition-all shadow-md"
                            >
                                Get a Free Site Assessment <ArrowRight size={15} />
                            </Link>
                            <Link
                                href="/products/industrial"
                                className="inline-flex items-center gap-2 px-7 py-3 border-2 border-primary text-primary text-sm font-semibold rounded-full hover:bg-primary/10 transition-all"
                            >
                                Explore All Industrial Products
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, PhoneCall } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "GreenBiz SME – 30-50kW Solution | GreenLight Energy",
    description:
        "GreenBiz SME — 30 to 50kW commercial solar solution for small and medium enterprises. Cut operating costs, ensure uptime, and achieve energy independence.",
};

const capabilities = [
    "30-50kW hybrid solar system tailored for SME load profiles",
    "Uninterrupted power with intelligent battery switchover",
    "Three-phase inverter support for commercial equipment",
    "Smart load prioritization & energy scheduling",
];

const features = [
    "High-efficiency Tier-1 solar panels with 25-year output warranty",
    "Lithium Iron Phosphate (LFP) battery storage",
    "Three-phase hybrid inverter — grid-tied & off-grid capable",
    "Net metering ready — export surplus energy to the grid",
    "Remote SCADA monitoring & real-time energy dashboard",
    "AEDB-compliant design & certified installation",
];

const whyChoose = [
    "Typical payback period of 3–4 years for SME setups",
    "Eliminate or drastically reduce commercial electricity bills",
    "Protect operations from grid outages & load shedding",
    "Scalable — expand capacity as your business grows",
    "Clean energy credentials for corporate sustainability goals",
    "Dedicated after-sales support & annual maintenance plans",
];

export default function GreenBizSMEPage() {
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
                            SME &amp; Commercial
                        </span>

                        <h1 className="font-heading font-extrabold leading-none mb-5">
                            <span className="block text-5xl sm:text-6xl lg:text-7xl text-primary">Green</span>
                            <span className="block text-5xl sm:text-6xl lg:text-7xl text-gold -mt-1">Biz</span>
                            <span className="block text-xl sm:text-2xl font-semibold text-primary/60 tracking-widest mt-3">
                                SME — 30-50 kW SOLUTION
                            </span>
                        </h1>

                        <div className="w-14 h-0.5 bg-gold rounded-full mb-6" />

                        <p className="text-gray text-sm sm:text-base leading-relaxed max-w-md mb-8">
                            A purpose-built 30–50 kW hybrid solar solution for small and medium
                            enterprises — eliminate load-shedding disruption, slash electricity
                            overheads, and future-proof your business operations.
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
                                { v: "50 kW", l: "Max Capacity" },
                                { v: "3-4 Yr", l: "Payback" },
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
                                src="/30-50kw.png"
                                alt="GreenBiz SME 30-50kW Commercial Solar System"
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
                            GreenBiz SME
                        </span>
                        <h2 className="font-heading font-extrabold text-primary text-2xl sm:text-3xl lg:text-4xl leading-tight mb-4">
                            GreenBiz SME Commercial<br />
                            Hybrid Solar System
                        </h2>
                        <div className="w-12 h-0.5 bg-gold rounded-full mb-5" />
                        <p className="text-gray text-sm sm:text-base leading-relaxed mb-7">
                            GreenBiz SME delivers a fully integrated 30–50 kW hybrid solar platform
                            engineered for the demanding power requirements of small and medium
                            enterprises. From retail outlets and factories to schools and clinics —
                            reliable, clean power with measurable ROI from day one.
                        </p>

                        {/* Spec list */}
                        <ul className="space-y-3">
                            {[
                                { k: "Product Name", v: "GreenBiz SME Commercial Hybrid Solar System" },
                                { k: "System Capacities", v: "30kW | 40kW | 50kW" },
                                {
                                    k: "Description",
                                    v: "A three-phase hybrid solar solution combining Tier-1 panels, LFP storage, and smart energy management for SME operations.",
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
                            src="/30-50kw.png"
                            alt="GreenBiz SME System"
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
                            { title: "Why Choose GreenBiz SME?", items: whyChoose },
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
                            Ready to Switch?
                        </span>
                        <h2 className="font-heading font-extrabold text-primary text-2xl sm:text-3xl lg:text-4xl mb-4">
                            Ready to Cut Your Business Energy Costs?
                        </h2>
                        <p className="text-gray text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
                            Our commercial energy engineers will survey your site, model your savings,
                            and deliver a turnkey 30–50 kW system — on time and within budget.
                        </p>
                        <div className="relative z-10 flex flex-wrap justify-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-white font-bold text-sm rounded-full hover:bg-secondary transition-all shadow-md"
                            >
                                Get a Free Site Assessment <ArrowRight size={15} />
                            </Link>
                            <Link
                                href="/products/commercial"
                                className="inline-flex items-center gap-2 px-7 py-3 border-2 border-primary text-primary text-sm font-semibold rounded-full hover:bg-primary/10 transition-all"
                            >
                                Explore All Commercial Products
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

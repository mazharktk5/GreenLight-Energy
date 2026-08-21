import Link from "next/link";
import {
    Sun,
    Home,
    Building2,
    Factory,
    Zap,
    BatteryCharging,
    Wrench,
    Handshake,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";

const services = [
    {
        icon: Home,
        badge: "Residential",
        title: "GreenHome Solar",
        subtitle: "10 – 20 kW Rooftop Systems",
        description:
            "Tailored rooftop solar solutions for homeowners and housing societies. Reduce your electricity bills, achieve energy independence, and increase property value with our fully managed installation service.",
        highlights: [
            "Custom system design & feasibility study",
            "Grid-tied & hybrid configurations",
            "Net metering application support",
            "5-year workmanship warranty",
        ],
        href: "/products/residential/greenHome",
        accent: "bg-[#EFF6F1]",
    },
    {
        icon: BatteryCharging,
        badge: "Residential",
        title: "GreenDrive",
        subtitle: "Vehicle-to-Home & Grid (V2H / V2G)",
        description:
            "Integrate your electric vehicle with your home solar system. Power your home from your EV battery during outages and feed excess energy back to the grid — the future of intelligent energy management.",
        highlights: [
            "Bi-directional EV charger installation",
            "Smart load management system",
            "Seamless solar + storage integration",
            "Remote monitoring via app",
        ],
        href: "/products/residential/greenDrive",
        accent: "bg-[#EFF6F1]",
    },
    {
        icon: Building2,
        badge: "Commercial",
        title: "GreenBiz – SME & Commercial",
        subtitle: "30 kW to 1 MW Hybrid Smart Systems",
        description:
            "Scalable solar energy solutions for offices, retail outlets, hospitals, and large commercial facilities. Our hybrid smart systems optimise energy consumption and deliver measurable ROI within 3–5 years.",
        highlights: [
            "SME packages: 30–50 kW",
            "Large commercial: 50 kW – 1 MW",
            "Demand-side management integration",
            "Detailed energy audit & reporting",
        ],
        href: "/products/commercial/sme",
        accent: "bg-[#EFF6F1]",
    },
    {
        icon: Factory,
        badge: "Industrial",
        title: "GreenIndus – Industrial Solar",
        subtitle: "Large-Scale Grid-Tied & BESS",
        description:
            "Industrial-grade solar power plants for factories, warehouses, and manufacturing zones. Combined with our GreenVault battery storage and GreenGrid EMS, achieve maximum uptime and energy cost savings.",
        highlights: [
            "Industrial grid-tied solar plants",
            "GreenVault — Industrial BESS",
            "GreenGrid — Energy Management System",
            "SCADA integration & remote diagnostics",
        ],
        href: "/products/industrial/grid-tied",
        accent: "bg-[#EFF6F1]",
    },
    {
        icon: Zap,
        badge: "Utility",
        title: "Net Metering",
        subtitle: "Export Excess Energy, Earn Credits",
        description:
            "We handle the complete net metering process end-to-end — from DISCO application and equipment installation to approval and commissioning. Sell your surplus solar energy back to the national grid.",
        highlights: [
            "Full DISCO application management",
            "Bi-directional meter supply & installation",
            "Grid interconnection compliance",
            "Ongoing billing support",
        ],
        href: "/contact",
        accent: "bg-[#EFF6F1]",
    },
    {
        icon: Sun,
        badge: "Consultancy",
        title: "Energy Consultancy",
        subtitle: "Design, Audit & Feasibility",
        description:
            "Not sure where to start? Our certified energy consultants conduct thorough site assessments, load analysis, and financial modelling to recommend the optimal solar solution for your specific needs.",
        highlights: [
            "On-site energy audit",
            "Load profile & demand analysis",
            "Financial ROI & payback modelling",
            "Technology & product recommendation",
        ],
        href: "/contact",
        accent: "bg-[#EFF6F1]",
    },
    {
        icon: Wrench,
        badge: "After-Sales",
        title: "GreenCare",
        subtitle: "Maintenance, Monitoring & Support",
        description:
            "Protect your solar investment with our comprehensive after-sales service plans. From annual maintenance contracts to real-time remote monitoring and professional panel cleaning, we keep your system at peak performance.",
        highlights: [
            "Annual Maintenance Contracts (AMC)",
            "24/7 remote monitoring & alerts",
            "Panel cleaning & thermal inspection",
            "Priority breakdown response",
        ],
        href: "/products/greencare/amc",
        accent: "bg-[#EFF6F1]",
    },
    {
        icon: Handshake,
        badge: "Partnership",
        title: "GreenPartners",
        subtitle: "Channel Business & Referral Program",
        description:
            "Grow your business with GreenLight Energy. Join our channel partner network, earn referral commissions, and access exclusive pricing, training, and marketing support through our dedicated partner portal.",
        highlights: [
            "Authorised channel partner programme",
            "Competitive commission structure",
            "Referral reward scheme",
            "Partner portal & co-marketing resources",
        ],
        href: "/products/partners/apply",
        accent: "bg-[#EFF6F1]",
    },
];

const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "10 MW+", label: "Installed Capacity" },
    { value: "15+", label: "Cities Served" },
    { value: "98%", label: "Customer Satisfaction" },
];

export default function ServicesPage() {
    return (
        <main className="bg-cream min-h-screen">

            {/* ── Hero ─────────────────────────────────────────────────── */}
            <section className="relative bg-cream overflow-hidden">
                {/* Decorative rings matching site style */}
                <div className="absolute -top-32 -right-32 w-130 h-130 rounded-full border-40 border-primary/6 pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-primary/5 pointer-events-none" />
                <div className="absolute top-40 right-16 w-3 h-3 rounded-full bg-gold/60 pointer-events-none" />
                <div className="absolute top-52 right-28 w-1.5 h-1.5 rounded-full bg-gold/40 pointer-events-none" />
                {/* Left gold edge accent */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-transparent via-gold/50 to-transparent pointer-events-none" />

                <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pt-36 pb-20">

                    {/* Left — text */}
                    <div>
                        <p className="text-gray text-[10px] font-semibold tracking-[0.3em] uppercase mb-4 font-body">
                            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                            <span className="mx-2">/</span>
                            <span>Services</span>
                        </p>

                        <span className="inline-block bg-gold text-dark text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
                            What We Offer
                        </span>

                        <h1 className="font-heading font-extrabold leading-tight mb-5">
                            <span className="block text-4xl sm:text-5xl lg:text-6xl text-primary">
                                End-to-End
                            </span>
                            <span className="block text-4xl sm:text-5xl lg:text-6xl">
                                <span className="text-gold">Solar Energy</span>
                            </span>
                            <span className="block text-4xl sm:text-5xl lg:text-6xl text-primary">
                                Solutions
                            </span>
                        </h1>

                        <div className="w-12 h-0.5 bg-gold mb-5 rounded-full" />

                        <p className="text-gray text-base lg:text-lg leading-relaxed max-w-lg font-body mb-8">
                            From rooftop homes to industrial power plants — GreenLight Energy delivers
                            fully integrated solar solutions backed by expert consultation, quality
                            installation, and dedicated after-sales care.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-white font-semibold text-sm hover:bg-secondary transition-all duration-200"
                            >
                                Get a Free Consultation
                                <ArrowRight size={15} />
                            </Link>
                            <Link
                                href="/products/residential/greenHome"
                                className="inline-flex items-center px-7 py-3 rounded-full border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-all duration-200"
                            >
                                Explore Products
                            </Link>
                        </div>
                    </div>

                    {/* Right — service category quick-glance grid */}
                    <div className="hidden lg:grid grid-cols-2 gap-4">
                        {[
                            { icon: Home, label: "Residential Solar", sub: "GreenHome — 10–20 kW" },
                            { icon: Building2, label: "Commercial Solar", sub: "GreenBiz — 30 kW–1 MW" },
                            { icon: Factory, label: "Industrial Solar", sub: "GreenIndus + BESS" },
                            { icon: Zap, label: "Net Metering", sub: "Grid export & credits" },
                            { icon: Wrench, label: "GreenCare", sub: "AMC & monitoring" },
                            { icon: Sun, label: "Energy Consultancy", sub: "Audit & feasibility" },
                        ].map(({ icon: Icon, label, sub }) => (
                            <div
                                key={label}
                                className="bg-white rounded-2xl p-5 flex items-start gap-4 shadow-sm border border-gray/10 hover:border-primary/20 hover:shadow-md transition-all duration-200"
                            >
                                <div className="w-10 h-10 rounded-xl bg-[#EFF6F1] flex items-center justify-center shrink-0">
                                    <Icon size={20} className="text-primary" strokeWidth={1.8} />
                                </div>
                                <div>
                                    <p className="font-heading font-bold text-primary text-sm leading-tight">{label}</p>
                                    <p className="text-gray text-xs mt-0.5 font-body">{sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Stats Strip ──────────────────────────────────────────── */}
            <section className="bg-dark-footer py-10 px-4">
                <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((s) => (
                        <div key={s.label}>
                            <p className="font-heading font-extrabold text-3xl text-gold mb-1">{s.value}</p>
                            <p className="text-white/60 text-sm font-body">{s.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Services Grid ─────────────────────────────────────────── */}
            <section className="py-24 px-4">
                <div className="mx-auto max-w-6xl">

                    <div className="text-center mb-16">
                        <span className="inline-block bg-gold text-dark text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
                            Our Services
                        </span>
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
                            Everything You Need,<br />Under One Roof
                        </h2>
                        <p className="text-gray text-base max-w-xl mx-auto font-body leading-relaxed">
                            A complete ecosystem of solar energy services — designed to serve
                            every segment, every scale, every need.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((svc) => {
                            const Icon = svc.icon;
                            return (
                                <article
                                    key={svc.title}
                                    className="bg-white rounded-3xl p-8 shadow-sm border border-gray/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
                                >
                                    {/* Header */}
                                    <div className="flex items-start gap-5 mb-6">
                                        <div className="w-14 h-14 rounded-2xl bg-[#EFF6F1] flex items-center justify-center shrink-0">
                                            <Icon size={26} className="text-primary" strokeWidth={1.8} />
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-bold tracking-widest uppercase text-gold">
                                                {svc.badge}
                                            </span>
                                            <h3 className="font-heading font-bold text-xl text-primary leading-tight">
                                                {svc.title}
                                            </h3>
                                            <p className="text-gray text-xs mt-0.5 font-body">{svc.subtitle}</p>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-dark/70 text-sm leading-relaxed font-body mb-6">
                                        {svc.description}
                                    </p>

                                    {/* Highlights */}
                                    <ul className="space-y-2 mb-8 flex-1">
                                        {svc.highlights.map((h) => (
                                            <li key={h} className="flex items-start gap-2.5 text-dark/75 text-sm font-body">
                                                <CheckCircle2 size={15} className="text-secondary shrink-0 mt-0.5" strokeWidth={2} />
                                                {h}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA */}
                                    <Link
                                        href={svc.href}
                                        className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-200 group"
                                    >
                                        Learn more
                                        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
                                    </Link>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── Why Choose GreenLight ─────────────────────────────────── */}
            <section className="bg-white py-20 px-4">
                <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block bg-gold text-dark text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
                                Why GreenLight Energy
                            </span>
                            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6 leading-tight">
                                Your Trusted Solar Energy Partner in Pakistan
                            </h2>
                            <p className="text-gray text-base leading-relaxed font-body mb-8">
                                We don&apos;t just install solar panels — we build long-term energy
                                partnerships. From the first site assessment to decades of after-sales
                                support, GreenLight Energy is with you every step of the way.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Certified engineers with 10+ years of industry experience",
                                    "End-to-end project management — no subcontracting",
                                    "Premium Tier-1 solar panels & inverters",
                                    "Net metering & DISCO approval handled for you",
                                    "Nationwide service network across 15+ cities",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-dark/75 text-sm font-body">
                                        <span className="w-2 h-2 rounded-full bg-gold shrink-0 mt-1.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Feature blocks */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: "Design & Engineering", desc: "Precision system design optimised for your site and load profile." },
                                { label: "Supply & Installation", desc: "Tier-1 equipment, certified installers, on-time delivery." },
                                { label: "Commissioning", desc: "Full testing, grid synchronisation, and net meter activation." },
                                { label: "Ongoing Support", desc: "AMC, remote monitoring, and rapid breakdown response." },
                            ].map((block) => (
                                <div key={block.label} className="bg-[#EFF6F1] rounded-2xl p-5">
                                    <h4 className="font-heading font-bold text-primary text-sm mb-2">{block.label}</h4>
                                    <p className="text-gray text-xs leading-relaxed font-body">{block.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA Banner ───────────────────────────────────────────── */}
            <section className="bg-cream py-12 sm:py-16 px-4">
                <div className="mx-auto max-w-6xl">
                    <div className="relative bg-primary rounded-3xl px-8 sm:px-12 py-12 sm:py-16 overflow-hidden text-center">
                        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-secondary/30 blur-3xl pointer-events-none" />
                        <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-white/5 blur-2xl pointer-events-none" />
                        <div
                            className="absolute inset-0 opacity-[0.05] pointer-events-none"
                            style={{
                                backgroundImage:
                                    "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                                backgroundSize: "50px 50px",
                            }}
                        />
                        <div className="relative z-10">
                            <span className="inline-block bg-gold/20 text-gold text-xs font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full border border-gold/40 mb-5">
                                Get Started Today
                            </span>
                            <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl leading-tight mb-4">
                                Ready to Switch to<br />
                                <span className="text-gold">Clean Solar Energy?</span>
                            </h2>
                            <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-body mb-8">
                                Book a free no-obligation consultation with our energy experts. We&apos;ll
                                assess your site, analyse your load, and recommend the perfect solution.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-7 py-3 bg-gold text-dark font-bold text-sm rounded-full hover:brightness-105 transition-all shadow-lg shadow-gold/20"
                                >
                                    Book Free Consultation
                                    <ArrowRight size={16} />
                                </Link>
                                <Link
                                    href="/about"
                                    className="inline-flex items-center gap-2 px-7 py-3 bg-white/10 border border-white/25 text-white font-semibold text-sm rounded-full hover:bg-white/20 transition-all"
                                >
                                    About Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

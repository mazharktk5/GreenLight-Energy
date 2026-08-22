import { ClipboardList, Cpu, Wrench, Zap } from "lucide-react";

const steps = [
    {
        number: "01",
        icon: ClipboardList,
        title: "Free Site Survey",
        description:
            "Our certified engineers visit your site, analyse your load profile, roof structure, and DISCO connection to design the perfect system.",
    },
    {
        number: "02",
        icon: Cpu,
        title: "Custom System Design",
        description:
            "We produce a detailed technical proposal — system size, equipment specs, financial ROI model, and payback period — before you commit.",
    },
    {
        number: "03",
        icon: Wrench,
        title: "Professional Installation",
        description:
            "Our in-house team installs Tier-1 panels and inverters to AEDB standards. Most residential systems go live within 7 days of sign-off.",
    },
    {
        number: "04",
        icon: Zap,
        title: "Net Metering & Go Live",
        description:
            "We handle all DISCO/NEPRA paperwork, get your bi-directional meter approved, and hand over a live, monitored system — ready to save from day one.",
    },
];

export default function HowItWorks() {
    return (
        <section className="bg-cream py-20 px-4">
            <div className="mx-auto max-w-6xl">

                <div className="text-center mb-14">
                    <span className="inline-block bg-gold text-dark text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
                        The Process
                    </span>
                    <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
                        From Inquiry to Going Live —<br className="hidden sm:block" />
                        Here&apos;s How It Works
                    </h2>
                    <p className="text-gray text-base max-w-xl mx-auto font-body leading-relaxed">
                        A simple, fully managed process — so you never have to figure it out alone.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, i) => {
                        const Icon = step.icon;
                        return (
                            <div key={step.number} className="relative">
                                {/* Connector line between steps (desktop only) */}
                                {i < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-9 left-[calc(100%-12px)] w-[calc(100%-24px)] h-px bg-primary/15 z-0" />
                                )}

                                <div className="relative z-10 bg-white rounded-2xl p-6 shadow-sm border border-primary/8 h-full flex flex-col hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                                    {/* Number + Icon row */}
                                    <div className="flex items-center justify-between mb-5">
                                        <span className="font-heading font-extrabold text-3xl text-primary/10 leading-none">
                                            {step.number}
                                        </span>
                                        <div className="w-11 h-11 rounded-xl bg-[#EFF6F1] flex items-center justify-center">
                                            <Icon size={20} className="text-primary" strokeWidth={1.8} />
                                        </div>
                                    </div>

                                    <h3 className="font-heading font-bold text-primary text-base mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray text-sm leading-relaxed font-body flex-1">
                                        {step.description}
                                    </p>

                                    {/* Gold bottom accent */}
                                    <div className="mt-5 w-8 h-0.5 bg-gold rounded-full" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

import { Leaf, Target, Eye } from "lucide-react";

const pillars = [
    {
        icon: Target,
        label: "Our Mission",
        color: "bg-primary",
        text: "To make clean, affordable solar energy universally accessible — empowering Pakistan&apos;s homes, businesses, and industries to reduce costs, cut emissions, and achieve true energy independence.",
    },
    {
        icon: Eye,
        label: "Our Vision",
        color: "bg-secondary",
        text: "A Pakistan powered entirely by renewable energy, where every rooftop contributes to a sustainable national grid and where energy poverty is a thing of the past.",
    },
    {
        icon: Leaf,
        label: "Our Values",
        color: "bg-[#1A6B30]",
        text: "Integrity in every project. Precision in every installation. Passion for sustainable impact. We hold ourselves to the highest standards so our clients can trust us completely.",
    },
];

export default function WhoWeAre() {
    return (
        <section className="bg-cream py-16 sm:py-24 px-4">
            <div className="mx-auto max-w-6xl">

                {/* Top: who we are */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <span className="inline-block bg-gold text-dark text-[10px] sm:text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
                            Who We Are
                        </span>
                        <h2 className="font-heading font-extrabold text-primary text-2xl sm:text-3xl lg:text-4xl leading-tight mb-5">
                            Pakistan&apos;s Trusted<br />
                            Solar Energy Company
                        </h2>
                        <div className="w-12 h-0.5 bg-gold rounded-full mb-6" />
                        <p className="text-gray text-sm sm:text-base leading-relaxed mb-4">
                            <strong className="text-dark font-semibold">GreenLight Energy</strong> delivers
                            end-to-end solar solutions — from site assessment and system design through
                            professional installation, net-metering, and long-term maintenance. We serve
                            homeowners, commercial businesses, and industrial facilities across Pakistan.
                        </p>
                        <p className="text-gray text-sm sm:text-base leading-relaxed">
                            Backed by AEDB-certified engineers and Tier-1 equipment partnerships, we have
                            completed over <strong className="text-primary font-semibold">500 projects</strong> and
                            installed more than <strong className="text-primary font-semibold">10 MW</strong> of
                            clean capacity nationwide — with every system designed to deliver maximum ROI.
                        </p>
                    </div>

                    {/* Right: decorative stat card */}
                    <div className="relative">
                        <div className="bg-primary rounded-3xl p-8 sm:p-10 text-white shadow-xl shadow-primary/20">
                            <p className="text-white/50 text-xs font-semibold tracking-widest uppercase mb-6">
                                By The Numbers
                            </p>
                            <div className="grid grid-cols-2 gap-y-8 gap-x-6">
                                {[
                                    { v: "500+", l: "Projects Completed" },
                                    { v: "10 MW+", l: "Capacity Installed" },
                                    { v: "5+ Yrs", l: "Industry Experience" },
                                    { v: "98%", l: "Client Satisfaction" },
                                ].map(({ v, l }) => (
                                    <div key={l}>
                                        <div className="text-gold font-heading font-extrabold text-3xl sm:text-4xl leading-none">
                                            {v}
                                        </div>
                                        <div className="text-white/55 text-xs mt-1.5 tracking-wide">{l}</div>
                                    </div>
                                ))}
                            </div>
                            {/* decorative circle */}
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gold/20 blur-2xl pointer-events-none" />
                        </div>
                        {/* offset accent */}
                        <div className="absolute -z-10 -bottom-3 -right-3 w-full h-full rounded-3xl border-2 border-gold/30" />
                    </div>
                </div>

                {/* Mission / Vision / Values */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {pillars.map(({ icon: Icon, label, color, text }) => (
                        <div
                            key={label}
                            className="group bg-white rounded-2xl p-6 sm:p-7 border border-primary/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className={`w-11 h-11 rounded-xl ${color} flex items-center justify-center mb-5 shadow-md`}>
                                <Icon size={20} className="text-white" />
                            </div>
                            <h3 className="font-heading font-bold text-primary text-base sm:text-lg mb-3">
                                {label}
                            </h3>
                            <div className="w-8 h-0.5 bg-gold rounded-full mb-3 group-hover:w-14 transition-all duration-300" />
                            <p
                                className="text-gray text-sm leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: text }}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

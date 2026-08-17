import { Award, ShieldCheck, Zap, PhoneCall } from "lucide-react";

const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "5+", label: "Years Experience" },
    { value: "10 MW+", label: "Capacity Installed" },
    { value: "98%", label: "Customer Satisfaction" },
];

const features = [
    {
        icon: Award,
        title: "Certified Experts",
        desc: "AEDB-certified professionals with deep hands-on experience across residential, commercial, and industrial solar projects.",
    },
    {
        icon: ShieldCheck,
        title: "Quality Guaranteed",
        desc: "Tier-1 solar panels and premium inverters, backed by full manufacturer warranties and our own service guarantee.",
    },
    {
        icon: Zap,
        title: "Fast Installation",
        desc: "From site survey to a live system in as little as 7 days. Professional, clean, and on-schedule every time.",
    },
    {
        icon: PhoneCall,
        title: "After-Sales Support",
        desc: "Dedicated support team available post-installation for maintenance, monitoring, and anything you need.",
    },
];

export default function WhyUsSection() {
    return (
        <section className="bg-cream py-14 sm:py-20 px-4">
            <div className="mx-auto max-w-6xl">

                {/* Stats bar — contained primary strip */}
                <div className="bg-primary rounded-2xl grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/15 overflow-hidden mb-14 sm:mb-20">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="flex flex-col items-center justify-center py-8 px-4 text-center"
                        >
                            <span className="text-gold font-heading font-extrabold text-4xl sm:text-5xl leading-none">
                                {stat.value}
                            </span>
                            <span className="text-white/60 text-[11px] sm:text-xs mt-2.5 tracking-widest uppercase">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Section heading */}
                <div className="text-center mb-10 sm:mb-12">
                    <span className="inline-block bg-gold text-dark text-[10px] sm:text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
                        Why Choose Us
                    </span>
                    <h2 className="font-heading font-bold text-primary text-2xl sm:text-3xl lg:text-4xl leading-tight">
                        Pakistan&apos;s Most Trusted<br className="hidden sm:block" /> Solar Energy Partner
                    </h2>
                </div>

                {/* Feature cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                    {features.map(({ icon: Icon, title, desc }) => (
                        <div
                            key={title}
                            className="bg-[#EFF6F1] rounded-2xl p-5 sm:p-6 hover:shadow-md transition-shadow"
                        >
                            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                <Icon size={20} className="text-primary" />
                            </div>
                            <h3 className="font-heading font-bold text-primary text-sm sm:text-base mb-2">
                                {title}
                            </h3>
                            <p className="text-gray text-xs sm:text-sm leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

import { UserCheck, Cpu, Handshake, Recycle } from "lucide-react";

const values = [
    {
        icon: UserCheck,
        title: "Client-First Approach",
        desc: "Every project starts with listening. We tailor each solar system to your exact energy profile, site conditions, and budget — no cookie-cutter solutions.",
    },
    {
        icon: Cpu,
        title: "Engineering Precision",
        desc: "Our AEDB-certified engineers apply rigorous design standards, ensuring optimal panel orientation, shading analysis, and inverter sizing for peak performance.",
    },
    {
        icon: Handshake,
        title: "Transparent Partnerships",
        desc: "No hidden costs. No fine print surprises. We provide detailed proposals, clear timelines, and honest ROI projections before any contract is signed.",
    },
    {
        icon: Recycle,
        title: "Environmental Stewardship",
        desc: "Solar is our business, but sustainability is our purpose. We actively minimize installation waste and promote responsible panel end-of-life recycling.",
    },
];

export default function OurValues() {
    return (
        <section className="bg-white py-16 sm:py-24 px-4">
            <div className="mx-auto max-w-6xl">

                <div className="text-center mb-12 sm:mb-14">
                    <span className="inline-block bg-gold text-dark text-[10px] sm:text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
                        What Drives Us
                    </span>
                    <h2 className="font-heading font-bold text-primary text-2xl sm:text-3xl lg:text-4xl">
                        Core Values That Define Us
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
                    {values.map(({ icon: Icon, title, desc }, i) => (
                        <div
                            key={title}
                            className="flex gap-5 bg-[#EFF6F1] rounded-2xl p-6 sm:p-7 hover:shadow-md transition-shadow group"
                        >
                            <div className="shrink-0">
                                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-md group-hover:bg-secondary transition-colors">
                                    <Icon size={22} className="text-white" />
                                </div>
                                {/* vertical accent line for non-last items in each column */}
                                {i < values.length - 2 && (
                                    <div className="w-0.5 h-full bg-primary/10 mx-auto mt-3 hidden sm:block" />
                                )}
                            </div>
                            <div>
                                <h3 className="font-heading font-bold text-primary text-sm sm:text-base mb-2">
                                    {title}
                                </h3>
                                <p className="text-gray text-xs sm:text-sm leading-relaxed">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

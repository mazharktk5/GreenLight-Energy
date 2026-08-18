import { MapPin } from "lucide-react";

const cities = [
    "Karachi", "Lahore", "Islamabad", "Rawalpindi",
    "Faisalabad", "Peshawar", "Quetta", "Multan",
    "Sialkot", "Gujranwala", "Hyderabad", "Sukkur",
];

const highlights = [
    { value: "50+", label: "Cities Served" },
    { value: "500+", label: "Projects Completed" },
    { value: "10 MW+", label: "Capacity Installed" },
    { value: "4", label: "Provinces Covered" },
];

export default function NationalPresence() {
    return (
        <section className="bg-dark-footer py-12 sm:py-16 px-4 overflow-hidden relative">
            {/* Ambient glow */}
            <div className="absolute -top-20 right-0 w-96 h-96 rounded-full bg-primary/25 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-secondary/15 blur-3xl pointer-events-none" />

            <div className="relative mx-auto max-w-6xl">

                <div className="text-center mb-12 sm:mb-16">
                    <span className="inline-block bg-gold/15 text-gold text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full border border-gold/30 mb-4">
                        Nationwide Reach
                    </span>
                    <h2 className="font-heading font-bold text-white text-2xl sm:text-3xl lg:text-4xl">
                        Powering Pakistan,{" "}
                        <span className="text-gold">City by City</span>
                    </h2>
                    <p className="text-white/50 text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed">
                        From Karachi&apos;s coastline to the mountains of Gilgit, our teams are on the ground
                        delivering clean energy to communities across every province.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
                    {highlights.map(({ value, label }) => (
                        <div
                            key={label}
                            className="bg-white/5 border border-white/10 rounded-2xl py-6 px-4 text-center hover:bg-white/10 transition-colors"
                        >
                            <div className="text-gold font-heading font-extrabold text-3xl sm:text-4xl leading-none">
                                {value}
                            </div>
                            <div className="text-white/50 text-xs mt-2 tracking-widest uppercase">{label}</div>
                        </div>
                    ))}
                </div>

                {/* City tags */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                    {cities.map((city) => (
                        <span
                            key={city}
                            className="inline-flex items-center gap-1.5 bg-white/8 border border-white/15 text-white/70 text-xs sm:text-sm px-4 py-2 rounded-full hover:border-gold/50 hover:text-gold transition-all cursor-default"
                        >
                            <MapPin size={11} className="text-gold shrink-0" />
                            {city}
                        </span>
                    ))}
                    <span className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/30 text-gold text-xs sm:text-sm px-4 py-2 rounded-full font-semibold">
                        + Many More
                    </span>
                </div>

            </div>
        </section>
    );
}

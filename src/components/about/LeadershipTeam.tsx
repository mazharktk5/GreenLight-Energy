const team = [
    {
        name: "Dr. Muhammad Sheraz",
        role: "Chairman & Founder",
        badge: "Chairman",
        bio: "A visionary leader with 15+ years in renewable energy and infrastructure. Muhammad steers GreenLight's strategic direction and nationwide expansion — driving the mission to make solar affordable for every Pakistani household.",
        initials: "MS",
        color: "from-primary to-secondary",
    },
    {
        name: "Muhammad Ayaz",
        role: "Chief Executive Officer",
        badge: "CEO",
        bio: "With a background in electrical engineering from NUST and a decade of solar R&D experience, Muhammad leads our engineering teams to deliver precision-designed systems that consistently outperform industry benchmarks.",
        initials: "MA",
        color: "from-[#0D5C2A] to-[#1F8A50]",
    },
    {
        name: "Bilal Mahmood",
        role: "Head of Operations",
        badge: "Operations",
        bio: "Bilal ensures every project transitions seamlessly from design to a live, producing system. With expertise in large-scale deployment logistics, he keeps GreenLight's 500+ project track record on time and on budget.",
        initials: "BM",
        color: "from-[#174E22] to-primary",
    },
];

export default function LeadershipTeam() {
    return (
        <section className="bg-cream py-12 sm:py-16 px-4">
            <div className="mx-auto max-w-6xl">

                <div className="text-center mb-12 sm:mb-16">
                    <span className="inline-block bg-gold text-dark text-[10px] sm:text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
                        The People Behind It
                    </span>
                    <h2 className="font-heading font-bold text-primary text-2xl sm:text-3xl lg:text-4xl">
                        Meet Our Leadership
                    </h2>
                    <p className="text-gray text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed">
                        Experienced professionals united by a single purpose — accelerating Pakistan&apos;s
                        transition to clean, affordable energy.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-7">
                    {team.map(({ name, role, badge, bio, initials, color }) => (
                        <div
                            key={name}
                            className="group bg-white rounded-3xl overflow-hidden border border-primary/10 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
                        >
                            {/* Avatar area */}
                            <div className={`relative bg-linear-to-br ${color} h-48 flex items-center justify-center`}>
                                {/* Decorative circles */}
                                <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/10" />
                                <div className="absolute -bottom-3 -left-3 w-16 h-16 rounded-full bg-white/5" />

                                <div className="relative z-10 w-24 h-24 rounded-full bg-white/20 border-4 border-white/40 flex items-center justify-center shadow-xl">
                                    <span className="font-heading font-extrabold text-white text-3xl tracking-tight">
                                        {initials}
                                    </span>
                                </div>

                                {/* Role badge */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                                    <span className="inline-block bg-gold text-dark text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
                                        {badge}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="pt-8 pb-7 px-6">
                                <h3 className="font-heading font-bold text-primary text-base sm:text-lg text-center mb-1">
                                    {name}
                                </h3>
                                <p className="text-gray text-xs text-center mb-4">{role}</p>
                                <div className="w-8 h-0.5 bg-gold rounded-full mx-auto mb-4 group-hover:w-16 transition-all duration-300" />
                                <p className="text-gray text-xs sm:text-sm leading-relaxed text-center">
                                    {bio}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

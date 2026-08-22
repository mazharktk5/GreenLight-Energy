import Image from "next/image";

const cards = [
    {
        title: "Key Services",
        items: [
            "Industrial solar system design & installation",
            "Residential rooftop solar solutions",
            "Battery storage & backup systems",
        ],
    },
    {
        title: "Applications",
        items: [
            "Net metering & grid-tied systems",
            "Off-grid & remote installations",
            "Commercial & agricultural setups",
        ],
    },
    {
        title: "Target Segments",
        items: [
            "Homeowners & housing societies",
            "Factories & industrial zones",
            "Farms, schools & businesses",
        ],
    },
];

export default function ServicesSection() {
    return (
        <section className="bg-white py-20 px-4">
            <div className="mx-auto max-w-6xl">
                {/* Top: badge + heading + image */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <span className="inline-block bg-gold text-dark text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
                            What We Offer
                        </span>
                        <h2 className="font-heading font-bold text-3xl lg:text-4xl text-primary leading-tight mb-5">
                            Industrial &amp; Residential<br />Solar Solutions
                        </h2>
                        <p className="text-gray text-base leading-relaxed max-w-md">
                            A fully integrated solar energy partner for homes, businesses, and
                            industries — from consultation and design to installation and
                            after-sales support.
                        </p>
                    </div>

                    <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/mariana-proenca-GXiHwHkIdVs-unsplash.jpg"
                            alt="GreenLight Energy solar installation"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* 3 cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((card) => (
                        <div
                            key={card.title}
                            className="bg-[#EFF6F1] rounded-2xl p-7"
                        >
                            <h3 className="font-heading font-bold text-primary text-lg mb-4">
                                {card.title}
                            </h3>
                            <ul className="space-y-2.5">
                                {card.items.map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-dark/80 text-sm">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

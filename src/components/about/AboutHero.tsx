export default function AboutHero() {
    return (
        <section className="relative bg-cream overflow-hidden pt-32 pb-20 sm:pt-44 sm:pb-28">
            {/* Large decorative ring — top right */}
            <div className="absolute -top-32 -right-32 w-130 h-130 rounded-full border-40 border-primary/6 pointer-events-none" />
            {/* Smaller filled blob — bottom left */}
            <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-primary/5 pointer-events-none" />
            {/* Gold accent dot cluster */}
            <div className="absolute top-40 right-16 w-3 h-3 rounded-full bg-gold/60 pointer-events-none" />
            <div className="absolute top-52 right-28 w-1.5 h-1.5 rounded-full bg-gold/40 pointer-events-none" />
            <div className="absolute bottom-20 left-20 w-2 h-2 rounded-full bg-primary/30 pointer-events-none" />

            {/* Left gold edge accent */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-transparent via-gold/50 to-transparent pointer-events-none" />

            <div className="relative mx-auto max-w-6xl px-4 text-center">
                <span className="inline-block bg-gold text-dark text-[10px] sm:text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 shadow-sm">
                    Our Story
                </span>

                <h1 className="font-heading font-extrabold leading-tight">
                    <span className="block text-4xl sm:text-6xl lg:text-7xl">
                        About{" "}
                        <span className="text-primary">GREEN</span><span className="text-gold">LIGHT</span>
                    </span>
                    <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mt-2 tracking-[0.2em]">
                        ENERGY
                    </span>
                </h1>

                <div className="w-16 h-0.5 bg-gold mx-auto my-6 rounded-full" />

                <p className="text-gray text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
                    We are Pakistan&apos;s dedicated solar energy partner — built on a foundation of
                    engineering excellence, environmental responsibility, and a genuine commitment to
                    making clean power accessible for every home and business.
                </p>
            </div>
        </section>
    );
}

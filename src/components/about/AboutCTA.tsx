import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function AboutCTA() {
    return (
        <section className="bg-cream py-16 sm:py-24 px-4">
            <div className="mx-auto max-w-6xl">
                <div className="relative bg-primary rounded-3xl px-8 sm:px-12 py-12 sm:py-16 overflow-hidden text-center">
                    {/* Background decorations */}
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
                        <span className="inline-block bg-gold/20 text-gold text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full border border-gold/40 mb-5">
                            Ready to Switch?
                        </span>
                        <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl lg:text-4xl leading-tight mb-4">
                            Start Your Solar Journey Today
                        </h2>
                        <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8">
                            Get a free consultation and custom energy assessment from our certified team.
                            No commitment — just real answers about what solar can do for you.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-7 py-3 bg-gold text-dark font-bold text-sm rounded-full hover:brightness-105 transition-all shadow-lg shadow-gold/20"
                            >
                                Get a Free Quote
                                <ArrowRight size={16} />
                            </Link>
                            <a
                                href="tel:+923001234567"
                                className="inline-flex items-center gap-2 px-7 py-3 bg-white/10 border border-white/25 text-white font-semibold text-sm rounded-full hover:bg-white/20 transition-all"
                            >
                                <PhoneCall size={16} />
                                Call Us Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">
            {/* Left — light panel for dark-green text contrast */}
            <div className="bg-cream flex flex-col justify-center px-6 sm:px-10 lg:px-20 pt-28 pb-12 md:pt-0 md:pb-0">
                <p className="text-gray text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                    Powering a Sustainable Tomorrow
                </p>
                <h1 className="font-heading font-extrabold leading-none">
                    <span className="block text-5xl sm:text-6xl lg:text-8xl">
                        <span className="text-primary">GREEN</span><span className="text-gold">LIGHT</span>
                    </span>
                    <span className="block text-3xl sm:text-4xl lg:text-5xl mt-2 text-primary font-bold tracking-[0.3em]">
                        ENERGY
                    </span>
                </h1>
                <div className="w-12 h-0.5 bg-gold mt-5 mb-5 rounded-full" />
                <p className="text-gray text-sm sm:text-base lg:text-lg max-w-lg leading-relaxed">
                    Your trusted partner in delivering{" "}
                    <strong className="text-dark font-semibold">reliable, efficient</strong>, and{" "}
                    <strong className="text-dark font-semibold">sustainable</strong> solar
                    energy solutions across Pakistan. From rooftop systems to large-scale industrial
                    installations, we handle everything — design, supply, installation, and after-sales
                    support. Clean energy is no longer a luxury; with GreenLight, it&apos;s within reach.
                </p>
                <div className="mt-7 flex flex-wrap gap-3 sm:gap-4">
                    <Link
                        href="/contact"
                        className="px-6 py-2.5 sm:px-7 sm:py-3 bg-primary text-white text-sm sm:text-base font-semibold rounded-full hover:bg-secondary transition-all"
                    >
                        Get a Quote
                    </Link>
                    <Link
                        href="/services"
                        className="px-6 py-2.5 sm:px-7 sm:py-3 border border-primary text-primary text-sm sm:text-base font-semibold rounded-full hover:bg-primary/10 transition-all"
                    >
                        Our Services
                    </Link>
                </div>
            </div>

            {/* Right — hero image, hidden on mobile */}
            <div className="relative hidden md:block overflow-hidden">
                <Image
                    src="/hero.jpg"
                    alt="Solar installation by GreenLight Energy"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-y-0 left-0 w-16 bg-linear-to-r from-cream/50 to-transparent" />
            </div>
        </section>
    );
}

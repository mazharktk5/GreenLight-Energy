import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <main className="bg-cream min-h-screen flex items-center justify-center px-4">
            {/* Decorative rings */}
            <div className="absolute -top-32 -right-32 w-130 h-130 rounded-full border-40 border-primary/5 pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

            <div className="relative text-center max-w-lg">
                {/* Big number */}
                <p className="font-heading font-extrabold text-[10rem] sm:text-[14rem] leading-none text-primary/8 select-none">
                    404
                </p>

                <div className="-mt-8 sm:-mt-12">
                    <span className="inline-block bg-gold text-dark text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
                        Page Not Found
                    </span>
                    <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-primary mb-4">
                        Looks like this page went off-grid.
                    </h1>
                    <p className="text-gray text-sm sm:text-base font-body leading-relaxed mb-8">
                        The page you&apos;re looking for doesn&apos;t exist or has been moved.
                        Let&apos;s get you back to the light.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-white font-semibold text-sm hover:bg-secondary transition-all"
                        >
                            <ArrowLeft size={15} />
                            Back to Home
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-7 py-3 rounded-full border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-all"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

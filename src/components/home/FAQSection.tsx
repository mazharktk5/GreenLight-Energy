"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "How much does a solar system cost in Pakistan?",
        a: "A 5 kW residential system typically costs between Rs. 8–10 lakh installed. Costs vary by system size, battery choice, and roof type. We provide a detailed quote after a free site survey — no obligation.",
    },
    {
        q: "How long does the installation take?",
        a: "For most residential systems, installation is completed in 1–2 days. The full process from site survey to net meter approval takes 2–4 weeks depending on your DISCO.",
    },
    {
        q: "What is net metering and how does it work?",
        a: "Net metering lets you export surplus solar energy to the national grid and earn bill credits. When your system produces more than you use, the extra units go to the grid; at night you draw them back. GreenLight handles the complete DISCO application process for you.",
    },
    {
        q: "Will solar work during load shedding?",
        a: "A hybrid or off-grid system with a battery bank continues to power your home during outages. A grid-tied system without batteries will shut down during load shedding for safety reasons. We recommend a hybrid setup for areas with frequent load shedding.",
    },
    {
        q: "How soon will I recover my investment?",
        a: "Most residential customers see payback in 3–5 years; commercial customers in 2–4 years. With 25-year panel warranties, the remaining 20+ years is essentially free energy.",
    },
    {
        q: "Do I really need a battery?",
        a: "Not necessarily. If your area has reliable grid power and you want the fastest ROI, a grid-tied system without batteries is the most cost-effective. Batteries make sense if you have frequent load shedding or want full energy independence.",
    },
    {
        q: "What happens on cloudy or rainy days?",
        a: "Solar panels still generate electricity on overcast days — typically 10–25% of their rated output. Annual production estimates already account for Pakistan's average cloud cover and seasonal variation.",
    },
    {
        q: "What warranty do you offer?",
        a: "We install Tier-1 solar panels with 25-year performance warranties and 10-year product warranties. Inverters carry 5–10 year warranties. GreenLight provides an additional 5-year workmanship warranty on all installations.",
    },
    {
        q: "Do you handle everything, or do I need to manage contractors?",
        a: "We handle everything in-house — site survey, system design, equipment supply, installation, AEDB/NEPRA compliance, DISCO net metering application, and commissioning. You deal with one company from start to finish.",
    },
    {
        q: "Is my roof suitable for solar?",
        a: "Most roofs in Pakistan are suitable. We assess roof orientation, tilt, shading, and structural strength during the free site survey. If there are constraints, we design around them — elevated structures or ground-mounted options are also available.",
    },
];

export default function FAQSection() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section className="bg-cream py-20 px-4">
            <div className="mx-auto max-w-3xl">

                <div className="text-center mb-12">
                    <span className="inline-block bg-gold text-dark text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
                        FAQs
                    </span>
                    <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray text-base font-body leading-relaxed">
                        Everything you need to know before going solar.
                    </p>
                </div>

                <div className="flex flex-col gap-3">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl border border-primary/8 overflow-hidden shadow-sm"
                        >
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                            >
                                <span className="font-heading font-semibold text-primary text-sm sm:text-base leading-snug">
                                    {faq.q}
                                </span>
                                <ChevronDown
                                    size={18}
                                    className={`text-primary/50 shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                                />
                            </button>

                            {open === i && (
                                <div className="px-6 pb-5">
                                    <div className="w-full h-px bg-primary/8 mb-4" />
                                    <p className="text-gray text-sm leading-relaxed font-body">
                                        {faq.a}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

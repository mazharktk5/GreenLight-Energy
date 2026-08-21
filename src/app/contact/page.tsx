"use client";

import Image from "next/image";
import { useState, FormEvent } from "react";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const cities = [
    "Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad",
    "Peshawar", "Quetta", "Multan", "Sialkot", "Gujranwala",
    "Hyderabad", "Sukkur", "Abbottabad", "Bahawalpur", "Other",
];

const socials = [
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
];

const selectClass =
    "w-full bg-transparent border-b border-white/30 text-white/80 text-sm py-3 focus:outline-none focus:border-gold transition-colors placeholder-white/40 appearance-none cursor-pointer [&>option]:text-dark [&>option]:bg-white";

const inputClass =
    "w-full bg-transparent border-b border-white/30 text-white text-sm py-3 focus:outline-none focus:border-gold transition-colors placeholder-white/40";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <main className="bg-cream min-h-screen">
            {/* ── Page header ─────────────────────────────────── */}
            <div className="bg-cream pt-32 pb-8 sm:pt-40 sm:pb-10 px-4 relative overflow-hidden">
                {/* decorative ring top-right */}
                <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-[40px] border-primary/8 pointer-events-none" />
                {/* gold blob bottom-left */}
                <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-gold/8 blur-3xl pointer-events-none" />
                {/* left accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-transparent via-gold/50 to-transparent pointer-events-none" />
                <div className="relative mx-auto max-w-6xl text-center">
                    <span className="inline-block bg-gold text-dark text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 shadow-sm">
                        Get In Touch
                    </span>
                    <h1 className="font-heading font-extrabold text-primary text-3xl sm:text-4xl lg:text-5xl">
                        Ready to Go Solar?<br className="hidden sm:block" />
                        <span className="text-gold"> Let&apos;s Talk.</span>
                    </h1>
                    <div className="w-14 h-0.5 bg-gold rounded-full mx-auto my-5" />
                    <p className="text-gray text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                        Fill in the form and our energy consultants will get back to you within one business day.
                    </p>
                </div>
            </div>

            {/* ── Main content ─────────────────────────────────── */}
            <div className="mx-auto max-w-6xl px-4 pt-8 pb-16 sm:pt-10 sm:pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

                    {/* ── Left sidebar ── */}
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-primary/8 flex flex-col gap-8 lg:sticky lg:top-28 self-start">
                        {/* Brand */}
                        <div className="flex items-center gap-3">
                            <Image
                                src="/final-logo-greenlight.png"
                                alt="GreenLight Energy"
                                width={44}
                                height={44}
                                className="object-contain"
                            />
                            <span className="flex flex-col leading-none">
                                <span className="font-heading font-bold text-sm tracking-wider">
                                    <span className="text-primary">GREEN</span><span className="text-gold">LIGHT</span>
                                </span>
                                <span className="text-primary/40 text-[10px] tracking-[0.2em] uppercase">Energy</span>
                            </span>
                        </div>

                        <div className="w-full h-px bg-primary/10" />

                        {/* Contact details */}
                        <div className="flex flex-col gap-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                    <Mail size={17} className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-primary font-semibold text-sm mb-0.5">Email Us</p>
                                    <a href="mailto:info@greenlightenergy.pk" className="text-gray text-sm hover:text-primary transition-colors">
                                        info@greenlightenergy.pk
                                    </a>
                                    <p className="text-gray/60 text-xs mt-1">We reply within one business day.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                    <Phone size={17} className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-primary font-semibold text-sm mb-0.5">Call Us</p>
                                    <a href="tel:+923001234567" className="text-gray text-sm hover:text-primary transition-colors">
                                        +92 326 8468166
                                    </a>
                                    <p className="text-gray/60 text-xs mt-1">Mon–Sat, 10am to 6pm.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                    <MessageCircle size={17} className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-primary font-semibold text-sm mb-0.5">WhatsApp</p>
                                    <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer" className="text-gray text-sm hover:text-primary transition-colors">
                                        +92 326 8468166
                                    </a>
                                    <p className="text-gray/60 text-xs mt-1">Chat with us directly.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                    <MapPin size={17} className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-primary font-semibold text-sm mb-0.5">Head Office</p>
                                    <p className="text-gray text-sm">Peshawar, Pakistan</p>
                                    <p className="text-gray/60 text-xs mt-1">Serving nationwide.</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-px bg-primary/10" />

                        {/* Socials */}
                        <div>
                            <p className="text-primary/50 text-xs font-semibold tracking-widest uppercase mb-3">Follow Us</p>
                            <div className="flex gap-3">
                                {socials.map(({ icon: Icon, href, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        aria-label={label}
                                        className="w-9 h-9 rounded-full bg-primary/8 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                                    >
                                        <Icon size={14} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── Right form panel ── */}
                    <div className="lg:col-span-2 bg-primary rounded-3xl p-8 sm:p-10 relative overflow-hidden">
                        {/* decorative glows */}
                        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-secondary/30 blur-3xl pointer-events-none" />
                        <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-white/5 blur-2xl pointer-events-none" />

                        {submitted ? (
                            <div className="relative z-10 flex flex-col items-center justify-center text-center py-16">
                                <div className="w-16 h-16 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center mb-5">
                                    <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h2 className="font-heading font-extrabold text-white text-2xl mb-3">Thank You!</h2>
                                <p className="text-white/60 text-sm max-w-sm leading-relaxed">
                                    Your request has been submitted. A GreenLight energy consultant will reach out to you within one business day.
                                </p>
                            </div>
                        ) : (
                            <div className="relative z-10">
                                <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl mb-2">
                                    Ready to Go Solar? Contact Us!
                                </h2>
                                <p className="text-white/55 text-sm mb-8 leading-relaxed">
                                    Complete the form below and our team will contact you shortly to discuss your solar energy needs.
                                </p>

                                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
                                    <div>
                                        <input required placeholder="First Name" className={inputClass} />
                                    </div>
                                    <div>
                                        <input required placeholder="Last Name" className={inputClass} />
                                    </div>
                                    <div>
                                        <input required type="email" placeholder="Email" className={inputClass} />
                                    </div>
                                    <div>
                                        <input required type="tel" placeholder="Phone Number" className={inputClass} />
                                    </div>
                                    <div>
                                        <input placeholder="Company (optional)" className={inputClass} />
                                    </div>
                                    <div>
                                        <select required defaultValue="" className={selectClass}>
                                            <option value="" disabled>City</option>
                                            {cities.map((c) => <option key={c}>{c}</option>)}
                                        </select>
                                    </div>
                                    <div>
                                        <select required defaultValue="" className={selectClass}>
                                            <option value="" disabled>Customer Type</option>
                                            <option>Residential</option>
                                            <option>Commercial</option>
                                            <option>Industrial</option>
                                            <option>Agricultural</option>
                                        </select>
                                    </div>
                                    <div>
                                        <select required defaultValue="" className={selectClass}>
                                            <option value="" disabled>Maximum Monthly Electricity Bill</option>
                                            <option>Below Rs. 5,000</option>
                                            <option>Rs. 5,000 – 15,000</option>
                                            <option>Rs. 15,000 – 30,000</option>
                                            <option>Rs. 30,000 – 60,000</option>
                                            <option>Rs. 60,000 – 1,00,000</option>
                                            <option>Above Rs. 1,00,000</option>
                                        </select>
                                    </div>
                                    <div>
                                        <select required defaultValue="" className={selectClass}>
                                            <option value="" disabled>How many Inverter ACs?</option>
                                            <option>None</option>
                                            <option>1 – 2</option>
                                            <option>3 – 5</option>
                                            <option>6 – 10</option>
                                            <option>More than 10</option>
                                        </select>
                                    </div>
                                    <div>
                                        <select required defaultValue="" className={selectClass}>
                                            <option value="" disabled>Property Size</option>
                                            <option>Below 5 Marla</option>
                                            <option>5 – 10 Marla</option>
                                            <option>10 Marla – 1 Kanal</option>
                                            <option>1 – 2 Kanal</option>
                                            <option>Above 2 Kanal / Commercial</option>
                                        </select>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <select required defaultValue="" className={selectClass}>
                                            <option value="" disabled>Property Type</option>
                                            <option>House</option>
                                            <option>Apartment / Flat</option>
                                            <option>Office</option>
                                            <option>Shop / Retail</option>
                                            <option>Factory / Warehouse</option>
                                            <option>Farm / Agricultural Land</option>
                                            <option>Other</option>
                                        </select>
                                    </div>

                                    <div className="sm:col-span-2 mt-6">
                                        <button
                                            type="submit"
                                            className="w-full py-4 bg-gold text-dark font-heading font-extrabold text-sm tracking-widest uppercase rounded-full hover:brightness-105 transition-all shadow-lg shadow-gold/20"
                                        >
                                            Request a Free Consultation
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </main>
    );
}

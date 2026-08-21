"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MessageCircle, MapPin, Send } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";

const cities = [
    "Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad",
    "Peshawar", "Quetta", "Multan", "Sialkot", "Gujranwala",
    "Hyderabad", "Sukkur", "Abbottabad", "Bahawalpur", "Other",
];

const socials = [
    { icon: FaFacebook, href: "https://web.facebook.com/profile.php?id=61591904770651", label: "Facebook" },
    { icon: FaInstagram, href: "https://www.instagram.com/infogreenlightenergy/", label: "Instagram" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { icon: FaXTwitter, href: "https://x.com/greenlight58", label: "X" },
    { icon: FaTiktok, href: "https://www.tiktok.com/@greenlightenergy26", label: "TikTok" },
];

const selectClass =
    "w-full bg-transparent border-b border-white/30 text-white/80 text-sm py-3 focus:outline-none focus:border-gold transition-colors placeholder-white/40 appearance-none cursor-pointer [&>option]:text-dark [&>option]:bg-white";

const inputClass =
    "w-full bg-transparent border-b border-white/30 text-white text-sm py-3 focus:outline-none focus:border-gold transition-colors placeholder-white/40";

const WHATSAPP_NUMBER = "923268468166";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [emailSending, setEmailSending] = useState(false);
    const [whatsappLoading, setWhatsappLoading] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const getFormData = () => {
        const fd = new FormData(formRef.current!);
        return {
            firstName: fd.get("firstName") as string,
            lastName: fd.get("lastName") as string,
            email: fd.get("email") as string,
            phone: fd.get("phone") as string,
            company: fd.get("company") as string,
            city: fd.get("city") as string,
            customerType: fd.get("customerType") as string,
            monthlyBill: fd.get("monthlyBill") as string,
            inverterACs: fd.get("inverterACs") as string,
            propertySize: fd.get("propertySize") as string,
            propertyType: fd.get("propertyType") as string,
        };
    };

    const handleWhatsApp = () => {
        if (!formRef.current?.reportValidity()) return;
        const d = getFormData();
        const msg = [
            "Hello GreenLight Energy! 👋",
            "",
            "*New Website Inquiry*",
            "",
            `*Name:* ${d.firstName} ${d.lastName}`,
            `*Email:* ${d.email}`,
            `*Phone:* ${d.phone}`,
            `*Company:* ${d.company || "—"}`,
            `*City:* ${d.city}`,
            `*Customer Type:* ${d.customerType}`,
            `*Monthly Bill:* ${d.monthlyBill}`,
            `*Inverter ACs:* ${d.inverterACs}`,
            `*Property Size:* ${d.propertySize}`,
            `*Property Type:* ${d.propertyType}`,
        ].join("\n");

        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");

        // Don't hide the form for WhatsApp, just give button feedback
        setWhatsappLoading(true);
        setTimeout(() => setWhatsappLoading(false), 3000);
    };

    const handleEmail = async () => {
        if (!formRef.current?.reportValidity()) return;
        setEmailSending(true);
        const d = getFormData();
        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                { ...d, name: `${d.firstName} ${d.lastName}` },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );
            setSubmitted(true);
            formRef.current?.reset(); // Clear the form so it's fresh if they go back
        } catch {
            alert("Email failed to send. Please use WhatsApp or call us directly.");
        } finally {
            setEmailSending(false);
        }
    };

    return (
        <main className="bg-cream min-h-screen">
            {/* ── Page header ─────────────────────────────────── */}
            <div className="bg-cream pt-32 pb-8 sm:pt-40 sm:pb-10 px-4 relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-40 border-primary/8 pointer-events-none" />
                <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-gold/8 blur-3xl pointer-events-none" />
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
                                    <p className="text-gray text-sm leading-relaxed">
                                        Office# 04, First Floor,<br />
                                        Al Syed Tower, Nasir Bagh Road,<br />
                                        Peshawar, Pakistan
                                    </p>
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
                    <div className="lg:col-span-2 bg-dark-footer rounded-3xl p-8 sm:p-10 relative overflow-hidden flex flex-col min-h-125">
                        {/* decorative glows */}
                        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-secondary/30 blur-3xl pointer-events-none" />
                        <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-white/5 blur-2xl pointer-events-none" />

                        {submitted ? (
                            <div className="relative z-10 flex flex-col items-center justify-center text-center flex-1 py-10 px-4">
                                <div className="w-20 h-20 rounded-full bg-linear-to-tr from-gold/20 to-gold/5 border border-gold/30 flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(212,175,55,0.15)]">
                                    <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h2 className="font-heading font-extrabold text-white text-3xl mb-4">Request Received</h2>
                                <p className="text-white/60 text-base max-w-md leading-relaxed mb-10">
                                    Thank you for reaching out! A GreenLight energy consultant will review your details and contact you within one business day.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => setSubmitted(false)}
                                    className="text-gold text-sm font-bold tracking-widest uppercase hover:text-white transition-colors border-b border-gold/30 hover:border-white pb-1"
                                >
                                    Submit Another Inquiry
                                </button>
                            </div>
                        ) : (
                            <div className="relative z-10 flex flex-col flex-1">
                                <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl mb-2">
                                    Ready to Go Solar? Contact Us!
                                </h2>
                                <p className="text-white/55 text-sm mb-8 leading-relaxed">
                                    Complete the form below and our team will contact you shortly to discuss your solar energy needs.
                                </p>

                                <form ref={formRef} onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 mb-8" noValidate>
                                    <div>
                                        <input required name="firstName" placeholder="First Name" className={inputClass} />
                                    </div>
                                    <div>
                                        <input required name="lastName" placeholder="Last Name" className={inputClass} />
                                    </div>
                                    <div>
                                        <input required name="email" type="email" placeholder="Email" className={inputClass} />
                                    </div>
                                    <div>
                                        <input required name="phone" type="tel" placeholder="Phone Number" className={inputClass} />
                                    </div>
                                    <div>
                                        <input name="company" placeholder="Company (optional)" className={inputClass} />
                                    </div>
                                    <div>
                                        <select required name="city" defaultValue="" className={selectClass}>
                                            <option value="" disabled>City</option>
                                            {cities.map((c) => <option key={c}>{c}</option>)}
                                        </select>
                                    </div>
                                    <div>
                                        <select required name="customerType" defaultValue="" className={selectClass}>
                                            <option value="" disabled>Customer Type</option>
                                            <option>Residential</option>
                                            <option>Commercial</option>
                                            <option>Industrial</option>
                                            <option>Agricultural</option>
                                        </select>
                                    </div>
                                    <div>
                                        <select required name="monthlyBill" defaultValue="" className={selectClass}>
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
                                        <select required name="inverterACs" defaultValue="" className={selectClass}>
                                            <option value="" disabled>How many Inverter ACs?</option>
                                            <option>None</option>
                                            <option>1 – 2</option>
                                            <option>3 – 5</option>
                                            <option>6 – 10</option>
                                            <option>More than 10</option>
                                        </select>
                                    </div>
                                    <div>
                                        <select required name="propertySize" defaultValue="" className={selectClass}>
                                            <option value="" disabled>Property Size</option>
                                            <option>Below 5 Marla</option>
                                            <option>5 – 10 Marla</option>
                                            <option>10 Marla – 1 Kanal</option>
                                            <option>1 – 2 Kanal</option>
                                            <option>Above 2 Kanal / Commercial</option>
                                        </select>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <select required name="propertyType" defaultValue="" className={selectClass}>
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
                                </form>

                                {/* Send actions pinned to card bottom */}
                                <div className="mt-auto pt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <button
                                        type="button"
                                        onClick={handleWhatsApp}
                                        className="flex items-center justify-center gap-2.5 py-4 bg-[#25D366] text-white font-heading font-extrabold text-sm tracking-widest uppercase rounded-full hover:brightness-110 transition-all shadow-lg"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.862L.057 23.882a.5.5 0 00.61.61l6.02-1.475A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.031-1.384l-.36-.214-3.733.915.931-3.733-.235-.374A9.818 9.818 0 1112 21.818z" />
                                        </svg>
                                        {whatsappLoading ? "Opening WhatsApp..." : "Send via WhatsApp"}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleEmail}
                                        disabled={emailSending}
                                        className="flex items-center justify-center gap-2.5 py-4 bg-gold text-dark font-heading font-extrabold text-sm tracking-widest uppercase rounded-full hover:brightness-105 transition-all shadow-lg shadow-gold/20 disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        <Send size={15} className="shrink-0" />
                                        {emailSending ? "Sending…" : "Send via Email"}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </main>

    );
}
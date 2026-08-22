"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Pakistan averages (2024 estimates)
const AVG_TARIFF = 45;          // Rs. per kWh (blended residential)
const KWH_PER_KW_MONTH = 120;   // kWh a 1kW system generates per month in Pakistan
const COST_PER_KW = 185000;     // PKR installed cost per kW
const BILL_REDUCTION = 0.82;    // ~82% bill offset with net metering
const CO2_PER_KW_YEAR = 1.3;    // tonnes CO2 saved per kW per year

function calcResults(monthlyBill: number) {
    const monthlyUnits = monthlyBill / AVG_TARIFF;
    const systemKw = Math.max(3, Math.ceil(monthlyUnits / KWH_PER_KW_MONTH));
    const estimatedCost = systemKw * COST_PER_KW;
    const annualSavings = monthlyBill * 12 * BILL_REDUCTION;
    const payback = estimatedCost / annualSavings;
    const co2Year = systemKw * CO2_PER_KW_YEAR;
    return { systemKw, estimatedCost, annualSavings, payback, co2Year };
}

const BILL_PRESETS = [5000, 10000, 20000, 40000, 80000, 150000];

export default function SavingsCalculator() {
    const [bill, setBill] = useState(15000);
    const [inputVal, setInputVal] = useState("15000");

    const handleInput = (val: string) => {
        setInputVal(val);
        const n = parseInt(val.replace(/,/g, ""), 10);
        if (!isNaN(n) && n > 0) setBill(Math.min(n, 500000));
    };

    const r = calcResults(bill);

    return (
        <section className="bg-white py-20 px-4">
            <div className="mx-auto max-w-6xl">

                <div className="text-center mb-12">
                    <span className="inline-block bg-gold text-dark text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
                        Savings Calculator
                    </span>
                    <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
                        How Much Could You Save?
                    </h2>
                    <p className="text-gray text-base max-w-xl mx-auto font-body leading-relaxed">
                        Enter your monthly electricity bill and see your estimated solar savings instantly.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                    {/* Input side */}
                    <div className="bg-cream rounded-3xl p-8">
                        <p className="text-primary font-semibold text-sm mb-2 font-heading">
                            Monthly Electricity Bill (PKR)
                        </p>

                        {/* Manual input */}
                        <div className="flex items-center gap-2 mb-5">
                            <span className="text-gray text-sm font-body">Rs.</span>
                            <input
                                type="number"
                                value={inputVal}
                                onChange={(e) => handleInput(e.target.value)}
                                min={1000}
                                max={500000}
                                className="flex-1 bg-white border border-primary/20 rounded-xl px-4 py-3 text-primary font-heading font-bold text-xl focus:outline-none focus:border-primary transition-colors"
                            />
                        </div>

                        {/* Slider */}
                        <input
                            type="range"
                            min={1000}
                            max={200000}
                            step={1000}
                            value={Math.min(bill, 200000)}
                            onChange={(e) => {
                                const v = parseInt(e.target.value);
                                setBill(v);
                                setInputVal(String(v));
                            }}
                            className="w-full accent-primary mb-6 cursor-pointer"
                        />

                        {/* Quick presets */}
                        <p className="text-gray/60 text-xs font-body mb-3 uppercase tracking-widest">Quick select</p>
                        <div className="flex flex-wrap gap-2">
                            {BILL_PRESETS.map((p) => (
                                <button
                                    key={p}
                                    onClick={() => { setBill(p); setInputVal(String(p)); }}
                                    className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-150 ${bill === p
                                        ? "bg-primary text-white border-primary"
                                        : "bg-white text-primary border-primary/20 hover:border-primary"
                                        }`}
                                >
                                    Rs. {p.toLocaleString()}
                                </button>
                            ))}
                        </div>

                        <p className="text-gray/50 text-xs font-body mt-5 leading-relaxed">
                            * Estimates based on Pakistan average tariffs and 4–5 peak sun hours/day.
                            Actual results vary by location, load profile, and equipment.
                        </p>
                    </div>

                    {/* Results side */}
                    <div className="flex flex-col gap-4">

                        {/* Top 2 large cards */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-primary rounded-2xl p-6 text-center">
                                <p className="text-white/60 text-xs font-body uppercase tracking-widest mb-2">System Size</p>
                                <p className="font-heading font-extrabold text-white text-3xl">{r.systemKw} kW</p>
                                <p className="text-white/50 text-xs font-body mt-1">recommended</p>
                            </div>
                            <div className="bg-gold rounded-2xl p-6 text-center">
                                <p className="text-dark/60 text-xs font-body uppercase tracking-widest mb-2">Payback Period</p>
                                <p className="font-heading font-extrabold text-dark text-3xl">{r.payback.toFixed(1)} yrs</p>
                                <p className="text-dark/50 text-xs font-body mt-1">estimated</p>
                            </div>
                        </div>

                        {/* Savings + cost */}
                        <div className="bg-[#EFF6F1] rounded-2xl p-6 grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-gray text-xs font-body uppercase tracking-widest mb-1">Annual Savings</p>
                                <p className="font-heading font-bold text-primary text-2xl">
                                    Rs. {Math.round(r.annualSavings / 1000)}k
                                </p>
                                <p className="text-gray/60 text-xs font-body mt-0.5">per year</p>
                            </div>
                            <div>
                                <p className="text-gray text-xs font-body uppercase tracking-widest mb-1">Est. System Cost</p>
                                <p className="font-heading font-bold text-primary text-2xl">
                                    Rs. {(r.estimatedCost / 1000000).toFixed(1)}M
                                </p>
                                <p className="text-gray/60 text-xs font-body mt-0.5">installed</p>
                            </div>
                        </div>

                        {/* CO2 */}
                        <div className="bg-white border border-primary/10 rounded-2xl px-6 py-4 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-[#EFF6F1] flex items-center justify-center shrink-0">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 text-primary">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1M4.22 4.22l.707.707m12.02 12.02.708.708M3 12h1m16 0h1M4.22 19.78l.707-.707M18.364 5.636l.707-.707M12 7a5 5 0 100 10A5 5 0 0012 7z" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-heading font-bold text-primary text-sm">
                                    {r.co2Year.toFixed(1)} tonnes CO₂ saved/year
                                </p>
                                <p className="text-gray text-xs font-body">equivalent to planting ~{Math.round(r.co2Year * 45)} trees</p>
                            </div>
                        </div>

                        <Link
                            href="/contact"
                            className="flex items-center justify-center gap-2 py-4 rounded-full bg-primary text-white font-heading font-extrabold text-sm tracking-widest uppercase hover:bg-secondary transition-all shadow-md"
                        >
                            Get My Free Quote
                            <ArrowRight size={15} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

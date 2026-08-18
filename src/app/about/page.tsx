import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import OurValues from "@/components/about/OurValues";
import LeadershipTeam from "@/components/about/LeadershipTeam";
import NationalPresence from "@/components/about/NationalPresence";
import AboutCTA from "@/components/about/AboutCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | GreenLight Energy",
    description:
        "Learn about GreenLight Energy — Pakistan's trusted solar partner. Our mission, values, leadership team, and nationwide presence.",
};

export default function AboutPage() {
    return (
        <main>
            <AboutHero />
            <WhoWeAre />
            <OurValues />
            <LeadershipTeam />
            <NationalPresence />
            <AboutCTA />
        </main>
    );
}

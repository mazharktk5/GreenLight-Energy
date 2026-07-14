// import HeroSectionV2 from "@/components/home/HeroSectionV2";
import HeroSection from "@/components/home/HeroSection";   // ← original split layout
import HeroSectionV2 from "@/components/home/HeroSectionV2";
import AboutSection from "@/components/home/AboutSection";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 w-full">
      <HeroSectionV2 />
      {/* <HeroSection /> */}
      <AboutSection />
    </main>
  );
}

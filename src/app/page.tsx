import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import ServicesSection from "@/components/home/ServicesSection";
import SavingsCalculator from "@/components/home/SavingsCalculator";
import WhyUsSection from "@/components/home/WhyUsSection";
import FAQSection from "@/components/home/FAQSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HowItWorks />
      <ServicesSection />
      <SavingsCalculator />
      <WhyUsSection />
      <FAQSection />
    </main>
  );
}

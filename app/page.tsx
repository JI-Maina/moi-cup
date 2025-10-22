import AboutSection from "@/components/landing/about-section";
import CallToAction from "@/components/landing/cta-section";
import FAQSection from "@/components/landing/faqs-section";
import HeroSection from "@/components/landing/hero-section";
import PartnersSection from "@/components/landing/partners-section";
import TournamentSection from "@/components/landing/tournament-section";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <AboutSection />
      <TournamentSection />
      <FAQSection />
      <CallToAction />
      <PartnersSection />
    </main>
  );
}

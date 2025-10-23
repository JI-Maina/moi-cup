import { RulesTable } from "./rules";
import { TeamRegSection } from "./reg-section";
import { FormatSection } from "./format-section";
import { VettingSection } from "./vetting-section";
import { GuidelinesHeroSection } from "./hero-section";
import { PitchSpecificationTable } from "./pitch-table";
import CallToAction from "@/components/landing/cta-section";
import { DownloadRegForms } from "@/components/download-forms";

const GuidelinesPage = () => {
  return (
    <main className="bg-[#0B1E4A]/95 pitch-lines">
      <GuidelinesHeroSection />

      <TeamRegSection />

      <VettingSection />

      <CallToAction />

      <FormatSection />

      <DownloadRegForms />

      <section className="px-4 pb-10 md:px-8">
        <RulesTable />

        <PitchSpecificationTable />
      </section>
    </main>
  );
};

export default GuidelinesPage;

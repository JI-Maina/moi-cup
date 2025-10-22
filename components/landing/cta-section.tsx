import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("/playerBoysImg.jpeg")` }}
      />

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-[#0B1E4A]/85" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Join MOI CUP 2025?
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Register your team now and be part of Kenya's premier youth football
          tournament. Limited slots available!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://moicup.aidaform.com/tournamentregistrationform"
          >
            <Button
              size="lg"
              className="bg-[#F58220] border-2 hover:bg-[#0B1E4A] text-white font-semibold text-lg px-8 py-6"
            >
              Register Your Team
              <ArrowRight className="ml-2" />
            </Button>
          </a>

          <a
            href="/brochure-moi-cup-2025.pdf"
            download="MOI-CUP-2025-Brochure.pdf"
            className="inline-block"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white hover:bg-[#F58220] font-semibold text-lg px-8 py-6"
            >
              Download Brochure
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

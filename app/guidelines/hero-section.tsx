import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export const GuidelinesHeroSection = () => {
  return (
    <section className="relative h-[500px] md:h-[600px]">
      <Image
        fill
        src={"/guidelines-hero.jpeg"}
        alt="Partners and Sponsors"
        className="w-full h-full object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1E4A]/95 via-[#0B1E4A]/80 to-[#0B1E4A]/60" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Tournament Guidelines
          </h1>
          <p className="text-xl md:text-2xl text-[#CCCCCC] font-semibold mb-4">
            Moi Cup 2025
          </p>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://moicup.aidaform.com/tournamentregistrationform"
          >
            <Button
              size="lg"
              className="bg-[#F58220] mt-4 border-2 hover:bg-[#0B1E4A] text-white font-semibold text-lg px-8 py-6"
            >
              Register Your Team
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

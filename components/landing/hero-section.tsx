import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "../ui/button";
import { CountdownTimer } from "./count-down";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      >
        {/* Dark Navy Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1E4A]/95 via-[#0B1E4A]/80 to-[#0B1E4A]/60"></div>
      </div>

      {/* Content Container - Increased top padding to push everything down */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 lg:pt-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content - Added more top padding */}
          <div className="text-left space-y-8 mb-20">
            <div>
              <h1 className="text-6xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-none font-montserrat">
                Moi Cup
              </h1>
              <div className="h-2 w-32 bg-[#F58220] mt-4 mb-6"></div>
            </div>

            {/* Date & Location */}
            <div className="space-y-4">
              <p className="text-2xl md:text-3xl font-bold text-[#F58220] tracking-widest font-montserrat">
                11TH - 13TH NOVEMBER 2025
              </p>
              <p className="text-xl md:text-2xl font-semibold text-white font-montserrat">
                ULINZI SPORTS COMPLEX - NAIROBI
              </p>
            </div>

            {/* Countdown Timer */}
            <CountdownTimer />

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https:moicup.aidaform.com/tournamentregistrationform"
              >
                <Button
                  size="lg"
                  className="px-8 py-3 text-lg font-bold bg-[#F58220] hover:bg-white text-white hover:text-[#0B1E4A] transition-all duration-300 shadow-lg hover:shadow-xl font-montserrat"
                >
                  Register Now
                </Button>
              </a>

              <Link href={"/guidelines"}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-[#0B1E4A] hover:bg-[#F58220] font-montserrat"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Side - Football Player Image - Adjusted positioning */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg xl:max-w-2xl h-[80vh] lg:h-[110vh] mt-8 lg:mt-12">
              <Image
                src="/hero-img.png"
                alt="Football Player"
                fill
                className="rounded-2xl object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

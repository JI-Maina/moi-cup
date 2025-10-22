import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

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

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-left space-y-8">
            {/* Main Title */}
            <div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight leading-none">
                Moi Cup
              </h1>
              <div className="h-2 w-32 bg-[#F58220] mt-4 mb-6"></div>
            </div>

            {/* Date & Location */}
            <div className="space-y-4">
              <p className="text-2xl md:text-3xl font-bold text-[#F58220] tracking-widest">
                11TH - 13TH NOVEMBER 2025
              </p>
              <p className="text-xl md:text-2xl font-semibold text-white">
                ULINZI SPORTS COMPLEX - NAIROBI
              </p>
            </div>

            {/* Mission Statement */}
            <div className="space-y-4">
              <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-2xl">
                Empowering Youth, Showcasing Talent, Celebrating Football,
                Promoting Fair Play, Building Character, Inspiring Dreams,
                Shaping Future Champions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://moicup.aidaform.com/tournamentregistrationform"
              >
                <Button
                  size="lg"
                  className="px-8 py-3 text-lg font-bold bg-[#F58220] hover:bg-white text-white hover:text-[#0B1E4A] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Register Now
                </Button>
              </a>

              <Link href={"/guidelines"}>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Side - Football Player Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg h-[50vh] lg:h-[80vh]">
              <Image
                src="/hero-player.png"
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

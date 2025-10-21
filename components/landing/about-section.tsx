import React from "react";

// Assuming you have defined the following custom utility classes in your global.css/tailwind.config:
// 1. .football-pattern: For the subtle pitch/texture background.
// 2. .hover-lift: For the slight elevation/shadow effect on hover.

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-20 bg-[--midnight-blue] overflow-hidden"
    >
      {/* Background Pattern (Needs definition in global.css to work) */}
      <div className="absolute inset-0 football-pattern opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[--white] mb-4 font-[--font-montserrat]">
            About MOI CUP 2025
          </h2>
          {/* Divider using Bright Orange */}
          <div className="w-24 h-1 bg-[--bright-orange] mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-[--steel-grey] max-w-3xl mx-auto font-[--font-lato]">
            East Africa&apos;s Premier Youth Football Tournament - Building
            Future Football Leaders
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-16">
          {/* Mission Card (Midnight Blue Gradient) */}
          <div className="bg-gradient-to-br from-[--midnight-blue] via-[--midnight-blue] to-[#1a3875] p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-[--white]/10 hover:scale-[1.01] hover-lift">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[--bright-orange] rounded-full flex items-center justify-center mr-4">
                {/* Custom Icon for Mission */}
                <svg
                  className="w-6 h-6 text-[--white]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[--white] font-[--font-montserrat]">
                Our Mission
              </h3>
            </div>
            <p className="text-[--steel-grey] text-lg leading-relaxed font-[--font-lato]">
              To become the leading youth football tournament in East Africa by
              nurturing talent, promoting integrity, and building future
              football leaders.
            </p>
          </div>

          {/* Vision Card (Bright Orange Gradient - High Contrast) */}
          <div className="bg-gradient-to-br from-[--bright-orange] to-orange-600 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.01] hover-lift">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[--white] rounded-full flex items-center justify-center mr-4">
                {/* Custom Icon for Vision */}
                <svg
                  className="w-6 h-6 text-[--bright-orange]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[--white] font-[--font-montserrat]">
                Our Vision
              </h3>
            </div>
            <p className="text-[--white]/90 text-lg leading-relaxed font-[--font-lato]">
              To offer a safe, competitive, and well-organized football platform
              where young players can showcase their skills, build character,
              and develop through structured competition.
            </p>
          </div>
        </div>

        {/* Objectives Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-[--white] mb-12 font-[--font-montserrat]">
            Tournament Objectives
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="bg-[--white]/5 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-[--white]/10 group hover:scale-[1.03] transition-all duration-300 hover:border-[--bright-orange] hover-lift"
              >
                {/* Number Circle (Orange/White Inversion on Hover) */}
                <div className="w-10 h-10 bg-[--bright-orange] rounded-full flex items-center justify-center mb-4 group-hover:bg-[--white] transition-colors duration-300">
                  <span className="text-[--white] font-bold text-sm group-hover:text-[--bright-orange] font-[--font-montserrat]">
                    {index + 1}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[--white] mb-3 font-[--font-montserrat]">
                  {objective.title}
                </h4>
                <p className="text-[--steel-grey] text-sm leading-relaxed font-[--font-lato]">
                  {objective.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const objectives = [
  {
    title: "Promote Fair Play",
    description:
      "Encourage sportsmanship, respect, and ethical competition among all participants and teams.",
  },
  {
    title: "Nurture Talent",
    description:
      "Identify and develop promising young footballers through professional coaching and competition.",
  },
  {
    title: "Create Opportunities",
    description:
      "Provide networking and exposure platforms for young players and football academies across East Africa.",
  },
  {
    title: "Ensure Integrity",
    description:
      "Enforce strict anti-age-cheating policies and comprehensive safeguarding measures for all participants.",
  },
];

export default AboutSection;

import Image from "next/image";
import { Phone, Mail, Users, Target, Award } from "lucide-react";

import { Button } from "@/components/ui/button";

const partners = [
  {
    id: 1,
    name: "Kenya Wildlife Service (KWS)",
    role: "Conservation & Experience Partner",
    logo: "/kws-logo.png",
    description: [
      "Engagement Stand → quizzes, mascot, instant prizes.",
      "Awards → Family accommodation at a KWS Park for MVP Male & MVP Female.",
      "Merchandise → Branded kits for 15 players (one team).",
      "KWS Conservation Trophy → Special award to a team demonstrating conservation, fair play & community values.",
    ],
    positioning: "Protecting nature, inspiring players.",
    category: "strategic",
  },
  {
    id: 2,
    name: "Kenya Dairy Board (KDB)",
    role: "Nutrition Partner",
    logo: "/kdb-logo.webp",
    description: [
      "Free milk for participants on specific tournament days.",
      "Supports player energy, growth & wellness.",
      "Activation: 'Milk Moments' with photos & reels.",
    ],
    positioning: "Strong bones, strong goals.",
    category: "supporting",
  },
  {
    id: 3,
    name: "Jubilee Insurance & Liaison Group",
    role: "Safety & Protection Partners",
    logo: "/partner-jubilee.jpg",
    description: [
      "Insurance conversation for players and tournament participants.",
      "Visibility via Engagement points.",
      "Activation: 'Insuring the stars of tomorrow.'",
    ],
    positioning: "Protecting dreams, safeguarding futures.",
    category: "strategic",
  },
  {
    id: 4,
    name: "Bellerouze Outfitters",
    role: "Kit & Gear Partner",
    logo: "/bellerouze-logo.jpeg",
    description: [
      "Providing player tags for all categories.",
      "Donation of soccer boots to MEC Soccer Academy.",
    ],
    positioning: "Equipping players, elevating the game.",
    category: "supporting",
  },
  {
    id: 5,
    name: "M & E Sports",
    role: "Apparel Partner",
    logo: "/partner-mesports.jpg",
    description: [
      "Providing t-shirts to kit tournament staff.",
      "Enhances professionalism & brand presence on-ground.",
    ],
    positioning: "Dressing the team behind the game.",
    category: "supporting",
  },
  {
    id: 6,
    name: "Moi Education Centre (MEC)",
    role: "Host Institution",
    logo: "/mec-logo.png",
    description: [
      "Hosting and organizing Moi Cup through MEC Soccer Academy.",
      "Providing facilities, coordination & team mobilization.",
    ],
    positioning: "Empowering youth through education and sport.",
    category: "foundation",
  },
  {
    id: 7,
    name: "Football Kenya Federation (FKF)",
    role: "Governing Partner",
    logo: "/FKF-Logo.webp",
    description: [
      "Official affiliation & approval from FKF Nairobi West Branch.",
      "Ensures tournament is played under FKF rules & accredited officials.",
    ],
    positioning: "Sanctioned & supported by the home of Kenyan football.",
    category: "governing",
  },
];

const PartnersPage = () => {
  const strategicPartners = partners.filter(
    (partner) => partner.category === "strategic"
  );
  const supportingPartners = partners.filter(
    (partner) => partner.category === "supporting"
  );
  const foundationPartners = partners.filter(
    (partner) =>
      partner.category === "foundation" || partner.category === "governing"
  );

  return (
    <section className="bg-[#0B1E4A]/95">
      {/* Hero Section */}
      <div className="relative h-[500px] md:h-[600px]">
        <Image
          fill
          src={"/partners-hero.jpg"}
          alt="Partners and Sponsors"
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1E4A]/95 via-[#0B1E4A]/80 to-[#0B1E4A]/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Partners & Sponsors
            </h1>
            <p className="text-xl md:text-2xl text-[#CCCCCC] font-semibold mb-4">
              Moi Cup 2025
            </p>
            <p className="text-xl md:text-2xl text-[#F58220] font-semibold">
              Play • Conserve • Connect
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Together We Make a Difference
            </h2>
            <p className="text-lg text-[#CCCCCC] leading-relaxed">
              Moi Cup brings together visionary organizations committed to youth
              development, sports excellence, and community impact. Our partners
              play a crucial role in creating unforgettable experiences for
              young athletes while promoting important values and causes.
            </p>
          </div>
        </div>
      </div>

      {/* Strategic Partners */}
      <div className="py-16 bg-muted/30 dark:bg-midnight-blue/50 pitch-lines">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-bright-orange rounded-full mb-4">
              <Award color="#F58220" className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-midnight-blue dark:text-white mb-4">
              Strategic Partners
            </h2>
            <p className="text-lg text-midnight-blue/80 dark:text-steel-grey max-w-2xl mx-auto">
              Our core partners driving the tournament's vision and impact
            </p>
          </div>

          <div className="grid gap-8 max-w-6xl mx-auto">
            {strategicPartners.map((partner) => (
              <PartnerCard key={partner.id} partner={partner} />
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section - Middle */}
      <div className="py-20 bg-gradient-to-br from-midnight-blue to-midnight-blue/90 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 football-pattern opacity-10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Winning Team
            </h2>
            <p className="text-xl text-[#CCCCCC] mb-12 max-w-2xl mx-auto">
              Partner with Moi Cup 2025 and create lasting impact in youth
              football development
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-bright-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target color="#F58220" className="w-8 h-8" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  Brand Visibility
                </h3>
                <p className="text-[#CCCCCC] text-sm">
                  Reach thousands of participants, families, and football
                  enthusiasts
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-bright-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users color="#F58220" className="w-8 h-8" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  Community Impact
                </h3>
                <p className="text-[#CCCCCC] text-sm">
                  Support youth development and sports excellence in East Africa
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-bright-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award color="#F58220" className="w-8 h-8" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  Exclusive Benefits
                </h3>
                <p className="text-[#CCCCCC] text-sm">
                  Customized partnership packages with unique activation
                  opportunities
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Get in Touch
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="flex flex-col items-center text-center">
                  <Phone color="#F58220" className="w-6 h-6 mb-2" />
                  <a
                    href="tel:+254728111564"
                    className="text-[#CCCCCC] hover:text-bright-orange transition-colors"
                  >
                    +254-728-111-564
                  </a>
                </div>

                <div className="flex flex-col items-center text-center">
                  <Phone color="#F58220" className="w-6 h-6 mb-2" />
                  <a
                    href="tel:+254721483309"
                    className="text-[#CCCCCC] hover:text-bright-orange transition-colors"
                  >
                    +254-721-483-309
                  </a>
                </div>

                <div className="flex flex-col items-center text-center">
                  <Phone color="#F58220" className="w-6 h-6 mb-2" />
                  <a
                    href="tel:+254727901488"
                    className="text-[#CCCCCC] hover:text-bright-orange transition-colors"
                  >
                    +254-727-901-488
                  </a>
                </div>

                <div className="flex flex-col items-center text-center">
                  <Mail color="#F58220" className="w-6 h-6 mb-2" />
                  <a
                    href="mailto:info@moicup.com"
                    className="text-[#CCCCCC] hover:text-bright-orange transition-colors text-sm"
                  >
                    info@moicup.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/brochure-moi-cup-2025.pdf"
                  download="MOI-CUP-2025-Brochure.pdf"
                  className="inline-block"
                >
                  <Button
                    size="lg"
                    className="bg-[#F58220]  hover:bg-[#0B1E4A] text-white font-semibold text-lg px-8 py-6"
                  >
                    Download Brochure
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Supporting Partners */}
      <div className="py-16 bg-muted/30 dark:bg-midnight-blue pitch-lines">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-midnight-blue dark:text-white mb-4">
              Supporting Partners
            </h2>
            <p className="text-lg text-midnight-blue/80 dark:text-steel-grey max-w-2xl mx-auto">
              Valued partners providing essential support and services
            </p>
          </div>

          <div className="grid gap-8 max-w-6xl mx-auto">
            {supportingPartners.map((partner) => (
              <PartnerCard key={partner.id} partner={partner} />
            ))}
          </div>
        </div>
      </div>

      {/* Foundation & Governing Partners */}
      <div className="py-16 bg-muted/30 dark:bg-midnight-blue/50 pitch-lines">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-midnight-blue dark:text-white mb-4">
              Foundation & Governing Partners
            </h2>
            <p className="text-lg text-midnight-blue/80 dark:text-steel-grey max-w-2xl mx-auto">
              The pillars that make Moi Cup possible
            </p>
          </div>

          <div className="grid gap-8 max-w-6xl mx-auto">
            {foundationPartners.map((partner) => (
              <PartnerCard key={partner.id} partner={partner} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable Partner Card Component
const PartnerCard = ({ partner }: { partner: any }) => (
  <div className="bg-[#0B1E4A]/90 dark:bg-[#0B1E4A] border border-[#CCCCCC] dark:border-[#1E3A8A] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover-lift group">
    <div className="flex flex-col md:flex-row gap-8 items-start">
      {/* Logo Container */}
      <div className="flex items-center justify-center bg-gray-50 dark:bg-[#0F2A5C] rounded-xl p-6 w-full md:w-[200px] h-[180px] group-hover:bg-gray-100 dark:group-hover:bg-[#0F2A5C] transition-colors border border-[#CCCCCC] dark:border-[#1E3A8A] flex-shrink-0">
        <div className="relative w-full h-full">
          <Image
            src={partner.logo}
            alt={partner.name}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        {/* Partner Name */}
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#F58220] transition-colors font-montserrat">
          {partner.name}
        </h3>

        {/* Partner Role */}
        <p className="text-lg text-[#F58220] font-semibold mb-4 font-montserrat">
          {partner.role}
        </p>

        {/* Description List */}
        <ul className="space-y-3 mb-6">
          {partner.description.map((item: string, index: number) => (
            <li
              key={index}
              className="text-[#CCCCCC] flex items-start font-lato"
            >
              <div className="w-2 h-2 bg-[#F58220] rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Positioning Statement */}
        <p className="text-[#CCCCCC] font-semibold italic border-l-4 border-[#F58220] pl-4 py-1 font-lato">
          "{partner.positioning}"
        </p>
      </div>
    </div>
  </div>
);

export default PartnersPage;

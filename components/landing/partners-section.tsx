import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

const sponsors = [
  { id: 1, name: "Bellerouze Outfitters", image: "/bellerouze-logo.jpeg" },
  { id: 2, name: "Jubilee Insurance", image: "/jubeee-logo.png" },
  { id: 3, name: "Kenya Dairy Board (KDB)", image: "/kdb-logo.webp" },
  { id: 4, name: "Kenya Wildlife Service (KWS)", image: "/kws-logo.png" },
  { id: 5, name: "Moi Education Centre (MEC)", image: "/mec-logo.png" },
];

const PartnersSection = () => {
  return (
    <section className="py-20 bg-[#0B1E4A]/95 pitch-lines">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Partners & Sponsors
          </h2>
          <p className="text-lg text-[#CCCCCC] max-w-2xl mx-auto">
            We're proud to partner with leading organizations who share our
            commitment to developing youth football in Kenya
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {sponsors.map((sponsor) => (
                <CarouselItem
                  key={sponsor.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-4">
                    <div className="bg-card border border-border rounded-lg p-8 flex items-center justify-center h-40 hover:shadow-lg transition-shadow">
                      <img
                        src={sponsor.image}
                        alt={sponsor.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        <div className="text-center">
          <Link href={"/partners"}>
            <Button
              size="lg"
              className="bg-[#F58220] border-2 hover:bg-[#0B1E4A] text-white font-semibold text-lg px-8 py-6"
            >
              Become a Sponsor
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

import { FC } from "react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Award } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Category = { ageGroup: string; bornAfter: string };

const boysCategories: Category[] = [
  { ageGroup: "Under 7", bornAfter: "Born on or after January 1, 2018" },
  { ageGroup: "Under 9", bornAfter: "Born on or after January 1, 2016" },
  { ageGroup: "Under 11", bornAfter: "Born on or after January 1, 2014" },
  { ageGroup: "Under 13", bornAfter: "Born on or after January 1, 2012" },
  { ageGroup: "Under 15", bornAfter: "Born on or after January 1, 2010" },
  { ageGroup: "Under 17", bornAfter: "Born on or after January 1, 2008" },
];

const girlsCategories: Category[] = [
  { ageGroup: "Under 13", bornAfter: "Born on or after January 1, 2012" },
  { ageGroup: "Under 15", bornAfter: "Born on or after January 1, 2010" },
];

const individualAwards = [
  "Top Scorer",
  "Best Goalkeeper",
  "Most Valuable Player (MVP)",
];

const TournamentSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-[#0B1E4A]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4 bg-[#F58220] text-white border-none">
            <Trophy className="w-4 h-4 mr-2 inline" />
            Tournament Structure
          </Badge>
          <h2 className="text-4xl md:text-5xl text-white font-extrabold mb-4 font-montserrat">
            Age Categories
          </h2>
          <p className="text-lg text-[#CCCCCC] max-w-2xl mx-auto font-lato">
            MOI CUP 2025 welcomes young footballers across multiple age groups
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Boys Categories */}
          <CategoryCard
            gender={"Boys"}
            categories={boysCategories}
            bgImg={"/playerBoysImg.jpeg"}
          />

          {/* Girls Categories */}
          <CategoryCard
            gender={"Girls"}
            categories={girlsCategories}
            bgImg={"/playerGirlsImg.jpeg"}
          />
        </div>

        {/* Individual Awards Section */}
        <Card className="border-2 border-[#F58220] bg-gradient-to-br from-[#0B1E4A] to-[#0F2A5C] text-white pitch-lines">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-extrabold flex items-center justify-center gap-3 font-montserrat">
              <Award className="w-8 h-8 text-[#F58220]" />
              Individual Awards
            </CardTitle>
            <CardDescription className="text-[#CCCCCC] text-lg font-lato">
              Recognizing outstanding individual performances
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {individualAwards.map((award, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border-2 border-[#F58220] hover:bg-[#F58220] hover:border-white transition-all duration-300 hover-scale group"
                >
                  <div className="w-16 h-16 bg-[#F58220] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white transition-colors">
                    <Trophy className="w-8 h-8 text-white group-hover:text-[#F58220]" />
                  </div>
                  <h4 className="text-xl font-bold text-white group-hover:text-white font-montserrat">
                    {award}
                  </h4>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

type CardProps = { gender: string; bgImg: string; categories: Category[] };

const CategoryCard: FC<CardProps> = ({ gender, bgImg, categories }) => {
  return (
    <Card className="overflow-hidden hover-scale border-2 border-[#F58220] bg-gradient-to-br from-[#0B1E4A] to-[#0F2A5C] p-0">
      <div className="relative h-64 overflow-hidden">
        <Image
          fill
          src={bgImg}
          alt="Boys Football Category"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E4A] via-[#0B1E4A]/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-3xl font-extrabold text-white flex items-center gap-2 font-montserrat">
            <Users className="w-8 h-8 text-[#F58220]" />
            {gender} Categories
          </h3>
          <Badge className="bg-[#F58220] text-white border-none mt-2 font-montserrat">
            {categories.length} Age Groups
          </Badge>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="space-y-3">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 rounded-lg bg-white/10 border border-white/20 hover:bg-[#F58220] hover:border-[#F58220] transition-all duration-300 group"
            >
              <span className="font-bold text-white text-lg font-montserrat group-hover:text-white">
                {category.ageGroup}
              </span>
              <span className="text-sm text-[#CCCCCC] group-hover:text-white/90 font-lato text-right">
                {category.bornAfter}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TournamentSection;

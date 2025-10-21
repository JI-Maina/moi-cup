import { Trophy, Users, Award } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
// import playerBoysImg from "@/assets/player-boys.jpg";
// import playerGirlsImg from "@/assets/player-girls.jpg";

const boysCategories = [
  { ageGroup: "Under 7", bornAfter: "Born on or after January 1, 2018" },
  { ageGroup: "Under 9", bornAfter: "Born on or after January 1, 2016" },
  { ageGroup: "Under 11", bornAfter: "Born on or after January 1, 2014" },
  { ageGroup: "Under 13", bornAfter: "Born on or after January 1, 2012" },
  { ageGroup: "Under 15", bornAfter: "Born on or after January 1, 2010" },
  { ageGroup: "Under 17", bornAfter: "Born on or after January 1, 2008" },
];

const girlsCategories = [
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
    <section className="py-16 px-4 md:px-8 bg-[#0B1E4A]/95">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4 bg-primary text-primary-foreground">
            <Trophy className="w-4 h-4 mr-2 inline" />
            Tournament Structure
          </Badge>
          <h2 className="text-4xl md:text-5xl text-white font-extrabold mb-4">
            Age Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            MOI CUP 2025 welcomes young footballers across multiple age groups
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Boys Categories */}
          <Card className="overflow-hidden hover-scale border-2 p-0">
            <div className="relative h-64 overflow-hidden">
              <Image
                fill
                src={"/playerBoysImg.jpeg"}
                alt="Boys Football Category"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 hero-gradient"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-3xl font-extrabold text-white flex items-center gap-2">
                  <Users className="w-8 h-8" />
                  Boys Categories
                </h3>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="space-y-3">
                {boysCategories.map((category, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 rounded-lg bg-muted/50 hover:bg-[#F58220] transition-colors"
                  >
                    <span className="font-bold text-lg">
                      {category.ageGroup}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {category.bornAfter}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Girls Categories */}
          <Card className="overflow-hidden hover-scale border-2 p-0">
            <div className="relative h-64 overflow-hidden">
              <Image
                fill
                src={"/playerGirlsImg.jpeg"}
                alt="Girls Football Category"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 hero-gradient"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-3xl font-extrabold text-white flex items-center gap-2">
                  <Users className="w-8 h-8" />
                  Girls Categories
                </h3>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="space-y-3">
                {girlsCategories.map((category, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 rounded-lg bg-muted/50 hover:bg-[#F58220] transition-colors"
                  >
                    <span className="font-bold text-lg">
                      {category.ageGroup}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {category.bornAfter}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Individual Awards Section */}
        <Card className="bg-primary text-primary-foreground pitch-lines">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-extrabold flex items-center justify-center gap-3">
              <Award className="w-8 h-8" />
              Individual Awards
            </CardTitle>
            <CardDescription className="text-primary-foreground/80 text-lg">
              Recognizing outstanding individual performances
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {individualAwards.map((award, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors hover-scale"
                >
                  <Trophy className="w-12 h-12 mx-auto mb-3 text-accent" />
                  <h4 className="text-xl font-bold">{award}</h4>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TournamentSection;

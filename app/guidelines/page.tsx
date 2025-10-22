import CallToAction from "@/components/landing/cta-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BookOpen, Trophy, Ruler } from "lucide-react";
import Image from "next/image";

const matchRules = [
  {
    category: "U7",
    teamSize: "6-a-side",
    duration: "2x15 min",
    substitution: "Open",
  },
  {
    category: "U9",
    teamSize: "7-a-side",
    duration: "2x15 min",
    substitution: "Open",
  },
  {
    category: "U11",
    teamSize: "8-a-side",
    duration: "2x20 min",
    substitution: "Open",
  },
  {
    category: "U13",
    teamSize: "9-a-side",
    duration: "2x25 min",
    substitution: "Open",
  },
  {
    category: "U15",
    teamSize: "11-a-side",
    duration: "2x30 min",
    substitution: "Max 5",
  },
  {
    category: "U17",
    teamSize: "11-a-side",
    duration: "2x40 min",
    substitution: "Max 5",
  },
];

const pitchSpecifications = [
  {
    category: "Under 7",
    teamSize: "6 vs 6",
    pitchSize: "35m x 25m",
    penalty: "10m x 5m",
    goalPost: "12ft x 6ft (3.7m x 1.8m)",
  },
  {
    category: "Under 9",
    teamSize: "7 vs 7",
    pitchSize: "40m x 30m",
    penalty: "12m x 6m",
    goalPost: "12ft x 6ft (3.7m x 1.8m)",
  },
  {
    category: "Under 11",
    teamSize: "8 vs 8",
    pitchSize: "50m x 35m",
    penalty: "14m x 7m",
    goalPost: "16ft x 7ft (4.9m x 2.1m)",
  },
  {
    category: "Under 13",
    teamSize: "9 vs 9",
    pitchSize: "60m x 40m",
    penalty: "18m x 10m",
    goalPost: "21ft x 7ft (6.4m x 2.1m)",
  },
  {
    category: "Under 15",
    teamSize: "11 vs 11",
    pitchSize: "80m x 55m",
    penalty: "40m x 16m",
    goalPost: "24ft x 8ft (7.3m x 2.4m)",
  },
  {
    category: "Under 17",
    teamSize: "11 vs 11",
    pitchSize: "80m x 55m",
    penalty: "40m x 16m",
    goalPost: "24ft x 8ft (7.3m x 2.4m)",
  },
];

const GuidelinesPage = () => {
  return (
    <main className="bg-[#0B1E4A]/95 pitch-lines">
      <div className="relative h-[500px] md:h-[600px]">
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
      </div>

      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-primary text-white">
              <BookOpen className="w-4 h-4 mr-2 inline" />
              Tournament Guidelines
            </Badge>
            <h2 className="text-4xl text-white md:text-5xl font-extrabold mb-4">
              Tournament Format & Rules
            </h2>
          </div>

          {/* Tournament Format */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="border-2 hover-scale">
              <CardHeader>
                <CardTitle className="text-2xl font-extrabold flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-primary" />
                  Preliminary Phase
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="font-semibold text-foreground">
                    League format in groups of 3–5 teams
                  </p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="font-semibold text-foreground">
                    Each team plays one match against every other team in their
                    group
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover-scale">
              <CardHeader>
                <CardTitle className="text-2xl font-extrabold flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-primary" />
                  Finals Phase
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="font-semibold text-foreground">
                    Divided into Main Cup and Plate Championship
                  </p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="font-semibold text-foreground">
                    1st & 2nd place teams advance to Main Cup knockout stage
                  </p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="font-semibold text-foreground">
                    3rd & 4th place teams move to Plate Championship
                  </p>
                </div>
                <div className="p-4 bg-primary/10 border-2 border-primary rounded-lg">
                  <p className="font-bold text-primary">
                    Minimum of 4 games guaranteed for every team
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Match Rules Summary */}
          <Card className="mb-12 border-2">
            <CardHeader>
              <CardTitle className="text-3xl font-extrabold text-center">
                Match Rules Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-primary hover:bg-primary">
                      <TableHead className="text-primary-foreground font-bold">
                        CATEGORY
                      </TableHead>
                      <TableHead className="text-primary-foreground font-bold">
                        TEAM SIZE
                      </TableHead>
                      <TableHead className="text-primary-foreground font-bold">
                        DURATION
                      </TableHead>
                      <TableHead className="text-primary-foreground font-bold">
                        SUBSTITUTION
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {matchRules.map((rule, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-bold">
                          {rule.category}
                        </TableCell>
                        <TableCell>{rule.teamSize}</TableCell>
                        <TableCell>{rule.duration}</TableCell>
                        <TableCell>{rule.substitution}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> Offside rule applies only in U15 and
                  U17. FIFA rules apply unless stated otherwise.
                </p>
              </div>
            </CardContent>
          </Card>

          <CallToAction />

          {/* Pitch Specifications */}
          <Card className="border-2 ">
            <CardHeader>
              <CardTitle className="text-3xl font-extrabold text-center flex items-center justify-center gap-2">
                <Ruler className="w-8 h-8 text-primary" />
                Pitch Sizes, Goal-Post Dimensions & Penalty Areas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-primary hover:bg-primary">
                      <TableHead className="text-primary-foreground font-bold">
                        AGE CATEGORY
                      </TableHead>
                      <TableHead className="text-primary-foreground font-bold">
                        TEAM SIZE
                      </TableHead>
                      <TableHead className="text-primary-foreground font-bold">
                        PITCH SIZE
                      </TableHead>
                      <TableHead className="text-primary-foreground font-bold">
                        PENALTY AREA
                      </TableHead>
                      <TableHead className="text-primary-foreground font-bold">
                        GOAL POST DIMENSIONS
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pitchSpecifications.map((spec, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-bold">
                          {spec.category}
                        </TableCell>
                        <TableCell>{spec.teamSize}</TableCell>
                        <TableCell>{spec.pitchSize}</TableCell>
                        <TableCell>{spec.penalty}</TableCell>
                        <TableCell>{spec.goalPost}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default GuidelinesPage;

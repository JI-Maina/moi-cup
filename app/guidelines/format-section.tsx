import { Badge } from "@/components/ui/badge";
import { BookOpen, Trophy } from "lucide-react";
import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const FormatSection = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl text-white md:text-5xl font-extrabold mb-4">
            Tournament Format
          </h2>
        </div>

        {/* Tournament Format */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="border-2 border-[#F58220] bg-gradient-to-br from-[#0B1E4A] to-[#0F2A5C] hover-scale">
            <CardHeader>
              <CardTitle className="text-2xl font-extrabold text-white flex items-center gap-2">
                <Trophy className="w-6 h-6 text-[#F58220]" />
                Preliminary Phase
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-4 bg-white/10 rounded-lg border border-white/20">
                <p className="font-semibold text-white">
                  League format in groups of 3–5 teams
                </p>
              </div>
              <div className="p-4 bg-white/10 rounded-lg border border-white/20">
                <p className="font-semibold text-white">
                  Each team plays one match against every other team in their
                  group
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#F58220] bg-gradient-to-br from-[#0F2A5C] to-[#0B1E4A] hover-scale">
            <CardHeader>
              <CardTitle className="text-2xl font-extrabold text-white flex items-center gap-2">
                <Trophy className="w-6 h-6 text-[#F58220]" />
                Finals Phase
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-4 bg-white/10 rounded-lg border border-white/20">
                <p className="font-semibold text-white">
                  Divided into Main Cup and Plate Championship
                </p>
              </div>
              <div className="p-4 bg-white/10 rounded-lg border border-white/20">
                <p className="font-semibold text-white">
                  1st & 2nd place teams advance to Main Cup knockout stage
                </p>
              </div>
              <div className="p-4 bg-white/10 rounded-lg border border-white/20">
                <p className="font-semibold text-white">
                  3rd & 4th place teams move to Plate Championship
                </p>
              </div>
              <div className="p-4 bg-[#F58220]/20 border-2 border-[#F58220] rounded-lg">
                <p className="font-bold text-white">
                  Minimum of 4 games guaranteed for every team
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Ruler } from "lucide-react";

export const PitchSpecificationTable = () => {
  return (
    <Card className="border-2 border-[#F58220] bg-gradient-to-br from-[#0F2A5C] to-[#0B1E4A]">
      <CardHeader>
        <CardTitle className="text-3xl font-extrabold text-white text-center flex items-center justify-center gap-2">
          <Ruler className="w-8 h-8 text-[#F58220]" />
          Pitch Sizes, Goal-Post Dimensions & Penalty Areas
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F58220] hover:bg-[#F58220]">
                <TableHead className="text-white font-bold text-center">
                  AGE CATEGORY
                </TableHead>
                <TableHead className="text-white font-bold text-center">
                  TEAM SIZE
                </TableHead>
                <TableHead className="text-white font-bold text-center">
                  PITCH SIZE
                </TableHead>
                <TableHead className="text-white font-bold text-center">
                  PENALTY AREA
                </TableHead>
                <TableHead className="text-white font-bold text-center">
                  GOAL POST DIMENSIONS
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pitchSpecifications.map((spec, index) => (
                <TableRow
                  key={index}
                  className="border-white/20 hover:bg-white/5"
                >
                  <TableCell className="font-bold text-white text-center">
                    {spec.category}
                  </TableCell>
                  <TableCell className="text-[#CCCCCC] text-center">
                    {spec.teamSize}
                  </TableCell>
                  <TableCell className="text-[#CCCCCC] text-center">
                    {spec.pitchSize}
                  </TableCell>
                  <TableCell className="text-[#CCCCCC] text-center">
                    {spec.penalty}
                  </TableCell>
                  <TableCell className="text-[#CCCCCC] text-center">
                    {spec.goalPost}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

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

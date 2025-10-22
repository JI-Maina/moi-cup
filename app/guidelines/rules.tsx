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

export const RulesTable = () => {
  return (
    <Card className="mb-12 border-2 border-[#F58220] bg-gradient-to-br from-[#0B1E4A] to-[#0F2A5C]">
      <CardHeader>
        <CardTitle className="text-3xl font-extrabold text-white text-center">
          Match Rules Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F58220] hover:bg-[#F58220]">
                <TableHead className="text-white font-bold text-center">
                  CATEGORY
                </TableHead>
                <TableHead className="text-white font-bold text-center">
                  TEAM SIZE
                </TableHead>
                <TableHead className="text-white font-bold text-center">
                  DURATION
                </TableHead>
                <TableHead className="text-white font-bold text-center">
                  SUBSTITUTION
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {matchRules.map((rule, index) => (
                <TableRow
                  key={index}
                  className="border-white/20 hover:bg-white/5"
                >
                  <TableCell className="font-bold text-white text-center">
                    {rule.category}
                  </TableCell>
                  <TableCell className="text-[#CCCCCC] text-center">
                    {rule.teamSize}
                  </TableCell>
                  <TableCell className="text-[#CCCCCC] text-center">
                    {rule.duration}
                  </TableCell>
                  <TableCell className="text-[#CCCCCC] text-center">
                    {rule.substitution}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-4 p-4 bg-white/10 rounded-lg border border-white/20">
          <p className="text-sm text-[#CCCCCC]">
            <strong className="text-white">Note:</strong> Offside rule applies
            only in U15 and U17. FIFA rules apply unless stated otherwise.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

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

import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, FileCheck, Shield } from "lucide-react";

export const VettingSection = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      {/* Vetting & Consent Guidelines */}
      <Card className="mb-12 border-2 border-[#F58220] bg-gradient-to-br from-[#0F2A5C] to-[#0B1E4A]">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-extrabold text-white flex items-center justify-center gap-3">
            <Shield className="w-8 h-8 text-[#F58220]" />
            Vetting & Consent Guidelines
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Purpose of Vetting */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-[#F58220]" />
                Purpose of Vetting
              </h3>
              <p className="text-[#CCCCCC] text-sm leading-relaxed">
                Player vetting ensures all players participate in the correct
                age categories and that every team competes on a level playing
                field. The process also helps us capture accurate player data
                for identification, tagging, and official record keeping.
              </p>
            </div>

            {/* Vetting Schedule */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#F58220]" />
                Vetting Schedule
              </h3>
              <div className="text-[#CCCCCC] text-sm space-y-3">
                <p>
                  <strong>Pre-tournament vetting:</strong> 18th October – 2nd
                  November 2025
                </p>
                <div className="bg-white/10 p-3 rounded-lg">
                  <p className="font-semibold text-[#F58220] mb-2">
                    Vetting Dates:
                  </p>
                  <ul className="space-y-1">
                    <li>
                      • <strong>Weekend 1:</strong> 18th & 19th October
                    </li>
                    <li>
                      • <strong>Weekend 2:</strong> 25th & 26th October
                    </li>
                    <li>
                      • <strong>Midweek Extension:</strong> 30th Oct – 1st Nov
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Required Documents */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-[#F58220]" />
                Required Documents
              </h3>
              <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                <p className="text-white text-sm font-semibold mb-2">
                  Each player must present:
                </p>
                <ul className="text-[#CCCCCC] text-sm space-y-1">
                  <li>• Birth Certificate (original and copy)</li>
                  <li>• Valid Passport (original and copy)</li>
                </ul>
                <p className="text-[#CCCCCC] text-xs mt-2">
                  All documents will be reviewed onsite, and copies kept for
                  tournament records.
                </p>
              </div>
            </div>
          </div>

          {/* How Vetting Will Be Done */}
          <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4 text-center">
              How Vetting Will Be Done
            </h3>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-[#F58220] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold">1</span>
                </div>
                <p className="text-white text-sm">
                  Teams contacted for vetting schedule
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-[#F58220] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold">2</span>
                </div>
                <p className="text-white text-sm">
                  Coordinators visit training sessions
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-[#F58220] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold">3</span>
                </div>
                <p className="text-white text-sm">
                  Player identification verification
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-[#F58220] rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold">4</span>
                </div>
                <p className="text-white text-sm">
                  Team photos for accreditation
                </p>
              </div>
            </div>
          </div>

          {/* Consent & Important Notes */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-[#F58220]/10 p-4 rounded-lg border border-[#F58220]/30">
              <h4 className="font-bold text-white mb-3">Consent & Data Use</h4>
              <p className="text-white text-sm mb-3">
                Team officials confirm that parents/guardians have consented to:
              </p>
              <ul className="text-[#CCCCCC] text-sm space-y-2">
                <li>• Participation in Moi Cup 2025</li>
                <li>• Photography and videography during tournament</li>
                <li>• Use of player images on official platforms</li>
                <li>• Storage of basic data for records</li>
              </ul>
            </div>

            <div className="bg-white/10 p-4 rounded-lg border border-white/20">
              <h4 className="font-bold text-white mb-3">Important Notes</h4>
              <ul className="text-[#CCCCCC] text-sm space-y-2">
                <li>• Teams that miss vetting may request rescheduling</li>
                <li>• Players without valid ID will not be cleared to play</li>
                <li>• Vetting results are final and not subject to appeal</li>
                <li>• Only vetted and tagged players can participate</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, CreditCard, Users } from "lucide-react";

export const TeamRegSection = () => {
  return (
    <section className="pt-16 px-4 md:px-8">
      <Card className="mb-12 border-2 border-[#F58220] bg-gradient-to-br from-[#0B1E4A] to-[#0F2A5C]">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-extrabold text-white flex items-center justify-center gap-3">
            <Users className="w-8 h-8 text-[#F58220]" />
            Team Registration – Moi Cup 2025
          </CardTitle>
          <p className="text-[#CCCCCC] text-lg mt-2">
            Be part of Kenya's biggest youth football experience!
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Step 1: Select Categories */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#F58220] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <h3 className="text-xl font-bold text-white">
                  Select Your Categories
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                  <h4 className="font-bold text-[#F58220] mb-2">
                    Boys Category
                  </h4>
                  <ul className="text-white text-sm space-y-1">
                    <li>• Under 7</li>
                    <li>• Under 9</li>
                    <li>• Under 11</li>
                    <li>• Under 13</li>
                    <li>• Under 15</li>
                    <li>• Under 17</li>
                  </ul>
                </div>

                <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                  <h4 className="font-bold text-[#F58220] mb-2">
                    Girls Category
                  </h4>
                  <ul className="text-white text-sm space-y-1">
                    <li>• Under 13</li>
                    <li>• Under 15</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#F58220]/20 p-4 rounded-lg border border-[#F58220]/30">
                <p className="text-white text-sm">
                  <strong>Team Composition:</strong> Each team may register up
                  to 15 players and 2 officials
                </p>
                <p className="text-white text-sm mt-2">
                  <strong>Slot Limit:</strong> Each category limited to 24 slots
                  only — first-come, first-served
                </p>
              </div>
            </div>

            {/* Step 2: Make Payment */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#F58220] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <h3 className="text-xl font-bold text-white">Make Payment</h3>
              </div>

              <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                <div className="flex items-center gap-2 mb-3">
                  <CreditCard className="w-5 h-5 text-[#F58220]" />
                  <h4 className="font-bold text-white">
                    Registration Fee: KSh 10,000 per category
                  </h4>
                </div>

                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-[#F58220] text-sm mb-1">
                      MPESA Payment:
                    </h5>
                    <div className="text-white text-sm space-y-1">
                      <p>
                        • <strong>Paybill:</strong> 522533
                      </p>
                      <p>
                        • <strong>Account Number:</strong> 7581832#[Team Name]
                      </p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-[#F58220] text-sm mb-1">
                      Bank Payment (KCB):
                    </h5>
                    <div className="text-white text-sm space-y-1">
                      <p>
                        • <strong>Account Name:</strong> MEC Soccer Academy
                      </p>
                      <p>
                        • <strong>Account Number:</strong> 1314808877
                      </p>
                      <p>
                        • <strong>Branch:</strong> Lang'ata
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F58220]/20 p-4 rounded-lg border border-[#F58220]/30">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#F58220]" />
                  <p className="text-white font-semibold">
                    Extended Payment Deadline: Friday, 25th October 2025
                  </p>
                </div>
                <p className="text-white text-sm mt-2">
                  <strong>Note:</strong> Slots are confirmed only after payment
                  and proof is received.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

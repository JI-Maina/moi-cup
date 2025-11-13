"use client";

import { Standing } from "@/types/moi-cup";
import React, { useEffect, useState } from "react";
import {
  Trophy,
  Users,
  Award,
  Filter,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { getStandings } from "@/actions/actions";

// Age categories for navigation
const ageCategories = [
  { id: "U7", name: "Under 7 Boys" },
  { id: "U9", name: "Under 9 Boys" },
  { id: "U11", name: "Under 11 Boys" },
  { id: "U13", name: "Under 13 Boys" },
  { id: "U15", name: "Under 15 Boys" },
  { id: "U17", name: "Under 17 Boys" },
  // { id: "U13G", name: "Under 13 Girls" },
  { id: "U15G", name: "Under 15 Girls" },
];

const StandingsPage = () => {
  const [category, setCategory] = useState(ageCategories[0].id);
  const [data, setData] = useState<Standing | null>(null);
  const [selectedPool, setSelectedPool] = useState(0); // Track selected pool index
  const [loading, setLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fetchStandings = async () => {
      setLoading(true);
      try {
        const data = await getStandings(category);
        setData(data);
        setSelectedPool(0); // Reset to first pool when category changes
      } catch (error) {
        console.error("Failed to fetch standings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStandings();
  }, [category]);

  // Find current category data
  const currentCategory = data?.categories?.[0];
  const groups =
    currentCategory?.groups.filter((grp) => grp.groupname !== "First Group") ||
    [];

  return (
    <main className="min-h-screen bg-[#0B1E4A]/95 pitch-lines pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar - Age Categories */}
          <aside className="lg:w-80">
            {/* Mobile Menu Toggle */}
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-full bg-gradient-to-r from-[#0B1E4A] to-[#0F2A5C] border-2 border-[#F58220] text-white p-4 rounded-xl font-semibold flex items-center justify-between hover:bg-[#F58220] transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  {ageCategories.find((l) => l.id === category)?.name ||
                    "Select Category"}
                </span>
                {isMobileMenuOpen ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Categories List */}
            <div
              className={`
              ${isMobileMenuOpen ? "block" : "hidden"} 
              lg:block bg-gradient-to-b from-[#0B1E4A] to-[#0F2A5C] border-2 border-[#F58220] rounded-xl p-4 lg:p-6
            `}
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 font-montserrat">
                <Filter className="w-5 h-5 text-[#F58220]" />
                Age Categories
              </h3>

              <div className="space-y-2">
                {ageCategories.map((ageCat) => (
                  <button
                    key={ageCat.id}
                    onClick={() => {
                      setCategory(ageCat.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-300 font-lato ${
                      category === ageCat.id
                        ? "bg-[#F58220] text-white shadow-lg"
                        : "bg-white/10 text-[#CCCCCC] hover:bg-white/20 hover:text-white"
                    }`}
                  >
                    <span className="font-semibold">{ageCat.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <section className="flex-1">
            {/* Current Category Header with Pool Tabs */}
            <div className="bg-gradient-to-r from-[#0B1E4A] to-[#0F2A5C] border-2 border-[#F58220] rounded-xl p-6 mb-6">
              {/* Top Row - Category Info */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-[#F58220]" />
                  <div>
                    <h2 className="text-2xl font-bold text-white font-montserrat">
                      {ageCategories.find((ac) => ac.id === category)?.name ||
                        `${category} Standings`}
                    </h2>
                    <p className="text-[#CCCCCC] font-lato">
                      {groups.length} Pools •{" "}
                      {groups.reduce(
                        (acc: number, group: any) => acc + group.fixtures_count,
                        0
                      )}{" "}
                      Total Matches
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[#F58220] text-lg font-bold font-montserrat">
                    {groups.reduce(
                      (acc: number, group: any) => acc + group.standings.length,
                      0
                    )}{" "}
                    Teams
                  </div>
                  <div className="text-[#CCCCCC] text-sm font-lato">
                    Registered
                  </div>
                </div>
              </div>

              {/* Pool Tabs */}
              {groups.length > 0 && (
                <div className="border-t border-white/20 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {groups.map((group: any, index: number) => (
                      <button
                        key={index}
                        onClick={() => setSelectedPool(index)}
                        className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 font-montserrat border-2 ${
                          selectedPool === index
                            ? "bg-[#F58220] border-[#F58220] text-white shadow-lg"
                            : "bg-white/10 border-white/20 text-[#CCCCCC] hover:bg-white/20 hover:text-white hover:border-[#F58220]"
                        }`}
                      >
                        {group.groupname}
                        <span className="ml-2 text-xs opacity-80">
                          ({group.standings.length} teams)
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Pool Standings - Show Only Selected Pool */}
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#F58220]"></div>
              </div>
            ) : groups.length > 0 ? (
              <div className="space-y-6">
                {/* Only render the selected pool */}
                {groups.map((group: any, groupIndex: number) => (
                  <div
                    key={groupIndex}
                    className={`bg-gradient-to-br from-[#0B1E4A] to-[#0F2A5C] border-2 border-[#F58220] rounded-xl overflow-hidden transition-all duration-300 ${
                      selectedPool === groupIndex ? "block" : "hidden"
                    }`}
                  >
                    {/* Pool Header */}
                    <div className="bg-[#F58220] px-6 py-4">
                      <h3 className="text-xl font-bold text-white font-montserrat flex items-center gap-2">
                        <Award className="w-5 h-5" />
                        {group.groupname}
                        <span className="text-white/80 text-sm font-normal ml-2">
                          ({group.fixtures_count} matches)
                        </span>
                      </h3>
                    </div>

                    {/* Standings Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-white/10 border-b border-white/20">
                            <th className="text-left py-4 px-6 text-[#CCCCCC] font-semibold font-montserrat text-sm">
                              Team
                            </th>
                            <th className="text-center py-4 px-2 text-[#CCCCCC] font-semibold font-montserrat text-sm">
                              P
                            </th>
                            <th className="text-center py-4 px-2 text-[#CCCCCC] font-semibold font-montserrat text-sm">
                              W
                            </th>
                            <th className="text-center py-4 px-2 text-[#CCCCCC] font-semibold font-montserrat text-sm">
                              D
                            </th>
                            <th className="text-center py-4 px-2 text-[#CCCCCC] font-semibold font-montserrat text-sm">
                              L
                            </th>
                            <th className="text-center py-4 px-2 text-[#CCCCCC] font-semibold font-montserrat text-sm">
                              GF
                            </th>
                            <th className="text-center py-4 px-2 text-[#CCCCCC] font-semibold font-montserrat text-sm">
                              GA
                            </th>
                            <th className="text-center py-4 px-2 text-[#CCCCCC] font-semibold font-montserrat text-sm">
                              GD
                            </th>
                            <th className="text-center py-4 px-2 text-[#CCCCCC] font-semibold font-montserrat text-sm">
                              Pts
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {group.standings.map(
                            (team: any, teamIndex: number) => (
                              <tr
                                key={teamIndex}
                                className={`border-b border-white/10 hover:bg-white/5 transition-colors duration-200 ${
                                  teamIndex < 2 ? "bg-green-500/10" : "" // Highlight top 2 teams
                                }`}
                              >
                                <td className="py-4 px-6">
                                  <div className="flex items-center gap-3">
                                    <div
                                      className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm font-montserrat ${
                                        teamIndex === 0
                                          ? "bg-yellow-500 text-white"
                                          : teamIndex === 1
                                          ? "bg-gray-400 text-white"
                                          : teamIndex === 2
                                          ? "bg-orange-500 text-white"
                                          : "bg-white/10 text-white"
                                      }`}
                                    >
                                      {teamIndex + 1}
                                    </div>
                                    <span className="text-white font-semibold font-montserrat">
                                      {team.team}
                                    </span>
                                    {team.live && (
                                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                                        LIVE
                                      </span>
                                    )}
                                  </div>
                                </td>
                                <td className="text-center py-4 px-2">
                                  <span className="text-white font-bold font-montserrat">
                                    {team.P}
                                  </span>
                                </td>
                                <td className="text-center py-4 px-2">
                                  <span className="text-green-400 font-bold font-montserrat">
                                    {team.W}
                                  </span>
                                </td>
                                <td className="text-center py-4 px-2">
                                  <span className="text-yellow-400 font-bold font-montserrat">
                                    {team.D}
                                  </span>
                                </td>
                                <td className="text-center py-4 px-2">
                                  <span className="text-red-400 font-bold font-montserrat">
                                    {team.L}
                                  </span>
                                </td>
                                <td className="text-center py-4 px-2">
                                  <span className="text-white font-bold font-montserrat">
                                    {team.GF}
                                  </span>
                                </td>
                                <td className="text-center py-4 px-2">
                                  <span className="text-white font-bold font-montserrat">
                                    {team.GA}
                                  </span>
                                </td>
                                <td className="text-center py-4 px-2">
                                  <span
                                    className={`font-bold font-montserrat ${
                                      team.GD > 0
                                        ? "text-green-400"
                                        : team.GD < 0
                                        ? "text-red-400"
                                        : "text-white"
                                    }`}
                                  >
                                    {team.GD > 0 ? `+${team.GD}` : team.GD}
                                  </span>
                                </td>
                                <td className="text-center py-4 px-2">
                                  <span className="text-[#F58220] font-bold text-lg font-montserrat">
                                    {team.Pts}
                                  </span>
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Empty State
              <div className="bg-gradient-to-br from-[#0B1E4A] to-[#0F2A5C] border-2 border-[#F58220] rounded-xl p-12 text-center">
                <div className="w-20 h-20 bg-[#F58220] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-montserrat">
                  No Standings Available
                </h3>
                <p className="text-[#CCCCCC] text-lg font-lato max-w-md mx-auto">
                  Standings for{" "}
                  {ageCategories.find((ac) => ac.id === category)?.name ||
                    category}{" "}
                  will be updated once matches begin.
                </p>
              </div>
            )}

            {/* Legend */}
            {groups.length > 0 && (
              <div className="mt-8 bg-gradient-to-r from-[#0B1E4A] to-[#0F2A5C] border-2 border-[#F58220] rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-4 font-montserrat">
                  Legend
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                    <span className="text-[#CCCCCC] font-lato">1st Place</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-400 rounded"></div>
                    <span className="text-[#CCCCCC] font-lato">2nd Place</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-orange-500 rounded"></div>
                    <span className="text-[#CCCCCC] font-lato">3rd Place</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-[#CCCCCC] font-lato">Live Match</span>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

export default StandingsPage;

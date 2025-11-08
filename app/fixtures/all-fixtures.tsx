"use client";

import { useState } from "react";
import { Calendar, Filter, ChevronDown, ChevronUp } from "lucide-react";

const leagues = [
  { id: "1", cat: "U7 Boys" },
  { id: "2", cat: "U9 Boys" },
  { id: "3", cat: "U11 Boys" },
  { id: "4", cat: "U13 Boys" },
  { id: "5", cat: "U15 Boys" },
  { id: "6", cat: "U17 Boys" },
  { id: "7", cat: "U13 Girls" },
  { id: "8", cat: "U15 Girls" },
];

const dates = ["11 Tue", "12 Wed", "13 Thu"];

export const FixturesWrapper = () => {
  const [selectedLeague, setSelectedLeague] = useState("1");
  const [selectedDate, setSelectedDate] = useState("11 Tue");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const data = { fixtures: [] };

  return (
    <main className="min-h-screen bg-[#0B1E4A]/95 pitch-lines pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar - Categories */}
          <aside className="lg:w-80">
            {/* Mobile Menu Toggle */}
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-full bg-gradient-to-r from-[#0B1E4A] to-[#0F2A5C] border-2 border-[#F58220] text-white p-4 rounded-xl font-semibold flex items-center justify-between hover:bg-[#F58220] transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  {leagues.find((l) => l.id === selectedLeague)?.cat ||
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
                {leagues.map((league) => (
                  <button
                    key={league.id}
                    onClick={() => {
                      setSelectedLeague(league.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-300 font-lato ${
                      selectedLeague === league.id
                        ? "bg-[#F58220] text-white shadow-lg"
                        : "bg-white/10 text-[#CCCCCC] hover:bg-white/20 hover:text-white"
                    }`}
                  >
                    <span className="font-semibold">{league.cat}</span>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <section className="flex-1">
            {/* Date Navigation */}
            <div className="bg-gradient-to-r from-[#0B1E4A] to-[#0F2A5C] border-2 border-[#F58220] rounded-xl p-4 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-[#F58220]" />
                <h3 className="text-xl font-bold text-white font-montserrat">
                  Tournament Dates
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {dates.map((date, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedDate(date)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 font-montserrat ${
                      selectedDate === date
                        ? "bg-[#F58220] text-white shadow-lg"
                        : "bg-white/10 text-[#CCCCCC] hover:bg-white/20 hover:text-white"
                    }`}
                  >
                    {date}
                  </button>
                ))}
              </div>
            </div>

            {/* Fixtures Content */}
            <div className="bg-gradient-to-br from-[#0B1E4A] to-[#0F2A5C] border-2 border-[#F58220] rounded-xl p-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-2 font-montserrat">
                  {leagues.find((l) => l.id === selectedLeague)?.cat} Fixtures
                </h2>
                <p className="text-[#CCCCCC] mb-6 font-lato">
                  Date: {selectedDate} November 2025
                </p>

                {/* Fixtures List */}
                <div className="space-y-4">
                  {data.fixtures && data.fixtures.length > 0 ? (
                    data.fixtures.map((fixture, index) => (
                      <div
                        key={index}
                        className="bg-white/10 border border-white/20 rounded-lg p-4 hover:bg-white/20 transition-all duration-300"
                      >
                        {/* Fixture content would go here */}
                        <div className="text-white text-center font-lato">
                          Fixture details for {selectedLeague} on {selectedDate}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-[#F58220] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Calendar className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 font-montserrat">
                        No Fixtures Available
                      </h3>
                      <p className="text-[#CCCCCC] font-lato">
                        Fixtures for{" "}
                        {leagues.find((l) => l.id === selectedLeague)?.cat} on{" "}
                        {selectedDate} will be posted soon.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

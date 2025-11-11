"use client";

import { FC, useState } from "react";
import { Calendar, Filter, ChevronDown, ChevronUp } from "lucide-react";

import { Fixture, GroupedFixtures } from "@/types/moi-cup";
import { useRouter } from "next/navigation";

const leagues = [
  { id: "U7", cat: "U7 Boys" },
  { id: "U9", cat: "U9 Boys" },
  { id: "U11", cat: "U11 Boys" },
  { id: "U13", cat: "U13 Boys" },
  { id: "U15", cat: "U15 Boys" },
  { id: "U17", cat: "U17 Boys" },
  // { id: "U13G", cat: "U13 Girls" },
  { id: "U15G", cat: "U15 Girls" },
];

const dates = ["11 Tue", "12 Wed", "13 Thu"];
const DATES = ["2025-11-11", "2024-11-12", "2024-11-13"];

export const FixturesWrapper: FC<{ data: Fixture[] }> = ({ data }) => {
  const [selectedLeague, setSelectedLeague] = useState("1");
  const [selectedDate, setSelectedDate] = useState("11 Tue");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [date, setDate] = useState(DATES[0]);
  const [category, setCategory] = useState("U7");

  const router = useRouter();

  const fixturesData = GroupFixtures(data);
  const fixtures =
    fixturesData[date] && fixturesData[date][category]
      ? fixturesData[date][category]
      : [];

  // console.log(data.length);
  // console.log(fixturesData);
  // console.log(category);
  // console.log(fixtures);

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
                      setCategory(league.id);
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
                <button
                  onClick={() => router.push(`/fixtures/standings`)}
                  className="ml-auto px-4 py-2 rounded-lg bg-[#F58220] text-white hover:bg-white/20 hover:text-white font-semibold transition-all duration-300 font-montserrat cursor-pointer"
                >
                  Standings
                </button>
              </div>
            </div>

            {/* Fixtures Content */}
            <div className="bg-gradient-to-br from-[#0B1E4A] to-[#0F2A5C] border-2 border-[#F58220] rounded-xl p-6">
              <div className="text-center">
                {/* <h2 className="text-2xl font-bold text-white mb-2 font-montserrat">
                  {leagues.find((l) => l.id === selectedLeague)?.cat} Fixtures
                </h2>
                <p className="text-[#CCCCCC] mb-6 font-lato">
                  Date: {selectedDate} November 2025
                </p> */}

                {/* Fixtures List */}
                <div className="space-y-4">
                  {data && data.length > 0 ? (
                    Object.entries(fixtures).map(
                      ([groupName, groupFixtures]) => (
                        <div className="mb-4" key={groupName}>
                          <div className="flex justify-between text-sm font-semibold bg-secondary rounded-sm p-2">
                            <h2 className="">
                              {groupFixtures[0].category} - {groupName}
                            </h2>
                          </div>
                          {groupFixtures.map((fixture) => (
                            <FixtureCard key={fixture.id} fixture={fixture} />
                          ))}
                        </div>
                      )
                    )
                  ) : (
                    // data.map((fixture, index) => (
                    //   <div
                    //     key={index}
                    //     className="bg-white/10 border border-white/20 rounded-lg p-4 hover:bg-white/20 transition-all duration-300"
                    //   >
                    //     {/* Fixture content would go here */}
                    //     <div className="text-white text-center font-lato">
                    //       Fixture details for {selectedLeague} on {selectedDate}
                    //     </div>
                    //   </div>
                    // ))
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

interface FixtureCardProps {
  fixture: Fixture;
}

export const FixtureCard: React.FC<FixtureCardProps> = ({ fixture }) => {
  const {
    away_score,
    game_status,
    home_score,
    team1_name,
    team2_name,
    matchtime,
    pitchname,
    minute,
  } = fixture;

  const getStatusDisplay = () => {
    switch (game_status) {
      case "notstarted":
        return {
          text: matchtime,
          color: "text-[#F58220]",
          scoreVisible: false,
        };
      case "started":
        return {
          text: `${minute}'`,
          color: "text-red-400 animate-pulse",
          scoreVisible: true,
        };
      case "finished":
        return {
          text: "FT",
          color: "text-green-400",
          scoreVisible: true,
        };
      default:
        return {
          text: matchtime,
          color: "text-[#F58220]",
          scoreVisible: false,
        };
    }
  };

  const status = getStatusDisplay();

  return (
    <div className="flex gap-4 p-4 bg-gradient-to-br from-[#0B1E4A] to-[#0F2A5C] border-b-2 border-[#F58220] rounded-xl hover:bg-white/10 hover:border-white transition-all duration-300 cursor-pointer group">
      {/* Time/Status */}
      <div className="flex flex-col items-center justify-center min-w-12">
        <div className={`text-sm font-bold font-montserrat ${status.color}`}>
          {status.text}
        </div>
        {game_status === "notstarted" && (
          <div className="text-[#CCCCCC] text-xs font-lato mt-1 text-center">
            {pitchname}
          </div>
        )}
      </div>

      {/* Teams and Scores */}
      <div className="flex-1 space-y-3">
        {/* Team 1 */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center border border-white/20">
              <img
                src="/homeLogo.png"
                alt="Home"
                className="w-4 h-4 object-contain"
              />
            </div>
            <span className="text-white font-semibold font-montserrat text-sm">
              {team1_name}
            </span>
          </div>
          {status.scoreVisible && (
            <span className="text-white font-bold font-montserrat min-w-6 text-center">
              {home_score}
            </span>
          )}
        </div>

        {/* Team 2 */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center border border-white/20">
              <img
                src="/awayLogo.png"
                alt="Away"
                className="w-4 h-4 object-contain"
              />
            </div>
            <span className="text-white font-semibold font-montserrat text-sm">
              {team2_name}
            </span>
          </div>
          {status.scoreVisible && (
            <span className="text-white font-bold font-montserrat min-w-6 text-center">
              {away_score}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const GroupFixtures = (data: Fixture[]) => {
  const groupData = (data: Fixture[]) => {
    const groupedData: GroupedFixtures = {};

    data.forEach((fixture) => {
      const { game_date, category, groupname } = fixture;
      const date = game_date.split(" ")[0];

      if (!groupedData[date]) {
        groupedData[date] = {};
      }

      if (!groupedData[date][category]) {
        groupedData[date][category] = {};
      }

      if (!groupedData[date][category][groupname]) {
        groupedData[date][category][groupname] = [];
      }

      groupedData[date][category][groupname].push(fixture);
    });

    return groupedData;
  };

  const groupedData = groupData(data);
  // console.log(groupedData);

  return groupedData;
};

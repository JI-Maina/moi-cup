import { Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const RegisteredTeamsPage = () => {
  return (
    <main className="min-h-screen bg-[#0B1E4A]">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("/faq-image.jpeg")` }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1E4A]/95 via-[#0B1E4A]/80 to-[#0B1E4A]/60" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Registered Teams
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-6">
            MOI CUP 2025 Tournament Participants
          </p>

          <div className="flex items-center justify-center gap-2 text-white/80">
            <Users className="w-5 h-5" />
            <span className="text-lg">
              {Object.values(teamsData).reduce(
                (acc, teams) => acc + teams.length,
                0
              )}{" "}
              Teams Registered
            </span>
          </div>

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
      </section>

      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <Tabs defaultValue={Object.keys(teamsData)[0]} className="w-full">
          {/* Tabs Navigation */}
          <TabsList className="flex flex-wrap gap-2 justify-center mb-8 bg-transparent p-0 h-auto">
            {Object.entries(teamsData).map(([category, teams]) => (
              <TabsTrigger
                key={category}
                value={category}
                className={`
            px-6 py-3 rounded-lg font-montserrat font-semibold transition-all duration-300 border-2
            data-[state=active]:bg-[#F58220] data-[state=active]:border-[#F58220] data-[state=active]:text-white data-[state=active]:shadow-lg
            bg-white dark:bg-[#0F2A5C] border-[#CCCCCC] dark:border-[#1E3A8A] text-[#0B1E4A] dark:text-white 
            hover:border-[#F58220] hover:shadow-md
          `}
              >
                {category}
                <span className="ml-2 px-2 py-1 text-xs rounded-full bg-white/20 dark:bg-black/20">
                  {teams.length}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tabs Content */}
          {Object.entries(teamsData).map(([category, teams]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="bg-white dark:bg-[#0B1E4A] rounded-2xl border border-[#CCCCCC] dark:border-[#1E3A8A] p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-[#0B1E4A] dark:text-white font-montserrat">
                    {category} Teams
                  </h3>
                  <Badge className="bg-[#F58220] text-white border-none font-semibold px-3 py-1">
                    {teams.length} Registered{" "}
                    {teams.length === 1 ? "Team" : "Teams"}
                  </Badge>
                </div>

                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {teams.map((team, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-lg bg-[#F58220]/10 dark:bg-[#F58220]/20 border border-[#F58220]/20 hover:bg-[#F58220]/20 dark:hover:bg-[#F58220]/30 transition-all duration-300 animate-fade-in hover:translate-x-1 hover:shadow-md"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F58220] flex items-center justify-center text-white font-bold text-sm shadow-sm">
                        {index + 1}
                      </div>
                      <span className="text-[#0B1E4A] dark:text-white font-lato font-medium truncate flex-1">
                        {team}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </main>
  );
};

export default RegisteredTeamsPage;

const teamsData = {
  U7: [
    "Warriors Soccer Academy",
    "MEC Soccerr (3)",
    "Soccerhood FA",
    "Sakata Soka",
    "Legacy Football Academy (2)",
    "Dream Team Sports Academy",
    "Happyland Academy",
    "Diaspora Soccer Academy",
    "Ligi Ndogo SC",
    "Funcity Soccer Academy",
    "Dijon Sportiff Soccer Academy",
  ],
  U9: [
    "Warriors Soccer Academy",
    "MEC Soccerr (4)",
    "Apostolic Academy",
    "Chayill Sports",
    "Soccerhood FA",
    "Joiner Sports Academy",
    "Sakata Soka",
    "Legacy Football Academy (2)",
    "Happyland Soccer Academy",
    "Happyland Eden School",
    "Aghuba Sports SC",
    "Rangers Academy",
    "Diaspora Soccer Academy",
    "DiFaith Soccer Academy",
    "Fazam Football Academy Fazam",
    "Ligi Ndogo SC",
    "Funcity Soccer Academy",
    "Dijon Sportiff Soccer Academy",
  ],
  U11: [
    "Warriors Soccer Academy",
    "Funcity Soccer Academy",
    "Dijon Sportiff Soccer Academy",
    "MEC Soccer (5)",
    "Apostolic Academy",
    "Emmanuel Soccer Academy",
    "Hybrid Sports Academy",
    "Moi b Youth Football Academy",
    "Chayill Sports",
    "Total Football Academy Kenya",
    "Cornerstone Football Academy",
    "Cheza Sports Academy",
    "Soccerhood FA",
    "Joiner Sports Academy",
    "Blackcats Football Academy",
    "Extreme BestBest",
    "Sakata Soka (2)",
    "Legacy Football Academy (2)",
    "Dream Team Sports Academy",
    "Happyland Soccer Academy",
    "Happyland Eden School",
    "Aghuba Sports SC",
    "Rangers Academy(2)",
    "Diaspora Soccer Academy",
    "Ligi Ndogo SC (4)",
  ],
  "U13 Boys": [
    "Warriors Soccer Academy",
    "Crown Football Academy",
    "Funcity Soccer Academy",
    "MEC Soccerr (5)",
    "Apostolic Academy",
    "Kings Football Academy",
    "Emmanuel Soccer Academy",
    "Hybrid Sports Academy",
    "Mab Youth Football Academy",
    "Chayill Sports",
    "Total Football Academy Kenya",
    "Cornerstone Football Academy",
    "Cheza Sports Academy",
    "Soccerhood FA",
    "Volcano Football Academy",
    "Joiner Sports Academy",
    "Blackcats Football Academy",
    "Extreme BestBest",
    "Sakata Soka (2)",
    "Legacy Football Academy (2)",
    "Happyland Eden School",
    "Rangers Academy",
    "Diaspora Soccer Academy",
    "DiFaith Soccer Academy",
    "Fazam Football Academy Fazam",
    "Falcon Soccer Africa",
    "Ligi Ndogo SC (3)",
    "Dijon Sportiff Soccer Academy",
  ],
  U15: [
    "Warriors Soccer Academy",
    "Funcity Soccer Academy",
    "MEC Soccer",
    "Apostolic Academy",
    "Emmanuel Soccer Academy",
    "Super Eagles Academy",
    "Mab Youth Football Academy",
    "Chayill Sports",
    "Cheza Sports Academy",
    "Soccerhood FA",
    "Rising Ballers",
    "Volcano Football Academy",
    "Joiner Sports Academy",
    "Sakata Soka (2)",
    "Legacy Football Academy",
    "Happyland Soccer Academy",
    "Diaspora Soccer Academy",
    "DiFathar Soccer Academy",
    "Fazam Football Academy Fazam",
    "Ligi Ndogo SC (2)",
  ],
  U17: [
    "Warriors Soccer Academy",
    "Crown Football Academy",
    "MEC Soccerr (2)",
    "Kings Football Academy",
    "Super Eagles Academy",
    "Cheza Sports Academy",
    "Soccerhood FA",
    "Sakata Soka",
    "Legacy Football Academy",
    "Diaspora Soccer Academy",
    "Difathar Soccer Academy",
    "Ligi Ndogo SC",
  ],
  "U13 Girls": [
    "Kibera Starlets",
    "Diaspora Soccer Academy",
    "Difathar Sports Academy",
  ],
  "U15 Girls": [
    "MEC Soccerr",
    "Kibera Starlets",
    "Blackcats Football Academy",
    "Diaspora Soccer Academy",
    "Cheza Sports Academy",
  ],
};

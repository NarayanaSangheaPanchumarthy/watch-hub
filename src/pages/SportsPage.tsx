import { useState } from "react";
import { Trophy, CheckCircle2, Calendar, Tv, Radio } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

interface Team {
  name: string;
  logo: string;
  score?: number | string;
}

interface Game {
  id: string;
  sport: string;
  sportIcon: string;
  league: string;
  team1: Team;
  team2: Team;
  status: "live" | "scheduled" | "finished";
  date: string;
  time: string;
  venue: string;
  channel: string;
  provider?: string;
}

const mockGames: Game[] = [
  // ===== LIVE GAMES =====
  // Football (NFL)
  { id: "l1", sport: "Football", sportIcon: "🏈", league: "NFL", team1: { name: "Kansas City Chiefs", logo: "🔴", score: 24 }, team2: { name: "San Francisco 49ers", logo: "🟡", score: 21 }, status: "live", date: "2026-03-03", time: "Q3 8:42", venue: "Arrowhead Stadium", channel: "ESPN", provider: "Netflix" },
  { id: "l2", sport: "Football", sportIcon: "🏈", league: "NFL", team1: { name: "Dallas Cowboys", logo: "⭐", score: 17 }, team2: { name: "Green Bay Packers", logo: "🟢", score: 14 }, status: "live", date: "2026-03-03", time: "Q2 2:30", venue: "AT&T Stadium", channel: "FOX", provider: "Prime Video" },
  // Soccer
  { id: "l3", sport: "Soccer", sportIcon: "⚽", league: "Premier League", team1: { name: "Arsenal", logo: "🔴", score: 2 }, team2: { name: "Chelsea", logo: "🔵", score: 1 }, status: "live", date: "2026-03-03", time: "65'", venue: "Emirates Stadium", channel: "NBC Sports", provider: "Prime Video" },
  { id: "l4", sport: "Soccer", sportIcon: "⚽", league: "La Liga", team1: { name: "Real Madrid", logo: "⚪", score: 3 }, team2: { name: "Atletico Madrid", logo: "🔴", score: 2 }, status: "live", date: "2026-03-03", time: "78'", venue: "Santiago Bernabéu", channel: "ESPN+", provider: "Apple TV+" },
  { id: "l5", sport: "Soccer", sportIcon: "⚽", league: "Bundesliga", team1: { name: "Bayern Munich", logo: "🔴", score: 1 }, team2: { name: "Borussia Dortmund", logo: "🟡", score: 1 }, status: "live", date: "2026-03-03", time: "52'", venue: "Allianz Arena", channel: "CBS Sports", provider: "Netflix" },
  // Cricket
  { id: "l6", sport: "Cricket", sportIcon: "🏏", league: "IPL", team1: { name: "Mumbai Indians", logo: "🔵", score: "185/4 (18.2)" }, team2: { name: "Chennai Super Kings", logo: "🟡", score: "172/6 (20)" }, status: "live", date: "2026-03-03", time: "Live - MI batting", venue: "Wankhede Stadium", channel: "Star Sports", provider: "Disney+" },
  { id: "l7", sport: "Cricket", sportIcon: "🏏", league: "Test - Ashes", team1: { name: "Australia", logo: "🟢", score: "342/7 (Day 2)" }, team2: { name: "England", logo: "🔴", score: "218 all out" }, status: "live", date: "2026-03-03", time: "Day 2 - Session 3", venue: "MCG, Melbourne", channel: "Fox Cricket", provider: "Prime Video" },
  // NBA
  { id: "l8", sport: "NBA", sportIcon: "🏀", league: "NBA", team1: { name: "LA Lakers", logo: "🟣", score: 88 }, team2: { name: "Boston Celtics", logo: "🟢", score: 92 }, status: "live", date: "2026-03-03", time: "Q4 3:15", venue: "Crypto.com Arena", channel: "TNT", provider: "Apple TV+" },
  { id: "l9", sport: "NBA", sportIcon: "🏀", league: "NBA", team1: { name: "Golden State Warriors", logo: "🔵", score: 67 }, team2: { name: "Phoenix Suns", logo: "🟠", score: 71 }, status: "live", date: "2026-03-03", time: "Q3 5:40", venue: "Chase Center", channel: "ESPN", provider: "Netflix" },

  // ===== SCHEDULED GAMES =====
  // Football
  { id: "s1", sport: "Football", sportIcon: "🏈", league: "NFL", team1: { name: "Philadelphia Eagles", logo: "🟢" }, team2: { name: "Buffalo Bills", logo: "🔵" }, status: "scheduled", date: "2026-03-04", time: "8:15 PM ET", venue: "Lincoln Financial Field", channel: "ABC", provider: "Disney+" },
  { id: "s2", sport: "Football", sportIcon: "🏈", league: "NFL", team1: { name: "Miami Dolphins", logo: "🟠" }, team2: { name: "NY Jets", logo: "🟢" }, status: "scheduled", date: "2026-03-04", time: "1:00 PM ET", venue: "Hard Rock Stadium", channel: "CBS", provider: "Netflix" },
  { id: "s3", sport: "Football", sportIcon: "🏈", league: "NFL", team1: { name: "Baltimore Ravens", logo: "🟣" }, team2: { name: "Cincinnati Bengals", logo: "🟠" }, status: "scheduled", date: "2026-03-05", time: "4:25 PM ET", venue: "M&T Bank Stadium", channel: "FOX", provider: "Prime Video" },
  // Soccer
  { id: "s4", sport: "Soccer", sportIcon: "⚽", league: "Champions League", team1: { name: "Barcelona", logo: "🔵" }, team2: { name: "PSG", logo: "🔴" }, status: "scheduled", date: "2026-03-05", time: "3:00 PM ET", venue: "Camp Nou", channel: "CBS Sports", provider: "Prime Video" },
  { id: "s5", sport: "Soccer", sportIcon: "⚽", league: "Premier League", team1: { name: "Manchester City", logo: "🔵" }, team2: { name: "Liverpool", logo: "🔴" }, status: "scheduled", date: "2026-03-06", time: "12:30 PM ET", venue: "Etihad Stadium", channel: "NBC Sports", provider: "Netflix" },
  { id: "s6", sport: "Soccer", sportIcon: "⚽", league: "Serie A", team1: { name: "AC Milan", logo: "🔴" }, team2: { name: "Inter Milan", logo: "🔵" }, status: "scheduled", date: "2026-03-06", time: "2:45 PM ET", venue: "San Siro", channel: "ESPN+", provider: "Apple TV+" },
  { id: "s7", sport: "Soccer", sportIcon: "⚽", league: "MLS", team1: { name: "Inter Miami", logo: "🩷" }, team2: { name: "LAFC", logo: "⚫" }, status: "scheduled", date: "2026-03-07", time: "7:30 PM ET", venue: "DRV PNK Stadium", channel: "Apple TV", provider: "Apple TV+" },
  { id: "s8", sport: "Soccer", sportIcon: "⚽", league: "FIFA World Cup Qualifier", team1: { name: "Brazil", logo: "🟡" }, team2: { name: "Argentina", logo: "🔵" }, status: "scheduled", date: "2026-03-08", time: "8:00 PM ET", venue: "Maracanã", channel: "FOX", provider: "Netflix" },
  // Cricket
  { id: "s9", sport: "Cricket", sportIcon: "🏏", league: "IPL", team1: { name: "Royal Challengers", logo: "🔴" }, team2: { name: "Delhi Capitals", logo: "🔵" }, status: "scheduled", date: "2026-03-04", time: "7:30 PM IST", venue: "M. Chinnaswamy Stadium", channel: "Star Sports", provider: "Disney+" },
  { id: "s10", sport: "Cricket", sportIcon: "🏏", league: "IPL", team1: { name: "Kolkata Knight Riders", logo: "🟣" }, team2: { name: "Rajasthan Royals", logo: "🩷" }, status: "scheduled", date: "2026-03-05", time: "7:30 PM IST", venue: "Eden Gardens", channel: "Star Sports", provider: "Disney+" },
  { id: "s11", sport: "Cricket", sportIcon: "🏏", league: "ODI Series", team1: { name: "India", logo: "🔵" }, team2: { name: "South Africa", logo: "🟢" }, status: "scheduled", date: "2026-03-06", time: "2:00 PM IST", venue: "Wankhede Stadium", channel: "Star Sports", provider: "Disney+" },
  { id: "s12", sport: "Cricket", sportIcon: "🏏", league: "T20 World Cup Qualifier", team1: { name: "West Indies", logo: "🟤" }, team2: { name: "Pakistan", logo: "🟢" }, status: "scheduled", date: "2026-03-07", time: "10:00 AM ET", venue: "Kensington Oval", channel: "Willow", provider: "Prime Video" },
  // NBA
  { id: "s13", sport: "NBA", sportIcon: "🏀", league: "NBA", team1: { name: "Milwaukee Bucks", logo: "🟢" }, team2: { name: "Denver Nuggets", logo: "🔵" }, status: "scheduled", date: "2026-03-04", time: "7:30 PM ET", venue: "Fiserv Forum", channel: "ESPN", provider: "Netflix" },
  { id: "s14", sport: "NBA", sportIcon: "🏀", league: "NBA", team1: { name: "Brooklyn Nets", logo: "⚫" }, team2: { name: "Miami Heat", logo: "🔴" }, status: "scheduled", date: "2026-03-05", time: "7:00 PM ET", venue: "Barclays Center", channel: "TNT", provider: "Apple TV+" },
  // MLB
  { id: "s15", sport: "MLB", sportIcon: "⚾", league: "MLB", team1: { name: "NY Yankees", logo: "🔵" }, team2: { name: "LA Dodgers", logo: "🔵" }, status: "scheduled", date: "2026-03-05", time: "7:00 PM ET", venue: "Yankee Stadium", channel: "FOX", provider: "Apple TV+" },
  { id: "s16", sport: "MLB", sportIcon: "⚾", league: "MLB", team1: { name: "Chicago Cubs", logo: "🔵" }, team2: { name: "St. Louis Cardinals", logo: "🔴" }, status: "scheduled", date: "2026-03-06", time: "8:00 PM ET", venue: "Wrigley Field", channel: "ESPN", provider: "Netflix" },
  // NHL
  { id: "s17", sport: "NHL", sportIcon: "🏒", league: "NHL", team1: { name: "Toronto Maple Leafs", logo: "🔵" }, team2: { name: "Montreal Canadiens", logo: "🔴" }, status: "scheduled", date: "2026-03-06", time: "7:00 PM ET", venue: "Scotiabank Arena", channel: "NHL Network", provider: "Disney+" },
  // F1
  { id: "s18", sport: "F1", sportIcon: "🏎️", league: "Formula 1", team1: { name: "Max Verstappen", logo: "🟡" }, team2: { name: "Lewis Hamilton", logo: "⚫" }, status: "scheduled", date: "2026-03-08", time: "9:00 AM ET", venue: "Bahrain International Circuit", channel: "ESPN", provider: "Netflix" },

  // ===== FINISHED GAMES =====
  // Football
  { id: "f1", sport: "Football", sportIcon: "🏈", league: "NFL", team1: { name: "Buffalo Bills", logo: "🔵", score: 31 }, team2: { name: "Miami Dolphins", logo: "🟠", score: 27 }, status: "finished", date: "2026-03-02", time: "Final", venue: "Highmark Stadium", channel: "CBS" },
  { id: "f2", sport: "Football", sportIcon: "🏈", league: "NFL", team1: { name: "Detroit Lions", logo: "🔵", score: 28 }, team2: { name: "Minnesota Vikings", logo: "🟣", score: 24 }, status: "finished", date: "2026-03-02", time: "Final", venue: "Ford Field", channel: "FOX" },
  { id: "f3", sport: "Football", sportIcon: "🏈", league: "NFL", team1: { name: "Pittsburgh Steelers", logo: "🟡", score: 20 }, team2: { name: "Cleveland Browns", logo: "🟠", score: 17 }, status: "finished", date: "2026-03-01", time: "Final", venue: "Acrisure Stadium", channel: "NBC" },
  // Soccer
  { id: "f4", sport: "Soccer", sportIcon: "⚽", league: "La Liga", team1: { name: "Barcelona", logo: "🔵", score: 3 }, team2: { name: "Atletico Madrid", logo: "🔴", score: 1 }, status: "finished", date: "2026-03-01", time: "Final", venue: "Camp Nou", channel: "ESPN+" },
  { id: "f5", sport: "Soccer", sportIcon: "⚽", league: "Premier League", team1: { name: "Manchester United", logo: "🔴", score: 2 }, team2: { name: "Tottenham", logo: "⚪", score: 2 }, status: "finished", date: "2026-03-01", time: "Final", venue: "Old Trafford", channel: "NBC Sports" },
  { id: "f6", sport: "Soccer", sportIcon: "⚽", league: "Champions League", team1: { name: "Juventus", logo: "⚫", score: 1 }, team2: { name: "Benfica", logo: "🔴", score: 3 }, status: "finished", date: "2026-02-28", time: "Final", venue: "Allianz Stadium", channel: "CBS Sports" },
  { id: "f7", sport: "Soccer", sportIcon: "⚽", league: "Ligue 1", team1: { name: "PSG", logo: "🔴", score: 4 }, team2: { name: "Marseille", logo: "🔵", score: 0 }, status: "finished", date: "2026-02-28", time: "Final", venue: "Parc des Princes", channel: "beIN Sports" },
  // Cricket
  { id: "f8", sport: "Cricket", sportIcon: "🏏", league: "IPL", team1: { name: "Gujarat Titans", logo: "🔵", score: "198/5 (20)" }, team2: { name: "Sunrisers Hyderabad", logo: "🟠", score: "175/8 (20)" }, status: "finished", date: "2026-03-02", time: "Final", venue: "Narendra Modi Stadium", channel: "Star Sports" },
  { id: "f9", sport: "Cricket", sportIcon: "🏏", league: "IPL", team1: { name: "Punjab Kings", logo: "🔴", score: "156/9 (20)" }, team2: { name: "Lucknow Super Giants", logo: "🔵", score: "159/4 (18.3)" }, status: "finished", date: "2026-03-01", time: "Final", venue: "PCA Stadium", channel: "Star Sports" },
  { id: "f10", sport: "Cricket", sportIcon: "🏏", league: "ODI", team1: { name: "New Zealand", logo: "⚫", score: "287/8 (50)" }, team2: { name: "Sri Lanka", logo: "🔵", score: "243 all out (46.2)" }, status: "finished", date: "2026-02-28", time: "Final", venue: "Eden Park, Auckland", channel: "Sky Sport" },
  { id: "f11", sport: "Cricket", sportIcon: "🏏", league: "T20I", team1: { name: "India", logo: "🔵", score: "212/4 (20)" }, team2: { name: "Australia", logo: "🟢", score: "195/7 (20)" }, status: "finished", date: "2026-02-27", time: "Final", venue: "BRSABV Ekana Stadium", channel: "Star Sports" },
  // NBA
  { id: "f12", sport: "NBA", sportIcon: "🏀", league: "NBA", team1: { name: "Phoenix Suns", logo: "🟠", score: 118 }, team2: { name: "Denver Nuggets", logo: "🔵", score: 112 }, status: "finished", date: "2026-03-02", time: "Final", venue: "Footprint Center", channel: "TNT" },
  { id: "f13", sport: "NBA", sportIcon: "🏀", league: "NBA", team1: { name: "Chicago Bulls", logo: "🔴", score: 105 }, team2: { name: "Indiana Pacers", logo: "🔵", score: 110 }, status: "finished", date: "2026-03-01", time: "Final", venue: "United Center", channel: "ESPN" },
  // MLB
  { id: "f14", sport: "MLB", sportIcon: "⚾", league: "MLB", team1: { name: "Houston Astros", logo: "🟠", score: 5 }, team2: { name: "Atlanta Braves", logo: "🔵", score: 8 }, status: "finished", date: "2026-02-28", time: "Final", venue: "Minute Maid Park", channel: "TBS" },
  // NHL
  { id: "f15", sport: "NHL", sportIcon: "🏒", league: "NHL", team1: { name: "Edmonton Oilers", logo: "🟠", score: 4 }, team2: { name: "Calgary Flames", logo: "🔴", score: 2 }, status: "finished", date: "2026-03-01", time: "Final", venue: "Rogers Place", channel: "NHL Network" },
];

const sportsList = ["All", "Football", "Soccer", "Cricket", "NBA", "MLB", "NHL", "F1"];

const SportsPage = () => {
  const [selectedSport, setSelectedSport] = useState("All");
  const [activeTab, setActiveTab] = useState<"live" | "scheduled" | "results">("live");

  const filteredGames = mockGames.filter((g) => {
    const sportMatch = selectedSport === "All" || g.sport === selectedSport;
    if (activeTab === "live") return sportMatch && g.status === "live";
    if (activeTab === "scheduled") return sportMatch && g.status === "scheduled";
    return sportMatch && g.status === "finished";
  });

  const liveCounts = mockGames.filter(g => g.status === "live").length;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <div className="flex items-center gap-2 mb-1">
              <Trophy className="w-6 h-6 text-primary" />
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">Sports Hub</h1>
            </div>
            <p className="text-muted-foreground text-sm">Live games, upcoming schedule &amp; recent results — Cricket, Soccer, Football, NBA &amp; more</p>
          </motion.div>

          {/* Sport filter chips */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {sportsList.map((sport) => {
              const count = sport === "All"
                ? mockGames.filter(g => g.status === activeTab.replace("results", "finished") as string || (activeTab === "results" && g.status === "finished") || (activeTab === "live" && g.status === "live") || (activeTab === "scheduled" && g.status === "scheduled")).length
                : mockGames.filter(g => g.sport === sport && ((activeTab === "live" && g.status === "live") || (activeTab === "scheduled" && g.status === "scheduled") || (activeTab === "results" && g.status === "finished"))).length;
              return (
                <button
                  key={sport}
                  onClick={() => setSelectedSport(sport)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                    selectedSport === sport
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {sport}
                  {count > 0 && (
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      selectedSport === sport ? "bg-primary-foreground/20" : "bg-muted-foreground/20"
                    }`}>
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-1 bg-secondary rounded-lg p-1 mb-8 w-fit"
          >
            {([
              { key: "live" as const, label: "Live Now", icon: Radio },
              { key: "scheduled" as const, label: "Scheduled", icon: Calendar },
              { key: "results" as const, label: "Results", icon: CheckCircle2 },
            ]).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.key
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
                {tab.key === "live" && (
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
                    <span className="text-[10px]">{liveCounts}</span>
                  </span>
                )}
              </button>
            ))}
          </motion.div>

          {/* Games list */}
          {filteredGames.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg mb-1">No games found</p>
              <p className="text-muted-foreground text-sm">Try selecting a different sport or tab</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredGames.map((game, i) => (
                <motion.div
                  key={game.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                >
                  <GameCard game={game} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

const GameCard = ({ game }: { game: Game }) => {
  const isLive = game.status === "live";
  const isFinished = game.status === "finished";

  const s1 = typeof game.team1.score === "number" ? game.team1.score : 0;
  const s2 = typeof game.team2.score === "number" ? game.team2.score : 0;
  const isCricketScore = typeof game.team1.score === "string" || typeof game.team2.score === "string";
  const team1Winner = isFinished && !isCricketScore && s1 > s2;
  const team2Winner = isFinished && !isCricketScore && s2 > s1;

  return (
    <div
      className={`glass-card rounded-xl p-4 md:p-5 transition-all ${
        isLive ? "border-primary/40 ring-1 ring-primary/20" : "hover:border-primary/20"
      }`}
    >
      {/* Top row */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">{game.sportIcon}</span>
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            {game.league}
          </span>
          {isLive && (
            <Badge className="bg-destructive text-destructive-foreground text-[10px] px-2 py-0 gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-destructive-foreground animate-pulse" />
              LIVE
            </Badge>
          )}
          {isFinished && (
            <Badge variant="secondary" className="text-[10px] px-2 py-0">
              <CheckCircle2 className="w-3 h-3 mr-1" /> Final
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          {game.provider && (
            <span className="flex items-center gap-1">
              <Tv className="w-3 h-3" />
              {game.provider}
            </span>
          )}
          <span className="flex items-center gap-1">
            <Radio className="w-3 h-3" />
            {game.channel}
          </span>
        </div>
      </div>

      {/* Teams row - different layout for cricket */}
      {isCricketScore ? (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{game.team1.logo}</span>
              <span className={`font-display font-semibold ${isFinished ? "text-primary" : "text-foreground"}`}>
                {game.team1.name}
              </span>
            </div>
            <span className="font-display font-bold text-foreground text-sm md:text-base">
              {game.team1.score}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{game.team2.logo}</span>
              <span className="font-display font-semibold text-foreground">
                {game.team2.name}
              </span>
            </div>
            <span className="font-display font-bold text-muted-foreground text-sm md:text-base">
              {game.team2.score}
            </span>
          </div>
          {isLive && (
            <div className="text-center">
              <span className="text-[11px] text-primary font-semibold">{game.time}</span>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <div className="flex-1 flex items-center gap-3 min-w-0">
            <span className="text-2xl flex-shrink-0">{game.team1.logo}</span>
            <span className={`font-display font-semibold truncate ${team1Winner ? "text-primary" : "text-foreground"}`}>
              {game.team1.name}
            </span>
          </div>
          <div className="flex-shrink-0 text-center min-w-[100px]">
            {game.team1.score !== undefined ? (
              <div className="flex items-center justify-center gap-2">
                <span className={`font-display text-2xl font-bold ${team1Winner ? "text-primary" : "text-foreground"}`}>
                  {game.team1.score}
                </span>
                <span className="text-muted-foreground font-medium">-</span>
                <span className={`font-display text-2xl font-bold ${team2Winner ? "text-primary" : "text-foreground"}`}>
                  {game.team2.score}
                </span>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <span className="text-xs text-muted-foreground">{game.date}</span>
                <span className="font-display font-semibold text-foreground text-sm">{game.time}</span>
              </div>
            )}
            {isLive && <span className="text-[11px] text-primary font-semibold">{game.time}</span>}
            {isFinished && <span className="text-[11px] text-muted-foreground">{game.date}</span>}
          </div>
          <div className="flex-1 flex items-center justify-end gap-3 min-w-0">
            <span className={`font-display font-semibold truncate text-right ${team2Winner ? "text-primary" : "text-foreground"}`}>
              {game.team2.name}
            </span>
            <span className="text-2xl flex-shrink-0">{game.team2.logo}</span>
          </div>
        </div>
      )}

      {/* Bottom row */}
      <div className="mt-3 pt-3 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground">
        <span>{game.venue}</span>
        {game.status === "scheduled" && (
          <button className="text-primary hover:underline font-medium">Set Reminder</button>
        )}
      </div>
    </div>
  );
};

export default SportsPage;

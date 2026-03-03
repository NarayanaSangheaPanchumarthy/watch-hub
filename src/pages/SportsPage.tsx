import { useState } from "react";
import { Trophy, Clock, CheckCircle2, Calendar, Tv, Radio } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

interface Team {
  name: string;
  logo: string;
  score?: number;
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
  // Live
  {
    id: "g1",
    sport: "NFL",
    sportIcon: "🏈",
    league: "NFL",
    team1: { name: "Kansas City Chiefs", logo: "🔴", score: 24 },
    team2: { name: "San Francisco 49ers", logo: "🟡", score: 21 },
    status: "live",
    date: "2026-03-03",
    time: "Q3 8:42",
    venue: "Arrowhead Stadium",
    channel: "ESPN",
    provider: "Netflix",
  },
  {
    id: "g2",
    sport: "Soccer",
    sportIcon: "⚽",
    league: "Premier League",
    team1: { name: "Arsenal", logo: "🔴", score: 2 },
    team2: { name: "Chelsea", logo: "🔵", score: 1 },
    status: "live",
    date: "2026-03-03",
    time: "65'",
    venue: "Emirates Stadium",
    channel: "NBC Sports",
    provider: "Prime Video",
  },
  {
    id: "g3",
    sport: "NBA",
    sportIcon: "🏀",
    league: "NBA",
    team1: { name: "LA Lakers", logo: "🟣", score: 88 },
    team2: { name: "Boston Celtics", logo: "🟢", score: 92 },
    status: "live",
    date: "2026-03-03",
    time: "Q4 3:15",
    venue: "Crypto.com Arena",
    channel: "TNT",
    provider: "Apple TV+",
  },
  // Scheduled
  {
    id: "g4",
    sport: "NFL",
    sportIcon: "🏈",
    league: "NFL",
    team1: { name: "Dallas Cowboys", logo: "⭐" },
    team2: { name: "Philadelphia Eagles", logo: "🟢" },
    status: "scheduled",
    date: "2026-03-04",
    time: "8:15 PM ET",
    venue: "AT&T Stadium",
    channel: "ABC",
    provider: "Disney+",
  },
  {
    id: "g5",
    sport: "NBA",
    sportIcon: "🏀",
    league: "NBA",
    team1: { name: "Golden State Warriors", logo: "🔵" },
    team2: { name: "Milwaukee Bucks", logo: "🟢" },
    status: "scheduled",
    date: "2026-03-04",
    time: "7:30 PM ET",
    venue: "Chase Center",
    channel: "ESPN",
    provider: "Netflix",
  },
  {
    id: "g6",
    sport: "Soccer",
    sportIcon: "⚽",
    league: "Champions League",
    team1: { name: "Real Madrid", logo: "⚪" },
    team2: { name: "Bayern Munich", logo: "🔴" },
    status: "scheduled",
    date: "2026-03-05",
    time: "3:00 PM ET",
    venue: "Santiago Bernabéu",
    channel: "CBS Sports",
    provider: "Prime Video",
  },
  {
    id: "g7",
    sport: "MLB",
    sportIcon: "⚾",
    league: "MLB",
    team1: { name: "NY Yankees", logo: "🔵" },
    team2: { name: "LA Dodgers", logo: "🔵" },
    status: "scheduled",
    date: "2026-03-05",
    time: "7:00 PM ET",
    venue: "Yankee Stadium",
    channel: "FOX",
    provider: "Apple TV+",
  },
  {
    id: "g8",
    sport: "NHL",
    sportIcon: "🏒",
    league: "NHL",
    team1: { name: "Toronto Maple Leafs", logo: "🔵" },
    team2: { name: "Montreal Canadiens", logo: "🔴" },
    status: "scheduled",
    date: "2026-03-06",
    time: "7:00 PM ET",
    venue: "Scotiabank Arena",
    channel: "NHL Network",
    provider: "Disney+",
  },
  {
    id: "g9",
    sport: "F1",
    sportIcon: "🏎️",
    league: "Formula 1",
    team1: { name: "Max Verstappen", logo: "🟡" },
    team2: { name: "Lewis Hamilton", logo: "⚫" },
    status: "scheduled",
    date: "2026-03-08",
    time: "9:00 AM ET",
    venue: "Bahrain International Circuit",
    channel: "ESPN",
    provider: "Netflix",
  },
  // Finished
  {
    id: "g10",
    sport: "NFL",
    sportIcon: "🏈",
    league: "NFL",
    team1: { name: "Buffalo Bills", logo: "🔵", score: 31 },
    team2: { name: "Miami Dolphins", logo: "🟠", score: 27 },
    status: "finished",
    date: "2026-03-02",
    time: "Final",
    venue: "Highmark Stadium",
    channel: "CBS",
  },
  {
    id: "g11",
    sport: "NBA",
    sportIcon: "🏀",
    league: "NBA",
    team1: { name: "Phoenix Suns", logo: "🟠", score: 118 },
    team2: { name: "Denver Nuggets", logo: "🔵", score: 112 },
    status: "finished",
    date: "2026-03-02",
    time: "Final",
    venue: "Footprint Center",
    channel: "TNT",
  },
  {
    id: "g12",
    sport: "Soccer",
    sportIcon: "⚽",
    league: "La Liga",
    team1: { name: "Barcelona", logo: "🔵", score: 3 },
    team2: { name: "Atletico Madrid", logo: "🔴", score: 1 },
    status: "finished",
    date: "2026-03-01",
    time: "Final",
    venue: "Camp Nou",
    channel: "ESPN+",
  },
  {
    id: "g13",
    sport: "NHL",
    sportIcon: "🏒",
    league: "NHL",
    team1: { name: "Edmonton Oilers", logo: "🟠", score: 4 },
    team2: { name: "Calgary Flames", logo: "🔴", score: 2 },
    status: "finished",
    date: "2026-03-01",
    time: "Final",
    venue: "Rogers Place",
    channel: "NHL Network",
  },
  {
    id: "g14",
    sport: "MLB",
    sportIcon: "⚾",
    league: "MLB",
    team1: { name: "Houston Astros", logo: "🟠", score: 5 },
    team2: { name: "Atlanta Braves", logo: "🔵", score: 8 },
    status: "finished",
    date: "2026-02-28",
    time: "Final",
    venue: "Minute Maid Park",
    channel: "TBS",
  },
];

const sportsList = ["All", "NFL", "NBA", "Soccer", "MLB", "NHL", "F1"];

const SportsPage = () => {
  const [selectedSport, setSelectedSport] = useState("All");
  const [activeTab, setActiveTab] = useState<"live" | "scheduled" | "results">("live");

  const filteredGames = mockGames.filter((g) => {
    const sportMatch = selectedSport === "All" || g.sport === selectedSport;
    if (activeTab === "live") return sportMatch && g.status === "live";
    if (activeTab === "scheduled") return sportMatch && g.status === "scheduled";
    return sportMatch && g.status === "finished";
  });

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
            <p className="text-muted-foreground text-sm">Live games, upcoming schedule &amp; recent results</p>
          </motion.div>

          {/* Sport filter chips */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {sportsList.map((sport) => (
              <button
                key={sport}
                onClick={() => setSelectedSport(sport)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedSport === sport
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {sport}
              </button>
            ))}
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
                  <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
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
                  transition={{ delay: i * 0.04 }}
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

  const team1Winner = isFinished && (game.team1.score ?? 0) > (game.team2.score ?? 0);
  const team2Winner = isFinished && (game.team2.score ?? 0) > (game.team1.score ?? 0);

  return (
    <div
      className={`glass-card rounded-xl p-4 md:p-5 transition-all ${
        isLive ? "border-primary/40 ring-1 ring-primary/20" : "hover:border-primary/20"
      }`}
    >
      {/* Top row: sport badge, league, status, channel */}
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

      {/* Teams row */}
      <div className="flex items-center gap-4">
        {/* Team 1 */}
        <div className="flex-1 flex items-center gap-3 min-w-0">
          <span className="text-2xl flex-shrink-0">{game.team1.logo}</span>
          <span
            className={`font-display font-semibold truncate ${
              team1Winner ? "text-primary" : "text-foreground"
            }`}
          >
            {game.team1.name}
          </span>
        </div>

        {/* Score / Time */}
        <div className="flex-shrink-0 text-center min-w-[100px]">
          {game.team1.score !== undefined ? (
            <div className="flex items-center justify-center gap-2">
              <span
                className={`font-display text-2xl font-bold ${
                  team1Winner ? "text-primary" : "text-foreground"
                }`}
              >
                {game.team1.score}
              </span>
              <span className="text-muted-foreground font-medium">-</span>
              <span
                className={`font-display text-2xl font-bold ${
                  team2Winner ? "text-primary" : "text-foreground"
                }`}
              >
                {game.team2.score}
              </span>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <span className="text-xs text-muted-foreground">{game.date}</span>
              <span className="font-display font-semibold text-foreground text-sm">{game.time}</span>
            </div>
          )}
          {isLive && (
            <span className="text-[11px] text-primary font-semibold">{game.time}</span>
          )}
          {isFinished && (
            <span className="text-[11px] text-muted-foreground">{game.date}</span>
          )}
        </div>

        {/* Team 2 */}
        <div className="flex-1 flex items-center justify-end gap-3 min-w-0">
          <span
            className={`font-display font-semibold truncate text-right ${
              team2Winner ? "text-primary" : "text-foreground"
            }`}
          >
            {game.team2.name}
          </span>
          <span className="text-2xl flex-shrink-0">{game.team2.logo}</span>
        </div>
      </div>

      {/* Bottom row: venue */}
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

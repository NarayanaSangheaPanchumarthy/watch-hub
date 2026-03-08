import { useState } from "react";
import { Trophy, CheckCircle2, Calendar, Radio, RefreshCw, Wifi } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GameCard from "@/components/sports/GameCard";
import HighlightsSection from "@/components/sports/HighlightsSection";
import { sportsList, featuredHighlights } from "@/data/sportsData";
import { useLiveScores } from "@/hooks/useLiveScores";

const SportsPage = () => {
  const [selectedSport, setSelectedSport] = useState("All");
  const [activeTab, setActiveTab] = useState<"live" | "scheduled" | "results">("live");

  const { games, isLoading, lastUpdated, source, refetch } = useLiveScores({
    sport: selectedSport,
    pollInterval: 60000, // refresh every 60s
  });

  const statusMap = { live: "live", scheduled: "scheduled", results: "finished" } as const;

  const filteredGames = games.filter((g) => {
    const sportMatch = selectedSport === "All" || g.sport === selectedSport;
    return sportMatch && g.status === statusMap[activeTab];
  });

  const liveCounts = games.filter((g) => g.status === "live").length;

  const getCount = (sport: string) => {
    const status = statusMap[activeTab];
    if (sport === "All") return games.filter((g) => g.status === status).length;
    return games.filter((g) => g.sport === sport && g.status === status).length;
  };

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
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <Trophy className="w-6 h-6 text-primary" />
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  Sports Hub
                </h1>
              </div>
              <div className="flex items-center gap-3">
                {/* Data source indicator */}
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Wifi className={`w-3 h-3 ${source === "api-football" ? "text-green-500" : "text-muted-foreground"}`} />
                  <span>{source === "api-football" ? "Live API" : "Demo Data"}</span>
                </div>
                {lastUpdated && (
                  <span className="text-[10px] text-muted-foreground">
                    Updated {lastUpdated.toLocaleTimeString()}
                  </span>
                )}
                <button
                  onClick={refetch}
                  disabled={isLoading}
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  title="Refresh scores"
                >
                  <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
                </button>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Live scores, schedules, results &amp; video highlights — Cricket, Soccer, Football, NBA, Tennis, F1 &amp; more
            </p>
          </motion.div>

          {/* Featured Highlights Carousel */}
          <HighlightsSection highlights={featuredHighlights} />

          {/* Sport filter chips */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {sportsList.map((sport) => {
              const count = getCount(sport);
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
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        selectedSport === sport
                          ? "bg-primary-foreground/20"
                          : "bg-muted-foreground/20"
                      }`}
                    >
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
              { key: "scheduled" as const, label: "Upcoming", icon: Calendar },
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

          {/* Loading indicator */}
          {isLoading && (
            <div className="text-center py-4 text-sm text-muted-foreground">
              <RefreshCw className="w-4 h-4 animate-spin inline mr-2" />
              Fetching latest scores...
            </div>
          )}

          {/* Games list */}
          {filteredGames.length === 0 && !isLoading ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg mb-1">No games found</p>
              <p className="text-muted-foreground text-sm">
                Try selecting a different sport or tab
              </p>
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

export default SportsPage;

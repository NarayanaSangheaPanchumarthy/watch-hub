import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, X, Film, Tv, Trophy, Star, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { allMovies, allShows } from "@/data/mockData";
import type { Movie } from "@/data/mockData";

// Inline sports search data (avoids exporting from SportsPage)
const sportsSearchData = [
  { id: "l1", label: "Kansas City Chiefs vs San Francisco 49ers", sport: "Football", league: "NFL", status: "live" },
  { id: "l2", label: "Dallas Cowboys vs Green Bay Packers", sport: "Football", league: "NFL", status: "live" },
  { id: "l3", label: "Arsenal vs Chelsea", sport: "Soccer", league: "Premier League", status: "live" },
  { id: "l4", label: "Real Madrid vs Atletico Madrid", sport: "Soccer", league: "La Liga", status: "live" },
  { id: "l5", label: "Bayern Munich vs Borussia Dortmund", sport: "Soccer", league: "Bundesliga", status: "live" },
  { id: "l6", label: "Mumbai Indians vs Chennai Super Kings", sport: "Cricket", league: "IPL", status: "live" },
  { id: "l7", label: "Australia vs England (Ashes)", sport: "Cricket", league: "Test", status: "live" },
  { id: "l8", label: "LA Lakers vs Boston Celtics", sport: "NBA", league: "NBA", status: "live" },
  { id: "l9", label: "Golden State Warriors vs Phoenix Suns", sport: "NBA", league: "NBA", status: "live" },
  { id: "s1", label: "Philadelphia Eagles vs Buffalo Bills", sport: "Football", league: "NFL", status: "scheduled" },
  { id: "s5", label: "Liverpool vs Man City", sport: "Soccer", league: "Premier League", status: "scheduled" },
  { id: "s9", label: "Royal Challengers vs Kolkata Knight Riders", sport: "Cricket", league: "IPL", status: "scheduled" },
  { id: "s13", label: "Milwaukee Bucks vs Denver Nuggets", sport: "NBA", league: "NBA", status: "scheduled" },
];

const sportIconMap: Record<string, string> = {
  Football: "🏈", Soccer: "⚽", Cricket: "🏏", NBA: "🏀", MLB: "⚾", NHL: "🏒", F1: "🏎️",
};

interface SearchResult {
  id: string;
  title: string;
  subtitle: string;
  type: "movie" | "tv" | "sport";
  image?: string;
  rating?: number;
  link: string;
  icon?: string;
  live?: boolean;
}

const GlobalSearch = ({ onClose }: { onClose: () => void }) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Close on escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Close on click outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    window.addEventListener("mousedown", handler);
    return () => window.removeEventListener("mousedown", handler);
  }, [onClose]);

  const results = useMemo<SearchResult[]>(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];

    const movieResults: SearchResult[] = allMovies
      .filter((m) => m.title.toLowerCase().includes(q) || m.genres.some((g) => g.toLowerCase().includes(q)))
      .slice(0, 5)
      .map((m) => ({
        id: m.id,
        title: m.title,
        subtitle: `${m.year} · ${m.genres.slice(0, 2).join(", ")}`,
        type: "movie" as const,
        image: m.poster,
        rating: m.rating,
        link: `/title/${m.id}`,
      }));

    const showResults: SearchResult[] = allShows
      .filter((s) => s.title.toLowerCase().includes(q) || s.genres.some((g) => g.toLowerCase().includes(q)))
      .slice(0, 5)
      .map((s) => ({
        id: s.id,
        title: s.title,
        subtitle: `${s.year} · ${s.genres.slice(0, 2).join(", ")}`,
        type: "tv" as const,
        image: s.poster,
        rating: s.rating,
        link: `/title/${s.id}`,
      }));

    const sportResults: SearchResult[] = sportsSearchData
      .filter((g) => g.label.toLowerCase().includes(q) || g.sport.toLowerCase().includes(q) || g.league.toLowerCase().includes(q))
      .slice(0, 4)
      .map((g) => ({
        id: g.id,
        title: g.label,
        subtitle: `${g.league} · ${g.status === "live" ? "🔴 Live" : "Scheduled"}`,
        type: "sport" as const,
        link: "/sports",
        icon: sportIconMap[g.sport] || "🏆",
        live: g.status === "live",
      }));

    return [...movieResults, ...showResults, ...sportResults];
  }, [query]);

  const grouped = useMemo(() => {
    const movies = results.filter((r) => r.type === "movie");
    const shows = results.filter((r) => r.type === "tv");
    const sports = results.filter((r) => r.type === "sport");
    return { movies, shows, sports };
  }, [results]);

  const hasResults = results.length > 0;
  const showDropdown = query.trim().length >= 2;

  const handleSelect = useCallback((link: string) => {
    navigate(link);
    onClose();
  }, [navigate, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-sm flex justify-center pt-20 px-4"
    >
      <div ref={containerRef} className="w-full max-w-2xl">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="glass-card rounded-2xl overflow-hidden shadow-2xl border border-border/50"
        >
          {/* Search input */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-border/50">
            <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search movies, shows, sports..."
              className="flex-1 bg-transparent text-foreground text-base outline-none placeholder:text-muted-foreground"
            />
            {query && (
              <button onClick={() => setQuery("")} className="p-1 rounded-md hover:bg-secondary transition-colors">
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            )}
            <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 rounded bg-secondary text-[10px] font-mono text-muted-foreground">
              ESC
            </kbd>
          </div>

          {/* Results */}
          {showDropdown && (
            <div className="max-h-[60vh] overflow-y-auto">
              {!hasResults ? (
                <div className="px-5 py-10 text-center">
                  <p className="text-muted-foreground text-sm">No results for "{query}"</p>
                  <p className="text-muted-foreground/60 text-xs mt-1">Try searching for a movie, show, team, or sport</p>
                </div>
              ) : (
                <div className="py-2">
                  <ResultSection
                    title="Movies"
                    icon={<Film className="w-4 h-4" />}
                    items={grouped.movies}
                    onSelect={handleSelect}
                  />
                  <ResultSection
                    title="TV Shows"
                    icon={<Tv className="w-4 h-4" />}
                    items={grouped.shows}
                    onSelect={handleSelect}
                  />
                  <ResultSection
                    title="Sports"
                    icon={<Trophy className="w-4 h-4" />}
                    items={grouped.sports}
                    onSelect={handleSelect}
                  />
                </div>
              )}
            </div>
          )}

          {/* Quick links when empty */}
          {!showDropdown && (
            <div className="px-5 py-4">
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <TrendingUp className="w-3 h-3" /> Trending
              </p>
              <div className="flex flex-wrap gap-2">
                {["Action", "Cricket", "NFL", "Netflix", "Sci-Fi", "NBA"].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1.5 rounded-lg bg-secondary text-xs font-medium text-secondary-foreground hover:bg-secondary/80 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

const ResultSection = ({
  title,
  icon,
  items,
  onSelect,
}: {
  title: string;
  icon: React.ReactNode;
  items: SearchResult[];
  onSelect: (link: string) => void;
}) => {
  if (items.length === 0) return null;

  return (
    <div className="mb-1">
      <p className="px-5 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
        {icon} {title}
      </p>
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onSelect(item.link)}
          className="w-full flex items-center gap-3 px-5 py-2.5 hover:bg-secondary/60 transition-colors text-left"
        >
          {item.image ? (
            <img src={item.image} alt="" className="w-10 h-14 rounded object-cover flex-shrink-0" />
          ) : item.icon ? (
            <span className="w-10 h-14 rounded bg-secondary flex items-center justify-center text-xl flex-shrink-0">
              {item.icon}
            </span>
          ) : null}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">{item.title}</p>
            <p className="text-xs text-muted-foreground">{item.subtitle}</p>
          </div>
          {item.rating && (
            <div className="flex items-center gap-1 flex-shrink-0">
              <Star className="w-3 h-3 fill-primary text-primary" />
              <span className="text-xs font-medium text-foreground">{item.rating}</span>
            </div>
          )}
          {item.live && (
            <span className="flex items-center gap-1 flex-shrink-0">
              <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
              <span className="text-[10px] font-semibold text-destructive">LIVE</span>
            </span>
          )}
        </button>
      ))}
    </div>
  );
};

export default GlobalSearch;

import { useState, useMemo } from "react";
import { X, SlidersHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface ContentFiltersProps {
  genres: string[];
  years: number[];
  providers: string[];
  selectedGenres: string[];
  selectedYear: number | null;
  selectedProvider: string | null;
  minRating: number;
  onGenreToggle: (genre: string) => void;
  onYearSelect: (year: number | null) => void;
  onProviderSelect: (provider: string | null) => void;
  onMinRatingChange: (rating: number) => void;
  onClearAll: () => void;
  activeFilterCount: number;
}

const ratingOptions = [0, 6, 7, 8, 9];

const ContentFilters = ({
  genres,
  years,
  providers,
  selectedGenres,
  selectedYear,
  selectedProvider,
  minRating,
  onGenreToggle,
  onYearSelect,
  onProviderSelect,
  onMinRatingChange,
  onClearAll,
  activeFilterCount,
}: ContentFiltersProps) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="glass-card rounded-xl p-4 md:p-5 mb-6">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-foreground font-display font-semibold text-sm"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters
          {activeFilterCount > 0 && (
            <Badge className="text-[10px] px-1.5 py-0">{activeFilterCount}</Badge>
          )}
        </button>
        {activeFilterCount > 0 && (
          <Button variant="ghost" size="sm" onClick={onClearAll} className="text-xs text-muted-foreground h-7">
            <X className="w-3 h-3 mr-1" /> Clear all
          </Button>
        )}
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden space-y-4"
          >
            {/* Genres */}
            <div>
              <p className="text-xs text-muted-foreground font-medium mb-2 uppercase tracking-wider">Genre</p>
              <div className="flex flex-wrap gap-1.5">
                {genres.map((genre) => (
                  <button
                    key={genre}
                    onClick={() => onGenreToggle(genre)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      selectedGenres.includes(genre)
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>

            {/* Year + Rating + Provider row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <p className="text-xs text-muted-foreground font-medium mb-2 uppercase tracking-wider">Year</p>
                <div className="flex gap-1.5">
                  <button
                    onClick={() => onYearSelect(null)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      selectedYear === null
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    All
                  </button>
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => onYearSelect(year)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        selectedYear === year
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs text-muted-foreground font-medium mb-2 uppercase tracking-wider">Min Rating</p>
                <div className="flex gap-1.5">
                  {ratingOptions.map((r) => (
                    <button
                      key={r}
                      onClick={() => onMinRatingChange(r)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        minRating === r
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {r === 0 ? "All" : `${r}+`}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs text-muted-foreground font-medium mb-2 uppercase tracking-wider">Provider</p>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => onProviderSelect(null)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      selectedProvider === null
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    All
                  </button>
                  {providers.map((p) => (
                    <button
                      key={p}
                      onClick={() => onProviderSelect(p)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        selectedProvider === p
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContentFilters;

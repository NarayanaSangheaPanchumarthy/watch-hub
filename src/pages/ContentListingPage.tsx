import { useState, useMemo } from "react";
import { Film, Tv, Star, LayoutGrid, List } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentFilters from "@/components/ContentFilters";
import { Badge } from "@/components/ui/badge";
import type { Movie } from "@/data/mockData";
import { allMovies, allShows, allGenres, allProviderNames, allYears } from "@/data/mockData";

interface ContentListingPageProps {
  type: "movie" | "tv";
}

const ContentListingPage = ({ type }: ContentListingPageProps) => {
  const items = type === "movie" ? allMovies : allShows;
  const title = type === "movie" ? "Movies" : "TV Shows";
  const Icon = type === "movie" ? Film : Tv;

  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState<"rating" | "year" | "title">("rating");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const activeFilterCount =
    selectedGenres.length +
    (selectedYear ? 1 : 0) +
    (selectedProvider ? 1 : 0) +
    (minRating > 0 ? 1 : 0);

  const filtered = useMemo(() => {
    let result = [...items];

    if (selectedGenres.length > 0) {
      result = result.filter((item) =>
        selectedGenres.some((g) => item.genres.includes(g))
      );
    }
    if (selectedYear) {
      result = result.filter((item) => item.year === selectedYear);
    }
    if (selectedProvider) {
      result = result.filter((item) =>
        item.providers.some((p) => p.name === selectedProvider)
      );
    }
    if (minRating > 0) {
      result = result.filter((item) => item.rating >= minRating);
    }

    result.sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "year") return b.year - a.year;
      return a.title.localeCompare(b.title);
    });

    return result;
  }, [items, selectedGenres, selectedYear, selectedProvider, minRating, sortBy]);

  const clearAll = () => {
    setSelectedGenres([]);
    setSelectedYear(null);
    setSelectedProvider(null);
    setMinRating(0);
  };

  const toggleGenre = (genre: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
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
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Icon className="w-6 h-6 text-primary" />
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">{title}</h1>
              </div>
              <p className="text-muted-foreground text-sm">
                {filtered.length} title{filtered.length !== 1 ? "s" : ""} found
              </p>
            </div>

            <div className="flex items-center gap-2">
              {/* Sort */}
              <div className="flex items-center gap-1 bg-secondary rounded-lg p-0.5">
                {(["rating", "year", "title"] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setSortBy(s)}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors capitalize ${
                      sortBy === s
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              {/* View toggle */}
              <div className="flex items-center gap-0.5 bg-secondary rounded-lg p-0.5">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded-md transition-colors ${
                    viewMode === "grid" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                  }`}
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-1.5 rounded-md transition-colors ${
                    viewMode === "list" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Filters */}
          <ContentFilters
            genres={allGenres}
            years={allYears}
            providers={allProviderNames}
            selectedGenres={selectedGenres}
            selectedYear={selectedYear}
            selectedProvider={selectedProvider}
            minRating={minRating}
            onGenreToggle={toggleGenre}
            onYearSelect={setSelectedYear}
            onProviderSelect={setSelectedProvider}
            onMinRatingChange={setMinRating}
            onClearAll={clearAll}
            activeFilterCount={activeFilterCount}
          />

          {/* Results */}
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg mb-2">No titles match your filters</p>
              <button onClick={clearAll} className="text-primary text-sm hover:underline">
                Clear all filters
              </button>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                >
                  <GridCard item={item} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03 }}
                >
                  <ListCard item={item} />
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

const GridCard = ({ item }: { item: Movie }) => (
  <Link to={`/title/${item.id}`} className="group block">
    <div className="relative rounded-lg overflow-hidden mb-2">
      <img
        src={item.poster}
        alt={item.title}
        className="w-full aspect-[2/3] object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute top-2 right-2 flex items-center gap-1 bg-background/80 backdrop-blur-sm px-1.5 py-0.5 rounded text-xs">
        <Star className="w-3 h-3 fill-primary text-primary" />
        <span className="text-foreground font-medium">{item.rating}</span>
      </div>
      <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex flex-wrap gap-1">
          {item.providers.slice(0, 2).map((p) => (
            <span
              key={p.name}
              className="px-1.5 py-0.5 rounded text-[10px] font-semibold text-foreground"
              style={{ backgroundColor: p.color }}
            >
              {p.name}
            </span>
          ))}
        </div>
      </div>
    </div>
    <h3 className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
      {item.title}
    </h3>
    <p className="text-xs text-muted-foreground mt-0.5">
      {item.year} · {item.genres.slice(0, 2).join(", ")}
    </p>
  </Link>
);

const ListCard = ({ item }: { item: Movie }) => (
  <Link
    to={`/title/${item.id}`}
    className="group glass-card rounded-xl overflow-hidden flex hover:border-primary/30 transition-all"
  >
    <img
      src={item.poster}
      alt={item.title}
      className="w-20 sm:w-28 aspect-[2/3] object-cover flex-shrink-0"
      loading="lazy"
    />
    <div className="flex-1 p-3 sm:p-4 flex flex-col justify-center min-w-0">
      <div className="flex items-start justify-between gap-2 mb-1">
        <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors truncate">
          {item.title}
        </h3>
        <div className="flex items-center gap-1 flex-shrink-0">
          <Star className="w-3.5 h-3.5 fill-primary text-primary" />
          <span className="text-sm font-medium text-foreground">{item.rating}</span>
        </div>
      </div>
      <p className="text-xs text-muted-foreground mb-2">
        {item.year} · {item.runtime} · {item.genres.join(", ")}
      </p>
      <p className="text-xs text-muted-foreground line-clamp-2 hidden sm:block mb-2">
        {item.overview}
      </p>
      <div className="flex flex-wrap gap-1">
        {item.providers.map((p) => (
          <span
            key={p.name}
            className="px-1.5 py-0.5 rounded text-[10px] font-semibold text-foreground"
            style={{ backgroundColor: p.color }}
          >
            {p.name}
          </span>
        ))}
      </div>
    </div>
  </Link>
);

export default ContentListingPage;

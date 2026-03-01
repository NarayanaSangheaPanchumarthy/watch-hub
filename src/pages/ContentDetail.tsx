import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star, Play, Clock, Calendar, Film, Tv, ChevronLeft, ChevronRight,
  ExternalLink, X, BookmarkPlus, Share2, Heart
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentCard from "@/components/ContentCard";
import { allContent, trendingMovies } from "@/data/mockData";

const episodes = [
  { num: 1, title: "The Beginning", runtime: "52min", rating: 8.5, date: "Jan 5, 2025" },
  { num: 2, title: "Rising Tide", runtime: "48min", rating: 8.8, date: "Jan 12, 2025" },
  { num: 3, title: "Crossroads", runtime: "55min", rating: 9.0, date: "Jan 19, 2025" },
  { num: 4, title: "The Reveal", runtime: "51min", rating: 8.7, date: "Jan 26, 2025" },
  { num: 5, title: "Fallout", runtime: "58min", rating: 9.2, date: "Feb 2, 2025" },
];

const ContentDetail = () => {
  const { id } = useParams();
  const item = allContent.find((c) => c.id === id);
  const [activeTab, setActiveTab] = useState<"stream" | "rent" | "buy">("stream");
  const [trailerOpen, setTrailerOpen] = useState(false);
  const [activeSeason, setActiveSeason] = useState(1);

  if (!item) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Content not found</p>
      </div>
    );
  }

  const ratingColor = item.rating >= 8 ? "text-rating-green" : item.rating >= 6 ? "text-rating-yellow" : "text-rating-red";
  const streamProviders = item.providers.filter((p) => p.type === "stream");
  const rentProviders = item.providers.filter((p) => p.type === "rent");
  const buyProviders = item.providers.filter((p) => p.type === "buy");
  const tabProviders = activeTab === "stream" ? streamProviders : activeTab === "rent" ? rentProviders : buyProviders;

  const similar = allContent.filter((c) => c.id !== item.id).slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Backdrop */}
      <section className="relative h-[50vh] min-h-[400px]">
        <img src={item.backdrop} alt={item.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-transparent" />
      </section>

      {/* Content */}
      <div className="container relative -mt-48 z-10 pb-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Poster */}
          <div className="flex-shrink-0">
            <img
              src={item.poster}
              alt={item.title}
              className="w-48 md:w-56 rounded-xl shadow-2xl border-2 border-border/50"
            />
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-3">
              {item.type === "tv" ? (
                <span className="flex items-center gap-1 px-2 py-1 rounded bg-secondary text-xs text-muted-foreground">
                  <Tv className="w-3 h-3" /> TV Series
                </span>
              ) : (
                <span className="flex items-center gap-1 px-2 py-1 rounded bg-secondary text-xs text-muted-foreground">
                  <Film className="w-3 h-3" /> Movie
                </span>
              )}
              {item.certification && (
                <span className="px-2 py-1 rounded border border-border text-xs text-muted-foreground">
                  {item.certification}
                </span>
              )}
            </div>

            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-3">
              {item.title}
            </h1>

            {/* Metadata row */}
            <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" /> {item.year}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> {item.runtime}
              </span>
              {item.seasons && <span>{item.seasons} Season{item.seasons > 1 ? "s" : ""}</span>}
              {item.director && <span>Dir. {item.director}</span>}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <div className={`flex items-center gap-1 px-3 py-1.5 rounded-lg bg-secondary ${ratingColor}`}>
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-display font-bold text-lg">{item.rating}</span>
                  <span className="text-xs text-muted-foreground">/10</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 cursor-pointer transition-colors ${
                      star <= Math.round(item.rating / 2)
                        ? "fill-primary text-primary"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Genres */}
            <div className="flex flex-wrap gap-2 mb-4">
              {item.genres.map((g) => (
                <span key={g} className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-secondary-foreground">
                  {g}
                </span>
              ))}
            </div>

            <p className="text-muted-foreground mb-6 max-w-2xl leading-relaxed">{item.overview}</p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              {item.trailerKey && (
                <button
                  onClick={() => setTrailerOpen(true)}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors glow-accent"
                >
                  <Play className="w-5 h-5" /> Watch Trailer
                </button>
              )}
              <button className="flex items-center gap-2 px-4 py-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors">
                <BookmarkPlus className="w-5 h-5" /> Watchlist
              </button>
              <button className="p-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Streaming Providers */}
            <div className="glass-card rounded-xl p-6 mb-8">
              <h3 className="font-display font-semibold text-foreground mb-4">Where to Watch</h3>
              <div className="flex gap-1 mb-4">
                {(["stream", "rent", "buy"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                      activeTab === tab
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              {tabProviders.length > 0 ? (
                <div className="flex flex-wrap gap-3">
                  {tabProviders.map((p) => (
                    <div
                      key={p.name}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors cursor-pointer group"
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-foreground font-bold text-sm"
                        style={{ backgroundColor: p.color }}
                      >
                        {p.logo}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{p.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {p.price || "Included with subscription"}
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">No {activeTab} options available</p>
              )}
            </div>
          </div>
        </div>

        {/* Seasons/Episodes for TV */}
        {item.type === "tv" && item.seasons && (
          <section className="mt-8">
            <h3 className="font-display text-xl font-bold text-foreground mb-4">Episodes</h3>
            <div className="flex gap-2 mb-4">
              {Array.from({ length: item.seasons }, (_, i) => i + 1).map((s) => (
                <button
                  key={s}
                  onClick={() => setActiveSeason(s)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeSeason === s
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Season {s}
                </button>
              ))}
            </div>
            <div className="space-y-2">
              {episodes.map((ep) => (
                <div
                  key={ep.num}
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <span className="text-lg font-display font-bold text-muted-foreground w-8">{ep.num}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">{ep.title}</p>
                    <p className="text-xs text-muted-foreground">{ep.date} · {ep.runtime}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-primary text-primary" />
                    <span className="text-xs text-muted-foreground">{ep.rating}</span>
                  </div>
                  <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                    <Play className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Cast */}
        <section className="mt-10">
          <h3 className="font-display text-xl font-bold text-foreground mb-4">Cast & Crew</h3>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
            {item.cast.map((member) => (
              <div key={member.name} className="flex-shrink-0 w-28 text-center">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-20 h-20 rounded-full mx-auto mb-2 object-cover border-2 border-border"
                />
                <p className="text-xs font-medium text-foreground truncate">{member.name}</p>
                <p className="text-[10px] text-muted-foreground truncate">{member.character}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Similar Titles */}
        <section className="mt-10">
          <h3 className="font-display text-xl font-bold text-foreground mb-4">You Might Also Like</h3>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
            {similar.map((s) => (
              <ContentCard key={s.id} item={s} />
            ))}
          </div>
        </section>
      </div>

      <Footer />

      {/* Trailer Modal */}
      <AnimatePresence>
        {trailerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-surface-overlay/90 flex items-center justify-center p-4"
            onClick={() => setTrailerOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-4xl aspect-video bg-card rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setTrailerOpen(false)}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-background/80 text-foreground hover:bg-background transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${item.trailerKey}?autoplay=1`}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContentDetail;

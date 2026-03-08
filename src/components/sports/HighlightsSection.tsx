import { useRef } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { Game } from "@/data/sportsData";

interface HighlightsSectionProps {
  highlights: Game[];
}

const HighlightsSection = ({ highlights }: HighlightsSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<Game | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -340 : 340,
      behavior: "smooth",
    });
  };

  if (highlights.length === 0) return null;

  return (
    <>
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
              <Play className="w-5 h-5 text-primary" />
              Featured Highlights
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              Click to watch full match highlights on YouTube
            </p>
          </div>
          <div className="flex gap-1">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-2"
        >
          {highlights.map((game) => (
            <button
              key={game.id}
              onClick={() => setActiveVideo(game)}
              className="flex-shrink-0 w-[300px] md:w-[340px] group text-left"
            >
              <div className="relative rounded-xl overflow-hidden mb-2">
                <img
                  src={`https://img.youtube.com/vi/${game.highlightVideo}/mqdefault.jpg`}
                  alt={game.highlightTitle}
                  className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
                  </div>
                </div>
                <div className="absolute top-2 left-2 flex items-center gap-1">
                  <span className="text-sm">{game.sportIcon}</span>
                  <span className="text-[10px] font-semibold text-primary-foreground bg-background/60 px-2 py-0.5 rounded">
                    {game.league}
                  </span>
                </div>
              </div>
              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
                {game.team1.name} vs {game.team2.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {game.team1.score} — {game.team2.score} • {game.time}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* Video modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/90 flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-10 right-0 p-2 rounded-full bg-secondary text-foreground hover:bg-secondary/80 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="aspect-video bg-card rounded-xl overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.highlightVideo}?autoplay=1`}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={activeVideo.highlightTitle || "Match Highlights"}
                />
              </div>
              <p className="text-center text-sm text-muted-foreground mt-3">
                {activeVideo.highlightTitle}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HighlightsSection;

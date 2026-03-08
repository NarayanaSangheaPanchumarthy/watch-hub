import { useState } from "react";
import { CheckCircle2, Radio, Tv, Play, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AnimatePresence, motion } from "framer-motion";
import type { Game } from "@/data/sportsData";

const GameCard = ({ game }: { game: Game }) => {
  const [showVideo, setShowVideo] = useState(false);
  const isLive = game.status === "live";
  const isFinished = game.status === "finished";

  const s1 = typeof game.team1.score === "number" ? game.team1.score : 0;
  const s2 = typeof game.team2.score === "number" ? game.team2.score : 0;
  const isCricketScore =
    typeof game.team1.score === "string" || typeof game.team2.score === "string";
  const team1Winner = isFinished && !isCricketScore && s1 > s2;
  const team2Winner = isFinished && !isCricketScore && s2 > s1;

  const relativeDate = (() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const gDate = new Date(game.date + "T00:00:00");
    const diff = Math.round(
      (gDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );
    if (diff === 0) return "Today";
    if (diff === 1) return "Tomorrow";
    if (diff === -1) return "Yesterday";
    if (diff > 1) return gDate.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
    return `${Math.abs(diff)} days ago`;
  })();

  return (
    <>
      <div
        className={`glass-card rounded-xl p-4 md:p-5 transition-all ${
          isLive
            ? "border-primary/40 ring-1 ring-primary/20"
            : "hover:border-primary/20"
        } ${isFinished && game.highlightVideo ? "cursor-pointer" : ""}`}
        onClick={() => {
          if (isFinished && game.highlightVideo) setShowVideo(true);
        }}
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
            <span>{relativeDate}</span>
            {game.provider && (
              <span className="flex items-center gap-1 text-primary">
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
        {isCricketScore ? (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{game.team1.logo}</span>
                <span className="font-display font-semibold text-foreground">
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
                <span className="text-[11px] text-primary font-semibold">
                  {game.time}
                </span>
              </div>
            )}
            {isFinished && (
              <div className="text-center">
                <span className="text-[11px] text-muted-foreground">
                  {game.time}
                </span>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-4">
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
                  <span className="font-display font-semibold text-foreground text-sm">
                    {game.time}
                  </span>
                </div>
              )}
              {isLive && (
                <span className="text-[11px] text-primary font-semibold">
                  {game.time}
                </span>
              )}
            </div>
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
        )}

        {/* Bottom row */}
        <div className="mt-3 pt-3 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground">
          <span>{game.venue}</span>
          <div className="flex items-center gap-3">
            {isFinished && game.highlightVideo && (
              <button
                className="flex items-center gap-1 text-primary hover:underline font-medium"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowVideo(true);
                }}
              >
                <Play className="w-3 h-3" /> Watch Highlights
              </button>
            )}
            {game.status === "scheduled" && (
              <button className="text-primary hover:underline font-medium">
                Set Reminder
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Video modal */}
      <AnimatePresence>
        {showVideo && game.highlightVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/90 flex items-center justify-center p-4"
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute -top-10 right-0 p-2 rounded-full bg-secondary text-foreground hover:bg-secondary/80 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="aspect-video bg-card rounded-xl overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${game.highlightVideo}?autoplay=1`}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={game.highlightTitle || "Match Highlights"}
                />
              </div>
              <p className="text-center text-sm text-muted-foreground mt-3">
                {game.highlightTitle}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GameCard;

import { Trophy, Timer, Tv } from "lucide-react";

const sports = [
  { name: "NFL", icon: "🏈", live: true },
  { name: "NBA", icon: "🏀", live: false },
  { name: "MLB", icon: "⚾", live: true },
  { name: "NHL", icon: "🏒", live: false },
  { name: "Soccer", icon: "⚽", live: true },
  { name: "F1", icon: "🏎️", live: false },
];

const SportsHub = () => (
  <section className="py-8">
    <div className="container">
      <div className="flex items-center gap-2 mb-6">
        <Trophy className="w-5 h-5 text-primary" />
        <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">Sports Hub</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {sports.map((sport) => (
          <button
            key={sport.name}
            className="glass-card rounded-xl p-4 flex flex-col items-center gap-3 hover:border-primary/50 transition-colors group relative"
          >
            {sport.live && (
              <span className="absolute top-2 right-2 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
                <span className="text-[10px] font-semibold text-destructive">LIVE</span>
              </span>
            )}
            <span className="text-3xl">{sport.icon}</span>
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
              {sport.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  </section>
);

export default SportsHub;

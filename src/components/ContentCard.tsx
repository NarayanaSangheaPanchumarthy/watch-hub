import { Star, Play } from "lucide-react";
import { Link } from "react-router-dom";
import type { Movie } from "@/data/mockData";

interface ContentCardProps {
  item: Movie;
  rank?: number;
}

const ContentCard = ({ item, rank }: ContentCardProps) => {
  return (
    <Link
      to={`/title/${item.id}`}
      className="group flex-shrink-0 w-[160px] md:w-[190px]"
    >
      <div className="relative rounded-xl overflow-hidden mb-3 ring-1 ring-border/50 group-hover:ring-primary/60 transition-all duration-500 group-hover:shadow-card-hover">
        {rank !== undefined && (
          <div className="absolute top-0 left-0 z-10 bg-gradient-gold text-primary-foreground w-8 h-8 flex items-center justify-center font-display font-bold text-sm rounded-br-xl">
            {rank}
          </div>
        )}
        <img
          src={item.poster}
          alt={item.title}
          className="w-full aspect-[2/3] object-cover group-hover:scale-[1.06] transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Hover Play */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-12 h-12 rounded-full bg-primary/90 backdrop-blur flex items-center justify-center glow-accent translate-y-2 group-hover:translate-y-0 transition-transform">
            <Play className="w-5 h-5 fill-primary-foreground text-primary-foreground ml-0.5" />
          </div>
        </div>

        <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-500">
          <div className="flex flex-wrap gap-1">
            {item.providers.slice(0, 2).map((p) => (
              <span
                key={p.name}
                className="px-2 py-0.5 rounded text-[10px] font-semibold text-foreground"
                style={{ backgroundColor: p.color }}
              >
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      <h3 className="text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">
        {item.title}
      </h3>
      <div className="flex items-center gap-2 mt-0.5">
        <Star className="w-3 h-3 fill-primary text-primary" />
        <span className="text-xs text-muted-foreground">{item.rating}</span>
        <span className="text-xs text-muted-foreground/70">• {item.year}</span>
      </div>
    </Link>
  );
};

export default ContentCard;

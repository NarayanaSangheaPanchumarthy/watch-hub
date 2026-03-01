import { Star } from "lucide-react";
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
      className="group flex-shrink-0 w-[160px] md:w-[185px]"
    >
      <div className="relative rounded-lg overflow-hidden mb-2">
        {rank !== undefined && (
          <div className="absolute top-0 left-0 z-10 bg-primary text-primary-foreground w-7 h-7 flex items-center justify-center font-display font-bold text-sm rounded-br-lg">
            {rank}
          </div>
        )}
        <img
          src={item.poster}
          alt={item.title}
          className="w-full aspect-[2/3] object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
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
      <h3 className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
        {item.title}
      </h3>
      <div className="flex items-center gap-2 mt-0.5">
        <Star className="w-3 h-3 fill-primary text-primary" />
        <span className="text-xs text-muted-foreground">{item.rating}</span>
        <span className="text-xs text-muted-foreground">• {item.year}</span>
      </div>
    </Link>
  );
};

export default ContentCard;

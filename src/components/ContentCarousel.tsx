import { useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ContentCard from "./ContentCard";
import type { Movie } from "@/data/mockData";

interface ContentCarouselProps {
  title: string;
  items: Movie[];
  ranked?: boolean;
  linkTo?: string;
}

const ContentCarousel = ({ title, items, ranked, linkTo }: ContentCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = dir === "left" ? -440 : 440;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  const TitleEl = () => (
    <span className="font-display text-xl md:text-2xl font-bold text-foreground flex items-center gap-2">
      {title}
    </span>
  );

  return (
    <section className="py-7 md:py-9">
      <div className="container">
        <div className="flex items-end justify-between mb-5">
          <div className="flex items-center gap-3">
            <span className="hidden md:block w-1 h-7 rounded-full bg-gradient-gold" />
            {linkTo ? (
              <Link
                to={linkTo}
                className="group flex items-center gap-2 hover:text-primary transition-colors"
              >
                <TitleEl />
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            ) : (
              <TitleEl />
            )}
          </div>
          <div className="flex items-center gap-1.5">
            {linkTo && (
              <Link
                to={linkTo}
                className="hidden sm:inline-flex text-xs font-medium uppercase tracking-wider text-muted-foreground hover:text-primary mr-2 transition-colors"
              >
                View all
              </Link>
            )}
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="p-2 rounded-full glass-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="p-2 rounded-full glass-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-3 edge-fade-x"
        >
          {items.map((item, i) => (
            <ContentCard key={item.id} item={item} rank={ranked ? i + 1 : undefined} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentCarousel;

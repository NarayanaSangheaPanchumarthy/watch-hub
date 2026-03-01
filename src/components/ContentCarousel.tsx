import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ContentCard from "./ContentCard";
import type { Movie } from "@/data/mockData";

interface ContentCarouselProps {
  title: string;
  items: Movie[];
  ranked?: boolean;
}

const ContentCarousel = ({ title, items, ranked }: ContentCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = dir === "left" ? -400 : 400;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="py-6">
      <div className="container">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">{title}</h2>
          <div className="flex items-center gap-1">
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
          {items.map((item, i) => (
            <ContentCard key={item.id} item={item} rank={ranked ? i + 1 : undefined} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentCarousel;

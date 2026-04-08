import { Link } from "react-router-dom";
import ContentCarousel from "./ContentCarousel";
import type { Movie } from "@/data/mockData";

interface GenreRowProps {
  title: string;
  items: Movie[];
  icon?: string;
  ranked?: boolean;
  linkTo?: string;
}

const GenreRow = ({ title, items, icon, ranked, linkTo }: GenreRowProps) => {
  if (items.length === 0) return null;

  return (
    <div className="relative">
      {linkTo && (
        <div className="container flex justify-end -mb-10 relative z-10">
          <Link
            to={linkTo}
            className="text-xs text-primary hover:underline font-medium"
          >
            View All →
          </Link>
        </div>
      )}
      <ContentCarousel
        title={icon ? `${icon} ${title}` : title}
        items={items}
        ranked={ranked}
      />
    </div>
  );
};

export default GenreRow;

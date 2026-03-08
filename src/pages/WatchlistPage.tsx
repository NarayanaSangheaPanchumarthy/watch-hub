import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContentCard from "@/components/ContentCard";
import { useWatchlist } from "@/contexts/WatchlistContext";
import { allContent } from "@/data/mockData";
import { BookmarkX } from "lucide-react";

const WatchlistPage = () => {
  const { watchlist } = useWatchlist();
  const items = allContent.filter((c) => watchlist.includes(c.id));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container pt-24 pb-12">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
          My Watchlist
        </h1>
        <p className="text-muted-foreground mb-8">
          {items.length} title{items.length !== 1 ? "s" : ""} saved
        </p>

        {items.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {items.map((item) => (
              <ContentCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <BookmarkX className="w-16 h-16 text-muted-foreground/40 mb-4" />
            <h2 className="font-display text-xl font-semibold text-foreground mb-2">
              Your watchlist is empty
            </h2>
            <p className="text-muted-foreground max-w-md">
              Browse movies and shows, then tap the bookmark icon to add them here.
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default WatchlistPage;

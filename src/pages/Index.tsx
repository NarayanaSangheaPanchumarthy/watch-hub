import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ContentCarousel from "@/components/ContentCarousel";
import SportsHub from "@/components/SportsHub";
import CTASection from "@/components/CTASection";
import CountriesGrid from "@/components/CountriesGrid";
import Footer from "@/components/Footer";
import {
  topRatedMovies,
  topRatedShows,
  trendingMovies,
  trendingShows,
  horrorPicks,
  comedyPicks,
  romancePicks,
  sciFiPicks,
  thrillerPicks,
  actionPicks,
  newReleases,
  freeToWatch,
} from "@/data/mockData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />

        {/* Top Rated */}
        <ContentCarousel title="🏆 Top 10 Movies" items={topRatedMovies} ranked />
        <ContentCarousel title="📺 Top Rated TV Shows" items={topRatedShows} ranked />

        {/* Genre Rows */}
        <ContentCarousel title="🎃 Horror" items={horrorPicks} />
        <ContentCarousel title="😂 Comedy" items={comedyPicks} />
        <ContentCarousel title="💕 Romance" items={romancePicks} />
        <ContentCarousel title="🚀 Sci-Fi & Fiction" items={sciFiPicks} />
        <ContentCarousel title="🔪 Thrillers" items={thrillerPicks} />
        <ContentCarousel title="💥 Action" items={actionPicks} />

        {/* Discovery */}
        <ContentCarousel title="🆕 New Releases" items={newReleases} />
        <ContentCarousel title="▶️ Free to Watch" items={freeToWatch} />

        {/* Trending */}
        <ContentCarousel title="🔥 Trending Movies" items={trendingMovies} />
        <ContentCarousel title="📡 Trending TV Shows" items={trendingShows} />

        <SportsHub />
        <CTASection />
        <CountriesGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

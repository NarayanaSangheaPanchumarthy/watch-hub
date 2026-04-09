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
        <ContentCarousel title="🏆 Top 10 Movies" items={topRatedMovies} ranked linkTo="/movies" />
        <ContentCarousel title="📺 Top Rated TV Shows" items={topRatedShows} ranked linkTo="/shows" />

        {/* Genre Rows */}
        <ContentCarousel title="🎃 Horror" items={horrorPicks} linkTo="/movies?genre=Horror" />
        <ContentCarousel title="😂 Comedy" items={comedyPicks} linkTo="/movies?genre=Comedy" />
        <ContentCarousel title="💕 Romance" items={romancePicks} linkTo="/movies?genre=Romance" />
        <ContentCarousel title="🚀 Sci-Fi & Fiction" items={sciFiPicks} linkTo="/movies?genre=Science Fiction" />
        <ContentCarousel title="🔪 Thrillers" items={thrillerPicks} linkTo="/movies?genre=Thriller" />
        <ContentCarousel title="💥 Action" items={actionPicks} linkTo="/movies?genre=Action" />

        {/* Discovery */}
        <ContentCarousel title="🆕 New Releases" items={newReleases} linkTo="/movies" />
        <ContentCarousel title="▶️ Free to Watch" items={freeToWatch} linkTo="/movies" />

        {/* Trending */}
        <ContentCarousel title="🔥 Trending Movies" items={trendingMovies} linkTo="/movies" />
        <ContentCarousel title="📡 Trending TV Shows" items={trendingShows} linkTo="/shows" />

        <SportsHub />
        <CTASection />
        <CountriesGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

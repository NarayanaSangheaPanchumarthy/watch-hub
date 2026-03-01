import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ContentCarousel from "@/components/ContentCarousel";
import SportsHub from "@/components/SportsHub";
import CTASection from "@/components/CTASection";
import CountriesGrid from "@/components/CountriesGrid";
import Footer from "@/components/Footer";
import { trendingMovies, trendingShows } from "@/data/mockData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ContentCarousel title="Top 10 Movies This Week" items={trendingMovies} ranked />
        <ContentCarousel title="Trending TV Shows" items={trendingShows} />
        <SportsHub />
        <ContentCarousel title="New on Netflix" items={[...trendingMovies].reverse()} />
        <CTASection />
        <CountriesGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import { Play, Info, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </div>

      <div className="container relative z-10 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
              Trending Now
            </span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Star className="w-4 h-4 fill-primary text-primary" />
              <span className="text-foreground font-semibold">9.1</span>/10
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight mb-4">
            Echoes of Tomorrow
          </h1>
          <p className="text-muted-foreground text-lg mb-6 line-clamp-2">
            A woman discovers she can communicate with her future self, leading to impossible choices 
            that could save — or doom — everyone she loves.
          </p>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm text-muted-foreground">2024</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span className="text-sm text-muted-foreground">2h 15min</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span className="px-2 py-0.5 rounded border border-border text-xs text-muted-foreground">PG-13</span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/title/m-3"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors glow-accent"
            >
              <Play className="w-5 h-5" />
              Watch Now
            </Link>
            <Link
              to="/title/3"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/80 transition-colors"
            >
              <Info className="w-5 h-5" />
              More Info
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

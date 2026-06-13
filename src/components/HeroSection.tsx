import { Play, Info, Star, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-[88vh] min-h-[600px] flex items-end overflow-hidden grain">
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          src="https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg"
          alt="Dune: Part Two"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-cinema" />
      </div>

      <div className="container relative z-10 pb-20 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-panel ring-gold text-primary text-[11px] font-semibold uppercase tracking-[0.18em]">
              <Sparkles className="w-3 h-3" />
              Featured Tonight
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Star className="w-4 h-4 fill-primary text-primary" />
              <span className="text-foreground font-semibold">8.6</span>
              <span className="opacity-70">/10</span>
            </span>
          </motion.div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-5">
            <span className="block text-foreground">Dune:</span>
            <span className="block text-gradient-gold">Part Two</span>
          </h1>

          <p className="text-muted-foreground text-base md:text-lg mb-6 max-w-xl leading-relaxed">
            Paul Atreides unites with the Fremen to seek revenge against the conspirators who destroyed
            his family, facing a choice between love and the fate of the universe.
          </p>

          <div className="flex items-center gap-3 mb-8 text-xs md:text-sm text-muted-foreground">
            <span>2024</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/60" />
            <span>2h 46min</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/60" />
            <span className="px-2 py-0.5 rounded border border-border/70">PG-13</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/60" />
            <span className="uppercase tracking-wider">Sci-Fi · Epic</span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/title/m-2"
              className="group relative flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-gold text-primary-foreground font-semibold glow-accent transition-transform hover:scale-[1.03] active:scale-100"
            >
              <Play className="w-5 h-5 fill-current" />
              Watch Now
            </Link>
            <Link
              to="/title/m-2"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl glass-panel text-foreground font-semibold hover:border-primary/50 transition-all"
            >
              <Info className="w-5 h-5" />
              More Info
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom edge fade for cinematic seam */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;

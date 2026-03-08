import { Zap } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => (
  <section className="py-16">
    <div className="container">
      <div className="relative rounded-2xl overflow-hidden bg-secondary p-8 md:p-12 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
        <div className="relative z-10 max-w-xl mx-auto">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
            <Zap className="w-6 h-6 text-primary" />
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            Never miss where to stream
          </h2>
          <p className="text-muted-foreground mb-6">
            Track your watchlist across all platforms. Get alerts when your favorites become available.
          </p>
          <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors glow-accent">
            Create Free Account
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;

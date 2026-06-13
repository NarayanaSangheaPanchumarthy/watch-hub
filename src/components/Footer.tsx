import { Link } from "react-router-dom";

const footerLinks = {
  Product: ["Movies", "TV Shows", "Sports", "New & Popular", "My List"],
  Company: ["About", "Blog", "Careers", "Press", "Contact"],
  Support: ["Help Center", "Terms of Use", "Privacy Policy", "Cookie Settings", "Accessibility"],
  Connect: ["Twitter", "Instagram", "Discord", "YouTube", "Reddit"],
};

const Footer = () => (
  <footer className="relative mt-16 border-t border-border/60 bg-card/40 backdrop-blur-xl">
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
    <div className="container py-14">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-xl bg-gradient-gold flex items-center justify-center glow-soft">
              <span className="text-primary-foreground font-display font-bold text-sm">SW</span>
            </div>
            <span className="font-display font-bold text-lg text-foreground">
              Stream<span className="text-gradient-gold">Watch</span>
            </span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Your cinematic guide to streaming. Find where to watch anything, anywhere.
          </p>
        </div>
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category}>
            <h4 className="font-display font-semibold text-foreground mb-4 text-xs uppercase tracking-[0.18em] text-primary/90">{category}</h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link}>
                  <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border/60 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">© 2026 StreamWatch. Crafted for cinephiles.</p>
        <p className="text-xs text-muted-foreground/70 uppercase tracking-[0.2em]">Powered by Lovable</p>
      </div>
    </div>
  </footer>
);

export default Footer;

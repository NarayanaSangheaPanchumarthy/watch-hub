import { Link } from "react-router-dom";

const footerLinks = {
  Product: ["Movies", "TV Shows", "Sports", "New & Popular", "My List"],
  Company: ["About", "Blog", "Careers", "Press", "Contact"],
  Support: ["Help Center", "Terms of Use", "Privacy Policy", "Cookie Settings", "Accessibility"],
  "Connect": ["Twitter", "Instagram", "Discord", "YouTube", "Reddit"],
};

const Footer = () => (
  <footer className="border-t border-border bg-card/50 mt-8">
    <div className="container py-12">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-sm">SW</span>
            </div>
            <span className="font-display font-bold text-lg text-foreground">
              Stream<span className="text-primary">Watch</span>
            </span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Your guide to streaming. Find where to watch movies and TV shows across all platforms.
          </p>
        </div>
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category}>
            <h4 className="font-display font-semibold text-foreground mb-3 text-sm">{category}</h4>
            <ul className="space-y-2">
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
      <div className="border-t border-border mt-8 pt-6 text-center">
        <p className="text-xs text-muted-foreground">© 2025 StreamWatch. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;

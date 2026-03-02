import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X, User, Film, Tv, Trophy, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Movies", path: "/movies", icon: Film },
  { label: "TV Shows", path: "/shows", icon: Tv },
  { label: "Sports", path: "/sports", icon: Trophy },
  { label: "Blog", path: "/blog", icon: BookOpen },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-sm">SW</span>
          </div>
          <span className="font-display font-bold text-xl text-foreground hidden sm:block">
            Stream<span className="text-primary">Watch</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <link.icon className="w-4 h-4" />
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <AnimatePresence>
            {searchOpen && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 240, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <input
                  autoFocus
                  placeholder="Search movies, shows..."
                  className="w-full bg-secondary text-foreground text-sm px-3 py-2 rounded-lg outline-none ring-1 ring-border focus:ring-primary"
                />
              </motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
            <User className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground md:hidden"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-border/50"
          >
            <nav className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  <link.icon className="w-5 h-5" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

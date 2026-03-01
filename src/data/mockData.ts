export interface Movie {
  id: string;
  title: string;
  year: number;
  rating: number;
  genres: string[];
  poster: string;
  backdrop: string;
  overview: string;
  runtime: string;
  type: 'movie' | 'tv';
  seasons?: number;
  certification?: string;
  director?: string;
  cast: CastMember[];
  providers: StreamingProvider[];
  trailerKey?: string;
}

export interface CastMember {
  name: string;
  character: string;
  photo: string;
}

export interface StreamingProvider {
  name: string;
  logo: string;
  type: 'stream' | 'rent' | 'buy';
  price?: string;
  color: string;
}

export interface Country {
  name: string;
  code: string;
  flag: string;
}

const placeholderCast: CastMember[] = [
  { name: "Alex Morgan", character: "Lead Role", photo: "https://i.pravatar.cc/200?img=1" },
  { name: "Jamie Chen", character: "Supporting", photo: "https://i.pravatar.cc/200?img=2" },
  { name: "Sam Rivera", character: "Antagonist", photo: "https://i.pravatar.cc/200?img=3" },
  { name: "Taylor Brooks", character: "Sidekick", photo: "https://i.pravatar.cc/200?img=4" },
  { name: "Jordan Lee", character: "Mentor", photo: "https://i.pravatar.cc/200?img=5" },
  { name: "Casey Kim", character: "Partner", photo: "https://i.pravatar.cc/200?img=6" },
];

const providers: StreamingProvider[] = [
  { name: "Netflix", logo: "N", type: "stream", color: "#E50914" },
  { name: "Prime Video", logo: "P", type: "stream", color: "#00A8E1" },
  { name: "Disney+", logo: "D+", type: "stream", color: "#113CCF" },
  { name: "Apple TV+", logo: "A", type: "rent", price: "$3.99", color: "#555" },
  { name: "Google Play", logo: "G", type: "buy", price: "$14.99", color: "#0F9D58" },
];

export const trendingMovies: Movie[] = [
  {
    id: "1", title: "The Last Frontier", year: 2025, rating: 8.4, genres: ["Sci-Fi", "Action", "Thriller"],
    poster: "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=1920&h=800&fit=crop",
    overview: "In a world ravaged by climate collapse, a team of scientists embarks on a perilous mission to terraform a new planet. But what they find challenges everything they know about humanity's place in the universe.",
    runtime: "2h 28min", type: "movie", certification: "PG-13", director: "Elena Vasquez",
    cast: placeholderCast, providers: [providers[0], providers[3], providers[4]],
    trailerKey: "dQw4w9WgXcQ"
  },
  {
    id: "2", title: "Midnight Protocol", year: 2025, rating: 7.9, genres: ["Thriller", "Crime"],
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&h=800&fit=crop",
    overview: "A cybersecurity expert uncovers a global conspiracy that threatens to unravel the fabric of the digital world.",
    runtime: "2h 05min", type: "movie", certification: "R", director: "Marcus Cole",
    cast: placeholderCast, providers: [providers[1], providers[3]],
  },
  {
    id: "3", title: "Echoes of Tomorrow", year: 2024, rating: 9.1, genres: ["Drama", "Sci-Fi"],
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&h=800&fit=crop",
    overview: "A woman discovers she can communicate with her future self, leading to impossible choices that could save — or doom — everyone she loves.",
    runtime: "2h 15min", type: "movie", certification: "PG-13", director: "Ava Lin",
    cast: placeholderCast, providers: [providers[2], providers[4]],
  },
  {
    id: "4", title: "The Crown Affair", year: 2025, rating: 8.0, genres: ["Drama", "History"],
    poster: "https://images.unsplash.com/photo-1518676590747-1e3dcf5a2e45?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1518676590747-1e3dcf5a2e45?w=1920&h=800&fit=crop",
    overview: "A sweeping period drama about royal intrigue and forbidden romance in 18th century Europe.",
    runtime: "2h 32min", type: "movie", certification: "PG-13", director: "James Thornton",
    cast: placeholderCast, providers: [providers[0], providers[1]],
  },
  {
    id: "5", title: "Velocity", year: 2025, rating: 7.5, genres: ["Action", "Thriller"],
    poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=1920&h=800&fit=crop",
    overview: "An underground street racer must outrun both the law and a ruthless crime syndicate.",
    runtime: "1h 58min", type: "movie", certification: "R", director: "Rico Santana",
    cast: placeholderCast, providers: [providers[0], providers[3], providers[4]],
  },
  {
    id: "6", title: "Whisper Network", year: 2025, rating: 8.7, genres: ["Thriller", "Mystery"],
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1920&h=800&fit=crop",
    overview: "Three women at a tech company uncover a web of corporate espionage that puts their lives in danger.",
    runtime: "2h 10min", type: "movie", certification: "R", director: "Sarah Park",
    cast: placeholderCast, providers: [providers[1], providers[2]],
  },
];

export const trendingShows: Movie[] = [
  {
    id: "tv-1", title: "Dark Meridian", year: 2025, rating: 8.8, genres: ["Sci-Fi", "Drama"],
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1920&h=800&fit=crop",
    overview: "A detective in a parallel universe investigates crimes that blur the line between reality and simulation.",
    runtime: "55min", type: "tv", seasons: 3, certification: "TV-MA",
    cast: placeholderCast, providers: [providers[0]],
  },
  {
    id: "tv-2", title: "The Alchemist's Table", year: 2024, rating: 9.2, genres: ["Fantasy", "Drama"],
    poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1920&h=800&fit=crop",
    overview: "A culinary prodigy discovers that certain recipes unlock magical abilities, drawing the attention of dark forces.",
    runtime: "48min", type: "tv", seasons: 2, certification: "TV-14",
    cast: placeholderCast, providers: [providers[2]],
  },
  {
    id: "tv-3", title: "Signal Lost", year: 2025, rating: 8.1, genres: ["Thriller", "Sci-Fi"],
    poster: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=1920&h=800&fit=crop",
    overview: "After receiving an alien signal, a small-town radio operator becomes the center of a global crisis.",
    runtime: "50min", type: "tv", seasons: 1, certification: "TV-14",
    cast: placeholderCast, providers: [providers[1], providers[0]],
  },
  {
    id: "tv-4", title: "Empire State", year: 2025, rating: 7.6, genres: ["Crime", "Drama"],
    poster: "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=1920&h=800&fit=crop",
    overview: "A powerful crime family's empire begins to crumble as a new generation takes over.",
    runtime: "58min", type: "tv", seasons: 4, certification: "TV-MA",
    cast: placeholderCast, providers: [providers[0], providers[1]],
  },
  {
    id: "tv-5", title: "Northern Lights", year: 2024, rating: 8.5, genres: ["Adventure", "Drama"],
    poster: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=800&fit=crop",
    overview: "A documentary crew ventures into the Arctic wilderness and discovers something no one was prepared for.",
    runtime: "45min", type: "tv", seasons: 2, certification: "TV-PG",
    cast: placeholderCast, providers: [providers[2], providers[3]],
  },
];

export const countries: Country[] = [
  { name: "United States", code: "US", flag: "🇺🇸" },
  { name: "United Kingdom", code: "GB", flag: "🇬🇧" },
  { name: "Canada", code: "CA", flag: "🇨🇦" },
  { name: "Germany", code: "DE", flag: "🇩🇪" },
  { name: "France", code: "FR", flag: "🇫🇷" },
  { name: "Japan", code: "JP", flag: "🇯🇵" },
  { name: "Australia", code: "AU", flag: "🇦🇺" },
  { name: "Brazil", code: "BR", flag: "🇧🇷" },
  { name: "India", code: "IN", flag: "🇮🇳" },
  { name: "South Korea", code: "KR", flag: "🇰🇷" },
  { name: "Spain", code: "ES", flag: "🇪🇸" },
  { name: "Italy", code: "IT", flag: "🇮🇹" },
  { name: "Mexico", code: "MX", flag: "🇲🇽" },
  { name: "Sweden", code: "SE", flag: "🇸🇪" },
  { name: "Netherlands", code: "NL", flag: "🇳🇱" },
  { name: "Argentina", code: "AR", flag: "🇦🇷" },
];

export const allContent = [...trendingMovies, ...trendingShows];

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

// Additional movies for listings
export const allMovies: Movie[] = [
  ...trendingMovies,
  {
    id: "m7", title: "Neon Requiem", year: 2024, rating: 7.2, genres: ["Action", "Sci-Fi"],
    poster: "https://images.unsplash.com/photo-1518676590747-1e3dcf5a2e45?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1518676590747-1e3dcf5a2e45?w=1920&h=800&fit=crop",
    overview: "A rogue AI enlists a former hacker to prevent its own destruction.",
    runtime: "1h 52min", type: "movie", certification: "R", director: "Kai Nakamura",
    cast: placeholderCast, providers: [providers[0], providers[2]],
  },
  {
    id: "m8", title: "The Garden of Bones", year: 2023, rating: 8.3, genres: ["Horror", "Mystery"],
    poster: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=800&fit=crop",
    overview: "An archaeologist unearths a forbidden burial ground beneath a sleepy English village.",
    runtime: "2h 01min", type: "movie", certification: "R", director: "Fiona Blackwood",
    cast: placeholderCast, providers: [providers[1]],
  },
  {
    id: "m9", title: "Parallel Lines", year: 2025, rating: 6.8, genres: ["Drama", "Romance"],
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1920&h=800&fit=crop",
    overview: "Two strangers keep crossing paths in different cities, connected by an invisible thread.",
    runtime: "1h 48min", type: "movie", certification: "PG-13", director: "Lena Moretti",
    cast: placeholderCast, providers: [providers[2], providers[3]],
  },
  {
    id: "m10", title: "Iron Summit", year: 2024, rating: 7.7, genres: ["Action", "Adventure"],
    poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1920&h=800&fit=crop",
    overview: "A mountaineering expedition becomes a fight for survival when a hidden military base is discovered.",
    runtime: "2h 14min", type: "movie", certification: "PG-13", director: "David Okafor",
    cast: placeholderCast, providers: [providers[0], providers[4]],
  },
  {
    id: "m11", title: "Sotto Voce", year: 2023, rating: 8.9, genres: ["Drama", "Music"],
    poster: "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=1920&h=800&fit=crop",
    overview: "A deaf composer creates a revolutionary symphony through vibrations and technology.",
    runtime: "2h 20min", type: "movie", certification: "PG", director: "Ava Lin",
    cast: placeholderCast, providers: [providers[1], providers[2]],
  },
  {
    id: "m12", title: "Cold Pursuit", year: 2025, rating: 6.5, genres: ["Thriller", "Crime"],
    poster: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=1920&h=800&fit=crop",
    overview: "A retired detective is pulled back into the underworld when her daughter goes missing.",
    runtime: "1h 55min", type: "movie", certification: "R", director: "Marcus Cole",
    cast: placeholderCast, providers: [providers[0], providers[3]],
  },
];

export const allShows: Movie[] = [
  ...trendingShows,
  {
    id: "tv-6", title: "Glass Houses", year: 2025, rating: 8.2, genres: ["Drama", "Thriller"],
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1920&h=800&fit=crop",
    overview: "A wealthy family's secrets unravel when a reality show films inside their estate.",
    runtime: "52min", type: "tv", seasons: 1, certification: "TV-MA",
    cast: placeholderCast, providers: [providers[0], providers[1]],
  },
  {
    id: "tv-7", title: "The Lighthouse", year: 2024, rating: 7.9, genres: ["Horror", "Mystery"],
    poster: "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=1920&h=800&fit=crop",
    overview: "A keeper at a remote lighthouse begins receiving impossible transmissions from the dead.",
    runtime: "42min", type: "tv", seasons: 2, certification: "TV-MA",
    cast: placeholderCast, providers: [providers[2]],
  },
  {
    id: "tv-8", title: "Codec", year: 2025, rating: 8.6, genres: ["Sci-Fi", "Thriller"],
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&h=800&fit=crop",
    overview: "Programmers discover their code is rewriting reality itself.",
    runtime: "48min", type: "tv", seasons: 1, certification: "TV-14",
    cast: placeholderCast, providers: [providers[1], providers[0]],
  },
  {
    id: "tv-9", title: "Kindred Spirits", year: 2023, rating: 7.3, genres: ["Fantasy", "Romance"],
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&h=800&fit=crop",
    overview: "Soulmates across different timelines must find each other before the connection fades.",
    runtime: "50min", type: "tv", seasons: 3, certification: "TV-PG",
    cast: placeholderCast, providers: [providers[2], providers[3]],
  },
  {
    id: "tv-10", title: "Frontline", year: 2024, rating: 9.0, genres: ["Crime", "Drama"],
    poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=1920&h=800&fit=crop",
    overview: "Undercover officers navigate corruption within their own department.",
    runtime: "55min", type: "tv", seasons: 2, certification: "TV-MA",
    cast: placeholderCast, providers: [providers[0]],
  },
];

export const allGenres = [
  "Action", "Adventure", "Comedy", "Crime", "Drama", "Fantasy",
  "History", "Horror", "Music", "Mystery", "Romance", "Sci-Fi", "Thriller",
];

export const allProviderNames = ["Netflix", "Prime Video", "Disney+", "Apple TV+", "Google Play"];
export const allYears = [2025, 2024, 2023];

export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  role: string;
  articleCount: number;
  socials: { twitter?: string; linkedin?: string };
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  coverImage: string;
  category: string;
  tags: string[];
  authorId: string;
  publishedAt: string;
  readTime: string;
}

export const authors: Author[] = [
  {
    id: "a1", name: "Elena Vasquez", avatar: "https://i.pravatar.cc/200?img=32",
    bio: "Senior entertainment journalist with 12 years covering the streaming industry. Previously at Variety and The Hollywood Reporter.",
    role: "Senior Editor", articleCount: 47, socials: { twitter: "@elenavasquez" },
  },
  {
    id: "a2", name: "Marcus Cole", avatar: "https://i.pravatar.cc/200?img=11",
    bio: "Tech and media analyst focused on the business of streaming. Regular contributor to major outlets.",
    role: "Tech Analyst", articleCount: 31, socials: { twitter: "@marcuscole", linkedin: "marcuscole" },
  },
  {
    id: "a3", name: "Ava Lin", avatar: "https://i.pravatar.cc/200?img=44",
    bio: "Pop culture writer and TV critic. Passionate about representation in media and emerging storytelling formats.",
    role: "Culture Critic", articleCount: 56, socials: { twitter: "@avalin" },
  },
];

export const articles: Article[] = [
  {
    id: "art-1", title: "The Streaming Wars: Who's Really Winning in 2025?",
    slug: "streaming-wars-2025", category: "Industry",
    excerpt: "As subscription fatigue sets in, the streaming landscape is shifting dramatically. We break down the numbers and the strategies.",
    body: `The streaming industry has entered a pivotal phase. After years of aggressive spending and subscriber growth at all costs, the major players are now focused on profitability.\n\nNetflix remains the undisputed leader with over 300 million subscribers globally, but the gap is narrowing. Disney+ has made significant gains through its bundle strategy, while Amazon Prime Video leverages its e-commerce ecosystem.\n\n## The Profitability Pivot\n\nThe days of burning cash are over. Every major streamer has raised prices, introduced ad-supported tiers, and cracked down on password sharing. The question is no longer "how many subscribers can we get?" but "how much revenue can we extract per user?"\n\n## What's Next?\n\nExpect more consolidation. Smaller players will either merge or be acquired. The bundle is back — just in a different form than traditional cable. And sports rights will be the next major battleground.`,
    coverImage: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&h=450&fit=crop",
    tags: ["Streaming", "Netflix", "Disney+", "Industry"], authorId: "a2",
    publishedAt: "2025-02-28", readTime: "8 min read",
  },
  {
    id: "art-2", title: "Why Sci-Fi Television Is Having Its Golden Age Right Now",
    slug: "sci-fi-golden-age", category: "Analysis",
    excerpt: "From Dark Meridian to Echoes of Tomorrow, science fiction on the small screen has never been better. Here's why.",
    body: `We are living through an unprecedented era of science fiction television. The genre that was once relegated to niche audiences and modest budgets is now commanding the biggest investments in the industry.\n\n## Budget Meets Vision\n\nShows like Dark Meridian are operating with feature-film budgets, allowing creators to realize visions that would have been impossible a decade ago. The result is storytelling that's both visually stunning and intellectually ambitious.\n\n## Audience Appetite\n\nViewers are hungry for speculative fiction. In uncertain times, sci-fi offers both escapism and a lens through which to examine our present reality. The genre's flexibility allows it to tackle everything from climate change to AI ethics.\n\n## The Creator Renaissance\n\nStreamers are giving showrunners more creative freedom than traditional networks ever did. This has attracted top-tier talent from film, literature, and gaming.`,
    coverImage: "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=800&h=450&fit=crop",
    tags: ["Sci-Fi", "TV Shows", "Trending"], authorId: "a3",
    publishedAt: "2025-02-25", readTime: "6 min read",
  },
  {
    id: "art-3", title: "The Rise of Ad-Supported Streaming: A Complete Guide",
    slug: "ad-supported-streaming-guide", category: "Guide",
    excerpt: "Ad-supported tiers are reshaping the streaming landscape. Here's everything you need to know about FAST and AVOD.",
    body: `Advertising-supported streaming is no longer an afterthought — it's becoming the primary business model for the industry.\n\n## What Are FAST and AVOD?\n\nFAST (Free Ad-Supported Streaming Television) services like Tubi and Pluto TV offer completely free content with ads. AVOD (Advertising Video on Demand) refers to cheaper subscription tiers that include advertising, like Netflix's Standard with Ads plan.\n\n## The Numbers Don't Lie\n\nAd-supported viewers now account for over 40% of total streaming hours in the US. Advertisers are shifting budgets from linear TV to streaming at an accelerating pace.\n\n## Is It Worth It?\n\nFor consumers, absolutely. The ad loads are typically lighter than traditional TV, and the savings can be substantial — often 30-50% off the ad-free price.`,
    coverImage: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=450&fit=crop",
    tags: ["Advertising", "Streaming", "Guide"], authorId: "a2",
    publishedAt: "2025-02-20", readTime: "10 min read",
  },
  {
    id: "art-4", title: "10 Hidden Gems You're Missing on Disney+",
    slug: "disney-plus-hidden-gems", category: "Recommendations",
    excerpt: "Beyond the Marvel and Star Wars franchises, Disney+ has a treasure trove of overlooked content worth your time.",
    body: `Disney+ is often pigeonholed as the home of Marvel, Star Wars, and animated classics. But dig a little deeper and you'll find an impressive catalog of underappreciated films and series.\n\n## 1. The Bear (Season 3)\nYes, everyone knows The Bear by now, but Season 3 took the show to new heights with its meditation on ambition and artistry.\n\n## 2. Shōgun\nThis epic historical drama set in feudal Japan is a masterclass in storytelling. It swept the Emmys and deserves even more attention.\n\n## 3. Under the Banner of Heaven\nAndrew Garfield delivers a career-best performance in this gripping true-crime limited series.\n\nThe list goes on — from international acquisitions to deep-cut documentaries, Disney+ rewards those willing to explore beyond the front page.`,
    coverImage: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=450&fit=crop",
    tags: ["Disney+", "Recommendations", "Hidden Gems"], authorId: "a1",
    publishedAt: "2025-02-15", readTime: "7 min read",
  },
  {
    id: "art-5", title: "How Sports Streaming Is Changing the Game Forever",
    slug: "sports-streaming-revolution", category: "Sports",
    excerpt: "From NFL Sunday Ticket to Champions League, live sports are migrating to streaming platforms at an unprecedented pace.",
    body: `The last bastion of traditional television — live sports — is finally making the leap to streaming, and the implications are enormous.\n\n## The Big Deals\n\nAmazon's Thursday Night Football was just the beginning. Apple TV+ secured MLS rights, while YouTube TV nabbed NFL Sunday Ticket. The next wave will include NBA and FIFA World Cup rights.\n\n## The Viewer Experience\n\nStreaming sports offers advantages traditional broadcasts can't match: multiple camera angles, real-time stats overlays, interactive features, and the ability to watch on any device.\n\n## The Challenges\n\nLatency remains an issue — streaming is typically 30-60 seconds behind live broadcasts. Blackout restrictions and regional licensing create a confusing patchwork of availability.`,
    coverImage: "https://images.unsplash.com/photo-1461896836934-bd45ba24e63d?w=800&h=450&fit=crop",
    tags: ["Sports", "Streaming", "NFL", "Live TV"], authorId: "a1",
    publishedAt: "2025-02-10", readTime: "9 min read",
  },
  {
    id: "art-6", title: "The Future of Interactive Storytelling in Streaming",
    slug: "interactive-storytelling-future", category: "Innovation",
    excerpt: "From Bandersnatch to AI-driven narratives, interactive content is evolving beyond simple choose-your-own-adventure formats.",
    body: `Netflix's Black Mirror: Bandersnatch was a watershed moment, but interactive storytelling has come a long way since then.\n\n## Beyond Branching Narratives\n\nNew technologies are enabling truly dynamic storytelling where AI can adjust plot elements based on viewer preferences, viewing history, and even emotional responses detected through smart devices.\n\n## The Gaming Convergence\n\nThe line between streaming and gaming continues to blur. Cloud gaming services are integrating narrative experiences that look and feel like premium TV shows.\n\n## Creator Perspectives\n\nFilmmakers and showrunners are divided. Some see interactive elements as a gimmick that undermines authorial vision. Others view it as the most exciting storytelling frontier since the invention of cinema.`,
    coverImage: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=450&fit=crop",
    tags: ["Innovation", "Interactive", "AI", "Future"], authorId: "a3",
    publishedAt: "2025-02-05", readTime: "5 min read",
  },
];

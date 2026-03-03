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

const posterImages = [
  "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=300&h=450&fit=crop",
  "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop",
  "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=450&fit=crop",
  "https://images.unsplash.com/photo-1518676590747-1e3dcf5a2e45?w=300&h=450&fit=crop",
  "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300&h=450&fit=crop",
  "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300&h=450&fit=crop",
  "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop",
  "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=450&fit=crop",
  "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=300&h=450&fit=crop",
  "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=300&h=450&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop",
  "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=300&h=450&fit=crop",
  "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=300&h=450&fit=crop",
  "https://images.unsplash.com/photo-1461896836934-bd45ba24e63d?w=300&h=450&fit=crop",
  "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=300&h=450&fit=crop",
  "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=300&h=450&fit=crop",
  "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=300&h=450&fit=crop",
  "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=300&h=450&fit=crop",
  "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=300&h=450&fit=crop",
  "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop",
];

const img = (i: number) => posterImages[i % posterImages.length];
const bdImg = (i: number) => img(i).replace("300&h=450", "1920&h=800");

const movieTitles = [
  "The Last Frontier", "Midnight Protocol", "Echoes of Tomorrow", "The Crown Affair", "Velocity",
  "Whisper Network", "Neon Requiem", "The Garden of Bones", "Parallel Lines", "Iron Summit",
  "Sotto Voce", "Cold Pursuit", "Shadow Empire", "Azure Horizon", "The Vanishing Point",
  "Dead Reckoning", "Silver Lining", "Crimson Tide Rising", "The Architect", "Glass Fortress",
  "Wildfire", "The Silent Witness", "Broken Compass", "Solar Flare", "Black Orchid",
  "Distant Thunder", "The Kingmaker", "Frostbite", "Pulse", "Emerald City",
  "The Cartographer", "Nightfall", "Red Mercury", "Parallel Universe", "The Illusionist Returns",
  "Deep Blue", "Scorched Earth", "The Inheritance", "Quantum Leap Forward", "Twilight Kingdom",
  "Apex Predator", "The Negotiator", "Stardust Memories", "Urban Legends", "The Pathfinder",
  "Obsidian", "White Noise Rising", "The Reckoning", "Crossfire", "After the Storm",
  "Phoenix Rising", "The Confession", "Dark Water", "Terminal Velocity", "The Collector",
  "Daybreak", "Zero Hour", "The Outsider", "Mirage", "Catalyst",
  "The Prodigy", "Shadowlands", "Arctic Drift", "The Emissary", "Blind Spot",
  "Convergence", "The Diplomat", "Last Light", "Hollow Earth", "Redemption Song",
  "The Watcher", "Storm Chaser", "Binary Code", "The Pioneer", "Nightingale",
  "Overdrive", "The Saboteur", "Shifting Sands", "Avalanche", "The Maestro",
  "Labyrinth", "First Contact", "The Smuggler", "Ironclad", "Phantom Thread Reborn",
  "The Exile", "Tidal Wave", "Dark Horizon", "The Protector", "Serenity Falls",
  "Echo Chamber", "The Virtuoso", "Supernova", "The Defector", "Nightwatch",
  "Harbinger", "The Alchemist", "Steel Rain", "The Navigator", "Zenith",
];

const showTitles = [
  "Dark Meridian", "The Alchemist's Table", "Signal Lost", "Empire State", "Northern Lights",
  "Glass Houses", "The Lighthouse", "Codec", "Kindred Spirits", "Frontline",
  "Shadow Protocol", "The Undercurrent", "Neon Dynasty", "Bloodline Revival", "Celestial",
  "The Foundation", "Afterglow", "Iron Curtain", "Mosaic", "The Divide",
  "Prowl", "Quantum State", "The Compound", "Echoes", "Razorwire",
  "Night Shift", "The Assembly", "Fault Lines", "Singularity", "Crimson Peak",
  "The Bureau", "Wasteland", "Origin Story", "The Circuit", "Blackout",
  "Rogue Agent", "The Sanctuary", "Deadlock", "Prism", "The Tribunal",
  "Catalyst Chronicles", "Undertow", "The Exchange", "Fracture", "Vanguard",
  "Safe House", "The Remnants", "Borderline", "Spectrum", "The Operative",
  "Crossroads", "Drift", "The Enclave", "Flashpoint", "Guardian",
  "The Informant", "Meridian Line", "Outpost", "The Protocol", "Recoil",
  "Sentinel", "The Syndicate", "Uprising", "Vertex", "Windfall",
  "The Agency", "Backbone", "Cipher", "The Descendants", "Elevation",
  "Firewall", "The Gambit", "Helix", "Infiltrate", "Junction",
  "The Keeper", "Lifeline", "Momentum", "Nexus", "Oversight",
  "The Paragon", "Quarantine", "Retribution", "Stronghold", "Threshold",
  "The Underground", "Valkyrie", "Watchpoint", "Xenon", "Yellowstone Rising",
  "Zenith Point", "Alpha Strike", "Bravo Company", "Convergence Zone", "Delta Force Rising",
  "Echo Base", "Foxtrot", "Ghost Protocol", "Hotel California", "India Ink",
];

const genrePool = ["Action", "Adventure", "Comedy", "Crime", "Drama", "Fantasy", "History", "Horror", "Music", "Mystery", "Romance", "Sci-Fi", "Thriller", "Animation", "Documentary", "War"];
const directors = ["Elena Vasquez", "Marcus Cole", "Ava Lin", "James Thornton", "Rico Santana", "Sarah Park", "Kai Nakamura", "Fiona Blackwood", "Lena Moretti", "David Okafor", "Chen Wei", "Sofia Rossi", "Raj Patel", "Emma Stone", "Lucas Grey"];
const certifications = ["PG", "PG-13", "R", "TV-14", "TV-MA", "TV-PG"];
const years = [2023, 2024, 2025, 2026];
const runtimes = ["1h 32min", "1h 45min", "1h 52min", "1h 58min", "2h 01min", "2h 05min", "2h 10min", "2h 14min", "2h 20min", "2h 28min", "2h 32min", "2h 40min"];
const tvRuntimes = ["28min", "35min", "42min", "45min", "48min", "50min", "52min", "55min", "58min", "60min"];

const overviews = [
  "A gripping tale of survival and redemption set against a backdrop of unprecedented global change.",
  "When secrets from the past resurface, a family must confront the truth that could tear them apart.",
  "In a world where technology has outpaced morality, one person dares to fight back.",
  "A heart-pounding thriller that keeps you on the edge of your seat until the final frame.",
  "An epic journey across continents reveals truths about love, loss, and the human spirit.",
  "Dark forces conspire to bring about the end of civilization as we know it.",
  "A brilliant mind becomes entangled in a web of deceit that threatens everything they hold dear.",
  "Two strangers discover that their fates are intertwined across space and time.",
  "A detective races against time to solve a case that defies all logic and reason.",
  "Set in a near-future world, this story explores the boundaries between human and machine.",
  "A powerful drama about family, loyalty, and the price of ambition in a changing world.",
  "When an ancient artifact is unearthed, it triggers a chain of events that nobody could predict.",
  "A masterful blend of suspense and emotion that redefines the genre.",
  "From the ashes of destruction, unlikely heroes emerge to reshape the future.",
  "A riveting exploration of justice, corruption, and the thin line between right and wrong.",
];

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function generateMovie(i: number): Movie {
  const rng = seededRandom(i * 137 + 42);
  const genreCount = 2 + Math.floor(rng() * 2);
  const g: string[] = [];
  while (g.length < genreCount) {
    const genre = genrePool[Math.floor(rng() * genrePool.length)];
    if (!g.includes(genre)) g.push(genre);
  }
  const providerCount = 1 + Math.floor(rng() * 3);
  const p: StreamingProvider[] = [];
  while (p.length < providerCount) {
    const prov = providers[Math.floor(rng() * providers.length)];
    if (!p.find(x => x.name === prov.name)) p.push(prov);
  }
  return {
    id: `m-${i + 1}`,
    title: movieTitles[i],
    year: years[Math.floor(rng() * years.length)],
    rating: +(5.5 + rng() * 4.4).toFixed(1),
    genres: g,
    poster: img(i),
    backdrop: bdImg(i),
    overview: overviews[Math.floor(rng() * overviews.length)],
    runtime: runtimes[Math.floor(rng() * runtimes.length)],
    type: "movie",
    certification: certifications[Math.floor(rng() * 3)],
    director: directors[Math.floor(rng() * directors.length)],
    cast: placeholderCast,
    providers: p,
    trailerKey: i < 3 ? "dQw4w9WgXcQ" : undefined,
  };
}

function generateShow(i: number): Movie {
  const rng = seededRandom(i * 251 + 99);
  const genreCount = 2 + Math.floor(rng() * 2);
  const g: string[] = [];
  while (g.length < genreCount) {
    const genre = genrePool[Math.floor(rng() * genrePool.length)];
    if (!g.includes(genre)) g.push(genre);
  }
  const providerCount = 1 + Math.floor(rng() * 3);
  const p: StreamingProvider[] = [];
  while (p.length < providerCount) {
    const prov = providers[Math.floor(rng() * providers.length)];
    if (!p.find(x => x.name === prov.name)) p.push(prov);
  }
  return {
    id: `tv-${i + 1}`,
    title: showTitles[i],
    year: years[Math.floor(rng() * years.length)],
    rating: +(5.5 + rng() * 4.4).toFixed(1),
    genres: g,
    poster: img(i + 5),
    backdrop: bdImg(i + 5),
    overview: overviews[Math.floor(rng() * overviews.length)],
    runtime: tvRuntimes[Math.floor(rng() * tvRuntimes.length)],
    type: "tv",
    seasons: 1 + Math.floor(rng() * 6),
    certification: certifications[3 + Math.floor(rng() * 3)],
    cast: placeholderCast,
    providers: p,
  };
}

// Generate 100 movies and 100 shows
export const allMovies: Movie[] = Array.from({ length: 100 }, (_, i) => generateMovie(i));
export const allShows: Movie[] = Array.from({ length: 100 }, (_, i) => generateShow(i));

// Keep first 6 as trending for homepage carousels
export const trendingMovies = allMovies.slice(0, 6);
export const trendingShows = allShows.slice(0, 6);
export const allContent = [...trendingMovies, ...trendingShows];

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

// Collect unique genres/providers/years from generated data
export const allGenres = [...new Set([...allMovies, ...allShows].flatMap(m => m.genres))].sort();
export const allProviderNames = [...new Set([...allMovies, ...allShows].flatMap(m => m.providers.map(p => p.name)))].sort();
export const allYears = [...new Set([...allMovies, ...allShows].map(m => m.year))].sort((a, b) => b - a);

// --- Blog data (unchanged) ---
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
    body: `We are living through an unprecedented era of science fiction television.\n\n## Budget Meets Vision\n\nShows like Dark Meridian are operating with feature-film budgets.\n\n## Audience Appetite\n\nViewers are hungry for speculative fiction.\n\n## The Creator Renaissance\n\nStreamers are giving showrunners more creative freedom.`,
    coverImage: "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=800&h=450&fit=crop",
    tags: ["Sci-Fi", "TV Shows", "Trending"], authorId: "a3",
    publishedAt: "2025-02-25", readTime: "6 min read",
  },
  {
    id: "art-3", title: "The Rise of Ad-Supported Streaming: A Complete Guide",
    slug: "ad-supported-streaming-guide", category: "Guide",
    excerpt: "Ad-supported tiers are reshaping the streaming landscape. Here's everything you need to know about FAST and AVOD.",
    body: `Advertising-supported streaming is no longer an afterthought.\n\n## What Are FAST and AVOD?\n\nFAST services like Tubi offer free content with ads. AVOD refers to cheaper tiers with ads.\n\n## The Numbers\n\nAd-supported viewers now account for over 40% of total streaming hours.\n\n## Is It Worth It?\n\nFor consumers, absolutely.`,
    coverImage: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=450&fit=crop",
    tags: ["Advertising", "Streaming", "Guide"], authorId: "a2",
    publishedAt: "2025-02-20", readTime: "10 min read",
  },
  {
    id: "art-4", title: "10 Hidden Gems You're Missing on Disney+",
    slug: "disney-plus-hidden-gems", category: "Recommendations",
    excerpt: "Beyond the Marvel and Star Wars franchises, Disney+ has a treasure trove of overlooked content.",
    body: `Disney+ is often pigeonholed as the home of Marvel and Star Wars. But dig deeper.\n\n## 1. The Bear (Season 3)\n\n## 2. Shōgun\n\n## 3. Under the Banner of Heaven`,
    coverImage: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=450&fit=crop",
    tags: ["Disney+", "Recommendations", "Hidden Gems"], authorId: "a1",
    publishedAt: "2025-02-15", readTime: "7 min read",
  },
  {
    id: "art-5", title: "How Sports Streaming Is Changing the Game Forever",
    slug: "sports-streaming-revolution", category: "Sports",
    excerpt: "From NFL Sunday Ticket to Champions League, live sports are migrating to streaming at an unprecedented pace.",
    body: `The last bastion of traditional television — live sports — is finally making the leap.\n\n## The Big Deals\n\nAmazon, Apple, YouTube all secured major rights.\n\n## The Viewer Experience\n\nMultiple camera angles, real-time stats overlays.\n\n## The Challenges\n\nLatency remains an issue.`,
    coverImage: "https://images.unsplash.com/photo-1461896836934-bd45ba24e63d?w=800&h=450&fit=crop",
    tags: ["Sports", "Streaming", "NFL", "Live TV"], authorId: "a1",
    publishedAt: "2025-02-10", readTime: "9 min read",
  },
  {
    id: "art-6", title: "The Future of Interactive Storytelling in Streaming",
    slug: "interactive-storytelling-future", category: "Innovation",
    excerpt: "From Bandersnatch to AI-driven narratives, interactive content is evolving.",
    body: `Netflix's Bandersnatch was a watershed moment.\n\n## Beyond Branching Narratives\n\nNew technologies enable truly dynamic storytelling.\n\n## The Gaming Convergence\n\nThe line between streaming and gaming blurs.\n\n## Creator Perspectives\n\nSome see it as gimmick, others as the most exciting frontier.`,
    coverImage: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=450&fit=crop",
    tags: ["Innovation", "Interactive", "AI", "Future"], authorId: "a3",
    publishedAt: "2025-02-05", readTime: "5 min read",
  },
];

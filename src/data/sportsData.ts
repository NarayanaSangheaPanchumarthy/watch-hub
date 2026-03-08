export interface Team {
  name: string;
  logo: string;
  score?: number | string;
}

export interface Game {
  id: string;
  sport: string;
  sportIcon: string;
  league: string;
  team1: Team;
  team2: Team;
  status: "live" | "scheduled" | "finished";
  date: string;
  time: string;
  venue: string;
  channel: string;
  provider?: string;
  highlightVideo?: string; // YouTube video ID
  highlightTitle?: string;
}

// Helper: returns dates relative to today
const today = new Date();
const fmt = (offset: number) => {
  const d = new Date(today);
  d.setDate(d.getDate() + offset);
  return d.toISOString().slice(0, 10);
};

export const sportsGames: Game[] = [
  // ===== LIVE GAMES =====
  {
    id: "l1", sport: "Football", sportIcon: "🏈", league: "NFL",
    team1: { name: "Kansas City Chiefs", logo: "🔴", score: 24 },
    team2: { name: "San Francisco 49ers", logo: "🟡", score: 21 },
    status: "live", date: fmt(0), time: "Q3 8:42",
    venue: "Arrowhead Stadium", channel: "ESPN", provider: "Netflix",
  },
  {
    id: "l2", sport: "Soccer", sportIcon: "⚽", league: "Premier League",
    team1: { name: "Arsenal", logo: "🔴", score: 2 },
    team2: { name: "Chelsea", logo: "🔵", score: 1 },
    status: "live", date: fmt(0), time: "65'",
    venue: "Emirates Stadium", channel: "NBC Sports", provider: "Peacock",
  },
  {
    id: "l3", sport: "Soccer", sportIcon: "⚽", league: "La Liga",
    team1: { name: "Real Madrid", logo: "⚪", score: 3 },
    team2: { name: "Atletico Madrid", logo: "🔴", score: 2 },
    status: "live", date: fmt(0), time: "78'",
    venue: "Santiago Bernabéu", channel: "ESPN+", provider: "ESPN+",
  },
  {
    id: "l4", sport: "Soccer", sportIcon: "⚽", league: "Bundesliga",
    team1: { name: "Bayern Munich", logo: "🔴", score: 1 },
    team2: { name: "Borussia Dortmund", logo: "🟡", score: 1 },
    status: "live", date: fmt(0), time: "52'",
    venue: "Allianz Arena", channel: "CBS Sports", provider: "Paramount+",
  },
  {
    id: "l5", sport: "Cricket", sportIcon: "🏏", league: "IPL 2026",
    team1: { name: "Mumbai Indians", logo: "🔵", score: "185/4 (18.2)" },
    team2: { name: "Chennai Super Kings", logo: "🟡", score: "172/6 (20)" },
    status: "live", date: fmt(0), time: "MI batting - Need 14 off 10",
    venue: "Wankhede Stadium", channel: "Star Sports", provider: "JioCinema",
  },
  {
    id: "l6", sport: "Cricket", sportIcon: "🏏", league: "Test Series - Ashes",
    team1: { name: "Australia", logo: "🟢", score: "342/7 (Day 2)" },
    team2: { name: "England", logo: "🏴", score: "218 all out" },
    status: "live", date: fmt(0), time: "Day 2 - Session 3",
    venue: "MCG, Melbourne", channel: "Fox Cricket", provider: "BT Sport",
  },
  {
    id: "l7", sport: "NBA", sportIcon: "🏀", league: "NBA",
    team1: { name: "LA Lakers", logo: "🟣", score: 88 },
    team2: { name: "Boston Celtics", logo: "🟢", score: 92 },
    status: "live", date: fmt(0), time: "Q4 3:15",
    venue: "Crypto.com Arena", channel: "TNT", provider: "Max",
  },
  {
    id: "l8", sport: "NBA", sportIcon: "🏀", league: "NBA",
    team1: { name: "Golden State Warriors", logo: "🔵", score: 67 },
    team2: { name: "Phoenix Suns", logo: "🟠", score: 71 },
    status: "live", date: fmt(0), time: "Q3 5:40",
    venue: "Chase Center", channel: "ESPN", provider: "ESPN+",
  },
  {
    id: "l9", sport: "Tennis", sportIcon: "🎾", league: "ATP Masters",
    team1: { name: "Carlos Alcaraz", logo: "🇪🇸", score: "6-4 3-2" },
    team2: { name: "Jannik Sinner", logo: "🇮🇹", score: "4-6 2-3" },
    status: "live", date: fmt(0), time: "Set 2",
    venue: "Indian Wells", channel: "Tennis Channel", provider: "ESPN+",
  },

  // ===== SCHEDULED GAMES =====
  {
    id: "s1", sport: "Football", sportIcon: "🏈", league: "NFL",
    team1: { name: "Philadelphia Eagles", logo: "🟢" },
    team2: { name: "Buffalo Bills", logo: "🔵" },
    status: "scheduled", date: fmt(1), time: "8:15 PM ET",
    venue: "Lincoln Financial Field", channel: "ABC", provider: "ESPN+",
  },
  {
    id: "s2", sport: "Soccer", sportIcon: "⚽", league: "Champions League",
    team1: { name: "Barcelona", logo: "🔵" },
    team2: { name: "PSG", logo: "🔴" },
    status: "scheduled", date: fmt(1), time: "3:00 PM ET",
    venue: "Camp Nou", channel: "CBS Sports", provider: "Paramount+",
  },
  {
    id: "s3", sport: "Soccer", sportIcon: "⚽", league: "Premier League",
    team1: { name: "Manchester City", logo: "🔵" },
    team2: { name: "Liverpool", logo: "🔴" },
    status: "scheduled", date: fmt(2), time: "12:30 PM ET",
    venue: "Etihad Stadium", channel: "NBC Sports", provider: "Peacock",
  },
  {
    id: "s4", sport: "Soccer", sportIcon: "⚽", league: "Serie A",
    team1: { name: "AC Milan", logo: "🔴" },
    team2: { name: "Inter Milan", logo: "🔵" },
    status: "scheduled", date: fmt(2), time: "2:45 PM ET",
    venue: "San Siro", channel: "ESPN+", provider: "Paramount+",
  },
  {
    id: "s5", sport: "Soccer", sportIcon: "⚽", league: "MLS",
    team1: { name: "Inter Miami", logo: "🩷" },
    team2: { name: "LAFC", logo: "⚫" },
    status: "scheduled", date: fmt(3), time: "7:30 PM ET",
    venue: "Chase Stadium", channel: "Apple TV", provider: "Apple TV+",
  },
  {
    id: "s6", sport: "Soccer", sportIcon: "⚽", league: "FIFA WC Qualifier",
    team1: { name: "Brazil", logo: "🇧🇷" },
    team2: { name: "Argentina", logo: "🇦🇷" },
    status: "scheduled", date: fmt(4), time: "8:00 PM ET",
    venue: "Maracanã", channel: "FOX", provider: "Tubi",
  },
  {
    id: "s7", sport: "Cricket", sportIcon: "🏏", league: "IPL 2026",
    team1: { name: "Royal Challengers Bengaluru", logo: "🔴" },
    team2: { name: "Delhi Capitals", logo: "🔵" },
    status: "scheduled", date: fmt(1), time: "7:30 PM IST",
    venue: "M. Chinnaswamy Stadium", channel: "Star Sports", provider: "JioCinema",
  },
  {
    id: "s8", sport: "Cricket", sportIcon: "🏏", league: "IPL 2026",
    team1: { name: "Kolkata Knight Riders", logo: "🟣" },
    team2: { name: "Rajasthan Royals", logo: "🩷" },
    status: "scheduled", date: fmt(2), time: "7:30 PM IST",
    venue: "Eden Gardens", channel: "Star Sports", provider: "JioCinema",
  },
  {
    id: "s9", sport: "Cricket", sportIcon: "🏏", league: "ODI Series",
    team1: { name: "India", logo: "🇮🇳" },
    team2: { name: "South Africa", logo: "🇿🇦" },
    status: "scheduled", date: fmt(3), time: "2:00 PM IST",
    venue: "Wankhede Stadium", channel: "Star Sports", provider: "JioCinema",
  },
  {
    id: "s10", sport: "Cricket", sportIcon: "🏏", league: "T20 World Cup Qualifier",
    team1: { name: "West Indies", logo: "🏝️" },
    team2: { name: "Pakistan", logo: "🇵🇰" },
    status: "scheduled", date: fmt(4), time: "10:00 AM ET",
    venue: "Kensington Oval", channel: "Willow", provider: "Willow TV",
  },
  {
    id: "s11", sport: "NBA", sportIcon: "🏀", league: "NBA",
    team1: { name: "Milwaukee Bucks", logo: "🟢" },
    team2: { name: "Denver Nuggets", logo: "🔵" },
    status: "scheduled", date: fmt(1), time: "7:30 PM ET",
    venue: "Fiserv Forum", channel: "ESPN", provider: "ESPN+",
  },
  {
    id: "s12", sport: "MLB", sportIcon: "⚾", league: "MLB",
    team1: { name: "NY Yankees", logo: "🔵" },
    team2: { name: "LA Dodgers", logo: "🔵" },
    status: "scheduled", date: fmt(2), time: "7:00 PM ET",
    venue: "Yankee Stadium", channel: "FOX", provider: "Tubi",
  },
  {
    id: "s13", sport: "NHL", sportIcon: "🏒", league: "NHL",
    team1: { name: "Toronto Maple Leafs", logo: "🔵" },
    team2: { name: "Montreal Canadiens", logo: "🔴" },
    status: "scheduled", date: fmt(2), time: "7:00 PM ET",
    venue: "Scotiabank Arena", channel: "NHL Network", provider: "ESPN+",
  },
  {
    id: "s14", sport: "F1", sportIcon: "🏎️", league: "Formula 1",
    team1: { name: "Max Verstappen", logo: "🇳🇱" },
    team2: { name: "Lewis Hamilton", logo: "🇬🇧" },
    status: "scheduled", date: fmt(4), time: "9:00 AM ET",
    venue: "Bahrain International Circuit", channel: "ESPN", provider: "ESPN+",
  },
  {
    id: "s15", sport: "Tennis", sportIcon: "🎾", league: "WTA 1000",
    team1: { name: "Iga Swiatek", logo: "🇵🇱" },
    team2: { name: "Coco Gauff", logo: "🇺🇸" },
    status: "scheduled", date: fmt(1), time: "4:00 PM ET",
    venue: "Indian Wells", channel: "Tennis Channel", provider: "ESPN+",
  },
  {
    id: "s16", sport: "Boxing", sportIcon: "🥊", league: "WBC Heavyweight",
    team1: { name: "Oleksandr Usyk", logo: "🇺🇦" },
    team2: { name: "Tyson Fury", logo: "🇬🇧" },
    status: "scheduled", date: fmt(5), time: "11:00 PM ET",
    venue: "Kingdom Arena, Riyadh", channel: "DAZN", provider: "DAZN",
  },

  // ===== FINISHED GAMES (with real YouTube highlight video IDs) =====
  {
    id: "f1", sport: "Football", sportIcon: "🏈", league: "NFL",
    team1: { name: "Buffalo Bills", logo: "🔵", score: 31 },
    team2: { name: "Miami Dolphins", logo: "🟠", score: 27 },
    status: "finished", date: fmt(-1), time: "Final",
    venue: "Highmark Stadium", channel: "CBS",
    highlightVideo: "wge7JKRfQZg", highlightTitle: "Bills vs Dolphins - Full Game Highlights",
  },
  {
    id: "f2", sport: "Football", sportIcon: "🏈", league: "NFL",
    team1: { name: "Detroit Lions", logo: "🔵", score: 28 },
    team2: { name: "Minnesota Vikings", logo: "🟣", score: 24 },
    status: "finished", date: fmt(-1), time: "Final",
    venue: "Ford Field", channel: "FOX",
    highlightVideo: "CxGb4MYJReE", highlightTitle: "Lions vs Vikings - Full Highlights",
  },
  {
    id: "f3", sport: "Football", sportIcon: "🏈", league: "Super Bowl LVIII",
    team1: { name: "Kansas City Chiefs", logo: "🔴", score: 25 },
    team2: { name: "San Francisco 49ers", logo: "🟡", score: 22 },
    status: "finished", date: fmt(-3), time: "Final (OT)",
    venue: "Allegiant Stadium", channel: "CBS",
    highlightVideo: "xJm_GEYr0rE", highlightTitle: "Super Bowl LVIII Highlights - Chiefs vs 49ers",
  },
  {
    id: "f4", sport: "Soccer", sportIcon: "⚽", league: "Champions League",
    team1: { name: "Real Madrid", logo: "⚪", score: 2 },
    team2: { name: "Borussia Dortmund", logo: "🟡", score: 0 },
    status: "finished", date: fmt(-2), time: "Final",
    venue: "Wembley Stadium", channel: "CBS Sports",
    highlightVideo: "bKQs4Y-rNHo", highlightTitle: "Real Madrid vs Dortmund | UCL Final Highlights",
  },
  {
    id: "f5", sport: "Soccer", sportIcon: "⚽", league: "Premier League",
    team1: { name: "Manchester United", logo: "🔴", score: 2 },
    team2: { name: "Tottenham", logo: "⚪", score: 2 },
    status: "finished", date: fmt(-1), time: "Final",
    venue: "Old Trafford", channel: "NBC Sports",
    highlightVideo: "LjUpVJAsyLM", highlightTitle: "Man United vs Tottenham Highlights",
  },
  {
    id: "f6", sport: "Soccer", sportIcon: "⚽", league: "Premier League",
    team1: { name: "Liverpool", logo: "🔴", score: 4 },
    team2: { name: "Manchester City", logo: "🔵", score: 1 },
    status: "finished", date: fmt(-2), time: "Final",
    venue: "Anfield", channel: "NBC Sports",
    highlightVideo: "pKBOivULqKM", highlightTitle: "Liverpool vs Man City Highlights",
  },
  {
    id: "f7", sport: "Soccer", sportIcon: "⚽", league: "La Liga",
    team1: { name: "Barcelona", logo: "🔵", score: 3 },
    team2: { name: "Atletico Madrid", logo: "🔴", score: 1 },
    status: "finished", date: fmt(-2), time: "Final",
    venue: "Camp Nou", channel: "ESPN+",
    highlightVideo: "6Y7v6sCBako", highlightTitle: "Barcelona vs Atletico Madrid Highlights",
  },
  {
    id: "f8", sport: "Cricket", sportIcon: "🏏", league: "IPL 2026",
    team1: { name: "Gujarat Titans", logo: "🔵", score: "198/5 (20)" },
    team2: { name: "Sunrisers Hyderabad", logo: "🟠", score: "175/8 (20)" },
    status: "finished", date: fmt(-1), time: "GT won by 23 runs",
    venue: "Narendra Modi Stadium", channel: "Star Sports",
    highlightVideo: "r7FE7tIBfKM", highlightTitle: "GT vs SRH | IPL Highlights",
  },
  {
    id: "f9", sport: "Cricket", sportIcon: "🏏", league: "IPL 2026",
    team1: { name: "Punjab Kings", logo: "🔴", score: "156/9 (20)" },
    team2: { name: "Lucknow Super Giants", logo: "🔵", score: "159/4 (18.3)" },
    status: "finished", date: fmt(-2), time: "LSG won by 6 wickets",
    venue: "PCA Stadium", channel: "Star Sports",
    highlightVideo: "5kTa-1Rdits", highlightTitle: "PBKS vs LSG | IPL Highlights",
  },
  {
    id: "f10", sport: "Cricket", sportIcon: "🏏", league: "T20I",
    team1: { name: "India", logo: "🇮🇳", score: "212/4 (20)" },
    team2: { name: "Australia", logo: "🇦🇺", score: "195/7 (20)" },
    status: "finished", date: fmt(-3), time: "India won by 17 runs",
    venue: "BRSABV Ekana Stadium", channel: "Star Sports",
    highlightVideo: "qb5GrBvK8kc", highlightTitle: "India vs Australia T20 Full Highlights",
  },
  {
    id: "f11", sport: "Cricket", sportIcon: "🏏", league: "T20 World Cup Final",
    team1: { name: "India", logo: "🇮🇳", score: "176/7 (20)" },
    team2: { name: "South Africa", logo: "🇿🇦", score: "169/8 (20)" },
    status: "finished", date: fmt(-4), time: "India won by 7 runs",
    venue: "Kensington Oval, Barbados", channel: "Star Sports",
    highlightVideo: "C2qQb0LWg3E", highlightTitle: "T20 World Cup Final 2024 Highlights",
  },
  {
    id: "f12", sport: "NBA", sportIcon: "🏀", league: "NBA",
    team1: { name: "Phoenix Suns", logo: "🟠", score: 118 },
    team2: { name: "Denver Nuggets", logo: "🔵", score: 112 },
    status: "finished", date: fmt(-1), time: "Final",
    venue: "Footprint Center", channel: "TNT",
    highlightVideo: "YCnJjB9YXQQ", highlightTitle: "Suns vs Nuggets Full Highlights",
  },
  {
    id: "f13", sport: "NBA", sportIcon: "🏀", league: "NBA",
    team1: { name: "Boston Celtics", logo: "🟢", score: 106 },
    team2: { name: "Dallas Mavericks", logo: "🔵", score: 88 },
    status: "finished", date: fmt(-2), time: "Final",
    venue: "TD Garden", channel: "ESPN",
    highlightVideo: "o3zHnp_MMYQ", highlightTitle: "Celtics vs Mavericks Highlights",
  },
  {
    id: "f14", sport: "MLB", sportIcon: "⚾", league: "MLB",
    team1: { name: "Houston Astros", logo: "🟠", score: 5 },
    team2: { name: "Atlanta Braves", logo: "🔵", score: 8 },
    status: "finished", date: fmt(-2), time: "Final",
    venue: "Minute Maid Park", channel: "TBS",
    highlightVideo: "y_pIB0PGdcI", highlightTitle: "Astros vs Braves Highlights",
  },
  {
    id: "f15", sport: "Tennis", sportIcon: "🎾", league: "Australian Open Final",
    team1: { name: "Jannik Sinner", logo: "🇮🇹", score: "3" },
    team2: { name: "Daniil Medvedev", logo: "🇷🇺", score: "2" },
    status: "finished", date: fmt(-3), time: "Sinner wins 3-2",
    venue: "Rod Laver Arena", channel: "ESPN",
    highlightVideo: "Fqz2BQFE6TQ", highlightTitle: "Sinner vs Medvedev | Australian Open Final",
  },
  {
    id: "f16", sport: "Boxing", sportIcon: "🥊", league: "Undisputed Heavyweight",
    team1: { name: "Oleksandr Usyk", logo: "🇺🇦", score: "W" },
    team2: { name: "Tyson Fury", logo: "🇬🇧", score: "L" },
    status: "finished", date: fmt(-5), time: "Usyk wins by SD",
    venue: "Kingdom Arena, Riyadh", channel: "DAZN",
    highlightVideo: "yHMB2s07I2g", highlightTitle: "Usyk vs Fury Full Fight Highlights",
  },
  {
    id: "f17", sport: "F1", sportIcon: "🏎️", league: "Formula 1 - Saudi Arabia GP",
    team1: { name: "Max Verstappen", logo: "🇳🇱", score: "1st" },
    team2: { name: "Lando Norris", logo: "🇬🇧", score: "2nd" },
    status: "finished", date: fmt(-4), time: "Final",
    venue: "Jeddah Corniche Circuit", channel: "ESPN",
    highlightVideo: "CdnFbvHHlsg", highlightTitle: "Saudi Arabia GP Race Highlights",
  },
];

export const sportsList = [
  "All", "Cricket", "Soccer", "Football", "NBA", "Tennis", "F1", "Boxing", "MLB", "NHL",
];

// Featured highlights for the top carousel
export const featuredHighlights = sportsGames
  .filter((g) => g.status === "finished" && g.highlightVideo)
  .slice(0, 8);

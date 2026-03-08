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

// ─── Real Movies ───────────────────────────────────────────────────────────────

const tmdbPoster = (path: string) => `https://image.tmdb.org/t/p/w500${path}`;
const tmdbBackdrop = (path: string) => `https://image.tmdb.org/t/p/w1280${path}`;
const tmdbProfile = (path: string) => `https://image.tmdb.org/t/p/w185${path}`;

export const allMovies: Movie[] = [
  {
    id: "m-1",
    title: "Oppenheimer",
    year: 2023,
    rating: 8.5,
    genres: ["Drama", "History", "Thriller"],
    poster: tmdbPoster("/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"),
    backdrop: tmdbBackdrop("/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg"),
    overview: "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
    runtime: "3h 0min",
    type: "movie",
    certification: "R",
    director: "Christopher Nolan",
    cast: [
      { name: "Cillian Murphy", character: "J. Robert Oppenheimer", photo: tmdbProfile("/dm6V24JJJVKB7UmRbWfmQu7M5Jl.jpg") },
      { name: "Emily Blunt", character: "Kitty Oppenheimer", photo: tmdbProfile("/5nCSG5TL1bP1geD8aaBfaLnLLCD.jpg") },
      { name: "Matt Damon", character: "Leslie Groves", photo: tmdbProfile("/elSlNgV8xVYQoTxKfSvI28MVCjm.jpg") },
      { name: "Robert Downey Jr.", character: "Lewis Strauss", photo: tmdbProfile("/im9SAqJPZKEbVZGmjXuLI4O7RvM.jpg") },
      { name: "Florence Pugh", character: "Jean Tatlock", photo: tmdbProfile("/fhEsn35uSwqSTAJNKypLgLSGmJ1.jpg") },
    ],
    providers: [
      { name: "Prime Video", logo: "P", type: "stream", color: "#00A8E1" },
      { name: "Apple TV+", logo: "A", type: "rent", price: "$5.99", color: "#555" },
      { name: "Google Play", logo: "G", type: "buy", price: "$19.99", color: "#0F9D58" },
    ],
    trailerKey: "uYPbbksJxIg",
  },
  {
    id: "m-2",
    title: "Dune: Part Two",
    year: 2024,
    rating: 8.6,
    genres: ["Sci-Fi", "Adventure", "Drama"],
    poster: tmdbPoster("/8b8R8l88Qje9dn9OE8PY05Nez7H.jpg"),
    backdrop: tmdbBackdrop("/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg"),
    overview: "Paul Atreides unites with the Fremen to seek revenge against the conspirators who destroyed his family, facing a choice between love and the fate of the universe.",
    runtime: "2h 46min",
    type: "movie",
    certification: "PG-13",
    director: "Denis Villeneuve",
    cast: [
      { name: "Timothée Chalamet", character: "Paul Atreides", photo: tmdbProfile("/BE2sdjpgsa2rNTFa66f7upkaOP.jpg") },
      { name: "Zendaya", character: "Chani", photo: tmdbProfile("/tyNOKQZE6u6m2Ku3qvRO9WMzMbN.jpg") },
      { name: "Austin Butler", character: "Feyd-Rautha", photo: tmdbProfile("/lnOmFk0NDBjxhysBxCaswMxZYHB.jpg") },
      { name: "Florence Pugh", character: "Princess Irulan", photo: tmdbProfile("/fhEsn35uSwqSTAJNKypLgLSGmJ1.jpg") },
      { name: "Josh Brolin", character: "Gurney Halleck", photo: tmdbProfile("/sX2aySEJl3fOliiVl5VEbTOmPWd.jpg") },
    ],
    providers: [
      { name: "Max", logo: "M", type: "stream", color: "#002BE7" },
      { name: "Prime Video", logo: "P", type: "rent", price: "$5.99", color: "#00A8E1" },
      { name: "Apple TV+", logo: "A", type: "buy", price: "$19.99", color: "#555" },
    ],
    trailerKey: "Way9Dexny3w",
  },
  {
    id: "m-3",
    title: "The Batman",
    year: 2022,
    rating: 7.8,
    genres: ["Action", "Crime", "Drama"],
    poster: tmdbPoster("/74xTEgt7R36Fpooo50r9T25onhq.jpg"),
    backdrop: tmdbBackdrop("/b0PlSFdDwbyFAJlMXMB0vRPGLRf.jpg"),
    overview: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    runtime: "2h 56min",
    type: "movie",
    certification: "PG-13",
    director: "Matt Reeves",
    cast: [
      { name: "Robert Pattinson", character: "Bruce Wayne / Batman", photo: tmdbProfile("/8A4PS5iM3SJfID79KADZ2VYWLwC.jpg") },
      { name: "Zoë Kravitz", character: "Selina Kyle / Catwoman", photo: tmdbProfile("/r0W7gVlvpLKf4JFKN8UrPqb3I5x.jpg") },
      { name: "Paul Dano", character: "Edward Nashton / The Riddler", photo: tmdbProfile("/d2IDBNXM1dZejIqbWnplYoAP7j6.jpg") },
      { name: "Jeffrey Wright", character: "Lt. James Gordon", photo: tmdbProfile("/nBPQFbBKBu5ej2gEzJByIQ6Zrgg.jpg") },
      { name: "Colin Farrell", character: "Oz / The Penguin", photo: tmdbProfile("/lKO4MFSdCjdE7bHsWCGQnGgnl3b.jpg") },
    ],
    providers: [
      { name: "Max", logo: "M", type: "stream", color: "#002BE7" },
      { name: "Netflix", logo: "N", type: "stream", color: "#E50914" },
      { name: "Google Play", logo: "G", type: "buy", price: "$14.99", color: "#0F9D58" },
    ],
    trailerKey: "mqqft2x_Aa4",
  },
  {
    id: "m-4",
    title: "Spider-Man: No Way Home",
    year: 2021,
    rating: 8.2,
    genres: ["Action", "Adventure", "Sci-Fi"],
    poster: tmdbPoster("/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"),
    backdrop: tmdbBackdrop("/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg"),
    overview: "Peter Parker's secret identity is revealed, leading him to seek help from Doctor Strange. When a spell goes wrong, dangerous foes from other worlds begin to appear.",
    runtime: "2h 28min",
    type: "movie",
    certification: "PG-13",
    director: "Jon Watts",
    cast: [
      { name: "Tom Holland", character: "Peter Parker / Spider-Man", photo: tmdbProfile("/bBRlrpJm9XkNSg0YT5LCaxqoFMz.jpg") },
      { name: "Zendaya", character: "MJ", photo: tmdbProfile("/tyNOKQZE6u6m2Ku3qvRO9WMzMbN.jpg") },
      { name: "Benedict Cumberbatch", character: "Dr. Stephen Strange", photo: tmdbProfile("/fBEucxECxGLKVHBZGJN8ozBnTEb.jpg") },
      { name: "Jacob Batalon", character: "Ned Leeds", photo: tmdbProfile("/53YhaL4xw4Sb1ssoHkeSSBaO29c.jpg") },
      { name: "Willem Dafoe", character: "Norman Osborn / Green Goblin", photo: tmdbProfile("/ui8e4sgHTMx60dRHAOdjLS8Fbhp.jpg") },
    ],
    providers: [
      { name: "Netflix", logo: "N", type: "stream", color: "#E50914" },
      { name: "Disney+", logo: "D+", type: "stream", color: "#113CCF" },
      { name: "Apple TV+", logo: "A", type: "rent", price: "$3.99", color: "#555" },
    ],
    trailerKey: "JfVOs4VSpmA",
  },
  {
    id: "m-5",
    title: "Everything Everywhere All at Once",
    year: 2022,
    rating: 8.0,
    genres: ["Action", "Comedy", "Sci-Fi"],
    poster: tmdbPoster("/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg"),
    backdrop: tmdbBackdrop("/fOy2Jurz9k6RnJnMUMRDAgBZz5A.jpg"),
    overview: "An aging Chinese immigrant is swept up in an insane adventure where she alone can save the multiverse by exploring other universes and connecting with the lives she could have led.",
    runtime: "2h 19min",
    type: "movie",
    certification: "R",
    director: "Daniel Kwan, Daniel Scheinert",
    cast: [
      { name: "Michelle Yeoh", character: "Evelyn Quan Wang", photo: tmdbProfile("/6oxGIxkZglMHAhIwYEriiSfeTfE.jpg") },
      { name: "Ke Huy Quan", character: "Waymond Wang", photo: tmdbProfile("/3MUeBK8CQ3t1jG8IP3f4nKsj8L7.jpg") },
      { name: "Stephanie Hsu", character: "Joy Wang / Jobu Tupaki", photo: tmdbProfile("/4KcfhPfqYGjpSBCWjfRnTWKr8Pj.jpg") },
      { name: "Jamie Lee Curtis", character: "Deirdre Beaubeirdre", photo: tmdbProfile("/roeESMMFMaqqSqCyEZ7aSQkOjHw.jpg") },
      { name: "James Hong", character: "Gong Gong", photo: tmdbProfile("/58iRihbLsQa6rBDNqz6fDRRHkhn.jpg") },
    ],
    providers: [
      { name: "Prime Video", logo: "P", type: "stream", color: "#00A8E1" },
      { name: "Netflix", logo: "N", type: "stream", color: "#E50914" },
      { name: "Google Play", logo: "G", type: "buy", price: "$14.99", color: "#0F9D58" },
    ],
    trailerKey: "wxN1T1qdqYk",
  },
  {
    id: "m-6",
    title: "Top Gun: Maverick",
    year: 2022,
    rating: 8.3,
    genres: ["Action", "Drama"],
    poster: tmdbPoster("/62HCnUTziyWcpDaBO2i1DX17ljH.jpg"),
    backdrop: tmdbBackdrop("/AaV1YIdWKRaOewb4hOJLJpRBUV0.jpg"),
    overview: "After thirty years of service, Pete 'Maverick' Mitchell is called to train a detachment of Top Gun graduates for a specialized mission, confronting ghosts of his past.",
    runtime: "2h 11min",
    type: "movie",
    certification: "PG-13",
    director: "Joseph Kosinski",
    cast: [
      { name: "Tom Cruise", character: "Capt. Pete 'Maverick' Mitchell", photo: tmdbProfile("/eOh4ubpOm2Igdg0QH2ghj0mFtC.jpg") },
      { name: "Miles Teller", character: "Lt. Bradley 'Rooster' Bradshaw", photo: tmdbProfile("/cg3LW0xrj0p49gfOViMhpPPVVKS.jpg") },
      { name: "Jennifer Connelly", character: "Penny Benjamin", photo: tmdbProfile("/efFD1MxJBHQWCjMRbMqYXqfMVdE.jpg") },
      { name: "Jon Hamm", character: "Adm. Beau 'Cyclone' Simpson", photo: tmdbProfile("/6ERROITXYbqa1KFISeZUlZJimq5.jpg") },
      { name: "Glen Powell", character: "Lt. Jake 'Hangman' Seresin", photo: tmdbProfile("/gEh5fVJMohwsIT1SQiNatPRFAba.jpg") },
    ],
    providers: [
      { name: "Paramount+", logo: "P+", type: "stream", color: "#0064FF" },
      { name: "Prime Video", logo: "P", type: "rent", price: "$3.99", color: "#00A8E1" },
      { name: "Apple TV+", logo: "A", type: "buy", price: "$14.99", color: "#555" },
    ],
    trailerKey: "giXco2jaZ_4",
  },
  {
    id: "m-7",
    title: "Interstellar",
    year: 2014,
    rating: 8.7,
    genres: ["Adventure", "Drama", "Sci-Fi"],
    poster: tmdbPoster("/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"),
    backdrop: tmdbBackdrop("/xJHokMbljvjADYdit5fK1DVfjko.jpg"),
    overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival as Earth becomes uninhabitable.",
    runtime: "2h 49min",
    type: "movie",
    certification: "PG-13",
    director: "Christopher Nolan",
    cast: [
      { name: "Matthew McConaughey", character: "Joseph Cooper", photo: tmdbProfile("/sY2mwpafMwMOJECMfXkB5pVPH2c.jpg") },
      { name: "Anne Hathaway", character: "Dr. Amelia Brand", photo: tmdbProfile("/tLelKoPNiyJCSEtQTz1FGv4TLGc.jpg") },
      { name: "Jessica Chastain", character: "Murph (adult)", photo: tmdbProfile("/lodMzLKSdrPcBry6TdoDsMN3Vge.jpg") },
      { name: "Michael Caine", character: "Professor Brand", photo: tmdbProfile("/bGZn5RVzMMXjSVAMsOXPkWfMOVH.jpg") },
      { name: "Matt Damon", character: "Dr. Mann", photo: tmdbProfile("/elSlNgV8xVYQoTxKfSvI28MVCjm.jpg") },
    ],
    providers: [
      { name: "Paramount+", logo: "P+", type: "stream", color: "#0064FF" },
      { name: "Prime Video", logo: "P", type: "rent", price: "$3.99", color: "#00A8E1" },
      { name: "Google Play", logo: "G", type: "buy", price: "$14.99", color: "#0F9D58" },
    ],
    trailerKey: "zSWdZVtXT7E",
  },
  {
    id: "m-8",
    title: "Parasite",
    year: 2019,
    rating: 8.5,
    genres: ["Comedy", "Drama", "Thriller"],
    poster: tmdbPoster("/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg"),
    backdrop: tmdbBackdrop("/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg"),
    overview: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    runtime: "2h 12min",
    type: "movie",
    certification: "R",
    director: "Bong Joon-ho",
    cast: [
      { name: "Song Kang-ho", character: "Kim Ki-taek", photo: tmdbProfile("/fSIjS3fUvvp4X3MX6yPaVMEhbkH.jpg") },
      { name: "Lee Sun-kyun", character: "Park Dong-ik", photo: tmdbProfile("/lJH30UjD9TYIAbMeZB3Kvml6XZH.jpg") },
      { name: "Cho Yeo-jeong", character: "Choi Yeon-gyo", photo: tmdbProfile("/sFY7S6alEtnV7KPTLnxkJCvD1EY.jpg") },
      { name: "Choi Woo-shik", character: "Kim Ki-woo", photo: tmdbProfile("/hLQl6YzG67fxLdpUaFrTvx7BLDo.jpg") },
      { name: "Park So-dam", character: "Kim Ki-jung", photo: tmdbProfile("/gRaTMmisxUH8KBKBQ6qqwz6Y1Ot.jpg") },
    ],
    providers: [
      { name: "Hulu", logo: "H", type: "stream", color: "#1CE783" },
      { name: "Prime Video", logo: "P", type: "rent", price: "$3.99", color: "#00A8E1" },
      { name: "Apple TV+", logo: "A", type: "buy", price: "$14.99", color: "#555" },
    ],
    trailerKey: "5xH0HfJHsaY",
  },
  {
    id: "m-9",
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    genres: ["Action", "Crime", "Drama"],
    poster: tmdbPoster("/qJ2tW6WMUDux911BTUb0jakMF0.jpg"),
    backdrop: tmdbBackdrop("/nMKdUUepR0i5zn0y1T4CsSB5ez.jpg"),
    overview: "When the menace known as the Joker wreaks havoc on Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    runtime: "2h 32min",
    type: "movie",
    certification: "PG-13",
    director: "Christopher Nolan",
    cast: [
      { name: "Christian Bale", character: "Bruce Wayne / Batman", photo: tmdbProfile("/qCpZn2e3dimwbryLnqxZuI88PTi.jpg") },
      { name: "Heath Ledger", character: "The Joker", photo: tmdbProfile("/5Y9HfGh6C7VEPDBTyo3L5VfbJMr.jpg") },
      { name: "Aaron Eckhart", character: "Harvey Dent / Two-Face", photo: tmdbProfile("/bkMDiMK3u0Yrdsxr3mWjMk2JRFl.jpg") },
      { name: "Gary Oldman", character: "Lt. James Gordon", photo: tmdbProfile("/2v9FGJMtOruMlBn0U6L1XEpVFak.jpg") },
      { name: "Maggie Gyllenhaal", character: "Rachel Dawes", photo: tmdbProfile("/wJFAkQRkXnVJPJv7lF3JGjnj6rT.jpg") },
    ],
    providers: [
      { name: "Max", logo: "M", type: "stream", color: "#002BE7" },
      { name: "Netflix", logo: "N", type: "stream", color: "#E50914" },
      { name: "Google Play", logo: "G", type: "buy", price: "$14.99", color: "#0F9D58" },
    ],
    trailerKey: "EXeTwQWrcwY",
  },
  {
    id: "m-10",
    title: "Inception",
    year: 2010,
    rating: 8.8,
    genres: ["Action", "Sci-Fi", "Thriller"],
    poster: tmdbPoster("/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg"),
    backdrop: tmdbBackdrop("/s3TBrRGB1iav7gFOCNx3H31MoES.jpg"),
    overview: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    runtime: "2h 28min",
    type: "movie",
    certification: "PG-13",
    director: "Christopher Nolan",
    cast: [
      { name: "Leonardo DiCaprio", character: "Dom Cobb", photo: tmdbProfile("/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg") },
      { name: "Joseph Gordon-Levitt", character: "Arthur", photo: tmdbProfile("/dhv9f3AoOGlSqj3jzFX1WWCIVLB.jpg") },
      { name: "Elliot Page", character: "Ariadne", photo: tmdbProfile("/tLPuhdmbwOOVLNMdmlkiPmwxAp8.jpg") },
      { name: "Tom Hardy", character: "Eames", photo: tmdbProfile("/d81K0RH8UX7tZj49tZaQhZ9ewH.jpg") },
      { name: "Marion Cotillard", character: "Mal Cobb", photo: tmdbProfile("/tKLmtXFBaKuHOYbwMa5C8dQrAyX.jpg") },
    ],
    providers: [
      { name: "Max", logo: "M", type: "stream", color: "#002BE7" },
      { name: "Prime Video", logo: "P", type: "rent", price: "$3.99", color: "#00A8E1" },
      { name: "Apple TV+", logo: "A", type: "buy", price: "$14.99", color: "#555" },
    ],
    trailerKey: "YoHD9XEInc0",
  },
  {
    id: "m-11",
    title: "Avengers: Endgame",
    year: 2019,
    rating: 8.4,
    genres: ["Action", "Adventure", "Sci-Fi"],
    poster: tmdbPoster("/or06FN3Dka5tukK1e9sl16pB3iy.jpg"),
    backdrop: tmdbBackdrop("/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg"),
    overview: "After Thanos' devastating snap, the remaining Avengers must assemble once more to undo his actions and restore balance to the universe.",
    runtime: "3h 1min",
    type: "movie",
    certification: "PG-13",
    director: "Anthony Russo, Joe Russo",
    cast: [
      { name: "Robert Downey Jr.", character: "Tony Stark / Iron Man", photo: tmdbProfile("/im9SAqJPZKEbVZGmjXuLI4O7RvM.jpg") },
      { name: "Chris Evans", character: "Steve Rogers / Captain America", photo: tmdbProfile("/3bOGNsHlrswhyW79uvIHH1V43JI.jpg") },
      { name: "Mark Ruffalo", character: "Bruce Banner / Hulk", photo: tmdbProfile("/z3dvKqMNDQWk3QLxzumloQVR0pM.jpg") },
      { name: "Scarlett Johansson", character: "Natasha Romanoff / Black Widow", photo: tmdbProfile("/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg") },
      { name: "Chris Hemsworth", character: "Thor", photo: tmdbProfile("/piQGlsI3NDkwsOKja5lTLaHgPx3.jpg") },
    ],
    providers: [
      { name: "Disney+", logo: "D+", type: "stream", color: "#113CCF" },
      { name: "Prime Video", logo: "P", type: "rent", price: "$3.99", color: "#00A8E1" },
      { name: "Google Play", logo: "G", type: "buy", price: "$19.99", color: "#0F9D58" },
    ],
    trailerKey: "TcMBFSGVi1c",
  },
  {
    id: "m-12",
    title: "Joker",
    year: 2019,
    rating: 8.4,
    genres: ["Crime", "Drama", "Thriller"],
    poster: tmdbPoster("/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"),
    backdrop: tmdbBackdrop("/n6bUvigpRFqSwmPp1m2YMDNqKpc.jpg"),
    overview: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime.",
    runtime: "2h 2min",
    type: "movie",
    certification: "R",
    director: "Todd Phillips",
    cast: [
      { name: "Joaquin Phoenix", character: "Arthur Fleck / Joker", photo: tmdbProfile("/nXMzvVF6xR3OXOedozfOcoA20xh.jpg") },
      { name: "Robert De Niro", character: "Murray Franklin", photo: tmdbProfile("/cT8htcckIuyI1Lqwt1CvD02ynTh.jpg") },
      { name: "Zazie Beetz", character: "Sophie Dumond", photo: tmdbProfile("/sgxzT54GnvgeMnOZgpQQx9csAdd.jpg") },
      { name: "Frances Conroy", character: "Penny Fleck", photo: tmdbProfile("/z9gwwEaANjMRNoSwixZhr17ds1d.jpg") },
      { name: "Brett Cullen", character: "Thomas Wayne", photo: tmdbProfile("/j63xl09VH0swKSXcyWvFbsHLteR.jpg") },
    ],
    providers: [
      { name: "Max", logo: "M", type: "stream", color: "#002BE7" },
      { name: "Netflix", logo: "N", type: "stream", color: "#E50914" },
      { name: "Apple TV+", logo: "A", type: "rent", price: "$3.99", color: "#555" },
    ],
    trailerKey: "zAGVQLHvwOY",
  },
  {
    id: "m-13",
    title: "John Wick: Chapter 4",
    year: 2023,
    rating: 7.7,
    genres: ["Action", "Crime", "Thriller"],
    poster: tmdbPoster("/vZloFAK7NmvMGKE7LsyLq3eTNAu.jpg"),
    backdrop: tmdbBackdrop("/7I6VUdPj6tQECNHdviJkUHD2u89.jpg"),
    overview: "John Wick uncovers a path to defeating The High Table, but before he can earn his freedom, he must face off against a new enemy with powerful alliances across the globe.",
    runtime: "2h 49min",
    type: "movie",
    certification: "R",
    director: "Chad Stahelski",
    cast: [
      { name: "Keanu Reeves", character: "John Wick", photo: tmdbProfile("/4D0PpNI0kmP58hgrwGC3wCjxhnm.jpg") },
      { name: "Donnie Yen", character: "Caine", photo: tmdbProfile("/hTlhHnNba0jXDIiYiJFBPn1lBOT.jpg") },
      { name: "Bill Skarsgård", character: "Marquis de Gramont", photo: tmdbProfile("/lWORDCBiGVmliuMrw3e5S4bXy8X.jpg") },
      { name: "Laurence Fishburne", character: "Bowery King", photo: tmdbProfile("/7Ygkxs9woP8Ctlakiaq2UVPBFz4.jpg") },
      { name: "Ian McShane", character: "Winston", photo: tmdbProfile("/njY3u2rB5Lv9JhFOIjCcgzRTWy0.jpg") },
    ],
    providers: [
      { name: "Prime Video", logo: "P", type: "stream", color: "#00A8E1" },
      { name: "Apple TV+", logo: "A", type: "rent", price: "$5.99", color: "#555" },
      { name: "Google Play", logo: "G", type: "buy", price: "$19.99", color: "#0F9D58" },
    ],
    trailerKey: "qEVUtrk8_B4",
  },
  {
    id: "m-14",
    title: "Guardians of the Galaxy Vol. 3",
    year: 2023,
    rating: 7.9,
    genres: ["Action", "Adventure", "Comedy"],
    poster: tmdbPoster("/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg"),
    backdrop: tmdbBackdrop("/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg"),
    overview: "Still reeling from the loss of Gamora, Peter Quill must rally his team to defend the universe and protect one of their own — a mission that could mean the end of the Guardians.",
    runtime: "2h 30min",
    type: "movie",
    certification: "PG-13",
    director: "James Gunn",
    cast: [
      { name: "Chris Pratt", character: "Peter Quill / Star-Lord", photo: tmdbProfile("/83o3PqdzRHEpvivFYsQbMhDBBqQ.jpg") },
      { name: "Zoe Saldaña", character: "Gamora", photo: tmdbProfile("/iOVbUH20il632nj2v01NCtYYeSg.jpg") },
      { name: "Dave Bautista", character: "Drax the Destroyer", photo: tmdbProfile("/mGYHLagkDplCUoI0olFGLYYBnkN.jpg") },
      { name: "Bradley Cooper", character: "Rocket (voice)", photo: tmdbProfile("/DPnessSsWqVXRbKm1GGZMJ56IG6.jpg") },
      { name: "Karen Gillan", character: "Nebula", photo: tmdbProfile("/xXGlCfNsaBCJMk88VzxfN4wZXFn.jpg") },
    ],
    providers: [
      { name: "Disney+", logo: "D+", type: "stream", color: "#113CCF" },
      { name: "Prime Video", logo: "P", type: "rent", price: "$3.99", color: "#00A8E1" },
      { name: "Google Play", logo: "G", type: "buy", price: "$19.99", color: "#0F9D58" },
    ],
    trailerKey: "u3V5KDHRQvk",
  },
  {
    id: "m-15",
    title: "Whiplash",
    year: 2014,
    rating: 8.5,
    genres: ["Drama", "Music"],
    poster: tmdbPoster("/7fn624j5lj3xTme2SgiLCeuedmO.jpg"),
    backdrop: tmdbBackdrop("/6bbZ6XlDt59yOPGgNIjITGCnG6b.jpg"),
    overview: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    runtime: "1h 46min",
    type: "movie",
    certification: "R",
    director: "Damien Chazelle",
    cast: [
      { name: "Miles Teller", character: "Andrew Neiman", photo: tmdbProfile("/cg3LW0xrj0p49gfOViMhpPPVVKS.jpg") },
      { name: "J.K. Simmons", character: "Terence Fletcher", photo: tmdbProfile("/oHenEMnhBFNBTTMa7aKn6AVsKe0.jpg") },
      { name: "Melissa Benoist", character: "Nicole", photo: tmdbProfile("/3mu5fmMsIR83VPVLRTMnGzVBwYf.jpg") },
      { name: "Paul Reiser", character: "Jim Neiman", photo: tmdbProfile("/1KWm3G4jWHRX1RCfP8cBMVtJRv7.jpg") },
      { name: "Austin Stowell", character: "Ryan Connolly", photo: tmdbProfile("/kK07m06h4UkqHqGFCWlLGjRCPX8.jpg") },
    ],
    providers: [
      { name: "Netflix", logo: "N", type: "stream", color: "#E50914" },
      { name: "Prime Video", logo: "P", type: "rent", price: "$3.99", color: "#00A8E1" },
      { name: "Apple TV+", logo: "A", type: "buy", price: "$14.99", color: "#555" },
    ],
    trailerKey: "7d_jQycdQGo",
  },
  {
    id: "m-16",
    title: "Mad Max: Fury Road",
    year: 2015,
    rating: 8.1,
    genres: ["Action", "Adventure", "Sci-Fi"],
    poster: tmdbPoster("/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg"),
    backdrop: tmdbBackdrop("/nlCHUWjY9XWbuEUQauCBgnY8ymF.jpg"),
    overview: "In a post-apocalyptic wasteland, Max teams up with Furiosa to flee from cult leader Immortan Joe and his army in an armored tanker truck, leading to a high-octane road war.",
    runtime: "2h 0min",
    type: "movie",
    certification: "R",
    director: "George Miller",
    cast: [
      { name: "Tom Hardy", character: "Max Rockatansky", photo: tmdbProfile("/d81K0RH8UX7tZj49tZaQhZ9ewH.jpg") },
      { name: "Charlize Theron", character: "Imperator Furiosa", photo: tmdbProfile("/1WL8pFQlqFpjS1F7EGApMW07QpE.jpg") },
      { name: "Nicholas Hoult", character: "Nux", photo: tmdbProfile("/laeAIiWqU3Y90VWN7TESiia7eCn.jpg") },
      { name: "Hugh Keays-Byrne", character: "Immortan Joe", photo: tmdbProfile("/8AQMJ6gY84EjnwJENEPqyjvqYbH.jpg") },
      { name: "Zoë Kravitz", character: "Toast the Knowing", photo: tmdbProfile("/r0W7gVlvpLKf4JFKN8UrPqb3I5x.jpg") },
    ],
    providers: [
      { name: "Max", logo: "M", type: "stream", color: "#002BE7" },
      { name: "Prime Video", logo: "P", type: "rent", price: "$3.99", color: "#00A8E1" },
      { name: "Google Play", logo: "G", type: "buy", price: "$14.99", color: "#0F9D58" },
    ],
    trailerKey: "hEJnMQG9ev8",
  },
  {
    id: "m-17",
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    genres: ["Drama"],
    poster: tmdbPoster("/9cjIGRQL4z8mHUEUqnGHpXoFUPb.jpg"),
    backdrop: tmdbBackdrop("/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg"),
    overview: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison.",
    runtime: "2h 22min",
    type: "movie",
    certification: "R",
    director: "Frank Darabont",
    cast: [
      { name: "Tim Robbins", character: "Andy Dufresne", photo: tmdbProfile("/hsCu1JUzQQ4pl7uFxAVFLOs9yHh.jpg") },
      { name: "Morgan Freeman", character: "Ellis 'Red' Redding", photo: tmdbProfile("/oIciQWr8VwKoR8TmAw1owaiZFyb.jpg") },
      { name: "Bob Gunton", character: "Warden Samuel Norton", photo: tmdbProfile("/1IfWFbXxYqR9lMsIyyPdHqNghfQ.jpg") },
      { name: "William Sadler", character: "Heywood", photo: tmdbProfile("/rWeb2mFmAgQXTDmqJniYPHqcI8T.jpg") },
      { name: "Clancy Brown", character: "Captain Byron Hadley", photo: tmdbProfile("/xthy1xKclCJIi7GOfMtCBXiFmQl.jpg") },
    ],
    providers: [
      { name: "Max", logo: "M", type: "stream", color: "#002BE7" },
      { name: "Prime Video", logo: "P", type: "rent", price: "$3.99", color: "#00A8E1" },
      { name: "Apple TV+", logo: "A", type: "buy", price: "$14.99", color: "#555" },
    ],
    trailerKey: "NmzuHjWmXOc",
  },
  {
    id: "m-18",
    title: "Black Panther: Wakanda Forever",
    year: 2022,
    rating: 6.7,
    genres: ["Action", "Adventure", "Drama"],
    poster: tmdbPoster("/sv1xJUazXeYqALzczSZ3O6nkH75.jpg"),
    backdrop: tmdbBackdrop("/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg"),
    overview: "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa.",
    runtime: "2h 41min",
    type: "movie",
    certification: "PG-13",
    director: "Ryan Coogler",
    cast: [
      { name: "Letitia Wright", character: "Shuri / Black Panther", photo: tmdbProfile("/78auJCL4SJVpMPNjhKMgQz5Elgj.jpg") },
      { name: "Lupita Nyong'o", character: "Nakia", photo: tmdbProfile("/y40Wu1T7UZ4paaEHGLwnUj4Rbha.jpg") },
      { name: "Danai Gurira", character: "Okoye", photo: tmdbProfile("/xQAmGP6GsG2MPRk3JFKfLLlJHzU.jpg") },
      { name: "Tenoch Huerta", character: "Namor", photo: tmdbProfile("/i9PWqVCwW06RQSYSmFEaEnZT0hI.jpg") },
      { name: "Angela Bassett", character: "Queen Ramonda", photo: tmdbProfile("/1gCpXGFLxCbLWPiTO0BcRRur4sO.jpg") },
    ],
    providers: [
      { name: "Disney+", logo: "D+", type: "stream", color: "#113CCF" },
      { name: "Prime Video", logo: "P", type: "rent", price: "$3.99", color: "#00A8E1" },
      { name: "Google Play", logo: "G", type: "buy", price: "$19.99", color: "#0F9D58" },
    ],
    trailerKey: "_Z3QKkl1WyM",
  },
  {
    id: "m-19",
    title: "Knives Out",
    year: 2019,
    rating: 7.9,
    genres: ["Comedy", "Crime", "Drama"],
    poster: tmdbPoster("/pThyQovXQrw2m0s9x82twj48Jq4.jpg"),
    backdrop: tmdbBackdrop("/4HWAQu28e2yaWrtupFPGFkdNU7V.jpg"),
    overview: "A detective investigates the death of a patriarch of an eccentric, combative family.",
    runtime: "2h 10min",
    type: "movie",
    certification: "PG-13",
    director: "Rian Johnson",
    cast: [
      { name: "Daniel Craig", character: "Benoit Blanc", photo: tmdbProfile("/iFerDZUmC5Fu26i4qI8c7mKajnU.jpg") },
      { name: "Chris Evans", character: "Ransom Drysdale", photo: tmdbProfile("/3bOGNsHlrswhyW79uvIHH1V43JI.jpg") },
      { name: "Ana de Armas", character: "Marta Cabrera", photo: tmdbProfile("/3lEe2q4xYBgBShNEh33tFrFmMuW.jpg") },
      { name: "Jamie Lee Curtis", character: "Linda Drysdale", photo: tmdbProfile("/roeESMMFMaqqSqCyEZ7aSQkOjHw.jpg") },
      { name: "Toni Collette", character: "Joni Thrombey", photo: tmdbProfile("/wJVAkiDKUxLD2YIdSd0LOXZ5Mvz.jpg") },
    ],
    providers: [
      { name: "Prime Video", logo: "P", type: "stream", color: "#00A8E1" },
      { name: "Netflix", logo: "N", type: "stream", color: "#E50914" },
      { name: "Apple TV+", logo: "A", type: "buy", price: "$14.99", color: "#555" },
    ],
    trailerKey: "xi-1NchUqMA",
  },
  {
    id: "m-20",
    title: "Barbie",
    year: 2023,
    rating: 6.8,
    genres: ["Comedy", "Adventure", "Fantasy"],
    poster: tmdbPoster("/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"),
    backdrop: tmdbBackdrop("/nHf61UzkfFno5X1ofIhugCPus2R.jpg"),
    overview: "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they discover the joys and perils of living among humans.",
    runtime: "1h 54min",
    type: "movie",
    certification: "PG-13",
    director: "Greta Gerwig",
    cast: [
      { name: "Margot Robbie", character: "Barbie", photo: tmdbProfile("/euDPyqLnuwaWMHR6JN0sUzDzPRA.jpg") },
      { name: "Ryan Gosling", character: "Ken", photo: tmdbProfile("/lyUyVARQKhGxaxy0FbPJCQRpiaW.jpg") },
      { name: "America Ferrera", character: "Gloria", photo: tmdbProfile("/bZFOaWNPoiSr6f7sHuXWjBwkVcr.jpg") },
      { name: "Will Ferrell", character: "CEO of Mattel", photo: tmdbProfile("/h9Km2I6u6PJq7s6rl3b0RRVK6Nv.jpg") },
      { name: "Kate McKinnon", character: "Weird Barbie", photo: tmdbProfile("/dJijPiPHdTy0wHOfjHBIE9qj3b3.jpg") },
    ],
    providers: [
      { name: "Max", logo: "M", type: "stream", color: "#002BE7" },
      { name: "Prime Video", logo: "P", type: "rent", price: "$3.99", color: "#00A8E1" },
      { name: "Google Play", logo: "G", type: "buy", price: "$14.99", color: "#0F9D58" },
    ],
    trailerKey: "pBk4NYhWNMM",
  },
];

// ─── Real TV Shows ─────────────────────────────────────────────────────────────

export const allShows: Movie[] = [
  {
    id: "tv-1",
    title: "Breaking Bad",
    year: 2008,
    rating: 9.5,
    genres: ["Crime", "Drama", "Thriller"],
    poster: tmdbPoster("/ggFHVNu6YYI5L9pCfOacjizRGt.jpg"),
    backdrop: tmdbBackdrop("/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg"),
    overview: "A high school chemistry teacher diagnosed with terminal lung cancer turns to manufacturing methamphetamine to secure his family's future.",
    runtime: "48min",
    type: "tv",
    seasons: 5,
    certification: "TV-MA",
    cast: [
      { name: "Bryan Cranston", character: "Walter White", photo: tmdbProfile("/7Jahy5LZX2Fo8fGJltMreAI49hC.jpg") },
      { name: "Aaron Paul", character: "Jesse Pinkman", photo: tmdbProfile("/8Kce1UTHlUe4SzFDf9fmMsMUAB.jpg") },
      { name: "Anna Gunn", character: "Skyler White", photo: tmdbProfile("/adppyeu1a4REN3khtgmXeLMapKF.jpg") },
      { name: "Dean Norris", character: "Hank Schrader", photo: tmdbProfile("/2ciyEPfrt4Fc6TXNQhKqkhLFkWH.jpg") },
      { name: "Betsy Brandt", character: "Marie Schrader", photo: tmdbProfile("/5mNiTCDLz3PS5p1WzDOkDsX7kLU.jpg") },
    ],
    providers: [
      { name: "Netflix", logo: "N", type: "stream", color: "#E50914" },
      { name: "Prime Video", logo: "P", type: "rent", price: "$2.99", color: "#00A8E1" },
    ],
    trailerKey: "HhesaQXLnzI",
  },
  {
    id: "tv-2",
    title: "Stranger Things",
    year: 2016,
    rating: 8.7,
    genres: ["Drama", "Fantasy", "Horror"],
    poster: tmdbPoster("/49WJfeN0moxb9IPfGn8AIqMGskD.jpg"),
    backdrop: tmdbBackdrop("/56v2KjBlYj4dJMBNjYgXPTQSMay.jpg"),
    overview: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
    runtime: "50min",
    type: "tv",
    seasons: 4,
    certification: "TV-14",
    cast: [
      { name: "Millie Bobby Brown", character: "Eleven", photo: tmdbProfile("/3OhSdlMGaGDeIuFghtyBq5XMXOH.jpg") },
      { name: "Finn Wolfhard", character: "Mike Wheeler", photo: tmdbProfile("/5FrVCijVG6I3vXxAVnWlQqoSNXV.jpg") },
      { name: "Winona Ryder", character: "Joyce Byers", photo: tmdbProfile("/5WIZVAzHYvM8PnPg94AjkFkJIsS.jpg") },
      { name: "David Harbour", character: "Jim Hopper", photo: tmdbProfile("/chPekukMF5eTDALQlnWn5gyYwfS.jpg") },
      { name: "Gaten Matarazzo", character: "Dustin Henderson", photo: tmdbProfile("/5fJBJeuxIcOVLi32XI9n8OL1Eq5.jpg") },
    ],
    providers: [
      { name: "Netflix", logo: "N", type: "stream", color: "#E50914" },
    ],
    trailerKey: "b9EkMc79ZSU",
  },
  {
    id: "tv-3",
    title: "The Last of Us",
    year: 2023,
    rating: 8.8,
    genres: ["Action", "Adventure", "Drama"],
    poster: tmdbPoster("/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg"),
    backdrop: tmdbBackdrop("/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg"),
    overview: "Joel and Ellie must survive ruthless killers and monsters on a trek across post-apocalyptic America, where a fungal infection has decimated civilization.",
    runtime: "55min",
    type: "tv",
    seasons: 2,
    certification: "TV-MA",
    cast: [
      { name: "Pedro Pascal", character: "Joel Miller", photo: tmdbProfile("/9VYK7oxcqhjd5LAH6ZFJxsBbpZR.jpg") },
      { name: "Bella Ramsey", character: "Ellie Williams", photo: tmdbProfile("/5DYBhvN0GY1FSOG75oSBIyPcKA7.jpg") },
      { name: "Gabriel Luna", character: "Tommy Miller", photo: tmdbProfile("/8lmkW0hVd1YF4R0OFN0K2zJhk1l.jpg") },
      { name: "Nick Offerman", character: "Bill", photo: tmdbProfile("/i0zFB8bOsYU6eTFHjjBnRiW6J8O.jpg") },
      { name: "Storm Reid", character: "Riley Abel", photo: tmdbProfile("/2iT9Mf4wI1y0PaFGkjj3Mk3lLbY.jpg") },
    ],
    providers: [
      { name: "Max", logo: "M", type: "stream", color: "#002BE7" },
      { name: "Prime Video", logo: "P", type: "rent", price: "$2.99", color: "#00A8E1" },
    ],
    trailerKey: "uLtkt8BonwM",
  },
  {
    id: "tv-4",
    title: "House of the Dragon",
    year: 2022,
    rating: 8.4,
    genres: ["Action", "Adventure", "Drama"],
    poster: tmdbPoster("/z2yahl2uefxDCl0nogcRBstwruJ.jpg"),
    backdrop: tmdbBackdrop("/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg"),
    overview: "The Targaryen dynasty is at the absolute apex of its power, with more than 15 dragons under their yoke. Most combative empires crumble from such heights.",
    runtime: "60min",
    type: "tv",
    seasons: 2,
    certification: "TV-MA",
    cast: [
      { name: "Matt Smith", character: "Daemon Targaryen", photo: tmdbProfile("/fMFQ1HHsHOhNfH3Dw3Nk7INVzf.jpg") },
      { name: "Emma D'Arcy", character: "Rhaenyra Targaryen", photo: tmdbProfile("/xiyxhKNLvKvkJEQAoxbKKqZOIqE.jpg") },
      { name: "Olivia Cooke", character: "Alicent Hightower", photo: tmdbProfile("/p7gkfqJaeXGsaPK5BDblEt8H3Nn.jpg") },
      { name: "Paddy Considine", character: "Viserys Targaryen", photo: tmdbProfile("/jnL2zPBjLkA7xlDHNFb0iH3soAz.jpg") },
      { name: "Rhys Ifans", character: "Otto Hightower", photo: tmdbProfile("/jQsRWxCgJ3gTnI4VpQzkcJ6MSuF.jpg") },
    ],
    providers: [
      { name: "Max", logo: "M", type: "stream", color: "#002BE7" },
      { name: "Prime Video", logo: "P", type: "rent", price: "$2.99", color: "#00A8E1" },
    ],
    trailerKey: "DotnJ7tTA34",
  },
  {
    id: "tv-5",
    title: "Wednesday",
    year: 2022,
    rating: 8.1,
    genres: ["Comedy", "Crime", "Fantasy"],
    poster: tmdbPoster("/9PFonBhy4cQy7Jz20NpMygcYhFY.jpg"),
    backdrop: tmdbBackdrop("/iHSwvRVsNBkA1nMYgDc5sA0uJFq.jpg"),
    overview: "Wednesday Addams is sent to Nevermore Academy, where she attempts to master her psychic ability, thwart a killing spree, and solve the mystery that embroiled her parents 25 years ago.",
    runtime: "45min",
    type: "tv",
    seasons: 2,
    certification: "TV-14",
    cast: [
      { name: "Jenna Ortega", character: "Wednesday Addams", photo: tmdbProfile("/q1NRzyZQlYkjLjwRA1v7PhZ2KcB.jpg") },
      { name: "Catherine Zeta-Jones", character: "Morticia Addams", photo: tmdbProfile("/iyBV4mMuRh7SWIalJvIO1MjF5Le.jpg") },
      { name: "Luis Guzmán", character: "Gomez Addams", photo: tmdbProfile("/pf8TpMa7jWkNMJDsb9dVpMk2hJn.jpg") },
      { name: "Emma Myers", character: "Enid Sinclair", photo: tmdbProfile("/2DjVEDdJ9j8oawjlOGO2ACtbVzv.jpg") },
      { name: "Gwendoline Christie", character: "Larissa Weems", photo: tmdbProfile("/bEMN9W3Gv9vU6a1r8jR2N1Rz2pL.jpg") },
    ],
    providers: [
      { name: "Netflix", logo: "N", type: "stream", color: "#E50914" },
    ],
    trailerKey: "Di310WS8zLk",
  },
  {
    id: "tv-6",
    title: "The Bear",
    year: 2022,
    rating: 8.6,
    genres: ["Comedy", "Drama"],
    poster: tmdbPoster("/sHFllu1VERsLBMos5LdqinMKK4G.jpg"),
    backdrop: tmdbBackdrop("/v5CmoanpKEQ51F8wRpzCqxhNiQG.jpg"),
    overview: "A young chef from the fine dining world returns to Chicago to run his family's sandwich shop after a heartbreaking death in his family.",
    runtime: "30min",
    type: "tv",
    seasons: 3,
    certification: "TV-MA",
    cast: [
      { name: "Jeremy Allen White", character: "Carmen 'Carmy' Berzatto", photo: tmdbProfile("/mXB6Jlj5IfdIZqNfPLlCzxt1mXO.jpg") },
      { name: "Ayo Edebiri", character: "Sydney Adamu", photo: tmdbProfile("/kHKrRJOD5tQ3UXhBWjXVYT72iiI.jpg") },
      { name: "Ebon Moss-Bachrach", character: "Richard 'Richie' Jerimovich", photo: tmdbProfile("/y1F8IkVJVqJEcNcidVjyHlUJDjO.jpg") },
      { name: "Abby Elliott", character: "Natalie 'Sugar' Berzatto", photo: tmdbProfile("/mxFb1pTH0luq6RWTRXlB0so0dXa.jpg") },
      { name: "Lionel Boyce", character: "Marcus Brooks", photo: tmdbProfile("/ipO1hBgJxIddL5k3MXHZz77nQPC.jpg") },
    ],
    providers: [
      { name: "Hulu", logo: "H", type: "stream", color: "#1CE783" },
      { name: "Disney+", logo: "D+", type: "stream", color: "#113CCF" },
    ],
    trailerKey: "y-cqqAJIXhs",
  },
  {
    id: "tv-7",
    title: "Shogun",
    year: 2024,
    rating: 8.7,
    genres: ["Adventure", "Drama", "History"],
    poster: tmdbPoster("/7O4iVfOMQmdCSxhOg1WnzG1AgYT.jpg"),
    backdrop: tmdbBackdrop("/rkO85325TalSXFCr9lAnI2RmGpb.jpg"),
    overview: "In 1600 Japan, a clash of civilizations comes to life in the epic saga of Lord Toranaga and the mysterious English pilot who washes up on Japanese shores.",
    runtime: "60min",
    type: "tv",
    seasons: 1,
    certification: "TV-MA",
    cast: [
      { name: "Hiroyuki Sanada", character: "Lord Yoshii Toranaga", photo: tmdbProfile("/fvesw1JDQ9vboN7GRMK57y8VFPI.jpg") },
      { name: "Cosmo Jarvis", character: "John Blackthorne", photo: tmdbProfile("/gZLrxaAiCyL3i1D3OBNgWxg7A12.jpg") },
      { name: "Anna Sawai", character: "Toda Mariko", photo: tmdbProfile("/oMxJHsC4gXxmIJhMkuNqrphOVey.jpg") },
      { name: "Tadanobu Asano", character: "Kashigi Yabushige", photo: tmdbProfile("/3OhSdlMGaGDeIuFghtyBq5XMXOH.jpg") },
      { name: "Takehiro Hira", character: "Lord Ishido", photo: tmdbProfile("/cPiAqH3mDFUUayMIuSw8vpPH1m9.jpg") },
    ],
    providers: [
      { name: "Hulu", logo: "H", type: "stream", color: "#1CE783" },
      { name: "Disney+", logo: "D+", type: "stream", color: "#113CCF" },
    ],
    trailerKey: "EiPy3MOjcCE",
  },
  {
    id: "tv-8",
    title: "Succession",
    year: 2018,
    rating: 8.8,
    genres: ["Comedy", "Drama"],
    poster: tmdbPoster("/7HW47XbkNQ5fiwQFYGWdw9gs144.jpg"),
    backdrop: tmdbBackdrop("/plp2dIfEBn7ByHPqhLmLGNfCl3r.jpg"),
    overview: "The Roy family — known for controlling the biggest media and entertainment company — is looking for a successor when the aging patriarch begins to step back.",
    runtime: "60min",
    type: "tv",
    seasons: 4,
    certification: "TV-MA",
    cast: [
      { name: "Jeremy Strong", character: "Kendall Roy", photo: tmdbProfile("/j7bWWIPsR4hPJmBDWHgUJ6C6r67.jpg") },
      { name: "Sarah Snook", character: "Siobhan Roy", photo: tmdbProfile("/fX2R5mEIbFJMKTnBOkI8IBDzLek.jpg") },
      { name: "Kieran Culkin", character: "Roman Roy", photo: tmdbProfile("/tNJOWKiO4GjVBmUigFTbIClmLCH.jpg") },
      { name: "Brian Cox", character: "Logan Roy", photo: tmdbProfile("/h3VrK2FEODSYIiHSqLiTQPNOIOU.jpg") },
      { name: "Matthew Macfadyen", character: "Tom Wambsgans", photo: tmdbProfile("/2FF3Yjxd7DYR3yv5dkzGMwN6Wkf.jpg") },
    ],
    providers: [
      { name: "Max", logo: "M", type: "stream", color: "#002BE7" },
      { name: "Prime Video", logo: "P", type: "rent", price: "$2.99", color: "#00A8E1" },
    ],
    trailerKey: "OzYxJV_rmE8",
  },
  {
    id: "tv-9",
    title: "Severance",
    year: 2022,
    rating: 8.7,
    genres: ["Drama", "Mystery", "Sci-Fi"],
    poster: tmdbPoster("/pAT9RI5sIQMaEobyMNNmkJlNIlm.jpg"),
    backdrop: tmdbBackdrop("/bRDDUwETbuE00q3hhoByR4KA2fZ.jpg"),
    overview: "Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives. When a mysterious colleague appears, it begins a journey to discover the truth.",
    runtime: "55min",
    type: "tv",
    seasons: 2,
    certification: "TV-MA",
    cast: [
      { name: "Adam Scott", character: "Mark Scout", photo: tmdbProfile("/4BH6KGhcp1sFk6cYMfBeCqaaSNQ.jpg") },
      { name: "Britt Lower", character: "Helly Riggs", photo: tmdbProfile("/alB1K1dN8SHi4D4ELVm8Eoqacih.jpg") },
      { name: "Zach Cherry", character: "Dylan George", photo: tmdbProfile("/g1NmaN2gOTDDHiGO5NeYQIXDvoy.jpg") },
      { name: "John Turturro", character: "Irving Bailiff", photo: tmdbProfile("/gDisZGvDn22nyQL3BLSxGz8cLqP.jpg") },
      { name: "Patricia Arquette", character: "Harmony Cobel", photo: tmdbProfile("/sFNPuQz5yVwJRCA0IZGVFPiYdfy.jpg") },
    ],
    providers: [
      { name: "Apple TV+", logo: "A", type: "stream", color: "#555" },
    ],
    trailerKey: "xEQP4VVuyrY",
  },
  {
    id: "tv-10",
    title: "Squid Game",
    year: 2021,
    rating: 8.0,
    genres: ["Action", "Drama", "Mystery"],
    poster: tmdbPoster("/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg"),
    backdrop: tmdbBackdrop("/oaGvjB0DvdhXhOAuADfHb261ZHa.jpg"),
    overview: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.",
    runtime: "55min",
    type: "tv",
    seasons: 2,
    certification: "TV-MA",
    cast: [
      { name: "Lee Jung-jae", character: "Seong Gi-hun", photo: tmdbProfile("/gcIIgUoqANPaMbZPxJmMax3L9E6.jpg") },
      { name: "Park Hae-soo", character: "Cho Sang-woo", photo: tmdbProfile("/5mTbeXcQ1nVsJsNoZUGiB2P25W7.jpg") },
      { name: "Wi Ha-joon", character: "Hwang Jun-ho", photo: tmdbProfile("/7ULlhPi4xxNlXk1qBQQmIzP4q99.jpg") },
      { name: "HoYeon Jung", character: "Kang Sae-byeok", photo: tmdbProfile("/cSalI0KZNalfM6p3ZeBbVP7JnBt.jpg") },
      { name: "O Yeong-su", character: "Oh Il-nam", photo: tmdbProfile("/rWqSoKJudCEF9SDvtUNUeWiVrn7.jpg") },
    ],
    providers: [
      { name: "Netflix", logo: "N", type: "stream", color: "#E50914" },
    ],
    trailerKey: "oqxAJKy0ii4",
  },
];

// Combined content
export const trendingMovies = allMovies.slice(0, 6);
export const trendingShows = allShows.slice(0, 6);
export const allContent = [...allMovies, ...allShows];

// Collect unique genres/providers/years from generated data
export const allGenres = [...new Set(allContent.flatMap(m => m.genres))].sort();
export const allProviderNames = [...new Set(allContent.flatMap(m => m.providers.map(p => p.name)))].sort();
export const allYears = [...new Set(allContent.map(m => m.year))].sort((a, b) => b - a);

// ─── Countries ─────────────────────────────────────────────────────────────────

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

// ─── Blog data ─────────────────────────────────────────────────────────────────

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
    excerpt: "From Severance to The Last of Us, science fiction on the small screen has never been better. Here's why.",
    body: `We are living through an unprecedented era of science fiction television.\n\n## Budget Meets Vision\n\nShows like Severance are operating with feature-film budgets.\n\n## Audience Appetite\n\nViewers are hungry for speculative fiction.\n\n## The Creator Renaissance\n\nStreamers are giving showrunners more creative freedom.`,
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

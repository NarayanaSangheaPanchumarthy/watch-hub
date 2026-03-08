import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { Game } from "@/data/sportsData";
import { sportsGames } from "@/data/sportsData";

interface UseLiveScoresOptions {
  sport?: string;
  pollInterval?: number; // ms, default 60s
  enabled?: boolean;
}

export const useLiveScores = ({
  sport = "All",
  pollInterval = 60000,
  enabled = true,
}: UseLiveScoresOptions = {}) => {
  const [apiGames, setApiGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [source, setSource] = useState<"mock" | "api-football">("mock");
  const [error, setError] = useState<string | null>(null);

  const fetchScores = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const { data, error: fnError } = await supabase.functions.invoke(
        "live-scores",
        { body: { sport: sport === "All" ? undefined : sport } }
      );

      if (fnError) {
        console.warn("Edge function error:", fnError);
        setSource("mock");
        return;
      }

      if (data?.success && data.data?.length > 0) {
        // Map API data to our Game interface
        const mapped: Game[] = data.data.map((item: any) => ({
          ...item,
          team1: {
            ...item.team1,
            logo: item.team1.logoUrl
              ? `⚽` // Use emoji fallback; real logos available via logoUrl
              : item.team1.logo,
          },
          team2: {
            ...item.team2,
            logo: item.team2.logoUrl
              ? `⚽`
              : item.team2.logo,
          },
        }));
        setApiGames(mapped);
        setSource(data.source || "api-football");
      } else {
        setSource("mock");
      }
      setLastUpdated(new Date());
    } catch (err) {
      console.warn("Failed to fetch live scores:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch");
      setSource("mock");
    } finally {
      setIsLoading(false);
    }
  }, [sport]);

  useEffect(() => {
    if (!enabled) return;

    fetchScores();
    const interval = setInterval(fetchScores, pollInterval);
    return () => clearInterval(interval);
  }, [fetchScores, pollInterval, enabled]);

  // Merge: API games first, then mock games for sports not covered by API
  const allGames = (() => {
    if (source === "mock" || apiGames.length === 0) {
      return sportsGames;
    }

    // Get sports covered by API
    const apiSports = new Set(apiGames.map((g) => g.sport));

    // Keep mock games for sports NOT covered by API
    const mockFallback = sportsGames.filter((g) => !apiSports.has(g.sport));

    return [...apiGames, ...mockFallback];
  })();

  return {
    games: allGames,
    isLoading,
    lastUpdated,
    source,
    error,
    refetch: fetchScores,
  };
};

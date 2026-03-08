const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { sport } = await req.json();
    const apiKey = Deno.env.get('API_FOOTBALL_KEY');

    if (!apiKey) {
      // Return empty array when no API key configured - frontend falls back to mock data
      console.log('API_FOOTBALL_KEY not configured, returning empty');
      return new Response(
        JSON.stringify({ success: true, data: [], source: 'none' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const results: any[] = [];

    // Fetch live soccer matches
    if (!sport || sport === 'Soccer' || sport === 'All') {
      const soccerRes = await fetch('https://v3.football.api-sports.io/fixtures?live=all', {
        headers: { 'x-apisports-key': apiKey },
      });
      const soccerData = await soccerRes.json();

      if (soccerData.response) {
        for (const match of soccerData.response) {
          results.push({
            id: `api-soccer-${match.fixture.id}`,
            sport: 'Soccer',
            sportIcon: '⚽',
            league: match.league.name,
            team1: {
              name: match.teams.home.name,
              logo: match.teams.home.logo,
              score: match.goals.home ?? 0,
              logoUrl: match.teams.home.logo,
            },
            team2: {
              name: match.teams.away.name,
              logo: match.teams.away.logo,
              score: match.goals.away ?? 0,
              logoUrl: match.teams.away.logo,
            },
            status: 'live' as const,
            date: match.fixture.date?.slice(0, 10) || new Date().toISOString().slice(0, 10),
            time: `${match.fixture.status.elapsed || 0}'`,
            venue: match.fixture.venue?.name || 'Unknown',
            channel: match.league.country || 'International',
            provider: '',
            matchStatus: match.fixture.status.short,
            elapsed: match.fixture.status.elapsed,
          });
        }
      }
    }

    // Fetch today's finished soccer matches
    if (!sport || sport === 'Soccer' || sport === 'All') {
      const today = new Date().toISOString().slice(0, 10);
      const finishedRes = await fetch(
        `https://v3.football.api-sports.io/fixtures?date=${today}&status=FT-AET-PEN`,
        { headers: { 'x-apisports-key': apiKey } }
      );
      const finishedData = await finishedRes.json();

      if (finishedData.response) {
        for (const match of finishedData.response.slice(0, 15)) {
          results.push({
            id: `api-soccer-fin-${match.fixture.id}`,
            sport: 'Soccer',
            sportIcon: '⚽',
            league: match.league.name,
            team1: {
              name: match.teams.home.name,
              logo: match.teams.home.logo,
              score: match.goals.home ?? 0,
              logoUrl: match.teams.home.logo,
            },
            team2: {
              name: match.teams.away.name,
              logo: match.teams.away.logo,
              score: match.goals.away ?? 0,
              logoUrl: match.teams.away.logo,
            },
            status: 'finished' as const,
            date: match.fixture.date?.slice(0, 10) || today,
            time: 'Final',
            venue: match.fixture.venue?.name || 'Unknown',
            channel: match.league.country || 'International',
            provider: '',
          });
        }
      }
    }

    // Fetch upcoming soccer matches (next 24h)
    if (!sport || sport === 'Soccer' || sport === 'All') {
      const today = new Date().toISOString().slice(0, 10);
      const scheduledRes = await fetch(
        `https://v3.football.api-sports.io/fixtures?date=${today}&status=NS`,
        { headers: { 'x-apisports-key': apiKey } }
      );
      const scheduledData = await scheduledRes.json();

      if (scheduledData.response) {
        for (const match of scheduledData.response.slice(0, 15)) {
          const kickoff = new Date(match.fixture.date);
          results.push({
            id: `api-soccer-sch-${match.fixture.id}`,
            sport: 'Soccer',
            sportIcon: '⚽',
            league: match.league.name,
            team1: {
              name: match.teams.home.name,
              logo: match.teams.home.logo,
              logoUrl: match.teams.home.logo,
            },
            team2: {
              name: match.teams.away.name,
              logo: match.teams.away.logo,
              logoUrl: match.teams.away.logo,
            },
            status: 'scheduled' as const,
            date: match.fixture.date?.slice(0, 10) || today,
            time: kickoff.toLocaleTimeString('en-US', {
              hour: 'numeric',
              minute: '2-digit',
              timeZone: 'America/New_York',
            }) + ' ET',
            venue: match.fixture.venue?.name || 'Unknown',
            channel: match.league.country || 'International',
            provider: '',
          });
        }
      }
    }

    console.log(`Returning ${results.length} live/scheduled/finished matches`);

    return new Response(
      JSON.stringify({ success: true, data: results, source: 'api-football' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error fetching live scores:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        data: [],
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

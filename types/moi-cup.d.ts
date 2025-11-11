export interface Fixture {
  id: string;
  team1_id: string;
  team2_id: string;
  date_created: string;
  game_date: string;
  field_id: string;
  referee1_id: string;
  referee2_id: string;
  referee3_id: string;
  referee4_id: string;
  system_user_id: string;
  team1_name: string;
  team2_name: string;
  status: string;
  team1_coach: null;
  team2_coach: null;
  game_status: string;
  agent_id: null;
  minute: string;
  second: string;
  game_moment: string;
  league: string;
  last_localid: string;
  home_score: string;
  away_score: string;
  winner: null;
  matchday: string;
  fixture_type: string;
  live: string;
  teamview: string;
  series: string;
  start_app: string;
  hybrid: string;
  hybridhome: null;
  hybridaway: null;
  lite: string;
  pitchname: string;
  category: string;
  groupname: string;
  matchtime: string;
}

export type GroupedFixtures = {
  [date: string]: {
    [category: string]: {
      [group: string]: Fixture[];
    };
  };
};

export interface Tournament {
  id: string;
  name: string;
  date_created: string;
  fixture_type: string;
  created_by: string;
  date_updated: string;
  date_from: string | null;
  date_to: string | null;
  status: string;
  is_competitive: string;
  leaguelogo: null | string;
}

export interface TeamStanding {
  team: string;
  P: number;
  W: number;
  D: number;
  L: number;
  GF: number;
  GA: number;
  GD: number;
  Pts: number;
  live: null;
}

export interface Group {
  groupname: string;
  fixtures_count: number;
  standings: TeamStanding[];
}

export interface Category {
  category: string;
  groups: Group[];
}

export interface Standing {
  tournament_id: string;
  tournament: Tournament;
  series_id: string;
  categories: Category[];
}

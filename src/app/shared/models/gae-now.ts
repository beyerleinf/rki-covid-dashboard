export interface GAENow {
  current_totals: CurrentTotals;
  meta: Meta;
}

export interface CurrentTotals {
  cases: number;
  deaths: number;
  recovered: number;
  tested: string;
}

export interface Meta {
  source: string;
  info: string;
  contact: string;
  time_source_last_updated_iso8601: string;
  time_source_last_consulted_iso8601: string;
}

export interface GAETimeseries {
  data: { [key: string]: number }[];
  meta: Meta;
}

export interface Meta {
  info: string;
  source: string;
}

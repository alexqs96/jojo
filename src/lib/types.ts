export type SeasonsType = {
  episodes: number
  name: string
  season: number
  slug: string
};

export type EpisodesType = {
  episode: number
  link: string
  season: string
};

export type MangaType = {
  part: number
  link: string
  slug: string
  title: string
  year: string
  lang: string
  size: string
  color: string
  info: string
};

export type MangasType = {
  part: number
  name: string
  slug: string
};
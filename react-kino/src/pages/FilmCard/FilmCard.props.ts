// Generated TypeScript interface
// Created with DivMagic JSON to TypeScript converter

export interface JsonInterfaceShort {
  "@context": string;
  "@type": string;
  url: string;
  name: string;
  image: string;
  description: string;
  aggregateRating: JsonInterfaceShortAggregateRating;
  genre: string[];
  datePublished: string;
  actor: JsonInterfaceShortItem0[];
  director: JsonInterfaceShortItem1[];
  creator: JsonInterfaceShortItem2[];
}

interface JsonInterfaceShortAggregateRating {
  "@type": string;
  ratingCount: number;
  bestRating: number;
  worstRating: number;
  ratingValue: number;
}

interface JsonInterfaceShortItem0 {
  "@type": string;
  url: string;
  name: string;
}

interface JsonInterfaceShortItem1 {
  "@type": string;
  url: string;
  name: string;
}

interface JsonInterfaceShortItem2 {
  "@type": string;
  url: string;
}

export interface FilmCardProps {
  short: JsonInterfaceShort;
}

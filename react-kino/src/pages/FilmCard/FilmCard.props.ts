// Generated TypeScript interface
// Created with DivMagic JSON to TypeScript converter

export interface JsonInterfaceShort {
  '@context': string;
  '@type': string;
  url: string;
  name: string;
  image: string;
  description: string;
  review: JsonInterfaceShortReview;
  aggregateRating: JsonInterfaceShortAggregateRating;
  contentRating: string;
  genre: string[];
  datePublished: string;
  keywords: string;
  trailer: JsonInterfaceShortTrailer;
  actor: JsonInterfaceShortItem0[];
  director: JsonInterfaceShortItem1[];
  creator: JsonInterfaceShortItem2[];
  duration: string;
}

interface JsonInterfaceShortAggregateRating {
  '@type': string;
  ratingCount: number;
  bestRating: number;
  worstRating: number;
  ratingValue: number;
}

interface JsonInterfaceShortItem0 {
  '@type': string;
  url: string;
  name: string;
}

interface JsonInterfaceShortItem1 {
  '@type': string;
  url: string;
  name: string;
}

interface JsonInterfaceShortItem2 {
  '@type': string;
  url: string;
}

interface JsonInterfaceShortReview {
  '@type': string;
  itemReviewed: JsonInterfaceShortReviewItemReviewed;
  author: JsonInterfaceShortReviewAuthor;
  dateCreated: string;
  inLanguage: string;
  name: string;
  reviewBody: string;
  reviewRating: JsonInterfaceShortReviewReviewRating;
}

interface JsonInterfaceShortReviewAuthor {
  '@type': string;
  name: string;
}

interface JsonInterfaceShortReviewItemReviewed {
  '@type': string;
  url: string;
}

interface JsonInterfaceShortReviewReviewRating {
  '@type': string;
  worstRating: number;
  bestRating: number;
  ratingValue: number;
}

interface JsonInterfaceShortTrailer {
  '@type': string;
  name: string;
  embedUrl: string;
  thumbnail: JsonInterfaceShortTrailerThumbnail;
  thumbnailUrl: string;
  url: string;
  description: string;
  duration: string;
  uploadDate: string;
}

interface JsonInterfaceShortTrailerThumbnail {
  '@type': string;
  contentUrl: string;
}

export interface JsonInterface {
  short: JsonInterfaceShort;
}
export type Comment = {
comment: string,
date: string,
id: number,
rating: number
user: {
  'avatar_url': string,
  id: number,
  'is_pro': boolean,
  name: string,
}
}

export type Comments = Comment[];

export type offersMocks = {
  bedrooms: number;
  city: {
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    }
    name: string;
  }
  description: string;
  goods: string[];
  host: {
    'avatar_url': string;
    id: number;
    isPro: boolean;
    name: string;
  }
  id: number;
  images: string[];
  isFavorite: boolean;
  'is_premium': boolean;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  }
  'max_adults': number;
  'preview_image': string;
  price: number;
  rating: number;
  title: string;
  type: string
}

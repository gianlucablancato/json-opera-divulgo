type coords = { lat: number; lng: number };

type address = {
  name: string;
  category: string;
  confidenceScore: number;
};

type character = {
  name: string;
  category: string;
  confidenceScore: number;
  info?: string;
};

type date = {
  name: string;
  category: string;
  subcategory: string;
  confidenceScore: number;
};

type event = {
  name: string;
  category: string;
  subcategory?: string;
  confidenceScore: number;
};

type location = {
  name: string;
  type: string;
  category: string;
  subcategory?: string;
  confidenceScore: number;
  localityType?: string;
  countryCode?: string;
  countryName?: string;
  state?: string;
  countyCode?: string;
  county?: string;
  city?: string;
  postalCode?: string;
  coordinates?: [number, number];
};

type organization = {
  name: string;
  category: string;
  subcategory?: string;
  confidenceScore: number;
};

type role = {
  name: string;
  category: string;
  confidenceScore: number;
};

type jsonOpera = {
  addresses: address[];
  characters: character[];
  dates: date[];
  events: event[];
  images: string[];
  locations: location[];
  organizations: organization[];
  roles: role[];
  text: {
    tweetId: string;
    it: string;
    eng?: string;
  };
};

type twitterPost = {
  text: string;
  id: string;
  attachments: {
    media_keys: string[];
  };
};

type media = {
  media_key: string;
  url: string;
  type: string;
};

type tweetsPage = {
  posts: twitterPost[];
  medias: media[];
  token: string;
};

type parsedTwitterJson = {
  posts: twitterPost[];
  medias: media[];
};

type entity = {
  text: string;
  category: string;
  subcategory?: string;
  offset: number;
  length: number;
  confidenceScore: number;
};
export {
  jsonOpera,
  coords,
  location,
  twitterPost,
  media,
  tweetsPage,
  parsedTwitterJson,
  entity,
};

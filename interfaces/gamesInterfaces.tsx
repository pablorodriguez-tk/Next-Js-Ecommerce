export interface Games {
  data: GameList[];
  status: number;
  statusText: string;
  headers: Headers;
  config: Config;
  request: Request;
}

export interface Config {
  url: string;
  method: string;
  headers: Request;
  transformRequest: null[];
  transformResponse: null[];
  timeout: number;
  xsrfCookieName: string;
  xsrfHeaderName: string;
  maxContentLength: number;
  maxBodyLength: number;
}

export interface Request {}

export interface GameList {
  screenshots: Poster[];
  _id: string;
  discount: number;
  summary: string;
  price: number;
  url: string;
  releaseDate: string;
  title: string;
  video: string;
  published_at: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  platform: Platform;
  poster: Poster;
  id: string;
}

export interface Platform {
  _id: ID;
  title: Title;
  url: URL;
  position: number;
  published_at: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: ID;
}

export enum ID {
  The60D90B2B5D298B4Bb4F7A96A = '60d90b2b5d298b4bb4f7a96a',
  The60D90B825D298B4Bb4F7A96C = '60d90b825d298b4bb4f7a96c',
}

export enum Title {
  Playstation = 'Playstation',
  Switch = 'Switch',
}

export enum URL {
  Playstation = 'playstation',
  Switch = 'switch',
}

export interface Poster {
  _id: string;
  name: string;
  alternativeText: string;
  caption: string;
  hash: string;
  ext: EXT;
  mime: MIME;
  size: number;
  width: number;
  height: number;
  url: string;
  formats: Formats;
  provider: Provider;
  related: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

export enum EXT {
  JPEG = '.jpeg',
  Jpg = '.jpg',
  PNG = '.png',
}

export interface Formats {
  thumbnail: Large;
  small?: Large;
  large?: Large;
  medium?: Large;
}

export interface Large {
  name: string;
  hash: string;
  ext: EXT;
  mime: MIME;
  width: number;
  height: number;
  size: number;
  path: null;
  url: string;
}

export enum MIME {
  ImageJPEG = 'image/jpeg',
  ImagePNG = 'image/png',
}

export enum Provider {
  AwsS3 = 'aws-s3',
}

export interface Headers {
  'content-length': string;
  'content-type': string;
}

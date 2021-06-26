// Generated by https://quicktype.io

export interface Response {
  data: Data;
  status: number;
  statusText: string;
  headers: ResponseHeaders;
  config: Config;
  request: Request;
}

export interface Config {
  url: string;
  method: string;
  data: string;
  headers: ConfigHeaders;
  transformRequest: null[];
  transformResponse: null[];
  timeout: number;
  xsrfCookieName: string;
  xsrfHeaderName: string;
  maxContentLength: number;
  maxBodyLength: number;
}

export interface ConfigHeaders {
  Accept: string;
  'Content-Type': string;
}

export interface Data {
  jwt: string;
  user: User;
}

export interface User {
  confirmed: boolean;
  blocked: boolean;
  _id: string;
  name: string;
  lastname: string;
  username: string;
  email: string;
  provider: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  role: Role;
  id: string;
}

export interface Role {
  _id: string;
  name: string;
  description: string;
  type: string;
  __v: number;
  id: string;
}

export interface ResponseHeaders {
  'content-length': string;
  'content-type': string;
}

export interface Request {}

// Generated by https://quicktype.io

export interface ResponseGetMeAPI {
  confirmed: boolean;
  blocked: boolean;
  _id: string;
  name: string;
  lastname: string;
  username: string;
  email: string;
  provider: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  role: Role2;
  id: string;
}

export interface Role2 {
  _id: string;
  name: string;
  description: string;
  type: string;
  __v: number;
  id: string;
}
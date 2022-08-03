export enum AppRoute {
  SignIn = '/login',
  Main = '/',
  Room = '/offer/:id',
  Favorites = '/favorites',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum Time {
  Minutes = 60,
  Seconds = 60,
  ValueForTime = 10,
  TimeForMouseOver = 1000,
  RequestTimeout = 5000,
  InitialValueTime = 0,
}

export enum ErrorRoute {
  PageNotFound = 404,
  ErrorNoAuth = 401,
}

export const AUTH_TOKEN_KEY_NAME = 'user-token';



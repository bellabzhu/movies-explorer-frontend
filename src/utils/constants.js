const BASE_URL_MAIN = 'https://api.bella.nomoredomains.monster';
const BASE_URL_MOVIES = 'https://api.nomoreparties.co';

export const apiConfigMain = {
  baseUrl: BASE_URL_MAIN,
  headers: {
    Accept: "application/json",
    'Content-Type': 'application/json'
  },
  signIn: `${BASE_URL_MAIN}/signin`,
  signUp: `${BASE_URL_MAIN}/signup`,
  logout: `${BASE_URL_MAIN}/logout`,
  user: `${BASE_URL_MAIN}/users/me`,
  movies: `${BASE_URL_MAIN}/movies`,
};

export const apiConfigMovies = {
  baseUrl: BASE_URL_MOVIES,
  headers: {
    Accept: "application/json",
    'Content-Type': 'application/json'
  },
  movies: `${BASE_URL_MOVIES}/beatfilm-movies`,
};
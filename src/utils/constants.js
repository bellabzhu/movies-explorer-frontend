const BASE_URL_MAIN = 'https://api.bella.nomoredomains.monster';
export const BASE_URL_MOVIES = 'https://api.nomoreparties.co';

export const apiConfigMain = {
  headers: {
    Accept: "application/json",
    'Content-Type': 'application/json'
  },
  signIn: `${BASE_URL_MAIN}/signin`,
  signUp: `${BASE_URL_MAIN}/signup`,
  signOut: `${BASE_URL_MAIN}/signOut`,
  user: `${BASE_URL_MAIN}/users/me`,
  movies: `${BASE_URL_MAIN}/movies`,
};

export const apiConfigMovies = {
  headers: {
    Accept: "application/json",
    'Content-Type': 'application/json'
  },
  movies: `${BASE_URL_MOVIES}/beatfilm-movies`,
};

export const REG_EMAIL = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
export const REG_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
export const REG_NAME = /^[a-zA-ZА-Яа-яЁё'\- ]{2,}$/
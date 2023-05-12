const baseUrlMain = 'https://api.bella.nomoredomains.monster';
const baseUrlMovies = 'https://api.nomoreparties.co';

export const apiConfigMain = {
  baseUrl: baseUrlMain,
  headers: {
    Accept: "application/json",
    'Content-Type': 'application/json'
  },
  signIn: `${baseUrlMain}/signin`,
  signUp: `${baseUrlMain}/signup`,
  logout: `${baseUrlMain}/logout`,
  user: `${baseUrlMain}/users/me`,
  movies: `${baseUrlMain}/movies`,
};

export const apiConfigMovies = {
  baseUrl: baseUrlMovies,
  headers: {
    Accept: "application/json",
    'Content-Type': 'application/json'
  },
  movies: `${baseUrlMovies}/beatfilm-movies`,
};
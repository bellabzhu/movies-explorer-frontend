import { apiConfigMain, BASE_URL_MOVIES } from "./constants";
import { checkResponse } from "./checkResponse";

export const getUserInfo = async () => {
  const res = await fetch(apiConfigMain.user, {
    headers: apiConfigMain.headers,
    credentials: 'include',
  });
  return checkResponse(res);
};

export const signUp = async ({ name, email, password }) => {
  const res = await fetch(apiConfigMain.signUp, {
    method: 'POST',
    headers: apiConfigMain.headers,
    body: JSON.stringify({
      name: `${name}`,
      password: `${password}`,
      email: `${email}`
    }),
    credentials: 'include',
  });
  return checkResponse(res);
};

export const signIn = async ({ email, password }) => {
  const res = await fetch(apiConfigMain.signIn, {
    method: 'POST',
    headers: apiConfigMain.headers,
    body: JSON.stringify({
      password: `${password}`,
      email: `${email}`
    }),
    credentials: 'include',
  });
  return checkResponse(res);
};

export const signOut = async () => {
  const res = await fetch(apiConfigMain.signOut, {
    method: 'DELETE',
    headers: apiConfigMain.headers,
    credentials: 'include',
  });
  return checkResponse(res);
};

export const editProfile = async ({ name, email }) => {
  const res = await fetch(apiConfigMain.user, {
    method: 'PATCH',
    headers: apiConfigMain.headers,
    body: JSON.stringify({
      name: `${name}`,
      email: `${email}`
    }),
    credentials: 'include',
  });
  return checkResponse(res); 
};

export const getFavMovies = async () => {
  const res = await fetch(apiConfigMain.movies, {
    headers: apiConfigMain.headers,
    credentials: 'include',
  });
  return checkResponse(res);
};

export const likeMovie = async (movie) => {
  const { country, director, duration, year, description, nameRU, nameEN, trailerLink } = movie;
  const image = BASE_URL_MOVIES + movie.image.url;
  const thumbnail = BASE_URL_MOVIES + movie.image.formats.thumbnail.url;
  const id = movie.id;
  const res = await fetch(apiConfigMain.movies, {
    method: 'POST',
    headers: apiConfigMain.headers,
    body: JSON.stringify({
      country,
      director,
      duration,
      year,
      description,
      nameRU,
      nameEN,
      trailerLink,
      image,
      thumbnail,
      id,
    }),
    credentials: 'include',
  });
  return checkResponse(res);
};

export const dislikeMovie = async (id) => {
  const res = await fetch(`${apiConfigMain.movies}/${id}`, {
    method: 'DELETE',
    headers: apiConfigMain.headers,
    credentials: 'include',
  });
  return checkResponse(res); 
};
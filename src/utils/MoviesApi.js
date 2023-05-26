import { apiConfigMovies } from "./constants";
import { checkResponse } from "./checkResponse";

export const getMovies = async () => {
    const res = await fetch(apiConfigMovies.movies, {
      headers: apiConfigMovies.headers,
    });
    return checkResponse(res);
};
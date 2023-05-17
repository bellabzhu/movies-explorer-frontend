export const filterMovies = (movies, searchParams, isShortFilmsIncluded) => {
  if (!isShortFilmsIncluded) {
    movies.filter(({ duration }) => duration <= 40);
  };
  // фильтруем по ключевым словам далее
  const searchResult = [];
  return searchResult;
};
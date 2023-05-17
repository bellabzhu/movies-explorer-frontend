export const filterMovies = (movies, searchParams, setSearchError) => {
  if (!searchParams.isShortFilmsIncluded) {
    movies.filter(({ duration }) => duration <= 40);
  };

  // если ничего не найдено, то 
  // setSearchError({ isError: true, text: 'Ничего не найдено'})

  // фильтруем по ключевым словам далее
  const searchResult = [];
  return searchResult;
};
export const filterMovies = (movies, searchParams, setSearchError) => {

  const searchResult = movies.filter(movie => movie.nameRU.toLowerCase().includes(searchParams.keywords.toLowerCase()));
  localStorage.setItem('movies', JSON.stringify(searchResult));

  if (searchResult.length < 1) {
    setSearchError({ isError: true, text: 'Ничего не найдено' });
    return searchResult;
  };

  if (searchParams.isShortFilm) {
    const filterResult = searchResult.filter(({ duration }) => duration <= 40);
    setSearchError(filterResult < 1 ? { isError: true, text: 'Ничего не найдено' } : { isError: false, text: '' });
    return filterResult;
  };

  setSearchError({ isError: false, text: '' });
  return searchResult;
};
import { useEffect, useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { filterMovies } from '../../utils/filterMovies';
import './SavedMovies.css';

function SavedMovies ({
    searchError, 
    setSearchError, 
    savedMovies, 
    onLike, 
    onDislike,
    isLoading, 
    isSubmiting 
  }) {

  const [renderedMovies, setRenderedMovies] = useState([]);

  // поиск по избранным без обращения к серверу
  const onSearchSaved = (searchParams) => {
    const filterResult = filterMovies(savedMovies, searchParams, setSearchError);
    setRenderedMovies(filterResult);
  };

  // при монтировании компонента всегда показываем все избранные фильмы
  useEffect(() => {
    setRenderedMovies(savedMovies);
  }, []);

  useEffect(() => {
    setRenderedMovies(savedMovies);
  }, [savedMovies]);
  
  return(
    <>
      <Header 
        place="saved"
        isLoggedIn={true}
      />
      <main>
        <SearchForm
          onSearch={onSearchSaved} 
          isGlobalSearch={false}
          setSearchError={setSearchError}
          isSubmiting={isSubmiting}
        />
        <MoviesCardList 
          movies={renderedMovies}
          searchError={searchError}
          onDislike={onDislike}
          onLike={onLike}
          savedMovies={savedMovies}
          isLoading={isLoading}
          isSubmiting={isSubmiting}
          place="saved"
        />
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;
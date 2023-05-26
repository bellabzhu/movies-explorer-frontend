import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';

function Movies ({ 
    onSearch,
    savedMovies, 
    searchedMovies, 
    searchError, 
    setSearchError, 
    onLike, 
    onDislike, 
    isLoading, 
    isSubmiting 
  }) {

  return (
    <>
      <Header 
        place="movies"
        isLoggedIn={true}
      />
      <main>
        <SearchForm 
          onSearch={onSearch}
          isGlobalSearch={true}
          setSearchError={setSearchError}
          isSubmiting={isSubmiting}
        />
        <MoviesCardList 
          movies={searchedMovies}
          searchError={searchError}
          onDislike={onDislike}
          onLike={onLike}
          savedMovies={savedMovies}
          isLoading={isLoading}
          isSubmiting={isSubmiting}
        />
      </main>
      <Footer />
    </>
  );
};

export default Movies;
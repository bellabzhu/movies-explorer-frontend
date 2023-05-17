import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';

function Movies ({ onSearch, searchedMovies, searchError }) {
  return (
    <>
      <Header 
        place="movies"
        isLoggedIn={true}
      />
      <main>
        <SearchForm 
          onSearch={onSearch} 
          searchError={searchError} 
        />
        <MoviesCardList 
          searchedMovies={searchedMovies}
          searchError={searchError}
        />
      </main>
      <Footer />
    </>
  );
};

export default Movies;
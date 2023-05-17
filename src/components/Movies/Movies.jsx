import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';

function Movies ({ onSearch, searchedMovies, searchError, onLike, onDislike }) {
  return (
    <>
      <Header 
        place="movies"
        isLoggedIn={true}
      />
      <main>
        <SearchForm 
          onSearch={onSearch}
        />
        <MoviesCardList 
          movies={searchedMovies}
          searchError={searchError}
          onDislike={onDislike}
          onLike={onLike}
        />
      </main>
      <Footer />
    </>
  );
};

export default Movies;
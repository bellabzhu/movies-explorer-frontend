import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';

function Movies ({ onSearch, searchedMovies }) {
  return (
    <>
      <Header 
        place="movies"
        isLoggedIn={true}
      />
      <main>
        <SearchForm onSearch={onSearch} />
        <MoviesCardList searchedMovies={searchedMovies} />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
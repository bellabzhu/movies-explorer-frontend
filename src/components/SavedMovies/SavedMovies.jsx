import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import './SavedMovies.css';
import Footer from '../Footer/Footer';

function SavedMovies ({ onSearch, searchError, savedMovies, onLike, onDislike }) {

  return(
    <>
      <Header 
        place="saved"
        isLoggedIn={true}
      />
      <main>
        <SearchForm
          onSearch={onSearch} 
        />
        <MoviesCardList 
          movies={savedMovies}
          searchError={searchError}
          onDislike={onDislike}
          onLike={onLike}
        />
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import './SavedMovies.css';
import Footer from '../Footer/Footer';

function SavedMovies ({ onSearch, searchError, setSearchError, savedMovies, onLike, onDislike, searchSavedMovies, isLoading }) {


  return(
    <>
      <Header 
        place="saved"
        isLoggedIn={true}
      />
      <main>
        <SearchForm
          onSearch={onSearch} 
          isGlobalSearch={false}
          setSearchError={setSearchError}
        />
        <MoviesCardList 
          movies={savedMovies}
          searchError={searchError}
          onDislike={onDislike}
          onLike={onLike}
          savedMovies={searchSavedMovies ? searchSavedMovies : savedMovies}
          isLoading={isLoading}
        />
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;
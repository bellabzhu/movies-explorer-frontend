import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import './SavedMovies.css';
import Footer from '../Footer/Footer';

function SavedMovies ({ searchError }) {
  return(
    <>
      <Header 
        place="saved"
        isLoggedIn={true}
      />
      <main>
        <SearchForm searchError={searchError} />
        <MoviesCardList />
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;
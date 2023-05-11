import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import './SavedMovies.css';
import Footer from '../Footer/Footer';

function SavedMovies () {
  return(
    <>
      <Header 
        place="saved" 
      />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </>
  )
}

export default SavedMovies;
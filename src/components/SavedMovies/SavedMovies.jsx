import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import './SavedMovies.css';
import Footer from '../Footer/Footer';
import { filterMovies } from '../../utils/filterMovies';
import { useState } from 'react';

function SavedMovies ({ onSearch, searchError, savedMovies, onLike, onDislike, searchSavedMovies }) {


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
        />
        <MoviesCardList 
          movies={savedMovies}
          searchError={searchError}
          onDislike={onDislike}
          onLike={onLike}
          savedMovies={searchSavedMovies ? searchSavedMovies : savedMovies}
        />
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;
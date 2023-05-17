import MoviesCard from '../MoviesCard/MovieCard';
import './MoviesCardList.css';

function MoviesCardList ({ searchedMovies }) {

  
  return(
    <section className="movies-list">
      <ul className="movies-list__container">
      {searchedMovies.length > 0 && searchedMovies.map((movie) => {
        return <MoviesCard 
          key={movie.id}
          movie={movie}
          isSaved={true}
        />
        })}
      </ul>
    </section>
  )
}

export default MoviesCardList;
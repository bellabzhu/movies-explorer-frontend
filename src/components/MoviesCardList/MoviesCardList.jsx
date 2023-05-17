import MoviesCard from '../MoviesCard/MovieCard';
import './MoviesCardList.css';

function MoviesCardList ({ searchedMovies, searchError }) {
  console.log(searchError)
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
        {searchError.isError && 
            <p className="movies-list__error">{searchError.text}</p>
        }
      </ul>
    </section>
  )
}

export default MoviesCardList;
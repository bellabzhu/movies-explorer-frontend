import MoviesCard from '../MoviesCard/MovieCard';
import { useState, useEffect } from 'react';
import './MoviesCardList.css';
import BtnSubmit from '../UI/BtnSubmit/BtnSubmit';

function MoviesCardList ({ searchedMovies, searchError }) {

  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const [renderedMovies, setRenderedMovies] = useState({
    renderItemsCount: 5,
    renderMoreCount: 2,
    movies: searchedMovies
  });

  const checkScreenSize = () => {
    const width = window.screen.width;
    if (width > 1096) {
      setRenderedMovies({...renderedMovies, renderItemsCount: 12, renderMoreCount: 3 });
    } else if (width > 684) {
      setRenderedMovies({...renderedMovies, renderItemsCount: 8, renderMoreCount: 2 });
    } else {
      setRenderedMovies({ ...renderedMovies, renderItemsCount: 5, renderMoreCount: 2 });
    };
  };

  const handleLoadMore = () => {
    const newCount = renderedMovies.renderItemsCount += renderedMovies.renderMoreCount;
    setRenderedMovies({...renderedMovies, renderItemsCount: newCount });
  };

  useEffect(() => {
    checkScreenSize(screenWidth);
  }, []);

  useEffect(() => {
    setRenderedMovies({...renderedMovies, movies: searchedMovies});
  }, [searchedMovies]);

  useEffect(() => {
    window.addEventListener('resize', checkScreenSize);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, [screenWidth, searchedMovies]);

  console.log(searchedMovies, 'searchedMovies');
  console.log(renderedMovies.movies, 'renderedMovies.movies');

  return(
    <section className="movies-list">
      <ul className="movies-list__container">
        {renderedMovies.movies && renderedMovies.movies.slice(0, renderedMovies.renderItemsCount).map((movie) => {
          return <MoviesCard 
                  key={movie.id}
                  movie={movie}
                  isSaved={true}
                />
        })}
      </ul>
      <div className="movies-list__info-container">
        {searchError.isError && 
          <p className="movies-list__error">{searchError.text}</p>
        }
        {searchedMovies.length > renderedMovies.renderItemsCount && 
          <BtnSubmit 
            onSubmit={handleLoadMore} 
            isBtnDisabled={false}
            submitBtnText="Загрузить еще"
          />
        }
      </div>
    </section>
  )
}

export default MoviesCardList;
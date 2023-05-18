import MoviesCard from '../MoviesCard/MovieCard';
import { useState, useEffect } from 'react';
import './MoviesCardList.css';
import BtnSubmit from '../UI/BtnSubmit/BtnSubmit';

function MoviesCardList ({ movies, savedMovies, searchError, onLike, onDislike }) {

  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const [renderedMovies, setRenderedMovies] = useState({
    renderItemsCount: 5,
    renderMoreCount: 2,
    movies: movies,
  });

  const checkScreenSize = () => {
    const width = window.screen.width;
    if (width > 1095) {
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
    setRenderedMovies({...renderedMovies, movies: movies});
  }, [movies]);

  useEffect(() => {
    checkScreenSize(screenWidth);
    window.addEventListener('resize', checkScreenSize);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return(
    <section className="movies-list">
      <ul className="movies-list__container">
        {renderedMovies.movies && renderedMovies.movies.slice(0, renderedMovies.renderItemsCount).map((movie) => {
          return <MoviesCard 
                  key={movie.id}
                  movie={movie}
                  onLike={onLike}
                  onDislike={onDislike}
                  savedMovies={savedMovies}
                />
        })}
      </ul>
      <div className="movies-list__info-container">
        {searchError.isError && 
          <p className="movies-list__error">{searchError.text}</p>
        }
        {movies.length > renderedMovies.renderItemsCount && 
          <BtnSubmit 
            onSubmit={handleLoadMore} 
            isBtnDisabled={false}
            submitBtnText="Загрузить еще"
          />
        }
      </div>
    </section>
  );
};

export default MoviesCardList;